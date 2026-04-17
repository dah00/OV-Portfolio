import Image, { type StaticImageData } from "next/image"
import githubIcon from "@/assets/icons/github.png"
import linkIcon from "@/assets/icons/link.png"

const icon_size = 14

interface ProjectCardProps {
  title: string
  description: string[]
  image: string | StaticImageData
  stacks: string[]
  project_link?: string
  github_link: string
}

export default function ProjectCard({
  description,
  image,
  stacks,
  github_link,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-2 p-6 bg-surface/30 border border-1 border-surface rounded-xl">
      {/* Image */}
      <Image
        src={image}
        alt="Project Image"
        className="w-full object-contain border radius"
        width={32}
        height={32}
      />

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-2 py-2 bg-foreground border-1 rounded-xl"
          aria-label="Project's GitHub repo"
        >
          {/* <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground"> */}
          <Image
            src={githubIcon}
            width={icon_size}
            height={icon_size}
            className="h-3 w-3 object-contain"
            alt="GitHub icon "
            style={{ color: "Background" }}
          />
          <p className="text-background">GitHub Repo</p>
          {/* </div> */}
        </a>
        <a href="inline-flex px-2 py-2 border-1 border-foreground rounded-xl">
          {/* <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground"> */}
          <Image
            src={linkIcon}
            width={icon_size}
            height={icon_size}
            className="h-3 w-3 object-contain"
            style={{ color: "foreground" }}
            alt="Project Link icon"
          />
          <p>Demo</p>
          {/* </div> */}
        </a>
      </div>

      {/* description */}
      <p>{description}</p>

      {/* stacks */}
      <div>
        {stacks.map((stack) => (
          <div
            key={stack}
            className="flex flex-wrap gap-2 rounded-xl bg-surface/50 p-4"
          >
            <p>{stack}</p>
          </div>
        ))}
      </div>
    </article>
  )
}
