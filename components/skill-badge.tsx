"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level?: "expert" | "advanced" | "intermediate"
}

export function SkillBadge({ name, level = "advanced" }: SkillBadgeProps) {
  const levelStyles = {
    expert: "bg-primary/20 text-primary border-primary/30",
    advanced: "bg-accent/20 text-accent border-accent/30",
    intermediate: "bg-secondary text-secondary-foreground border-border",
  }

  return (
    <motion.span
      className={`px-4 py-2 rounded-full text-sm font-medium border ${levelStyles[level]}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.span>
  )
}
