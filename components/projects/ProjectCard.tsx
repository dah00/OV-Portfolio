import Image, { type StaticImageData } from "next/image"
import githubIcon from "@/assets/icons/github.png"
import linkIcon from "@/assets/icons/link.png"

const iconSize = 14

export interface ProjectCardProps {
  title: string
  description: string
  image: string | StaticImageData
  stacks: string[]
  project_link?: string
  github_link: string
}

export default function ProjectCard({
  title,
  description,
  image,
  stacks,
  project_link,
  github_link,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-2 overflow-hidden rounded-xl border border-surface bg-surface/20 pb-6 md:flex-1">
      {/* Fixed aspect ratio + object-cover keeps every card uniform regardless
          of the source image's dimensions (no letterboxing / uneven margins). */}
      <div className="relative aspect-[16/10] w-full border-b border-surface bg-surface">
        <Image
          src={image}
          alt={title}
          className="object-cover object-top"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-xl border border-surface bg-foreground px-2 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`GitHub repository for ${title}`}
          >
            <Image
              src={githubIcon}
              width={iconSize}
              height={iconSize}
              className="h-4 w-4 object-contain invert"
              alt=""
              aria-hidden
            />
            <span className="text-background">GitHub</span>
          </a>
          {project_link ? (
            <a
              href={project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-xl border border-surface bg-surface px-2 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={`Live demo for ${title}`}
            >
              <Image
                src={linkIcon}
                width={iconSize}
                height={iconSize}
                className="h-4 w-4 object-contain"
                alt=""
                aria-hidden
              />
              <span>Demo</span>
            </a>
          ) : null}
        </div>

        <p>{description}</p>

        <ul className="flex flex-wrap gap-2">
          {stacks.map((stack, index) => (
            <li key={`${title}-${stack}-${index}`} className="stack-styling">
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
