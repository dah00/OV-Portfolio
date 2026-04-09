import Image from "next/image"
import linkIcon from "@/assets/icons/link.png"

export interface JobCardProps {
  timeline: string
  role: string
  company_name: string
  description: string[]
  stacks: string[]
  link: string
}

export default function JobCard({
  timeline,
  role,
  company_name,
  description,
  stacks,
  link,
}: JobCardProps) {
  return (
    <article className="flex flex-col items-start">
      <div>
        <p className="text-sm text-muted sm:text-base">{timeline}</p>
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${company_name} — opens in a new tab`}
            className="inline-block"
          >
            <span className="flex flex-row items-center gap-2">
              <span className="text-xl font-semibold">{company_name}</span>
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
          <ul className="list-inside list-disc pl-4">
            {description.map((item) => (
              <li key={item} className="text-muted">
                {item}
              </li>
            ))}
          </ul>
          <ul className="mt-2 flex flex-wrap gap-2 pl-4">
            {stacks.map((stack) => (
              <li
                key={stack}
                className="rounded-md bg-accent/15 px-2 py-0.5 text-sm text-foreground ring-1 ring-accent/50"
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
