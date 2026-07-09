import ProjectCard, { ProjectCardProps } from "../projects/ProjectCard"
import SectionTitle from "../shared/SectionTitle"
import portfolioImage from "@/assets/images/OV_Portfolio_image.png"
import onePercentImage from "@/assets/images/OnePercent_image.png"
import fluentReadImage from "@/assets/images/FluentRead_image.png"

const projects: ProjectCardProps[] = [
  {
    title: "OV Portfolio",
    description:
      "Designed and built this responsive portfolio, focused on clean information architecture and modern UI patterns.",
    image: portfolioImage,
    stacks: ["Next.js", "Typescript", "Tailwind"],
    github_link: "https://github.com/dah00/OV-Portfolio",
    project_link: "https://obeda.dev",
  },
  {
    title: "OnePercent",
    description:
      "A minimalist habit-tracking app inspired by “1% better every day.” It helps users log short daily reflections, stay consistent, and visualize progress over time with simple charts and reminders.",
    image: onePercentImage,
    stacks: ["React Native", "Typescript", "Nativewind", "Python"],
    github_link: "https://github.com/dah00/OnePercent",
  },
  {
    title: "FluentRead",
    description:
      "A web app that helps non-native speakers improve their English pronunciation by reading passages aloud. Paste text or snap a photo of a page, read it out loud, and get AI-powered, word-by-word feedback with scores and correct audio examples.",
    image: fluentReadImage,
    stacks: ["Next.js", "JavaScript", "Tailwind", "Claude API", "Web Speech API"],
    github_link: "https://github.com/dah00/FluentRead-App",
    project_link: "https://fluentread.app/",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-start gap-8 py-8 scroll-mt-[var(--headerMobile-offset)] lg:scroll-mt-0"
    >
      <SectionTitle title="Projects" />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            stacks={project.stacks}
            github_link={project.github_link}
            project_link={project.project_link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
