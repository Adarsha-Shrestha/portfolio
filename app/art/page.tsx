import { Navigation } from "@/components/navigation"
import { AuraBackground } from "@/components/aura-background"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { ArtGallery } from "@/components/art-gallery"

export const metadata = {
  title: "Art Gallery",
  description: "Explore my collection of Thangka paintings and artwork",
}

export default function ArtPage() {
  return (
    <>
      <AuraBackground />
      <Navigation />
      <PageTransition>
        <main className="pt-32 pb-24 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Creative Works</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
                Art <span className="text-gradient">Gallery</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A collection of traditional Thangka paintings, digital artwork, and other creative expressions that
                reflect my artistic journey and cultural heritage.
              </p>
            </AnimatedSection>

            {/* Gallery */}
            <ArtGallery />
          </div>
        </main>
      </PageTransition>
    </>
  )
}
