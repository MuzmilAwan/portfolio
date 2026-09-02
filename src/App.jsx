import { useState, useEffect } from 'react'
import Sidebar from './components/layout/Sidebar'
import RightNav from './components/layout/RightNav'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Price from './components/sections/Price'
import Contact from './components/sections/Contact'
import Icon from './components/ui/Icon'
import { navItems, profile } from './data/portfolio'
import { useTheme } from './context/ThemeContext'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id)
    const observers = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-card px-4 py-3 shadow-sm lg:hidden">
        <button
          type="button"
          aria-label="Open profile menu"
          onClick={() => setSidebarOpen(true)}
          className="text-text"
        >
          <Icon name="menu" />
        </button>
        <span className="text-sm font-semibold text-text">{profile.name}</span>
        <button
          type="button"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
          className="text-muted transition-colors hover:text-accent"
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>
      </header>

      <div className="mx-auto flex max-w-[1440px] gap-4 p-4 pb-20 xl:gap-6 xl:p-6 xl:pr-[72px]">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="min-w-0 flex-1 space-y-8 md:space-y-10 lg:space-y-12">
          <Hero />
          <Services />
          <Projects />
          <Price />
          <Contact />
        </main>
      </div>

      <RightNav
        activeSection={activeSection}
        onNavigate={() => setSidebarOpen(false)}
      />
    </div>
  )
}

export default App
