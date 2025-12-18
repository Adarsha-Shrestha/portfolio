"use client"

import { motion } from "framer-motion"
import { FileText, Presentation, ExternalLink, Calendar, Users } from "lucide-react"
import { AnimatedSection } from "./animated-section"

interface PublicationCardProps {
  title: string
  authors: string[]
  venue: string
  year: number
  type: "journal" | "conference" | "preprint"
  pdfUrl?: string
  slidesUrl?: string
  abstract?: string
  index: number
}

export function PublicationCard({
  title,
  authors,
  venue,
  year,
  type,
  pdfUrl,
  slidesUrl,
  abstract,
  index,
}: PublicationCardProps) {
  const typeColors = {
    journal: "bg-primary/10 text-primary",
    conference: "bg-accent/10 text-accent",
    preprint: "bg-muted text-muted-foreground",
  }

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        className="glass-panel rounded-2xl p-6 h-full hover:bg-secondary/30 transition-all duration-300 group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Type badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${typeColors[type]}`}>{type}</span>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Calendar className="w-4 h-4" />
            {year}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>

        {/* Authors */}
        <div className="flex items-start gap-2 mb-3 text-sm text-muted-foreground">
          <Users className="w-4 h-4 mt-0.5 shrink-0" />
          <p className="line-clamp-2">{authors.join(", ")}</p>
        </div>

        {/* Venue */}
        <p className="text-sm text-muted-foreground italic mb-4">{venue}</p>

        {/* Abstract (if provided) */}
        {abstract && <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{abstract}</p>}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-border">
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              <FileText className="w-4 h-4" />
              PDF
            </a>
          )}
          {slidesUrl && (
            <a
              href={slidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              <Presentation className="w-4 h-4" />
              Slides
            </a>
          )}
          <a
            href="https://arxiv.org/abs/2512.14585"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground text-sm font-medium hover:text-foreground transition-colors ml-auto"
          >
            <ExternalLink className="w-4 h-4" />
            Cite
          </a>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
