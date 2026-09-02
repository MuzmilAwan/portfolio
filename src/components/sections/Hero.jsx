import { profile } from '../../data/portfolio'
import Icon from '../ui/Icon'

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="scroll-mt-4">
      <div className="relative overflow-hidden rounded-lg bg-card shadow-sm">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-8 h-16 w-16 rounded-full border-2 border-accent/30" />
          <div className="absolute top-16 right-24 h-8 w-8 rotate-45 border-2 border-blue-400/40" />
          <div className="absolute right-16 bottom-8 h-10 w-10 rounded-full border-2 border-accent/20" />
          <div className="absolute top-1/3 right-1/3 h-4 w-4 rotate-12 border-2 border-blue-300/50" />
        </div>

        <div className="relative flex flex-col items-center gap-6 p-6 md:flex-row md:items-end md:gap-8 md:p-10 lg:p-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl leading-tight font-semibold text-text sm:text-3xl md:text-[32px] lg:text-[36px]">
              I&apos;m {profile.name}
              <br />
              <span className="text-accent">Full Stack</span> Developer
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
              {profile.bio}
            </p>
            <button
              type="button"
              onClick={scrollToContact}
              className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-medium text-text transition-opacity hover:opacity-90"
            >
              HIRE ME
              <Icon name="arrow" />
            </button>
          </div>

          <div className="relative shrink-0">
            {profile.heroImage ? (
              <img
                src={profile.heroImage}
                alt={profile.name}
                className="h-[250px] w-[200px] object-cover object-top sm:h-[300px] sm:w-[240px] md:h-[350px] md:w-[280px] lg:h-[400px] lg:w-[320px]"
              />
            ) : (
              <div className="flex h-[250px] w-[200px] items-center justify-center bg-bg sm:h-[300px] sm:w-[240px] md:h-[350px] md:w-[280px] lg:h-[400px] lg:w-[320px]">
                <span className="text-6xl font-semibold tracking-wide text-accent md:text-7xl">
                  {initials(profile.name)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
