import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { routes } from '../lib/design'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0e211d]/94 shadow-[0_14px_50px_-30px_rgba(0,0,0,.65)] backdrop-blur-xl' : 'bg-[#0e211d]/82 backdrop-blur-md'}`}>
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3.5 md:px-8 lg:px-10" aria-label="Primary">
        <Link to="/" className="group flex items-center" onClick={() => setOpen(false)} aria-label="Climbit home">
          <img src="/images/logo.png" alt="Climbit" className="h-9 w-auto max-w-[190px] object-contain object-left" />
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[.045] p-1 md:flex">
          {routes.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `rounded-full px-4 py-2 text-[12px] font-medium transition-all ${isActive ? 'bg-[#C6A15B] text-[#10241f] shadow-sm' : 'text-white/65 hover:bg-white/[.07] hover:text-white'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button type="button" className="rounded-full border border-white/10 bg-white/[.05] p-2 text-white md:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0e211d] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {routes.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `rounded-xl px-4 py-3 text-sm ${isActive ? 'bg-[#C6A15B] text-[#10241f]' : 'text-white/75'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
