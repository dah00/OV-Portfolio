"use client"

import { useSyncExternalStore } from "react"
import { SECTION_IDS, type SectionId } from "./navItems"
import { getClosestSectionId } from "./sectionScroll"

/**
 * Module-level store for "which section is currently active" (nearest the
 * viewport center). A single set of scroll/resize/hashchange listeners is
 * shared across every consumer, so the geometry work runs once per frame
 * regardless of how many components subscribe (header + hash sync + …).
 */
let activeId: SectionId = SECTION_IDS[0]
const listeners = new Set<() => void>()
let frame = 0
let listening = false

function recompute() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const id = getClosestSectionId() as SectionId | null
    if (id && id !== activeId) {
      activeId = id
      listeners.forEach((notify) => notify())
    }
  })
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange)

  if (!listening) {
    listening = true
    recompute()
    window.addEventListener("scroll", recompute, { passive: true })
    window.addEventListener("resize", recompute)
    window.addEventListener("hashchange", recompute)
  }

  return () => {
    listeners.delete(onStoreChange)
    if (listeners.size === 0) {
      listening = false
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", recompute)
      window.removeEventListener("resize", recompute)
      window.removeEventListener("hashchange", recompute)
    }
  }
}

/** Reactive id of the section nearest the viewport center. */
export function useActiveSection(): SectionId {
  return useSyncExternalStore(
    subscribe,
    () => activeId,
    () => SECTION_IDS[0],
  )
}
