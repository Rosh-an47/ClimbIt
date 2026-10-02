export const homeWhyCards = [
  {
    title: '30 trekkers, one guide',
    body: 'On peak-season departures a single guide is responsible for a full group. Continuous visual monitoring is impossible when the trail stretches over hundreds of metres.',
  },
  {
    title: 'Symptoms are late signals',
    body: 'A headache that will not quit, dizziness, vomiting — what you see is already the aftermath. The physiology shifted hours earlier.',
  },
  {
    title: 'Existing tools are reactive',
    body: 'Pulse oximeters, satellite messengers, and scheduled check-ins all fire after the fact. They confirm an emergency. They do not give hours of warning.',
  },
]

export const problemStats = [
  { value: '5,364 m', label: 'Everest Base Camp altitude' },
  { value: '88–91%', label: 'Typical SpO₂ at 3,050 m' },
  { value: '3–5 days', label: 'Acclimatisation window' },
  { value: '30+', label: 'Trekkers per guide, peak season' },
]

export const blacQuadrants = [
  {
    key: 'blatant',
    title: 'Blatant',
    body: 'Altitude illness is common and known. Agencies train for it. Trekkers fear it. The problem is not hidden.',
  },
  {
    key: 'latent',
    title: 'Latent',
    body: 'Guides lack real-time physiology data. They infer risk from gait, conversation, and a handful of check-ins.',
  },
  {
    key: 'aspirational',
    title: 'Aspirational',
    body: 'Trekkers already expect technology-enabled safety. Wearables are familiar. Agencies want to sell a safer product.',
  },
  {
    key: 'critical',
    title: 'Critical',
    body: 'Preventable emergencies happen every season. Evacuations, insurance claims, and reputational damage follow.',
  },
]

export const whyNow = [
  {
    title: 'Wearables matured',
    body: 'PPG, ECG, and SpO₂ sensors are cheap, small, and battery-efficient enough to live on a wrist at 5,000 metres.',
  },
  {
    title: 'Edge AI is viable',
    body: 'Inference runs on-device without cloud. The mountain has no reliable connectivity. Climbit does not need it.',
  },
  {
    title: 'Agencies face rising liability',
    body: 'Insurance costs, reputation risk, and evacuation expenses have made early warning an operational necessity, not a gadget.',
  },
]

export const baselines = [
  {
    title: 'Personal',
    example: 'Resting HR 58 → 79 over 3 days',
    body: 'Each trekker’s own resting and effort baselines, collected before and during the trek. Drift from self is the first signal.',
  },
  {
    title: 'Peer',
    example: '28 of 30 trekkers adapting normally',
    body: 'The group on the same trail, same weather, same day. If one person diverges while the group holds, the engine notices.',
  },
  {
    title: 'Cohort',
    example: 'Similar ascent profile, similar age/fitness',
    body: 'Historical trekkers with comparable ascent profiles, age, and fitness. Context for what “normal” looks like at this altitude.',
  },
  {
    title: 'Historical',
    example: 'Trajectory matches 47 prior deterioration events',
    body: 'Known deterioration trajectories. Pattern match against events that later became AMS, HAPE, or evacuation.',
  },
]

export const agenticSteps = [
  {
    title: 'Detect deterioration',
    body: 'The Multi-Baseline Risk Engine flags a rising score from personal, peer, cohort, and historical signals.',
  },
  {
    title: 'Check activity + altitude + symptoms + signal quality',
    body: 'Context first. The same heart rate at sprint, rest, or sleep means different things. Bad signal never becomes an alert.',
  },
  {
    title: 'Request trekker re-check',
    body: 'The wearable asks for a still reading and a short symptom tap. Agentic AI gathers the missing evidence before it speaks.',
  },
  {
    title: 'Alert guide → Guide assesses',
    body: 'The Guide Hub surfaces the person, the score, and the why. The guide decides. The model never issues an operational order.',
  },
  {
    title: 'Recommend protocol',
    body: 'Stop ascent, rest, descend, oxygen, or continue monitoring — presented as a recommendation, not a diagnosis.',
  },
  {
    title: 'Escalate to agency (if needed)',
    body: 'If the guide confirms orange or red, operations is looped in with location, last vitals, and the protocol in play.',
  },
  {
    title: 'Generate emergency packet',
    body: 'A compact packet: identity, GPS, altitude, recent physiology, symptoms, and actions taken — ready for helicopter or clinic.',
  },
  {
    title: 'Sync to cloud when connectivity returns',
    body: 'Everything that mattered ran offline. When a signal appears, anonymised events update the models. Live inference never waited.',
  },
]

export const economicValue = [
  {
    title: 'For the guide',
    body: 'One dashboard instead of 30 check-ins. Hours of early warning instead of a trekker sitting down too late.',
  },
  {
    title: 'For the agency',
    body: 'Fewer evacuations. Lower insurance. A premium safety reputation that can be sold, season after season.',
  },
  {
    title: 'For the trekker',
    body: 'Personalised monitoring. Simple guidance. Emergency support without becoming a medical device customer.',
  },
]

export const flywheelNodes = [
  'More treks',
  'More data',
  'Better models',
  'Fewer false alarms',
  'More agencies',
]

export const b2b2c = [
  {
    title: 'Trekking agency',
    gives: 'Fleet purchase, safety protocols, booking integration, seasonal renewal.',
    gets: 'Fewer incidents, insurance leverage, a differentiated safety product, operational visibility.',
  },
  {
    title: 'Climbit fleet + Guide Hub',
    gives: 'Wearables, offline inference, group risk view, escalation workflow, emergency packets.',
    gets: 'Longitudinal altitude physiology, labelled events, agency relationships that compound.',
  },
  {
    title: 'Trekkers',
    gives: 'Baseline wear time, in-trek signals, consent, simple symptom check-ins.',
    gets: 'Personalised monitoring, a guide who is not guessing, support if the mountain turns.',
  },
]

export const pemba = {
  name: 'Pemba Sherpa',
  age: 38,
  role: 'Senior trek guide / operations manager',
  location: 'Kathmandu, Nepal',
  experience: '12 years leading EBC and ABC routes',
  pains: [
    'Cannot watch 30 people at once on a stretched trail.',
    'Check-ins are subjective and easy to under-report.',
    'One missed AMS case can cost a season of reputation.',
  ],
  goals: [
    'Keep every guest walking, sleeping, and descending on plan.',
    'Give junior guides a shared, objective picture of the group.',
    'Win agency contracts on safety, not only on price.',
  ],
  criteria: [
    'Works fully offline above Namche.',
    'False alarms must stay rare — guides will ignore noisy tools.',
    'Fits existing morning briefings and insurance paperwork.',
    'Clear ROI within one or two seasons.',
  ],
}

export const porterForces = [
  {
    name: 'Buyer power',
    rating: 'Moderate',
    intensity: 55,
    bullets: [
      'Agencies need ROI proof and multi-season trust before they lock a fleet.',
      'Switching later is painful once booking and insurance are integrated.',
      'A few large operators can negotiate, but safety branding is not purely price-driven.',
    ],
  },
  {
    name: 'Supplier power',
    rating: 'Moderate',
    intensity: 50,
    bullets: [
      'PPG and SpO₂ sensors are largely commodity hardware.',
      'Tier-1 hardware partners still matter for battery, cold-weather reliability, and certification.',
      'Climbit’s differentiation sits in software, data, and workflow — not the chip.',
    ],
  },
  {
    name: 'Competitive rivalry',
    rating: 'Low',
    intensity: 28,
    bullets: [
      'Garmin and Apple sell excellent personal wearables. They do not sell group workflow or escalation.',
      'Satellite messengers are communication tools, not physiology engines.',
      'No incumbent owns a labelled high-altitude deterioration corpus at agency scale.',
    ],
  },
  {
    name: 'Threat of substitutes',
    rating: 'Moderate',
    intensity: 52,
    bullets: [
      'Better guide training and slower itineraries remain the gold-standard substitute.',
      'Pulse oximeters and satellite SOS exist, but they are reactive.',
      'Agencies can “wait and see” — until the next preventable evacuation.',
    ],
  },
  {
    name: 'Threat of new entrants',
    rating: 'Low',
    intensity: 30,
    bullets: [
      'The data flywheel and agency relationships take years to replicate.',
      'Field credibility in Nepal, India, Peru, and Tanzania is not a weekend MVP.',
      'Human-in-the-loop governance and regional compliance raise the bar for clones.',
    ],
  },
]

export const moats = [
  {
    title: 'Proprietary data',
    body: 'Millions of hours of altitude physiology, tied to ascent profiles, weather, and outcomes — not gym-floor heart rate.',
  },
  {
    title: 'Network effects',
    body: 'Every trek sharpens the model. Sharper models win more agencies. More agencies produce more treks.',
  },
  {
    title: 'Switching costs',
    body: 'Climbit sits inside booking, safety protocols, and insurance. Pulling it out means retraining a season’s operating system.',
  },
  {
    title: 'Regulatory positioning',
    body: 'Designed as a decision-support and wellness tool, not a diagnostic device. Guides decide. Models recommend.',
  },
]

export const marketSizing = [
  { label: 'TAM', value: '4,000+', detail: 'High-altitude trekking operators worldwide' },
  { label: 'SAM', value: '800', detail: 'Nepal, India, Peru, Tanzania, and the Alps' },
  { label: 'SOM', value: '80', detail: 'Agencies in the first 3 years' },
]

export const journeyStages = [
  {
    title: 'Booking + baseline',
    body: 'Climbit enters the agency package before the trek. Consent is captured and the band starts building a personal baseline before altitude becomes part of the story.',
    data: 'Package SKU + consent at checkout · 48–72h resting HR, HRV and overnight SpO₂ baseline.',
  },
  {
    title: 'Trail activation',
    body: 'On Day 1 the Guide Hub pairs the group and turns thirty separate wearables into one local field view. No cloud round-trip is required.',
    data: 'Up to 30 bands paired locally · inference stays on the hub/device · route context begins at ascent.',
  },
  {
    title: 'Continuous monitoring',
    body: 'The system watches physiology in context — altitude, activity, signal quality and each trekker’s own baseline — without filling the guide’s screen with noise.',
    data: 'Risk context refreshes every 60s · alerts require multi-signal agreement rather than a single threshold.',
  },
  {
    title: 'Signal + assessment',
    body: 'A divergence surfaces as a quiet prompt. The guide checks in, watches gait and conversation, and confirms, dismisses or keeps monitoring. The model waits.',
    data: 'Example: HR drift + peer divergence at 4,100 m while resting · guide action logged with reason.',
  },
  {
    title: 'Escalation',
    body: 'When the operational state turns orange or red, the system packages the relevant context so the guide and agency can execute the protocol they already own.',
    data: 'GPS + altitude + recent vitals + symptoms + recommended protocol · guide verifies and decides.',
  },
  {
    title: 'Post-trek + renewal',
    body: 'The loop closes after the trek. Validated, anonymised data can improve the system, while the agency carries calibrated baselines and operational history into the next season.',
    data: 'Seasonal validation before model updates · renewal combines fleet continuity, calibrated history and agency workflow.',
  },
]

export const riskStates = [
  {
    name: 'GREEN',
    color: '#4A8A3A',
    title: 'Continue monitoring',
    body: 'Scores within expected envelopes for this person, this altitude, this effort. The hub stays quiet.',
  },
  {
    name: 'YELLOW',
    color: '#C8A83A',
    title: 'Guide check-in',
    body: 'Early divergence. Talk to the trekker, confirm symptoms, keep the group moving if the human says so.',
  },
  {
    name: 'ORANGE',
    color: '#C87A2A',
    title: 'Stop ascent + assess',
    body: 'Multi-signal agreement. Rest, descend, or hold the itinerary. The recommendation is operational, not diagnostic.',
  },
  {
    name: 'RED',
    color: '#A53A3A',
    title: 'Emergency protocol',
    body: 'Prepare evacuation. Generate the packet. The guide and agency run the protocol they already trained.',
  },
]

export const governance = [
  {
    title: 'Human-in-the-loop',
    body: 'The guide makes every operational decision. Climbit recommends. It never commands a descent on its own.',
  },
  {
    title: 'Signal confidence',
    body: 'A bad reading triggers a re-check, never an alert. Motion artefact is not altitude sickness.',
  },
  {
    title: 'False alarm protection',
    body: 'Multi-signal agreement is required. One noisy channel cannot empty a trail of trust.',
  },
  {
    title: 'Model discipline',
    body: 'Live inference is not training. Updates are validated offline, then shipped. The mountain is not a lab.',
  },
  {
    title: 'India DPDP compliant',
    body: 'Consent Manager, purpose limitation, and data localisation for Indian treks — designed in, not bolted on.',
  },
  {
    title: 'Not a diagnostic device',
    body: 'Early-warning and wellness positioning. No disease labels. Support for human judgement in the field.',
  },
]

export const dpdp = [
  {
    title: 'Data collected',
    body: 'Physiological signals, symptom taps, GPS, and altitude — the minimum needed to score risk in context.',
  },
  {
    title: 'Consent',
    body: 'Explicit, purpose-bound, via a registered Consent Manager. Withdrawal is a first-class action, not a buried email.',
  },
  {
    title: 'Storage',
    body: 'Localised in India for Indian treks. Field data stays on-device until a lawful, consented sync.',
  },
  {
    title: 'Rights',
    body: 'Access, correction, withdrawal, and a named grievance officer. Agencies inherit a process they can explain.',
  },
]

