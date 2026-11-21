import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import riseDiagram from '../assets/rise_with_sap_diagram.png'
import '../styles/autonomousSuite.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideRiseDetail({
  onPrev,
  onNavigate,
}: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToTransformation = () => {
    if (onNavigate) {
      onNavigate(8)
    } else {
      window.location.hash = '#/Agent_Led_(ATC)'
    }
  }

  const goToToolchain = () => {
    window.location.hash = '#/toolchain'
  }

  const goToGrow = () => {
    if (onNavigate) {
      onNavigate(10)
    } else {
      window.location.hash = '#/grow'
    }
  }

  const goToMigrationRoi = () => {
    window.location.hash = '#/Migration_ROI'
  }

  return (
    <div className="suite-slide-container">
      {/* Slide Header: RISE with SAP */}
      <header className="suite-header">
        <div className="suite-eyebrow">Transformation Path • Slide 9 of 19</div>
        <h1 className="suite-main-title">RISE with SAP</h1>
        <p className="suite-subtitle">
          Agent-led transformation with RISE with SAP — A fast and predictable path to the Autonomous Enterprise
        </p>
      </header>

      {/* Main Content */}
      <main className="suite-main-content">
        <div className="suite-diagram-wrapper">
          {/* Top Switcher Bar */}
          <div className="suite-domains-bar">
            <span className="suite-bar-label">Program:</span>
            <button className="suite-domain-pill active" title="Currently on RISE with SAP">
              <span className="domain-pulse-dot" />
              <span>RISE with SAP</span>
            </button>
            <button
              className="suite-domain-pill"
              onClick={goToGrow}
              title="Switch to SAP GROW"
            >
              <span>SAP GROW</span>
              <span className="domain-arrow">→</span>
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
              src={riseDiagram}
              alt="Agent-led transformation with RISE with SAP - A fast and predictable path"
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
          onClick={onPrev || goToToolchain}
          aria-label="Return to Agent-Led Toolchain"
        >
          ‹ Agent-Led Toolchain
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="suite-nav-btn primary"
          onClick={goToMigrationRoi}
          aria-label="Proceed to Migration Efforts"
        >
          Migration Efforts ›
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
              <h3>Agent-led transformation with RISE with SAP</h3>
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
                src={riseDiagram}
                alt="Agent-led transformation with RISE with SAP"
                className="suite-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
