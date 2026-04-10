import Image from "next/image"
import githubIcon from "@/assets/icons/github.png"
import linkIcon from "@/assets/icons/link.png"

const icon_size = 14

export default function ProjectCard() {
  return (
    <article>
      <div className={``}>
        <div className="w-6 h-6 rounded-full bg-foreground">
          <Image
            src={githubIcon}
            width={icon_size}
            height={icon_size}
            className="w-3 h-3 object-contain"
            alt="GitHub icon "
          />
        </div>
        <div className="w-6 h-6 rounded-full bg-foreground">
          <Image
            src={linkIcon}
            width={icon_size}
            height={icon_size}
            className="w-3 h-3 object-contain"
            alt="Link icon "
          />
        </div>
      </div>
    </article>
  )
}
