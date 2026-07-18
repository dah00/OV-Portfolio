import Link from "next/link"

export default function AboutMe() {
  return (
    <section
      id="about"
      className="scroll-mt-[var(--headerMobile-offset)] lg:scroll-mt-0 flex w-full items-center justify-center
      min-h-[35rem] lg:min-h-[44rem] "
    >
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl leading-tight md:text-4xl lg:text-5xl">
          Hi,
          <span className="mt-3 block pl-4">
            I&apos;m <span className="text-accent">Obe</span>da Velonjatovo, a
            software engineer building thoughtful products for mobile and web.
          </span>
        </h1>

        <p className="mt-6 pl-4 text-lg leading-relaxed text-foreground/90 md:text-xl">
          Based in the Bay Area, I focus on clean UX and practical features for
          a world where AI is becoming part of everyday workflows.
          <Link
            href="#contact"
            className="ml-2 text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Open to my next adventure.
          </Link>
        </p>
      </div>
    </section>
  )
}
