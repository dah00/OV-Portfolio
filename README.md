# OV Portfolio

Personal portfolio site for **Obeda Velonjatovo**, a software engineer building products for mobile and web. Single-page site with About, Experience, Projects, and Contact sections.

Live: [obeda.dev](https://obeda.dev)

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- [Resend](https://resend.com) for the contact form (Server Action)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Environment variables

Create `.env.local` (used by the contact form's server action in `components/contact/actions.ts`):

```bash
RESEND_API_KEY=      # Resend API key
CONTACT_FROM_EMAIL=  # verified sender address
CONTACT_TO_EMAIL=    # inbox that receives messages
```

For production (e.g. Vercel), also set `NEXT_PUBLIC_SITE_URL` to the canonical
origin (e.g. `https://obeda.dev`) so Open Graph, canonical, and sitemap URLs
resolve to absolute paths.

## Project structure

- `app/` — App Router entry: `layout.tsx` (metadata, JSON-LD, headers), `page.tsx` (section stack), `sitemap.ts`, `robots.ts`, `globals.css` (Tailwind theme tokens).
- `components/sections/` — the four page sections; content lives in data arrays here.
- `components/` — headers (`HeaderDesktop`/`HeaderMobile`), shared UI, contact form.
- `lib/` — `navItems.ts` (single nav config → `SECTION_IDS`), `useActiveSection.ts` (shared scroll-spy store), `site.ts` (site URL + identity).

## Deployment

Deployed on [Vercel](https://vercel.com). Push to the default branch to release.
