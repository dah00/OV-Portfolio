import type { Metadata } from "next"
import { Funnel_Display } from "next/font/google"
import "./globals.css"

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
      <body className={`${funnelDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
