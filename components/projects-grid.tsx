"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { projects } from "@/lib/projects-data"
import { ProjectModal } from "./project-modal"
import { ProjectCard } from "./project-card"
import type { Project } from "@/lib/projects-data"

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

interface ProjectsGridProps {
  /**
   * When true, show every project and hide the "View All" link.
   * Defaults to false (the home page grid behavior).
   */
  showAll?: boolean
}

export function ProjectsGrid({ showAll = false }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const displayed = showAll ? filtered : filtered.slice(0, 6)

  return (
    <>
      <section id="work" className="py-20 sm:py-24 lg:py-32">
        <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`mb-10 space-y-3 transition-all duration-700 sm:mb-16 sm:space-y-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary sm:text-sm">
              Selected Work
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A curated selection of projects spanning branding, illustration,
              packaging, and digital design.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            className={`mb-8 flex flex-wrap gap-2 transition-all duration-700 delay-200 sm:mb-12 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2 sm:text-sm ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {displayed.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isVisible}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* View All Projects - Link to separate page (only show on home / when not in showAll mode) */}
          {!showAll && (
            <div className={`mt-10 flex justify-center transition-all duration-700 delay-500 sm:mt-12 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary hover:border-primary/30 hover:-translate-y-0.5 sm:px-8 sm:py-3.5"
              >
                View All Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
