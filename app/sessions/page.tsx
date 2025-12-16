import { Navigation } from "@/components/navigation"
import { AuraBackground } from "@/components/aura-background"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { ExperienceCard } from "@/components/experience-card"

export const metadata = {
  title: "Sessions & Experiences | Portfolio",
  description: "Fellowships, events, and memorable experiences",
}

const experiences = [
    {
  title: "Student Partnership Fellowship",
  organization: "Leapfrog Technology",
  location: "Seattle, WA",
  date: "April – October 2025",
  description:
    "Selected as one of 20 student partners from over 600 applicants. Delivered multiple knowledge-sharing sessions while gaining hands-on exposure to design thinking, agile development, and project management. Built a full-stack AI-powered exam preparation platform as a capstone project, featuring an agentic RAG system with automated exam generation and evaluation.",
  images: [
    "/leapfrog-student-partner-session-dark.jpg",
    "/ai-capstone-project-dashboard.jpg",
  ],
},
  {
  title: "Seeds for the Future Program",
  organization: "Huawei",
  location: "Shenzhen, China",
  date: "June – August 2025",
  description:
    "Nepal's representative in Huawei’s flagship global program. Received hands-on training in 5G, AI, and Cloud through Huawei ICT Academy, explored smart energy, governance, and drone technologies, and participated in cross-cultural exchanges with students from 10 countries. Engaged in roundtable discussions with global industry leaders on sustainable innovation.",
  images: [
    "/1765864530966.jpg",
    "/huawei-ict-training-lab-experience.jpg",
    "/huawei-ict-training-lab-experience.jpg",
  ],
},
  {
  title: "Agile & Project Management Workshop",
  organization: "Khwopa College of Engineering",
  location: "Bhaktapur, Nepal",
  date: "June 2025",
  description:
    "Delivered a practical workshop introducing Agile methodologies, Scrum, and Kanban frameworks. Trained participants on real-world project workflows using Jira, enabling teams to improve collaboration, sprint planning, and task management aligned with industry practices.",
  images: [
    "/agile-workshop-jira-training.jpg",
    "/kanban-scrum-hands-on-session.jpg",
  ],
},
  {
  title: "Design Thinking for Innovation",
  organization: "Khwopa College of Engineering",
  location: "Bhaktapur, Nepal",
  date: "May 2025",
  description:
    "Conducted an interactive workshop on design thinking principles with a focus on user-centric problem solving. Led hands-on activities including empathy mapping, ideation, and prototyping, enabling participants to apply the double-diamond approach to real-world challenges.",
  images: [
    "/design-thinking-workshop-interactive.jpg",
    "/double-diamond-activity-session.jpg",
  ],
},
  {
  title: "Winner & Most Innovative Project",
  organization: "CodeYatra 2025",
  location: "Kathmandu, Nepal",
  date: "February 2025",
  description:
    "Developed EcoGrid, an AI- and IoT-powered smart waste management system optimizing waste collection, classification, and energy conversion. The project showcased data-driven decision-making for sustainable urban infrastructure and was awarded for innovation and real-world impact.",
  images: [
    "/codeyatra-ecogrid-presentation.jpg",
    "/smart-waste-management-dashboard.jpg",
  ],
},
  {
  title: "Best AI Implementation Award",
  organization: "X-Hack 3.0",
  location: "Dharan, Nepal",
  date: "January 2025",
  description:
    "Won the Best AI Implementation Award for designing a personalized learning system that adapts to individual student pace. Leveraged AI-driven insights to improve engagement, learning efficiency, and outcome tracking, demonstrating strong alignment between pedagogy and intelligent systems.",
  images: [
    "/xhack-ai-award-ceremony.jpg",
    "/personalized-learning-system-demo.jpg",
  ],
},
{
  title: "2nd Runner-Up – AI for Education",
  organization: "Dristi 3.0 Hackathon",
  location: "Kathmandu, Nepal",
  date: "January 2025",
  description:
    "Built an AI-powered learning platform integrating interactive content and smart exam proctoring. The solution emphasized accessibility, engagement, and integrity in digital education environments.",
  images: [
    "/dristi-hackathon-team-photo.jpg",
    "/ai-learning-platform-interface.jpg",
  ],
},
  {
  title: "Presentation Excellence – Hack the Circle",
  organization: "Khwopa College of Engineering",
  location: "Bhaktapur, Nepal",
  date: "November 2024",
  description:
    "Invited as a keynote speaker to deliver a session on crafting impactful hackathon presentations. Guided over 120 participants on storytelling, structure, and confident delivery, helping them improve their presentation skills for technical competitions and demos.",
  images: [
    "/hack-the-circle-keynote-speaking.jpg",
    "/presentation-excellence-session-audience.jpg",
  ],
},
  {
  title: "AI Fellowship",
  organization: "Fusemachines",
  location: "New York, USA",
  date: "April – October 2024",
  description:
    "Completed an intensive AI fellowship focused on Data Science, Machine Learning, and Deep Learning. Worked on end-to-end AI/ML pipelines from data preprocessing to deployment. Built an in-browser AI-based exam proctoring system as a capstone project, integrating multiple models to detect cheating behaviors in real time.",
  images: [
    "/fusemachines-ai-fellowship-project-demo.jpg",
    "/online-proctoring-system-interface-dark.jpg",
  ],
},
  {
  title: "Best Presentation Award",
  organization: "HACKADEMIA 2.0",
  location: "Kathmandu, Nepal",
  date: "September 2024",
  description:
    "Awarded Best Presentation for InvigilAI, an in-browser AI proctoring system integrating multimodal models for detecting cheating through eye, head, and sound analysis. Recognized for clarity of storytelling, technical depth, and impactful live demonstration.",
  images: [
    "/hackademia-presentation-stage.jpg",
    "/invigilai-system-live-demo.jpg",
  ],
},
  {
  title: "Winner – AI for Healthcare",
  organization: "Kathcode Hackathon",
  location: "Lalitpur, Nepal",
  date: "July 2024",
  description:
    "Won first place for developing an AI-powered pneumonia detection system using Grad-CAM for interpretable medical imaging. The solution significantly reduced diagnostic time while improving trust through visual explanations of model predictions.",
  images: [
    "/kathcode-hackathon-winner.jpg",
    "/pneumonia-detection-gradcam-visual.jpg",
  ],
},
  {
    title: "Research Fellowship",
    organization: "National Science Foundation",
    location: "Washington, D.C.",
    date: "Summer 2024",
    description:
      "Selected for a prestigious fellowship program focusing on AI research. Collaborated with leading researchers on cutting-edge projects in machine learning and computer vision. Presented findings at the annual symposium.",
    images: [
      "/1765864530966.jpg",
      "/research-lab-team-collaboration-academic-setting.jpg",
    ],
  },
  {
    title: "International Conference Speaker",
    organization: "CVPR 2024",
    location: "Seattle, WA",
    date: "June 2024",
    description:
      "Delivered a talk on deep learning approaches for traditional art recognition. Engaged with researchers from around the world and established valuable collaborations for future research.",
    images: [
      "/conference-speaker-presentation-tech-event-dark-ligh.jpg",
      "/conference-networking-event-professional-setting.jpg",
    ],
  },
  {
    title: "Art Residency Program",
    organization: "Cultural Heritage Foundation",
    location: "Kathmandu, Nepal",
    date: "Winter 2023",
    description:
      "Participated in a month-long residency studying traditional Thangka painting techniques under master artists. Documented traditional methods and explored the intersection of ancient art and modern technology.",
    images: [
      "/art-residency-traditional-painting-workshop-nepal.jpg",
      "/thangka-painting-studio-traditional-art-workspace.jpg",
    ],
  },
  {
    title: "Hackathon Winner",
    organization: "TechCrunch Disrupt",
    location: "San Francisco, CA",
    date: "October 2023",
    description:
      "Led a team to first place with an AI-powered cultural heritage preservation tool. The project combined computer vision with natural language processing to automatically catalog and describe artwork.",
    images: ["/hackathon-team-winning-moment-tech-event.jpg", "/hackathon-coding-session-team-collaboration.jpg"],
  },
  {
    title: "Graduate Teaching Assistant",
    organization: "Computer Science Department",
    location: "University Campus",
    date: "2022 - 2023",
    description:
      "Taught undergraduate courses in machine learning and computer vision. Developed new course materials and mentored students on their research projects and career development.",
    images: ["/teaching-assistant-classroom-university-setting.jpg"],
  },
  {
    title: "Summer Research Internship",
    organization: "Tech Research Lab",
    location: "Mountain View, CA",
    date: "Summer 2022",
    description:
      "Worked on large-scale machine learning systems and contributed to production models serving millions of users. Gained hands-on experience with distributed computing and MLOps practices.",
    images: ["/tech-internship-office-modern-workspace.jpg", "/team-meeting-tech-company-collaborative-space.jpg"],
  },
]

export default function SessionsPage() {
  return (
    <>
      <AuraBackground />
      <Navigation />
      <PageTransition>
        <main className="pt-32 pb-24 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Journey & Milestones</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Sessions & <span className="text-gradient">Experiences</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A visual journey through fellowships, conferences, residencies, and memorable experiences that have
                shaped my career and personal growth.
              </p>
            </AnimatedSection>

            {/* Timeline indicator */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />

            {/* Experience cards */}
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard key={experience.title} {...experience} index={index} isReversed={index % 2 === 1} />
              ))}
            </div>
          </div>
        </main>
      </PageTransition>
    </>
  )
}
