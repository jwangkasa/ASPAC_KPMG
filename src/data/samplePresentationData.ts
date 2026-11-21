// Exact data and assets from Sample_Presentation1.pptx
import slide3HighResDiagram from '../assets/presentation/slide3_high_res_diagram_trimmed.png'
import jouleUI1 from '../assets/presentation/image19.png'
import jouleUI2 from '../assets/presentation/image20.png'
import jouleMobile from '../assets/presentation/image27.png'
import coreSvg from '../assets/presentation/image30.svg'
import platformArchImg from '../assets/presentation/image67.png'
import effortImg from '../assets/presentation/image68.png'
import riseSvg from '../assets/presentation/image75.svg'
import growBannerImg from '../assets/presentation/image114.png'
import growLogoImg from '../assets/presentation/image87.png'
import retailImg from '../assets/presentation/image50.png'
import consumerImg from '../assets/presentation/image51.png'
import energyImg from '../assets/presentation/image52.png'
import agriImg from '../assets/presentation/image53.png'

export interface PresentationBullet {
  id: number
  title: string
  highlight: string
  suffix: string
  description: string
  targetSlide: number
  badge: string
}

export const SAMPLE_SLIDE_3_BULLETS: PresentationBullet[] = [
  {
    id: 1,
    title: 'Joule as a central interaction layer',
    highlight: 'Joule',
    suffix: ' as a central interaction layer that brings together data, workflows, and agents within SAP systems and beyond',
    description: 'Brings together data, workflows, and agents within SAP systems and beyond',
    targetSlide: 4,
    badge: '1. Joule',
  },
  {
    id: 2,
    title: 'SAP Autonomous Suite',
    highlight: 'SAP Autonomous Suite',
    suffix: ' to reshape the way companies work, based on AI assistants and agents that operate end-to-end',
    description: 'Reshapes the way companies work, based on AI assistants and agents that operate end-to-end',
    targetSlide: 5,
    badge: '2. Autonomous Suite',
  },
  {
    id: 3,
    title: 'Industry AI',
    highlight: 'Industry AI',
    suffix: ' integrates the process knowledge, compliance rules, and data models specific to your industry',
    description: 'Integrates the process knowledge, compliance rules, and data models specific to your industry',
    targetSlide: 6,
    badge: '3. Industry AI',
  },
  {
    id: 4,
    title: 'SAP Business AI Platform',
    highlight: 'SAP Business AI Platform',
    suffix: ', which provides business context, unified data, models, and governance for enterprises',
    description: 'Provides business context, unified data, models, and governance for enterprises',
    targetSlide: 7,
    badge: '4. AI Platform',
  },
  {
    id: 5,
    title: 'Agent-Led Transformation via RISE and GROW',
    highlight: 'Agent-Led Transformation',
    suffix: ' via RISE and GROW',
    description: 'Accelerate transformation through RISE with SAP and GROW with SAP methodologies',
    targetSlide: 8,
    badge: '5. Transformation',
  },
]

export const SAMPLE_SLIDE_3_DATA = {
  title: 'The components of the Autonomous Enterprise',
  subtitle: 'A unified enterprise architecture connecting natural interaction, autonomous suites, industry AI, and the business platform.',
  diagramImage: slide3HighResDiagram,
  rawDiagramImage: slide3HighResDiagram,
}

// Slide 4: Joule Work
export const SAMPLE_SLIDE_4_DATA = {
  title: 'Joule Work — The Workspace for the Autonomous Enterprise',
  subtitle: 'The workspace for guiding assistants, gaining insights, and advancing work: Less navigation, faster action, better decisions.',
  images: [jouleUI1, jouleUI2, jouleMobile],
  capabilities: [
    { title: 'Discover', desc: 'Context-driven exploration across SAP systems, enterprise data, and external sources.' },
    { title: 'Conversations', desc: 'Natural language dialog that interprets business intent and drafts executable workflows.' },
    { title: 'Spaces & Workspaces', desc: 'Unified graphical cards synthesizing transactions, analytics, and agent alerts in one place.' },
    { title: 'Jobs & Execution', desc: 'Autonomous background jobs orchestrated across systems with user approval gates.' },
    { title: 'Develop', desc: 'Extensibility layer via Joule Studio to tailor and deploy custom skill-sets and agent behaviors.' },
  ],
}

// Slide 5: SAP Autonomous Suite The Operational Core
export const SAMPLE_SLIDE_5_DATA = {
  title: 'SAP Autonomous Suite — The Operational Core',
  subtitle: 'AI Agent Hub: Developing, extending, and connecting agents tailored to individual business requirements.',
  diagramSvg: coreSvg,
  flowSteps: [
    { step: 'People lead', desc: 'Human leaders define strategy, boundaries, and high-impact decisions.' },
    { step: 'Apps generate signals', desc: 'Core ERP applications detect real-time operational events and anomalies.' },
    { step: 'Data provides context', desc: 'Unified semantic business data fabric enriches signals with full lineage.' },
    { step: 'Assistants coordinate', desc: 'Domain assistants orchestrate specialized agent teams across functions.' },
    { step: 'Agents take action', desc: 'Autonomous agents execute multi-step transactions end-to-end.' },
  ],
}

// Slides 6-12: Children of Autonomous Suite
export interface ChildCardData {
  id: number
  slideNumber: number
  title: string
  domain: string
  subtitle: string
  kpis?: string[]
  assistants: {
    role: string
    agents: string[]
    impact?: string
  }[]
  summary: string
}

export const SAMPLE_CHILDREN_6_12: ChildCardData[] = [
  {
    id: 6,
    slideNumber: 6,
    domain: 'Autonomous Finance',
    title: 'SAP Autonomous Suite Assistants in Finance',
    subtitle: 'One Assistant for every key role orchestrating specialized agents across the end-to-end finance process.',
    kpis: [
      '50–70% reduction in financial close cycle time',
      '30–50% reduction in invoice dispute resolution effort',
      'Up to 80% automated cash application match rate',
    ],
    assistants: [
      {
        role: 'Financial Close Assistant',
        agents: ['Balance Sheet Reconciliation Agent', 'Journal Entry Validation Agent', 'Intercompany Matching Agent'],
        impact: '50-70% faster close cycles',
      },
      {
        role: 'Treasury & Cash Management Assistant',
        agents: ['Cash Flow Forecasting Agent', 'Liquidity Optimization Agent', 'Bank Fee Analysis Agent'],
        impact: 'Real-time daily liquidity posture',
      },
      {
        role: 'Billing & Dispute Assistant',
        agents: ['Invoice Discrepancy Agent', 'Customer Credit Risk Agent', 'Deductions Settlement Agent'],
        impact: '30-50% reduction in dispute time',
      },
    ],
    summary:
      'Reimagining Finance from manual transactional accounting into autonomous operations where AI assistants manage reconciliations, credit reviews, and audits under corporate governance.',
  },
  {
    id: 7,
    slideNumber: 7,
    domain: 'Autonomous Spend',
    title: 'SAP Autonomous Suite Assistants in Spend & Procurement',
    subtitle: 'One Assistant for every key role across strategic sourcing, operational buying, and supplier management.',
    kpis: [
      '60–80% faster RFP and sourcing event creation',
      '15–25% reduction in maverick spend',
      '40–60% acceleration in contract review and compliance checks',
    ],
    assistants: [
      {
        role: 'Category & Sourcing Manager Assistant',
        agents: ['RFP Generation Agent', 'Supplier Risk & ESG Evaluation Agent', 'Market Pricing Intelligence Agent'],
        impact: 'RFP creation in 2 hours instead of 6 hours',
      },
      {
        role: 'Strategic Sourcing Advisor',
        agents: ['Contract Negotiation Simulation Agent', 'Spend Optimization Agent', 'Clause Compliance Agent'],
        impact: 'Automated contract risk scoring',
      },
      {
        role: 'Operational Buyer Assistant',
        agents: ['Purchase Requisition Automation Agent', 'PO Confirmation Agent', 'Supplier Lead-Time Predictor'],
        impact: 'Zero-touch PO processing for catalog items',
      },
    ],
    summary:
      'Autonomous Spend streamlines supplier intelligence, contract compliance, and procurement workflows, preventing leakage and accelerating sourcing cycles.',
  },
  {
    id: 8,
    slideNumber: 8,
    domain: 'Autonomous Supply Chain',
    title: 'SAP Autonomous Suite Assistants in the Supply Chain',
    subtitle: 'Orchestrating agents across manufacturing, maintenance, logistics, and inventory management.',
    kpis: [
      '10–15% maintenance cost reduction',
      '20–25% reduction in freight booking cycle time',
      '10–15% production cycle time reduction',
    ],
    assistants: [
      {
        role: 'Maintenance Planning Assistant',
        agents: ['Predictive Maintenance Agent', 'Work Order Scheduling Agent', 'Spare Parts Availability Agent'],
        impact: '10-15% maintenance cost reduction',
      },
      {
        role: 'Logistics & Transportation Assistant',
        agents: ['Freight Booking Automation Agent', 'Route Optimization Agent', 'Carrier Performance Agent'],
        impact: '20-25% reduction in freight booking cycle time',
      },
      {
        role: 'Production Scheduling Assistant',
        agents: ['Shop Floor Dispatch Agent', 'Bottleneck Prediction Agent', 'Material Shortage Agent'],
        impact: '10-15% production cycle time reduction',
      },
    ],
    summary:
      'End-to-end supply chain synchronization that senses operational disruptions before they happen, dynamically rerouting freight and rescheduling production lines.',
  },
  {
    id: 9,
    slideNumber: 9,
    domain: 'Autonomous Human Resources',
    title: 'SAP Autonomous Suite Assistants in HR',
    subtitle: 'One Assistant for every key HR role across Plan & Hire, Manage & Pay, and Develop & Grow.',
    kpis: [
      '40–50% faster candidate screening and shortlisting',
      '30–40% reduction in routine employee inquiry volume',
      'Continuous skills inference and personalized career pathing',
    ],
    assistants: [
      {
        role: 'Plan & Hire Assistant',
        agents: ['Job Description Optimization Agent', 'Candidate Sourcing & Match Agent', 'Interview Scheduling Agent'],
        impact: '40-50% faster hiring time',
      },
      {
        role: 'Develop & Grow Assistant',
        agents: ['Skills Graph Inference Agent', 'Learning Recommendation Agent', 'Mentorship Matching Agent'],
        impact: 'Personalized career journeys',
      },
      {
        role: 'Manage & Pay Assistant',
        agents: ['Payroll Discrepancy Agent', 'Leave & Attendance Agent', 'Compensation Benchmarking Agent'],
        impact: 'Automated payroll reconciliation',
      },
    ],
    summary:
      'Autonomous HCM elevates workforce agility by matching talent to internal opportunities, answering policy questions 24/7, and automating compensation reviews.',
  },
  {
    id: 10,
    slideNumber: 10,
    domain: 'Autonomous Customer Experience',
    title: 'SAP Autonomous Suite Assistants in Customer Experience',
    subtitle: 'Driving customer loyalty, omni-channel engagement, and high-velocity dispute resolution.',
    kpis: [
      '35–45% increase in first-contact service resolution',
      '20–30% uplift in personalized campaign conversion',
      '50% reduction in agent handling time for complex customer inquiries',
    ],
    assistants: [
      {
        role: 'Customer Service Assistant',
        agents: ['Case Preparation & Routing Agent', 'Sentiment & Intent Analysis Agent', 'Next-Best-Action Agent'],
        impact: 'Instant case summarization and reply recommendation',
      },
      {
        role: 'Omni-Channel Commerce Assistant',
        agents: ['Personalized Promotion Agent', 'Cart Abandonment Recovery Agent', 'Real-time Stock Availability Agent'],
        impact: 'Higher conversion and retention',
      },
      {
        role: 'Sales Engagement Assistant',
        agents: ['Lead Qualification Agent', 'Quote Generation Agent', 'Account Intelligence Agent'],
        impact: 'Accelerated deal velocity',
      },
    ],
    summary:
      'Connects front-office customer touchpoints directly with back-office ERP inventory, billing, and fulfillment data for zero-friction customer experiences.',
  },
  {
    id: 11,
    slideNumber: 11,
    domain: 'Unified Commerce',
    title: 'Assistants in Customer Experience — Unified Commerce',
    subtitle: 'Deep-dive into specialized assistants across shopping, merchandising, order management, and loyalty.',
    kpis: [
      '15–20% boost in online cart completion rate',
      '40–60% reduction in catalog attribute enrichment time',
      'Automated fraud and loyalty forensic analysis',
    ],
    assistants: [
      {
        role: 'Shopping Assistant',
        agents: ['Site Personalization Agent', 'B2B Email Order Processing Agent', '“Buy-For-Me” Agent', 'Order Reliability Agent'],
        impact: 'Seamless self-service customer buying',
      },
      {
        role: 'Merchandising Assistant',
        agents: ['Commerce Attribute Generation Agent', 'Catalog Scoring Agent', 'Taxonomy Classification Agent', 'Product Demand Agent'],
        impact: 'Automated product catalog onboarding',
      },
      {
        role: 'Order Management & Loyalty Assistant',
        agents: ['Revenue Reconciliation Agent', 'Financial Guardrail Agent', 'Loyalty Forensic Agent', 'Inventory Allocation Agent'],
        impact: 'Real-time omni-channel fulfillment',
      },
    ],
    summary:
      'Unifies digital commerce with intelligent catalog scoring, automated order reliability tracking, and AI-powered merchandising spend optimization.',
  },
  {
    id: 12,
    slideNumber: 12,
    domain: 'Revenue Growth Management',
    title: 'Assistants in Customer Experience — Revenue Growth Management',
    subtitle: 'Autonomous execution across financial deductions, settlement automation, analytics, and trade planning.',
    kpis: [
      '20–40% decrease in Days Sales Outstanding (DSO)',
      '40–60% faster settlement cycle time',
      '40–60% reduction in analyst time spent on post-event analysis',
      '15–25% reduction in out-of-stocks',
      '30–50% acceleration in planning cycles',
    ],
    assistants: [
      {
        role: 'Financial Execution Assistant',
        agents: ['Deductions Aging & Resolution Agent', 'Non-trade Claim Settlement Agent'],
        impact: '20–40% decrease in DSO',
      },
      {
        role: 'LMD Settlement Assistant',
        agents: ['Settlement Automation Agent', 'Settlement Exception Agent'],
        impact: '40–60% faster settlement cycle time',
      },
      {
        role: 'Channel Execution Assistant',
        agents: ['DSD Visit Creation Agent', 'Predict Performance Agent', 'REX Store Visit & Execution Agent'],
        impact: '15–25% reduction in out-of-stocks',
      },
      {
        role: 'Trade Planning Assistant',
        agents: ['Trade Promotion Planning Agent', 'Negotiation Simulation Agent', 'Trade Spend Optimization Agent'],
        impact: '30–50% acceleration in planning cycles',
      },
    ],
    summary:
      'Empowers consumer goods and retail organizations to optimize trade spend, resolve settlement deductions, and prevent store stock-outs autonomously.',
  },
]

// Slide 13: Industry AI
export const SAMPLE_SLIDE_13_DATA = {
  title: 'SAP Industry AI — Built for What Matters Most',
  subtitle: 'Delivering fully agentic solutions built directly for the processes and compliance rules of specific industry value chains.',
  domains: [
    { name: 'Retail', solution: 'Autonomous Unified Commerce', icon: retailImg },
    { name: 'Consumer Products', solution: 'Autonomous Revenue Growth Mgmt', icon: consumerImg },
    { name: 'Oil, Gas & Energy', solution: 'Autonomous Asset Management', icon: energyImg },
    { name: 'Agribusiness', solution: 'Autonomous Commodity Management', icon: agriImg },
    { name: 'Life Sciences (Biopharma)', solution: 'Autonomous Regulated Manufacturing', icon: retailImg },
    { name: 'Industrial Manufacturing', solution: 'Autonomous Adaptive Production', icon: consumerImg },
    { name: 'Professional Services', solution: 'Autonomous Project Delivery', icon: energyImg },
  ],
  pillars: [
    { title: 'Aligned to E2E Value Chains', desc: 'Leveraging AI for operational, logistical, and compliance realities.' },
    { title: 'Deep Industry Context', desc: 'Embedded sector-specific processes, data schemas, and regulatory logic from day one.' },
    { title: 'Proven at Global Scale', desc: 'Helps organizations of all sizes compete and scale using proven industry best practices.' },
  ],
}

// Slide 14: Industry AI in action - Oil, Gas & Energy
export const SAMPLE_SLIDE_14_DATA = {
  title: 'Industry AI in Action — Autonomous Asset Management',
  subtitle: 'Oil, Gas & Energy: Multi-agent coordination across key operational personas.',
  personas: [
    { role: 'Board VP Ops', focus: 'High-level operational risk oversight, asset uptime KPIs, and capital allocation.' },
    { role: 'Asset Master Data Team', focus: 'Automated asset hierarchy enrichment, taxonomy tagging, and spare parts cataloging.' },
    { role: 'Reliability Engineers', focus: 'Predictive failure mode analysis, sensor telemetry monitoring, and MTBF optimization.' },
    { role: 'Maintenance Planners', focus: 'Automated work order creation, technician scheduling, and parts reservation.' },
    { role: 'Logistics Team', focus: 'Expedited transport dispatch, hazardous material compliance, and inventory movement.' },
    { role: 'Maintenance Technicians', focus: 'Joule mobile assisted diagnostics, augmented repair checklists, and work log closeout.' },
  ],
}

// Slide 15: SAP Business AI Platform
export const SAMPLE_SLIDE_15_DATA = {
  title: 'SAP Business AI Platform — Standardized Structure & Governance',
  subtitle: 'The foundation combining deep process context, unified business data, and specially developed models with enterprise management.',
  architectureImage: platformArchImg,
  pillars: [
    { title: 'Deep Process & Industry Knowledge', desc: 'Encodes 50 years of enterprise process rules and domain semantics.' },
    { title: 'Semantically Rich Business Data', desc: 'Eliminates fragmentation across SAP and non-SAP sources into a coherent fabric.' },
    { title: 'Enterprise-Grade Governance', desc: 'Full auditability, compliance guardrails, and secure lifecycle monitoring.' },
  ],
  layers: [
    { name: 'Build', desc: 'Joule Studio, AI Agent Hub, and Integration Suite to create and orchestrate custom agents.' },
    { name: 'Contextualize & Reason', desc: 'Business Data Cloud, enterprise knowledge graphs, and fine-tuned LLMs.' },
    { name: 'Govern', desc: 'End-to-end security, responsible AI guardrails, and telemetry across all models.' },
  ],
}

// Slide 16: AI That Moves Transformation from Effort to Outcome
export const SAMPLE_SLIDE_16_DATA = {
  title: 'AI That Moves Transformation from Effort to Outcome',
  subtitle: 'Agent-Led Transformation with Migration and Modernization Assistants.',
  effortImage: effortImg,
  challenges: [
    'Transformations historically remain high-effort, high-duration, and high-cost.',
    'Manual friction concentrates heavily in data cleansing, testing, custom code remediation, and configuration.',
  ],
  solutions: [
    'Specialized AI assistants absorb complexity across every stage of the migration lifecycle.',
    'Accelerates smoother, predictable transitions at significantly lower cost and risk.',
    'Bridges on-premises ERP systems to the Autonomous Enterprise seamlessly.',
  ],
}

// Slide 17: Agent-Led Transformation with RISE with SAP
export const SAMPLE_SLIDE_17_DATA = {
  title: 'Agent-Led Transformation with RISE with SAP',
  subtitle: 'Transform with a faster, predictable path from on-premises ERP to the Autonomous Enterprise.',
  riseDiagram: riseSvg,
  pillars: [
    {
      title: 'Remove Complexity & Accelerate Activities',
      desc: 'Migration and modernization assistants automate code remediation, testing, and data staging.',
    },
    {
      title: 'Minimize Risk with Proven Methodology',
      desc: 'SAP Activate roadmaps, Clean Core quality gates, and dedicated onboarding advisors safeguard milestones.',
    },
    {
      title: 'Unlock Agentic AI Faster',
      desc: 'Gain immediate access to Joule, Autonomous Suite capabilities, and continuous cloud updates.',
    },
  ],
}

// Slide 18: Agent-Led Transformation with SAP GROW
export const SAMPLE_SLIDE_18_DATA = {
  title: 'Agent-Led Transformation with SAP GROW',
  subtitle: 'Start lean and scale: Adopt Finance, HR, or Supply Chain at your own pace.',
  growBanner: growBannerImg,
  growLogo: growLogoImg,
  advantages: [
    { title: 'Start Lean, Scale Fast', desc: 'Pre-configured cloud best practices enable rapid deployment in weeks rather than months.' },
    { title: 'Modular Domain Adoption', desc: 'Begin with critical pain points — Finance, Procurement, or HR — and expand seamlessly.' },
    { title: 'Continuous AI Innovation', desc: 'Native Joule and AI agent capabilities embedded out-of-the-box without custom infrastructure.' },
    { title: 'Predictable Cloud Cost', desc: 'Turnkey SaaS packaging with enterprise support, security, and continuous clean core upgrades.' },
  ],
}
