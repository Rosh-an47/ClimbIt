import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { routes } from '../lib/design'

export default function Footer() {
  return (
    <footer className="border-t border-[#294a42] bg-[#0e211d] text-white">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <Link to="/" className="inline-flex items-center">
            <img src="/images/logo.png" alt="Climbit" className="h-10 w-auto max-w-[190px] object-contain object-left" />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
            Edge intelligence for high-altitude trekking. A group safety layer that works where the mountain has no signal.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55" aria-label="Footer">
          {routes.map((item) => (
            <Link key={item.path} to={item.path} className="transition hover:text-[#C6A15B]">{item.label}</Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center font-mono text-[10px] uppercase tracking-[.2em] text-white/30">
        © {new Date().getFullYear()} Climbit · Fictitious company for academic demonstration
      </div>
    </footer>
  )
}
