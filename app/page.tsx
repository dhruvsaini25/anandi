import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsGrid />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
