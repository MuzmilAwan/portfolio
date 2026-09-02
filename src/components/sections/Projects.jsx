import { projects, sectionCopy } from '../../data/portfolio'
import SectionHeader from '../ui/SectionHeader'
import ProjectCard from '../ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-4">
      <SectionHeader title="Projects" description={sectionCopy.projects} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
