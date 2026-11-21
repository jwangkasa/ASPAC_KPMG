import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/sap_agentic_model_spec.png'
import '../styles/sapAgenticModel.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideSapAgenticModel({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [flipped1, setFlipped1] = useState(false)
  const [flipped2, setFlipped2] = useState(false)
  const [flipped3, setFlipped3] = useState(false)

  const toggleFlip1 = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setFlipped1((prev) => !prev)
  }

  const toggleFlip2 = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setFlipped2((prev) => !prev)
  }

  const toggleFlip3 = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setFlipped3((prev) => !prev)
  }

  const flipAll = () => {
    const shouldFlip = !(flipped1 && flipped2 && flipped3)
    setFlipped1(shouldFlip)
    setFlipped2(shouldFlip)
    setFlipped3(shouldFlip)
  }

  const goToPrev = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/Joule_Work_Explained'
    }
  }

  const goToNext = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/agentic_orchestration_pricing'
    }
  }

  return (
    <div className="sam-container">
      {/* Ambient background glows */}
      <div className="sam-ambient-left" aria-hidden="true" />
      <div className="sam-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="sam-header">
        <div className="sam-title-group">
          <div className="sam-eyebrow">
            <span>SAP Unified Commercial Architecture • Commercial Entitlement Model</span>
          </div>
          <h1 className="sam-main-title">Joule Work (Agentic Orchestration) Commercial Model</h1>
          <p className="sam-main-subtitle">
            One license, free to start, pay as you grow
          </p>
        </div>

        <div className="sam-header-actions">
          <div className="sam-badge-pill">
            <span>⚡ Unified AI License</span>
          </div>
          <button
            type="button"
            className="sam-badge-btn"
            onClick={() => setIsZoomed(true)}
            title="View original commercial model specification visual"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Master Content Stage */}
      <main className="sam-stage">
        {/* Top Hero Announcement Bar */}
        <div className="sam-hero-banner">
          <div className="sam-hero-banner-left">
            <div className="sam-hero-sparkle" aria-hidden="true">
              {/* Sparkle SVG Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <p className="sam-hero-text">
              Joule Work is the next-generation Joule experience for business users — one unified license.
            </p>
          </div>
          <div className="sam-hero-banner-right">
            <span className="sam-hero-pill">Web • Embedded • Mobile • Desktop</span>
            <button
              type="button"
              className="sam-flip-all-btn"
              onClick={flipAll}
              title="Toggle details for all pillars"
            >
              <span>{flipped1 && flipped2 && flipped3 ? '↺ Show Headers' : '↻ Flip All to Details'}</span>
            </button>
          </div>
        </div>

        {/* 3-Pillar 3D Flip Grid */}
        <div className="sam-grid">
          {/* ================= PILLAR 1: WHAT'S INCLUDED ================= */}
          <div
            className="sam-flip-card-container"
            onClick={() => toggleFlip1()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip1()
              }
            }}
            aria-label="What's included pillar card. Click to flip."
          >
            <div className={`sam-flip-card-inner ${flipped1 ? 'is-flipped' : ''}`}>
              {/* FRONT FACE: Header Mode */}
              <div className="sam-flip-card-face sam-flip-front col-included">
                <div>
                  <div className="sam-card-header">
                    <div className="sam-card-header-pill">
                      <span>What's included</span>
                    </div>
                    <span className="sam-card-header-tag">1 Unified License</span>
                  </div>

                  <div className="sam-front-overview">
                    <div className="sam-front-badge-row">
                      <span className="sam-front-status-badge">⚡ Omnichannel Included</span>
                      <span className="sam-front-status-badge outline">Spaces & Voice Free</span>
                    </div>

                    <p className="sam-front-summary-p">
                      One unified AI Unit license covers <strong>Joule Work across all surfaces</strong> — with collaborative Spaces and Voice built-in at zero extra charge.
                    </p>

                    <div className="sam-front-highlights-grid">
                      <div className="sam-highlight-item">
                        <span className="sam-highlight-icon">🌐</span>
                        <div>
                          <strong>Omnichannel Coverage</strong>
                          <p>Web, In-App Fiori, Mobile, and Desktop under one license</p>
                        </div>
                      </div>
                      <div className="sam-highlight-item">
                        <span className="sam-highlight-icon">🎙️</span>
                        <div>
                          <strong>Voice & Spaces</strong>
                          <p>Included free with 1 hr daily voice allowance per user</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flip Action Bar */}
                <div className="sam-flip-cta-bar">
                  <div className="sam-flip-cta-btn">
                    <span>Click to flip for details</span>
                    <span className="sam-flip-cta-arrow">↻</span>
                  </div>
                  <span className="sam-flip-cta-hint">Channels • Quota • Modes</span>
                </div>
              </div>

              {/* BACK FACE: Details Mode */}
              <div className="sam-flip-card-face sam-flip-back col-included">
                <div>
                  <div className="sam-card-header back-header">
                    <div className="sam-card-header-pill small">
                      <span>What's included</span>
                    </div>
                    <button
                      type="button"
                      className="sam-flip-return-btn"
                      onClick={(e) => toggleFlip1(e)}
                      title="Flip back to header"
                    >
                      <span>↺ Flip</span>
                    </button>
                  </div>

                  <div className="sam-items-list">
                    <div className="sam-item-row">
                      <div className="sam-item-icon-box" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="sam-item-content">
                        <span className="sam-item-title">Omnichannel Coverage</span>
                        <p className="sam-item-desc">
                          Same AI Unit license covers Joule Work Web, embedded/in-app, mobile, and desktop without separate per-channel fees.
                        </p>
                      </div>
                    </div>

                    <div className="sam-item-row">
                      <div className="sam-item-icon-box" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="sam-item-content">
                        <span className="sam-item-title">Spaces & Voice Included</span>
                        <p className="sam-item-desc">
                          Spaces and collaborative voice capabilities are included at no additional charge.
                        </p>
                      </div>
                    </div>

                    <div className="sam-item-row">
                      <div className="sam-item-icon-box" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="sam-item-content">
                        <span className="sam-item-title">Daily Voice Allowance</span>
                        <p className="sam-item-desc">
                          Voice interactions included, capped at 1 hour per user per day (resets automatically every 24h).
                        </p>
                      </div>
                    </div>

                    <div className="sam-item-row">
                      <div className="sam-item-icon-box" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="sam-item-content">
                        <span className="sam-item-title">Two Orchestration Modes</span>
                        <p className="sam-item-desc">
                          Standard for everyday tasks, advanced* for reasoning-heavy tasks — admin-controlled with easy user toggle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sam-card-pills-row">
                  <span className="sam-feature-pill">1 Unified License</span>
                  <span className="sam-feature-pill">Omnichannel</span>
                  <span className="sam-feature-pill">Voice Capped 1h/day</span>
                  <span className="sam-feature-pill">Standard & Advanced</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= PILLAR 2: HOW CUSTOMERS GET STARTED ================= */}
          <div
            className="sam-flip-card-container"
            onClick={() => toggleFlip2()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip2()
              }
            }}
            aria-label="How customers get started pillar card. Click to flip."
          >
            <div className={`sam-flip-card-inner ${flipped2 ? 'is-flipped' : ''}`}>
              {/* FRONT FACE: Header Mode */}
              <div className="sam-flip-card-face sam-flip-front col-start">
                <div>
                  <div className="sam-card-header">
                    <div className="sam-card-header-pill">
                      <span>How customers get started</span>
                    </div>
                    <span className="sam-card-header-tag purple">Free Starter Grant</span>
                  </div>

                  <div className="sam-front-overview">
                    <div className="sam-front-metric-card">
                      <span className="sam-front-metric-number">15,000</span>
                      <span className="sam-front-metric-label">Free Actions / Company</span>
                    </div>

                    <p className="sam-front-summary-p">
                      Every AI Unit customer automatically receives <strong>15,000 actions</strong> at company level — no additional purchase or credit card needed.
                    </p>

                    <div className="sam-metric-highlight-box">
                      <span className="sam-metric-highlight-title">💡 Tangible Real-World Value</span>
                      <p className="sam-metric-highlight-stats">
                        Enough for ~<strong>1,700 inbox triages</strong> or <strong>700 meeting preparations</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flip Action Bar */}
                <div className="sam-flip-cta-bar purple">
                  <div className="sam-flip-cta-btn purple">
                    <span>Click to flip for details</span>
                    <span className="sam-flip-cta-arrow">↻</span>
                  </div>
                  <span className="sam-flip-cta-hint">Starter Pool • 12-Month Window</span>
                </div>
              </div>

              {/* BACK FACE: Details Mode */}
              <div className="sam-flip-card-face sam-flip-back col-start">
                <div>
                  <div className="sam-card-header back-header">
                    <div className="sam-card-header-pill small">
                      <span>How customers get started</span>
                    </div>
                    <button
                      type="button"
                      className="sam-flip-return-btn purple"
                      onClick={(e) => toggleFlip2(e)}
                      title="Flip back to header"
                    >
                      <span>↺ Flip</span>
                    </button>
                  </div>

                  <div className="sam-items-list">
                    <div className="sam-item-row">
                      <div className="sam-item-icon-box purple" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="13 17 18 12 13 7" />
                          <polyline points="6 17 11 12 6 7" />
                        </svg>
                      </div>
                      <div className="sam-item-content">
                        <span className="sam-item-title">Free Starter Entitlement</span>
                        <p className="sam-item-desc">
                          Every AI Unit customer receives <strong>15,000 actions</strong> at company level — pooled across all users with no upfront charge.
                        </p>
                      </div>
                    </div>

                    <div className="sam-item-row">
                      <div className="sam-item-icon-box purple" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <div className="sam-item-content">
                        <span className="sam-item-title">12-Month Validity</span>
                        <p className="sam-item-desc">
                          Entitlement expires after 12 months and provides substantial runway for pilot programs and team onboarding.
                        </p>
                      </div>
                    </div>

                    <div className="sam-metric-highlight-box">
                      <span className="sam-metric-highlight-title">💡 Tangible Real-World Value</span>
                      <p className="sam-metric-highlight-stats">
                        <strong>15,000 free actions</strong> is enough for approximately <strong>1,700 inbox triages</strong> or <strong>700 meeting preparations</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sam-card-pills-row">
                  <span className="sam-feature-pill purple">15,000 Actions</span>
                  <span className="sam-feature-pill purple">Company-Level Pool</span>
                  <span className="sam-feature-pill purple">12-Month Validity</span>
                  <span className="sam-feature-pill purple">Zero Upfront Cost</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= PILLAR 3: WHEN THE ENTITLEMENT IS USED UP ================= */}
          <div
            className="sam-flip-card-container"
            onClick={() => toggleFlip3()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip3()
              }
            }}
            aria-label="When entitlement is used up pillar card. Click to flip."
          >
            <div className={`sam-flip-card-inner ${flipped3 ? 'is-flipped' : ''}`}>
              {/* FRONT FACE: Header Mode */}
              <div className="sam-flip-card-face sam-flip-front col-used">
                <div>
                  <div className="sam-card-header">
                    <div className="sam-card-header-pill">
                      <span>When entitlement is used</span>
                    </div>
                    <span className="sam-card-header-tag blue">Pay As You Grow</span>
                  </div>

                  <div className="sam-front-overview">
                    {/* Rate Summary Card */}
                    <div className="sam-rate-box">
                      <span className="sam-rate-title">Fixed Consumption Tariff</span>
                      <div className="sam-rate-numbers">
                        <div className="sam-rate-item">
                          <span className="sam-rate-val">0.02</span>
                          <span className="sam-rate-lbl">Standard / action</span>
                        </div>
                        <span style={{ color: '#94a3b8', fontSize: '18px', fontWeight: 300 }}>|</span>
                        <div className="sam-rate-item">
                          <span className="sam-rate-val">0.05</span>
                          <span className="sam-rate-lbl">Advanced* / action</span>
                        </div>
                      </div>
                      <span style={{ fontSize: '10.5px', color: '#0369a1', textAlign: 'center', fontWeight: 600 }}>
                        Predictable, transparent per-action metering
                      </span>
                    </div>

                    <p className="sam-front-summary-p">
                      Additional usage beyond 15,000 actions is billed in AI Units at fixed rates with <strong>zero service interruption</strong>.
                    </p>
                  </div>
                </div>

                {/* Flip Action Bar */}
                <div className="sam-flip-cta-bar blue">
                  <div className="sam-flip-cta-btn blue">
                    <span>Click to flip for details</span>
                    <span className="sam-flip-cta-arrow">↻</span>
                  </div>
                  <span className="sam-flip-cta-hint">Tariff Rates • AI Units • Scaling</span>
                </div>
              </div>

              {/* BACK FACE: Details Mode */}
              <div className="sam-flip-card-face sam-flip-back col-used">
                <div>
                  <div className="sam-card-header back-header">
                    <div className="sam-card-header-pill small">
                      <span>When entitlement is used</span>
                    </div>
                    <button
                      type="button"
                      className="sam-flip-return-btn blue"
                      onClick={(e) => toggleFlip3(e)}
                      title="Flip back to header"
                    >
                      <span>↺ Flip</span>
                    </button>
                  </div>

                  <div className="sam-items-list">
                    <div className="sam-item-row">
                      <div className="sam-item-icon-box blue" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                      <div className="sam-item-content">
                        <span className="sam-item-title">Seamless Pay-As-You-Grow</span>
                        <p className="sam-item-desc">
                          Additional usage beyond 15,000 actions is billed in AI Units at the fixed standard or advanced rate without service interruption.
                        </p>
                      </div>
                    </div>

                    {/* Rate Summary Card */}
                    <div className="sam-rate-box">
                      <span className="sam-rate-title">Fixed Consumption Tariff</span>
                      <div className="sam-rate-numbers">
                        <div className="sam-rate-item">
                          <span className="sam-rate-val">0.02</span>
                          <span className="sam-rate-lbl">Standard / action</span>
                        </div>
                        <span style={{ color: '#94a3b8', fontSize: '18px', fontWeight: 300 }}>|</span>
                        <div className="sam-rate-item">
                          <span className="sam-rate-val">0.05</span>
                          <span className="sam-rate-lbl">Advanced* / action</span>
                        </div>
                      </div>
                      <span style={{ fontSize: '10.5px', color: '#0369a1', textAlign: 'center', fontWeight: 600 }}>
                        Predictable, transparent per-action metering
                      </span>
                    </div>
                  </div>
                </div>

                <div className="sam-card-pills-row">
                  <span className="sam-feature-pill blue">Pay-As-You-Grow</span>
                  <span className="sam-feature-pill blue">0.02 Standard</span>
                  <span className="sam-feature-pill blue">0.05 Advanced</span>
                  <span className="sam-feature-pill blue">Zero Downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="sam-footnotes">
          <div className="sam-footnote-text">
            <strong>* Advanced Orchestration Availability:</strong> Advanced orchestration mode is currently available exclusively on Joule Work Desktop.
          </div>
          <div className="sam-footnote-text">
            <strong>Existing Customers:</strong> Existing Joule Base customers will continue to utilize Joule basic orchestration without a fee.
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="sam-footer">
        <button
          type="button"
          className="sam-nav-btn"
          onClick={goToPrev}
          aria-label="Return to Joule Work Explained"
        >
          <span>‹</span>
          <span>Joule Work Explained</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="sam-nav-btn primary"
          onClick={goToNext}
          aria-label="Proceed to Agentic Orchestration Pricing"
        >
          <span>Orchestration Pricing</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="sam-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="sam-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="sam-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={originalSpec}
              alt="Original Joule Work (Agentic Orchestration) Commercial Model Slide Specification"
              className="sam-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
