import Image from "next/image"
import githubIcon from "@/assets/icons/github.png"
import linkedinIcon from "@/assets/icons/linkedin.png"
import resumeIcon from "@/assets/icons/resume.png"

const iconSize = 20

const iconClassName = "h-5 w-5 object-contain"

const linkClassName =
  "inline-flex rounded-md p-1 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"

export default function Links() {
  return (
    <aside
      className="fixed bottom-5 left-5 z-40 flex items-center gap-4 rounded-4xl bg-surface p-2 shadow-elevated"
      aria-label="Profiles and resume"
    >
      <nav aria-label="Social and resume links">
        <ul className="flex items-center gap-2">
          <li>
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
          <li>
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
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
              // className="inline-flex cursor-not-allowed rounded-md p-1 opacity-50"
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
