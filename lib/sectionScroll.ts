export const SECTION_IDS = ["about", "experience", "projects", "contact"] as const

export type SectionId = (typeof SECTION_IDS)[number]

/** Which section’s midpoint is closest to the vertical center of the viewport (client-only). */
export function getClosestSectionId(): string | null {
  const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
    (el): el is HTMLElement => Boolean(el),
  )

  if (!sections.length) return null

  const viewportCenter = window.innerHeight / 2
  let closestId = sections[0].id
  let closestDistance = Number.POSITIVE_INFINITY

  for (const section of sections) {
    const rect = section.getBoundingClientRect()
    const sectionCenter = rect.top + rect.height / 2
    const distance = Math.abs(sectionCenter - viewportCenter)

    if (distance < closestDistance) {
      closestDistance = distance
      closestId = section.id
    }
  }

  return closestId
}
