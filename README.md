# Bemont Photo

Marketing site for [Bemont Photo](https://www.bemontphoto.com), a Rochester wedding photography team.

Built with Next.js 16 (App Router), React 19, TypeScript 6, and Tailwind CSS 4.

## Getting started

```bash
nvm use
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
| `npm run typecheck` | Run strict TypeScript checking without generating files |
| `npm run check` | Run lint, type-checking, and the production build |

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
```

Typography is intentionally fixed: Literata for display type and IBM Plex Sans for body copy. Font loading lives in `app/ui/fonts.ts`; the Tailwind theme and site palette live in `app/ui/global.css`.

**Setup checklist**

1. Create a Resend account, verify your domain, and generate an API key.
2. Create a Turnstile widget in Cloudflare (managed / invisible mode works well on mobile).
3. Add the variables above in Vercel project settings for production.

Turnstile is optional in local dev; production requires both Turnstile keys.

## Portfolio maintenance

Image metadata lives in `app/lib/portfolio-manifest.json`. To add a photo:

1. Place the JPG in `public/portfolio/`
2. Export Lightroom metadata with the image, including description, keywords,
   rating, headline, venue, and camera settings
3. Run `npm run portfolio:import` to add every new image to the manifest
4. Optionally reference it from `named-portfolio-images.ts` or a gallery filter in `galleries.ts`

The importer is incremental: it preserves existing manifest entries and adds
only portfolio JPGs that are not already represented. Unknown venues or missing
required metadata stop the import with an explicit error rather than producing
an incomplete entry.

## Deployment

The site requires Node 24 (declared in `package.json` and `.nvmrc`) and is configured for Vercel. Run `npm run check` before deploying.
