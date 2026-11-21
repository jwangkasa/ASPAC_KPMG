import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSlideSpec from '../assets/start_grow_with_sap_ai.png'
import '../styles/startGrowAi.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideStartGrowAi({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToCommercial = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/commercial'
    }
  }

  const goToJouleBase = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/joule_base'
    }
  }

  const goToPremiumAi = () => {
    window.location.hash = '#/Premium_AI'
  }

  return (
    <div className="sg-container">
      {/* Ambient background glows */}
      <div className="sg-ambient-glow-left" aria-hidden="true" />
      <div className="sg-ambient-glow-right" aria-hidden="true" />

      {/* Header */}
      <header className="sg-header">
        <div className="sg-title-group">
          <div className="sg-eyebrow">
            <span>SAP Commercial Strategy • AI Value Realization Journey</span>
          </div>
          <h1 className="sg-main-title">How customers start and grow with SAP Business AI</h1>
          <p className="sg-main-subtitle">
            A three-tier progression framework from included baseline intelligence to metered multi-agent systems and custom enterprise extensions
          </p>
        </div>

        <div className="sg-header-actions">
          <div className="sg-badge-pill">
            <span>Commercial Horizon 2026</span>
          </div>
          <button
            type="button"
            className="sg-badge-btn"
            onClick={() => setIsZoomed(true)}
            title="View original specification visual"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Stepper Roadmap Line */}
      <div className="sg-stepper-bar" aria-label="Adoption progression stages">
        <div className="sg-stepper-track" aria-hidden="true" />
        <div className="sg-stepper-node active-1">
          <span className="sg-stepper-dot" />
          <span>Stage 01: Foundational Entitlement</span>
        </div>
        <div className="sg-stepper-node active-2">
          <span className="sg-stepper-dot" />
          <span>Stage 02: Execution & Orchestration</span>
        </div>
        <div className="sg-stepper-node active-3">
          <span className="sg-stepper-dot" />
          <span>Stage 03: Enterprise Differentiation</span>
        </div>
      </div>

      {/* Main 3-Column Progression Grid */}
      <main className="sg-main">
        <div className="sg-grid">
          {/* ================= STAGE 1 ================= */}
          <section className="sg-card card-stage-1" aria-label="Stage 1: Start with Base AI">
            <div className="sg-card-top">
              <div className="sg-card-number-row">
                <span className="sg-stage-num">1</span>
                <div className="sg-icon-badge" aria-hidden="true">
                  {/* Joule Sparkle / Core Entitlement Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
                      fill="#9333ea"
                    />
                    <circle cx="12" cy="12" r="2" fill="#ffffff" />
                  </svg>
                </div>
              </div>

              <h2 className="sg-card-title">Start with Base AI</h2>
              <p className="sg-card-lead">
                Customers begin with AI included in their cloud subscriptions.
              </p>
            </div>

            <ul className="sg-card-features">
              <li>
                <span className="sg-bullet-bullet" />
                <span><strong>No additional purchase required:</strong> Standard capability bundled natively with existing SAP cloud subscriptions.</span>
              </li>
              <li>
                <span className="sg-bullet-bullet" />
                <span><strong>Foundational table-stakes functionality:</strong> Core conversational assistance and generative summaries.</span>
              </li>
              <li>
                <span className="sg-bullet-bullet" />
                <span><strong>Everyday employee enablement:</strong> Joule embedded across SuccessFactors, S/4HANA, Ariba & CX.</span>
              </li>
            </ul>

            <div className="sg-card-bottom">
              <div className="sg-commercial-pill">
                <span>Entitlement Model</span>
                <strong>Zero AI Units Required</strong>
              </div>
              <button
                type="button"
                className="sg-stage1-link-btn"
                onClick={goToJouleBase}
                title="Deep dive into Base AI architecture and entitlement scope"
              >
                <span>Explore Base AI (Joule Base)</span>
                <span>›</span>
              </button>
            </div>
          </section>

          {/* ================= STAGE 2 ================= */}
          <section className="sg-card card-stage-2" aria-label="Stage 2: Scale with premium AI">
            <div className="sg-card-top">
              <div className="sg-card-number-row">
                <span className="sg-stage-num">2</span>
                <div className="sg-icon-badge" aria-hidden="true">
                  {/* Multi-Agent Orchestration & Mesh Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="7" width="14" height="12" rx="4" stroke="#7c3aed" strokeWidth="2" />
                    <circle cx="9" cy="12" r="1.5" fill="#7c3aed" />
                    <circle cx="15" cy="12" r="1.5" fill="#7c3aed" />
                    <path d="M12 3V7" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="3" r="1.5" fill="#a855f7" />
                    <path d="M9 16H15" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <h2 className="sg-card-title">Scale with premium AI</h2>
              <p className="sg-card-lead">
                As needs grow, customers adopt advanced, execution-driven AI.
              </p>
            </div>

            <ul className="sg-card-features">
              <li>
                <span className="sg-bullet-bullet" />
                <span><strong>Agents & agentic orchestration:</strong> Autonomous LoB domain agents executing multi-step cross-functional workflows.</span>
              </li>
              <li>
                <span className="sg-bullet-bullet" />
                <span><strong>High-value AI services:</strong> Document ground-truth extraction, tabular anomaly detection, and predictive matching.</span>
              </li>
              <li>
                <span className="sg-bullet-bullet" />
                <span><strong>End-to-end automation:</strong> System-of-record writeback with automated exception handling and human-in-the-loop control.</span>
              </li>
            </ul>

            <div className="sg-card-bottom">
              <div className="sg-commercial-pill">
                <span>Commercial Metering</span>
                <strong>SAP AI Units (Consumption)</strong>
              </div>
              <button
                type="button"
                className="sg-stage1-link-btn"
                style={{ background: '#7c3aed' }}
                onClick={goToPremiumAi}
                title="Deep dive into Premium AI consumption & AI Units"
              >
                <span>Explore Premium AI (AI Units)</span>
                <span>›</span>
              </button>
            </div>
          </section>

          {/* ================= STAGE 3 ================= */}
          <section className="sg-card card-stage-3" aria-label="Stage 3: Extend with custom-built AI">
            <div className="sg-card-top">
              <div className="sg-card-number-row">
                <span className="sg-stage-num">3</span>
                <div className="sg-icon-badge" aria-hidden="true">
                  {/* Custom Platform / Neural Network Hub Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="#2563eb" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" fill="#2563eb" />
                    <path d="M12 4V7 M12 17V20 M4 12H7 M17 12H20" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <h2 className="sg-card-title">Extend with custom-built AI</h2>
              <p className="sg-card-lead">
                For differentiation, customers can build and run their own AI.
              </p>
            </div>

            <ul className="sg-card-features">
              <li>
                <span className="sg-bullet-bullet" />
                <span><strong>Built on SAP's Business AI Platform:</strong> Leverages BTP Generative AI Hub, SAP AI Core, and foundation models.</span>
              </li>
              <li>
                <span className="sg-bullet-bullet" />
                <span><strong>Grounded in Enterprise Data:</strong> Seamless semantic integration with SAP Business Data Cloud (BDC) and Databricks.</span>
              </li>
              <li>
                <span className="sg-bullet-bullet" />
                <span><strong>Monetized at execution time:</strong> Pay strictly for the runtime compute, model inference, and vector tokens consumed.</span>
              </li>
            </ul>

            <div className="sg-card-bottom">
              <div className="sg-commercial-pill">
                <span>Monetization Model</span>
                <strong>BTP Execution & Token Runtime</strong>
              </div>
            </div>
          </section>
        </div>

        {/* Foundation Category Classification Banners */}
        <div className="sg-classification-row" aria-label="Macro AI classification categories">
          {/* Spans Stage 1 & 2 */}
          <div className="sg-class-banner prebuilt">
            <div className="sg-class-banner-left">
              <span className="sg-class-banner-tag">Turnkey SaaS</span>
              <div>
                <h3 className="sg-class-banner-title">SAP pre-built AI</h3>
                <p className="sg-class-banner-desc">
                  Natively embedded, maintained, and secured by SAP across cloud LoBs
                </p>
              </div>
            </div>
            <span style={{ fontSize: '18px', opacity: 0.85 }} aria-hidden="true">⚡</span>
          </div>

          {/* Spans Stage 3 */}
          <div className="sg-class-banner custom">
            <div className="sg-class-banner-left">
              <span className="sg-class-banner-tag">PaaS Extension</span>
              <div>
                <h3 className="sg-class-banner-title">Custom-built AI</h3>
                <p className="sg-class-banner-desc">
                  Bespoke models & agents on SAP BTP
                </p>
              </div>
            </div>
            <span style={{ fontSize: '18px', opacity: 0.85 }} aria-hidden="true">🛠️</span>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="sg-footer">
        <button
          type="button"
          className="sg-nav-btn"
          onClick={goToCommercial}
          aria-label="Return to Cracking the Commercial"
        >
          <span>‹</span>
          <span>Cracking the Commercial</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="sg-nav-btn primary"
          onClick={goToJouleBase}
          aria-label="Proceed to Joule Base (Base AI)"
        >
          <span>Base AI (Joule Base)</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="sg-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="sg-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="sg-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={originalSlideSpec}
              alt="Original How customers start and grow with SAP Business AI Slide Specification"
              className="sg-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
