"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Lightbox } from "./lightbox"
import { AnimatedSection } from "./animated-section"

const artworks = [
  {
    src: "/artwork/Dark Night.jpeg",
    title: "Dark Night",
    description: "Dark Night",
    category: "Abstract",
  },
  {
    src: "/artwork/The Woman.jpeg",
    title: "The Woman",
    description: "The depection of a Womans aura",
    category: "Abstract",
  },
  {
    src: "/artwork/Sauron.jpeg",
    title: "Sauron",
    description: "Inspired by the Lord of the Rings Tales",
    category: "Abstract",
  },
  {
    src: "/artwork/Eyes.jpeg",
    title: "Buddha Eyes",
    description: "Ever peaceful gaze of Buddha",
    category: "Abstract",
  },
  {
    src: "/artwork/The Wheel.jpeg",
    title: "Abstract Wheel",
    description: "The broken wheel of fire and water",
    category: "Abstract",
  },
  {
    src: "/artwork/Shapes.jpeg",
    title: "Shapes of Mind",
    description: "Shapes of the vivid contemplation",
    category: "Abstract",
  },
  {
    src: "/artwork/Window.png",
    title: "Traditional Window",
    description: "Representation of the traditional window",
    category: "Realism",
  },
  {
    src: "/artwork/buddha.jpg",
    title: "Buddha",
    description: "Depection of Buddha in the meditaive state",
    category: "Thangka",
  },
  {
    src: "/photoshop work/brightig.jpg",
    title: "Light Buld reimagined",
    description: "What if jelly fish was a light bulb",
    category: "Digital",
  },
  {
    src: "/artwork/Mandala.jpeg",
    title: "Sacred Mandala",
    description: "Intricate mandala representing the universe in Tibetan Buddhist tradition",
    category: "Thangka",
  },
  {
    src: "/photoshop work/owlinside.jpg",
    title: "Owl inside",
    description: "Story of an owl trapped in a womans body",
    category: "Digital",
  },
  {
    src: "/photoshop work/finaliphones.jpg",
    title: "Worlds inside Worlds",
    description: "Digital Worlds reality",
    category: "Digital",
  },
  {
    src: "/photoshop work/glowingelephant.jpg",
    title: "Shining Baby",
    description: "Blessings form the heaven",
    category: "Digital",
  },
  {
    src: "/photoshop work/hands fire and frost.jpg",
    title: "Hands of Fire and Frost",
    description: "One to distant form the other",
    category: "Digital",
  },
  {
    src: "/photoshop work/lioness.jpg",
    title: "Roar of Waves",
    description: "The ocean roars with the power of the waves",
    category: "Digital",
  },
  {
    src: "/photoshop work/sunsetwingsfinal.jpg",
    title: "Sunset Wings",
    description: "An angel with wings of sunset",
    category: "Digital",
  },
]

const categories = ["All", ...Array.from(new Set(artworks.map((a) => a.category)))]

export function ArtGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredArtworks =
    selectedCategory === "All" ? artworks : artworks.filter((a) => a.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      {/* Category Filter */}
      <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "glass-panel text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
          >
            {category}
          </button>
        ))}
      </AnimatedSection>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredArtworks.map((artwork, index) => (
          <AnimatedSection key={artwork.title} delay={index * 0.05}>
            <motion.div
              className="break-inside-avoid group cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative rounded-2xl overflow-hidden glass-panel">
                <Image
                  src={artwork.src || "/placeholder.svg"}
                  alt={artwork.title}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-lg font-semibold text-foreground">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground">{artwork.category}</p>
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:to-accent/20 blur-xl -z-10 transition-all duration-500" />
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={filteredArtworks}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : filteredArtworks.length - 1))}
        onNext={() => setCurrentImageIndex((prev) => (prev < filteredArtworks.length - 1 ? prev + 1 : 0))}
      />
    </>
  )
}
