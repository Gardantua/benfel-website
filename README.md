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

Node.js 22 ile `http://localhost:3000` adresinde açılır. `npm run build` üretim derlemesini, `npm run lint` kaynak kontrollerini çalıştırır. Canlı dağıtım bu repo düzenleme çalışmasının dışında tutulur.

`src/app` sayfaları, `src/components` arayüz bileşenlerini, `src/lib` ürün/dil verilerini içerir. Bu repo özel tutuluyor; şirket dosyaları herkese açık portföy deposuna aktarılmıyor.
