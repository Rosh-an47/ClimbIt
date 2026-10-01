import { Link } from 'react-router-dom'
import { Mountain } from 'lucide-react'
import { routes } from '../lib/design'

export default function Footer() {
  return (
    <footer className="border-t border-stone bg-sand">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-12">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-charcoal">
            <Mountain className="h-5 w-5 text-deep-pine" aria-hidden />
            <span className="font-display text-lg">Climbit</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted">
            Edge intelligence for high-altitude trekking. Know the risk before it becomes an emergency.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-graphite" aria-label="Footer">
          {routes.map((item) => (
            <Link key={item.path} to={item.path} className="hover:text-charcoal">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-stone/80 py-6 text-center font-mono text-xs uppercase tracking-widest text-muted">
        © {new Date().getFullYear()} Climbit · Fictitious company for academic demonstration
      </div>
    </footer>
  )
}
