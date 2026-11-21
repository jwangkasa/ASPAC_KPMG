import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import industryDiagram from '../assets/industry_ai_diagram.png'
import '../styles/autonomousSuite.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Slide6IndustryAI({ onNext, onNavigate }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToSuite = () => {
    if (onNavigate) {
      onNavigate(5)
    } else {
      window.location.hash = '#/Autonomous_Suite'
    }
  }

  const goToNext = () => {
    if (onNext) {
      onNext()
    } else if (onNavigate) {
      onNavigate(7)
    } else {
      window.location.hash = '#/7'
    }
  }

  return (
    <div className="suite-slide-container">
      {/* Slide Header: Industry AI */}
      <header className="suite-header">
        <div className="suite-eyebrow">Industry Intelligence • Slide 6 of 19</div>
        <h1 className="suite-main-title">Industry AI</h1>
        <p className="suite-subtitle">
          AI that already knows how your industry operates — delivering fully agentic solutions built for what matters most in an industry's value chain
        </p>
      </header>

      {/* Main Content: Industry AI Diagram */}
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
              src={industryDiagram}
              alt="SAP Industry AI - AI that already knows how your industry operates"
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
          onClick={goToSuite}
          aria-label="Return to Autonomous Suite"
        >
          ‹ Slide 5: Autonomous Suite
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="suite-nav-btn primary"
          onClick={goToNext}
          aria-label="Proceed to SAP Business AI Platform"
        >
          SAP Business AI Platform (Slide 7) ›
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
              <h3>SAP Industry AI — Built for What Matters Most</h3>
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
                src={industryDiagram}
                alt="SAP Industry AI - AI that already knows how your industry operates"
                className="suite-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
