import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import growSapDiagram from '../assets/grow_sap_transformation_diagram.png'
import '../styles/growSap.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideGrowSap({ onPrev, onNext, onNavigate }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const returnToHub = () => {
    if (onNavigate) onNavigate(3)
    else window.location.hash = '#/architecture_overview'
  }

  const goToRise = () => {
    if (onNavigate) onNavigate(16)
    else window.location.hash = '#/RISE_SAP'
  }

  const goToNext = () => {
    if (onNavigate) onNavigate(18)
    else window.location.hash = '#/18'
  }

  const goToOverview = () => {
    if (onNavigate) onNavigate(2)
    else window.location.hash = '#/2'
  }

  return (
    <div className="grow-sap-container">
      <div className="grow-sap-glow-emerald" aria-hidden="true" />
      <div className="grow-sap-glow-purple" aria-hidden="true" />

      {/* Slide Header */}
      <header className="grow-sap-header">
        <div className="grow-sap-header-left">
          <div className="grow-sap-eyebrow">Start lean and scale</div>
          <h1 className="grow-sap-title">Agent-led transformation in GROW with SAP</h1>
          <p className="grow-sap-subtitle">
            Start with core business domains and scale with commercially defined packages into an Autonomous Enterprise
          </p>
        </div>

        <div className="grow-sap-header-actions">
          <button className="grow-sap-hub-btn" onClick={returnToHub} title="Return to Slide 3 Hub">
            <span>← Hub (Slide 3)</span>
          </button>
        </div>
      </header>

      {/* Main Diagram & Key Pillars */}
      <main className="grow-sap-main">
        <div
          className="grow-sap-diagram-card"
          onClick={() => setIsZoomed(true)}
          title="Click to view enlarged diagram"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
          }}
        >
          <img
            src={growSapDiagram}
            alt="Agent-led transformation in GROW with SAP: Start lean and scale, Commercially defined packages, Go-live in weeks, Autonomous Enterprise"
            className="grow-sap-img"
          />
          <span className="grow-sap-zoom-hint">
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
        <div className="grow-sap-pillars-row">
          <div className="grow-sap-pillar-card">
            <div className="grow-sap-pillar-icon">🌱</div>
            <div className="grow-sap-pillar-text">
              <strong>Start with what you need:</strong> Activate Finance, HR, or Supply Chain first and expand autonomously at your own pace
            </div>
          </div>

          <div className="grow-sap-pillar-card">
            <div className="grow-sap-pillar-icon">📦</div>
            <div className="grow-sap-pillar-text">
              <strong>Commercially defined packages:</strong> Fixed scope, pre-configured best practices, and complete cost &amp; timeline predictability
            </div>
          </div>

          <div className="grow-sap-pillar-card">
            <div className="grow-sap-pillar-icon">🚀</div>
            <div className="grow-sap-pillar-text">
              <strong>Go-Live in Weeks:</strong> Accelerated deployment with Certified SAP Partners, unlocking Joule and domain agents rapidly
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="grow-sap-footer">
        <button
          className="grow-sap-nav-btn"
          onClick={onPrev || goToRise}
          aria-label="Return to RISE with SAP (Slide 16)"
        >
          <span>‹</span>
          <span>RISE with SAP (Slide 16)</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="grow-sap-nav-btn"
            onClick={goToOverview}
            aria-label="Return to Overview"
          >
            <span>Overview</span>
          </button>

          <button
            className="grow-sap-nav-btn primary"
            onClick={onNext || goToNext}
            aria-label="Proceed to Obstacles (Slide 18)"
          >
            <span>Agentic Obstacles (Slide 18)</span>
            <span>›</span>
          </button>
        </div>
      </footer>

      {/* High-Resolution Modal */}
      {isZoomed && (
        <div
          className="grow-sap-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="grow-sap-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="grow-sap-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close enlarged diagram"
            >
              ✕
            </button>
            <img
              src={growSapDiagram}
              alt="Agent-led transformation in GROW with SAP full resolution"
              className="grow-sap-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
