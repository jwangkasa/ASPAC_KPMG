import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import '../styles/migrationRoi.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface DriverItem {
  id: string
  title: string
  icon: string
  effortSaved: string
  assistant: string
  details: string[]
  description: string
}

const DRIVERS: DriverItem[] = [
  {
    id: 'data-quality',
    title: 'Data Quality',
    icon: '🗄️',
    effortSaved: '25%',
    assistant: 'Data Management Assistant',
    details: ['Data cleansing & deduplication', 'Schema harmonization', 'Readiness audit'],
    description: 'Automates data extraction, validation, enrichment, and schema reconciliation before loading into modern cloud ERP.',
  },
  {
    id: 'code-transformation',
    title: 'Code Transformation',
    icon: '💻',
    effortSaved: '40%',
    assistant: 'Custom Code Assistant',
    details: ['Clean Core ABAP refactoring', 'Automated cloud adaptation', 'Obsolete code retirement'],
    description: 'Scans legacy ABAP codebases, refactors syntax to cloud-ready APIs, and accelerates custom code decoupling by 40%.',
  },
  {
    id: 'configuration',
    title: 'Configuration',
    icon: '⚙️',
    effortSaved: '20%',
    assistant: 'Configuration Assistant',
    details: ['Automated baseline setup', 'Industry best-practice scoping', 'Localization rules'],
    description: 'Leverages AI to pre-populate industry configuration templates and validate company code parameter sets.',
  },
  {
    id: 'testing',
    title: 'Testing',
    icon: '🧪',
    effortSaved: '35%',
    assistant: 'Test Management Assistant',
    details: ['Autonomous test script generation', 'Risk-based regression', 'Synthetic test data'],
    description: 'Generates end-to-end regression suites and synthetic test records, shrinking validation cycles by up to 35%.',
  },
  {
    id: 'roll-out',
    title: 'Roll-out',
    icon: '🚀',
    effortSaved: '35%',
    assistant: 'Rollout Assistant',
    details: ['Cutover plan automation', 'Readiness gating', 'Zero-downtime execution'],
    description: 'Optimizes cutover runbooks, sequences parallel cutover tasks, and monitors user change adoption velocity.',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    icon: '📊',
    effortSaved: '25%',
    assistant: 'Project Management Assistant',
    details: ['Predictive risk tracking', 'Milestone velocity analytics', 'Automated status reporting'],
    description: 'Continuously correlates delivery signals across ALM and Jira to predict bottlenecks and recommend corrective actions.',
  },
]

export default function SlideMigrationRoi({ onPrev }: Props) {
  const [showAssistantsModal, setShowAssistantsModal] = useState(false)
  const [activeDriver, setActiveDriver] = useState<DriverItem | null>(null)

  const goToToolchain = () => {
    window.location.hash = '#/toolchain'
  }

  const goToAssistants = () => {
    window.location.hash = '#/atc_assistants'
  }

  const goToRise = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/rise'
    }
  }

  return (
    <div className="mroi-container">
      {/* Sparkle decorative element */}
      <div className="mroi-sparkle-topright" aria-hidden="true">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="url(#sparkleGrad)"
          />
          <defs>
            <linearGradient id="sparkleGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Header Section */}
      <header className="mroi-header">
        <div className="mroi-title-group">
          <div className="mroi-eyebrow">
            <span>Agent-led Transformation • Modernization Value Acceleration</span>
          </div>
          <h1 className="mroi-main-title">
            Migration effort is driven by <span className="mroi-title-accent">six complexity drivers</span>
          </h1>
          <p className="mroi-main-subtitle">
            Quantified effort reduction across critical migration workstreams powered by SAP Business AI and Modernization Assistants.
          </p>
        </div>

        {/* Header Action Buttons (Including Agentic Tool Chains button) */}
        <div className="mroi-header-actions">
          <button
            type="button"
            className="mroi-btn-rise"
            onClick={goToToolchain}
            title="Navigate to Agentic Tool Chains: #/toolchain"
          >
            <span>⚡ Agentic Tool Chains</span>
            <span>›</span>
          </button>

          <button
            type="button"
            className="mroi-btn-assistants"
            onClick={() => setShowAssistantsModal(true)}
            title="View 7 Assistants Details"
          >
            <span>✨ 7 Assistants</span>
          </button>
        </div>
      </header>

      {/* Main Complexity Drivers Frame Stage */}
      <main className="mroi-showcase-stage" aria-label="Complexity Drivers & Effort Savings">
        <div className="mroi-drivers-frame">
          {/* Overhead Bracket Label */}
          <div className="mroi-frame-label-wrapper">
            <span className="mroi-frame-label">Complexity drivers</span>
          </div>

          {/* 6 Columns Grid */}
          <div className="mroi-columns-grid">
            {DRIVERS.map((item) => (
              <div
                key={item.id}
                className="mroi-driver-card"
                onClick={() => setActiveDriver(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveDriver(item)
                  }
                }}
                title={`Click to view details for ${item.title}`}
              >
                <div className="mroi-card-header">
                  <span className="mroi-card-icon">{item.icon}</span>
                  <h3 className="mroi-card-title">{item.title}</h3>
                </div>

                <div className="mroi-card-metric-box">
                  <span className="mroi-metric-pct">{item.effortSaved}</span>
                </div>

                <div className="mroi-card-details">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="mroi-detail-tag">
                      <span className="mroi-detail-dot" />
                      <span>{detail}</span>
                    </div>
                  ))}
                  <div className="mroi-assistant-badge" title={item.assistant}>
                    {item.assistant}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal "Efforts saved*" Strip Connecting All 6 Columns */}
          <div className="mroi-savings-strip-overlay">
            <div className="mroi-strip-label">
              <span className="mroi-strip-dot" />
              <span>Efforts saved*</span>
            </div>
            <div className="mroi-strip-avg">
              <span>Average Workstream Reduction:</span>
              <span className="mroi-strip-highlight">~30% Average Savings</span>
            </div>
          </div>

          {/* Bottom Spanning Banner: 7 Migration & Modernization Assistants */}
          <div
            className="mroi-assistants-banner"
            onClick={goToAssistants}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                goToAssistants()
              }
            }}
            title="Click to explore the 7 Migration & Modernization Assistants"
          >
            <div className="mroi-banner-left">
              <span className="mroi-banner-num-7">7</span>
              <div className="mroi-banner-title-block">
                <h2 className="mroi-banner-title">
                  <span>Migration & Modernization Assistants</span>
                  <span className="mroi-banner-sparkle">✦</span>
                </h2>
                <p className="mroi-banner-sub">
                  End-to-end automated assistants orchestrating system analysis, custom code remediation, testing, and cutover.
                </p>
              </div>
            </div>

            <div className="mroi-banner-right-action">
              <span className="mroi-banner-cue-btn">
                <span>Explore Assistants</span>
                <span>›</span>
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footnote & Navigation Footer */}
      <div className="mroi-footer-wrap">
        <p className="mroi-footnote">
          *Effort reduction within the activities addressed by AI cases (e.g. 35% effort savings in test automation refers to all testing activities)
        </p>

        <footer className="mroi-footer">
          <button
            type="button"
            className="mroi-nav-btn"
            onClick={onPrev || goToRise}
            aria-label="Return to RISE with SAP"
          >
            <span>‹</span>
            <span>RISE with SAP</span>
          </button>

          <BrandLockup variant="footer" theme="light" />

          {/* Button: Agentic Tool Chains -> http://localhost:5173/#/toolchain */}
          <button
            type="button"
            className="mroi-nav-btn primary"
            onClick={goToToolchain}
            aria-label="Navigate to Agentic Tool Chains"
          >
            <span>Agentic Tool Chains</span>
            <span>›</span>
          </button>
        </footer>
      </div>

      {/* 7 Assistants Modal Breakdown */}
      {showAssistantsModal && (
        <div
          className="mroi-modal-overlay"
          onClick={() => setShowAssistantsModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="mroi-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="mroi-modal-header">
              <h3 className="mroi-modal-title">7 Migration & Modernization Assistants</h3>
              <button
                type="button"
                className="mroi-modal-close"
                onClick={() => setShowAssistantsModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="mroi-modal-body">
              <div className="mroi-modal-grid">
                <div className="mroi-modal-card">
                  <h4>1. System Analysis Assistant</h4>
                  <p>Analyzes legacy ECC footprint, transaction utilization, and clean core deviation to guide discovery.</p>
                </div>
                <div className="mroi-modal-card">
                  <h4>2. Data Management Assistant</h4>
                  <p>Resolves data quality bottlenecks, drives schema harmonization, and automates migration pre-checks (25% saved).</p>
                </div>
                <div className="mroi-modal-card">
                  <h4>3. Custom Code Assistant</h4>
                  <p>Remediates ABAP custom objects, enforces Clean Core principles, and generates BTP cloud extensions (40% saved).</p>
                </div>
                <div className="mroi-modal-card">
                  <h4>4. Configuration Assistant</h4>
                  <p>Pre-populates baseline business settings and validates company-code localized configurations (20% saved).</p>
                </div>
                <div className="mroi-modal-card">
                  <h4>5. Test Management Assistant</h4>
                  <p>Autonomous test script generation and continuous regression validation across integrated systems (35% saved).</p>
                </div>
                <div className="mroi-modal-card">
                  <h4>6. Rollout Assistant</h4>
                  <p>Automates cutover tasks, sequences deployment gates, and guarantees business continuity (35% saved).</p>
                </div>
                <div className="mroi-modal-card" style={{ gridColumn: 'span 2' }}>
                  <h4>7. Project Management Assistant</h4>
                  <p>Spans all migration phases: tracks delivery velocity, predicts project risks, and streamlines reporting (25% saved).</p>
                </div>
              </div>
            </div>
            <div className="mroi-modal-footer">
              <button
                type="button"
                className="mroi-nav-btn primary"
                onClick={() => {
                  setShowAssistantsModal(false)
                  goToToolchain()
                }}
              >
                <span>Open RISE Toolchain ›</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Driver Detail Modal */}
      {activeDriver && (
        <div
          className="mroi-modal-overlay"
          onClick={() => setActiveDriver(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="mroi-modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="mroi-modal-header">
              <h3 className="mroi-modal-title">
                {activeDriver.icon} {activeDriver.title} ({activeDriver.effortSaved} Effort Saved)
              </h3>
              <button
                type="button"
                className="mroi-modal-close"
                onClick={() => setActiveDriver(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="mroi-modal-body">
              <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.5, margin: 0 }}>
                {activeDriver.description}
              </p>
              <div style={{ marginTop: '0.75rem', padding: '0.85rem', background: '#eff6ff', borderRadius: '10px', border: '1px solid #bfdbfe' }}>
                <strong style={{ color: '#1e40af', fontSize: '0.88rem', display: 'block', marginBottom: '0.35rem' }}>
                  Powered by {activeDriver.assistant}
                </strong>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#1e3a8a', fontSize: '0.82rem' }}>
                  {activeDriver.details.map((d, i) => (
                    <li key={i} style={{ marginBottom: '0.2rem' }}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mroi-modal-footer">
              <button
                type="button"
                className="mroi-nav-btn"
                onClick={() => setActiveDriver(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="mroi-nav-btn primary"
                onClick={() => {
                  setActiveDriver(null)
                  goToToolchain()
                }}
              >
                <span>Agentic Tool Chains ›</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
