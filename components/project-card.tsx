"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Play } from "lucide-react"
import { AnimatedSection } from "./animated-section"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  videoUrl?: string
  index: number
  onClick: () => void
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  videoUrl,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        className="group cursor-pointer"
        whileHover={{ y: -8, rotateY: 2 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
      >
        <div className="relative rounded-2xl overflow-hidden glass-panel h-full">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay with actions */}
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  aria-label="View demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 rounded-full glass-panel hover:bg-secondary transition-colors"
                  aria-label="View source"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {videoUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onClick()
                  }}
                  className="p-3 rounded-full glass-panel hover:bg-secondary transition-colors"
                  aria-label="Watch video"
                >
                  <Play className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:to-accent/20 blur-xl -z-10 transition-all duration-500" />
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
