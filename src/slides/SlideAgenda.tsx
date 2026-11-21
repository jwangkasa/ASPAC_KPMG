import BrandLockup from '../components/BrandLockup'
import Petals from '../components/Petals'
import japaneseBg from '../assets/hero/japanese_agenda_bg.jpg'
import '../styles/agenda.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface AgendaSection {
  num: string
  title: string
  icon: string
  startHash: string
  slideCount: number
  summary: string
  highlights: string[]
}

const AGENDA_SECTIONS: AgendaSection[] = [
  {
    num: '01',
    title: 'Autonomous Enterprise',
    icon: '🏛️',
    startHash: 'reality',
    slideCount: 5,
    summary: 'Bridging the Agentic Gap to build an adaptive, self-optimizing enterprise ecosystem.',
    highlights: ['AI Reality Foundation', 'Agentic Gap & 2027 Vision', 'Architecture Overview'],
  },
  {
    num: '02',
    title: 'Joule',
    icon: '⚡',
    startHash: '4',
    slideCount: 4,
    summary: 'The conversational interface and intelligent work experience across SAP business processes.',
    highlights: ['Joule Work Experience', 'Joule Architecture', 'SAP Managed Joule (SMJ)'],
  },
  {
    num: '03',
    title: 'Autonomous Suite',
    icon: '🏢',
    startHash: 'Autonomous_Suite',
    slideCount: 6,
    summary: 'Domain-specific autonomous intelligence deployed across core enterprise business functions.',
    highlights: ['Finance & Spend Management', 'Supply Chain (SCM)', 'HCM & Customer Experience (CX)'],
  },
  {
    num: '04',
    title: 'Industry AI',
    icon: '🌐',
    startHash: '6',
    slideCount: 1,
    summary: 'Tailored, regulatory-compliant AI models embedded directly into vertical business operations.',
    highlights: ['Vertical-Specific Models', 'Industry Compliance Guardrails', 'Pre-built Process Best Practices'],
  },
  {
    num: '05',
    title: 'Business AI Platform',
    icon: '🧠',
    startHash: '7',
    slideCount: 9,
    summary: 'The enterprise AI foundation powering model orchestration, governance, and data products.',
    highlights: ['SAP AI Core & AI Agent Hub', 'Tabular AI & SAP-RPT Models', 'GenAI Hub & Business Data Cloud'],
  },
  {
    num: '06',
    title: 'Agent-led Transformation',
    icon: '🚀',
    startHash: 'agentic_led_transformation',
    slideCount: 9,
    summary: 'Accelerating Clean Core ERP modernizations with automated AI assistants and proven pathways.',
    highlights: ['Agent-Led Toolchain & ATC', '7 Modernization Assistants', 'RISE & GROW with SAP Details'],
  },
  {
    num: '07',
    title: 'Commercial',
    icon: '💴',
    startHash: 'commercial',
    slideCount: 16,
    summary: 'Commercial structures, AI Unit consumption economics, and Joule Studio runtime pricing.',
    highlights: ['Joule Base vs. Premium AI', 'Pricing Models & Transition', 'Joule Studio Runtime Economics'],
  },
  {
    num: '08',
    title: 'Key Programs (2026)',
    icon: '🏮',
    startHash: 'Key_Programs',
    slideCount: 2,
    summary: 'Strategic co-innovation, partner ecosystem incentives, and enterprise enablement funds.',
    highlights: ['Partner Ecosystem Programs', '€100M AI Adoption Incentive', 'Joint Execution Frameworks'],
  },
  {
    num: '09',
    title: 'Solidifying the AI Journey',
    icon: '⛩️',
    startHash: 'Solidify_AI',
    slideCount: 1,
    summary: 'Executive alignment, recommended sales plays, and go-to-market realization strategies.',
    highlights: ['Recommended Sales Play', 'Go-To-Market (GTM) Strategy', 'Enterprise Value Realization'],
  },
]

export default function SlideAgenda({ onPrev, onNext, onNavigate }: Props) {
  const returnToWelcome = () => {
    if (onNavigate) {
      onNavigate(1)
    } else {
      window.location.hash = '#/1'
    }
  }

  const goToReality = () => {
    window.location.hash = '#/reality'
  }

  const handleSelectSection = (hash: string) => {
    window.location.hash = `#/${hash}`
  }

  return (
    <div className="agenda-slide">
      {/* Background Art with Kyoto Pavilion Twilight & Drifting Sakura Petals */}
      <div className="agenda-bg-art" aria-hidden="true">
        <img className="agenda-bg-image" src={japaneseBg} alt="" />
        <div className="agenda-bg-overlay" />
        <Petals />
      </div>

      {/* Header */}
      <header className="agenda-header">
        <div className="agenda-eyebrow">
          <span>ASPAC SAP Leadership Summit 2026</span>
          <span className="agenda-kanji">• アジェンダ</span>
        </div>
        <h1 className="agenda-title">Agenda</h1>
        <p className="agenda-subtitle">
          Executive presentation roadmap structured across 9 core strategic sections
        </p>
      </header>

      {/* Main Sections Grid (3x3) */}
      <main className="agenda-main">
        <div className="agenda-sections-grid">
          {AGENDA_SECTIONS.map((section) => (
            <div
              key={section.num}
              className="agenda-section-card"
              onClick={() => handleSelectSection(section.startHash)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleSelectSection(section.startHash)
              }}
              title={`Jump to ${section.title} (#/${section.startHash})`}
            >
              <div className="agenda-card-top">
                <div className="agenda-card-badges">
                  <span className="agenda-section-pill">Section {section.num}</span>
                  <span className="agenda-slide-count">{section.slideCount} {section.slideCount === 1 ? 'slide' : 'slides'}</span>
                </div>
                <span className="agenda-section-icon" aria-hidden="true">{section.icon}</span>
              </div>

              <h2 className="agenda-section-title">{section.title}</h2>
              <p className="agenda-section-summary">{section.summary}</p>

              <div className="agenda-highlights-list">
                {section.highlights.map((item, hIdx) => (
                  <span key={hIdx} className="agenda-highlight-tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="agenda-card-footer">
                <span className="agenda-hash-tag">#/{section.startHash}</span>
                <span className="agenda-explore-btn">
                  <span>Explore</span>
                  <span className="agenda-arrow">›</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="agenda-footer-nav">
        <button
          className="agenda-nav-btn"
          onClick={onPrev || returnToWelcome}
          aria-label="Return to Welcome slide"
        >
          ‹ Welcome
        </button>

        <BrandLockup variant="footer" theme="dark" />

        <button
          className="agenda-nav-btn primary"
          onClick={onNext || goToReality}
          aria-label="Proceed to Section 01: Autonomous Enterprise"
        >
          <span>Start: Autonomous Enterprise</span>
          <span className="nav-arrow">›</span>
        </button>
      </footer>
    </div>
  )
}
