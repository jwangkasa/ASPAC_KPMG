import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import Petals from '../components/Petals'
import japaneseHeroBg from '../assets/hero/japanese_key_programs_hero.jpg'
import '../styles/keyPrograms.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface ProgramDetail {
  id: string
  title: string
  kanji: string
  romaji: string
  tagline: string
  badge: string
  summary: string
  highlights: { title: string; desc: string; icon: string }[]
  metrics: { label: string; value: string }[]
  deepDive: {
    category: string
    details: { heading: string; text: string }[]
    checkpoints: string[]
  }
}

const PROGRAMS_DATA: ProgramDetail[] = [
  {
    id: 'incentive',
    title: '€100M Partner-led AI Adoption Incentive',
    kanji: '実り・金鯉',
    romaji: 'Minori • Harvest & Co-Investment',
    tagline: 'Direct financial acceleration rewarding partner-driven customer AI adoption and consumption velocity.',
    badge: '€100M Global Fund',
    summary: 'A landmark €100M co-investment pool deployed by SAP to directly reward ecosystem partners (like KPMG) who drive verified Business AI adoption, Joule deployment, and AI Unit consumption across enterprise accounts.',
    highlights: [
      {
        icon: '💰',
        title: 'Milestone Adoption Bonuses',
        desc: 'Direct cash incentives earned upon customer deployment milestones, Joule user activations, and live production go-lives.',
      },
      {
        icon: '📈',
        title: 'Consumption Growth Multipliers',
        desc: 'Scaling rebate incentives linked to customer AI Unit utilization, rewarding continuous value delivery and workflow expansion.',
      },
      {
        icon: '🤝',
        title: 'Co-Funded Customer PoVs',
        desc: 'Dedicated investment funds to sponsor high-value agentic proofs-of-value, eliminating customer budget friction.',
      },
    ],
    metrics: [
      { label: 'Total Fund', value: '€100M' },
      { label: 'Model', value: 'Cash Rebates' },
      { label: 'Coverage', value: 'Global FY26' },
    ],
    deepDive: {
      category: 'Incentive Architecture & Qualification Tiers',
      details: [
        {
          heading: 'Tier 1: Adoption Milestone Rebates',
          text: 'Earn direct partner margin bonuses when activating Joule across designated seat tiers or when deploying standard SAP Business AI capabilities.',
        },
        {
          heading: 'Tier 2: Consumption Acceleration Multipliers',
          text: 'Receive tiered quarterly payouts as customer production workloads ramp up their AI Unit consumption across agentic execution services.',
        },
        {
          heading: 'Tier 3: Co-Innovation Pilot Sponsorship',
          text: 'SAP co-funds up to 50% of customer proof-of-concept infrastructure and consulting costs for qualified enterprise agentic use cases.',
        },
        {
          heading: 'KPMG Synergy & Execution Edge',
          text: 'Enables KPMG to package turn-key agentic transformation proposals with zero initial client licensing penalties and maximized joint ROI.',
        },
      ],
      checkpoints: [
        'Verified customer S/4HANA Cloud or BTP production environment',
        'Customer activation of Joule or registered Business AI workload',
        'Milestone documentation approved via SAP Partner Portal',
        'Direct quarterly rebate disbursements via SAP PartnerEdge',
      ],
    },
  },
  {
    id: 'discovery',
    title: 'Partner Discovery Center',
    kanji: '探究・道場',
    romaji: 'Tankyū • Co-Innovation Sanctuary',
    tagline: 'A centralized collaborative proving ground to explore, test, and co-innovate with curated SAP Business AI scenarios.',
    badge: 'Co-Innovation Proving Ground',
    summary: 'The ultimate interactive sandbox and reference repository where partners explore 100+ validated enterprise AI blueprints, build custom Joule skills, and test multi-agent orchestration without infrastructure hurdles.',
    highlights: [
      {
        icon: '🏛️',
        title: '100+ Pre-Packaged AI Missions',
        desc: 'Ready-to-deploy reference architectures for Autonomous Finance, SCM, HCM, Customer Experience, and Industry AI.',
      },
      {
        icon: '⚡',
        title: 'Live Joule Studio Prototyping',
        desc: 'Instant access to sandbox environments with pre-configured SAP AI Core foundations and enterprise model catalogs.',
      },
      {
        icon: '📋',
        title: 'BTP Mission Playbooks',
        desc: 'Step-by-step implementation journeys validated by SAP product engineering for rapid, zero-friction client demonstrations.',
      },
    ],
    metrics: [
      { label: 'Scenarios', value: '100+ Missions' },
      { label: 'Setup Time', value: 'Instant Access' },
      { label: 'Tooling', value: 'Joule Studio' },
    ],
    deepDive: {
      category: 'Proving Ground Capabilities & Sandboxes',
      details: [
        {
          heading: 'Interactive Solution Prototyping',
          text: 'Spin up live sandbox instances containing dummy enterprise business data to test cross-functional agentic workflows before committing to client tenants.',
        },
        {
          heading: 'Curated LLM & Foundation Model Catalogs',
          text: 'Compare model behavior across OpenAI, Anthropic, Google Gemini, and open-source models hosted securely within SAP AI Core infrastructure.',
        },
        {
          heading: 'Guided Implementation Playbooks',
          text: 'Access end-to-end mission guides with pre-written code snippets, CDS views, and API connectors for accelerated delivery.',
        },
        {
          heading: 'Ecosystem Shared Knowledge',
          text: 'Access community best practices, token-frugality benchmarking, and reference architectural patterns vetted across global deployments.',
        },
      ],
      checkpoints: [
        'Available to all registered SAP PartnerEdge ecosystem members',
        'Direct single sign-on access to SAP Discovery Center & BTP Sandboxes',
        'Pre-configured sample datasets for ERP, CRM, and Supply Chain',
        'Full compatibility with Joule Studio design-time and runtime environments',
      ],
    },
  },
  {
    id: 'validate',
    title: 'BAIP Validate Program',
    kanji: '匠心・認証',
    romaji: 'Takumi • Clean Core Certification',
    tagline: 'Official Business AI Platform validation ensuring partner custom agents achieve clean core certification and trust.',
    badge: 'Enterprise Certification',
    summary: 'SAP Business AI Platform (BAIP) official architectural audit and certification framework ensuring partner-built custom AI agents and extensions meet the highest benchmarks for Clean Core adherence, safety, and security.',
    highlights: [
      {
        icon: '🛡️',
        title: 'Clean Core Compliance Guarantee',
        desc: 'Certifies zero ERP core modification and strict decoupling via standard BTP extension points and public APIs.',
      },
      {
        icon: '🔒',
        title: 'Enterprise Security & Safety Audits',
        desc: 'In-depth automated vulnerability scanning, prompt injection defense, data privacy guardrails, and tenant isolation.',
      },
      {
        icon: '🌟',
        title: 'SAP Certified / Endorsed Status',
        desc: 'Validated solutions earn official SAP Certified badges and prioritized placement in the SAP Store & Joule Agent Directory.',
      },
    ],
    metrics: [
      { label: 'Clean Core', value: '100% Verified' },
      { label: 'Certification', value: 'SAP Endorsed' },
      { label: 'Listing', value: 'SAP Store' },
    ],
    deepDive: {
      category: 'Validation Framework & Audit Protocol',
      details: [
        {
          heading: 'Clean Core Architecture Verification',
          text: 'Validates that custom agentic logic resides entirely on SAP BTP and consumes ERP data exclusively via released standard business APIs.',
        },
        {
          heading: 'GenAI Safety & Prompt Injection Guardrails',
          text: 'Passes rigorous adversarial prompt testing and automated red-teaming to ensure zero data leakage and deterministic business execution.',
        },
        {
          heading: 'Marketplace Monetization & Visibility',
          text: 'Earns prime featured placement on SAP Store and within Joule Studio’s official catalog, allowing global customers to license partner agents.',
        },
        {
          heading: 'Continuous Compliance Monitoring',
          text: 'Ongoing telemetry monitoring ensures that agent updates maintain certified standards across subsequent quarterly SAP release waves.',
        },
      ],
      checkpoints: [
        'Submission of solution architecture diagram and BTP service manifest',
        'Automated static code and security vulnerability review',
        'Adversarial GenAI guardrail and data privacy assessment',
        'Awarding of official SAP Certified Partner Solution digital badge',
      ],
    },
  },
]

// Floating Origami Cranes config
const CRANES = [
  { left: '6%', delay: '0s', duration: '18s', size: 36 },
  { left: '22%', delay: '4s', duration: '22s', size: 48 },
  { left: '38%', delay: '8s', duration: '19s', size: 32 },
  { left: '64%', delay: '2s', duration: '24s', size: 54 },
  { left: '82%', delay: '6s', duration: '20s', size: 40 },
  { left: '92%', delay: '11s', duration: '17s', size: 34 },
]

// Hotaru Fireflies / Gold Ember Sparks config
const HOTARU_PARTICLES = [
  { left: '12%', delay: '1s', duration: '12s' },
  { left: '18%', delay: '5s', duration: '15s' },
  { left: '31%', delay: '2.5s', duration: '14s' },
  { left: '48%', delay: '7s', duration: '16s' },
  { left: '56%', delay: '3.5s', duration: '13s' },
  { left: '72%', delay: '6.5s', duration: '17s' },
  { left: '84%', delay: '1.5s', duration: '14s' },
  { left: '94%', delay: '8s', duration: '11s' },
]

export default function SlideKeyPrograms({ onPrev }: Props) {
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetail | null>(null)
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const goToPrev = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/JouleS_Tshirt'
    }
  }

  const goToAgenda = () => {
    window.location.hash = '#/agenda'
  }

  return (
    <div className="kp-container">
      {/* 1. Full-bleed Majestic Japanese Animated Background */}
      <div className="kp-art-stage" aria-hidden="true">
        <img
          src={japaneseHeroBg}
          alt="Majestic pagoda, torii gate, and Mount Fuji with animated sakura petals and glowing golden origami cranes"
          className="kp-bg-img"
        />
        <div className="kp-vignette-top" />
        <div className="kp-vignette-bottom" />
        <div className="kp-ambient-glow-sakura" />
        <div className="kp-ambient-glow-gold" />

        {/* Floating Sakura Petals Canvas */}
        <Petals />

        {/* Animated Floating Origami Cranes (折鶴) */}
        <div className="kp-origami-stream">
          {CRANES.map((crane, idx) => (
            <div
              key={`crane-${idx}`}
              className="kp-crane"
              style={{
                left: crane.left,
                animationDelay: crane.delay,
                animationDuration: crane.duration,
              }}
            >
              <svg
                width={crane.size}
                height={crane.size}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Japanese Origami Crane in Luminous Gold */}
                <polygon points="50,10 75,50 50,45" fill="#fef08a" opacity="0.9" />
                <polygon points="50,10 25,50 50,45" fill="#fde047" opacity="0.8" />
                <polygon points="50,45 75,50 50,90" fill="#f59e0b" opacity="0.85" />
                <polygon points="50,45 25,50 50,90" fill="#d97706" opacity="0.75" />
                <polygon points="75,50 98,25 65,48" fill="#fef08a" opacity="0.95" />
                <polygon points="25,50 2,25 35,48" fill="#fde047" opacity="0.95" />
                <polyline points="50,10 50,90" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
              </svg>
            </div>
          ))}
        </div>

        {/* Floating Hotaru Gold Firefly Particles */}
        {HOTARU_PARTICLES.map((p, idx) => (
          <div
            key={`hotaru-${idx}`}
            className="kp-hotaru-particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="kp-header">
        <div className="kp-title-group">
          <div className="kp-eyebrow">
            <span className="kp-eyebrow-kanji">共創の魂</span>
            <span>• SAP × Partner Co-Innovation Ecosystem • FY2026</span>
          </div>
          <h1 className="kp-main-title">
            Key Programs (2026):{' '}
            <span className="kp-title-highlight">Creativity & Co-Innovation</span>
            <span className="kp-title-japanese-badge">創造性と変革</span>
          </h1>
          <p className="kp-main-subtitle">
            Three cornerstone initiatives empowering partners to accelerate enterprise AI adoption, prototype next-gen agentic workflows, and certify clean-core architectures.
          </p>
        </div>
      </header>

      {/* Main 3-Cards Showcase Stage (Bottom-Aligned with Interactive Shrink/Expand Effect) */}
      <main className="kp-main-showcase" aria-label="Key Programs for 2026">
        {PROGRAMS_DATA.map((prog) => {
          const isCard1 = prog.id === 'incentive'
          const isExpanded = !!expandedCards[prog.id]

          return (
            <article
              key={prog.id}
              className={`kp-program-card card-${prog.id} ${isExpanded ? 'is-expanded' : 'is-shrunk'}`}
              onClick={() => toggleCard(prog.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleCard(prog.id)
                }
              }}
            >
              {/* Card Header: Kanji Seal & Type Badge */}
              <div className="kp-card-topbar">
                <div className="kp-card-kanji-seal">
                  <span className="kp-seal-character">⛩️</span>
                  <span>{prog.kanji}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="kp-card-type-pill">{prog.badge}</span>
                  <span className={`kp-card-chevron ${isExpanded ? 'open' : ''}`} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Card Title & Headline */}
              <div className="kp-card-title-group">
                <h2 className="kp-card-title">{prog.title}</h2>
              </div>

              {/* Collapsible Details (Hidden by Default in Shrink Effect) */}
              <div className="kp-card-details-collapsible">
                <span className="kp-card-japanese-tag">{prog.romaji}</span>
                <p className="kp-card-desc">{prog.tagline}</p>

                {/* Sleek Action Cue */}
                <div
                  className="kp-card-footer-cue"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (isCard1) {
                      window.location.hash = '#/100M_Euro'
                    } else {
                      setSelectedProgram(prog)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.stopPropagation()
                      if (isCard1) {
                        window.location.hash = '#/100M_Euro'
                      } else {
                        setSelectedProgram(prog)
                      }
                    }
                  }}
                >
                  <span>{isCard1 ? 'Explore Program Details' : 'View Blueprint & Scope'}</span>
                  <span className="kp-card-cue-arrow">›</span>
                </div>
              </div>
            </article>
          )
        })}
      </main>

      {/* Footer Navigation */}
      <footer className="kp-footer">
        <button
          type="button"
          className="kp-nav-btn"
          onClick={goToPrev}
          aria-label="Return to Agent T-Shirt Sizing"
        >
          <span>‹</span>
          <span>T-Shirt Sizing</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="kp-nav-btn primary"
          onClick={goToAgenda}
          aria-label="Proceed to Agenda page"
        >
          <span>Agenda</span>
          <span>›</span>
        </button>
      </footer>

      {/* Interactive Lightbox / Deep Dive Modal */}
      {selectedProgram && (
        <div
          className="kp-modal-overlay"
          onClick={() => setSelectedProgram(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="kp-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="kp-modal-header">
              <div className="kp-modal-title-wrap">
                <span className="kp-modal-badge">{selectedProgram.kanji}</span>
                <h3 className="kp-modal-title">{selectedProgram.title}</h3>
              </div>
              <button
                type="button"
                className="kp-modal-close-btn"
                onClick={() => setSelectedProgram(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="kp-modal-body">
              <div>
                <h4 className="kp-modal-section-title">
                  <span>🌸</span>
                  <span>Executive Overview</span>
                </h4>
                <p style={{ color: '#e2e8f0', lineHeight: 1.55, margin: 0, fontSize: '0.94rem' }}>
                  {selectedProgram.summary}
                </p>
              </div>

              <div>
                <h4 className="kp-modal-section-title">
                  <span>🏮</span>
                  <span>{selectedProgram.deepDive.category}</span>
                </h4>
                <div className="kp-modal-details-grid">
                  {selectedProgram.deepDive.details.map((d, dIdx) => (
                    <div key={dIdx} className="kp-modal-detail-box">
                      <h4>{d.heading}</h4>
                      <p>{d.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="kp-modal-section-title">
                  <span>⛩️</span>
                  <span>Implementation & Qualification Milestones</span>
                </h4>
                <div className="kp-modal-checklist">
                  {selectedProgram.deepDive.checkpoints.map((cp, cpIdx) => (
                    <div key={cpIdx} className="kp-modal-check-item">
                      <span className="kp-modal-check-icon">✓</span>
                      <span>{cp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
