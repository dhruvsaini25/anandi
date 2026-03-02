"use client"

import { useEffect, useCallback } from "react"
import { X, ArrowLeft, ArrowRight } from "lucide-react"
import type { Project } from "@/lib/projects-data"

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEsc)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEsc)
    }
  }, [handleEsc])

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-3 my-4 w-full max-w-4xl animate-scale-in rounded-2xl border border-border bg-card shadow-2xl sm:mx-4 sm:my-8 md:mx-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border px-4 py-3 sm:items-center sm:px-6 sm:py-4 md:px-8">
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-wider text-primary sm:text-xs">
              {project.category}
            </p>
            <h2 className="truncate font-serif text-xl font-bold text-card-foreground sm:text-2xl md:text-3xl">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground hover:rotate-90"
            aria-label="Close project details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 px-4 py-6 sm:space-y-8 sm:px-6 sm:py-8 md:px-8">
          {/* Main Image/Video */}
          <div className="overflow-hidden rounded-lg bg-secondary sm:rounded-xl">
            {project.video ? (
              <video
                src={project.video}
                controls
                className="h-auto w-full object-cover"
                aria-label={`${project.title} video`}
              />
            ) : (
              <img
                src={project.images[0]}
                alt={`${project.title} mockup`}
                className="h-auto w-full object-cover"
              />
            )}
          </div>

          {/* Description */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="font-serif text-lg font-semibold text-card-foreground sm:text-xl">
              About This Project
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-primary sm:text-sm">
                My Role
              </h4>
              <p className="text-sm text-card-foreground sm:text-base">{project.role}</p>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-primary sm:text-sm">
                Year
              </h4>
              <p className="text-sm text-card-foreground sm:text-base">{project.year}</p>
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-[10px] font-medium uppercase tracking-wider text-primary sm:text-sm">
              Tools Used
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground sm:px-4 sm:py-1.5 sm:text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Images/Videos */}
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {project.images.slice(1).map((media, i) => {
              const isVideo = media.toLowerCase().endsWith('.mp4') || media.toLowerCase().endsWith('.webm') || media.toLowerCase().endsWith('.mov')
              return (
                <div key={i} className="overflow-hidden rounded-lg bg-secondary sm:rounded-xl">
                  {isVideo ? (
                    <video
                      src={media}
                      controls
                      className="h-auto w-full object-cover"
                      aria-label={`${project.title} detail video ${i + 2}`}
                    />
                  ) : (
                    <img
                      src={media}
                      alt={`${project.title} detail ${i + 2}`}
                      className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Process */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="font-serif text-lg font-semibold text-card-foreground sm:text-xl">
              Process
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.process}
            </p>
          </div>

          {/* Results */}
          <div className="rounded-lg bg-primary/5 p-4 sm:rounded-xl sm:p-6">
            <h3 className="font-serif text-lg font-semibold text-card-foreground sm:text-xl">
              Results & Impact
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2 sm:text-base">
              {project.results}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-3 border-t border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4 md:px-8">
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Projects
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-md sm:px-6 sm:py-2.5"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
