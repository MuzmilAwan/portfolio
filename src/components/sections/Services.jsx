import { services, sectionCopy } from '../../data/portfolio'
import SectionHeader from '../ui/SectionHeader'
import ServiceCard from '../ui/ServiceCard'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-4">
      <SectionHeader title="My Services" description={sectionCopy.services} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}
