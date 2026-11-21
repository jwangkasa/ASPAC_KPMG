import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import aiRapidDiagram from '../assets/ai_rapid_implementation_diagram.png'
import '../styles/aiRapid.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface PhaseDetail {
  id: string
  label: string
  step: string
  tool: string
  action: string
  accelerators?: string[]
}

const PHASES: PhaseDetail[] = [
  {
    id: 'analyze',
    label: 'Analyze (Optional)',
    step: 'Phase 1',
    tool: 'Signavio Process Intelligence',
    action: 'Analyze existing ERP system & processes',
    accelerators: ['Process mining', 'Continuous Innovation feedback loop'],
  },
  {
    id: 'discover',
    label: 'Discover',
    step: 'Phase 2',
    tool: 'Digital Discovery Assessment',
    action: 'Discover Fit of Cloud ERP',
    accelerators: ['Tools to accelerate implementation', 'Fit-to-standard alignment'],
  },
  {
    id: 'prepare',
    label: 'Prepare',
    step: 'Phase 3',
    tool: 'Signavio Process Navigator',
    action: 'Explore Best Practices & activate standards',
    accelerators: ['Standard process flows', 'Parallel line evolutions'],
  },
  {
    id: 'explore',
    label: 'Explore',
    step: 'Phase 4',
    tool: 'Cloud ALM',
    action: 'Manage Cloud ERP Project & execution',
    accelerators: ['Implementation Assistant', 'Agent GL Renumbering'],
  },
  {
    id: 'realize',
    label: 'Realize',
    step: 'Phase 5',
    tool: 'Central Business Configuration',
    action: 'AI Assisted Configuration & agentic error handling',
    accelerators: [
      'Data Migration AI-assisted',
      'Agentic error handling',
      'Joule-driven Business Role creation',
    ],
  },
  {
    id: 'deploy',
    label: 'Deploy',
    step: 'Phase 6',
    tool: 'SAP Agent Hub / Joule Studio',
    action: 'Accelerate AI Adoption & live operation',
    accelerators: [
      'Business Partner Creation with SAP Document AI',
      'Implementation Templates',
      'Continuous Innovation Loop',
    ],
  },
]

export default function SlideAiRapid({ onPrev, onNext, onNavigate }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null)

  const goToSlide8 = () => {
    if (onNavigate) {
      onNavigate(8)
    } else {
      window.location.hash = '#/Agent_Led_(ATC)'
    }
  }

  const goToToolchain = () => {
    window.location.hash = '#/toolchain'
  }

  const goToAgenticTransformation = () => {
    window.location.hash = '#/agentic_led_transformation'
  }

  const activePhaseData = PHASES.find((p) => p.id === selectedPhase)

  return (
    <div className="ai-rapid-container">
      {/* Ambient background glows */}
      <div className="ai-rapid-glow-blue" aria-hidden="true" />
      <div className="ai-rapid-glow-purple" aria-hidden="true" />

      {/* Header */}
      <header className="ai-rapid-header">
        <div className="ai-rapid-title-group">
          <div className="ai-rapid-eyebrow">
            <span>SAP Cloud ERP Implementation • Accelerated Methodology</span>
          </div>
          <h1 className="ai-rapid-title">
            AI assisted rapid, predictable implementation experience
          </h1>
          <p className="ai-rapid-subtitle">
            AI assisted services, tools, and methodologies to help you successfully implement and adopt SAP Cloud ERP quickly and reliably
          </p>
        </div>

        <button
          className="ai-rapid-badge"
          onClick={() => setIsZoomed(true)}
          title="Click to view diagram full-screen"
        >
          <span>✨</span>
          <span>Expand View</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="ai-rapid-main">
        <div
          className="ai-rapid-diagram-card"
          onClick={() => setIsZoomed(true)}
          role="button"
          tabIndex={0}
          title="Click to enlarge diagram"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsZoomed(true)
            }
          }}
        >
          <div className="ai-rapid-stage">
            <img
              src={aiRapidDiagram}
              alt="AI assisted rapid, predictable implementation experience diagram"
              className="ai-rapid-img"
            />
            <div className="ai-rapid-zoom-hint">
              <span>Click diagram to zoom</span>
              <span>⤢</span>
            </div>
          </div>
        </div>

        {/* Phase accelerator navigation pills */}
        <div className="ai-rapid-strip" role="tablist" aria-label="Methodology Phases">
          <button
            className={`ai-rapid-chip ${selectedPhase === null ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedPhase(null)
            }}
          >
            <span>Overview</span>
          </button>

          {PHASES.map((p) => (
            <button
              key={p.id}
              className={`ai-rapid-chip ${selectedPhase === p.id ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhase(selectedPhase === p.id ? null : p.id)
              }}
            >
              <span className="ai-rapid-chip-tag">{p.step}</span>
              <span>{p.label}</span>
            </button>
          ))}
        </div>

        {/* Phase Details Drawer if selected */}
        {activePhaseData && (
          <div className="ai-rapid-detail-bar">
            <div className="ai-rapid-detail-left">
              <span className="ai-rapid-detail-title">
                {activePhaseData.step}: {activePhaseData.label}
              </span>
              <span className="ai-rapid-detail-tool">
                🛠️ {activePhaseData.tool}
              </span>
              <span>• {activePhaseData.action}</span>
              {activePhaseData.accelerators && (
                <div style={{ display: 'inline-flex', gap: '6px' }}>
                  {activePhaseData.accelerators.map((acc, i) => (
                    <span key={i} className="ai-rapid-detail-accel">
                      ⚡ {acc}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                color: '#64748b',
                padding: '2px 6px',
              }}
              onClick={() => setSelectedPhase(null)}
              title="Close detail"
            >
              ✕
            </button>
          </div>
        )}
      </main>

      {/* Footer Navigation */}
      <footer className="ai-rapid-footer">
        <button
          className="ai-rapid-nav-btn"
          onClick={onPrev || goToSlide8}
          aria-label="Return to Slide 8: Transformation"
        >
          ‹ Slide 8: Transformation
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="ai-rapid-nav-btn"
            onClick={goToAgenticTransformation}
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #0040c1 100%)',
              color: '#ffffff',
              borderColor: 'transparent',
            }}
            title="Experience the Agent-led Transformation Journey"
          >
            <span>Agent-led Transformation</span>
            <span aria-hidden="true">🚴</span>
          </button>

          <button
            className="ai-rapid-nav-btn primary"
            onClick={onNext || goToToolchain}
            aria-label="Proceed to Agent-Led Toolchain"
          >
            Agent-Led Toolchain ›
          </button>
        </div>
      </footer>

      {/* Lightbox Zoom Modal */}
      {isZoomed && (
        <div
          className="ai-rapid-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="ai-rapid-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="ai-rapid-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoom preview"
            >
              ✕
            </button>
            <img
              src={aiRapidDiagram}
              alt="AI assisted rapid implementation diagram full resolution"
              className="ai-rapid-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
