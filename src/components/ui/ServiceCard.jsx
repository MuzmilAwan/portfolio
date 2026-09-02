import Icon from './Icon'

export default function ServiceCard({ title, subtitle, icon, description, cta }) {
  return (
    <div className="group rounded-lg bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
      <div className="mb-4 text-accent">
        <Icon name={icon} />
      </div>
      <h3 className="text-lg font-medium text-text">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      )}
      {cta && (
        <a
          href="#contact"
          className="mt-4 flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          {cta}
          <span className="text-xs">&gt;</span>
        </a>
      )}
    </div>
  )
}
