import {
  Activity,
  Layers,
  RefreshCw,
  UserRound,
  ListChecks,
  Building2,
  FileText,
  Cloud,
} from 'lucide-react'
import { agenticSteps } from '../lib/sections'

const ICONS = [Activity, Layers, RefreshCw, UserRound, ListChecks, Building2, FileText, Cloud]

export default function AgenticFlow() {
  return (
    <div className="space-y-4">
      {agenticSteps.map((step, i) => {
        const Icon = ICONS[i]
        return (
          <article
            key={step.title}
            className="card-lift flex gap-5 rounded-2xl border border-stone bg-warm-white p-5 shadow-sm md:p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand text-deep-pine">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">Step {i + 1}</p>
              <h3 className="mt-1 font-display text-xl text-charcoal md:text-2xl">{step.title}</h3>
              <p className="mt-2 text-base text-graphite">{step.body}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
