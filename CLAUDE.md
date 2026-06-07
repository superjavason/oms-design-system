# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

东鹏 OMS 设计系统 — a documentation/showcase SPA for the "东鹏 OMS 管理后台设计规范 v2.1" admin-dashboard design system. It implements the spec as live, interactive component demos (foundations, components, page templates, guidelines). Reference influences: 飞书 admin console + shadcn/ui. `DESIGN.md` (at repo root) is the machine-readable + human-readable distillation of the same token system.

## Commands

Use `pnpm` (not `npm`).

- `pnpm install` — install deps
- `pnpm dev` — Vite dev server
- `pnpm build` — production build to `dist/`
- `pnpm preview` — preview the production build

There is no test runner, linter, or CI configured. Type-checking happens via Vite/tsc during `pnpm build` (tsconfig is `strict` with `noUnusedLocals`/`noUnusedParameters`), so run `pnpm build` to verify changes compile.

## Architecture

**No framework router, no state library, no Tailwind, no UI dependency.** The only runtime deps are `react`, `react-dom`, and `lucide-react`. Routing is hash-based and hand-rolled.

- **Routing** (`src/App.tsx`): a `PAGES` record maps string ids → page components. `App` reads `window.location.hash` (`#/<id>`), falls back to `overview`, and re-renders on `hashchange`. Navigation sets the hash, scrolls to top, and updates `document.title`. To add a page you must register it in **both** `src/App.tsx` (`PAGES`) and `src/data/nav.ts` (`NAV`) using the same id.

- **Navigation source of truth** (`src/data/nav.ts`): `NAV` is the grouped sidebar config (开始 / Foundations / Components / Templates / Guidelines). Helpers `findItem` / `findGroupTitle` / `ALL_ITEMS` derive breadcrumbs and titles from it.

- **Shell** (`src/components/showcase/AppShell.tsx`): sidebar + sticky topbar + content. Owns search filtering, the mobile drawer (drawer + backdrop, Esc-to-close, body scroll lock under `max-width: 1024px`), and the PC-only collapse mode (icon-only rail, persisted to `localStorage` key `oms-sidebar-collapsed`, styled under `@media (min-width: 1025px)`).

- **Page authoring kit** (`src/components/showcase/Doc.tsx`): every doc page is composed from these primitives — `PageHead`, `DocSection`, `Preview`, `CodeBlock`, `PropTable`, `Callout`, `DoDont`. Page components receive `{ onNavigate }` and live under `src/pages/{foundations,components,templates,guidelines}/`.

- **`cn()`** (`src/lib/cn.ts`): the className join helper used everywhere instead of a CSS-in-JS or `clsx` dependency.

## The token system (most important convention)

All visual styling is driven by CSS custom properties — **never hardcode colors, spacing, radii, font sizes, shadows, or motion values; always reference `var(--token)`.** Three stylesheets, imported in this order in `src/main.tsx`:

1. `src/styles/tokens.css` — every Design Token (`:root` vars). Colors use the **OKLCH** color space and semantic names. Includes shadcn/ui alias vars (`--primary`, `--secondary`, `--destructive`, `--ring`, …) so an installed shadcn theme can be overridden to match.
2. `src/styles/components.css` — the actual design-system component classes (`.btn`, `.card`, `.badge`, `.table`, `.tabs`, page-template classes, grids). **Class names are the spec** — `src/components/ui/*` React components and the demo pages apply these classes; they are not styled in isolation.
3. `src/styles/showcase.css` — layout/chrome for the documentation site itself (sidebar, topbar, previews, code blocks). Not part of the published design system.

Spacing is a 4px grid (`--space-1`..`--space-8`); radii `--radius-sm/md/lg/xl/full` (default `md`); type scale `--text-2xs`..`--text-3xl` (14px base); motion `--duration-fast/normal/slow`. Numeric values (KPIs, money, table number columns) use `font-variant-numeric: tabular-nums`. Icons (lucide-react) appear only at functional/interactive points, never as decoration.

## Conventions

- Import via the `@/` alias (`@ → ./src`, configured in both `vite.config.ts` and `tsconfig.json`).
- Typed UI components live in `src/components/ui/` (re-exported from `index.ts`); they wrap the `components.css` classes.
- When editing `tokens.css`/`components.css`, keep the section numbering comments (e.g. `3.1 颜色`, `6.1 按钮`) — they map to the written spec and to `DESIGN.md`.
- UI copy and comments are in Chinese; match the surrounding language.
