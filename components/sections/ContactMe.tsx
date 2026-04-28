import Messaging from "../contact/Messaging"
import SectionTitle from "../shared/SectionTitle"

function ContactMe() {
  return (
    <section
      id="contact"
      className="scroll-mt-[var(--headerMobile-offset)] flex flex-col gap-8 mb-4"
    >
      <SectionTitle title="Contact Me" />
      <Messaging />
    </section>
  )
}

export default ContactMe
