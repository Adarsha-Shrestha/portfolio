"use client"

import { AnimatedSection } from "./animated-section"
import { Code2, Palette, BookOpen, Award } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Development",
    description: "Building robust, scalable applications with modern technologies",
  },
  {
    icon: Palette,
    title: "Art & Design",
    description: "Creating Thangka paintings and traditional artwork",
  },
  {
    icon: BookOpen,
    title: "Research",
    description: "Publishing academic work in top conferences",
  },
  {
    icon: Award,
    title: "Fellowships",
    description: "Recognized through prestigious programs and awards",
  },
]

export function AboutSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I&apos;m passionate about crafting experiences that blend thoughtful design with technical excellence. My
            journey spans software development, traditional art, and academic research.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="glass-panel rounded-2xl p-6 h-full hover:bg-secondary/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
