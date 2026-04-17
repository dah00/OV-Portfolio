import ProjectCard from "../projects/ProjectCard"
import SectionTitle from "../shared/SectionTitle"
import mobileAppImage from "@/assets/images/mobile_app_screenshot.png"

const projects = [
  {
    title: "DearFutureme",
    description: [
      "Tracks your daily self-improvement in a simple, low-pressure way",
      `Encourages you to get “1% better every day" through small`,
      "consistent actions lets you log short daily reflections or progress entries (like a micro-journal",
      "Builds a sense of progress over time by accumulating these small entries",
      "Uses reminders to help you stay consistent with the habit",
      "Focuses on simplicity and minimalism — no overwhelming features, just core habit tracking",
      "Helps users develop meaningful habits instead of chasing big, unsustainable goals",
    ],
    image: mobileAppImage,
    stacks: ["React Native", "Typescript", "Python"],
    github_link: "https://github.com/dah00/OnePercent",
  },
]

function Projects() {
  return (
    <section id="projects" className="py-8 scroll-mt-[var(--header-offset)]">
      <SectionTitle title="Projects" />
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            stacks={project.stacks}
            github_link={project.github_link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
