"use client"

import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="font-serif text-xl font-bold tracking-tight text-foreground"
            >
              Anandi<span className="text-primary">.</span>
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              Graphic Designer based in New Delhi
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            {[
              { label: "Instagram", href: "#" },
              { label: "Behance", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "Dribbble", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Anandi Bhutani. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
