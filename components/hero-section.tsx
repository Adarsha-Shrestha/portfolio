"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { Github, Linkedin, Mail, ArrowDown, ArrowRight, GraduationCap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <AnimatedSection direction="left" className="flex justify-center lg:justify-start order-1 lg:order-2">
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-panel">
                <Image src="/1765864530966.jpg" alt="Profile photo" fill className="object-cover" priority />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />
            </motion.div>
          </AnimatedSection>

          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <AnimatedSection delay={0.1}>
              <p className="text-primary font-medium tracking-wide uppercase text-sm">Welcome to my portfolio</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span className="text-gradient">AI Developer</span>
                <br />
                <span className="text-foreground">&amp; Researcher</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
                I craft accessible, pixel-perfect digital experiences that blend thoughtful design with robust
                engineering. My work lies at the intersection of creativity and technology.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Link
                  href="https://linkedin.com/in/shrestha-adarsha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel hover:bg-secondary transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="https://github.com/adarsha-shrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel hover:bg-secondary transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="https://scholar.google.com/citations?user=Z3S5eiAAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel hover:bg-secondary transition-all duration-300 group"
                  aria-label="Google Scholar"
                >
                  <GraduationCap className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="mailto:aadarsha.shreshtha@gmail.com"
                  className="p-3 rounded-xl glass-panel hover:bg-secondary transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
