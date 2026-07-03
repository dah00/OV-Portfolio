import type { Metadata } from "next"
import { Funnel_Display } from "next/font/google"
import "./globals.css"
import Links from "@/components/Links"
import HeaderMobile from "@/components/HeaderMobile"
import HeaderDesktop from "@/components/HeaderDesktop"
import ScrollHashSync from "@/components/ScrollHashSync"
import { person, siteUrl } from "@/lib/site"

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
})

const title = "Obeda Velonjatovo — Software Engineer"
const description =
  "Portfolio of Obeda Velonjatovo, a software engineer building thoughtful products for mobile and web. Explore my experience, projects, and how to get in touch."
const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Obeda Velonjatovo — portfolio",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Obeda Velonjatovo",
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    url: siteUrl,
    sameAs: person.sameAs,
  }

  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} ${funnelDisplay.className} antialiased px-4`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ScrollHashSync />
        <HeaderMobile />
        <HeaderDesktop />
        <main className="w-full  pt-[var(--headerMobile-offset)] lg:pt-0 lg:pl-[var(--headerDesktop-offset)] lg:max-w-[70rem] lg:mx-auto">
          {children}
        </main>
        <Links />
      </body>
    </html>
  )
}
