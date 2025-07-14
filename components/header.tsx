"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { copy, type Language, type Experience } from "@/lib/copy"
import Image from "next/image"

interface HeaderProps {
  language: Language
  setLanguage: (lang: Language) => void
  experience: Experience
  setExperience: (exp: Experience) => void
}

export default function Header({ language, setLanguage, experience, setExperience }: HeaderProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en"
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
  }

  const handleExperienceChange = (exp: Experience) => {
    setExperience(exp)

    // Remove all experience classes
    document.documentElement.classList.remove("exp-enterprise", "exp-playful", "exp-comic")

    // Add new experience class
    document.documentElement.classList.add(`exp-${exp}`)

    // Save to localStorage
    localStorage.setItem("experience", exp)
  }

  const experiences: { id: Experience; color: string }[] = [
    { id: "enterprise", color: "#FF006D" }, // Updated
    { id: "playful", color: "#33DBA7" }, // Updated
    { id: "comic", color: "#FF8D22" }, // Updated
  ]

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-background/60 backdrop-blur-sm rounded-full px-2 py-2 w-[calc(100vw-1rem)] sm:px-8 sm:py-3 sm:w-fit max-w-6xl shadow-md">
      <div className="grid grid-cols-3 items-center w-full">
        {/* Logo (Left) */}
        <div className="flex justify-start">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image
              src={isDark ? "/logo-asis-2025_white.png" : "/logo-asis-2025_black.png"}
              alt="Asis Martinoar Logo"
              width={80} // Adjusted width for smaller logos
              height={24} // Adjusted height for smaller logos
              className="h-auto object-contain sm:w-[100px] sm:h-[30px]"
            />
          </motion.div>
        </div>

        {/* Experience Switcher (Center) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {/* Hide "UX //" on small screens */}
          <span className="text-sm font-medium text-font hidden sm:inline">{copy[language].uxLabel}</span>
          <div className="flex gap-2">
            {experiences.map(({ id, color }) => (
              <motion.button
                key={id}
                onClick={() => handleExperienceChange(id)}
                className={`w-5 h-5 rounded-full border-2 transition-all duration-300 focus-ring sm:w-6 sm:h-6 ${
                  experience === id ? "border-foreground" : "border-border"
                }`}
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Switch to ${id} experience`}
                title={copy[language].experiences[id]}
              />
            ))}
          </div>
        </div>

        {/* Language & Theme Toggle (Right) */}
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <motion.button
            onClick={toggleLanguage}
            className="text-xs font-medium px-2 py-1 rounded-custom border border-border hover:border-accent transition-colors focus-ring bg-background flex items-center justify-center sm:text-sm sm:px-3 sm:py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </motion.button>

          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-custom border border-border hover:border-accent transition-colors focus-ring bg-background flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>
      </div>
    </header>
  )
}
