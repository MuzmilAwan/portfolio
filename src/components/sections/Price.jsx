import { pricePlans, sectionCopy } from '../../data/portfolio'
import SectionHeader from '../ui/SectionHeader'
import PriceCard from '../ui/PriceCard'

export default function Price() {
  return (
    <section id="price" className="scroll-mt-4">
      <SectionHeader title="Price Plans" description={sectionCopy.price} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricePlans.map((plan) => (
          <PriceCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  )
}
