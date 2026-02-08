import type { SiteData } from "./types";

export const siteData: SiteData = {
  companyName: "Kalendos",
  tagline: "Sizi Gülümseten Tatlar",
  description: "Kalendos, bisküvi, gofret, çikolata ve kek üretim ve ihracatında lider firmalardan biri olmak amacıyla 2017 yılında İstanbul'da kurulmuştur. 8.000 m² kapalı alanda, son teknoloji ile donatılmış 4 üretim hattıyla en kaliteli ürünleri üretmekteyiz.",

  companyInfo: {
    established: 2017,
    facility: "8.000 m² kapalı alan",
    productionLines: 4,
  },

  contact: {
    phone: "+90 (545) 230 32 44",
    email: "info@benfel.com",
    address: "Sultaniye Mahallesi 350. Sokak, Şelale Plaza No:1 D:84 Esenyurt - İstanbul",
    mapsLink: "https://maps.google.com/?q=Sultaniye+Mahallesi+Esenyurt+Istanbul",
    socials: {
      instagram: "https://instagram.com/benfelturkey",
      facebook: "https://facebook.com/benfelturkey",
      linkedin: "https://linkedin.com/company/benfel",
      youtube: "https://youtube.com/@benfelturkey"
    }
  },

  navigation: {
    main: [
      { title: "Ana Sayfa", href: "/" },
      { title: "Kurumsal", href: "/hakkimizda" },
      { title: "Ürünlerimiz", href: "/urunler" },
      { title: "İletişim", href: "/iletisim" },
    ],
    products: [
      { title: "Bisküviler", href: "/urunler?category=biskuvi" },
      { title: "Dolgulu Bisküviler", href: "/urunler?category=dolgulu-biskuvi" },
      { title: "Kekler", href: "/urunler?category=kek" },
    ]
  },

  hero: {
    heading: "Flavours That Make You Smile",
    subheading: "2017'den bu yana, 8.000 m² modern tesisimizde 4 üretim hattıyla dünyanın dört bir yanına kalite ve lezzet taşıyoruz.",
    primaryCta: "Ürünleri Keşfet",
    secondaryCta: "İletişime Geç",
    heroImage: "/images/hero-bg.png"
  },

  stats: [
    { label: "Kuruluş Yılı", value: 2017, suffix: "" },
    { label: "Üretim Alanı", value: 8000, suffix: " m²" },
    { label: "Üretim Hattı", value: 4, suffix: "" },
    { label: "İhracat Ülkesi", value: 30, suffix: "+" }
  ],

  products: [
    // ═══════════════════════════════════════════════════════════════
    // BACANO SERIES - Kremalı Bisküviler
    // ═══════════════════════════════════════════════════════════════
    {
      id: "bacano-classic",
      slug: "bacano-classic",
      name: "Bacano Classic",
      category: "biskuvi",
      images: ["/images/products/bacano-classic.png", "/images/products/bacano-classic.png", "/images/products/bacano-classic.png", "/images/products/bacano-classic.png"],
      description: "Kakao ve Süt Kremalı Bisküvi / Biscuit with Cocoa and Milk Cream",
      weights: ["24 GR", "27 GR", "36 GR", "55 GR", "60 GR"],
      packaging: "24x6",
      boxInfo: "4500 Boxes (24gr), 4200 Boxes (27gr), 3500 Boxes (36gr), 2550 Boxes (55gr/60gr)",
      isFeatured: true,
      gridSpan: "wide"
    },
    {
      id: "bacano-dark",
      slug: "bacano-dark",
      name: "Bacano Dark",
      category: "biskuvi",
      images: ["/images/products/bacano-dark.png", "/images/products/bacano-dark.png", "/images/products/bacano-dark.png", "/images/products/bacano-dark.png"],
      description: "Kakao ve Süt Kremalı Bisküvi / Biscuit with Cocoa and Milk Cream",
      weights: ["24 GR", "27 GR", "36 GR", "55 GR", "60 GR"],
      packaging: "24x6",
      boxInfo: "4500 Boxes (24gr), 4200 Boxes (27gr), 3500 Boxes (36gr), 2550 Boxes (55gr/60gr)"
    },
    {
      id: "bacano-strawberry",
      slug: "bacano-strawberry",
      name: "Bacano Strawberry",
      category: "biskuvi",
      images: ["/images/products/bacano-strawberry.png", "/images/products/bacano-strawberry.png", "/images/products/bacano-strawberry.png", "/images/products/bacano-strawberry.png"],
      description: "Kakao ve Çilek Kremalı Bisküvi / Biscuit with Cocoa and Strawberry Cream",
      weights: ["24 GR", "27 GR", "36 GR", "55 GR", "60 GR"],
      packaging: "24x6",
      boxInfo: "4500 Boxes (24gr), 4200 Boxes (27gr), 3500 Boxes (36gr), 2550 Boxes (55gr/60gr)",
      isFeatured: true
    },
    {
      id: "bacano-banana",
      slug: "bacano-banana",
      name: "Bacano Banana",
      category: "biskuvi",
      images: ["/images/products/bacano-banana.png", "/images/products/bacano-banana.png", "/images/products/bacano-banana.png", "/images/products/bacano-banana.png"],
      description: "Kakao ve Muz Kremalı Bisküvi / Biscuit with Cocoa and Banana Cream",
      weights: ["24 GR", "27 GR", "36 GR", "55 GR", "60 GR"],
      packaging: "24x6",
      boxInfo: "4500 Boxes (24gr), 4200 Boxes (27gr), 3500 Boxes (36gr), 2550 Boxes (55gr/60gr)"
    },
    {
      id: "bacano-coconut",
      slug: "bacano-coconut",
      name: "Bacano Coconut",
      category: "biskuvi",
      images: ["/images/products/bacano-coconut.png", "/images/products/bacano-coconut.png", "/images/products/bacano-coconut.png", "/images/products/bacano-coconut.png"],
      description: "Kakao ve Hindistan Cevizi Kremalı Bisküvi / Biscuit with Cocoa and Coconut Cream",
      weights: ["24 GR", "27 GR", "36 GR", "55 GR", "60 GR"],
      packaging: "24x6",
      boxInfo: "4500 Boxes (24gr), 4200 Boxes (27gr), 3500 Boxes (36gr), 2550 Boxes (55gr/60gr)"
    },

    // ═══════════════════════════════════════════════════════════════
    // REGOSTO SERIES - Dolgulu Bisküviler (Cookies Filled with Cocoa Cream)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "regosto-classic",
      slug: "regosto-classic",
      name: "Regosto Classic",
      category: "dolgulu-biskuvi",
      images: ["/images/products/regosto-classic.png", "/images/products/regosto-classic.png", "/images/products/regosto-classic.png", "/images/products/regosto-classic.png"],
      description: "Kakao Krema Dolgulu Bisküvi / Cookies Filled with Cocoa Cream",
      weights: ["28 GR", "42 GR", "56 GR", "72 GR"],
      packaging: "24x6",
      boxInfo: "4250 Boxes (28gr), 3200 Boxes (42gr), 2500 Boxes (56gr), 2100 Boxes (72gr)",
      isFeatured: true,
      gridSpan: "tall"
    },
    {
      id: "regosto-mosaic",
      slug: "regosto-mosaic",
      name: "Regosto Mosaic",
      category: "dolgulu-biskuvi",
      images: ["/images/products/regosto-mosaic.png", "/images/products/regosto-mosaic.png", "/images/products/regosto-mosaic.png", "/images/products/regosto-mosaic.png"],
      description: "Kakao Krema Dolgulu Bisküvi / Cookies Filled with Cocoa Cream",
      weights: ["28 GR", "42 GR", "56 GR", "72 GR"],
      packaging: "24x6",
      boxInfo: "4250 Boxes (28gr), 3200 Boxes (42gr), 2500 Boxes (56gr), 2100 Boxes (72gr)"
    },
    {
      id: "regosto-dark",
      slug: "regosto-dark",
      name: "Regosto Dark",
      category: "dolgulu-biskuvi",
      images: ["/images/products/regosto-dark.png", "/images/products/regosto-dark.png", "/images/products/regosto-dark.png", "/images/products/regosto-dark.png"],
      description: "Kakao Krema Dolgulu Bisküvi / Cookies Filled with Cocoa Cream",
      weights: ["28 GR", "42 GR", "56 GR", "72 GR"],
      packaging: "24x6",
      boxInfo: "4250 Boxes (28gr), 3200 Boxes (42gr), 2500 Boxes (56gr), 2100 Boxes (72gr)"
    },
    {
      id: "regosto-espresso",
      slug: "regosto-espresso",
      name: "Regosto Espresso",
      category: "dolgulu-biskuvi",
      images: ["/images/products/regosto-espresso.png", "/images/products/regosto-espresso.png", "/images/products/regosto-espresso.png", "/images/products/regosto-espresso.png"],
      description: "Kakao Krema Dolgulu Bisküvi / Cookies Filled with Cocoa Cream",
      weights: ["28 GR", "42 GR", "56 GR", "72 GR"],
      packaging: "24x6",
      boxInfo: "4250 Boxes (28gr), 3200 Boxes (42gr), 2500 Boxes (56gr), 2100 Boxes (72gr)"
    },

    // ═══════════════════════════════════════════════════════════════
    // TRILEX SERIES - Kremalı Kekler
    // ═══════════════════════════════════════════════════════════════
    {
      id: "trilex-vanilla",
      slug: "trilex-vanilla",
      name: "Trilex Vanilla",
      category: "kek",
      images: ["/images/products/trilex-vanilla.png", "/images/products/trilex-vanilla.png", "/images/products/trilex-vanilla.png", "/images/products/trilex-vanilla.png"],
      description: "Vanilya Kremalı Kek / Cake Filled With Vanilla Sauce",
      weights: ["35 GR", "40 GR"],
      packaging: "24x6",
      boxInfo: "2250 Boxes (35gr), 2000 Boxes (40gr)",
      code: "TU32 / TU42",
      isFeatured: true,
      gridSpan: "wide"
    },
    {
      id: "trilex-cocoa",
      slug: "trilex-cocoa",
      name: "Trilex Cocoa",
      category: "kek",
      images: ["/images/products/trilex-cocoa.png", "/images/products/trilex-cocoa.png", "/images/products/trilex-cocoa.png", "/images/products/trilex-cocoa.png"],
      description: "Kakao Kremalı Kek / Cake Filled With Cocoa Sauce",
      weights: ["35 GR", "40 GR"],
      packaging: "24x6",
      boxInfo: "2250 Boxes (35gr), 2000 Boxes (40gr)",
      code: "TU31 / TU41"
    },
    {
      id: "trilex-caramel",
      slug: "trilex-caramel",
      name: "Trilex Caramel",
      category: "kek",
      images: ["/images/products/trilex-caramel.png", "/images/products/trilex-caramel.png", "/images/products/trilex-caramel.png", "/images/products/trilex-caramel.png"],
      description: "Karamel Kremalı Kek / Cake Filled With Caramel Sauce",
      weights: ["35 GR", "40 GR"],
      packaging: "24x6",
      boxInfo: "2250 Boxes (35gr), 2000 Boxes (40gr)",
      code: "TU33 / TU43"
    },
    {
      id: "trilex-mosaic",
      slug: "trilex-mosaic",
      name: "Trilex Mosaic",
      category: "kek",
      images: ["/images/products/trilex-mosaic.png", "/images/products/trilex-mosaic.png", "/images/products/trilex-mosaic.png", "/images/products/trilex-mosaic.png"],
      description: "Kakao Kremalı Kek / Cake Filled With Cocoa Sauce",
      weights: ["35 GR", "40 GR"],
      packaging: "24x6",
      boxInfo: "2250 Boxes (35gr), 2000 Boxes (40gr)",
      code: "TU34 / TU44"
    },

    // ═══════════════════════════════════════════════════════════════
    // STAR SERIES - Özel Kekler
    // ═══════════════════════════════════════════════════════════════
    {
      id: "star-bear",
      slug: "star-bear",
      name: "Star Bear",
      category: "kek",
      images: ["/images/products/star-bear.png", "/images/products/star-bear.png", "/images/products/star-bear.png", "/images/products/star-bear.png"],
      description: "Kakao Kremalı Kek / Cake Filled With Cocoa Sauce",
      weights: ["30 GR"],
      packaging: "24x6",
      boxInfo: "2250 Boxes",
      code: "SB31",
      isFeatured: true
    },
    {
      id: "star-one",
      slug: "star-one",
      name: "Star One",
      category: "kek",
      images: ["/images/products/star-one.png", "/images/products/star-one.png", "/images/products/star-one.png", "/images/products/star-one.png"],
      description: "Kakao Kremalı Kek / Cake Filled With Cocoa Sauce",
      weights: ["30 GR"],
      packaging: "24x6",
      boxInfo: "1750 Boxes",
      code: "SO31"
    }
  ],

  categories: [
    { id: "biskuvi", name: "Bisküviler (Bacano)" },
    { id: "dolgulu-biskuvi", name: "Dolgulu Bisküviler (Regosto)" },
    { id: "kek", name: "Kekler (Trilex & Star)" },
  ]
};
