# Kalendos / Benfel şirket sitesi

Benfel'in ürünlerini ve Kalendos markasını tanıtmak için hazırladığım şirket sitesi. Ürün kataloğunu, ürün detaylarını ve iletişim akışını farklı ekran boyutlarında kullanılabilir hale getirmeye odaklandım.

**Canlı site:** [kalendossnacks.com](https://kalendossnacks.com)

## Kapsam

- Türkçe, İngilizce, İspanyolca ve Arapça dil seçimi.
- Kategori filtreli ürün listesi ve ürün detay sayfaları.
- İletişim formu, WhatsApp bağlantısı ve firma bilgileri.
- SEO metadata, sitemap ve yapılandırılmış veri.

Next.js, TypeScript, React ve Tailwind CSS kullandım. Form doğrulaması React Hook Form/Zod; animasyonlar Framer Motion ile.

## Yerelde çalıştırma

```bash
npm ci
npm run dev
```

Node.js 22.12 veya üzeri ile `http://localhost:3000` adresinde açılır. `npm run build` üretim derlemesini, `npm run lint` kaynak kontrollerini çalıştırır. Canlı dağıtım bu repo düzenleme çalışmasının dışında tutulur.

`src/app` sayfaları, `src/components` arayüz bileşenlerini, `src/lib` ürün/dil verilerini içerir. Bu repo özel tutuluyor; şirket dosyaları herkese açık portföy deposuna aktarılmıyor.

## Kontroller ve bakım

Next.js 16.4 ve React 19.2'nin güncel yama sürümüne geçtim. `npm run build` sonrasında `npm test` bütün ürün sayfalarını, yerel ürün görsellerinin dosyalarını, sitemap'i, dört dilin çeviri yapısını ve kategori bağlantılarını kontrol ediyor. `npm run lint` ve bu kontroller GitHub Actions üzerinde de çalışıyor.

Alt menüdeki kategori bağlantısını ürün filtresinin beklediği parametreyle eşledim. Carousel olay aboneliklerinin temizliğini ve oyun animasyonunun fonksiyon çağrısını düzelttim. Kullanılmayan kodu kaldırdım.

9 Ekim 2026 taramasında çalışma zamanı bağımlılıklarında bulgu yok. Tam `npm audit` sonucunda Next.js'in lint araç zincirindeki `braces` kaynaklı 5 yüksek bulgu kaldı; yayımlanmış bir düzeltme sürümü bulunmuyor. Mevcut hydration effect'lerine ait 6 performans uyarısı da görünür kalıyor. Bu repo statik `out/` klasörü üretiyor; GitHub'a gönderilen değişiklik tek başına canlı sunucuyu güncellemez.
