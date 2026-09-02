import { navItems } from '../../data/portfolio'
import Icon from '../ui/Icon'
import { useTheme } from '../../context/ThemeContext'

export default function RightNav({ activeSection, onNavigate }) {
  const { theme, toggleTheme } = useTheme()

  const scrollTo = (id) => {
    onNavigate(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <nav
        aria-label="Section navigation"
        className="fixed top-0 right-0 z-30 hidden h-full w-[56px] flex-col items-center border-l border-border bg-card py-8 shadow-sm xl:flex"
      >
        <button
          type="button"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
          className="mb-8 cursor-pointer text-muted transition-colors hover:text-accent"
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>

        <div className="flex flex-1 flex-col items-center justify-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <div key={item.id} className="group relative">
                {isActive && (
                  <span className="absolute top-1/2 right-full mr-3 -translate-y-1/2 rounded bg-text px-2 py-1 text-xs whitespace-nowrap text-card">
                    {item.label}
                  </span>
                )}
                <button
                  type="button"
                  aria-label={item.label}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => scrollTo(item.id)}
                  className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors ${
                    isActive
                      ? 'bg-accent text-text'
                      : 'text-muted hover:bg-bg hover:text-accent'
                  }`}
                >
                  <Icon name={item.icon} />
                </button>
              </div>
            )
          })}
        </div>
      </nav>

      <nav
        aria-label="Mobile section navigation"
        className="fixed right-0 bottom-0 left-0 z-30 flex items-center justify-around border-t border-border bg-card px-2 py-2 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] xl:hidden"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center gap-0.5 rounded-lg px-2 py-1.5 transition-colors ${
                isActive ? 'text-accent' : 'text-muted'
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  isActive ? 'bg-accent/15' : ''
                }`}
              >
                <Icon name={item.icon} />
              </span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </>
  )
}
