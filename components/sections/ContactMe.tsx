import Messaging from "../contact/Messaging"
import SectionTitle from "../shared/SectionTitle"

function ContactMe() {
  return (
    <section id="contact" className="scroll-mt-[var(--header-offset)] ">
      <SectionTitle title="Contact Me" />
      <Messaging />
    </section>
  )
}

export default ContactMe
