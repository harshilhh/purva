# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Compliance Chamber (TCC)** — a static marketing SPA for a cross-border compliance platform. Frontend-only; no backend, no API, no database.

The app lives in `tcc-app/`.

## Commands

Run all commands from `tcc-app/`:

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build (oxc minifier, CSS minification)
npm run lint      # ESLint on all .js/.jsx files
npm run preview   # Preview production build locally
```

There is no test suite.

## Architecture

**Stack:** React 19, React Router 7, Vite, Tailwind CSS v4

**Entry point:** `tcc-app/index.html` → `src/main.jsx` → `src/App.jsx`

`App.jsx` defines a `BrowserRouter` with 4 routes: `/` (Home), `/about`, `/services`, `/contact`. Each page assembles its UI from components in `src/components/`.

**Styling:** Tailwind v4 with custom CSS variables defined in `src/index.css`:
- Brand colors: Yellow (`#F5A623`), Dark (`#1A1A1A`), Grey, Sage
- Display font: Cormorant Garamond (serif)
- Body font: Plus Jakarta Sans (sans-serif)

**No TypeScript** — all files are `.jsx` / `.js`.

**Build output:** `dist/` with manual chunk splitting (vendor and router bundles separated from app code).
