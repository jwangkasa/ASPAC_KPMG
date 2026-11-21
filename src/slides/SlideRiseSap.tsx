import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import riseSapDiagram from '../assets/rise_sap_transformation_diagram.png'
import '../styles/riseSap.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideRiseSap({ onPrev, onNext, onNavigate }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const returnToHub = () => {
    if (onNavigate) onNavigate(3)
    else window.location.hash = '#/architecture_overview'
  }

  const goToPrev = () => {
    window.location.hash = '#/Key_Programs'
  }

  const goToNext = () => {
    if (onNavigate) onNavigate(17)
    else window.location.hash = '#/GROW_SAP'
  }

  const goToOverview = () => {
    if (onNavigate) onNavigate(2)
    else window.location.hash = '#/2'
  }

  return (
    <div className="rise-sap-container">
      <div className="rise-sap-glow-purple" aria-hidden="true" />
      <div className="rise-sap-glow-blue" aria-hidden="true" />

      {/* Slide Header */}
      <header className="rise-sap-header">
        <div className="rise-sap-header-left">
          <div className="rise-sap-eyebrow">A fast and predictable path</div>
          <h1 className="rise-sap-title">Agent-led transformation in RISE with SAP</h1>
          <p className="rise-sap-subtitle">
            A fast and predictable journey from on-premises ERP to an Autonomous Enterprise
          </p>
        </div>

        <div className="rise-sap-header-actions">
          <button className="rise-sap-hub-btn" onClick={returnToHub} title="Return to Slide 3 Hub">
            <span>← Hub (Slide 3)</span>
          </button>
        </div>
      </header>

      {/* Main Diagram & Key Pillars */}
      <main className="rise-sap-main">
        <div
          className="rise-sap-diagram-card"
          onClick={() => setIsZoomed(true)}
          title="Click to view enlarged diagram"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
          }}
        >
          <img
            src={riseSapDiagram}
            alt="Agent-led transformation in RISE with SAP: On-premises ERP to Agent-led transformation, Fast path to agentic AI, and Autonomous Enterprise"
            className="rise-sap-img"
          />
          <span className="rise-sap-zoom-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            Click to Enlarge
          </span>
        </div>

        {/* 3 Value Pillars */}
        <div className="rise-sap-pillars-row">
          <div className="rise-sap-pillar-card">
            <div className="rise-sap-pillar-icon">⚡</div>
            <div className="rise-sap-pillar-text">
              <strong>Remove complexity and accelerate</strong> time-intensive activities with migration and modernization assistants
            </div>
          </div>

          <div className="rise-sap-pillar-card">
            <div className="rise-sap-pillar-icon">🛡️</div>
            <div className="rise-sap-pillar-text">
              <strong>Minimize risks</strong> with a proven methodology, expert guidance, and value-driven transformation
            </div>
          </div>

          <div className="rise-sap-pillar-card">
            <div className="rise-sap-pillar-icon">💎</div>
            <div className="rise-sap-pillar-text">
              <strong>Unlock agentic AI</strong> faster across the enterprise to becoming an Autonomous Enterprise
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="rise-sap-footer">
        <button
          className="rise-sap-nav-btn"
          onClick={onPrev || goToPrev}
          aria-label="Return to Key Programs (2026)"
        >
          <span>‹</span>
          <span>Key Programs (2026)</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="rise-sap-nav-btn"
            onClick={goToOverview}
            aria-label="Return to Overview"
          >
            <span>Overview</span>
          </button>

          <button
            className="rise-sap-nav-btn primary"
            onClick={onNext || goToNext}
            aria-label="Proceed to GROW with SAP"
          >
            <span>GROW with SAP (Slide 17)</span>
            <span>›</span>
          </button>
        </div>
      </footer>

      {/* High-Resolution Modal */}
      {isZoomed && (
        <div
          className="rise-sap-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="rise-sap-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="rise-sap-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close enlarged diagram"
            >
              ✕
            </button>
            <img
              src={riseSapDiagram}
              alt="Agent-led transformation in RISE with SAP full resolution"
              className="rise-sap-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
