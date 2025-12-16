import { Navigation } from "@/components/navigation"
import { AuraBackground } from "@/components/aura-background"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  return (
    <>
      <AuraBackground />
      <Navigation />
      <PageTransition>
        <main>
          <HeroSection />
          <AboutSection />
        </main>
      </PageTransition>
    </>
  )
}
