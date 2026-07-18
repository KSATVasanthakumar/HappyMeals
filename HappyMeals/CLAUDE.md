# HappyMeals CLAUDE.md

## Development workflow rules

- **Every functionality or design change must be verified in mobile, tablet, and desktop views**
  before considering the task done. Use the preview tools to check all three breakpoints (e.g. 375px
  mobile, 768px tablet, 1280px+ desktop) — don't just check desktop and assume responsive classes
  work. This applies to new features, layout tweaks, color/typography changes, and bug fixes alike.

## Project state

This is a fresh Vite + React + TypeScript scaffold (`npm create vite`). `src/App.tsx` still contains
the default template markup — no application-specific features, routing, or state management have
been built yet.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check via `tsc -b` (project references across `tsconfig.app.json` /
  `tsconfig.node.json`), then production-build with Vite
- `npm run lint` — run ESLint over the repo
- `npm run preview` — serve the production build locally

There is no test runner configured in this repo yet.

## Architecture

- Entry point: [src/main.tsx](src/main.tsx) mounts `<App />` from [src/App.tsx](src/App.tsx) into `#root` (defined in [index.html](index.html)).
- `tsconfig.json` is a references-only root pointing at `tsconfig.app.json` (app/browser code) and
  `tsconfig.node.json` (Vite config); `npm run build` type-checks both via `tsc -b` before bundling.
- ESLint config ([eslint.config.js](eslint.config.js)) uses the flat-config format with
  `typescript-eslint` recommended rules, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`
  (Vite-specific fast-refresh rule). Type-aware lint rules are not enabled.
- Static assets referenced via `/icons.svg#<id>` in [src/App.tsx](src/App.tsx) are expected in
  [public/](public) (served at the site root); imported assets (e.g. `hero.png`) live in
  [src/assets/](src/assets).

## Folder structure

```
HappyMeals/
├── CLAUDE.md
├── HappyPlatesREADME.md   # competitor/reference site review (see below)
├── README.md              # generic Vite template readme
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json          # references-only root
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── icons.svg          # sprite sheet referenced via /icons.svg#<id>
└── src/
    ├── main.tsx           # entry point, mounts <App />
    ├── App.tsx            # default Vite template markup (not yet customized)
    ├── App.css
    ├── index.css
    ├── assets/
    │   ├── hero.png
    │   ├── react.svg
    │   └── vite.svg
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx     # site header/nav (stub)
    │   │   └── Footer.tsx     # site footer (stub)
    │   └── common/            # shared UI building blocks (empty, reserved)
    ├── pages/
    │   ├── Home.tsx           # stub
    │   ├── About.tsx          # stub
    │   ├── Menu.tsx           # stub
    │   ├── Services.tsx       # stub
    │   └── Contact.tsx        # stub
    └── themes/
        └── happymeals-token.css   # design tokens (see below)
```

`pages/` and `components/layout/` mirror the site sections described in
[HappyPlatesREADME.md](HappyPlatesREADME.md) (Home, About, Menu, Services, Contact). These are
placeholder stubs only — `App.tsx` still renders the default Vite template and does not yet wire up
routing or import these pages.

## Styling: Tailwind CSS v4 + design tokens

- Tailwind v4 is wired in via the `@tailwindcss/vite` plugin in [vite.config.ts](vite.config.ts) (no
  `tailwind.config.js`/PostCSS config needed — v4 is CSS-first).
- [src/index.css](src/index.css) is the global stylesheet, imported once from
  [src/main.tsx](src/main.tsx). It pulls in Tailwind (`@import 'tailwindcss'`) and the design tokens
  (`@import './themes/happymeals-token.css'`) before any other global rules.
- [src/themes/happymeals-token.css](src/themes/happymeals-token.css) defines the project's design
  tokens as CSS custom properties on `:root`; they're available globally (including inside Tailwind
  utilities via `bg-[var(--color-primary)]` etc., or by mapping them into Tailwind's `@theme` block if
  Tailwind utility names are preferred later).

- **Color palette:** raw palette vars (`--color-forest-900` `#0A400C`, `--color-sage-600` `#819067`,
  `--color-khaki-400` `#B1AB86`, `--color-cream-100` `#FEFAE0`) plus semantic aliases
  (`--color-primary`, `--color-secondary`, `--color-accent`, `--color-background`, `--color-surface`,
  `--color-text-primary`, `--color-text-secondary`, `--color-text-on-primary`, `--color-border`).
- **Spacing:** `--padding-xs` through `--padding-2xl`.
- **Radius:** `--radius-sm` through `--radius-full`.
- **Typography:** `--font-family-base` / `--font-family-heading` (currently placeholder Inter/Poppins,
  not yet confirmed or loaded via `@font-face`/link tag), `--font-size-xs` through `--font-size-3xl`,
  `--font-weight-regular` through `--font-weight-bold`, `--line-height-tight/normal/relaxed`.

## HappyPlatesREADME.md

[HappyPlatesREADME.md](HappyPlatesREADME.md) is a review of a competitor/reference catering website
(HappyPlates, www.happyplates.co.in) — not documentation of this codebase. It captures their branding,
services, menu categories, and site sections/design observations, likely as inspiration or competitive
reference for building out this project's actual features (App.tsx is still the unmodified template).
