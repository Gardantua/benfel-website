"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Trophy, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const SNACKS = [
  { id: "krevia-classic",   name: "Krevia Classic",      slug: "krevia-classic",      image: "/images/products/krevia_classic.png",      points: 10 },
  { id: "krevia-mosaic",    name: "Krevia Mosaic",       slug: "krevia-mosaic",       image: "/images/products/krevia_mosaic.png",       points: 10 },
  { id: "krevia-dark",      name: "Krevia Dark",         slug: "krevia-dark",         image: "/images/products/krevia_dark.png",         points: 15 },
  { id: "krevia-espresso",  name: "Krevia Espresso",     slug: "krevia-espresso",     image: "/images/products/krevia_espresso.png",     points: 15 },
  { id: "tilento-cocoa",    name: "Tilento Cocoa",       slug: "tilento-cocoa",       image: "/images/products/tilento_cocoa.png",       points: 10 },
  { id: "tilento-vanilla",  name: "Tilento Vanilla",     slug: "tilento-vanilla",     image: "/images/products/tilento_vanilla.png",     points: 10 },
  { id: "veloria-cocoa",    name: "Veloria Cocoa",       slug: "veloria-cocoa",       image: "/images/products/veloria_cocoa.png",       points: 15 },
  { id: "veloria-dark",     name: "Veloria Dark",        slug: "veloria-dark",        image: "/images/products/veloria_dark.png",        points: 15 },
  { id: "veloria-vanilla",  name: "Veloria Vanilla",     slug: "veloria-vanilla",     image: "/images/products/veloria_vanilla.png",     points: 15 },
  { id: "veloria-cocoa2",   name: "Veloria Cocoa 2",     slug: "veloria-cocoa2",      image: "/images/products/veloria_cocoa2.png",      points: 15 },
  { id: "veloria-coconut",  name: "Veloria Coconut",     slug: "veloria-coconut",     image: "/images/products/veloria_coconut.png",     points: 20 },
  { id: "veloria-dark2",    name: "Veloria Dark 2",      slug: "veloria-dark2",       image: "/images/products/veloria_dark2.png",       points: 20 },
  { id: "veloria-whitecocoa", name: "Veloria White Cocoa", slug: "veloria-whitecocoa", image: "/images/products/veloria_whitecocoa.png", points: 20 },
  { id: "cremora",          name: "Cremora",             slug: "cremora",             image: "/images/products/cremora.png",             points: 25 },
  { id: "tahera",           name: "Tahera",              slug: "tahera",              image: "/images/products/tahera.png",              points: 25 },
  { id: "berriva",          name: "Berriva",             slug: "berriva",             image: "/images/products/berriva.png",             points: 30 },
];

// Score milestone messages
const MILESTONES = [
  { score: 100, message: "Aslan Tadına Baktı!", emoji: "😋" },
  { score: 200, message: "Aslan Atıştırdı!", emoji: "😄" },
  { score: 300, message: "Aslan Doydu!", emoji: "🤩" },
  { score: 400, message: "Aslan Tıka Basa Doydu!", emoji: "👑" },
];

interface FallingSnack {
  id: number;
  snack: (typeof SNACKS)[number];
  x: number;
  y: number;
  speed: number;
  rotation: number;
}

interface CaughtSnack {
  name: string;
  count: number;
  slug: string;
  image: string;
}

type GameState = "menu" | "playing" | "gameover";

const LION_WIDTH = 90;
const LION_HEIGHT = 90;
const SNACK_SIZE = 55;
const GAME_AREA_BOTTOM_PADDING = 24;

// Stamina config
const MAX_STAMINA = 100;
const STAMINA_DRAIN_PER_PX = 0.8; // drain per % moved
const STAMINA_REGEN_RATE = 1.2; // regen per frame when not moving

export function LionCatcherGame() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lionX, setLionX] = useState(50);
  const [fallingSnacks, setFallingSnacks] = useState<FallingSnack[]>([]);
  const [caughtSnacks, setCaughtSnacks] = useState<Map<string, CaughtSnack>>(new Map());
  const [showCatch, setShowCatch] = useState<{ x: number; points: number } | null>(null);
  const [stamina, setStamina] = useState(MAX_STAMINA);
  const [milestoneMsg, setMilestoneMsg] = useState<{ message: string; emoji: string } | null>(null);

  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);
  const snackIdRef = useRef(0);
  const snacksRef = useRef<FallingSnack[]>([]);
  const scoreRef = useRef(0);
  const lionXRef = useRef(50);
  const gameStateRef = useRef<GameState>("menu");
  const speedMultiplierRef = useRef(1);
  const staminaRef = useRef(MAX_STAMINA);
  const lastLionXRef = useRef(50);
  const isMovingRef = useRef(false);
  const shownMilestonesRef = useRef<Set<number>>(new Set());

  useEffect(() => { lionXRef.current = lionX; }, [lionX]);
  useEffect(() => { gameStateRef.current = gameState; }, [gameState]);
  useEffect(() => {
    scoreRef.current = score;
    // Every 20 points = 1.1x speed multiplier, starting from 0.8x base
    speedMultiplierRef.current = 0.8 * Math.pow(1.1, Math.floor(score / 20));
  }, [score]);

  useEffect(() => {
    const saved = localStorage.getItem("kalendos-kids-highscore");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  // Check milestones
  useEffect(() => {
    if (gameState !== "playing") return;
    for (const m of MILESTONES) {
      if (score >= m.score && !shownMilestonesRef.current.has(m.score)) {
        shownMilestonesRef.current.add(m.score);
        setMilestoneMsg(m);
        setTimeout(() => setMilestoneMsg(null), 2000);
        break;
      }
    }
  }, [score, gameState]);

  // Stamina-limited pointer move
  const handlePointerMove = useCallback(
    (e: React.PointerEvent | React.TouchEvent) => {
      if (gameStateRef.current !== "playing" || !gameAreaRef.current) return;
      if (staminaRef.current <= 0) return; // no stamina = can't move

      const rect = gameAreaRef.current.getBoundingClientRect();
      let clientX: number;
      if ("touches" in e) {
        clientX = e.touches[0].clientX;
      } else {
        clientX = (e as React.PointerEvent).clientX;
      }

      const targetX = ((clientX - rect.left) / rect.width) * 100;
      const clampedTarget = Math.max(5, Math.min(95, targetX));

      // Calculate how far we want to move
      const currentX = lionXRef.current;
      const distance = Math.abs(clampedTarget - currentX);

      // Limit max move speed per event (prevents teleporting)
      const maxMovePerEvent = 6;
      const actualMove = Math.min(distance, maxMovePerEvent);

      // Drain stamina proportional to movement
      const drain = actualMove * STAMINA_DRAIN_PER_PX;
      const newStamina = Math.max(0, staminaRef.current - drain);
      staminaRef.current = newStamina;
      setStamina(newStamina);

      // Move toward target, but limited
      const direction = clampedTarget > currentX ? 1 : -1;
      const newX = currentX + direction * actualMove;
      setLionX(Math.max(5, Math.min(95, newX)));
      isMovingRef.current = true;
    },
    []
  );

  // Keyboard with stamina
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStateRef.current !== "playing") return;
      if (staminaRef.current <= 0) return;

      const moveAmount = 3;
      const drain = moveAmount * STAMINA_DRAIN_PER_PX;

      if (e.key === "ArrowLeft") {
        staminaRef.current = Math.max(0, staminaRef.current - drain);
        setStamina(staminaRef.current);
        setLionX((prev) => Math.max(5, prev - moveAmount));
        isMovingRef.current = true;
      } else if (e.key === "ArrowRight") {
        staminaRef.current = Math.max(0, staminaRef.current - drain);
        setStamina(staminaRef.current);
        setLionX((prev) => Math.min(95, prev + moveAmount));
        isMovingRef.current = true;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const gameLoop = useCallback(function tick(timestamp: number) {
    if (gameStateRef.current !== "playing") return;

    const gameArea = gameAreaRef.current;
    if (!gameArea) return;

    const rect = gameArea.getBoundingClientRect();
    const areaHeight = rect.height;
    const areaWidth = rect.width;

    // Regenerate stamina when not moving
    const currentLionX = lionXRef.current;
    const movedThisFrame = Math.abs(currentLionX - lastLionXRef.current);
    lastLionXRef.current = currentLionX;

    if (movedThisFrame < 0.5) {
      // Not moving, regen stamina
      staminaRef.current = Math.min(MAX_STAMINA, staminaRef.current + STAMINA_REGEN_RATE);
      setStamina(staminaRef.current);
      isMovingRef.current = false;
    }

    // Spawn: starts at 1200ms, gets faster with speed multiplier
    const spawnInterval = Math.max(400, 1200 / speedMultiplierRef.current);
    if (timestamp - lastSpawnRef.current > spawnInterval) {
      const snack = SNACKS[Math.floor(Math.random() * SNACKS.length)];
      // Base fall speed - moderate start, increases with multiplier
      const baseSpeed = 0.5 + Math.random() * 0.5;
      const newSnack: FallingSnack = {
        id: snackIdRef.current++,
        snack,
        x: Math.random() * 80 + 10,
        y: -8,
        speed: baseSpeed * (speedMultiplierRef.current + 0.5),
        rotation: Math.random() * 360,
      };
      snacksRef.current = [...snacksRef.current, newSnack];
      lastSpawnRef.current = timestamp;
    }

    const lionXPx = (lionXRef.current / 100) * areaWidth;
    const lionY = areaHeight - LION_HEIGHT - GAME_AREA_BOTTOM_PADDING;
    let gameOver = false;
    const updatedSnacks: FallingSnack[] = [];

    for (const s of snacksRef.current) {
      const newY = s.y + s.speed;
      const snackXPx = (s.x / 100) * areaWidth;
      const snackYPx = (newY / 100) * areaHeight;

      const dx = Math.abs(snackXPx - lionXPx);
      const dy = Math.abs(snackYPx - lionY);

      if (dx < (LION_WIDTH / 2 + SNACK_SIZE / 2) && dy < (LION_HEIGHT / 2 + SNACK_SIZE / 2)) {
        const newScore = scoreRef.current + s.snack.points;
        scoreRef.current = newScore;
        setScore(newScore);
        setShowCatch({ x: s.x, points: s.snack.points });
        setTimeout(() => setShowCatch(null), 600);

        setCaughtSnacks((prev) => {
          const next = new Map(prev);
          const existing = next.get(s.snack.id);
          if (existing) {
            next.set(s.snack.id, { ...existing, count: existing.count + 1 });
          } else {
            next.set(s.snack.id, { name: s.snack.name, count: 1, slug: s.snack.slug, image: s.snack.image });
          }
          return next;
        });
        continue;
      }

      if (snackYPx > areaHeight) {
        gameOver = true;
        break;
      }

      updatedSnacks.push({ ...s, y: newY, rotation: s.rotation + s.speed * 2 });
    }

    if (gameOver) {
      snacksRef.current = [];
      setFallingSnacks([]);
      setGameState("gameover");

      const finalScore = scoreRef.current;
      setHighScore((prev) => {
        const newHigh = Math.max(prev, finalScore);
        localStorage.setItem("kalendos-kids-highscore", String(newHigh));
        return newHigh;
      });
      return;
    }

    snacksRef.current = updatedSnacks;
    setFallingSnacks([...updatedSnacks]);
    animationRef.current = requestAnimationFrame(tick);
  }, []);

  const startGame = useCallback(() => {
    setScore(0);
    scoreRef.current = 0;
    speedMultiplierRef.current = 0.8; // base 0.8x, grows 1.1x every 20pts
    setLionX(50);
    lionXRef.current = 50;
    lastLionXRef.current = 50;
    snacksRef.current = [];
    setFallingSnacks([]);
    setCaughtSnacks(new Map());
    snackIdRef.current = 0;
    lastSpawnRef.current = 0;
    staminaRef.current = MAX_STAMINA;
    setStamina(MAX_STAMINA);
    setMilestoneMsg(null);
    shownMilestonesRef.current = new Set();
    setGameState("playing");
    animationRef.current = requestAnimationFrame(gameLoop);
  }, [gameLoop]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Get milestone title for game over
  const getScoreTitle = (s: number) => {
    if (s >= 400) return { text: "Aslan Tıka Basa Doydu!", emoji: "👑" };
    if (s >= 300) return { text: "Aslan Doydu!", emoji: "🤩" };
    if (s >= 200) return { text: "Aslan Atıştırdı!", emoji: "😄" };
    if (s >= 100) return { text: "Aslan Tadına Baktı!", emoji: "😋" };
    return { text: "Yeni Başlıyor!", emoji: "🦁" };
  };

  const scoreTitle = getScoreTitle(score);
  const staminaPercent = (stamina / MAX_STAMINA) * 100;

  return (
    <div className="bg-gradient-to-b from-sky-300 via-sky-200 to-green-200 relative overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "960px", height: "calc(100dvh - 160px)", maxHeight: "700px", minHeight: "400px" }}>
      {/* Decorative clouds */}
      <div className="absolute top-10 left-[8%] w-24 h-12 bg-white/40 rounded-full blur-sm" />
      <div className="absolute top-20 left-[40%] w-32 h-14 bg-white/30 rounded-full blur-sm" />
      <div className="absolute top-14 right-[12%] w-28 h-12 bg-white/35 rounded-full blur-sm" />
      <div className="absolute top-28 right-[35%] w-20 h-10 bg-white/25 rounded-full blur-sm" />

      {/* Score HUD */}
      {gameState === "playing" && (
        <div className="absolute top-3 left-0 right-0 z-20 flex justify-between items-start px-4">
          <div className="bg-white/85 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
            <div className="text-[10px] text-primary/50 font-medium uppercase tracking-wider">Skor</div>
            <div className="text-3xl font-bold text-accent leading-tight">{score}</div>
            {/* Stamina bar */}
            <div className="mt-1.5 w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-150"
                style={{
                  width: `${staminaPercent}%`,
                  backgroundColor: staminaPercent > 40 ? "#009FA3" : staminaPercent > 15 ? "#F59E0B" : "#E31E24",
                }}
              />
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <Zap className="h-2.5 w-2.5 text-accent" />
              <span className="text-[9px] text-primary/40">Enerji</span>
            </div>
          </div>
          <div className="relative w-14 h-14">
            <Image src="/images/kalendos-snacks.png" alt="Kalendos" fill className="object-contain opacity-50" />
          </div>
        </div>
      )}

      {/* Milestone popup */}
      <AnimatePresence>
        {milestoneMsg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl text-center">
              <div className="text-4xl mb-1">{milestoneMsg.emoji}</div>
              <div className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                {milestoneMsg.message}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Area */}
      <div
        ref={gameAreaRef}
        onPointerMove={handlePointerMove}
        onTouchMove={handlePointerMove as unknown as React.TouchEventHandler}
        className="relative w-full h-full select-none"
        style={{
          touchAction: "none",
        }}
      >
        {/* Menu Screen */}
        <AnimatePresence>
          {gameState === "menu" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center p-3 sm:p-4 overflow-y-auto"
            >
              <div className="bg-white/92 backdrop-blur-md rounded-3xl p-4 sm:p-8 shadow-2xl text-center max-w-md w-full my-auto">
                <div className="text-6xl sm:text-7xl mb-2">🦁</div>
                <h1
                  className="text-2xl sm:text-3xl font-bold text-primary mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Kalendos Kids
                </h1>
                <p className="text-base text-primary/70 mb-1 font-semibold">
                  Aslan Atıştırmalık Avcısı
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Aslanı sağa sola hareket ettirerek düşen atıştırmalıkları yakala! Bir tane bile kaçırma!
                </p>

                <div className="space-y-2 text-left text-sm text-primary/80 mb-4 bg-amber-50 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <span>🖱️</span>
                    <span>Fare veya parmağınla aslanı hareket ettir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⌨️</span>
                    <span>Sol/Sağ ok tuşları ile de oynayabilirsin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⚡</span>
                    <span>Enerji biterse aslan durur! Bekle yeniden dolsun</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🏆</span>
                    <span>100, 200, 300, 400 puanda özel seviyeler!</span>
                  </div>
                </div>

                {highScore > 0 && (
                  <p className="text-sm text-accent font-semibold mb-4">
                    <Trophy className="inline h-4 w-4 mr-1" />
                    En Yuksek Skor: {highScore}
                  </p>
                )}

                <Button
                  size="lg"
                  onClick={startGame}
                  className="bg-accent hover:bg-accent-light text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg w-full"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Oyna!
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Game Over Screen */}
        <AnimatePresence>
          {gameState === "gameover" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center p-3 sm:p-4 overflow-y-auto"
            >
              <div className="bg-white/92 backdrop-blur-md rounded-3xl p-4 sm:p-6 shadow-2xl text-center max-w-md w-full max-h-full overflow-y-auto my-auto">
                <div className="text-4xl sm:text-5xl mb-1">{scoreTitle.emoji}</div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-primary mb-0.5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {scoreTitle.text}
                </h2>
                <p className="text-muted-foreground text-xs mb-3">
                  Bir atıştırmalık kaçtı!
                </p>

                <div className="bg-accent/10 rounded-xl p-3 mb-3">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-0.5">{score}</div>
                  <div className="text-xs text-primary/70 font-medium">Toplam Skor</div>
                  {score >= highScore && score > 0 && (
                    <div className="mt-1 flex items-center justify-center gap-1 text-accent">
                      <Star className="h-4 w-4 fill-accent" />
                      <span className="text-sm font-bold">Yeni Rekor!</span>
                      <Star className="h-4 w-4 fill-accent" />
                    </div>
                  )}
                </div>

                {/* Caught snacks - large images on right */}
                {caughtSnacks.size > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary/70 mb-2">
                      Yakalanan Atıştırmalıklar:
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from(caughtSnacks.entries()).map(([id, snack]) => (
                        <Link
                          key={id}
                          href={`/urunler/${snack.slug}`}
                          className="flex flex-col items-center bg-primary/5 hover:bg-accent/10 rounded-xl p-2 text-center transition-colors group"
                        >
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                            <Image
                              src={snack.image}
                              alt={snack.name}
                              fill
                              className="object-contain drop-shadow-md group-hover:scale-110 transition-transform"
                            />
                          </div>
                          <div className="text-xs font-semibold text-primary truncate w-full mt-1">
                            {snack.name}
                          </div>
                          <div className="text-xs text-accent font-bold">
                            x{snack.count}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    size="lg"
                    onClick={startGame}
                    className="bg-accent hover:bg-accent-light text-white font-bold text-base rounded-xl shadow-lg flex-1"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Tekrar Oyna
                  </Button>
                  <Link href="/" className="flex-1">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full font-bold text-base rounded-xl border-primary/20"
                    >
                      Ana Sayfa
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Falling Snacks */}
        {gameState === "playing" &&
          fallingSnacks.map((s) => (
            <div
              key={s.id}
              className="absolute pointer-events-none"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: SNACK_SIZE,
                height: SNACK_SIZE,
                transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
                transition: "none",
              }}
            >
              <Image
                src={s.snack.image}
                alt={s.snack.name}
                width={SNACK_SIZE}
                height={SNACK_SIZE}
                className="object-contain drop-shadow-md"
              />
            </div>
          ))}

        {/* Catch effect */}
        <AnimatePresence>
          {showCatch && (
            <motion.div
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 0, y: -50, scale: 1.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute z-20 text-accent font-bold text-xl pointer-events-none"
              style={{ left: `${showCatch.x}%`, bottom: LION_HEIGHT + 50 }}
            >
              +{showCatch.points}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lion character */}
        {gameState === "playing" && (
          <div
            className="absolute z-10 pointer-events-none"
            style={{
              left: `${lionX}%`,
              bottom: GAME_AREA_BOTTOM_PADDING,
              transform: "translateX(-50%)",
              width: LION_WIDTH,
              height: LION_HEIGHT,
            }}
          >
            <div
              className="text-6xl sm:text-7xl leading-none select-none drop-shadow-lg text-center"
              style={{ opacity: staminaPercent < 10 ? 0.6 : 1 }}
            >
              🦁
            </div>
          </div>
        )}

        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-green-600 via-green-500 to-green-400 rounded-t-lg">
          <div className="absolute inset-0 flex items-end justify-around px-4 pb-0.5">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="text-[8px] text-green-800/30">🌿</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
