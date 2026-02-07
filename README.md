# Benfel - Corporate Website

Premium food company website for **Benfel** - a B2B biscuit, cookie, and cake manufacturer based in Istanbul, Turkey.

**Live:** [kalendos.vercel.app](https://kalendos.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4, Shadcn/ui (New York)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Carousel:** Embla Carousel (via Shadcn)
- **Icons:** Lucide React
- **Notifications:** Sonner

## Features

- Multi-language support (TR, EN, ES, AR) with client-side switching
- Full-width hero banner carousel with autoplay
- Product catalog with category filtering
- Product image gallery with hover scrubbing (desktop) and thumbnail navigation
- Responsive design optimized for mobile, tablet, and desktop
- SEO metadata, sitemap, structured data (Schema.org)
- Contact form with validation
- WhatsApp integration

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage - hero carousel, featured products, stats, brands |
| `/hakkimizda` | About - company story, timeline, mission/vision |
| `/urunler` | Products - filterable product grid |
| `/urunler/[slug]` | Product detail - image gallery, specifications |
| `/iletisim` | Contact - form, map, company info |

## Product Lines

- **Bacano** - Cream biscuits (Classic, Dark, Strawberry, Banana, Coconut)
- **Regosto** - Filled cookies (Classic, Mosaic, Dark, Espresso)
- **Trilex** - Cream cakes (Vanilla, Cocoa, Caramel, Mosaic)
- **Star** - Special cakes (Bear, One)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

## Deploy

```bash
npx vercel deploy --yes --prod
```

## Project Structure

```
src/
  app/           # Pages and API routes
  components/
    home/        # Homepage sections
    layout/      # Header, Footer, Logo, MobileNav
    products/    # Product card, grid, detail, filter
    about/       # About page sections
    contact/     # Contact form and info
    shared/      # Reusable components
    ui/          # Shadcn/ui components
  lib/           # Data, types, utils, i18n, animations
  context/       # Language context provider
  hooks/         # Custom hooks
```
