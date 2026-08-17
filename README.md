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

Contact form delivery uses EmailJS. Set these in `.env.local`:

```
NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY=
```

## Portfolio maintenance

Image metadata lives in `app/lib/portfolio-manifest.json`. To add a photo:

1. Place the JPG in `public/portfolio/`
2. Add an entry to `portfolio-manifest.json` with alt text, keywords, venue, and rating
3. Optionally reference it from `named-portfolio-images.ts` or a gallery filter in `galleries.ts`

## Deployment

The site is configured for static generation and deploys cleanly to Vercel.
