"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useCallback } from "react"

interface LightboxProps {
  images: {
    src: string
    title: string
    description?: string
  }[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleKeyDown])

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 rounded-full glass-panel hover:bg-secondary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onPrev()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-panel hover:bg-secondary transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-panel hover:bg-secondary transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[85vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-auto max-h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.title}
                width={1200}
                height={800}
                className="object-contain w-full h-full max-h-[70vh]"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold font-serif text-foreground">{currentImage.title}</h3>
              {currentImage.description && <p className="text-muted-foreground mt-2">{currentImage.description}</p>}
              <p className="text-sm text-muted-foreground mt-2">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
