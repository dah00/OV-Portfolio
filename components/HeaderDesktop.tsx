"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const SECTION_IDS = ["about", "experience", "projects", "contact"] as const

function HeaderDesktop() {
  const [activeSection, setActiveSection] = useState<string>("about")

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2
      let closestId = sections[0].id
      let closestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        console.log("-------------------------------")
        console.log("section: ", section)
        console.log("rect.top: ", rect.top)
        console.log("rect.height: ", rect.height)
        const sectionCenter = rect.top + rect.height / 2
        const distance = Math.abs(sectionCenter - viewportCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestId = section.id
        }
      })

      setActiveSection((prev) => (prev === closestId ? prev : closestId))
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    window.addEventListener("hashchange", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
      window.removeEventListener("hashchange", updateActiveSection)
    }
  }, [])

  return (
    <nav className="hidden lg:block">
      <div className="flex flex-col fixed bg-surface/30 backdrop-blur-2xl border border-surface/60 rounded-xl  h-screen lg:w-[15rem] left-6 pt-2">
        {/* Logo */}
        <div className="text-3xl md:text-4xl lg:text-4xl">
          <Link href="#about">OV.</Link>
        </div>

        {/* nav menu */}
        <div className="ml-10 flex-1 flex items-center">
          <ul id="header-desktop-nav" className="text-xl flex flex-col gap-6">
            <li>
              <Link
                href="#about"
                aria-current={activeSection === "about" ? "page" : undefined}
                className={
                  activeSection === "about"
                    ? "font-semibold text-accent/60 pl-2"
                    : "text-foreground"
                }
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                aria-current={
                  activeSection === "experience" ? "page" : undefined
                }
                className={
                  activeSection === "experience"
                    ? "font-semibold text-accent/60 pl-2"
                    : "text-foreground"
                }
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                aria-current={activeSection === "projects" ? "page" : undefined}
                className={
                  activeSection === "projects"
                    ? "font-semibold text-accent/60 pl-2"
                    : "text-foreground"
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                aria-current={activeSection === "contact" ? "page" : undefined}
                className={
                  activeSection === "contact"
                    ? "font-semibold text-accent/60 pl-2"
                    : "text-foreground"
                }
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderDesktop
