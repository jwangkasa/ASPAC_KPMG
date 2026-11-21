// Structured content extracted directly from Agent-led_transformation_RISE_with_SAP.pptx

export interface BulletItem {
  id: number
  title: string
  description: string
  targetSlide: number | string
  badge?: string
}

export interface ChildSlideCard {
  id: number
  slideNumber: number
  title: string
  subtitle: string
  summary: string
  highlights: string[]
  pillars?: { label: string; text: string }[]
  keyMetrics?: { value: string; label: string }[]
}

export const SLIDE_3_BULLETS = [
  {
    id: 1,
    title: 'Joule as the new engagement layer',
    description: 'Bringing together data, workflows, and agents across SAP systems and beyond to direct the enterprise.',
    targetSlide: 4,
    badge: 'Engagement Layer',
  },
  {
    id: 2,
    title: 'SAP Autonomous Suite',
    description: 'Reinventing how enterprises run, based on AI assistants and agents executing work end-to-end.',
    targetSlide: 5,
    badge: 'Operational Core',
  },
  {
    id: 3,
    title: 'Industry AI',
    description: 'Embeds process knowledge, compliance rules, and data models specific to your industry value chains.',
    targetSlide: 13,
    badge: 'Industry Intelligence',
  },
  {
    id: 4,
    title: 'SAP Business AI Platform',
    description: 'Delivering business context, unified data, specialized models, and enterprise-grade governance.',
    targetSlide: 15,
    badge: 'AI Foundation',
  },
  {
    id: 5,
    title: 'Accelerate Adoption of Autonomous Enterprise',
    description: 'Agent-led transformation delivered through proven RISE and GROW with SAP offerings.',
    targetSlide: 16,
    badge: 'Transformation',
    hasActions: true,
  },
]

export const SLIDE_4_DATA = {
  title: "AI is everywhere. Results aren't",
  subtitle: 'Why 74% of organizations remain trapped in pilot mode with no clear path to scale',
  stat: '74%',
  statLabel: 'of organizations are stuck in pilot mode with no path to scale',
  callout: {
    headline: "The providers promising to fix this don't have the foundation to do so.",
    body: "Most AI providers are building from the outside in — layering intelligence on top of systems they don't own, data they didn't generate, and business processes they've never run.",
  },
  gaps: [
    {
      id: 'context',
      title: 'Lack of Business & Process Context',
      summary: "Generic models can read your data, but they can't reason over how your business actually runs.",
      impact: 'AI outputs remain superficial suggestions rather than actionable transactions.',
      icon: '🧠',
    },
    {
      id: 'integration',
      title: 'Lack of Data Connection & Integration',
      summary: 'AI is bolted onto disconnected, outdated legacy systems with fragmented data schemas.',
      impact: 'Creates operational friction, data latency, and brittle pipeline maintenance.',
      icon: '🔗',
    },
    {
      id: 'governance',
      title: 'Lack of Governance & Reliability',
      summary: 'AI that cannot be audited, governed, or controlled becomes a serious operational risk.',
      impact: 'Enterprise security, compliance breaches, and unpredictable model hallucinations.',
      icon: '🛡️',
    },
  ],
}

export const SLIDE_5_DATA = {
  title: 'What AI needs to deliver value. SAP already has it.',
  subtitle: 'Turning isolated AI pilots into autonomous, enterprise-wide operational reality',
  metrics: [
    {
      value: '3.5x',
      label: 'Higher prediction quality than generic LLMs',
      desc: 'Substantially reduces hallucination risk through operational grounding.',
    },
    {
      value: '100%',
      label: 'Real business context by default',
      desc: 'One unified data fabric across SAP and non-SAP sources.',
    },
    {
      value: 'E2E',
      label: 'Enterprise-wide operations',
      desc: 'Transforms fragmented pilots into full-picture, coordinated execution.',
    },
  ],
  pillars: [
    {
      title: 'Deep Process & Industry Knowledge',
      desc: '50 years of process & industry intelligence encoded into our applications, business knowledge graph, and tuned LLMs.',
      tag: '50+ Years Intelligence',
    },
    {
      title: 'Semantically Rich Business Data',
      desc: 'Data enriched with live operational context inside a suite-wide semantic model, ready for autonomous agent reasoning.',
      tag: 'Semantic Fabric',
    },
    {
      title: 'Enterprise-Grade Governance',
      desc: 'Purpose-built for enterprise deployment, governing the complete agentic AI lifecycle securely, ethically, and reliably.',
      tag: 'Secure & Compliant',
    },
  ],
}

// Child Slides 6 through 12
export const CHILDREN_SLIDES_6_12: ChildSlideCard[] = [
  {
    id: 6,
    slideNumber: 6,
    title: 'Welcome to the Autonomous Enterprise',
    subtitle: 'The Beginning of Better — People set the direction. AI executes.',
    summary:
      'A fundamental paradigm shift where human leaders establish strategic goals and constraints, while autonomous AI agents execute complex, multi-step workflows across systems without latency.',
    highlights: [
      'People set strategic direction and guardrails; AI assistants and agents handle execution.',
      'Agents coordinate across Finance, Supply Chain, Procurement, and HR in real time with zero signal lag.',
      'Built-in enterprise auditability, safety thresholds, and explainable decision logs.',
      'Transforms organizations from reactive problem-solvers to self-optimizing business engines.',
    ],
    keyMetrics: [
      { value: 'Zero Lag', label: 'Signal-to-Action Latency' },
      { value: '100%', label: 'Auditable & Governed Decisions' },
    ],
  },
  {
    id: 7,
    slideNumber: 7,
    title: 'Key Elements of the Autonomous Enterprise',
    subtitle: 'Five interconnected architectural layers powering agentic autonomy',
    summary:
      'The complete end-to-end stack: Joule conversational engagement layer, Autonomous Suite operational core, industry-specific knowledge models, Business AI platform, and accelerated RISE/GROW methodology.',
    highlights: [
      'Layer 1: Joule engagement layer brings together workflows, contextual data, and cross-system agents.',
      'Layer 2: SAP Autonomous Suite reinvents business operations with role-based digital teammates.',
      'Layer 3: Industry AI embeds deep compliance rules, data models, and sector value chains.',
      'Layer 4: SAP Business AI Platform provides unified data fabrics, foundation models, and governance.',
      'Layer 5: Proven transformation pathways with RISE and GROW with SAP to accelerate time to value.',
    ],
    pillars: [
      { label: 'Joule Layer', text: 'Universal conversational and agent orchestration interface.' },
      { label: 'Autonomous Suite', text: 'Domain-specific assistants driving autonomous tasks.' },
      { label: 'Clean Core Foundation', text: 'Standardized ERP core ensuring continuous AI upgrades.' },
    ],
  },
  {
    id: 8,
    slideNumber: 8,
    title: 'Agent-Led Transformation via RISE with SAP',
    subtitle: 'Transform with a faster, predictable path from on-premises ERP to Autonomous Enterprise',
    summary:
      'A structured, automated migration path that cuts complexity and manual technical debt through specialized migration assistants, de-risking the journey to modern S/4HANA Cloud.',
    highlights: [
      'Remove complexity and accelerate time-intensive activities using seven specialized migration assistants.',
      'Minimize transformation risk with proven SAP Activate roadmaps and clean core governance.',
      'Unlock agentic AI faster across the enterprise, moving from legacy ECC to modern cloud ERP.',
      'Built-in value assurance checkpoints safeguarding timeline and budget predictability.',
    ],
    keyMetrics: [
      { value: '7', label: 'Migration & Modernization Assistants' },
      { value: 'Fast-Track', label: 'Accelerated Clean Core Migration' },
    ],
  },
  {
    id: 9,
    slideNumber: 9,
    title: 'Introduction to RISE with SAP Methodology',
    subtitle: 'Transform with confidence guided by best-practice project roadmaps and agent-led toolchains',
    summary:
      'A comprehensive methodology framework uniting SAP Activate, Cloud ALM, onboarding advisors, and modern AI toolchains to deliver continuous business transformation.',
    highlights: [
      'Tailored transformation roadmaps aligned with business priority and organizational resource capacity.',
      'Direct access to SAP onboarding advisors, enterprise architects, and accredited partner ecosystems.',
      'Automated telemetry and real-time dashboard visibility across every project milestone.',
      'Continuous alignment with clean core principles to safeguard future innovation adoption.',
    ],
    pillars: [
      { label: 'Standardized Framework', text: 'Six phases with explicit tasks and quality gates.' },
      { label: 'Expert Guidance', text: 'Onboarding advisors and validated partner expertise.' },
      { label: 'Agent-Led Toolchain', text: 'Automated code analysis, testing, and configuration tools.' },
    ],
  },
  {
    id: 10,
    slideNumber: 10,
    title: 'Transformation Challenges vs. RISE Methodology',
    subtitle: 'Eliminating the historic pitfalls of ERP modernization with structured AI assistance',
    summary:
      'Traditional ERP projects suffered from unexpected delays, custom code sprawl, and cost overruns. The RISE methodology directly counters these risks with clean core telemetry and guided roadmaps.',
    highlights: [
      'Challenge: Complex technical debt & custom code sprawl → Solution: Automated code modernization and clean core remediation.',
      'Challenge: Massive manual analysis teams → Solution: AI discovery tools and pre-configured industry best practices.',
      'Challenge: Scope drift & budget overruns → Solution: Mandatory Quality Gates and executive summary milestone sign-offs.',
      'Challenge: Business disruption → Solution: Continuous validation and automated test management.',
    ],
    pillars: [
      { label: 'Legacy Risk', text: 'Unpredictable delays, custom ABAP debt, high consulting overhead.' },
      { label: 'RISE Solution', text: 'Predictable milestones, AI-assisted migration, clean core KPI tracking.' },
    ],
  },
  {
    id: 11,
    slideNumber: 11,
    title: 'Continuous Innovation with a Clean Core',
    subtitle: 'Rapidly adopt AI and emerging technologies on an agile, cloud-ready foundation',
    summary:
      'Clean core is a set of guiding principles that support continuous business transformation by helping organizations design agile, innovative, and cost-efficient ERP systems.',
    highlights: [
      'Resilient business processes: Adopt standard cloud capabilities while isolating differentiating logic.',
      'Extensibility: Decouple custom extensions from the core using SAP BTP and Developer Extensibility.',
      'High-quality data: Establish unified semantic data fabrics with real-time lifecycle governance.',
      'Seamless integration: Enforce public APIs and avoid direct database access to ensure zero-downtime upgrades.',
      'Efficient operations: Centralize telemetry and system health tracking inside SAP Cloud ALM.',
    ],
    keyMetrics: [
      { value: '5', label: 'Guiding Clean Core Principles' },
      { value: 'Zero', label: 'Core Modifications Required' },
    ],
  },
  {
    id: 12,
    slideNumber: 12,
    title: 'Key Components of RISE Aligned to Clean Core',
    subtitle: 'The tripartite engine powering the transition to the Autonomous Suite',
    summary:
      'Three interconnected pillars that ensure every transformation adheres to clean core standards, accelerating time-to-value while enabling future AI agent activation.',
    highlights: [
      'Pillar 1 — Standardized Framework: Adopt SAP Autonomous Suite faster with your own tailored transformation roadmap.',
      'Pillar 2 — Expert Guidance: Utilize AI knowledge anchored in best practices enhanced by SAP onboarding advisors, enterprise architects, and qualified partners.',
      'Pillar 3 — Agent-Led Toolchain: Streamline collaboration, drive efficient project execution, and enable continuous innovation.',
    ],
    pillars: [
      { label: 'Standardized Framework', text: 'Predefined phases, quality gates, and milestone checklists.' },
      { label: 'Expert Guidance', text: '1-on-1 advisor sessions, architecture reviews, and partner certifications.' },
      { label: 'Agent-Led Toolchain', text: 'Integrated Cloud ALM, Joule Studio, and migration assistants.' },
    ],
  },
]

export const SLIDE_13_DATA = {
  title: 'Standardized Framework — RISE with SAP Methodology',
  subtitle: 'Structured project roadmaps in SAP Activate with detailed phases, milestones, quality gates, and accelerators',
  phases: [
    {
      name: 'Discover',
      tag: 'Discover & Onboard',
      desc: 'Analyze the as-is situation, define project scope, plan architecture blueprints, and request business approval.',
      activities: ['Digital Discovery Assessment', 'Business case formulation', 'Architecture blueprint review'],
    },
    {
      name: 'Prepare',
      tag: 'Discover & Onboard',
      desc: 'Initiate project preparation and team onboarding by establishing a customized project roadmap and clean core plan.',
      activities: ['Onboarding session with SAP Launch Advisor', 'Clean core success plan setup', 'Toolchain enablement'],
    },
    {
      name: 'Explore',
      tag: 'Modernize & Run',
      desc: 'Explore standard capabilities and AI scenarios, conduct fit-to-standard analysis workshops, and define required extensions.',
      activities: ['Fit-to-standard workshops', 'Process delta identification', 'BTP extension planning'],
    },
    {
      name: 'Realize',
      tag: 'Modernize & Run',
      desc: 'Realize value through solution adoption according to project scope while managing change and ensuring user adoption.',
      activities: ['Configuration & sprint cycles', 'Custom code remediation', 'Integration & end-to-end testing'],
    },
    {
      name: 'Deploy',
      tag: 'Modernize & Run',
      desc: 'Deploy the configured production system and ensure quality by conducting final dress rehearsals and user enablement.',
      activities: ['Final data migration cutover', 'Dress rehearsal & sign-off', 'Production system launch'],
    },
    {
      name: 'Run',
      tag: 'Continuously Innovate',
      desc: 'Run with operational excellence and detect continuous opportunities for innovation and AI agent activation.',
      activities: ['Hypercare support', 'Cloud ALM operations', 'Clean core KPI continuous monitoring'],
    },
  ],
}

export const SLIDE_14_DATA = {
  title: 'Clean Core Quality Gate Governance Process',
  subtitle: 'Critical checkpoints that validate project deliverables meet predefined standards before progressing',
  steps: [
    {
      step: '1. Onboarding with SAP Launch Advisor',
      bullets: [
        'Comprehensive project team onboarding and tooling orientation.',
        'Setup customer-specific clean core success plan.',
        'Assign role-based tasks and prepare for Quality Gate 1.',
      ],
    },
    {
      step: '2. Execution & Task Completion',
      bullets: [
        'Execution of standardized task catalog across project workstreams.',
        'Clean core success plan milestone verification.',
        'Real-time tracking of deliverables in Cloud ALM.',
      ],
    },
    {
      step: '3. Quality Gate Assessment',
      bullets: [
        'Rigorous automated checks and stakeholder reviews.',
        'Measurement against Clean Core KPI framework.',
        'Architecture validation and deviation escalation.',
      ],
    },
    {
      step: '4. Quality Gate Report & Feedback',
      bullets: [
        'Comprehensive Quality Gate status report and executive summary.',
        'Actionable remediation guidance from SAP experts.',
        'Formal authorization to proceed to subsequent phase.',
      ],
    },
  ],
}

export const SLIDE_15_DATA = {
  title: 'Expert Guidance — RISE with SAP Methodology',
  subtitle: 'Ensuring best-practice adherence as part of the SAP Cloud ERP Private package',
  fourPillars: [
    {
      title: 'Digital Discovery Assessment',
      badge: 'Scope Definition',
      desc: 'AI-assisted evaluation to define solution scope, target architecture, and identify applicable standard industry processes.',
      points: [
        'Assistants to define solution scope and boundary conditions.',
        'Automated fit-to-standard baseline comparison.',
        'Target cloud landscape architecture recommendations.',
      ],
    },
    {
      title: 'Onboarding Service',
      badge: 'Launch Advisor',
      desc: 'One-to-one personalized enablement sessions with an assigned SAP Onboarding Advisor.',
      points: [
        'Dedicated 1-on-1 advisor sessions.',
        'Introduction to cloud entitlements, tools, and AI agents.',
        'Initial setup of project & clean core success plan.',
      ],
    },
    {
      title: 'Transformation Preparation Service',
      badge: 'Expert Engagement',
      desc: 'SAP experts actively collaborate with customer project teams to build tailored execution roadmaps.',
      points: [
        'Tailored customer-specific roadmap setup.',
        'Introduction to AI Discovery Center and Joule Studio.',
        'AI use-case activation and BTP extension strategy.',
      ],
    },
    {
      title: 'Quality Gate Process + Feedback',
      badge: 'Assurance & Reports',
      desc: 'Formal milestone checkpoints validating deliverables against clean core measurement criteria.',
      points: [
        'Project milestone checkpoint reviews.',
        'Clean core measurement framework & dashboard.',
        'Executive summary and actionable expert feedback.',
      ],
    },
  ],
  partnerCallout: {
    headline: 'Global SAP Partner Network Integration',
    text: 'SAP expert guidance is complemented by accredited partner organizations through the SAP Partner Competency Framework, featuring Qualified RISE Partners and RISE Validated Partners for end-to-end execution assurance.',
  },
}

export const SLIDE_16_DATA = {
  title: 'Embedded Launch Activities — RISE with SAP',
  subtitle: 'Comprehensive onboarding and transition support for SAP Cloud ERP Private',
  sections: [
    {
      category: 'Why (Benefits)',
      color: '#3b82f6',
      items: [
        'Helps establish a confirmed, de-risked path for customers.',
        'Included in your SAP Cloud ERP Private subscription at zero additional cost.',
        'Accelerates time to value through rapid best practice adoption.',
        'Safeguards live go-live operations with proactive health checks.',
      ],
    },
    {
      category: 'What (Content)',
      color: '#10b981',
      items: [
        'RISE with SAP Methodology & SAP Activate best practice assets.',
        'Clean core quality gates and governance checklists.',
        'System access, entitlement onboarding, and service provisioning.',
        'Integrated toolchain setup (SAP Cloud ALM, BTP, AI Agent Hub).',
        'Continuous quality checks for SAP Enterprise Support & Value Maps.',
      ],
    },
    {
      category: 'How (Delivery)',
      color: '#f59e0b',
      items: [
        'Multiple personalized calls with dedicated SAP launch specialists.',
        'Interactive webinars, digital playbooks, and Onboarding Resource Center.',
        'Targeted milestone emails timed to project execution phases.',
        'Hands-on technical guidance during initial tenant provision and setup.',
      ],
    },
    {
      category: 'Enablement & Governance',
      color: '#8b5cf6',
      items: [
        'Role-specific, self-paced learning journeys for architects and users.',
        'Clean Core Assessment reports delivered during implementation and run phases.',
        'Concrete action plans designed to accelerate continuous innovation.',
      ],
    },
  ],
}

export const SLIDE_17_DATA = {
  title: 'Transformation Preparation Service — GROW & RISE with SAP',
  subtitle: 'Craft your own tailored roadmap with direct SAP specialist guidance',
  summary:
    'Develop a customized transformation roadmap and configure foundational tools and governance models to accelerate time-to-value for SAP Business Suite transitions.',
  deliverables: [
    {
      title: 'Discovery-Based Insights',
      icon: '🔍',
      desc: 'Leverage deep business case analysis, value mapping, and architecture blueprints to steer roadmap milestones and realistic timelines.',
    },
    {
      title: 'Guided Setup Services',
      icon: '⚙️',
      desc: 'Collaborate directly with SAP specialists for seamless activation of cloud entitlements, SAP Cloud ALM, and the integrated toolchain.',
    },
    {
      title: 'Accelerated Value Delivery',
      icon: '🚀',
      desc: 'Drive faster outcomes through collaborative knowledge transfer, pre-built AI scenarios, and continuous improvement frameworks.',
    },
  ],
  coreOutputs: [
    { title: 'Tailored Transformation Roadmap', tag: 'Custom Blueprint' },
    { title: 'Integrated Toolchain Activation', tag: 'Cloud ALM & BTP' },
    { title: 'Solution Standardization Governance', tag: 'Clean Core' },
    { title: 'Concrete AI & BTP Use Case Examples', tag: 'Joule & Agents' },
  ],
  pricingNote: 'Included at zero additional cost for customers with SAP Cloud ERP Private subscription.',
}
