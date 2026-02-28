"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Palette, PenTool, Layers, Sparkles } from "lucide-react"

const skills = [
  { icon: Palette, label: "Branding" },
  { icon: PenTool, label: "Illustration" },
  { icon: Layers, label: "UI/UX" },
  { icon: Sparkles, label: "Motion" },
]

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="bg-secondary/50 py-20 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Photo */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <img
                  src="/images/about-portrait.jpg"
                  alt="Anandi Bhutani in her studio"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full rounded-2xl border-2 border-primary/20 sm:-bottom-6 sm:-right-6 sm:block" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`flex flex-col justify-center space-y-6 transition-all duration-700 delay-200 sm:space-y-8 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary sm:text-sm">
                About Me
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Designing with
                <br />
                <span className="text-primary">purpose & passion</span>
              </h2>
            </div>

            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:space-y-4 sm:text-base">
              <p>
                {
                  "I\u2019m Anandi Bhutani, a multidisciplinary graphic designer based in New Delhi with over 8 years of experience crafting visual identities that tell compelling stories. My journey began with a fascination for how colors, shapes, and typography can evoke emotions and drive action."
                }
              </p>
              <p>
                {
                  "My design philosophy centers on the intersection of aesthetics and strategy. I believe every pixel should serve a purpose, and every brand deserves a visual language as unique as its story. I\u2019ve had the privilege of working with startups, established brands, and everything in between \u2014 from boutique coffee roasteries to fintech platforms."
                }
              </p>
              <p className="hidden sm:block">
                {
                  "When I\u2019m not designing, you\u2019ll find me exploring flea markets for vintage typography inspiration, experimenting with watercolors, or hiking with my camera in the Himalayas."
                }
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-card p-3 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 sm:gap-2 sm:rounded-xl sm:p-4"
                >
                  <skill.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Fun Quote */}
            <blockquote className="border-l-2 border-primary pl-4 sm:pl-6">
              <p className="font-serif text-base italic text-foreground sm:text-lg">
                {
                  "\u201CDesign is not just what it looks like and feels like. Design is how it works.\u201D"
                }
              </p>
              <cite className="mt-1.5 block text-xs text-muted-foreground not-italic sm:mt-2 sm:text-sm">
                {"— Steve Jobs (and my daily mantra)"}
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
