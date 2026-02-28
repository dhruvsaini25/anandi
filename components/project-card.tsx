"use client"

import type { Project } from "@/lib/projects-data"

const delays = [
  "",
  "animation-delay-100",
  "animation-delay-200",
  "animation-delay-300",
  "animation-delay-400",
  "animation-delay-500",
]

interface ProjectCardProps {
  project: Project
  index: number
  isVisible: boolean
  onClick: () => void
}

export function ProjectCard({ project, index, isVisible, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl bg-secondary text-left transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 ${
        isVisible ? `animate-fade-up ${delays[index % delays.length]}` : "opacity-0"
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-foreground/0 p-4 transition-all duration-500 group-hover:bg-foreground/60 sm:p-6">
          <div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-[10px] font-medium uppercase tracking-wider text-background/70 sm:text-xs">
              {project.category}
            </p>
            <h3 className="mt-1 font-serif text-lg font-bold text-background sm:text-xl">
              {project.title}
            </h3>
          </div>
        </div>
      </div>
      {/* Card Info */}
      <div className="p-3.5 sm:p-4 lg:p-5">
        <p className="text-[10px] font-medium uppercase tracking-wider text-primary sm:text-xs">
          {project.category}
        </p>
        <h3 className="mt-1 font-serif text-base font-semibold text-foreground sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{project.year}</p>
      </div>
    </button>
  )
}
