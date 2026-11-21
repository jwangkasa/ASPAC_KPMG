import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import aiServicesImage from '../assets/sap_ai_services_models.png'
import '../styles/aiServices.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideAiServices({ onPrev, onNavigate }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToPlatform = () => {
    if (onNavigate) {
      onNavigate(7)
    } else {
      window.location.hash = '#/7'
    }
  }

  const goToAiCore = () => {
    window.location.hash = '#/sap_ai_core'
  }


  return (
    <div className="ai-services-container">
      {/* Subtle ambient glows */}
      <div className="ai-services-glow-blue" aria-hidden="true" />
      <div className="ai-services-glow-purple" aria-hidden="true" />

      {/* Slim Header */}
      <header className="ai-services-header">
        <div className="ai-services-title-group">
          <div className="ai-services-eyebrow">
            <span>Enterprise AI • Services & Models</span>
          </div>
          <h2 className="ai-services-header-title">
            SAP AI Services & Models
          </h2>
        </div>

        <div className="ai-services-header-actions">
          <button
            className="ai-services-action-badge"
            onClick={goToAiCore}
            title="Explore SAP AI Core details"
          >
            <span>SAP AI Core</span>
            <span aria-hidden="true">⚡</span>
          </button>
          <button
            className="ai-services-action-badge primary"
            onClick={() => setIsZoomed(true)}
            title="Expand to Fullscreen View"
          >
            <span>✨ Expand View</span>
          </button>
        </div>
      </header>

      {/* Full Page Image Stage */}
      <main className="ai-services-main">
        <div
          className="ai-services-stage-card"
          onClick={() => setIsZoomed(true)}
          role="button"
          tabIndex={0}
          title="Click to view high-resolution zoom"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
          }}
        >
          <img
            src={aiServicesImage}
            alt="SAP AI Services and Models: Explore, orchestrate, productize AI; Automate document based processes; Run AI workloads on databases"
            className="ai-services-full-img"
          />
          <div className="ai-services-zoom-badge">
            <span>Click diagram to zoom</span>
            <span>⤢</span>
          </div>
        </div>
      </main>

      {/* Slim Footer */}
      <footer className="ai-services-footer">
        <button
          className="ai-services-nav-btn"
          onClick={onPrev || goToPlatform}
          aria-label="Return to Slide 7: Business AI Platform"
        >
          ‹ Slide 7: Business AI Platform
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="ai-services-nav-btn primary"
            onClick={goToAiCore}
            aria-label="Proceed to SAP AI Core"
            title="Explore SAP AI Core (AI Runtime, Tabular AI, Generative AI)"
          >
            <span>SAP AI Core</span>
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </footer>

      {/* Lightbox Zoom Modal */}
      {isZoomed && (
        <div
          className="ai-services-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="ai-services-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="ai-services-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoom preview"
            >
              ✕
            </button>
            <img
              src={aiServicesImage}
              alt="SAP AI Services and Models full resolution"
              className="ai-services-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
