import type React from "react"
import type { Metadata } from "next"
import {
  Space_Grotesk,
  Inter,
  Montserrat,
  Open_Sans,
  Unica_One,
  Quicksand,
  Cardo,
  Josefin_Sans,
} from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Experience 1: Montserrat / Open Sans
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

// Experience 2: Unica One / Quicksand
const unicaOne = Unica_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unica-one",
  display: "swap",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

// Experience 3: Cardo / Josefin Sans
const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cardo",
  display: "swap",
})

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Asis Martinoar - Product Designer & Vibe-Coder",
  description:
    "Product Designer crafting digital experiences that users love and businesses need. From concept to code.",
  keywords: ["product design", "ux design", "ui design", "frontend development", "accessibility"],
  authors: [{ name: "Asis Martinoar" }],
  creator: "Asis Martinoar",
  openGraph: {
    title: "Asis Martinoar - Product Designer & Vibe-Coder",
    description: "Product Designer crafting digital experiences that users love and businesses need.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asis Martinoar - Product Designer & Vibe-Coder",
    description: "Product Designer crafting digital experiences that users love and businesses need.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={[
        spaceGrotesk.variable,
        inter.variable,
        montserrat.variable,
        openSans.variable,
        unicaOne.variable,
        quicksand.variable,
        cardo.variable,
        josefinSans.variable,
      ].join(" ")}
    >
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
