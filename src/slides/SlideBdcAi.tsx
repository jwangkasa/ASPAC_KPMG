import { useEffect, useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import bdcAiDiagram from '../assets/bdc_ai_data_products.png'
import '../styles/bdcAi.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideBdcAi({ onPrev }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Listen for Escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isVideoPlaying) setIsVideoPlaying(false)
        if (isZoomed) setIsZoomed(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVideoPlaying, isZoomed])

  const goToGenAi = () => {
    window.location.hash = '#/GenAI'
  }

  const goToAiAgentHub = () => {
    window.location.hash = '#/AI_Agent_Hub'
  }

  return (
    <div className="bdc-ai-container">
      {/* Ambient background glows */}
      <div className="bdc-ai-glow-blue" aria-hidden="true" />
      <div className="bdc-ai-glow-indigo" aria-hidden="true" />

      {/* Header */}
      <header className="bdc-ai-header">
        <div className="bdc-ai-title-group">
          <div className="bdc-ai-eyebrow">
            <span>SAP Business Data Cloud • Data Products in SAP AI Core</span>
          </div>
          <h1 className="bdc-ai-title">
            SAP BDC Data Products in SAP AI Core
          </h1>
          <p className="bdc-ai-subtitle">
            Eliminating data replication — making business data natively available for machine learning training, tabular predictions, and inference pipelines.
          </p>
        </div>

        <div className="bdc-ai-header-actions">
          <button
            className="bdc-ai-badge-btn"
            onClick={goToGenAi}
            title="Return to Generative AI"
          >
            <span>‹ Generative AI</span>
          </button>
          <button
            className="bdc-ai-badge-btn primary"
            onClick={() => setIsZoomed(true)}
            title="Expand Diagram to Full Screen"
          >
            <span>✨ Expand Diagram</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="bdc-ai-main">
        {/* Diagram Card */}
        <div
          className="bdc-ai-diagram-card"
          onClick={() => setIsZoomed(true)}
          role="button"
          tabIndex={0}
          title="Click to zoom into diagram"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
          }}
        >
          <div className="bdc-ai-stage">
            <img
              src={bdcAiDiagram}
              alt="SAP BDC Data Products in SAP AI Core: Challenge, Action, Outcome, Formations"
              className="bdc-ai-img"
            />
            <div className="bdc-ai-zoom-badge">
              <span>Click diagram to zoom</span>
              <span>⤢</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Deep Dives below Diagram */}
        <div className="bdc-ai-caps-row">
          <div className="bdc-ai-cap-card">
            <div className="bdc-ai-cap-icon">📦</div>
            <div>
              <h3 className="bdc-ai-cap-title">Data Product Catalog</h3>
              <p className="bdc-ai-cap-desc">
                Publishes standardized business data packages directly from S/4HANA without ETL replication.
              </p>
            </div>
          </div>

          <div className="bdc-ai-cap-card">
            <div className="bdc-ai-cap-icon">🔒</div>
            <div>
              <h3 className="bdc-ai-cap-title">Access Control & Governance</h3>
              <p className="bdc-ai-cap-desc">
                Enforces granular access rights, data classification, and enterprise governance at the source.
              </p>
            </div>
          </div>

          <div className="bdc-ai-cap-card">
            <div className="bdc-ai-cap-icon">📑</div>
            <div>
              <h3 className="bdc-ai-cap-title">Tabular Context Registry</h3>
              <p className="bdc-ai-cap-desc">
                Organizes tables and schema relationships as reusable artifacts for predictive context selection.
              </p>
            </div>
          </div>

          <div className="bdc-ai-cap-card">
            <div className="bdc-ai-cap-icon">⚡</div>
            <div>
              <h3 className="bdc-ai-cap-title">Tabular Orchestration</h3>
              <p className="bdc-ai-cap-desc">
                Direct integration with SAP AI Core Formations for zero-copy training and real-time inference.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation with small Video button on right bottom */}
      <footer className="bdc-ai-footer">
        <button
          className="bdc-ai-nav-btn"
          onClick={onPrev || goToGenAi}
          aria-label="Return to Generative AI"
        >
          ‹ Generative AI (GenAI)
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Small Video Button on Right Bottom */}
          <button
            className="bdc-ai-video-btn"
            onClick={() => setIsVideoPlaying(true)}
            title="Play BDC Data Products Demo Video"
            aria-label="Play Video"
          >
            <span className="bdc-ai-video-pulse" aria-hidden="true" />
            <span>Video</span>
            <span aria-hidden="true">▶</span>
          </button>

          <button
            className="bdc-ai-nav-btn primary"
            onClick={goToAiAgentHub}
            aria-label="Proceed to AI Agent Hub"
          >
            AI Agent Hub ›
          </button>
        </div>
      </footer>

      {/* Lightbox Zoom Modal */}
      {isZoomed && (
        <div
          className="bdc-ai-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bdc-ai-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="bdc-ai-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoom preview"
            >
              ✕
            </button>
            <img
              src={bdcAiDiagram}
              alt="SAP BDC Data Products in SAP AI Core diagram full resolution"
              className="bdc-ai-modal-img"
            />
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {isVideoPlaying && (
        <div
          className="bdc-ai-video-modal-overlay"
          onClick={() => setIsVideoPlaying(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bdc-ai-video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bdc-ai-video-modal-header">
              <div className="bdc-ai-video-modal-title">
                <span className="bdc-ai-video-badge">SAP BDC Demo</span>
                <h3>SAP Business Data Cloud & Data Products in Action</h3>
              </div>
              <button
                className="bdc-ai-video-close-btn"
                onClick={() => setIsVideoPlaying(false)}
                aria-label="Close Video Player"
              >
                ✕
              </button>
            </div>
            <div className="bdc-ai-video-player-wrapper">
              <video
                src="/videos/bdc_dp_demo.mp4"
                controls
                autoPlay
                playsInline
                className="bdc-ai-video-element"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
