"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { getClosestSectionId } from "@/lib/sectionScroll"
import Image from "next/image"
import logo from "@/assets/images/Obe Velo Logo.png"

function HeaderDesktop() {
  const [activeSection, setActiveSection] = useState<string>("about")

  useEffect(() => {
    const updateActiveSection = () => {
      const closestId = getClosestSectionId()
      if (!closestId) return
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
      <div className="flex flex-col fixed rounded-xl  h-screen lg:w-[15rem] left-6 pt-2">
        {/* Logo */}
        <div className="text-3xl md:text-4xl lg:text-4xl">
          <Link href="#about">
            <Image
              src={logo}
              alt="GitHub icon"
              width={60}
              height={60}
              className="rounded-lg rounded-lg object-contain"
              aria-hidden
            />
          </Link>
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
                    ? "font-semibold text-accent pl-2"
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
                    ? "font-semibold text-accent pl-2"
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
                    ? "font-semibold text-accent pl-2"
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
                    ? "font-semibold text-accent pl-2"
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
