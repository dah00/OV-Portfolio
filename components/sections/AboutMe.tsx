import Link from "next/link"

export default function AboutMe() {
  return (
    <section
      id="about"
      className="scroll-mt-[var(--headerMobile-offset)] min-h-[30rem] flex justify-center items-center"
    >
      <p className="px-2 text-2xl md:text-4xl lg:text-6xl">
        Hi, I&apos;m Obeda, a software engineer. I turn ideas into apps that
        live on your phone and in your browser. Based in the Bay Area.{" "}
        <Link
          href="#contact"
          className="text-muted underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Open to my next adventure.
        </Link>
      </p>
    </section>
  )
}
