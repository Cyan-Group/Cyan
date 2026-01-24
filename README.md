# Cyan Printing

![Cyan Printing Logo](./public/Logo.svg)

Professional printing and packaging solutions landing page for Cyan Printing (مطبعة سيان), serving the Kuwait and Gulf region market.

## Overview

Cyan Printing is a modern, bilingual (Arabic/English) landing page showcasing professional printing services including boxes, bags, cups, packaging materials, and corporate printing solutions. The website is optimized for search engines, performance, and user experience across all devices.

## Features

- **Bilingual Support**: Full Arabic and English language switching with RTL/LTR layout support
- **Responsive Design**: Mobile-first design optimized for all screen sizes
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, structured data (JSON-LD), sitemap, and robots.txt
- **Performance**: Optimized fonts, images, and Core Web Vitals
- **Analytics**: Google Analytics 4 integration with custom event tracking
- **Interactive Elements**: Smooth animations and transitions using Framer Motion
- **WhatsApp Integration**: Floating contact button with smart popup notifications

## Technology Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4 via @next/third-parties

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/                 # Next.js App Router pages and layouts
├── components/          # React components
├── contexts/           # React context providers
├── lib/                # Utilities and translations
└── public/             # Static assets
```

## Key Components

- **Hero**: Main landing section with call-to-action
- **About**: Company information and value propositions
- **Services**: Service offerings showcase
- **Partners**: Partner logos display
- **Portfolio**: Work samples gallery
- **Footer**: Contact information and social links
- **WhatsAppButton**: Floating contact button with popup

## Configuration

### Google Analytics

The project includes Google Analytics 4 integration. Update the Measurement ID in `app/layout.tsx`:

```tsx
<GoogleAnalytics gaId="G-68LZ4LGNW1" />
```

### Translations

All text content is managed in `lib/translations.ts` with support for Arabic and English locales.

## SEO Features

- Dynamic metadata with title templates
- Open Graph and Twitter Card support
- LocalBusiness structured data (JSON-LD)
- XML sitemap generation
- Robots.txt configuration
- Semantic HTML with proper heading hierarchy
- Descriptive alt tags for images

## License

Private project - All rights reserved.
