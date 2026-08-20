# Dominick's portfolio

A modern portfolio built with React and Next.js, with a fully static GitHub Pages export.

## Local preview

You need Node.js 22.13 or newer. Then run:

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes in `app/page.tsx`
and `app/globals.css` refresh automatically in the browser.

## Production check

```bash
pnpm run build
pnpm run build:pages
```

`build:pages` creates the static site in `out/`. Pushes to `main` deploy through
the GitHub Pages workflow.
