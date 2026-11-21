import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import atcDiagram from '../assets/atc_assistants_diagram.png'
import '../styles/atcAssistants.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface AssistantInfo {
  name: string
  phase: string
  role: string
}

const ASSISTANTS: AssistantInfo[] = [
  {
    name: 'System Analysis Assistant',
    phase: 'Discover & Prepare',
    role: 'Analyzes existing landscape, telemetry, and usage footprint — serving as the foundational input for all other assistants.',
  },
  {
    name: 'Data Management Assistant',
    phase: 'Prepare & Explore',
    role: 'Provides continuous monitoring and automated improvement of migration data quality, cleansing, and schema mapping.',
  },
  {
    name: 'Custom Code Assistant',
    phase: 'Explore & Realize',
    role: 'Enforces clean-core strategy by remediating legacy ABAP and generating modern SAP BTP cloud-compliant extensions.',
  },
  {
    name: 'Configuration Assistant',
    phase: 'Explore & Realize',
    role: 'Automates baseline system configuration, tenant setup, and industry best-practice localization parameters.',
  },
  {
    name: 'Test Management Assistant',
    phase: 'Realize & Deploy',
    role: 'Generates automated end-to-end test suites, synthetic test data, and manages risk-based regression validation.',
  },
  {
    name: 'Rollout Assistant',
    phase: 'Deploy & Run',
    role: 'Orchestrates cutover sequencing, deployment gates, user readiness validation, and seamless go-live transition.',
  },
  {
    name: 'Project Management Assistant',
    phase: 'Across All Phases (Discover to Run)',
    role: 'Foundation orchestrator spanning all migration phases — tracks milestones, risks, team velocity, and deliverables.',
  },
  {
    name: 'Joule & Cloud ALM',
    phase: 'Continuous Exchange Layer',
    role: 'Central engagement layer providing AI-driven assistance for consultants and developers through SAP Cloud ALM orchestration.',
  },
]

export default function SlideAtcAssistants({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [selectedAssistant, setSelectedAssistant] = useState<AssistantInfo | null>(null)

  const goToToolchain = () => {
    window.location.hash = '#/toolchain'
  }

  const goToAgents = () => {
    window.location.hash = '#/atc_agents'
  }

  const goToAgenticTransformation = () => {
    window.location.hash = '#/agentic_led_transformation'
  }

  return (
    <div className="atc-container">
      <div className="atc-glow-purple" aria-hidden="true" />
      <div className="atc-glow-blue" aria-hidden="true" />

      {/* Header */}
      <header className="atc-header">
        <div className="atc-title-group">
          <h1 className="atc-title">Assistants supporting ongoing modernization</h1>
          <p className="atc-subtitle">
            Central engagement layer and orchestration through Joule across the RISE with SAP lifecycle
          </p>
        </div>

        <div
          className="atc-sparkle-badge"
          onClick={() => setIsZoomed(true)}
          title="Click to zoom modernization assistants diagram"
          aria-label="Zoom assistants diagram"
          role="button"
          tabIndex={0}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.85 }}>
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
        </div>
      </header>

      {/* Main Diagram Card */}
      <main className="atc-main">
        <div
          className="atc-diagram-card"
          onClick={() => setIsZoomed(true)}
          title="Click to expand diagram in high resolution"
          role="button"
          tabIndex={0}
        >
          <img
            src={atcDiagram}
            alt="Assistants supporting ongoing modernization architecture diagram from Discover to Continuously Innovate"
            className="atc-img"
          />
          <span className="atc-zoom-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            Click to Enlarge
          </span>
        </div>

        {/* Interactive Assistant Strip */}
        <div className="atc-interactive-strip" aria-label="Interactive Assistants">
          {ASSISTANTS.map((asst, idx) => (
            <button
              key={idx}
              className={`atc-chip ${selectedAssistant?.name === asst.name ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedAssistant(selectedAssistant?.name === asst.name ? null : asst)
              }}
              title={`${asst.name} (${asst.phase})`}
            >
              <span>{asst.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Assistant Details Bar */}
        {selectedAssistant && (
          <div
            style={{
              marginTop: '10px',
              padding: '8px 18px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)',
              fontSize: '13px',
              color: '#1e293b',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '880px',
              animation: 'modalFadeIn 0.2s ease-out',
            }}
          >
            <strong style={{ color: '#6d28d9', whiteSpace: 'nowrap' }}>
              {selectedAssistant.name} ({selectedAssistant.phase}):
            </strong>
            <span>{selectedAssistant.role}</span>
          </div>
        )}
      </main>

      {/* Footer Navigation */}
      <footer className="atc-footer">
        <button
          className="atc-nav-btn"
          onClick={onPrev || goToToolchain}
          aria-label="Return to Agent-led Toolchain"
        >
          <span>‹</span>
          <span>Agent-led Toolchain</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="atc-nav-btn"
            onClick={goToAgenticTransformation}
            aria-label="Return to Agentic-Led Transformation"
          >
            <span>Agentic-Led Transformation</span>
          </button>

          <button
            className="atc-nav-btn primary"
            onClick={onNext || goToAgents}
            aria-label="Proceed to Assistant Break-down into Agents"
          >
            <span>ATC Agents</span>
            <span>›</span>
          </button>
        </div>
      </footer>

      {/* High-Resolution Lightbox Modal */}
      {isZoomed && (
        <div
          className="atc-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="atc-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="atc-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close enlarged diagram"
            >
              ✕
            </button>
            <img
              src={atcDiagram}
              alt="Enlarged Assistants supporting ongoing modernization diagram"
              className="atc-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
