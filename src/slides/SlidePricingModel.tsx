import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/pricing_models_spec.png'
import '../styles/pricingModel.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlidePricingModel({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToPrev = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/Premium_AI'
    }
  }

  const goToNext = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/Embedded_Premium'
    }
  }

  return (
    <div className="pm-container">
      {/* Ambient background glows */}
      <div className="pm-ambient-left" aria-hidden="true" />
      <div className="pm-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="pm-header">
        <div className="pm-title-group">
          <div className="pm-eyebrow">
            <span>SAP Commercial Architecture • AI Unit Consumption Matrix</span>
          </div>
          <h1 className="pm-main-title">Pricing models at a glance</h1>
          <p className="pm-main-subtitle">
            Different ways to use AI Units, depending on the needs.
          </p>
        </div>

        <div className="pm-header-actions">
          <div className="pm-badge-pill">
            <span>⚡ Clear, Transparent Metering</span>
          </div>
          <button
            type="button"
            className="pm-badge-btn"
            onClick={() => setIsZoomed(true)}
            title="View original pricing models specification"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Quick Converter Strip (Simplifies Understanding for Executives) */}
      <div className="pm-converter-strip" aria-label="Quick AI Unit Converter">
        <div className="pm-converter-left">
          <span className="pm-converter-tag">Rule of Thumb</span>
          <span>1 AI Unit buys you:</span>
        </div>
        <div className="pm-converter-items">
          <span><strong>50</strong> Standard Actions</span>
          <span className="pm-converter-divider">|</span>
          <span><strong>20</strong> Advanced Actions</span>
          <span className="pm-converter-divider">|</span>
          <span><strong>200</strong> Document Groundings</span>
          <span className="pm-converter-divider">|</span>
          <span><strong>10</strong> Document AI Invocations</span>
        </div>
      </div>

      {/* Main 3-Column Grid */}
      <main className="pm-main">
        <div className="pm-grid">
          {/* ================= COLUMN 1: AGENTIC ORCHESTRATION ================= */}
          <section className="pm-card card-orch" aria-label="Agentic Orchestration Pricing">
            <div>
              <div className="pm-card-header">
                <div className="pm-card-icon" aria-hidden="true">
                  {/* Diamond Sparkle Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L19 9L12 22L5 9L12 2Z"
                      fill="#8b5cf6"
                    />
                    <path d="M5 9H19" stroke="#ffffff" strokeWidth="1.5" />
                    <path d="M12 2L9 9L12 22L15 9L12 2Z" fill="#a78bfa" />
                  </svg>
                </div>
                <div className="pm-card-title-group">
                  <h2 className="pm-card-title">Agentic Orchestration¹</h2>
                  <p className="pm-card-desc">AI assistance for everyday and complex work</p>
                </div>
              </div>

              {/* Pricing Blocks */}
              <div className="pm-pricing-blocks">
                <div className="pm-tier-box highlight">
                  <div className="pm-tier-info">
                    <span className="pm-tier-name">Standard</span>
                    <span className="pm-tier-scope">Joule Work web, mobile, in-app, desktop</span>
                  </div>
                  <div className="pm-tier-price">
                    <span className="pm-price-val">0.02</span>
                    <span className="pm-price-unit">AI Units / action</span>
                  </div>
                </div>

                <div className="pm-tier-box">
                  <div className="pm-tier-info">
                    <span className="pm-tier-name">Advanced</span>
                    <span className="pm-tier-scope">Joule Work desktop only (deep reasoning)</span>
                  </div>
                  <div className="pm-tier-price">
                    <span className="pm-price-val">0.05</span>
                    <span className="pm-price-unit">AI Units / action</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Starter Callout */}
            <div className="pm-callout-bottom starter">
              <div className="pm-callout-header">
                <span className="pm-callout-title">Free Starter Entitlement</span>
                <span className="pm-callout-pill">15,000 Actions</span>
              </div>
              <p className="pm-callout-desc">
                Shared across Joule Agentic Orchestration environments for AI Unit customers only · one-time allowance · must be used within 12 months · does not renew
              </p>
            </div>
          </section>

          {/* ================= COLUMN 2: AUTONOMOUS AGENTS ================= */}
          <section className="pm-card card-agents" aria-label="Autonomous Agents Pricing">
            <div>
              <div className="pm-card-header">
                <div className="pm-card-icon" aria-hidden="true">
                  {/* Autonomous Agent / Robot Mask Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="6" width="16" height="13" rx="4" stroke="#6366f1" strokeWidth="2" />
                    <circle cx="9" cy="11" r="1.5" fill="#6366f1" />
                    <circle cx="15" cy="11" r="1.5" fill="#6366f1" />
                    <path d="M9 15H15" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 2V6" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="2" r="1.5" fill="#818cf8" />
                  </svg>
                </div>
                <div className="pm-card-title-group">
                  <h2 className="pm-card-title">Agents¹</h2>
                  <p className="pm-card-desc">Automate end-to-end business processes</p>
                </div>
              </div>

              {/* Pricing Blocks */}
              <div className="pm-pricing-blocks">
                <div className="pm-tier-box highlight">
                  <div className="pm-tier-info">
                    <span className="pm-tier-name">Standard Agents</span>
                    <span className="pm-tier-scope">Single-domain task automation & workflows</span>
                  </div>
                  <div className="pm-tier-price">
                    <span className="pm-price-val">0.02</span>
                    <span className="pm-price-unit">AI Units / action</span>
                  </div>
                </div>

                <div className="pm-tier-box">
                  <div className="pm-tier-info">
                    <span className="pm-tier-name">Advanced Agents</span>
                    <span className="pm-tier-scope">Cross-domain multi-agent reasoning & writebacks</span>
                  </div>
                  <div className="pm-tier-price">
                    <span className="pm-price-val">0.05</span>
                    <span className="pm-price-unit">AI Units / action</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Symmetry Callout */}
            <div className="pm-callout-bottom" style={{ background: '#f5f3ff', border: '1px solid #ddd6fe' }}>
              <div className="pm-callout-header">
                <span className="pm-callout-title" style={{ color: '#4338ca' }}>Unified Pricing Symmetry</span>
                <span className="pm-callout-pill" style={{ color: '#4338ca' }}>0.02 / 0.05</span>
              </div>
              <p className="pm-callout-desc">
                Identical transparent pricing whether an action is user-orchestrated in Joule Work or fully autonomous via background enterprise agents.
              </p>
            </div>
          </section>

          {/* ================= COLUMN 3: CONSUMPTION-BASED AI FEATURES ================= */}
          <section className="pm-card card-features" aria-label="Consumption-based AI Features">
            <div>
              <div className="pm-card-header">
                <div className="pm-card-icon" aria-hidden="true">
                  {/* Database / Feature Grid Sparkle Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3L14 8L19 10L14 12L12 17L10 12L5 10L10 8L12 3Z"
                      fill="#0284c7"
                    />
                    <circle cx="18" cy="18" r="3" fill="#38bdf8" />
                  </svg>
                </div>
                <div className="pm-card-title-group">
                  <h2 className="pm-card-title">Consumption-based Features</h2>
                  <p className="pm-card-desc">Pay for AI capabilities based on actual usage</p>
                </div>
              </div>

              {/* Features List */}
              <div className="pm-features-table">
                <div className="pm-feature-row">
                  <span className="pm-feat-name">Document Grounding</span>
                  <div className="pm-feat-rate">
                    <span className="pm-feat-val">0.005</span>
                    <span className="pm-feat-metric">per record</span>
                  </div>
                </div>

                <div className="pm-feature-row">
                  <span className="pm-feat-name">SAP Document AI (Embedded)</span>
                  <div className="pm-feat-rate">
                    <span className="pm-feat-val">0.100</span>
                    <span className="pm-feat-metric">per request</span>
                  </div>
                </div>

                <div className="pm-feature-row">
                  <span className="pm-feat-name">Joule for Developers (ABAP)</span>
                  <div className="pm-feat-rate">
                    <span className="pm-feat-val">0.007</span>
                    <span className="pm-feat-metric">per request</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom User Pack Callout */}
            <div className="pm-callout-bottom pack">
              <div className="pm-callout-header">
                <span className="pm-callout-title">Per User Per Month Packages</span>
                <span className="pm-callout-pill" style={{ color: '#0369a1' }}>Joule Consultants</span>
              </div>
              <p className="pm-callout-desc">
                <strong>Joule for Consultants:</strong> 35 AI Units / user / month (fair use limit: 22,900 requests) · <strong>Overage:</strong> 2 AI Units / user / month (fair use: 1,000 requests)
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="pm-footer">
        <button
          type="button"
          className="pm-nav-btn"
          onClick={goToPrev}
          aria-label="Return to Premium AI"
        >
          <span>‹</span>
          <span>Premium AI</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="pm-nav-btn primary"
          onClick={goToNext}
          aria-label="Proceed to Premium-to-Base Transition"
        >
          <span>Embedded vs Premium</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="pm-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="pm-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="pm-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={originalSpec}
              alt="Original Pricing models at a glance Slide Specification"
              className="pm-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
