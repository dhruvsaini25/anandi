"use client"

import { ArrowDown, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden">
      {/* Background Accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl sm:h-[600px] sm:w-[600px] animate-slow-spin" />
        <div className="absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-primary/3 blur-3xl sm:h-[400px] sm:w-[400px] animate-slow-spin" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-28 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center text-center gap-10 lg:flex-row lg:items-center lg:text-left lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.3em] text-primary opacity-0 sm:text-sm">
                Graphic Designer
              </p>
              <h1 className="animate-fade-up font-serif text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1.1] tracking-tight text-foreground opacity-0 animation-delay-100">
                <span className="text-balance">Anandi</span>
                <br />
                <span className="text-balance text-primary">Bhutani</span>
              </h1>
            </div>

            <div className="animate-fade-up space-y-4 opacity-0 animation-delay-200 sm:space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                {"Branding \u2022 Illustration \u2022 UI Design"}
              </p>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Crafting bold visual stories that captivate. I transform ideas
                into memorable brand experiences through thoughtful design and
                creative storytelling.
              </p>
            </div>

            <div className="animate-fade-up flex flex-col gap-3 opacity-0 animation-delay-300 sm:flex-row sm:gap-4">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 sm:px-8 sm:py-3.5"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 sm:px-8 sm:py-3.5"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-in relative w-full opacity-0 animation-delay-400 lg:w-[440px] xl:w-[480px]">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-secondary">
              <img
                src="/images/hero-portrait.jpg"
                alt="Anandi Bhutani, Graphic Designer"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
            </div>
            {/* Floating Badge */}
            <div className="animate-float absolute -bottom-3 -left-3 rounded-xl border border-border bg-card px-4 py-2.5 shadow-lg sm:-bottom-4 sm:-left-4 sm:px-5 sm:py-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                Available for
              </p>
              <p className="font-serif text-xs font-semibold text-foreground sm:text-sm">
                Freelance Projects
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex animate-fade-up justify-center opacity-0 animation-delay-600 sm:mt-16 lg:justify-start">
          <a
            href="#work"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
            aria-label="Scroll down"
          >
            <span className="text-[10px] uppercase tracking-widest sm:text-xs">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
