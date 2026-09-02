export default function SectionHeader({ title, description }) {
  return (
    <div className="mb-8 text-center md:mb-10">
      <h2 className="text-2xl font-semibold text-text md:text-[32px]">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
        {description}
      </p>
    </div>
  )
}
