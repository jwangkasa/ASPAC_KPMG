import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/premium_ai_spec.png'
import '../styles/premiumAi.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlidePremiumAi({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToJouleBase = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/joule_base'
    }
  }

  const goToNextSlide = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/Pricing_Model'
    }
  }

  return (
    <div className="prem-container">
      {/* Ambient background glows */}
      <div className="prem-ambient-left" aria-hidden="true" />
      <div className="prem-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="prem-header">
        <div className="prem-title-group">
          <div className="prem-eyebrow">
            <span>SAP Commercial Architecture • AI Unit Monetization Framework</span>
          </div>
          <h1 className="prem-main-title">Premium AI</h1>
          <p className="prem-main-subtitle">
            Aligning fixed pricing with scalable consumption to meet enterprise demand
          </p>
        </div>

        <div className="prem-header-actions">
          <div className="prem-badge-pill">
            <span>⚡ Scalable Consumption Model</span>
          </div>
          <button
            type="button"
            className="prem-badge-btn"
            onClick={() => setIsZoomed(true)}
            title="View original slide visual specification"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Main Central Stage */}
      <main className="prem-stage">
        <div className="prem-frame">
          {/* Central AI Units Crown Badge bridging the two models */}
          <div className="prem-crown-badge-container">
            <div className="prem-crown-coins" aria-hidden="true">
              <span className="prem-coin left">AI</span>
              <span className="prem-coin center">AI</span>
              <span className="prem-coin right">AI</span>
            </div>
            <div className="prem-crown-pill">
              <span>AI Units*</span>
            </div>
          </div>

          {/* Dual Columns Split */}
          <div className="prem-columns-grid">
            {/* ================= LEFT PILLAR: ACTIONS ================= */}
            <section className="prem-col-card actions" aria-label="Actions-Based Consumption Model">
              <div>
                <div className="prem-col-header-bar">
                  <span>Actions</span>
                </div>

                <ul className="prem-features-list">
                  <li>
                    <span className="prem-bullet-dot" />
                    <span>
                      Agentic orchestration available across <strong>mobile, desktop, web</strong>, and in-app environments
                    </span>
                  </li>
                  <li>
                    <span className="prem-bullet-dot" />
                    <span>
                      <strong>Assistants and Agents</strong> executing business tasks with deep role and process context
                    </span>
                  </li>
                  <li>
                    <span className="prem-bullet-dot" />
                    <div>
                      <span><strong>Two action types:</strong></span>
                      <ul className="prem-sub-list">
                        <li>
                          <strong>Standard</strong> — for everyday business tasks & conversational queries
                        </li>
                        <li>
                          <strong>Advanced</strong> — for complex reasoning, multi-agent workflows & writebacks
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Solution Metrics / Capabilities */}
              <div className="prem-pills-box">
                <span className="prem-pills-label">Core Capabilities Included</span>
                <div className="prem-pills-grid">
                  <div className="prem-pill-item">
                    <span>Joule Work</span>
                  </div>
                  <div className="prem-pill-item">
                    <span>Joule Assistants & Agents</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ================= RIGHT PILLAR: RECORDS, REQUESTS, USERS ================= */}
            <section className="prem-col-card records" aria-label="Metric-Based Scaling Model">
              <div>
                <div className="prem-col-header-bar">
                  <span>Records, Requests, Users*</span>
                </div>

                <ul className="prem-features-list">
                  <li>
                    <span className="prem-bullet-dot" />
                    <span>
                      All <strong>non-agentic, high-value AI features</strong> embedded natively into core business processes
                    </span>
                  </li>
                  <li>
                    <span className="prem-bullet-dot" />
                    <span>
                      <strong>Fixed pricing per solution metric:</strong> Predictable cost alignment with business output
                    </span>
                  </li>
                  <li>
                    <span className="prem-bullet-dot" />
                    <span>
                      <strong>Ability to scale volumes</strong> dynamically based on seasonal or enterprise business needs
                    </span>
                  </li>
                </ul>
              </div>

              {/* Solution Metrics / Capabilities */}
              <div className="prem-pills-box">
                <span className="prem-pills-label">High-Value AI Services</span>
                <div className="prem-pills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div className="prem-pill-item">
                    <span>Document AI</span>
                  </div>
                  <div className="prem-pill-item">
                    <span>Document Grounding</span>
                  </div>
                  <div className="prem-pill-item">
                    <span>Joule for Developers (ABAP)</span>
                  </div>
                  <div className="prem-pill-item">
                    <span>Joule for Consultants</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footnote */}
          <div className="prem-footnote">
            <span>
              *Refer to the <button type="button" onClick={() => setIsZoomed(true)}>AI Feature Guide</button> for complete list of Premium AI features and their associated metrics.
            </span>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="prem-footer">
        <button
          type="button"
          className="prem-nav-btn"
          onClick={goToJouleBase}
          aria-label="Return to Base AI"
        >
          <span>‹</span>
          <span>Base AI</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="prem-nav-btn primary"
          onClick={goToNextSlide}
          aria-label="Proceed to Pricing Models at a Glance"
        >
          <span>Pricing Models</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="prem-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="prem-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="prem-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={originalSpec}
              alt="Original Premium AI Slide Specification"
              className="prem-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
