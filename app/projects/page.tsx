import { Navbar } from "@/components/navbar"
import { ProjectsGrid } from "@/components/projects-grid"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Section title could be optional, projects grid already includes header */}
        <ProjectsGrid showAll />
      </main>
      <Footer />
    </>
  )
}
