import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/agentic_orchestration_pricing_spec.png'
import '../styles/agenticOrchestrationPricing.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideAgenticOrchestrationPricing({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToPrev = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/sap_agentic_model'
    }
  }

  const goToNext = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/Joule_Studio'
    }
  }

  return (
    <div className="aop-container">
      {/* Ambient background glows */}
      <div className="aop-ambient-left" aria-hidden="true" />
      <div className="aop-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="aop-header">
        <div className="aop-title-group">
          <div className="aop-eyebrow">
            <span>SAP Unified Commercial Architecture • Joule Work Monetization</span>
          </div>
          <h1 className="aop-main-title">Joule Work (Agentic Orchestration) Pricing</h1>
          <p className="aop-main-subtitle">
            Consistent with Autonomous Enterprise Agent pricing — same metric &amp; rates across the portfolio
          </p>
        </div>

        <div className="aop-header-actions">
          <div className="aop-badge-pill">
            <span>⚡ Portfolio-Wide Parity</span>
          </div>
          <button
            type="button"
            className="aop-badge-btn"
            onClick={() => setIsZoomed(true)}
            title="View original slide visual specification"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Master Content Stage */}
      <main className="aop-stage">
        {/* ================= SECTION 1: PRICING BY REASONING MODE ================= */}
        <section className="aop-table-card" aria-label="Pricing by reasoning mode">
          <div className="aop-table-header-row">
            <div className="aop-section-title-box">
              <div className="aop-section-icon" aria-hidden="true">
                {/* Branch / Network nodes SVG */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
              <h2 className="aop-section-title">Pricing by reasoning mode</h2>
            </div>
            <span className="aop-table-tag">Standardized Action Metric</span>
          </div>

          <div className="aop-table-wrapper">
            <table className="aop-table">
              <thead>
                <tr>
                  <th style={{ width: '38%' }}>Mode</th>
                  <th className="center" style={{ width: '20%' }}>AI Units / Action</th>
                  <th className="center" style={{ width: '21%' }}>List Price / Action</th>
                  <th className="center" style={{ width: '21%' }}>LEP / Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Standard Row */}
                <tr>
                  <td>
                    <div className="aop-mode-cell">
                      <div className="aop-mode-badge-wrap">
                        <span className="aop-mode-badge standard">Standard</span>
                      </div>
                      <span className="aop-mode-scope">Joule Work web, mobile, desktop and in-app</span>
                    </div>
                  </td>
                  <td className="center">
                    <span className="aop-metric-val">0.02</span>
                  </td>
                  <td className="center">
                    <span className="aop-price-val">0.14 €</span>
                  </td>
                  <td className="center">
                    <span className="aop-lep-val">0.05 €</span>
                  </td>
                </tr>

                {/* Advanced Row */}
                <tr>
                  <td>
                    <div className="aop-mode-cell">
                      <div className="aop-mode-badge-wrap">
                        <span className="aop-mode-badge advanced">Advanced</span>
                      </div>
                      <span className="aop-mode-scope">Joule Work desktop only</span>
                    </div>
                  </td>
                  <td className="center">
                    <span className="aop-metric-val">0.05</span>
                  </td>
                  <td className="center">
                    <span className="aop-price-val">0.35 €</span>
                  </td>
                  <td className="center">
                    <span className="aop-lep-val">0.13 €</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footnote on task definitions */}
          <div className="aop-table-footnote">
            <span className="aop-footnote-pill">Guidance</span>
            <span>
              <strong>Standard</strong> = For everyday tasks such as email summarization, web search;{' '}
              <strong>Advanced</strong> = For complex tasks such as automations or spaces generation.
            </span>
          </div>
        </section>

        {/* ================= SECTION 2: DUAL CARDS (ENTITLEMENT & UPFRONT TRANSPARENCY) ================= */}
        <div className="aop-bottom-grid">
          {/* Left Card: Included at no charge */}
          <section className="aop-starter-card" aria-label="Included at no charge: free starter entitlement">
            <div className="aop-starter-header">
              <div className="aop-starter-icon" aria-hidden="true">
                {/* Fast-forward double chevron icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 19 22 12 13 5 13 19" />
                  <polygon points="2 19 11 12 2 5 2 19" />
                </svg>
              </div>
              <h2 className="aop-starter-title">Included at no charge: free starter entitlement</h2>
            </div>

            <div className="aop-starter-kpi-box">
              <span className="aop-starter-number">15,000</span>
              <span className="aop-starter-label">Actions Included</span>
            </div>

            <p className="aop-starter-desc">
              Automatically included for every AI Unit customer.
            </p>
          </section>

          {/* Right Card: Be upfront with customers */}
          <section className="aop-upfront-card" aria-label="Customer Transparency & Combined Metering">
            <div className="aop-upfront-header">
              <div className="aop-upfront-icon" aria-hidden="true">
                {/* Speech bubble icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h2 className="aop-upfront-title">Be upfront with customers</h2>
            </div>

            <p className="aop-upfront-text">
              When Joule Work triggers an autonomous enterprise agent, both are metered as separate services — a Joule Work action and an Agent action. This is not double billing; two services are running.
            </p>

            {/* Combined Calculation Card */}
            <div className="aop-calc-box">
              <div className="aop-calc-icon" aria-hidden="true">
                {/* Diamond / Sparkle icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div className="aop-calc-content">
                <span className="aop-calc-formula">
                  Standard Joule Work action + Advanced Agent action
                </span>
                <div className="aop-calc-rates">
                  <span className="aop-calc-chip ai-units">= 0.07 AI Units</span>
                  <span className="aop-calc-chip list">€0.49 list</span>
                  <span className="aop-calc-chip lep">€0.18 LEP</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="aop-footer">
        <button
          type="button"
          className="aop-nav-btn"
          onClick={goToPrev}
          aria-label="Return to Agentic Commercial Model"
        >
          <span>‹</span>
          <span>Agentic Commercial Model</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="aop-nav-btn primary"
          onClick={goToNext}
          aria-label="Proceed to Joule Studio Managed Platform"
        >
          <span>Joule Studio</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="aop-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="aop-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="aop-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={originalSpec}
              alt="Original Joule Work (Agentic Orchestration) Pricing Specification"
              className="aop-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
