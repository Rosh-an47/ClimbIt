import { useMemo, useState } from 'react'
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  BatteryCharging,
  Bluetooth,
  BrainCircuit,
  ChevronRight,
  CircleDot,
  Compass,
  Crosshair,
  Database,
  Gauge,
  HeartPulse,
  Layers3,
  LockKeyhole,
  MapPin,
  Move3d,
  Mountain,
  Radio,
  Route,
  ShieldCheck,
  Signal,
  Sparkles,
  Thermometer,
  Watch,
  Waves,
  WifiOff,
  X,
  Zap,
} from 'lucide-react'
import './App.css'

const navItems = [
  ['Story', 'story'],
  ['Engine', 'engine'],
  ['System', 'system'],
  ['Moat', 'moat'],
  ['Trust', 'trust'],
]

const states = {
  green: { label: 'NORMAL', color: 'green', count: 24 },
  yellow: { label: 'CHECK IN', color: 'yellow', count: 4 },
  orange: { label: 'ASSESS', color: 'orange', count: 1 },
  red: { label: 'EMERGENCY', color: 'red', count: 1 },
}

const trekkers = [
  { id: 7, x: 21, y: 58, state: 'green', altitude: '4,086 m', trend: 'stable' },
  { id: 11, x: 36, y: 40, state: 'green', altitude: '4,104 m', trend: 'stable' },
  { id: 17, x: 55, y: 61, state: 'orange', altitude: '4,120 m', trend: 'deteriorating' },
  { id: 21, x: 72, y: 43, state: 'yellow', altitude: '4,132 m', trend: 'watching' },
  { id: 26, x: 82, y: 69, state: 'green', altitude: '4,094 m', trend: 'stable' },
  { id: 30, x: 61, y: 29, state: 'green', altitude: '4,141 m', trend: 'stable' },
]

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Brand() {
  return (
    <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <span className="brand-mark"><Mountain size={17} strokeWidth={2.3} /></span>
      <span>CLIMBIT</span>
    </button>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="topbar">
      <Brand />
      <nav className={`nav ${open ? 'open' : ''}`}>
        {navItems.map(([label, id]) => (
          <button key={id} onClick={() => { scrollToId(id); setOpen(false) }}>{label}</button>
        ))}
      </nav>
      <div className="top-actions">
        <span className="offline-pill"><span className="pulse-dot" /> EDGE / OFFLINE</span>
        <button className="nav-cta" onClick={() => scrollToId('contact')}>Talk to Climbit <ArrowRight size={15} /></button>
      </div>
      <button className="mobile-menu" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
        {open ? <X size={20} /> : <Layers3 size={20} />}
      </button>
    </header>
  )
}

function MountainBackdrop() {
  return (
    <svg className="mountain-svg" viewBox="0 0 1200 620" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#edf4ef" />
          <stop offset="1" stopColor="#cfdcd4" />
        </linearGradient>
        <linearGradient id="ridge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#82968f" />
          <stop offset="1" stopColor="#455c56" />
        </linearGradient>
      </defs>
      <rect width="1200" height="620" fill="url(#sky)" />
      <path d="M0 380 L130 235 L205 315 L320 115 L430 300 L525 185 L660 370 L785 120 L915 330 L1030 205 L1200 380 V620 H0 Z" fill="#9dafaa" opacity=".52" />
      <path d="M0 430 L165 295 L265 390 L395 170 L520 380 L645 245 L770 410 L900 165 L1015 360 L1130 240 L1200 300 V620 H0 Z" fill="url(#ridge)" opacity=".74" />
      <path d="M0 478 C180 430 250 480 420 450 C600 418 750 485 930 445 C1040 420 1130 440 1200 420 V620 H0 Z" fill="#334a45" opacity=".42" />
      <path d="M0 540 C220 490 390 545 560 515 C760 480 900 540 1200 500 V620 H0 Z" fill="#203833" opacity=".65" />
    </svg>
  )
}

function FloatingTelemetry({ style, icon, label, value }) {
  return (
    <div className="telemetry-chip" style={style}>
      <span className="chip-icon">{icon}</span>
      <span><small>{label}</small><strong>{value}</strong></span>
    </div>
  )
}

function HeroHub() {
  const [drag, setDrag] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(17)
  const [dragging, setDragging] = useState(false)
  const [start, setStart] = useState(null)

  const activeTrekker = trekkers.find(t => t.id === active) || trekkers[2]

  const startDrag = (e) => {
    setDragging(true)
    setStart({ x: e.clientX - drag.x, y: e.clientY - drag.y })
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const moveDrag = (e) => {
    if (!dragging || !start) return
    setDrag({
      x: Math.max(-150, Math.min(150, e.clientX - start.x)),
      y: Math.max(-70, Math.min(70, e.clientY - start.y)),
    })
  }

  const stopDrag = () => setDragging(false)

  return (
    <div className="hero-stage">
      <MountainBackdrop />
      <div className="hero-grid" />
      <div className="hero-haze haze-one" />
      <div className="hero-haze haze-two" />

      <div className="route-line line-one" />
      <div className="route-line line-two" />
      <div className="route-node node-one" />
      <div className="route-node node-two" />
      <div className="route-node node-three" />

      <FloatingTelemetry style={{ top: '14%', left: '8%' }} icon={<HeartPulse size={14} />} label="Group state" value="30 / 30 connected" />
      <FloatingTelemetry style={{ top: '25%', right: '7%' }} icon={<Gauge size={14} />} label="Altitude" value="4,120 m" />
      <FloatingTelemetry style={{ bottom: '13%', left: '8%' }} icon={<WifiOff size={14} />} label="Network" value="No cloud required" />

      <div
        className={`hub-object ${dragging ? 'dragging' : ''}`}
        style={{ transform: `translate(calc(-50% + ${drag.x}px), calc(-50% + ${drag.y}px))` }}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <div className="hub-shadow" />
        <div className="hub-body">
          <div className="hub-screen">
            <div className="screen-top"><span>CLIMBIT HUB</span><span className="screen-live"><span /> LIVE</span></div>
            <div className="screen-main">
              <div className="screen-risk"><small>GROUP RISK</small><strong>LOW</strong></div>
              <div className="screen-spark">
                <span /><span /><span /><span /><span /><span /><span />
              </div>
            </div>
            <div className="screen-foot"><span>BLE MESH</span><span>30 TREKKERS</span><span>EDGE AI</span></div>
          </div>
          <div className="hub-edge" />
          <div className="hub-sensor sensor-a" /><div className="hub-sensor sensor-b" /><div className="hub-sensor sensor-c" />
        </div>
        <div className="hub-halo halo-a" /><div className="hub-halo halo-b" />
        <div className="drag-label"><Move3d size={13} /> drag the hub</div>
      </div>

      <div className="trekker-cluster">
        {trekkers.map(t => (
          <button
            key={t.id}
            className={`trekker-node ${t.state} ${active === t.id ? 'selected' : ''}`}
            style={{ left: `${t.x}%`, top: `${t.y}%` }}
            onClick={() => setActive(t.id)}
            title={`Trekker #${t.id}`}
          >
            <span>{t.id}</span>
          </button>
        ))}
      </div>

      <div className="hero-readout">
        <div className="readout-kicker"><span className="readout-live" /> SELECTED TREKKER</div>
        <div className="readout-title">#{activeTrekker.id} · {states[activeTrekker.state].label}</div>
        <div className="readout-meta"><span>{activeTrekker.altitude}</span><span>{activeTrekker.trend}</span><span>BLE linked</span></div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> FIELD INTELLIGENCE / 04,120 M</div>
        <h1>The mountain doesn't warn you.<br /><em>Climbit does.</em></h1>
        <p className="hero-lede">An edge-AI safety layer for high-altitude trekking. Continuous physiology, group context and human judgment — working together before a subtle change becomes an emergency.</p>
        <div className="hero-actions">
          <button className="button-primary" onClick={() => scrollToId('engine')}>Explore the risk engine <ArrowRight size={17} /></button>
          <button className="button-ghost" onClick={() => scrollToId('story')}>See the 2-hour story <ArrowDownRight size={17} /></button>
        </div>
        <div className="hero-proof">
          <div><strong>30</strong><span>trekkers / guide</span></div>
          <div><strong>0 s</strong><span>cloud dependency</span></div>
          <div><strong>4</strong><span>reference frames</span></div>
        </div>
      </div>
      <HeroHub />
      <div className="scroll-cue"><span>01</span><div /><span>SCROLL TO DESCEND</span></div>
    </section>
  )
}

function Story() {
  return (
    <section className="section story-section" id="story">
      <div className="section-label">01 / THE INCIDENT</div>
      <div className="story-grid">
        <div className="story-text">
          <p className="overline">THE 200-METRE GAP</p>
          <h2>By the time the symptoms are obvious, the guide is already late.</h2>
          <p>At 4,000 metres, altitude illness rarely arrives with a dramatic alarm. It starts as a headache. Fatigue. Dizziness. The trekker keeps moving because everyone else is moving.</p>
          <p>Meanwhile, a guide may be 200 metres behind, helping another person. The group is moving. The air is getting thinner. The dangerous part is quiet.</p>
          <div className="story-quote">“The gap is not medical knowledge. The gap is continuous, objective, personalised monitoring in the field.”</div>
          <div className="story-facts">
            <div><span>01</span><strong>SUBJECTIVE</strong><small>“How are you feeling?”</small></div>
            <div><span>02</span><strong>OCCASIONAL</strong><small>Pulse oximeter checks</small></div>
            <div><span>03</span><strong>CONTINUOUS</strong><small>What Climbit adds</small></div>
          </div>
        </div>
        <div className="story-visual">
          <div className="photo-frame"><img src="/images/image-1.png" alt="Trekker on a Himalayan trail" /><div className="photo-caption"><span>4,000 M / GOLDEN HOUR</span><strong>Two hours can be the difference.</strong></div></div>
          <div className="incident-card"><div className="incident-icon"><Zap size={16} /></div><div><span>WITHOUT CONTEXT</span><strong>SpO₂ 89%</strong><small>could mean almost anything.</small></div></div>
        </div>
      </div>
    </section>
  )
}

function Engine() {
  const frames = [
    { n: '01', title: 'Personal baseline', body: 'What is normal for this trekker?', icon: <Crosshair /> },
    { n: '02', title: 'Peer baseline', body: 'How does this person compare with the group?', icon: <Layers3 /> },
    { n: '03', title: 'Matched cohort', body: 'What happened to similar trekkers?', icon: <Database /> },
    { n: '04', title: 'Historical patterns', body: 'Does this trajectory resemble validated outcomes?', icon: <Route /> },
  ]
  return (
    <section className="section dark-section" id="engine">
      <div className="section-label light">02 / THE BRAIN</div>
      <div className="engine-intro">
        <div><p className="overline mint">MULTI-BASELINE RISK ENGINE</p><h2>One number is noise.<br /><span>Context is signal.</span></h2></div>
        <p>Climbit does not ask whether an SpO₂ value is “low.” It asks whether a person's physiological response is abnormal <em>for them</em>, <em>at this altitude</em>, <em>during this activity</em>, <em>at this point in acclimatisation</em>.</p>
      </div>
      <div className="frame-grid">
        {frames.map(f => <article className="frame-card" key={f.n}><div className="frame-number">{f.n}</div><div className="frame-icon">{f.icon}</div><h3>{f.title}</h3><p>{f.body}</p><span className="frame-line" /></article>)}
      </div>
      <div className="equation-board">
        <div className="equation-title"><span>THE INTERPRETATION LAYER</span><small>same value / different meaning</small></div>
        <div className="equation-row"><div className="eq-value">89%</div><div className="eq-context"><span><strong>RESTING</strong> + HR ↑</span><b>CONCERNING</b></div><div className="eq-context"><span><strong>CLIMBING</strong> + HR ↑</span><b className="muted">MONITOR</b></div><div className="eq-context"><span><strong>SLEEPING</strong> + breathing abnormal</span><b>ESCALATE</b></div></div>
        <div className="signal-strip"><span>Current value</span><span>Baseline deviation</span><span>Rate of change</span><span>Duration</span><span>Multi-signal agreement</span></div>
      </div>
    </section>
  )
}

function AgentFlow() {
  const steps = [
    ['01', 'Detect', 'Persistent deterioration crosses a confidence threshold.'],
    ['02', 'Interpret', 'Activity, altitude, ascent history and symptoms add context.'],
    ['03', 'Re-check', 'Low-confidence or borderline readings trigger measurement, not panic.'],
    ['04', 'Verify', 'The guide physically assesses the trekker.'],
    ['05', 'Escalate', 'If confirmed, a structured emergency packet is created.'],
  ]
  return <div className="agent-flow">{steps.map(([n, title, body], i) => <div className="agent-step" key={n}><div className="agent-num">{n}</div><div className="agent-dot"><span /></div><div><h3>{title}</h3><p>{body}</p></div>{i < steps.length - 1 && <div className="agent-connector" />}</div>)}</div>
}

function System() {
  const [selected, setSelected] = useState(17)
  const selectedTrekker = trekkers.find(t => t.id === selected) || trekkers[2]
  return (
    <section className="section system-section" id="system">
      <div className="section-label">03 / THE SYSTEM</div>
      <div className="system-head"><div><p className="overline">EXCEPTIONS, NOT DATA STREAMS</p><h2>A safety system designed for a guide's attention span.</h2></div><p>The band senses. The hub reasons. The dashboard prioritises. The guide decides. Raw ECG graphs never compete with the person who actually has to act.</p></div>
      <div className="product-architecture">
        <div className="device-card band-card"><div className="device-glow" /><div className="band-visual"><div className="band-strap" /><div className="band-face"><HeartPulse size={26} /><span>89</span><small>SpO₂</small></div></div><div className="device-copy"><span>01 / WRIST</span><h3>Climbit Band</h3><p>PPG · ECG · motion · temperature · altitude · GPS</p></div></div>
        <div className="architecture-line"><span>BLE MESH</span><div className="flow-arrow"><span /><span /><span /></div><span>LOCAL INFERENCE</span></div>
        <div className="hub-card"><div className="mini-hub"><div className="mini-screen"><span>GROUP RISK</span><strong>LOW</strong><i>30 connected</i></div></div><div className="device-copy"><span>02 / EDGE</span><h3>Guide Hub</h3><p>Rugged phone or tablet. Offline by design.</p></div></div>
        <div className="architecture-line"><span>EXCEPTIONS</span><div className="flow-arrow"><span /><span /><span /></div><span>HUMAN DECISION</span></div>
        <div className="dashboard-card"><div className="dash-top"><span>ABC / GROUP 07</span><span><span className="pulse-dot" /> LIVE</span></div><div className="dash-counts">{Object.entries(states).map(([key, s]) => <div key={key}><strong>{s.count}</strong><span className={key}>{s.label}</span></div>)}</div><div className="dash-list">{trekkers.map(t => <button key={t.id} onClick={() => setSelected(t.id)} className={`dash-row ${selected === t.id ? 'active' : ''}`}><span className={`status-dot ${t.state}`} /><b>#{t.id}</b><span>{t.altitude}</span><span>{t.trend}</span><ChevronRight size={14} /></button>)}</div><div className="dash-footer"><span>SELECTED #{selectedTrekker.id}</span><b>{selectedTrekker.state.toUpperCase()}</b></div></div>
      </div>
      <div className="agent-wrap"><div className="agent-copy"><p className="overline mint">AGENTIC WORKFLOW</p><h3>It does not just alert.<br />It orchestrates the next check.</h3><p>Detect → contextualise → re-check → guide verification → protocol → emergency packet. AI recommends. The guide decides.</p></div><AgentFlow /></div>
    </section>
  )
}

function Moat() {
  const [active, setActive] = useState(0)
  const items = [
    ['Data flywheel', 'Every trek creates longitudinal trajectories tied to outcomes. Better evidence improves models; better models reduce false alarms; lower false alarms create trust.', 'MORE TREKS → MORE DATA → BETTER MODELS → MORE TRUST'],
    ['Switching costs', 'Climbit becomes part of booking, safety protocols, guide training, insurance relationships and post-trek records. The workflow compounds around the product.', 'INTEGRATION → WORKFLOW → HISTORY → RETENTION'],
    ['Operational edge', 'The difficult part is not a sensor. It is making personalised inference useful when there is no cloud, no perfect signal and one guide has thirty people to watch.', 'SENSOR → CONTEXT → DECISION → ACTION'],
  ]
  return (
    <section className="section dark-section moat-section" id="moat">
      <div className="section-label light">04 / THE MOAT</div>
      <div className="moat-layout"><div><p className="overline mint">WHY THIS GETS STRONGER WITH USE</p><h2>The hardware is copyable.<br /><span>The system is not.</span></h2><div className="moat-tabs">{items.map((x, i) => <button key={x[0]} onClick={() => setActive(i)} className={active === i ? 'active' : ''}><span>0{i + 1}</span>{x[0]}</button>)}</div></div><div className="moat-panel"><div className="moat-orbit orbit-a" /><div className="moat-orbit orbit-b" /><div className="moat-core"><Database size={27} /><span>CLIMBIT</span><strong>DATA<br />COMPOUNDS</strong></div><div className="moat-panel-copy"><span>{items[active][2]}</span><p>{items[active][1]}</p></div></div></div>
      <div className="flywheel"><div className="fly-node n1">TREKS</div><div className="fly-node n2">OUTCOMES</div><div className="fly-node n3">MODELS</div><div className="fly-node n4">TRUST</div><div className="fly-arrow a1" /><div className="fly-arrow a2" /><div className="fly-arrow a3" /><div className="fly-arrow a4" /></div>
    </section>
  )
}

function Trust() {
  return (
    <section className="section trust-section" id="trust">
      <div className="section-label">05 / TRUST</div>
      <div className="trust-grid"><div className="trust-copy"><p className="overline">GOVERNANCE IS A PRODUCT FEATURE</p><h2>Quiet intelligence needs loud guardrails.</h2><p>Climbit is an early-warning system, not a diagnostic tool. It does not say “you have AMS.” It says “this physiological pattern warrants attention.” The guide remains the decision-maker.</p><div className="guardrail-list"><div><ShieldCheck /><span><b>Human in the loop</b>Every operational decision remains with the guide.</span></div><div><LockKeyhole /><span><b>Privacy by architecture</b>Raw signals stay on-device; only features and alerts travel.</span></div><div><WifiOff /><span><b>Offline first</b>Inference continues when the mountain takes the network away.</span></div><div><Activity /><span><b>False-alarm discipline</b>Persistent abnormality + signal quality + multi-signal agreement.</span></div></div></div><div className="trust-visual"><div className="trust-seal"><div className="seal-ring" /><ShieldCheck size={35} /><span>GUIDE<br />DECIDES</span></div><div className="audit-card"><div><span>MODEL</span><b>VALIDATED</b></div><div><span>OVERRIDE</span><b>ALWAYS ON</b></div><div><span>AUDIT TRAIL</span><b>EVERY ACTION</b></div><div><span>RAW SIGNALS</span><b>ON DEVICE</b></div></div></div></div>
    </section>
  )
}

function Journey() {
  const stages = [
    ['01', 'Booking', 'Climbit is part of the agency package. No extra decision for the trekker.'],
    ['02', 'Baseline', 'The band learns the trekker before altitude becomes the variable.'],
    ['03', 'Ascent', 'Continuous sensing + local inference begins.'],
    ['04', 'Intervention', 'Yellow → orange → red, with defined human actions.'],
    ['05', 'Aftercare', 'Audit, anonymised learning and agency analytics close the loop.'],
  ]
  return <section className="section journey-section"><div className="section-label">06 / THE JOURNEY</div><div className="journey-head"><div><p className="overline">FROM BOOKING TO RENEWAL</p><h2>One layer across the whole trek.</h2></div><div className="persona"><img src="/images/image-3.png" alt="Trek guide portrait" /><div><span>THE PRIMARY USER</span><strong>Pemba Sherpa</strong><small>Guide · 12 years · Kathmandu</small></div></div></div><div className="journey-rail">{stages.map(([n, title, body], i) => <article key={n} className="journey-card"><span className="journey-number">{n}</span><div className="journey-icon">{[<Compass />, <Watch />, <Radio />, <ShieldCheck />, <Sparkles />][i]}</div><h3>{title}</h3><p>{body}</p><div className="journey-line" /></article>)}</div></section>
}

function Final() {
  return <section className="final-section" id="contact"><div className="final-mountain"><MountainBackdrop /></div><div className="final-inner"><p className="overline mint">THE POINT OF ALL OF IT</p><h2>Give the guide<br /><em>two hours.</em></h2><p>Not a diagnosis. Not a replacement. Not another dashboard to stare at. A quiet intelligence that notices the change early enough for a human to act.</p><button className="button-primary" onClick={() => window.location.href = 'mailto:hello@climbit.example'}>Start a field conversation <ArrowRight size={17} /></button><div className="final-stats"><span><b>30</b> trekkers / guide</span><span><b>4</b> baselines</span><span><b>1</b> human decision</span></div></div><footer><Brand /><span>EDGE AI / GROUP SAFETY / HIGH ALTITUDE</span><span>© 2026 CLIMBIT</span></footer></section>
}

export default function App() {
  const sections = useMemo(() => ['story', 'engine', 'system', 'moat', 'trust'], [])
  return (
    <div className="app-shell">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Engine />
        <System />
        <Moat />
        <Trust />
        <Journey />
        <Final />
      </main>
      <div className="section-progress" aria-hidden="true">{sections.map((id, i) => <button key={id} onClick={() => scrollToId(id)}><span>{String(i + 1).padStart(2, '0')}</span><i /></button>)}</div>
    </div>
  )
}
