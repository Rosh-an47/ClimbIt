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
      <header className="site-header fixed inset-x-0 top-0 z-50 bg-ink/90 backdrop-blur-xl">
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
  return <section id={id} className={`${tones[tone]} ${tone === 'mist' ? 'soft-grid' : ''} px-5 py-16 md:py-20`}><div className="mx-auto max-w-6xl">{children}</div></section>
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
    <section className="page-top relative bg-ink px-5 pb-14 pt-32 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="reveal max-w-3xl text-4xl leading-[1.1] md:text-6xl">{title}</h1>
        <p className="reveal mt-5 max-w-2xl text-lg text-white/70 [animation-delay:120ms]">{sub}</p>
      </div>
    </section>
  )
}
export function Table({ head, rows, widths = [] }) {
  return (
    <div className="table-shell overflow-x-auto rounded-2xl border border-line bg-white">
      <table className="w-full min-w-[640px] text-left text-[15px]">
        <thead className="bg-mist text-ink"><tr>{head.map((h, i) => <th key={h} className="px-4 py-3 font-semibold" style={{ width: widths[i] }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i} className="border-t border-line align-top">{r.map((c, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-semibold text-ink' : ''}`}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
}
export function Next({ to, label, line }) {
  return (
    <section className="relative overflow-hidden bg-slate px-5 py-14 text-white before:absolute before:-right-16 before:-top-24 before:h-64 before:w-64 before:rounded-full before:border before:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl font-display text-2xl leading-snug md:text-3xl">{line}</p>
        <Link to={to} className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-flame px-6 py-3 font-semibold text-white transition hover:bg-[#e64424]">{label} <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  )
}

export function SignalOrbit() {
  return (
    <div className="perspective relative mx-auto h-72 w-full max-w-sm" aria-label="Climbit signal orbit visual">
      <div className="command-lens orbital-card absolute inset-4 rounded-[2rem] border border-white/15 p-6 backdrop-blur-xl">
        <div className="flex items-end justify-between"><div><span className="block text-[10px] uppercase tracking-[.2em] text-white/50">Day 4</span><strong className="font-display text-2xl">11:40 am</strong></div><span className="text-right text-xs text-white/55">4,100 m<br /><span className="text-white/35">trail reading</span></span></div>
        <div className="relative mt-3 flex h-40 items-center justify-center">
          <div className="lens-orbit absolute h-36 w-36 rounded-full border border-flame/35 border-dashed" />
          <div className="lens-orbit-reverse absolute h-24 w-24 rounded-full border border-white/20" />
          <div className="lens-sweep absolute bottom-1/2 left-1/2 h-16 w-px origin-bottom bg-gradient-to-t from-flame to-transparent" />
          <div className="signal-dot z-10 flex h-16 w-16 items-center justify-center rounded-full bg-flame text-center text-xs font-semibold text-white">Rohan<br /><span className="text-[11px]">+21 bpm</span></div>
          <span className="absolute left-5 top-8 h-2 w-2 rounded-full bg-emerald-300" /><span className="absolute right-9 top-14 h-2 w-2 rounded-full bg-emerald-300" /><span className="absolute bottom-7 left-16 h-2 w-2 rounded-full bg-amber-300" /><span className="absolute bottom-4 right-14 h-2 w-2 rounded-full bg-emerald-300" />
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs"><span className="text-white/50">19 steady</span><span className="font-semibold text-flame">CHECK IN</span></div>
      </div>
    </div>
  )
}

export function StateWheel({ states, selected, onSelect }) {
  return (
    <div className="perspective flex flex-col items-center gap-6 md:flex-row md:justify-between">
      <div className="journey-wheel relative h-56 w-56 shrink-0 rounded-full p-5 shadow-2xl state-meter">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-center text-white shadow-inner">
          <div><span className="block text-xs uppercase tracking-[.2em] text-white/55">Guide</span><strong className="mt-1 block font-display text-2xl">{states[selected][0]}</strong><span className="mt-1 block text-xs text-white/60">decision point</span></div>
        </div>
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-lg" />
      </div>
      <div className="grid w-full gap-2 sm:grid-cols-2">
        {states.map(([name, color, description], i) => <button key={name} onClick={() => onSelect(i)} className={`rounded-xl border p-3 text-left transition hover:-translate-y-0.5 ${i === selected ? 'border-ink bg-ink text-white shadow-lg' : 'border-line bg-white text-ink'}`}><span className="flex items-center gap-2 font-semibold"><span className="h-3 w-3 rounded-full" style={{ background: color }} />{name}</span><span className={`mt-1 block text-xs ${i === selected ? 'text-white/65' : 'text-muted'}`}>{description}</span></button>)}
      </div>
    </div>
  )
}
