"use client"

import { motion } from "framer-motion"

export function AuraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />

      {/* Animated aura orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "oklch(0.75 0.18 195 / 0.15)" }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 -right-32 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "oklch(0.7 0.2 280 / 0.12)" }}
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl"
        style={{ background: "oklch(0.65 0.15 230 / 0.1)" }}
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
