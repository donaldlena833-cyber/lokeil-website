# LOKEIL inc - Interior Remodeling Website

A modern, professional website for LOKEIL inc, an interior remodeling company based in Ridgewood, Queens, NY.

## Project Overview

- **Company**: LOKEIL inc
- **Owner**: Lorel Beqari
- **Location**: Ridgewood, Queens, NY 11385
- **Phone**: 917-518-8753 / 917-518-3866
- **Email**: lokeil2024@gmail.com
- **Instagram**: @lokeil.inc

## Technology Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS 3.4
- **Deployment**: Static Export (output: 'export')
- **Fonts**: Google Fonts (Instrument Serif + Inter)
- **Animations**: CSS-only with IntersectionObserver
- **Images**: Unoptimized for static export

## Color Scheme - Matte Olive Green

- **Background**: #4A5440 (matte olive green)
- **Background Light**: #5C6652
- **Background Dark**: #3A4332
- **Accent**: #C8A96E (warm gold/brass)
- **Accent Hover**: #D4B87A
- **Text Primary**: #F5F0E8 (warm off-white)
- **Text Secondary**: #C4BFB3 (muted cream)

## Project Structure

```
lokeil-website/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollObserver.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── MobileCtaBar.tsx
│   │   └── PageTransition.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── globals.css
│   └── schema.ts
├── public/
│   ├── gallery/
│   │   ├── bathroom-tiles/ (10 images)
│   │   ├── bathroom-flooring/ (9 images)
│   │   ├── bathroom-shower/ (9 images)
│   │   ├── bathroom-painting/ (6 images)
│   │   ├── kitchen-cabinets/ (9 images)
│   │   └── videos/ (3 MP4 files)
│   ├── robots.txt
│   └── sitemap.xml
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── next.config.ts
└── package.json
```

## Pages

1. **Home** (`/`) - Hero section, services overview, gallery preview, CTA
2. **About** (`/about`) - Company story, owner information, mission, values
3. **Services** (`/services`) - All services with descriptions and process
4. **Gallery** (`/gallery`) - Categorized photo grid with filter tabs and videos
5. **Contact** (`/contact`) - Contact info, hours, map, social links

## Features

- Responsive design (mobile, tablet, desktop)
- Sticky header with mobile hamburger menu
- Mobile CTA bar with call and email buttons
- Scroll-based animations using IntersectionObserver
- Gallery with category filtering
- Google Maps embed
- SEO optimized with metadata and structured data
- Static export ready
- Performance optimized

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## Building

```bash
npm run build
```

This creates a static export in the `out/` directory.

## Key Components

### ScrollObserver
Observes elements with `data-reveal` attributes and applies animation classes when they come into view.

### ScrollReveal
Wrapper component for animated sections. Supports variants:
- `fade-up` (default)
- `fade-in`
- `scale-in`
- `slide-left`
- `slide-right`

### MobileCtaBar
Fixed bottom bar on mobile devices with call and email CTA buttons.

### Header
Sticky navigation with mobile-responsive hamburger menu.

## Animations

All animations use CSS-only transitions with IntersectionObserver:
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Stagger delays via `data-delay` attribute
- Respects `prefers-reduced-motion` preference
- No GSAP or heavy JavaScript libraries

## SEO Features

- Full metadata on every page
- Schema.org LocalBusiness structured data
- Open Graph tags
- Semantic HTML with proper heading hierarchy
- Alt text on all images
- Sitemap and robots.txt
- Title format: "Page Name | LOKEIL inc - Interior Remodeling Queens NY"

## Services Offered

- Bathroom Remodeling
- Kitchen Remodeling
- Tiling & Tile Installation
- Flooring
- Plaster & Drywall
- Painting
- Cabinet Installation
- Door Installation
- Steps Design
- Fireplace Design

## Contact Information

- **Phone 1**: 917-518-8753
- **Phone 2**: 917-518-3866
- **Email**: lokeil2024@gmail.com
- **Address**: Ridgewood, Queens, NY 11385
- **Hours**: Mon-Fri 10am-6pm, Sat 12pm-5pm
- **Instagram**: @lokeil.inc

## Deployment

This site is built as a static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

All rights reserved by LOKEIL inc.
