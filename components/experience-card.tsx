"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { ExperienceCarousel } from "./experience-carousel"

interface ExperienceCardProps {
  title: string
  organization: string
  location: string
  date: string
  description: string
  images: string[]
  index: number
  isReversed?: boolean
}

export function ExperienceCard({
  title,
  organization,
  location,
  date,
  description,
  images,
  index,
  isReversed = false,
}: ExperienceCardProps) {
  return (
    <AnimatedSection delay={index * 0.1} direction={isReversed ? "right" : "left"}>
      <motion.div
        className="glass-panel rounded-2xl overflow-hidden hover:bg-secondary/30 transition-all duration-300"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          {/* Image carousel */}
          <div className="lg:w-1/2 p-4">
            <ExperienceCarousel images={images} title={title} />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 p-6 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {location}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-primary font-medium mb-4">{organization}</p>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
