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
      { title: "Dolgulu Bisküviler", href: "/urunler?category=dolgulu-biskuvi" },
      { title: "Sürme Kremalar", href: "/urunler?category=surme-krema" },
      { title: "Reçeller", href: "/urunler?category=recel" },
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
    // REGOSTO SERIES - Dolgulu Bisküviler
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
      gridSpan: "wide"
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
      boxInfo: "4250 Boxes (28gr), 3200 Boxes (42gr), 2500 Boxes (56gr), 2100 Boxes (72gr)",
      isFeatured: true
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
    // SÜRME KREMALAR - Cremora & Tahera
    // ═══════════════════════════════════════════════════════════════
    {
      id: "cremora",
      slug: "cremora",
      name: "Cremora",
      category: "surme-krema",
      images: ["/images/products/cremora.png", "/images/products/cremora.png", "/images/products/cremora.png", "/images/products/cremora.png"],
      description: "Kakaolu Fındık Kreması / Chocolate Hazelnut Spread",
      weights: ["350 GR"],
      packaging: "12x1",
      boxInfo: "12 Jars per Box",
      isFeatured: true,
      gridSpan: "tall"
    },
    {
      id: "tahera",
      slug: "tahera",
      name: "Tahera",
      category: "surme-krema",
      images: ["/images/products/tahera.png", "/images/products/tahera.png", "/images/products/tahera.png", "/images/products/tahera.png"],
      description: "Tahin Kreması / Tahini Cream",
      weights: ["300 GR"],
      packaging: "12x1",
      boxInfo: "12 Jars per Box",
      isFeatured: true
    },

    // ═══════════════════════════════════════════════════════════════
    // REÇELLER - Berriva
    // ═══════════════════════════════════════════════════════════════
    {
      id: "berriva",
      slug: "berriva",
      name: "Berriva",
      category: "recel",
      images: ["/images/products/berriva.png", "/images/products/berriva.png", "/images/products/berriva.png", "/images/products/berriva.png"],
      description: "Çilek Reçeli %45 Meyve / Strawberry Jam %45 Fruit",
      weights: ["380 GR"],
      packaging: "12x1",
      boxInfo: "12 Jars per Box",
      isFeatured: true
    },
  ],

  categories: [
    { id: "dolgulu-biskuvi", name: "Dolgulu Bisküviler (Regosto)" },
    { id: "surme-krema", name: "Sürme Kremalar (Cremora & Tahera)" },
    { id: "recel", name: "Reçeller (Berriva)" },
  ],

  newsCategories: [
    { id: "haberler", name: "Haberler" },
    { id: "duyurular", name: "Duyurular" },
    { id: "fuarlar", name: "Fuarlar" },
  ],

  newsItems: [
    {
      id: "regosto-dolgulu-biskuvi",
      slug: "regosto-dolgulu-biskuvi",
      title: "Regosto – Dolgulu Bisküvi Serisi",
      category: "duyurular",
      summary: "Kalendos'un Regosto serisi, kakao krema dolgulu bisküvileriyle 4 farklı lezzette sunuluyor. Classic, Mosaic, Dark ve Espresso çeşitleriyle tanışın!",
      content: `Regosto, Kalendos'un en sevilen dolgulu bisküvi markasıdır. Her bir bisküvinin içinde yoğun kakao kreması ile dolu, çıtır kabuğuyla damak zevkinize hitap eden eşsiz bir lezzet deneyimi sunar.

Regosto Classic – Mavi ambalajıyla öne çıkan klasik lezzet. Çıtır bisküvi kabuğu içinde yoğun kakao kreması. Hem çocukların hem yetişkinlerin favorisi.

Regosto Mosaic – Kırmızı ambalajıyla dikkat çeken Mosaic, kakao ve vanilya aromasının benzersiz uyumunu sunar. Mozaik desenli bisküvisiyle göze de hitap eder.

Regosto Dark – Altın sarısı ambalajıyla premium bir deneyim. Daha yoğun kakao içeriğiyle bitter çikolata severlerin tercihi. Yetişkin damak tadına özel.

Regosto Espresso – Yeşil ambalajıyla farklılaşan Espresso, kahve aromalı kakao kremasıyla kahve tutkunlarına özel bir lezzet. Espresso notalarıyla zenginleştirilmiş eşsiz bir bisküvi deneyimi.

Tüm Regosto çeşitleri 28gr, 42gr, 56gr ve 72gr gramaj seçenekleriyle sunulmaktadır. 24x6 paketleme formatında toptan siparişe uygundur.

Distribütörlük ve ihracat fırsatları için bizimle iletişime geçin.
📞 +90 (545) 230 32 44
📧 info@benfel.com`,
      image: "/images/products/regosto-classic.png",
      date: "2026-02-16",
      isFeatured: true,
    },
    {
      id: "cremora-findik-kremasi",
      slug: "cremora-findik-kremasi",
      title: "Cremora – Kakaolu Fındık Kreması",
      category: "duyurular",
      summary: "Kahvaltılarınızın yıldızı Cremora! %13 fındık içeriğiyle hazırlanan kakaolu fındık kreması, 350gr cam kavanozda şimdi satışta.",
      content: `Cremora, Kalendos'un gururu olan kakaolu fındık kremasıdır. Her kaşığında fındığın doğal lezzetini kakaoyla buluşturan Cremora, kahvaltı sofralarınızın vazgeçilmezi olmaya aday.

%13 gerçek fındık içeriğiyle üretilen Cremora, rakiplerinden fındık oranıyla ayrılır. Kremsi dokusu ve yoğun çikolata aroması, hem ekmek üstünde hem de tatlı tariflerinde mükemmel uyum sağlar.

350gr cam kavanozda sunulan Cremora, hem şık ambalajıyla raflarda dikkat çeker hem de pratik kapağıyla kullanım kolaylığı sunar. Cam kavanozu sayesinde ürünün tazeliği ve kalitesi korunur.

Üretimde kullanılan tüm hammaddeler özenle seçilmekte, uluslararası gıda güvenliği standartlarına uygun olarak işlenmektedir. Koruyucu içermez, doğal lezzet garantisi sunar.

Toptan sipariş için 12'li koli halinde temin edilebilir. İhracat ve distribütörlük görüşmeleri için bizimle iletişime geçin.
📞 +90 (545) 230 32 44
📧 info@benfel.com`,
      image: "/images/products/cremora.png",
      date: "2026-02-15",
      isFeatured: true,
    },
    {
      id: "tahera-tahin-kremasi",
      slug: "tahera-tahin-kremasi",
      title: "Tahera – Tahin Kreması",
      category: "duyurular",
      summary: "Doğal lezzet, modern sunum! Tahera tahin kreması, geleneksel tahinin yenilikçi yorumuyla 300gr cam kavanozda satışta.",
      content: `Tahera, Kalendos'un geleneksel tahini modern bir sunumla buluşturduğu premium tahin kremasıdır. Doğal susam tohumlarından elde edilen tahin, özel üretim teknikleriyle pürüzsüz ve kremsi bir kıvama kavuşturulmuştur.

Doğal Lezzet mührü taşıyan Tahera, yapay tatlandırıcı ve koruyucu içermez. Susam tohumlarının doğal yağlarıyla zenginleşen yapısı, hem besleyici hem lezzetli bir kahvaltılık alternatifi sunar.

300gr cam kavanozda sunulan Tahera, altın kapağı ve zarif etiket tasarımıyla raflarda premium konumlanır. Özellikle Orta Doğu, Kuzey Afrika ve Avrupa pazarlarında yüksek talep görmektedir.

Tahera, pekmezle karıştırılarak geleneksel tahin-pekmez olarak tüketilebileceği gibi, tatlı tariflerinde, smoothie'lerde ve salata soslarında da kullanılabilir. Çok yönlü bir mutfak ürünüdür.

Toptan sipariş için 12'li koli halinde temin edilebilir. İhracat ve distribütörlük görüşmeleri için bizimle iletişime geçin.
📞 +90 (545) 230 32 44
📧 info@benfel.com`,
      image: "/images/products/tahera.png",
      date: "2026-02-14",
      isFeatured: true,
    },
    {
      id: "berriva-cilek-receli",
      slug: "berriva-cilek-receli",
      title: "Berriva – Çilek Reçeli",
      category: "duyurular",
      summary: "%45 meyve içeriğiyle hazırlanan Berriva çilek reçeli, doğal ve taze lezzetiyle kahvaltı sofralarınızı tatlandırır!",
      content: `Berriva, Kalendos'un %45 gerçek meyve içeriğiyle ürettiği premium çilek reçelidir. Taze çileklerin doğal lezzeti, özel pişirme teknikleriyle korunarak kavanoza aktarılır.

%45 meyve oranı, Berriva'yı piyasadaki birçok reçelden ayıran en önemli özelliğidir. Yüksek meyve içeriği sayesinde yoğun çilek aroması ve doğal renk elde edilir. Yapay renklendirici kullanılmaz.

380gr cam kavanozda sunulan Berriva, kahvaltı sofralarının vazgeçilmezi olmaya adaydır. Taze ekmeğin üzerine sürülerek, yoğurtla karıştırılarak veya pasta ve tatlı tariflerinde kullanılabilir.

Berriva'nın şık ve modern ambalaj tasarımı, hem yerel hem uluslararası pazarlarda tüketicinin dikkatini çeker. Kırmızı tonlarındaki etiketi, çileğin tazeliğini ve doğallığını yansıtır.

Toptan sipariş için 12'li koli halinde temin edilebilir. İhracat ve distribütörlük görüşmeleri için bizimle iletişime geçin.
📞 +90 (545) 230 32 44
📧 info@benfel.com`,
      image: "/images/products/berriva.png",
      date: "2026-02-13",
      isFeatured: true,
    },
  ],
};
