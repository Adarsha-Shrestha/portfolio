"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"

const projects = [
  {
    title: "Reviso",
    description: "ML-powered tool for academic research and literature review",
    fullDescription:
      "A comprehensive AI-powered research assistant that helps academics and researchers streamline their literature review process. Built with cutting-edge machine learning models, it can analyze papers, extract key insights, and generate summaries. The system uses natural language processing to understand research queries and provide relevant recommendations from a vast database of academic publications.",
    image: "/ai-research-assistant-dashboard-dark-theme-cyan-ac.jpg",
    tags: ["Python", "TensorFlow", "NLP", "React"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: ["/ai-dashboard-screenshot-search-interface.jpg", "/ai-research-analytics-visualization.jpg"],
  },
  {
    title: "Nepali-GPT",
    description: "AI-powered tool for Nepali language generation",
    fullDescription:
      "A cutting-edge AI-powered tool for Nepali language generation. Built with state-of-the-art machine learning models, it can generate high-quality Nepali text based on user input. The system uses natural language processing to understand user queries and provide relevant recommendations from a vast database of academic publications.",
    image: "/neural-style-transfer-app-dark-interface.jpg",
    tags: ["Python", "TensorFlow", "NLP", "React"],
    // demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Meditation App",
    description: "Mindfulness application with guided sessions and progress tracking",
    fullDescription:
      "A beautifully designed meditation app that offers guided sessions, ambient soundscapes, and progress tracking. Features include daily reminders, streak tracking, and personalized meditation recommendations based on user preferences and mood. The app incorporates traditional Buddhist meditation techniques with modern mindfulness practices.",
    image: "/meditation-app-interface-dark-mode-purple-accents.jpg",
    tags: ["React Native", "Firebase", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Generator",
    description: "Automated portfolio website builder for creative professionals",
    fullDescription:
      "An intuitive portfolio generator that helps creative professionals build stunning websites without coding knowledge. Features drag-and-drop components, customizable themes, and automatic responsive design. Includes SEO optimization, analytics integration, and one-click deployment to popular hosting platforms.",
    image: "/portfolio-website-builder-interface-dark-theme.jpg",
    tags: ["Next.js", "Prisma", "Stripe", "Vercel"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Neural Style Transfer",
    description: "Deep learning tool for applying artistic styles to images",
    fullDescription:
      "A sophisticated neural style transfer application that allows users to apply the artistic styles of famous paintings to their photographs. Uses convolutional neural networks to extract and apply style features while preserving the content of the original image. Supports batch processing and custom style uploads.",
    image: "/neural-style-transfer-app-dark-interface.jpg",
    tags: ["PyTorch", "Flask", "Docker", "CUDA"],
    githubUrl: "https://github.com",
  },
  {
    title: "Event Management System",
    description: "Full-stack platform for organizing and managing cultural events",
    fullDescription:
      "A comprehensive event management platform designed for cultural organizations and art institutions. Features include event scheduling, ticket sales, attendee management, and post-event analytics. The system supports virtual events with integrated video streaming and interactive Q&A sessions.",
    image: "/event-management-dashboard-dark-theme.jpg",
    tags: ["Node.js", "MongoDB", "Socket.io", "React"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
