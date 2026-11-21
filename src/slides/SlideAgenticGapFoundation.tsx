import BrandLockup from '../components/BrandLockup'
import '../styles/agenticGapFoundation.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface ColumnCard {
  stat: string
  colorKey: 'blue' | 'purple' | 'amber' | 'coral'
  title: string
  lead: string
  sub: string
  icon: React.ReactNode
}

const CARDS: ColumnCard[] = [
  {
    stat: '<10%',
    colorKey: 'blue',
    title: 'Data and Integration',
    lead: 'Agents must work inside messy systems of record, not clean sandboxes.',
    sub: '<10% have scaled to real value (McKinsey)',
    // Sourced Data / Database cylinder stack icon
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    stat: '<18%',
    colorKey: 'purple',
    title: 'Identity & Governance',
    lead: 'IAM was built for humans, not autonomous agents.',
    sub: 'Only 18% trust their systems to manage agent identity.',
    // Security Shield with checkmark icon
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    stat: '$500M AI bill',
    colorKey: 'amber',
    title: 'ROI & Cost',
    lead: '"Experimenting" no longer satisfies the board.',
    sub: '~10% see measurable agentic ROI today (Deloitte). Measure cost per completed process.',
    // ROI & Cost Dollar/Growth Chart icon
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    stat: '89%',
    colorKey: 'coral',
    title: 'Reliability at Scale',
    lead: 'Small error rates compound across thousands of unsupervised runs.',
    sub: '89% of scaling failures are operational, not technical.',
    // Reliability at Scale / Network pulse activity icon
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export default function SlideAgenticGapFoundation({ onPrev, onNext }: Props) {
  const goToVision = () => {
    window.location.hash = '#/vision'
  }

  const goToReality = () => {
    window.location.hash = '#/reality'
  }

  return (
    <div className="agentic-gap-container">
      {/* Slide Header */}
      <header className="agentic-gap-header">
        <h1 className="agentic-gap-title">
          The gap in Agentic AI isn’t the models — it’s the foundation
        </h1>
      </header>

      {/* 4 Cards Grid - Numbers inside the box with custom colors and icons */}
      <main className="agentic-gap-grid">
        {CARDS.map((card, idx) => (
          <div key={idx} className={`agentic-inner-card theme-${card.colorKey}`}>
            {/* Header group: Stat number and title row with icon placed at top */}
            <div className="agentic-card-header-group">
              <div className={`agentic-card-stat color-${card.colorKey}`}>
                {card.stat}
              </div>

              <div className="agentic-card-title-row">
                <span
                  className={`agentic-card-icon-badge color-${card.colorKey}`}
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
                <h2 className="agentic-card-title">{card.title}</h2>
              </div>
            </div>

            {/* Card wording body - placed cleanly below the words without large spacer gap */}
            <div className="agentic-card-body-box">
              <p className="agentic-card-lead">{card.lead}</p>
              <p className="agentic-card-sub">{card.sub}</p>
            </div>
          </div>
        ))}
      </main>

      {/* Footer Navigation */}
      <footer className="agentic-footer">
        <button
          className="agentic-nav-btn"
          onClick={onPrev || goToReality}
          aria-label="Return to AI Reality and Gaps"
        >
          ‹ AI Reality &amp; Gaps
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="agentic-nav-btn primary"
          onClick={onNext || goToVision}
          aria-label="Proceed to SAP Autonomous Enterprise Vision"
        >
          <span>Autonomous Enterprise Vision</span>
          <span>›</span>
        </button>
      </footer>
    </div>
  )
}
