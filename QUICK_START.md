# LOKEIL Inc Website - Quick Start Guide

## Project Location
```
/sessions/upbeat-determined-ramanujan/lokeil-website/
```

## Installation & Running

### Step 1: Install Dependencies
```bash
cd /sessions/upbeat-determined-ramanujan/lokeil-website
npm install
```

### Step 2: Development Server
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Production Build
```bash
npm run build
```
This creates a static export in the `/out` directory ready for deployment.

## Project Overview

**5 Pages:**
- Home (/) - Hero with services overview and gallery preview
- About (/about) - Company story and mission
- Services (/services) - 10 services with detailed descriptions
- Gallery (/gallery) - 52 images + 3 videos with category filters
- Contact (/contact) - Contact info, hours, map, and social links

**6 Reusable Components:**
- Header - Sticky navigation with mobile menu
- Footer - Multi-column footer with business info
- ScrollObserver - IntersectionObserver for scroll animations
- ScrollReveal - Animation wrapper for scroll reveals
- MobileCtaBar - Fixed mobile CTA bar
- PageTransition - Page transition wrapper

**Design:**
- Matte olive green color scheme (#4A5440)
- Warm gold accents (#C8A96E)
- CSS-only animations (no GSAP)
- Fully responsive (mobile, tablet, desktop)
- SEO optimized with metadata and structured data

## Key Features

✓ Responsive design
✓ Mobile hamburger menu
✓ Mobile CTA bar (call/email)
✓ Gallery with category filters
✓ Scroll-based animations
✓ Google Maps embed
✓ Professional design
✓ Static export ready

## Making Changes

### Update Content
Edit the page files in `app/`:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/services/page.tsx` - Services page
- `app/gallery/page.tsx` - Gallery page
- `app/contact/page.tsx` - Contact page

### Update Styling
- `tailwind.config.ts` - Colors and theme
- `app/globals.css` - Global styles and animations

### Update Components
- `app/components/Header.tsx` - Navigation
- `app/components/Footer.tsx` - Footer content

### Add Gallery Images
1. Copy images to `public/gallery/{category}/`
2. Images are automatically picked up by the gallery page

## Deployment

### Option 1: Vercel (Recommended)
```bash
# Push to GitHub and connect to Vercel
# One-click deployment with automatic builds
```

### Option 2: Netlify
```bash
# Drag and drop the /out folder after building
npm run build
# Upload /out directory to Netlify
```

### Option 3: Other Hosts
```bash
npm run build
# Upload contents of /out directory to your host
```

## Business Information

**Company:** LOKEIL inc  
**Owner:** Lorel Beqari  
**Location:** Ridgewood, Queens, NY 11385  
**Phone:** 917-518-8753 / 917-518-3866  
**Email:** lokeil2024@gmail.com  
**Instagram:** @lokeil.inc  
**Hours:** Mon-Fri 10am-6pm, Sat 12pm-5pm  

## Services Offered (10)

1. Bathroom Remodeling
2. Kitchen Remodeling
3. Tiling & Tile Installation
4. Flooring
5. Plaster & Drywall
6. Painting
7. Cabinet Installation
8. Door Installation
9. Steps Design
10. Fireplace Design

## Color Scheme

- **Primary Background:** #4A5440 (matte olive green)
- **Accent:** #C8A96E (warm gold/brass)
- **Text Primary:** #F5F0E8 (warm off-white)
- **Text Secondary:** #C4BFB3 (muted cream)

## Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run lint    # Run ESLint
npm start       # Start production server
```

## File Structure

```
lokeil-website/
├── app/
│   ├── components/          # Reusable components
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── gallery/             # Gallery page
│   ├── contact/             # Contact page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── schema.ts            # Structured data
├── public/
│   ├── gallery/             # Image categories
│   ├── robots.txt
│   └── sitemap.xml
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

## Gallery Categories

- Bathroom Tiles (10 images)
- Bathroom Flooring (9 images)
- Bathroom Shower (9 images)
- Bathroom Painting (6 images)
- Kitchen Cabinets (9 images)
- Videos (3 MP4 files)

Total: 52 images + 3 videos

## Need Help?

- See `README.md` for detailed documentation
- Check `BUILD_CHECKLIST.md` for verification steps
- Review `FILE_MANIFEST.txt` for complete file listing

---

This is a production-ready website. Happy deploying!
