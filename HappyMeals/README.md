# Happy Meal

Marketing website for **Happy Meal Pvt. Ltd.**, a corporate and event catering company based in
Bengaluru. Built with React, TypeScript, and Vite.

**Live site:** https://ksatvasanthakumar.github.io/HappyMeals/

## Pages

- **Home** — hero carousel, service overview (Corporate Catering, Event Catering, Cafeteria
  Management), mission/vision, client showcase, and a call-to-action.
- **About** — brand story, stats, and photo gallery.
- **Leadership** — founding story and leadership profiles.
- **Contact** — inquiry form for catering quotes.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and bundling
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first, via `@tailwindcss/vite`)
- [React Router](https://reactrouter.com/) for client-side routing
- [Framer Motion](https://www.framer.com/motion/) for animation
- [React Hook Form](https://react-hook-form.com/) for the contact form

## Getting started

```bash
npm install
npm run dev
```

## Commands

| Command           | Description                                             |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR                        |
| `npm run build`   | Type-check (`tsc -b`) and produce a production build      |
| `npm run lint`    | Run ESLint over the project                               |
| `npm run preview` | Serve the production build locally                        |

## Design tokens

Colors, spacing, radii, and typography are defined as CSS custom properties in
[`src/themes/happymeals-token.css`](src/themes/happymeals-token.css) and consumed throughout the app
via Tailwind's arbitrary-value syntax (e.g. `bg-(--color-primary)`).

## Deployment

The site auto-deploys to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
on every push to `main`. The build runs from the `HappyMeals/` project folder and publishes to the
`ksatvasanthakumar.github.io/HappyMeals/` subpath, so:

- `vite.config.ts` sets `base: '/HappyMeals/'`
- `main.tsx` sets the router `basename` to `/HappyMeals`
- `public/404.html` implements the [SPA GitHub Pages redirect trick](https://github.com/rafgraph/spa-github-pages)
  so direct links to client-side routes (e.g. `/about`) work correctly
