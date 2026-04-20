# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**AutomateAI** — a marketing/services website for an AI automation agency targeting ecommerce brands in the US, UK, and Europe. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Commands

On Windows, `node` is not in the default bash PATH. Prefix all npm commands:

```bash
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd run dev
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd run build
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd run lint
```

Dev server: http://localhost:3000

## Architecture

Single-page marketing site — one route (`/`), no API routes, no database.

**Page composition** (`src/app/page.tsx`):
```
Navbar → Hero → TrustBar → Services → HowItWorks → Industries → Results → FAQ → Contact → Footer
```

Each section is its own component in `src/components/`. All sections use Framer Motion `whileInView` + `viewport={{ once: true }}` for scroll animations.

**Styling**: Tailwind CSS v4 — `@import "tailwindcss"` in globals.css, no tailwind.config.js. PostCSS via `postcss.config.mjs`. Dark base (`#0a0a0f`), violet/purple accent palette.

**Utility**: `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge).

## Contact Form

`src/components/Contact.tsx` has a stub `handleSubmit`. To make live: add `app/api/contact/route.ts` using Resend, or swap to Formspree. See `docs/api-guide.md`.

## Key Decisions

- No shadcn/ui — hand-built components keep bundle lean and aesthetic consistent.
- No backend — statically exported; deploy to Vercel with zero config.
- `"use client"` only on components needing state/browser APIs/animations.

## Web Best Practices

### Performance (Core Web Vitals targets)
- LCP < 2.5s — avoid large above-the-fold images; use `next/image` for all `<img>` tags.
- CLS < 0.1 — always set explicit `width` and `height` on images and media.
- FID / INP < 100ms — keep JS bundles lean; defer non-critical third-party scripts.
- Every 1s delay in load time costs ~7% conversions — prioritize above-the-fold render speed.

### SEO
- Each page needs a unique `<title>` (50–60 chars) and `<meta description>` (150–160 chars) in `layout.tsx`.
- Add JSON-LD structured data (`Organization` + `Service` schema) in `layout.tsx` for rich search results.
- Section `id` attributes double as anchor links and improve crawlability.
- FAQ section content is indexed by Google and can earn FAQ rich snippets — keep questions keyword-rich.

### Conversion (from top-ranking AI agency sites)
- Hero must answer: who you serve + exact transformation + proof, in under 5 seconds.
- Put social proof (star rating, client count, or logo bar) **above the fold** or immediately below hero.
- One primary CTA per section — never two competing buttons at the same visual weight.
- Show measurable ROI in stats (hours saved, revenue lifted, cost reduced) — not vague claims.
- Process/How-It-Works section (3–5 steps) significantly increases trust and conversion.
- FAQ section reduces sales objections and boosts organic rankings.
- Interactive or specific case studies convert better than generic testimonials.

### Accessibility
- All interactive elements need `aria-label` when icon-only.
- Maintain colour contrast ratio ≥ 4.5:1 for body text on dark backgrounds.
- Navigation landmarks: `<header>`, `<main>`, `<footer>`, `<nav>` — already in place.
- Form inputs must have associated `<label>` elements — already in Contact.tsx.

### Design Patterns (aligned with top Google-ranking AI automation sites)
- **Bento grid** layout for feature/service cards — asymmetric sizes signal technical sophistication.
- **Glassmorphism** cards: `backdrop-blur` + semi-transparent backgrounds on dark base.
- **Glow effects**: absolute-positioned blurred divs behind key sections (violet/indigo palette).
- **Logo/trust bar**: platform logos (Shopify, Klaviyo, etc.) directly below hero builds instant credibility.
- **Metrics in hero**: "68% fewer tickets", "3× email revenue" — concrete numbers beat adjectives.
- Typography: hero at `text-5xl md:text-7xl`, section headings at `text-4xl md:text-5xl`.
