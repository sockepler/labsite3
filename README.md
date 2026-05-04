# labsite3

Multilingual (Japanese / English / Chinese) website for the Advanced Integrated Circuit Systems Lab at Shibaura Institute of Technology, built with Next.js + TypeScript + Tailwind CSS.

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:3000> and redirects to `/ja` by default.

## Scripts

| Script           | What it does                       |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Start the Next.js dev server       |
| `npm run build`  | Production build                   |
| `npm run start`  | Run the production build           |
| `npm run lint`   | Run ESLint                         |

## Project layout

```
app/
  layout.tsx              # root layout (<html>, global metadata)
  page.tsx                # redirects "/" → "/ja"
  globals.css             # Tailwind + base styles
  [lang]/                 # locale segment: ja | en | zh
    layout.tsx            # sticky header, footer, per-locale metadata
    page.tsx              # home page
    about/page.tsx
    research/page.tsx
    members/page.tsx
    publications/page.tsx
    access/page.tsx
    contact/page.tsx
    components/           # Hero, Navbar
    dictionaries/         # ja.ts / en.ts / zh.ts + getDictionary()
public/                   # static assets (hero.jpg, svg icons)
```

## Internationalisation

All user-facing text lives in `app/[lang]/dictionaries/{ja,en,zh}.ts`, behind the `Dictionary` type defined in `dictionaries/index.ts`. Pages and layouts call `getDictionary(lang)` (server-side) and pass the relevant slice down to client components.

### Adding a language

1. Add the new code to `VALID_LANGS` in `app/[lang]/dictionaries/index.ts`.
2. Create `app/[lang]/dictionaries/<code>.ts`, copying `ja.ts` and translating every field — TypeScript will flag any missing keys.
3. Register the loader in the `loaders` map in `dictionaries/index.ts`.

The language switcher in `Navbar` reads `VALID_LANGS` directly, so the new code shows up automatically.

## SEO

- `app/sitemap.ts` generates `/sitemap.xml` covering every locale × path with `hreflang` alternates.
- `app/robots.ts` generates `/robots.txt` pointing to the sitemap.
- Both read the site origin from `NEXT_PUBLIC_SITE_URL`. Set it (without trailing slash) in your hosting provider's env vars before going live; otherwise URLs fall back to the placeholder in `.env.example`.

After deploying, submit `https://your-domain/sitemap.xml` to [Google Search Console](https://search.google.com/search-console).

## Environment variables

| Variable               | Required | Purpose                                                  |
| ---------------------- | -------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | prod     | Absolute origin used in sitemap, robots, and OG metadata |

Copy `.env.example` to `.env.local` for local overrides.

## Deployment

The project is ready to deploy on Vercel with no extra configuration. Run `npm run build` locally to verify before deploying. Don't forget to set `NEXT_PUBLIC_SITE_URL` in the Vercel project settings.
