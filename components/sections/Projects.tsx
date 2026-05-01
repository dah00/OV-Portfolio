import ProjectCard, { ProjectCardProps } from "../projects/ProjectCard"
import SectionTitle from "../shared/SectionTitle"
import mobileAppImage from "@/assets/images/mobile_app_screenshot.png"
import portfolioImage from "@/assets/images/OV_Portfolio_picture.png"
import onePercentImage from "@/assets/images/OnePercent_image.png"

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
    title: "Thrive",
    description:
      "A personal growth app that tracks workouts, journaling, reading notes, and side projects in one place with a simple, motivating experience.",
    image: mobileAppImage,
    stacks: ["React Native", "Typescript", "Nativewind"],
    github_link: "https://github.com/dah00/Thrive",
  },
  {
    title: "Office Supply Depot",
    description:
      "Our senior-year final project, where I led the frontend development of a full-stack web app.",
    image: mobileAppImage,
    stacks: ["JavaScript", "HTML", "CSS", "Python", "SQL"],
    github_link: "https://github.com/michmoosch/CS-160-Term-Project",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-start gap-8 py-8  scroll-mt-[var(--headerMobile-offset)]"
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
