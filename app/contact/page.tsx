import { Navigation } from "@/components/navigation"
import { AuraBackground } from "@/components/aura-background"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me",
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/adarsha-shrestha",
    icon: Github,
    username: "adarsha-shrestha",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/shrestha-adarsha",
    icon: Linkedin,
    username: "Adarsha Shrestha",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Aadarsha_stha7",
    icon: Twitter,
    username: "@Aadarsha_stha7",
  },
  {
    name: "Email",
    href: "mailto:adarsha.shrestha@gmail.com",
    icon: Mail,
    username: "adarsha.shrestha@gmail.com",
  },
]

export default function ContactPage() {
  return (
    <>
      <AuraBackground />
      <Navigation />
      <PageTransition>
        <main className="pt-32 pb-24 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Get In Touch</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. Fill out the form or reach out through any of my social channels.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection delay={0.1}>
                <ContactForm />
              </AnimatedSection>

              {/* Contact Info */}
              <div className="space-y-8">
                <AnimatedSection delay={0.2}>
                  <div className="glass-panel rounded-2xl p-8">
                    <h2 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h2>

                    <div className="space-y-4">
                      {socialLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          target={link.href.startsWith("mailto") ? undefined : "_blank"}
                          rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                          className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <link.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {link.name}
                            </p>
                            <p className="text-sm text-muted-foreground">{link.username}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="glass-panel rounded-2xl p-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Location</h2>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="text-foreground">Kirtipur</p>
                        <p className="text-sm text-muted-foreground">Kathmandu,Nepal</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="glass-panel rounded-2xl p-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Availability</h2>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-foreground">Currently open for freelance projects and collaborations</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </>
  )
}
