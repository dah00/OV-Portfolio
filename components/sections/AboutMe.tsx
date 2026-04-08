import Link from "next/link"

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-[var(--header-offset)]">
      <div className="h-[30rem] flex justify-center items-center">
        <p className="text-2xl px-2 md:text-4xl lg:text-6xl">
          Hi, I'm Obeda, a software engineer I turn ideas into apps that live on
          your phone and in your browser. Based in the Bay Area.{" "}
          <Link href="#contact" className="pointer text-muted">
            Open to my next adventure.
          </Link>
        </p>
      </div>
    </section>
  )
}
