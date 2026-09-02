export default function ProgressBar({ label, level }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-text">{label}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-accent transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
