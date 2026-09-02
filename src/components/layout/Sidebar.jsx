import { profile, socialLinks, languages, skills, extraSkills } from '../../data/portfolio'
import ProgressBar from '../ui/ProgressBar'
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

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[280px] overflow-y-auto border-r border-border bg-card shadow-lg transition-transform duration-300 lg:static lg:z-auto lg:h-auto lg:w-[300px] lg:shrink-0 lg:translate-x-0 lg:rounded-lg lg:border-r-0 lg:shadow-sm xl:w-[308px] ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 md:p-8">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute top-4 right-4 text-muted lg:hidden"
            onClick={onClose}
          >
            <Icon name="close" />
          </button>

          <div className="flex flex-col items-center text-center">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-[150px] w-[150px] rounded-full object-cover"
              />
            ) : (
              <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-bg text-4xl font-semibold text-accent">
                {initials(profile.name)}
              </div>
            )}
            <h1 className="mt-4 text-lg font-semibold text-text">{profile.name}</h1>
            <p className="text-sm text-muted">{profile.title}</p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-text transition-opacity hover:opacity-80"
                >
                  <Icon name={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
            {[
              // { label: 'Residence', value: profile.residence },
              {
                label: 'Freelance',
                value: profile.freelance,
                highlight: profile.freelance === 'Available',
              },
              { label: 'Address', value: profile.address },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <span className="shrink-0 bg-bg px-2 py-0.5 text-muted">{item.label}</span>
                <span className={item.highlight ? 'text-success' : 'text-text'}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-border pt-6">
            <h2 className="mb-4 text-sm font-medium tracking-wide text-text uppercase">
              Languages
            </h2>
            <div className="space-y-4">
              {languages.map((lang) => (
                <ProgressBar key={lang.name} label={lang.name} level={lang.level} />
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-6">
            <h2 className="mb-4 text-sm font-medium tracking-wide text-text uppercase">
              Skills
            </h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <ProgressBar key={skill.name} label={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-6">
            <h2 className="mb-4 text-sm font-medium tracking-wide text-text uppercase">
              Extra Skills
            </h2>
            <ul className="space-y-2">
              {extraSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent text-text">
                    <Icon name="check" />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {profile.cvUrl && profile.cvUrl !== '#' && (
            <a
              href={profile.cvUrl}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded bg-accent py-4 text-sm font-medium text-text transition-opacity hover:opacity-90"
            >
              <Icon name="download" />
              DOWNLOAD CV
            </a>
          )}
        </div>
      </aside>
    </>
  )
}
