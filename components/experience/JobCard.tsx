import Image from "next/image"
import linkIcon from "@/assets/icons/link.png"

export interface JobCardProps {
  timeline: string
  role: string
  companyName: string
  description: string[]
  stacks: string[]
  link: string
}

export default function JobCard({
  timeline,
  role,
  companyName,
  description,
  stacks,
  link,
}: JobCardProps) {
  return (
    <article className="flex flex-col items-start">
      {/* Employment period (e.g. "2022 — Present") */}
      <p className="text-sm text-muted sm:text-base">{timeline}</p>

      <div>
        {/* Company name links to site/careers page; icon hints it opens externally */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${companyName} — opens in a new tab`}
          className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="flex flex-row items-center gap-2">
            <h3 className="text-2xl font-semibold">{companyName}</h3>
            <Image
              src={linkIcon}
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
              aria-hidden
            />
          </span>
        </a>

        <p className="mb-4 text-base font-medium">{role}</p>
        {/* Bullet list of responsibilities or achievements */}
        <ul className="list-inside list-disc space-y-1 pl-4">
          {description.map((item, index) => (
            <li
              key={`description-${index}`}
              className="text-muted text-base md:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
        {/* Skills / tools used in this role */}
        <ul className="mt-2 flex flex-wrap gap-2">
          {stacks.map((stack, index) => (
            <li key={`stack-${index}`} className="stack-styling">
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
