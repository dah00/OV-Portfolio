import type { Metadata } from "next"
import { Funnel_Display } from "next/font/google"
import "./globals.css"
import Links from "@/components/Links"
import HeaderMobile from "@/components/HeaderMobile"
import HeaderDesktop from "@/components/HeaderDesktop"
import ScrollHashSync from "@/components/ScrollHashSync"

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
})

/** Canonical site URL for metadata (OG/Twitter). Set in Vercel: NEXT_PUBLIC_SITE_URL=https://yourdomain.com */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Obeda Velonjatovo Portfolio",
  description:
    "Obeda Velonjatovo's portfolio website to show and take to his Software Engineering journey",
  openGraph: {
    title: "Obeda Velonjatovo Portfolio",
    description:
      "Obeda Velonjatovo's portfolio website to show and take to his Software Engineering journey",
    url: "/",
    siteName: "Obeda Velonjatovo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Obeda Velonjatovo — portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obeda Velonjatovo Portfolio",
    description:
      "Obeda Velonjatovo's portfolio website to show and take to his Software Engineering journey",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Obeda Velonjatovo — portfolio",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} ${funnelDisplay.className} antialiased px-4`}
      >
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
