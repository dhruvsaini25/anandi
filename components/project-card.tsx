"use client"

import { useRef, useState } from "react"
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
  const cardRef = useRef<HTMLButtonElement | null>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false, size: 56 })

  function handleMouseMove(e: any) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top
    // size scales slightly with card width for a balanced look
    const size = Math.max(44, Math.min(72, Math.round(rect.width * 0.12)))
    setCursor({ x: relX, y: relY, visible: true, size })
  }

  function handleMouseEnter() {
    setCursor((c) => ({ ...c, visible: true }))
  }

  function handleMouseLeave() {
    setCursor((c) => ({ ...c, visible: false }))
  }

  return (
    <button
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-xl bg-secondary text-left transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 cursor-none ${
        isVisible ? `animate-fade-up ${delays[index % delays.length]}` : "opacity-0"
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Hover Overlay - subtle vignette + soft glow (non-obstructive) */}
        <div className="absolute inset-0 flex items-end justify-center p-4 transition-all duration-500">
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/24 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 rounded-xl transition-shadow duration-500 group-hover:shadow-[0_12px_40px_rgba(2,6,23,0.28)]" />
        </div>

        {/* Custom circular pointer that follows the mouse and shows "View" */}
        <div
          aria-hidden
          className="pointer-events-none absolute z-20 flex items-center justify-center rounded-full font-medium"
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
            width: cursor.size,
            height: cursor.size,
            transform: `translate(-50%, -50%) scale(${cursor.visible ? 1 : 0.6})`,
            transition: 'transform 120ms ease, opacity 120ms ease',
            opacity: cursor.visible ? 1 : 0,
            background: 'var(--color-primary)',
            color: 'var(--color-primary-foreground)',
            boxShadow: '0 8px 20px rgba(2,6,23,0.22)'
          }}
        >
          <span style={{ fontSize: 12, transform: 'translateY(1px)' }}>View</span>
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
