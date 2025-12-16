import { Navigation } from "@/components/navigation"
import { AuraBackground } from "@/components/aura-background"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { ProjectsGrid } from "@/components/projects-grid"

export const metadata = {
  title: "Projects",
  description: "Explore my software development projects and technical work",
}

export default function ProjectsPage() {
  return (
    <>
      <AuraBackground />
      <Navigation />
      <PageTransition>
        <main className="pt-32 pb-24 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Technical Work</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A showcase of my technical projects spanning web development, machine learning, and creative
                applications. Each project represents a unique challenge and learning experience.
              </p>
            </AnimatedSection>

            {/* Projects Grid */}
            <ProjectsGrid />
          </div>
        </main>
      </PageTransition>
    </>
  )
}
