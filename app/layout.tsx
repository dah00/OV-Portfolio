import type { Metadata } from "next"
import { Funnel_Display } from "next/font/google"
import "./globals.css"
import Links from "@/components/Links"
import HeaderMobile from "@/components/HeaderMobile"
import HeaderDesktop from "@/components/HeaderDesktop"

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "OV Portfolio",
  description:
    "Obeda Velonjatovo's portfolio website to show and take to his Software Engineering journey",
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
