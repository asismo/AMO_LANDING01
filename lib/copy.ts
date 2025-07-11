export const copy = {
  en: {
    heroSubtitle: "Hi! I'm Asís.",
    heroTitle: "I design Products and Services, lead teams, and explore the future of design with AI.",
    heroBody: "Here is a quick Showcase of my top projects.",
    slideCTA: "Launch Presentation (5 mins.)",
    rebuildTitle: "Full Portfolio",
    rebuildBody:
      "I am rebuilding my website. In the meantime check out the old one for full Case Studies and further information.",
    oldSiteCTA: "Go to my Website →",
    mediumCall: "Read how I vibe-coded this Page →",
    footer: "Vibe-coded in a day with React, Tailwind & Framer Motion, using V0.",
    // experienceLabel: "Experiencia:", // Removed
    experiences: {
      enterprise: "Enterprise",
      playful: "Playful",
      comic: "Comic",
    },
    uxLabel: "UX //", // Updated to be consistent
  },
  es: {
    heroSubtitle: "¡Hola! Soy Asís.",
    heroTitle: "Diseño Productos y Servicios, lidero equipos y exploro el futuro del diseño con IA.",
    heroBody: "Aquí tienes una muestra rápida de mis mejores proyectos.",
    slideCTA: "Ver Presentación (5 min.)",
    rebuildTitle: "Portafolio Completo",
    rebuildBody:
      "Estoy reconstruyendo mi sitio web. Mientras tanto, visita el antiguo para ver casos de estudio completos y más información.",
    oldSiteCTA: "Ir a mi Sitio Web →",
    mediumCall: "Lee cómo vibecodié esta Página →",
    footer: "Vibe-codificado en un día con React, Tailwind & Framer Motion, usando V0.",
    // experienceLabel: "Experiencia:", // Removed
    experiences: {
      enterprise: "Empresarial",
      playful: "Divertido",
      comic: "Cómic",
    },
    uxLabel: "UX //", // Updated to be consistent
  },
} as const

export type Language = keyof typeof copy
export type Experience = "enterprise" | "playful" | "comic"
