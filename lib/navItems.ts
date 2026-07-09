/**
 * Single source of truth for the page's sections and their nav labels.
 * Both headers, the hash sync, and the active-section logic derive from this,
 * so adding/removing/reordering a section is a one-line edit here (plus the
 * matching `<section id="...">` in components/sections/*).
 */
export const NAV_ITEMS = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Me" },
] as const

export type SectionId = (typeof NAV_ITEMS)[number]["id"]

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id) as SectionId[]
