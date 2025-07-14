"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import { copy, type Language, type Experience } from "@/lib/copy"

// Import fonts
import { Montserrat, Open_Sans } from "next/font/google"
import { Unica_One } from "next/font/google"
import { Quicksand } from "next/font/google"
import { Cardo } from "next/font/google"
import { Josefin_Sans } from "next/font/google"

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

const cardo = Cardo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cardo",
  display: "swap",
})

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
})

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("en")
  const [experience, setExperience] = useState<Experience>("enterprise")

  useEffect(() => {
    // Load saved preferences
    const savedLang = localStorage.getItem("language") as Language
    const savedExp = localStorage.getItem("experience") as Experience

    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      setLanguage(savedLang)
    }

    if (savedExp && ["enterprise", "playful", "comic"].includes(savedExp)) {
      setExperience(savedExp)
      document.documentElement.classList.add(`exp-${savedExp}`)
    } else {
      document.documentElement.classList.add("exp-enterprise")
    }
  }, [])

  const getSlideImage = () => {
    switch (experience) {
      case "enterprise":
        return "/mainpic_e1.jpg"
      case "playful":
        return "/mainpic_e2.jpg"
      case "comic":
        return "/mainpic_e3.jpg"
      default:
        return "/mainpic_e1.jpg" // Default to enterprise image if experience is not matched
    }
  }

  const currentCopy = copy[language]

  return (
    <div
      className={`${montserrat.variable} ${openSans.variable} ${unicaOne.variable} ${quicksand.variable} ${cardo.variable} ${josefinSans.variable} font-sans`}
    >
      <Header language={language} setLanguage={setLanguage} experience={experience} setExperience={setExperience} />

      <main className="pt-24">
        {" "}
        {/* Added padding-top to main content */}
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex items-center">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold title-font leading-tight">{currentCopy.heroSubtitle}</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold title-font leading-tight">
                  {currentCopy.heroTitle}
                </h1>

                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl text-font">
                  {currentCopy.heroBody}
                </p>

                <motion.a
                  href="https://www.figma.com/deck/SXaKdBwH5gTEfG8RXrXTOv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {currentCopy.slideCTA}
                  <ExternalLink size={18} />
                </motion.a>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <motion.a
                  href="https://www.figma.com/deck/SXaKdBwH5gTEfG8RXrXTOv" // Updated link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-ring rounded-custom overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    src={getSlideImage() || "/placeholder.svg"}
                    alt="Design presentation slide"
                    width={600} // Set a consistent width
                    height={600} // Set a consistent height, adjust if images are not square
                    className="w-full h-auto rounded-custom shadow-2xl object-contain" // Use object-contain to prevent cropping if aspect ratio varies
                    priority
                  />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Old Site Section (Two Columns) */}
        <section className="py-20 bg-[var(--section2-bg)]">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column: Text */}
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold title-font">{currentCopy.rebuildTitle}</h2>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto md:mx-0 text-font">
                  {currentCopy.rebuildBody}
                </p>
              </div>

              {/* Right Column: CTA */}
              <div className="text-center md:text-right">
                <motion.a
                  href="https://www.asismartinoar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-secondary-on-accent"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {currentCopy.oldSiteCTA}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Medium Section (Single Column, Centered) */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold title-font">
                {currentCopy.mediumCall.split("→")[0].trim()}
              </h3>
              <motion.a
                href="https://medium.com/@asismartinoar/how-i-vibe-coded-this"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-link"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {"→"}
                <ExternalLink size={18} />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-sm text-foreground/60 text-font"
          >
            {currentCopy.footer}
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
