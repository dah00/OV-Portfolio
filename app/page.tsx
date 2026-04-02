
import AboutMe from "@/components/sections/AboutMe"
import ContactMe from "@/components/sections/ContactMe"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experiences" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  )
}
