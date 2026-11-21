import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import transformationDiagram from '../assets/transformation_effort_outcome_diagram.png'
import '../styles/autonomousSuite.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Slide8Transformation({
  onPrev,
  onNavigate,
}: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToPlatform = () => {
    if (onNavigate) {
      onNavigate(7)
    } else {
      window.location.hash = '#/7'
    }
  }

  const goToRise = () => {
    if (onNavigate) {
      onNavigate(9)
    } else {
      window.location.hash = '#/rise'
    }
  }

  const goToGrow = () => {
    if (onNavigate) {
      onNavigate(10)
    } else {
      window.location.hash = '#/grow'
    }
  }

  const goToAgenticTransformation = () => {
    window.location.hash = '#/agentic_led_transformation'
  }

  const goToAiRapid = () => {
    window.location.hash = '#/ai_rapid'
  }

  return (
    <div className="suite-slide-container">
      {/* Slide Header: Agentic Led Transformation */}
      <header className="suite-header">
        <div className="suite-eyebrow">Strategic Acceleration • Slide 8 of 19</div>
        <h1 className="suite-main-title">Agentic Led Transformation</h1>
        <p className="suite-subtitle">
          AI that moves transformation from effort to outcome — reducing complexity with migration and modernization assistants
        </p>
      </header>

      {/* Main Content: Transformation Effort to Outcome Diagram & Action Buttons */}
      <main className="suite-main-content">
        <div className="suite-diagram-wrapper">
          {/* Main Diagram Card */}
          <div
            className="suite-diagram-card finance-detail-card"
            onClick={() => setIsZoomed(true)}
            role="button"
            tabIndex={0}
            title="Click to view enlarged"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
            }}
          >
            <img
              src={transformationDiagram}
              alt="AI That Moves Transformation from Effort to Outcome"
              className="suite-diagram-img"
            />
            <div className="suite-zoom-badge" aria-hidden="true">
              <span>Click to zoom</span>
              <span>⤢</span>
            </div>
          </div>

          {/* Two prominent action buttons for RISE and GROW */}
          <div className="transformation-actions-bar">
            <button
              className="transformation-card-btn rise"
              onClick={goToRise}
              title="Explore Agent-Led Transformation with RISE with SAP"
            >
              <div className="btn-info">
                <span className="btn-title">RISE with SAP</span>
                <span className="btn-desc">
                  A fast & predictable path from On-premises ERP to the Autonomous Enterprise
                </span>
              </div>
              <span className="btn-arrow-badge">Explore RISE →</span>
            </button>

            <button
              className="transformation-card-btn grow"
              onClick={goToGrow}
              title="Explore Agent-Led Transformation with SAP GROW"
            >
              <div className="btn-info">
                <span className="btn-title">SAP GROW</span>
                <span className="btn-desc">
                  Start lean & scale with commercially defined packages and partner ecosystem
                </span>
              </div>
              <span className="btn-arrow-badge">Explore GROW →</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="suite-footer">
        <button
          className="suite-nav-btn"
          onClick={onPrev || goToPlatform}
          aria-label="Return to Slide 7: Business AI Platform"
        >
          ‹ Slide 7: Business AI Platform
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="suite-nav-btn"
            onClick={goToAiRapid}
            style={{
              background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
              color: '#ffffff',
              borderColor: 'transparent',
              boxShadow: '0 2px 8px rgba(2, 132, 199, 0.35)',
            }}
            title="Explore AI assisted rapid, predictable implementation experience"
          >
            <span>AI Rapid Implementation</span>
            <span aria-hidden="true">⚡</span>
          </button>

          <button
            className="suite-nav-btn"
            onClick={goToAgenticTransformation}
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #0040c1 100%)',
              color: '#ffffff',
              borderColor: 'transparent',
            }}
            title="Experience the Agent-led Transformation Journey with animated cyclist"
          >
            <span>Agent-led Transformation</span>
            <span aria-hidden="true">🚴</span>
          </button>

          <button
            className="suite-nav-btn primary"
            onClick={goToRise}
            aria-label="Proceed to RISE with SAP"
          >
            RISE with SAP (Slide 9) ›
          </button>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {isZoomed && (
        <div
          className="suite-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="suite-modal-content wide" onClick={(e) => e.stopPropagation()}>
            <div className="suite-modal-header">
              <h3>Agentic Led Transformation — Effort to Outcome</h3>
              <button
                className="suite-modal-close"
                onClick={() => setIsZoomed(false)}
                aria-label="Close Preview"
              >
                ✕
              </button>
            </div>
            <div className="suite-modal-body">
              <img
                src={transformationDiagram}
                alt="AI That Moves Transformation from Effort to Outcome"
                className="suite-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
