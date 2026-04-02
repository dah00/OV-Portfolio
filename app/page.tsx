"use client"

import { useState } from "react"

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experiences" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const goToSection = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile header + hamburger */}
      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-surface/20 bg-background/80 px-4 py-3 backdrop-blur lg:hidden">
        <div className="font-semibold tracking-tight">Your Logo</div>

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen(true)}
          className="rounded-md px-3 py-2 text-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {/* 3-bar icon (simple text fallback) */}
          <span className="block leading-none">☰</span>
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-4 top-14 w-64 rounded-xl border border-surface/20 bg-background p-4 shadow-lg">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    goToSection(item.id)
                  }}
                  className="block rounded-lg px-3 py-2 text-muted hover:text-accent hover:bg-surface/10"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="hidden lg:block">
        <div className="fixed left-0 top-0 h-screen w-72 border-r border-surface/20 bg-background">
          <div className="px-6 pt-8">
            <div className="font-semibold tracking-tight">Your Logo</div>
          </div>

          <nav className="mt-8 px-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    goToSection(item.id)
                  }}
                  className="block rounded-lg px-3 py-2 text-muted hover:text-accent hover:bg-surface/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      {/* Content column */}
      <main className="lg:pl-72">
        {/* On desktop, make only the content scroll */}
        <div className="lg:h-screen lg:overflow-y-auto">
          {/* On mobile, compensate for fixed header */}
          <div className="pt-14 lg:pt-0">
            <section
              id="about"
              className="min-h-screen scroll-mt-16 px-4 py-16 lg:px-10 lg:py-20"
            >
              {/* TODO: About/Home content */}
            </section>

            <section
              id="experience"
              className="min-h-screen scroll-mt-16 px-4 py-16 lg:px-10 lg:py-20"
            >
              {/* TODO: Experiences content */}
            </section>

            <section
              id="projects"
              className="min-h-screen scroll-mt-16 px-4 py-16 lg:px-10 lg:py-20"
            >
              {/* TODO: Projects content */}
            </section>

            <section
              id="contact"
              className="min-h-screen scroll-mt-16 px-4 py-16 lg:px-10 lg:py-20"
            >
              {/* TODO: Contact content */}
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
