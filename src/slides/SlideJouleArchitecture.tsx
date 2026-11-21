import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import archDiagram from '../assets/joule_architecture_diagram.png'
import '../styles/autonomousSuite.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideJouleArchitecture({ onNavigate }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToJoule = () => {
    if (onNavigate) {
      onNavigate(4)
    } else {
      window.location.hash = '#/4'
    }
  }

  const goToSuite = () => {
    if (onNavigate) {
      onNavigate(5)
    } else {
      window.location.hash = '#/Autonomous_Suite'
    }
  }

  return (
    <div className="suite-slide-container">
      {/* Slide Header: Joule Architecture */}
      <header className="suite-header">
        <div className="suite-eyebrow">Deep Dive • Architecture Blueprint</div>
        <h1 className="suite-main-title">Joule Architecture</h1>
        <p className="suite-subtitle">
          End-to-end foundation connecting Joule Work, SAP Autonomous Suite, Platform Agents, Business Data Fabric, Lakehouse, and Connected Ecosystem
        </p>
      </header>

      {/* Main Content: Architecture Diagram */}
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
              src={archDiagram}
              alt="Joule Work, SAP Autonomous Suite, SAP Business AI Platform, and Connected Ecosystem Architecture"
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
          onClick={goToJoule}
          aria-label="Return to Slide 4: Joule"
        >
          ‹ Slide 4: Joule
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="suite-nav-btn primary"
          onClick={goToSuite}
          aria-label="Proceed to Slide 5: Autonomous Suite"
        >
          Slide 5: Autonomous Suite ›
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
              <h3>Joule Architecture & Ecosystem Blueprint</h3>
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
                src={archDiagram}
                alt="Joule Architecture and Business Data Fabric"
                className="suite-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
