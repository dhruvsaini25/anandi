"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Fingerprint,
  PenTool,
  Package,
  Share2,
  Film,
  Layout,
} from "lucide-react"

const services = [
  {
    icon: Fingerprint,
    title: "Branding",
    description:
      "Complete brand identities including logos, guidelines, color palettes, and typography systems that make lasting impressions.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description:
      "Distinctive, memorable marks that capture your brand essence and stand the test of time across every medium.",
  },
  {
    icon: Package,
    title: "Packaging",
    description:
      "Eye-catching packaging that tells your product story on the shelf and creates unboxing moments worth sharing.",
  },
  {
    icon: Share2,
    title: "Social Media Graphics",
    description:
      "Scroll-stopping visual content and templates for Instagram, LinkedIn, and TikTok that amplify engagement.",
  },
  {
    icon: Film,
    title: "Motion Design",
    description:
      "Dynamic animations, logo reveals, and kinetic typography that bring your brand to life on screen.",
  },
  {
    icon: Layout,
    title: "UI/UX Graphics",
    description:
      "Beautiful interface design and visual assets for web and mobile applications that delight users.",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-10 max-w-2xl space-y-3 transition-all duration-700 sm:mb-16 sm:space-y-4 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary sm:text-sm">
            Services
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What I Can Do
            <br />
            <span className="text-primary">For You</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            From initial concept to final delivery, I offer a comprehensive
            range of design services to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const delays = [
              "",
              "animation-delay-100",
              "animation-delay-200",
              "animation-delay-300",
              "animation-delay-400",
              "animation-delay-500",
            ]
            return (
              <div
                key={service.title}
                className={`group rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 sm:p-8 ${
                  isVisible
                    ? `animate-fade-up ${delays[index]}`
                    : "opacity-0"
                }`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 sm:mb-6 sm:h-12 sm:w-12 sm:rounded-xl">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-card-foreground sm:mb-3 sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
