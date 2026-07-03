"use client"

import Link from "next/link"
import Image from "next/image"
import { NAV_ITEMS } from "@/lib/navItems"
import { useActiveSection } from "@/lib/useActiveSection"
import logo from "@/assets/images/Obe Velo Logo.png"

function HeaderDesktop() {
  const activeSection = useActiveSection()

  return (
    <nav className="hidden lg:block">
      <div className="flex flex-col fixed rounded-xl  h-screen lg:w-[15rem] left-6 pt-2">
        {/* Logo */}
        <div className="text-3xl md:text-4xl lg:text-4xl">
          <Link href="#about" aria-label="Obeda Velonjatovo — home">
            <Image
              src={logo}
              alt=""
              width={60}
              height={60}
              className="rounded-lg object-contain"
              aria-hidden
            />
          </Link>
        </div>

        {/* nav menu */}
        <div className="ml-10 flex-1 flex items-center">
          <ul id="header-desktop-nav" className="text-xl flex flex-col gap-6">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = activeSection === id
              return (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "font-semibold text-accent pl-2 transition-colors"
                        : "text-foreground transition-colors hover:text-accent"
                    }
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderDesktop
