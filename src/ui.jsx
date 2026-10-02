import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'

export const routes = [
  { to: '/', label: 'The problem' },
  { to: '/solution', label: 'The solution' },
  { to: '/business', label: 'The business' },
  { to: '/journey', label: 'Journey & trust' },
  { to: '/appendix', label: 'Appendix' },
]

export function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => { window.scrollTo(0, 0); setOpen(false) }, [pathname])
  const link = ({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-flame text-white' : 'text-white/75 hover:text-white'}`
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 bg-ink/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Primary">
          <Link to="/" aria-label="Climbit home"><img src="/images/logo.png" alt="Climbit" className="h-9 w-auto" /></Link>
          <div className="hidden gap-1 md:flex">{routes.map((r) => <NavLink key={r.to} to={r.to} end={r.to === '/'} className={link}>{r.label}</NavLink>)}</div>
          <button className="rounded-full p-2 text-white md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </nav>
        {open && <div className="grid gap-1 px-5 pb-4 md:hidden">{routes.map((r) => <NavLink key={r.to} to={r.to} end={r.to === '/'} className={link}>{r.label}</NavLink>)}</div>}
      </header>
      <Outlet />
      <footer className="bg-ink px-5 py-10 text-sm text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <img src="/images/logo.png" alt="Climbit" className="h-8 w-auto self-start" />
          <p>Climbit is a fictitious company created for DES530, The Business of AI, IIIT Delhi.</p>
        </div>
      </footer>
    </div>
  )
}

const tones = { snow: 'bg-snow text-body', mist: 'bg-mist text-body', ink: 'bg-ink text-white/85' }
export function Sec({ tone = 'snow', children, id }) {
  return <section id={id} className={`${tones[tone]} px-5 py-16 md:py-20`}><div className="mx-auto max-w-6xl">{children}</div></section>
}
export function H({ children, sub, dark }) {
  return (
    <header className="mb-10 max-w-3xl">
      <h2 className={`text-3xl leading-tight md:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>{children}</h2>
      {sub && <p className={`mt-4 ${dark ? 'text-white/70' : 'text-muted'}`}>{sub}</p>}
    </header>
  )
}
export function PageTop({ title, sub }) {
  return (
    <section className="bg-ink px-5 pb-14 pt-32 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-3xl text-4xl leading-[1.1] md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70">{sub}</p>
      </div>
    </section>
  )
}
export function Table({ head, rows, widths = [] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-white">
      <table className="w-full min-w-[640px] text-left text-[15px]">
        <thead className="bg-mist text-ink"><tr>{head.map((h, i) => <th key={h} className="px-4 py-3 font-semibold" style={{ width: widths[i] }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i} className="border-t border-line align-top">{r.map((c, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-semibold text-ink' : ''}`}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
}
export function Next({ to, label, line }) {
  return (
    <section className="bg-slate px-5 py-14 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl font-display text-2xl leading-snug md:text-3xl">{line}</p>
        <Link to={to} className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-flame px-6 py-3 font-semibold text-white transition hover:bg-[#e64424]">{label} <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  )
}
