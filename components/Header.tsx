"use client"

import styles from "./Header.module.css"
import { useState } from "react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-row justify-between items-center bg-accent">
      {/* Logo */}
      <div className="text-2xl md:text-4xl lg:text-8xl">OV.</div>

      {/* sm: mobile (toggle) + tablet (inline links). lg+: use fixed left nav below Logo. */}
      <div className="relative lg:hidden">
        {/* Hamburger only on sm and hide on md-lg+. */}
        <button
          onClick={handleOpenMenu}
          type="button"
          className={`flex flex-col items-center gap-1.5 border-0 bg-transparent p-0 md:hidden ${!isMenuOpen ? styles.hamburger : `${styles.hamburger} ${styles.active}`}`}
          aria-expanded={isMenuOpen}
          aria-controls="header-mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        {/* sm: compact panel under the hamburger. md–lg: inline row. */}
        <ul
          id="header-mobile-nav"
          className={
            isMenuOpen
              ? "max-md:absolute max-md:right-0 max-md:top-full max-md:z-50 max-md:mt-2 max-md:flex max-md:w-max max-md:min-w-40 max-md:flex-col max-md:gap-1 max-md:rounded-lg max-md:border max-md:border-foreground/20 max-md:bg-background max-md:p-3 max-md:shadow-lg md:flex md:static md:mt-0 md:min-w-0 md:w-auto md:flex-row md:items-center md:justify-around md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none"
              : "max-md:hidden md:flex md:flex-row md:items-center md:justify-around md:gap-6"
          }
        >
          <li>About Me</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
