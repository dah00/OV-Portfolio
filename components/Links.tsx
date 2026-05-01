import Image from "next/image"
import githubIcon from "@/assets/icons/github.png"
import linkedinIcon from "@/assets/icons/linkedin.png"
import resumeIcon from "@/assets/icons/resume.png"

const iconSize = 20

const iconClassName = "block h-5 w-5 shrink-0 object-contain"

const linkClassName =
  "inline-flex items-center justify-center rounded-md transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"

export default function Links() {
  return (
    <aside
      className="fixed bottom-5 left-5 z-40 flex w-28 items-center justify-center rounded-4xl bg-surface/60 px-2 py-2 shadow-elevated backdrop-blur-sm"
      aria-label="Profiles and resume"
    >
      <nav className="w-full" aria-label="Social and resume links">
        <ul className="m-0 grid w-full grid-cols-3 list-none place-items-center p-0 leading-none ">
          <li className="flex w-full justify-center">
            <a
              href="https://www.linkedin.com/in/obeda-velonjatovo/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <Image
                src={linkedinIcon}
                alt="LinkedIn icon"
                width={iconSize}
                height={iconSize}
                className={iconClassName}
                aria-hidden
              />
            </a>
          </li>
          <li className="flex w-full justify-center">
            <a
              href="https://github.com/dah00"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
              aria-label="GitHub profile (opens in new tab)"
            >
              <Image
                src={githubIcon}
                alt="GitHub icon"
                width={iconSize}
                height={iconSize}
                className={iconClassName}
                aria-hidden
              />
            </a>
          </li>
          <li className="flex w-full justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
              aria-label="Resume (opens in new tab)"
            >
              <Image
                src={resumeIcon}
                alt="Resume icon"
                width={iconSize}
                height={iconSize}
                className={iconClassName}
                aria-hidden
              />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
