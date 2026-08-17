# Bemont Photo

Marketing site for [Bemont Photo](https://www.bemontphoto.com), a Rochester wedding photography team.

Built with [Next.js](https://nextjs.org) (App Router), React, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
app/
  galleries/[slug]/   Dynamic gallery pages
  lib/
    portfolio-manifest.json   Image metadata (alt, keywords, venue, etc.)
    portfolio.ts              Portfolio loader
    galleries.ts              Gallery definitions and filters
  ui/                 Components
public/portfolio/     Wedding photo assets
```

## Environment variables

The contact form posts to a server-side API route and sends email through [Resend](https://resend.com), with [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) for spam protection. Copy `.env.example` to `.env.local` and fill in:

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=          # Where inquiries are delivered
CONTACT_FROM_EMAIL=        # Verified sender in Resend (e.g. "Bemont Photo <hello@bemontphoto.com>")
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_FONT_SYSTEM=a    # Typography: a | b | c (requires rebuild)
```

**Typography (`NEXT_PUBLIC_FONT_SYSTEM`)**

| Value | Display | Body |
|-------|---------|------|
| `a` (default) | Fraunces | Source Sans 3 |
| `b` | Manrope | IBM Plex Sans |
| `c` | Newsreader | IBM Plex Sans |

Set in `.env.local` or Vercel env vars, then rebuild. Fonts are centralized via CSS variables (`--font-display`, `--font-body`) in `app/ui/fonts/`.

**Setup checklist**

1. Create a Resend account, verify your domain, and generate an API key.
2. Create a Turnstile widget in Cloudflare (managed / invisible mode works well on mobile).
3. Add the variables above in Vercel project settings for production.

Turnstile is optional in local dev; production requires both Turnstile keys.

## Portfolio maintenance

Image metadata lives in `app/lib/portfolio-manifest.json`. To add a photo:

1. Place the JPG in `public/portfolio/`
2. Add an entry to `portfolio-manifest.json` with alt text, keywords, venue, and rating
3. Optionally reference it from `named-portfolio-images.ts` or a gallery filter in `galleries.ts`

## Deployment

The site is configured for static generation and deploys cleanly to Vercel.
