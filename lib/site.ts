/**
 * Shared site identity + canonical URL. Used by metadata (layout), sitemap,
 * robots, and JSON-LD so they can't drift apart.
 *
 * Set NEXT_PUBLIC_SITE_URL in the deploy env (e.g. Vercel) to the production
 * origin so absolute OG/canonical/sitemap URLs resolve correctly.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000")

export const person = {
  name: "Obeda Velonjatovo",
  jobTitle: "Software Engineer",
  description:
    "Software engineer building thoughtful products for mobile and web.",
  location: "San Francisco Bay Area",
  knowsAbout: [
    "Software Engineering",
    "React Native",
    "TypeScript",
    "Next.js",
    "Full-Stack Development",
  ],
  sameAs: [
    "https://github.com/dah00",
    "https://www.linkedin.com/in/obeda-velonjatovo/",
  ],
}
