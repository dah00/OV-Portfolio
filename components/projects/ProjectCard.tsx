import Image, { type StaticImageData } from "next/image"
import githubIcon from "@/assets/icons/github.png"
import linkIcon from "@/assets/icons/link.png"

const icon_size = 14

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
    <article
      className="flex flex-col gap-2 p-6 bg-surface/20 rounded-xl
    md:flex-1"
    >
      {/* Image */}
      <div className="relative min-h-80 w-full">
        <Image
          src={image}
          alt={title}
          className="object-contain rounded-lg"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* description */}
      <p>{description}</p>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-xl border border-surface bg-foreground px-2 py-2 text-sm"
          aria-label="Project's GitHub repo"
        >
          <Image
            src={githubIcon}
            width={icon_size}
            height={icon_size}
            className="h-4 w-4 object-contain invert"
            alt="GitHub icon"
          />
          <span className="text-background">GitHub</span>
        </a>
        {project_link && (
          <a
            href={project_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-xl border border-surface bg-surface px-2 py-2 text-sm"
            aria-label="Project demo link"
          >
            <Image
              src={linkIcon}
              width={icon_size}
              height={icon_size}
              className="h-4 w-4 object-contain"
              alt="Project Link icon"
            />
            <p>Demo</p>
          </a>
        )}
      </div>

      {/* stacks */}
      <div className="flex flex-wrap gap-2">
        {stacks.map((stack) => (
          <p key={stack} className="stack-styling">
            {stack}
          </p>
        ))}
      </div>
    </article>
  )
}
