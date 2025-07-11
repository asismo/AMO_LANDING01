"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { copy, type Language, type Experience } from "@/lib/copy"

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
    { id: "enterprise", color: "#E30062" },
    { id: "playful", color: "#00DBB3" },
    { id: "comic", color: "#A9A9A9" },
  ]

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-full px-8 py-3 w-[calc(100vw-2rem)] sm:w-fit max-w-6xl shadow-md">
      <div className="grid grid-cols-3 items-center w-full">
        {/* Logo (Left) */}
        <div className="flex justify-start">
          <motion.div className="text-3xl font-bold title-font" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            am∅
          </motion.div>
        </div>

        {/* Experience Switcher (Center) */}
        <div className="flex items-center justify-center gap-3">
          {/* Always show "UX //" */}
          <span className="text-sm font-medium text-font">{copy[language].uxLabel}</span>
          <div className="flex gap-2">
            {experiences.map(({ id, color }) => (
              <motion.button
                key={id}
                onClick={() => handleExperienceChange(id)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-300 focus-ring ${
                  experience === id ? "border-gray-800 dark:border-gray-200" : "border-gray-300 dark:border-gray-600"
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
        <div className="flex items-center justify-end gap-3">
          <motion.button
            onClick={toggleLanguage}
            className="text-sm font-medium px-3 py-2 rounded-custom border border-gray-300 dark:border-gray-600 hover:border-accent transition-colors focus-ring text-font bg-white dark:bg-black flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle language"
          >
            {language.toUpperCase()}⇄{language === "en" ? "ES" : "EN"}
          </motion.button>

          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-custom border border-gray-300 dark:border-gray-600 hover:border-accent transition-colors focus-ring bg-white dark:bg-black flex items-center justify-center"
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
