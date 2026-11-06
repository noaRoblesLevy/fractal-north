# Fractal North Research

Personal quantitative research site: articles, projects, and notes. Built with
[Astro](https://astro.build), MDX content collections, KaTeX math, and Shiki
code highlighting. Static output, deployable to Vercel with zero config.

## Stack

- **Astro 5** (static output) with **MDX** and typed content collections
- **Math:** remark-math + rehype-katex (inline and display LaTeX)
- **Code:** Shiki with dual light/dark themes that follow the theme toggle
- **Feeds & SEO:** RSS, sitemap, robots.txt, per-page Open Graph images
  generated at build time (astro-og-canvas)
- **Fonts:** self-hosted via @fontsource (Cormorant Garamond, IBM Plex Sans,
  IBM Plex Mono)
- **Styling:** plain CSS with custom properties, light/dark theming, no UI framework

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serve the production build locally
npm run check    # astro type check
```

> On first `npm install`, the native build scripts for `sharp` and `esbuild`
> are already approved in `package.json` (`allowScripts`). If your package
> manager prompts, allow them.

## Content

Three collections live in `src/content`:

| Collection | Folder                 | Frontmatter                                              |
| ---------- | ---------------------- | ------------------------------------------------------- |
| research   | `src/content/research` | `title, date, abstract, tags, draft, updated?`          |
| projects   | `src/content/projects` | `title, description, stack, status, github?, date, featured, draft` |
| notes      | `src/content/notes`    | `title, date, kind, tags, draft`                        |

### Drafts

An article with `draft: true` renders in `npm run dev` so you can check it, but
is **not built in production** and is kept out of listings, the RSS feed, and
the sitemap. To publish it, set `draft: false` in its frontmatter.

### Papers and figures

A research article can ship with a full paper: put the PDF in `public/papers/`
and the figures in `public/figures/<slug>/`, and link them from the article.
`carry-or-dispersion.mdx` is the example. Its LaTeX source and the script that
generates every number and figure live in the
[Quant-Research](https://github.com/noaRoblesLevy/Quant-Research) repository
(`ACTIVE/funding-carry-harvest/paper/`).

## Brand

Brand source art is in `brand/` (compass-star logo, one-colour white, favicon,
and app icon). Raster icons in `public/` are generated from those SVGs. The
palette and type tokens are defined in `src/styles/tokens.css`.

## Deploy

See the deployment notes shared on handoff, or:

1. Push to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new). Vercel detects
   Astro automatically (build `astro build`, output `dist`). No config needed.
3. Add a custom domain in the Vercel project settings and point DNS as
   instructed.

Before going live, set the production URL in `astro.config.mjs` (the `SITE`
constant) so canonical URLs, OG image URLs, RSS, and the sitemap are correct.
