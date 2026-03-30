export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Optional: fixed nav with href="#about" etc. */}
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section id="about" className="min-h-screen scroll-mt-16">
          {/* About */}
        </section>
        <section id="experience" className="min-h-screen scroll-mt-16">
          {/* Experiences */}
        </section>
        <section id="projects" className="min-h-screen scroll-mt-16">
          {/* Projects */}
        </section>
        <section id="contact" className="min-h-screen scroll-mt-16">
          {/* Contact */}
        </section>
      </main>
    </div>
  )
}
