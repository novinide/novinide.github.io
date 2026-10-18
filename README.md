# Mansour Fadaei — Portfolio Website

Trilingual (English · العربية · فارسی) professional portfolio for **Mansour Fadaei**, Civil & Geotechnical Engineer — built with Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, and Framer Motion.

Content is based on [geodam.ir](https://www.geodam.ir).

## ✨ Features

- **3 languages with full RTL** — English, Arabic, and Farsi, switchable at runtime; RTL layout direction, per-language font stack (Inter for Latin, Vazirmatn for Arabic script), language preference persisted in `localStorage`
- **Responsive, single-page design** — sticky header with scroll-spy, mobile sheet menu, animated sections, stat counters, filterable publications list
- **Light / dark mode** — warm earthy light theme and matching dark theme via `next-themes`
- **Accessible** — semantic landmarks, ARIA labels, skip-to-content link, keyboard-friendly controls, reduced-motion support
- **Contact form** — opens the visitor's mail client with a pre-filled message (no backend needed)
- **Custom artwork** — hand-drawn SVG cross-section of a zoned embankment dam and topographic contour patterns

## 🚀 Getting started

```bash
# install (Bun, npm, or pnpm — pick one)
bun install
# or
npm install

# run the dev server
bun run dev       # http://localhost:3000
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

> Note: fonts are loaded via `next/font/google` (Inter + Vazirmatn + Geist Mono). An internet connection is needed when building; offline builds gracefully fall back to system fonts.

## 🌐 Deploy to GitHub Pages

The repository ships with a ready-made workflow: `.github/workflows/deploy.yml`.
It builds the site as a fully static export and publishes it to GitHub Pages — no server needed.

**Setup (one time):**

1. Push this project to a GitHub repository (branch `main`).
2. In the repository: **Settings → Pages → Build and deployment → Source** → select **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab → *Deploy portfolio to GitHub Pages* → **Run workflow**).

That's it. The workflow automatically:

- Detects whether the site is a *project site* (`https://<user>.github.io/<repo>/`) or a *user site* (`https://<user>.github.io/`) and sets the Next.js `basePath` accordingly — no manual configuration.
- Installs dependencies with Bun (uses the bundled `bun.lock`).
- Runs the static export build (`npm run build:pages` → `DEPLOY_TARGET=pages next build` → outputs `./out`).
- Uploads and deploys the result with the official `actions/deploy-pages@v4`.

Local test of the same build the workflow performs:

```bash
npm run build:pages     # static export → ./out
npx serve out           # preview locally
```

> A simpler alternative also exists for the standalone single-file version of the portfolio: see `deploy-static-html-github-pages.yml` — put `index.html` at the repo root, add that workflow, done (no build step at all).


## 🗂 Project structure

```
src/
├── app/
│   ├── layout.tsx            # Fonts, metadata, <html> shell
│   ├── page.tsx              # Renders the portfolio
│   └── globals.css           # Design tokens (earthy palette), RTL helpers, patterns
├── components/portfolio/
│   ├── portfolio.tsx         # Composition + providers (theme, language)
│   ├── header.tsx            # Sticky nav, scroll-spy, language & theme switchers
│   ├── hero.tsx              # Intro, CTAs, social links, animated stats
│   ├── dam-illustration.tsx  # Custom SVG dam cross-section
│   ├── about.tsx             # Bio + core areas
│   ├── services.tsx          # 4 service cards
│   ├── experience.tsx        # Career timeline + engagements
│   ├── projects.tsx          # 6 portfolio domains
│   ├── publications.tsx      # Filterable publication list
│   ├── education.tsx         # Degrees + codes/standards
│   ├── contact.tsx           # Contact info + mailto form
│   ├── footer.tsx            # Footer with navigation & socials
│   └── reveal.tsx            # Scroll-reveal animation wrapper
└── lib/i18n/
    ├── types.ts              # Locale definitions & metadata
    ├── en.ts / fa.ts / ar.ts # Typed dictionaries (canonical shape in en.ts)
    ├── context.tsx           # LanguageProvider + useLanguage hook
    └── index.ts              # Dictionary registry
```

## 🌍 Adding a language

1. Create `src/lib/i18n/<locale>.ts` exporting an object typed as `Dictionary`.
2. Register it in `dictionaries` (`src/lib/i18n/index.ts`) and `LOCALES` (`src/lib/i18n/types.ts`).

That's it — the UI, RTL direction handling, and font stack follow automatically.

## 📄 Content credits

All biographical content (experience, publications, education, services) is sourced from the engineer's own site [geodam.ir](https://www.geodam.ir), translated into Arabic and Farsi. Social links and the downloadable CV point to the original profiles.
