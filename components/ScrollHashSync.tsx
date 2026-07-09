"use client"

import { useEffect } from "react"
import { useActiveSection } from "@/lib/useActiveSection"

/** Keeps `location.hash` aligned with the section nearest the viewport center while scrolling. */
export default function ScrollHashSync() {
  const activeSection = useActiveSection()

  useEffect(() => {
    const nextHash = `#${activeSection}`
    if (window.location.hash === nextHash) return

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}${nextHash}`,
    )
  }, [activeSection])

  return null
}
