"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Lightbox } from "./lightbox"
import { AnimatedSection } from "./animated-section"

const artworks = [
  {
    src: "/traditional-thangka-painting-buddha-with-intricate.jpg",
    title: "Golden Buddha",
    description: "Traditional Thangka painting featuring Buddha with intricate gold leaf details",
    category: "Thangka",
  },
  {
    src: "/colorful-mandala-thangka-painting-geometric-patter.jpg",
    title: "Sacred Mandala",
    description: "Intricate mandala representing the universe in Tibetan Buddhist tradition",
    category: "Thangka",
  },
  {
    src: "/green-tara-thangka-painting-deity.jpg",
    title: "Green Tara",
    description: "Depiction of Green Tara, the female Bodhisattva of compassion",
    category: "Thangka",
  },
  {
    src: "/abstract-digital-art-flowing-colors-cyan-violet.jpg",
    title: "Digital Flow",
    description: "Contemporary digital artwork exploring color and movement",
    category: "Digital",
  },
  {
    src: "/traditional-tibetan-landscape-painting-mountains-t.jpg",
    title: "Mountain Temple",
    description: "Traditional landscape depicting a Himalayan monastery",
    category: "Landscape",
  },
  {
    src: "/lotus-flower-painting-traditional-asian-art.jpg",
    title: "Lotus Bloom",
    description: "Symbolic lotus flower representing purity and enlightenment",
    category: "Botanical",
  },
  {
    src: "/wheel-of-life-thangka-painting-buddhist-cosmology.jpg",
    title: "Wheel of Life",
    description: "The Bhavachakra depicting the cycle of existence",
    category: "Thangka",
  },
  {
    src: "/abstract-meditation-art-peaceful-zen.jpg",
    title: "Meditation",
    description: "Abstract representation of the meditative state",
    category: "Abstract",
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
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
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
