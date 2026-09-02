export default function ProjectCard({ title, category, image, url, liveUrl }) {
  return (
    <a
      href={liveUrl || url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-base font-medium text-white">{title}</h3>
          <p className="text-sm text-white/80">{category}</p>
        </div>
      </div>
      <div className="p-4 md:hidden">
        <h3 className="text-sm font-medium text-text">{title}</h3>
        <p className="text-xs text-muted">{category}</p>
      </div>
    </a>
  )
}
