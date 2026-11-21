import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import tabularAiDiagram from '../assets/tabular_ai_intelligent_payment_matching.png'
import '../styles/tabularAi.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideTabularAi({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToAiCore = () => {
    window.location.hash = '#/sap_ai_core'
  }

  const goToRptScenario = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/rpt_scenario'
    }
  }

  const goToGenAi = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/GenAI'
    }
  }

  return (
    <div className="tabular-ai-container">
      {/* Ambient background glows */}
      <div className="tabular-ai-glow-blue" aria-hidden="true" />
      <div className="tabular-ai-glow-purple" aria-hidden="true" />

      {/* Header */}
      <header className="tabular-ai-header">
        <div className="tabular-ai-title-group">
          <div className="tabular-ai-eyebrow">
            <span>SAP AI Core • Tabular AI Architecture</span>
          </div>
          <h1 className="tabular-ai-title">
            Intelligent payment matching today
          </h1>
          <p className="tabular-ai-subtitle">
            How Tabular AI replaces daily manual payment reconciliation with continuous end-to-end learning, auditable recommendations, and predictive payment clearing.
          </p>
        </div>

        <div className="tabular-ai-header-actions">
          <button
            className="tabular-ai-badge-btn"
            onClick={goToRptScenario}
            title="Return to SAP Scenarios with SAP-RPT"
          >
            <span>‹ SAP-RPT Scenarios</span>
          </button>
          <button
            className="tabular-ai-badge-btn"
            onClick={goToAiCore}
            title="Return to SAP AI Core"
          >
            <span>SAP AI Core</span>
          </button>
          <button
            className="tabular-ai-badge-btn primary"
            onClick={() => setIsZoomed(true)}
            title="Expand Diagram to Full Screen"
          >
            <span>✨ Expand Diagram</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="tabular-ai-main">
        {/* Main Diagram Card */}
        <div
          className="tabular-ai-diagram-card"
          onClick={() => setIsZoomed(true)}
          role="button"
          tabIndex={0}
          title="Click to zoom into diagram"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
          }}
        >
          <div className="tabular-ai-stage">
            <img
              src={tabularAiDiagram}
              alt="Intelligent payment matching today: Challenge, Action, Outcome, Tabular AI workflow"
              className="tabular-ai-img"
            />
            <div className="tabular-ai-zoom-badge">
              <span>Click diagram to zoom</span>
              <span>⤢</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Deep Dives below Diagram */}
        <div className="tabular-ai-caps-row">
          <div className="tabular-ai-cap-card">
            <div className="tabular-ai-cap-icon">📊</div>
            <div>
              <h3 className="tabular-ai-cap-title">Evaluates Structured Data</h3>
              <p className="tabular-ai-cap-desc">
                Preserves relational data integrity, dimensional context, and table relationships across ERP ledgers.
              </p>
            </div>
          </div>

          <div className="tabular-ai-cap-card">
            <div className="tabular-ai-cap-icon">🏷️</div>
            <div>
              <h3 className="tabular-ai-cap-title">Classifies Invoices</h3>
              <p className="tabular-ai-cap-desc">
                Automatically maps incoming payment lines against open invoices, credits, and dispute records.
              </p>
            </div>
          </div>

          <div className="tabular-ai-cap-card">
            <div className="tabular-ai-cap-icon">🔮</div>
            <div>
              <h3 className="tabular-ai-cap-title">Predicts Payments</h3>
              <p className="tabular-ai-cap-desc">
                Applies machine learning over historical clearing behavior to predict matches with confidence scores.
              </p>
            </div>
          </div>

          <div className="tabular-ai-cap-card">
            <div className="tabular-ai-cap-icon">💡</div>
            <div>
              <h3 className="tabular-ai-cap-title">Explains Results</h3>
              <p className="tabular-ai-cap-desc">
                Transparent Explainable AI (XAI) detailing rule weighting, match criteria, and audit trails.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="tabular-ai-footer">
        <button
          className="tabular-ai-nav-btn"
          onClick={onPrev || goToRptScenario}
          aria-label="Return to SAP Scenarios with SAP-RPT"
        >
          ‹ SAP-RPT Scenarios
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="tabular-ai-nav-btn primary"
          onClick={goToGenAi}
          aria-label="Proceed to Generative AI"
        >
          Generative AI (GenAI) ›
        </button>
      </footer>

      {/* Lightbox Zoom Modal */}
      {isZoomed && (
        <div
          className="tabular-ai-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="tabular-ai-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tabular-ai-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoom preview"
            >
              ✕
            </button>
            <img
              src={tabularAiDiagram}
              alt="Intelligent payment matching today diagram full resolution"
              className="tabular-ai-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
