"use client"

import { useEffect } from "react"
import { getClosestSectionId } from "@/lib/sectionScroll"

/** Keeps `location.hash` aligned with the section nearest the viewport center while scrolling. */
export default function ScrollHashSync() {
  useEffect(() => {
    const syncHashWithScrollPosition = () => {
      const id = getClosestSectionId()
      if (!id) return

      const nextHash = `#${id}`
      if (window.location.hash === nextHash) return

      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}${nextHash}`,
      )
    }

    syncHashWithScrollPosition()
    window.addEventListener("scroll", syncHashWithScrollPosition, {
      passive: true,
    })
    window.addEventListener("resize", syncHashWithScrollPosition)
    window.addEventListener("hashchange", syncHashWithScrollPosition)

    return () => {
      window.removeEventListener("scroll", syncHashWithScrollPosition)
      window.removeEventListener("resize", syncHashWithScrollPosition)
      window.removeEventListener("hashchange", syncHashWithScrollPosition)
    }
  }, [])

  return null
}
