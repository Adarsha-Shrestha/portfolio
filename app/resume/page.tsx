import { Navigation } from "@/components/navigation"
import { AuraBackground } from "@/components/aura-background"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { SkillBadge } from "@/components/skill-badge"
import { Download, Briefcase, GraduationCap, Award, Code2 } from "lucide-react"

export const metadata = {
  title: "Resume",
  description: "Professional resume and CV",
}

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description:
      "Leading development of AI-powered features, mentoring junior developers, and architecting scalable solutions.",
  },
  {
    title: "Research Assistant",
    company: "University Research Lab",
    period: "2020 - 2022",
    description: "Conducted research on machine learning applications for cultural heritage preservation.",
  },
  {
    title: "Software Developer",
    company: "Startup Inc",
    period: "2018 - 2020",
    description: "Full-stack development of web applications using React, Node.js, and PostgreSQL.",
  },
]

const education = [
  {
    degree: "Ph.D. in Computer Science",
    school: "University Name",
    period: "2020 - Present",
    description: "Research focus on machine learning and computer vision for art analysis.",
  },
  {
    degree: "M.S. in Computer Science",
    school: "University Name",
    period: "2018 - 2020",
    description: "Thesis on deep learning for image style transfer.",
  },
  {
    degree: "B.S. in Computer Science",
    school: "University Name",
    period: "2014 - 2018",
    description: "Graduated with honors, minor in Fine Arts.",
  },
]

const awards = [
  { title: "Best Paper Award", organization: "CVPR 2024", year: "2024" },
  { title: "Research Fellowship", organization: "National Science Foundation", year: "2023" },
  { title: "Graduate Excellence Award", organization: "University Name", year: "2022" },
  { title: "Dean's List", organization: "University Name", year: "2018" },
]

const skills = {
  expert: ["Python", "TypeScript", "React", "TensorFlow", "PyTorch"],
  advanced: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
  intermediate: ["Kubernetes", "GraphQL", "Rust", "Go"],
}

export default function ResumePage() {
  return (
    <>
      <AuraBackground />
      <Navigation />
      <PageTransition>
        <main className="pt-32 pb-24 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <AnimatedSection className="text-center mb-12">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Professional Background</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Resume & <span className="text-gradient">CV</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                A summary of my professional experience, education, and technical skills.
              </p>

              {/* Download Button */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </AnimatedSection>

            {/* Experience Section */}
            <AnimatedSection delay={0.1} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Experience</h2>
              </div>

              <div className="space-y-6">
                {experience.map((item, index) => (
                  <AnimatedSection key={item.title} delay={0.1 + index * 0.05}>
                    <div className="glass-panel rounded-xl p-6 hover:bg-secondary/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <span className="text-sm text-muted-foreground">{item.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-2">{item.company}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Education Section */}
            <AnimatedSection delay={0.2} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <AnimatedSection key={item.degree} delay={0.2 + index * 0.05}>
                    <div className="glass-panel rounded-xl p-6 hover:bg-secondary/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                        <span className="text-sm text-muted-foreground">{item.period}</span>
                      </div>
                      <p className="text-accent font-medium mb-2">{item.school}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Skills Section */}
            <AnimatedSection delay={0.3} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Skills</h2>
              </div>

              <div className="glass-panel rounded-xl p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Expert</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.expert.map((skill) => (
                      <SkillBadge key={skill} name={skill} level="expert" />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Advanced</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.advanced.map((skill) => (
                      <SkillBadge key={skill} name={skill} level="advanced" />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Intermediate</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.intermediate.map((skill) => (
                      <SkillBadge key={skill} name={skill} level="intermediate" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Awards Section */}
            <AnimatedSection delay={0.4}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Awards & Honors</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {awards.map((award, index) => (
                  <AnimatedSection key={award.title} delay={0.4 + index * 0.05}>
                    <div className="glass-panel rounded-xl p-4 hover:bg-secondary/30 transition-colors">
                      <h3 className="font-semibold text-foreground">{award.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {award.organization} • {award.year}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </main>
      </PageTransition>
    </>
  )
}
