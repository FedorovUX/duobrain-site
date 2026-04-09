# DuoBrain — Website

Static marketing site + blog built with **Astro + Tailwind CSS**, deployed on **Cloudflare Pages**.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Project structure

```
src/
├── layouts/
│   └── BaseLayout.astro      # HTML shell, SEO, OG tags
├── components/               # 12 section components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── StatsBar.astro
│   ├── Problem.astro
│   ├── HowItWorks.astro
│   ├── Features.astro
│   ├── AIFeedback.astro
│   ├── BrainInsights.astro
│   ├── Testimonials.astro
│   ├── Pricing.astro
│   ├── FinalCTA.astro
│   └── Footer.astro
├── content/
│   ├── config.ts             # Blog schema
│   └── blog/                 # Markdown posts live here
├── pages/
│   ├── index.astro           # Landing page
│   ├── rss.xml.js            # RSS feed
│   └── blog/
│       ├── index.astro       # Blog listing
│       └── [...slug].astro   # Individual post template
└── styles/
    └── global.css            # Fonts, CSS vars, utilities
public/
├── _headers                  # Cloudflare Pages cache rules
├── robots.txt
├── favicon.svg
└── images/                   # All assets
```

## Adding a blog post

1. Create a new `.md` file in `src/content/blog/`. Name it with the URL slug, e.g. `my-post-title.md`.
2. Add frontmatter:

```markdown
---
title: "Your post title"
description: "One-sentence description for listing and SEO."
publishDate: 2026-04-10
author: "Alexey Fedorov"
tags: ["founder-notes"]
draft: false
# If also published on Medium/LinkedIn, set canonical to the version you want Google to rank:
# canonical: "https://medium.com/@you/your-post"
---

Your content in **Markdown**.

## Section heading

Paragraph text.
```

3. Commit and push. Cloudflare Pages will auto-deploy.

### Dublicating Medium posts — SEO note

If you publish the same article on Medium and your own blog, set the `canonical` field in frontmatter to whichever version you want Google to rank. If you leave it blank, your own site is used by default — which is what you want if you care about SEO weight coming back to duobrain.app.

## Deploying to Cloudflare Pages

### First time setup

1. **Push this project to GitHub** (or GitLab):
   ```bash
   cd duobrain-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/duobrain-site.git
   git push -u origin main
   ```

2. **Go to Cloudflare Dashboard** → `Workers & Pages` → `Create application` → `Pages` → `Connect to Git`.

3. **Select your repo**, then configure build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: set env var `NODE_VERSION` to `20` (or `22`)

4. Click **Save and Deploy**. First build takes ~2 minutes.

5. **Add custom domain**: in Pages project → `Custom domains` → `Set up a custom domain` → enter `duobrain.app`. Cloudflare handles DNS automatically if your domain is already on Cloudflare.

### Subsequent deploys

Just `git push` — Cloudflare auto-builds and deploys on every commit to `main`.

## Customization

### Fonts
Using **Mulish** (body) + **Fraunces** italic (display accents like "Act like one", "closer"). Both from Google Fonts, loaded via `src/styles/global.css`. To change, edit the `@import` line and `tailwind.config.mjs` font family tokens.

### Colors
Brand palette is defined in `tailwind.config.mjs` under `theme.extend.colors`:
- `ink` — dark navy `#0B2239`
- `mist` — hero light blue `#E8F0F8`
- `cream` — pricing bg
- `mint` — how-it-works bg
- `gold` — "closer" italic accent
- `accent` — green for stars

### Responsive breakpoints
Tailwind defaults: `sm:` 640px, `md:` 768px, `lg:` 1024px, `xl:` 1280px. Hero grid switches from single-column to two-column at `lg:`.

## Responsive fixes applied vs. Framer original

1. **Hero phones**: changed to aspect-ratio container with percentage-positioned phones so they scale proportionally instead of overflowing.
2. **"5 seconds before you speak"** heading: removed forced `whitespace-nowrap` wrapper that was breaking on narrow screens. Now reflows naturally.
3. **Feature cards**: stack cleanly on mobile, 2-column from `md:` up.
4. **Dark CTA bar**: flexible text sizes with `clamp()`.
5. **Images**: switched to WebP (wider support than Framer's AVIF), proper `width`/`height` where possible to prevent layout shift.

## Pre-launch CTA note

Right now CTAs point to `#download` (in-page anchor) and `https://apps.apple.com` (placeholder). When App Store approval lands, replace in:
- `src/components/Header.astro`
- `src/components/Hero.astro`
- `src/components/Pricing.astro`
- `src/components/FinalCTA.astro`

Search & replace `https://apps.apple.com` with your real App Store URL.
