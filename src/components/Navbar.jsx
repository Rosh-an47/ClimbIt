import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Mountain } from 'lucide-react'
import { routes } from '../lib/design'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-stone/80 bg-cream/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2 text-charcoal" onClick={() => setOpen(false)}>
          <Mountain className="h-6 w-6 text-deep-pine" aria-hidden />
          <span className="font-display text-xl tracking-tight">Climbit</span>
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-charcoal md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-4 w-5 flex-col justify-between">
            <span className="block h-px bg-charcoal" />
            <span className="block h-px bg-charcoal" />
            <span className="block h-px bg-charcoal" />
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {routes.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm text-graphite transition hover:text-charcoal ${
                  isActive ? 'border-b-2 border-sunrise pb-0.5 text-charcoal' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-sunrise px-4 py-2 text-sm font-medium text-charcoal shadow-sm transition hover:-translate-y-0.5 hover:bg-alpenglow hover:text-warm-white"
          >
            Request a Demo
          </Link>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-stone bg-cream px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {routes.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-base ${isActive ? 'text-sunrise' : 'text-charcoal'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-sunrise px-4 py-3 text-center text-sm font-medium text-charcoal"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
