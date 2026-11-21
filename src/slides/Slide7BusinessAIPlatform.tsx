import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import platformDiagram from '../assets/business_ai_platform_diagram.png'
import '../styles/autonomousSuite.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Slide7BusinessAIPlatform({
  onPrev,
  onNavigate,
}: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToIndustryAI = () => {
    if (onNavigate) {
      onNavigate(6)
    } else {
      window.location.hash = '#/6'
    }
  }

  const goToAiServices = () => {
    window.location.hash = '#/ai_services'
  }

  const goToGovernance = () => {
    window.location.hash = '#/AI_Agent_Hub'
  }


  return (
    <div className="suite-slide-container">
      {/* Slide Header: SAP Business AI Platform */}
      <header className="suite-header">
        <div className="suite-eyebrow">Enterprise Foundation • Slide 7 of 19</div>
        <h1 className="suite-main-title">SAP Business AI Platform</h1>
        <p className="suite-subtitle">
          Standardized structure, control and operation — combining deep process context, unified business data, and specially developed models with corporate management
        </p>
      </header>

      {/* Main Content: Business AI Platform Architecture Diagram */}
      <main className="suite-main-content">
        <div className="suite-diagram-wrapper">
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
              src={platformDiagram}
              alt="SAP Business AI Platform: Standardized structure, control and operation"
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
          onClick={onPrev || goToIndustryAI}
          aria-label="Return to Slide 6: Industry AI"
        >
          ‹ Slide 6: Industry AI
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="suite-nav-btn"
            onClick={goToGovernance}
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
              color: '#ffffff',
              borderColor: 'transparent',
              boxShadow: '0 2px 8px rgba(124, 58, 237, 0.35)',
            }}
            title="Explore AI Agent Hub & Governance"
          >
            <span>Governance</span>
            <span aria-hidden="true">🛡️</span>
          </button>

          <button
            className="suite-nav-btn primary"
            onClick={goToAiServices}
            aria-label="Proceed to SAP AI Services"
            title="Explore SAP AI Services & Models"
          >
            <span>SAP AI Services</span>
            <span aria-hidden="true">›</span>
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
              <h3>SAP Business AI Platform — Architecture & Governance</h3>
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
                src={platformDiagram}
                alt="SAP Business AI Platform: Standardized structure, control and operation"
                className="suite-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
