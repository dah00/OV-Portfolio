import Image from "next/image"
import githubIcon from "@/assets/icons/github.png"
import linkIcon from "@/assets/icons/link.png"

const icon_size = 14

export default function ProjectCard() {
  return (
    <article>
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground">
          <Image
            src={githubIcon}
            width={icon_size}
            height={icon_size}
            className="h-3 w-3 object-contain"
            alt="GitHub icon "
          />
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground">
          <Image
            src={linkIcon}
            width={icon_size}
            height={icon_size}
            className="h-3 w-3 object-contain"
            alt="Link icon "
          />
        </div>
      </div>
    </article>
  )
}
