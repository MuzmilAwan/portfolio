import Icon from './Icon'

export default function PriceCard({ name, price, period, features, popular }) {
  return (
    <div
      className={`relative flex flex-col rounded-lg bg-card p-6 shadow-sm md:p-8 ${
        popular ? 'ring-2 ring-accent' : ''
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-medium text-text">
          Popular
        </span>
      )}
      <h3 className="text-lg font-medium text-text">{name}</h3>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-3xl font-semibold text-accent md:text-4xl">${price}</span>
        {period && <span className="mb-1 text-sm text-muted">/ {period}</span>}
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent">
              <Icon name="check" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`mt-8 block w-full rounded py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
          popular ? 'bg-accent text-text' : 'border border-accent text-accent'
        }`}
      >
        ORDER NOW
      </a>
    </div>
  )
}
