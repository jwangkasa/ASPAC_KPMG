import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import growDiagram from '../assets/grow_with_sap_diagram.png'
import '../styles/autonomousSuite.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideGrowDetail({
  onPrev,
  onNext,
  onNavigate,
}: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToAgents = () => {
    window.location.hash = '#/atc_agents'
  }

  const goToCommercial = () => {
    window.location.hash = '#/commercial'
  }

  const goToRise = () => {
    if (onNavigate) {
      onNavigate(9)
    } else {
      window.location.hash = '#/rise'
    }
  }

  const goToTransformation = () => {
    if (onNavigate) {
      onNavigate(8)
    } else {
      window.location.hash = '#/Agent_Led_(ATC)'
    }
  }

  const goToNext = () => {
    if (onNext) {
      onNext()
    } else {
      goToCommercial()
    }
  }

  return (
    <div className="suite-slide-container">
      {/* Slide Header: SAP GROW */}
      <header className="suite-header">
        <div className="suite-eyebrow">Transformation Path • Slide 10 of 19</div>
        <h1 className="suite-main-title">SAP GROW</h1>
        <p className="suite-subtitle">
          Agent-led transformation with SAP Grow — Start lean and scale with commercially defined packages and partner ecosystem
        </p>
      </header>

      {/* Main Content */}
      <main className="suite-main-content">
        <div className="suite-diagram-wrapper">
          {/* Top Switcher Bar */}
          <div className="suite-domains-bar">
            <span className="suite-bar-label">Program:</span>
            <button
              className="suite-domain-pill"
              onClick={goToRise}
              title="Switch to RISE with SAP"
            >
              <span>RISE with SAP</span>
              <span className="domain-arrow">→</span>
            </button>
            <button className="suite-domain-pill active" title="Currently on SAP GROW">
              <span className="domain-pulse-dot" />
              <span>SAP GROW</span>
            </button>
            <button
              className="suite-return-hub-btn"
              onClick={goToTransformation}
              title="Return to Transformation Overview (Slide 8)"
            >
              <span>‹ Overview</span>
            </button>
          </div>

          {/* Diagram Card */}
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
              src={growDiagram}
              alt="Agent-led transformation with SAP Grow - Start lean and scale"
              className="suite-diagram-img"
            />
            <div className="suite-zoom-badge" aria-hidden="true">
              <span>Click to zoom</span>
              <span>⤢</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="suite-footer">
        <button
          className="suite-nav-btn"
          onClick={onPrev || goToAgents}
          aria-label="Return to ATC Agents"
        >
          ‹ ATC Agents
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="suite-nav-btn primary"
          onClick={goToNext}
          aria-label="Proceed to Commercial"
        >
          Cracking the Commercial ›
        </button>
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
              <h3>Agent-led transformation with SAP Grow</h3>
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
                src={growDiagram}
                alt="Agent-led transformation with SAP Grow"
                className="suite-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
