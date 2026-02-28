"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    quote:
      "Anandi transformed our entire brand identity. Her attention to detail and creative intuition resulted in a visual system that perfectly captures who we are. Working with her was seamless.",
    name: "Priya Sharma",
    role: "Founder, Aurora Wellness",
    company: "Aurora",
  },
  {
    quote:
      "The packaging design Anandi created for our skincare line exceeded every expectation. She has a rare ability to balance aesthetics with commercial appeal. Our sales speak for themselves.",
    name: "Rahul Mehta",
    role: "CEO, Bloom Organics",
    company: "Bloom",
  },
  {
    quote:
      "Anandi doesn't just design\u2014she tells stories. The illustrations she created for our children's book brought the entire narrative to life in ways we never imagined possible.",
    name: "Sarah Chen",
    role: "Editor, Penguin Random House",
    company: "Penguin",
  },
  {
    quote:
      "We hired Anandi for our fintech dashboard redesign and the results were remarkable. User satisfaction scores jumped dramatically. She truly understands how to make complex data approachable.",
    name: "Alex Tran",
    role: "CTO, Nexus Finance",
    company: "Nexus",
  },
  {
    quote:
      "The social media campaign Anandi designed for our festival was electric. Her visuals captured the energy and spirit of the event perfectly. Engagement tripled compared to our previous year.",
    name: "Maya Johal",
    role: "Marketing Director, Waves Festival",
    company: "Waves",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="bg-secondary/50 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Testimonials
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Kind Words From
            <br />
            <span className="text-primary">Amazing Clients</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`relative mx-auto max-w-3xl transition-all duration-700 delay-200 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <Quote className="mb-6 h-10 w-10 text-primary/20" />
            <div className="min-h-[180px]">
              <p className="font-serif text-lg leading-relaxed text-card-foreground md:text-xl">
                {testimonials[current].quote}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {testimonials[current].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold text-card-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
