import ProjectCard from "../projects/ProjectCard"
import SectionTitle from "../shared/SectionTitle"

function Projects() {
  return (
    <section id="projects" className="py-8 scroll-mt-[var(--header-offset)]">
      <SectionTitle title="Projects" />
      <ProjectCard />
    </section>
  )
}

export default Projects
