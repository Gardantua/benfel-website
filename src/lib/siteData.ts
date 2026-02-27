import type { SiteData } from "./types";

export const siteData: SiteData = {
  companyName: "Kalendos",
  tagline: "Sizi Gülümseten Tatlar",
  description: "Kalendos Snacks, bisküvi, gofret, çikolata ve kek üretim ve ihracatında lider firmalardan biri olmak amacıyla 2017 yılında İstanbul'da kurulmuştur. 8.000 m² kapalı alanda, son teknoloji ile donatılmış 4 üretim hattıyla en kaliteli ürünleri üretmekteyiz.",

  companyInfo: {
    established: 2017,
    facility: "8.000 m² kapalı alan",
    productionLines: 4,
  },

  contact: {
    phone: "+90 533 513 65 63",
    email: "export@kalendossnacks.com",
    address: "Yakuplu Mah. Geçit Sok. No: 15 İç Kapı No:3 Beylikdüzü / İSTANBUL",
    mapsLink: "https://maps.google.com/?q=Yakuplu+Mah.+Gecit+Sok.+No:15+Beylikduzu+Istanbul",
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
      { title: "Gofretler", href: "/urunler?category=gofret" },
      { title: "Kremalı Bisküviler", href: "/urunler?category=kremali-biskuvi" },
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
    // KREVIA SERIES - Dolgulu Bisküviler
    // ═══════════════════════════════════════════════════════════════
    {
      id: "krevia-classic",
      slug: "krevia-classic",
      name: "Krevia Classic",
      category: "dolgulu-biskuvi",
      images: ["/images/products/krevia_classic.png"],
      description: "Kakao Krema Dolgulu Bisküvi / Cookies Filled with Cocoa Cream",
      weights: ["28 GR", "32 GR", "36 GR", "42 GR", "54 GR", "64 GR", "72 GR"],
      packaging: "24x6",
      boxInfo: "4250 Boxes (28gr), 3200 Boxes (42gr), 2500 Boxes (56gr), 2100 Boxes (72gr)",
      isFeatured: true,
      gridSpan: "wide"
    },
    {
      id: "krevia-mosaic",
      slug: "krevia-mosaic",
      name: "Krevia Mosaic",
      category: "dolgulu-biskuvi",
      images: ["/images/products/krevia_mosaic.png"],
      description: "Kakao Krema Dolgulu Bisküvi / Cookies Filled with Cocoa Cream",
      weights: ["28 GR", "32 GR", "36 GR", "42 GR", "54 GR", "64 GR", "72 GR"],
      packaging: "24x6",
      boxInfo: "4250 Boxes (28gr), 3200 Boxes (42gr), 2500 Boxes (56gr), 2100 Boxes (72gr)",
      isFeatured: true
    },
    {
      id: "krevia-dark",
      slug: "krevia-dark",
      name: "Krevia Dark",
      category: "dolgulu-biskuvi",
      images: ["/images/products/krevia_dark.png"],
      description: "Kakao Krema Dolgulu Bisküvi / Cookies Filled with Cocoa Cream",
      weights: ["28 GR", "32 GR", "36 GR", "42 GR", "54 GR", "64 GR", "72 GR"],
      packaging: "24x6",
      boxInfo: "4250 Boxes (28gr), 3200 Boxes (42gr), 2500 Boxes (56gr), 2100 Boxes (72gr)"
    },
    {
      id: "krevia-espresso",
      slug: "krevia-espresso",
      name: "Krevia Espresso",
      category: "dolgulu-biskuvi",
      images: ["/images/products/krevia_espresso.png"],
      description: "Kakao Krema Dolgulu Bisküvi / Cookies Filled with Cocoa Cream",
      weights: ["28 GR", "32 GR", "36 GR", "42 GR", "54 GR", "64 GR", "72 GR"],
      packaging: "24x6",
      boxInfo: "4250 Boxes (28gr), 3200 Boxes (42gr), 2500 Boxes (56gr), 2100 Boxes (72gr)"
    },

    // ═══════════════════════════════════════════════════════════════
    // TILENTO SERIES - Gofretler
    // ═══════════════════════════════════════════════════════════════
    {
      id: "tilento-cocoa",
      slug: "tilento-cocoa",
      name: "Tilento Cocoa",
      category: "gofret",
      images: ["/images/products/tilento_cocoa.png"],
      description: "Kakaolu Gofret / Cocoa Wafer",
      weights: ["50 GR"],
      packaging: "24x12",
      boxInfo: "24 Boxes per Carton",
      isFeatured: true
    },
    {
      id: "tilento-vanilla",
      slug: "tilento-vanilla",
      name: "Tilento Vanilla",
      category: "gofret",
      images: ["/images/products/tilento_vanilla.png"],
      description: "Vanilyalı Gofret / Vanilla Wafer",
      weights: ["50 GR"],
      packaging: "24x12",
      boxInfo: "24 Boxes per Carton"
    },

    // ═══════════════════════════════════════════════════════════════
    // VELORIA SERIES - Kremalı Bisküviler
    // ═══════════════════════════════════════════════════════════════
    {
      id: "veloria-cocoa",
      slug: "veloria-cocoa",
      name: "Veloria Cocoa",
      category: "kremali-biskuvi",
      images: ["/images/products/veloria_cocoa.png"],
      description: "Kakaolu Kremalı Bisküvi / Cocoa Cream Biscuit",
      weights: ["25 GR"],
      packaging: "24x6",
      boxInfo: "24 Boxes per Carton",
      isFeatured: true
    },
    {
      id: "veloria-dark",
      slug: "veloria-dark",
      name: "Veloria Dark",
      category: "kremali-biskuvi",
      images: ["/images/products/veloria_dark.png"],
      description: "Bitter Çikolatalı Kremalı Bisküvi / Dark Chocolate Cream Biscuit",
      weights: ["25 GR"],
      packaging: "24x6",
      boxInfo: "24 Boxes per Carton"
    },
    {
      id: "veloria-vanilla",
      slug: "veloria-vanilla",
      name: "Veloria Vanilla",
      category: "kremali-biskuvi",
      images: ["/images/products/veloria_vanilla.png"],
      description: "Vanilyalı Kremalı Bisküvi / Vanilla Cream Biscuit",
      weights: ["25 GR"],
      packaging: "24x6",
      boxInfo: "24 Boxes per Carton"
    },
    {
      id: "veloria-cocoa2",
      slug: "veloria-cocoa2",
      name: "Veloria Cocoa 2",
      category: "kremali-biskuvi",
      images: ["/images/products/veloria_cocoa2.png"],
      description: "Kakaolu Kremalı Bisküvi / Cocoa Cream Biscuit",
      weights: ["25 GR"],
      packaging: "24x6",
      boxInfo: "24 Boxes per Carton"
    },
    {
      id: "veloria-coconut",
      slug: "veloria-coconut",
      name: "Veloria Coconut",
      category: "kremali-biskuvi",
      images: ["/images/products/veloria_coconut.png"],
      description: "Hindistan Cevizli Kremalı Bisküvi / Coconut Cream Biscuit",
      weights: ["25 GR"],
      packaging: "24x6",
      boxInfo: "24 Boxes per Carton"
    },
    {
      id: "veloria-dark2",
      slug: "veloria-dark2",
      name: "Veloria Dark 2",
      category: "kremali-biskuvi",
      images: ["/images/products/veloria_dark2.png"],
      description: "Bitter Çikolatalı Kremalı Bisküvi / Dark Chocolate Cream Biscuit",
      weights: ["25 GR"],
      packaging: "24x6",
      boxInfo: "24 Boxes per Carton"
    },
    {
      id: "veloria-whitecocoa",
      slug: "veloria-whitecocoa",
      name: "Veloria White Cocoa",
      category: "kremali-biskuvi",
      images: ["/images/products/veloria_whitecocoa.png"],
      description: "Beyaz Kakaolu Kremalı Bisküvi / White Cocoa Cream Biscuit",
      weights: ["25 GR"],
      packaging: "24x6",
      boxInfo: "24 Boxes per Carton"
    },

    // ═══════════════════════════════════════════════════════════════
    // SÜRME KREMALAR - Cremora & Tahera
    // ═══════════════════════════════════════════════════════════════
    {
      id: "cremora",
      slug: "cremora",
      name: "Cremora",
      category: "surme-krema",
      images: ["/images/products/cremora.png"],
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
      images: ["/images/products/tahera.png"],
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
      images: ["/images/products/berriva.png"],
      description: "Çilek Reçeli %45 Meyve / Strawberry Jam %45 Fruit",
      weights: ["380 GR"],
      packaging: "12x1",
      boxInfo: "12 Jars per Box",
      isFeatured: true
    },
  ],

  categories: [
    { id: "dolgulu-biskuvi", name: "Dolgulu Bisküviler (Krevia)" },
    { id: "gofret", name: "Gofretler (Tilento)" },
    { id: "kremali-biskuvi", name: "Kremalı Bisküviler (Veloria)" },
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
      id: "krevia-dolgulu-biskuvi",
      slug: "krevia-dolgulu-biskuvi",
      title: "Krevia – Dolgulu Bisküvi Serisi",
      category: "duyurular",
      summary: "Kalendos'un Krevia serisi, kakao krema dolgulu bisküvileriyle 4 farklı lezzette sunuluyor. Classic, Mosaic, Dark ve Espresso çeşitleriyle tanışın!",
      content: `Krevia, Kalendos'un en sevilen dolgulu bisküvi markasıdır. Her bir bisküvinin içinde yoğun kakao kreması ile dolu, çıtır kabuğuyla damak zevkinize hitap eden eşsiz bir lezzet deneyimi sunar.

Krevia Classic – Klasik lezzet. Çıtır bisküvi kabuğu içinde yoğun kakao kreması. Hem çocukların hem yetişkinlerin favorisi.

Krevia Mosaic – Kakao ve vanilya aromasının benzersiz uyumunu sunan Mosaic, mozaik desenli bisküvisiyle göze de hitap eder.

Krevia Dark – Premium bir deneyim. Daha yoğun kakao içeriğiyle bitter çikolata severlerin tercihi. Yetişkin damak tadına özel.

Krevia Espresso – Kahve aromalı kakao kremasıyla kahve tutkunlarına özel bir lezzet. Espresso notalarıyla zenginleştirilmiş eşsiz bir bisküvi deneyimi.

Tüm Krevia çeşitleri 28gr, 42gr, 56gr ve 72gr gramaj seçenekleriyle sunulmaktadır. 24x6 paketleme formatında toptan siparişe uygundur.

Distribütörlük ve ihracat fırsatları için bizimle iletişime geçin.
📞 +90 533 513 65 63
📧 export@kalendossnacks.com`,
      image: "/images/products/krevia_classic.png",
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
📞 +90 533 513 65 63
📧 export@kalendossnacks.com`,
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
📞 +90 533 513 65 63
📧 export@kalendossnacks.com`,
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
📞 +90 533 513 65 63
📧 export@kalendossnacks.com`,
      image: "/images/products/berriva.png",
      date: "2026-02-13",
      isFeatured: true,
    },
  ],
};
