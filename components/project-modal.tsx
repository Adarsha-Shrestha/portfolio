"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ExternalLink, Github, Play } from "lucide-react"
import { useEffect } from "react"

interface Project {
  title: string
  description: string
  fullDescription: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  videoUrl?: string
  screenshots?: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full glass-panel rounded-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full glass-panel hover:bg-secondary transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero image */}
            <div className="relative aspect-video">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">{project.fullDescription}</p>

              {/* Video embed */}
              {project.videoUrl && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Play className="w-5 h-5 text-primary" />
                    Demo Video
                  </h3>
                  <div className="relative aspect-video rounded-xl overflow-hidden glass-panel">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} demo`}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Screenshots</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={screenshot || "/placeholder.svg"}
                          alt={`Screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel font-medium hover:bg-secondary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
