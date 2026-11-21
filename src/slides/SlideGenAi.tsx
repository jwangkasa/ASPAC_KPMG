import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import genAiDiagram from '../assets/generative_ai_sap_ai_core.png'
import '../styles/genAi.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideGenAi({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToAiCore = () => {
    window.location.hash = '#/sap_ai_core'
  }

  const goToTabularAi = () => {
    window.location.hash = '#/tabular_ai'
  }

  const goToBdcAi = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/BDC_AI'
    }
  }

  return (
    <div className="genai-container">
      {/* Ambient background glows */}
      <div className="genai-glow-purple" aria-hidden="true" />
      <div className="genai-glow-blue" aria-hidden="true" />

      {/* Header */}
      <header className="genai-header">
        <div className="genai-title-group">
          <div className="genai-eyebrow">
            <span>SAP AI Core • Generative AI Architecture</span>
          </div>
          <h1 className="genai-title">Generative AI</h1>
          <p className="genai-subtitle">
            Powerful models. Business context. Enterprise control. Delivering trusted GenAI experiences that are useful, grounded, safe, and measurable.
          </p>
        </div>

        <div className="genai-header-actions">
          <button
            className="genai-badge-btn"
            onClick={goToAiCore}
            title="Return to SAP AI Core"
          >
            <span>‹ SAP AI Core</span>
          </button>
          <button
            className="genai-badge-btn primary"
            onClick={() => setIsZoomed(true)}
            title="Expand Diagram to Full Screen"
          >
            <span>✨ Expand Diagram</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="genai-main">
        {/* Diagram Card */}
        <div
          className="genai-diagram-card"
          onClick={() => setIsZoomed(true)}
          role="button"
          tabIndex={0}
          title="Click to zoom into diagram"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
          }}
        >
          <div className="genai-stage">
            <img
              src={genAiDiagram}
              alt="Generative AI: Powerful models, Business context, Enterprise control on SAP AI Core"
              className="genai-img"
            />
            <div className="genai-zoom-badge">
              <span>Click diagram to zoom</span>
              <span>⤢</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars Deep Dive below Diagram */}
        <div className="genai-pillars-row">
          <div className="genai-pillar-card models">
            <div className="genai-pillar-header">
              <span className="genai-pillar-tag">Pillar 1</span>
              <h3 className="genai-pillar-title">Models & Capabilities</h3>
            </div>
            <p className="genai-pillar-desc">
              Choose the right intelligence for the task across specialized modalities.
            </p>
            <div className="genai-chips-row">
              <span className="genai-chip">Text</span>
              <span className="genai-chip">Reasoning</span>
              <span className="genai-chip">Image</span>
              <span className="genai-chip">Code</span>
              <span className="genai-chip">Voice</span>
            </div>
          </div>

          <div className="genai-pillar-card context">
            <div className="genai-pillar-header">
              <span className="genai-pillar-tag">Pillar 2</span>
              <h3 className="genai-pillar-title">Business Context</h3>
            </div>
            <p className="genai-pillar-desc">
              Ground every response in what matters with enterprise data integration.
            </p>
            <div className="genai-chips-row">
              <span className="genai-chip">RAG</span>
              <span className="genai-chip">Re-ranking</span>
              <span className="genai-chip">Harmonization</span>
              <span className="genai-chip">Optimization</span>
            </div>
          </div>

          <div className="genai-pillar-card control">
            <div className="genai-pillar-header">
              <span className="genai-pillar-tag">Pillar 3</span>
              <h3 className="genai-pillar-title">Enterprise Control</h3>
            </div>
            <p className="genai-pillar-desc">
              Operate Generative AI with confidence, compliance, and end-to-end security.
            </p>
            <div className="genai-chips-row">
              <span className="genai-chip">Guardrails</span>
              <span className="genai-chip">Privacy</span>
              <span className="genai-chip">Reliability</span>
              <span className="genai-chip">Evaluation</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="genai-footer">
        <button
          className="genai-nav-btn"
          onClick={onPrev || goToTabularAi}
          aria-label="Return to Tabular AI"
        >
          ‹ Tabular AI
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="genai-nav-btn primary"
            onClick={goToBdcAi}
            aria-label="Proceed to SAP BDC Data Products in SAP AI Core"
          >
            <span>BDC AI (Data Products)</span>
            <span>›</span>
          </button>
        </div>
      </footer>

      {/* Lightbox Zoom Modal */}
      {isZoomed && (
        <div
          className="genai-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="genai-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="genai-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoom preview"
            >
              ✕
            </button>
            <img
              src={genAiDiagram}
              alt="Generative AI on SAP AI Core diagram full resolution"
              className="genai-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
