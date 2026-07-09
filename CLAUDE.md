# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio site (Next.js App Router, React 19, TypeScript, Tailwind v4). No test suite exists in this repo.

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint (flat config: eslint-config-next core-web-vitals + typescript)
```

There is no test runner configured — don't invent test commands.

## Architecture

The entire site is one route (`app/page.tsx`) that stacks four full-viewport sections in order: `AboutMe`, `Experience`, `Projects`, `ContactMe` (see `components/sections/`). There is no routing beyond this — navigation is same-page scroll via hash links (`#about`, `#experience`, `#projects`, `#contact`), not `next/navigation`.

**Section IDs are the single source of truth for navigation.** `lib/sectionScroll.ts` defines `SECTION_IDS` and `getClosestSectionId()` (finds which section's midpoint is nearest the viewport center). Both `HeaderDesktop` and `HeaderMobile` read/highlight based on this, and `ScrollHashSync` (mounted in `app/layout.tsx`) keeps `location.hash` in sync with scroll position via `history.replaceState`. If you add/remove/rename a section, update `SECTION_IDS` and the corresponding `id="..."` on the `<section>` plus nav links in both header components.

**Two header components, not one responsive component**: `HeaderDesktop` (fixed left sidebar, `lg:` breakpoint only) and `HeaderMobile` (fixed top bar with hamburger menu below `lg:`) are separate components both always rendered in `layout.tsx`, toggled via Tailwind `hidden`/`lg:hidden` classes rather than JS media queries. Keep nav links in both in sync.

**Content is hardcoded as data arrays in the section components**, not fetched or in CMS/MDX — e.g. `experiences` in `components/sections/Experience.tsx` and `projects` in `components/sections/Projects.tsx`, each rendered via a presentational card component (`JobCard`, `ProjectCard`). To update resume/project content, edit these arrays directly. Project/experience images are static imports from `assets/images/`.

**Contact form uses a Server Action, not an API route**: `components/contact/Messaging.tsx` is a client component using `useActionState`/`useFormStatus`, calling the `sendMessage` server action in `components/contact/actions.ts`, which sends mail via Resend. Requires `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` env vars (see `.env.local`); the action degrades to an error message if unset rather than throwing. Includes a hidden honeypot field (`company`) for basic bot filtering.

**Styling**: Tailwind v4 with theme tokens defined as CSS custom properties in `app/globals.css` (`@theme inline` block) — colors (`--color-accent`, `--color-surface`, `--color-muted`, etc.) and layout offsets (`--headerMobile-offset`, `--headerDesktop-offset`) are consumed as Tailwind classes (`text-accent`, `pt-[var(--headerMobile-offset)]`). Dark mode is automatic via `prefers-color-scheme`, redefining `--background`/`--foreground` only. Prefer adding new design tokens to this file over ad hoc Tailwind values when a value is reused. One custom component class exists (`.stack-styling`, for tech-stack pill badges) — follow that `@layer components` + `@apply` pattern for other repeated utility clusters instead of duplicating class strings across components.

**Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), used throughout instead of relative imports for cross-directory references (relative imports are still used for same-parent-directory files, e.g. `components/sections/*` importing from `../shared` and `../experience`).
