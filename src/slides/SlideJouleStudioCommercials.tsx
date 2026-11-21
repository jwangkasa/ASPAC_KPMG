import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/joule_studio_commercial_model_spec.png'
import '../styles/jouleStudioCommercials.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideJouleStudioCommercials({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  // Track flip state for the 2 commercial model cards (index 0: Free Design, 1: Paid Runtime)
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({
    0: false,
    1: false,
  })

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const toggleAllFlips = () => {
    const anyFlipped = Object.values(flippedCards).some((val) => val)
    setFlippedCards({
      0: !anyFlipped,
      1: !anyFlipped,
    })
  }

  const goToObjectives = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/Joule_Studio_Objectives'
    }
  }

  const goToJsDesign = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/JS_Design'
    }
  }

  const allFlipped = Object.values(flippedCards).every((val) => val)

  return (
    <div className="jsc-container">
      {/* Ambient background glows */}
      <div className="jsc-ambient-left" aria-hidden="true" />
      <div className="jsc-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="jsc-header">
        <div className="jsc-title-group">
          <div className="jsc-eyebrow">
            <span>SAP Commercial Architecture • Joule Studio Monetization</span>
          </div>
          <h1 className="jsc-main-title">Joule Studio Commercial Model</h1>
          <p className="jsc-main-subtitle">
            Dual-tier model: Free design-time experimentation with decoupled, consumption-based production runtime.
          </p>
        </div>

        <div className="jsc-header-actions">
          <div className="jsc-badge-pill">
            <span>⚡ Free Runtime Thru Dec 2026</span>
          </div>
          <button
            type="button"
            className="jsc-flip-all-btn"
            onClick={toggleAllFlips}
            title="Toggle between header view and full details for both cards"
          >
            <span>{allFlipped ? '⤺ Show Both Headers' : '🔄 Flip Both for Details'}</span>
          </button>
          <button
            type="button"
            className="jsc-badge-btn"
            onClick={() => setIsZoomed(true)}
            title="View original slide visual specification"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Prerequisite Cross-Banner */}
      <section className="jsc-prereq-banner" aria-label="Commercial Prerequisites">
        <span className="jsc-prereq-pill">Prerequisite</span>

        <div className="jsc-prereq-item">
          <span>
            <span className="jsc-prereq-highlight">AI Units</span> or <span className="jsc-prereq-highlight">Joule Base ($0 SKU)</span> for{' '}
            <strong className="jsc-prereq-bold-action">access to Joule Work</strong>
          </span>
        </div>

        <div className="jsc-prereq-divider" aria-hidden="true" />

        <div className="jsc-prereq-item">
          <span>
            <span className="jsc-prereq-highlight">BTPEA, CPEA, BAIP EA, or PAYG</span> for{' '}
            <strong className="jsc-prereq-bold-action">Joule Studio design-time tooling &amp; runtime usage</strong>
          </span>
        </div>
      </section>

      {/* Master 2-Column Stage with Flip Capabilities */}
      <main className="jsc-stage">
        <div className="jsc-hint-ribbon">
          <span className="jsc-hint-text">
            💡 Showing tier headers. <strong>Click any card</strong> to flip and inspect full architectural capabilities &amp; terms.
          </span>
        </div>

        <div className="jsc-columns-grid">
          {/* ================= COLUMN 1: DESIGN-TIME TOOLING (FREE) ================= */}
          <div
            className={`jsc-flip-card card-free ${flippedCards[0] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip(0)
              }
            }}
            aria-label="Design-time tooling flip card"
          >
            <div className="jsc-flip-inner">
              {/* FRONT FACE: HEADER VIEW */}
              <article className="jsc-card-face jsc-card-front card-free">
                <header className="jsc-card-top">
                  <div className="jsc-card-title-group">
                    <span className="jsc-face-eyebrow">Tier 01 • Design Stage</span>
                    <h2 className="jsc-card-title">Design-time tooling</h2>
                    <p className="jsc-card-desc">
                      Tooling for building and testing agents, n8n workflows and apps, with AI-assisted development under fair-use limits.
                    </p>
                  </div>
                  <span className="jsc-tier-badge badge-free">
                    <span className="jsc-badge-pulse-dot" aria-hidden="true" />
                    <span className="jsc-free-text">FREE</span>
                  </span>
                </header>

                <div className="jsc-front-body">
                  <div className="jsc-front-summary-card free-tint">
                    <span className="jsc-front-summary-label">Commercial Promise</span>
                    <p className="jsc-front-summary-text">
                      <strong>Zero procurement barrier:</strong> Full design-time agent authoring, n8n automation, and app prototyping available at no cost under developer fair use.
                    </p>
                  </div>

                  <div className="jsc-front-chips-row">
                    <div className="jsc-front-chip">
                      <span className="icon">🛠️</span>
                      <span>Intent-Based Dev (IBD)</span>
                    </div>
                    <div className="jsc-front-chip">
                      <span className="icon">🧩</span>
                      <span>Low-Code &amp; Pro-Code</span>
                    </div>
                    <div className="jsc-front-chip">
                      <span className="icon">🤖</span>
                      <span>Up to 500 AI Agents</span>
                    </div>
                    <div className="jsc-front-chip">
                      <span className="icon">🌐</span>
                      <span>Grounded in Business Context</span>
                    </div>
                  </div>
                </div>

                <div className="jsc-front-cta free-cta">
                  <span>Click to reveal detailed feature scope &amp; entitlements</span>
                  <span className="jsc-cta-icon">↻</span>
                </div>
              </article>

              {/* BACK FACE: DEEP DETAILS */}
              <article className="jsc-card-face jsc-card-back card-free">
                <div className="jsc-back-header">
                  <div className="jsc-back-header-left">
                    <span className="jsc-back-tier-pill free">FREE</span>
                    <h3 className="jsc-back-title">Design-time tooling — Feature Scope</h3>
                  </div>
                  <span className="jsc-back-tag">Design-Time</span>
                </div>

                <div className="jsc-back-body">
                  <div className="jsc-feature-box">
                    <ul className="jsc-feature-list">
                      <li className="jsc-feature-item">
                        <span className="jsc-bullet-marker" />
                        <span>
                          <strong>Build agents, n8n workflows and apps</strong> through intent-based development (IBD)
                        </span>
                      </li>
                      <li className="jsc-feature-item">
                        <span className="jsc-bullet-marker" />
                        <span>
                          <strong>Use low-code and pro-code tools</strong> for rapid prototyping and enterprise extension
                        </span>
                      </li>
                      <li className="jsc-feature-item">
                        <span className="jsc-bullet-marker" />
                        <span>
                          <strong>Leverage AI-assisted development and testing</strong> with synthetic evaluations
                        </span>
                      </li>
                      <li className="jsc-feature-item">
                        <span className="jsc-bullet-marker" />
                        <span>
                          <strong>Grounded in business context</strong> and enterprise knowledge graphs
                        </span>
                      </li>
                      <li className="jsc-feature-item">
                        <span className="jsc-bullet-marker" />
                        <span>
                          <strong>SAP AI Agent Hub provisioned</strong> for eligible customers, supporting up to 500 agents, unless available through LeanIX
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="jsc-advisory-box">
                    <span className="jsc-advisory-icon">⚠️</span>
                    <span>
                      Usage of AI capabilities for IBD is expected to have a price point beyond the initial per developer entitlement*.
                    </span>
                  </div>
                </div>

                <div className="jsc-back-return-bar">
                  <span className="jsc-back-return-btn">⤺ Flip to Header</span>
                </div>
              </article>
            </div>
          </div>

          {/* ================= COLUMN 2: JOULE STUDIO RUNTIME (PAID) ================= */}
          <div
            className={`jsc-flip-card card-paid ${flippedCards[1] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(1)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip(1)
              }
            }}
            aria-label="Joule Studio runtime flip card"
          >
            <div className="jsc-flip-inner">
              {/* FRONT FACE: HEADER VIEW */}
              <article className="jsc-card-face jsc-card-front card-paid">
                <header className="jsc-card-top">
                  <div className="jsc-card-title-group">
                    <span className="jsc-face-eyebrow">Tier 02 • Production Stage</span>
                    <h2 className="jsc-card-title">Joule Studio runtime</h2>
                    <p className="jsc-card-desc">
                      Productive runtime for customer-built agents, n8n workflows, apps, and extensions, billed on resource consumption.
                    </p>
                  </div>
                  <span className="jsc-tier-badge badge-paid">PAID</span>
                </header>

                <div className="jsc-front-body">
                  {/* Metered Resource Tags */}
                  <div className="jsc-meters-bar" aria-label="Metered dimensions">
                    <span className="jsc-meters-label">Meters:</span>
                    <span className="jsc-meter-tag">⚡ Compute</span>
                    <span className="jsc-meter-tag">🧠 Agent Memory</span>
                    <span className="jsc-meter-tag">💾 Storage</span>
                    <span className="jsc-meter-tag">🔄 Workflows</span>
                    <span className="jsc-meter-tag">🪙 AI Tokens</span>
                  </div>

                  <div className="jsc-front-summary-card paid-tint">
                    <span className="jsc-front-summary-label">Production Architecture</span>
                    <p className="jsc-front-summary-text">
                      <strong>Managed runtime sandbox:</strong> Elastic execution environment backed by high availability, stateful persistence, audit logging, and built-in security controls.
                    </p>
                  </div>

                  <div className="jsc-front-chips-row">
                    <div className="jsc-front-chip">
                      <span className="icon">🛡️</span>
                      <span>Audited Governance</span>
                    </div>
                    <div className="jsc-front-chip">
                      <span className="icon">💾</span>
                      <span>Stateful Persistence</span>
                    </div>
                    <div className="jsc-front-chip">
                      <span className="icon">🔗</span>
                      <span>SAP &amp; 3rd-Party APIs</span>
                    </div>
                  </div>
                </div>

                <div className="jsc-front-cta paid-cta">
                  <span>Click to reveal detailed runtime operations &amp; SLA scope</span>
                  <span className="jsc-cta-icon">↻</span>
                </div>
              </article>

              {/* BACK FACE: DEEP DETAILS */}
              <article className="jsc-card-face jsc-card-back card-paid">
                <div className="jsc-back-header">
                  <div className="jsc-back-header-left">
                    <span className="jsc-back-tier-pill paid">PAID</span>
                    <h3 className="jsc-back-title">Joule Studio runtime — Operational Scope</h3>
                  </div>
                  <span className="jsc-back-tag">Managed Runtime</span>
                </div>

                <div className="jsc-back-body">
                  {/* Metered Resource Tags */}
                  <div className="jsc-meters-bar mini" aria-label="Metered dimensions">
                    <span className="jsc-meters-label">Meters:</span>
                    <span className="jsc-meter-tag">⚡ Compute</span>
                    <span className="jsc-meter-tag">🧠 Agent Memory</span>
                    <span className="jsc-meter-tag">💾 Storage</span>
                    <span className="jsc-meter-tag">🔄 Workflows</span>
                    <span className="jsc-meter-tag">🪙 AI Tokens</span>
                  </div>

                  <div className="jsc-feature-box">
                    <ul className="jsc-feature-list">
                      <li className="jsc-feature-item">
                        <span className="jsc-bullet-marker" />
                        <span>
                          <strong>Run agents, n8n workflows, apps, and extensions</strong> in a high-availability managed sandbox
                        </span>
                      </li>
                      <li className="jsc-feature-item">
                        <span className="jsc-bullet-marker" />
                        <span>
                          <strong>Govern and observe runtime operations</strong> through logging, monitoring, auditability, and built-in security controls
                        </span>
                      </li>
                      <li className="jsc-feature-item">
                        <span className="jsc-bullet-marker" />
                        <span>
                          <strong>Provide runtime data storage and persistence</strong> with stateful session continuity
                        </span>
                      </li>
                      <li className="jsc-feature-item">
                        <span className="jsc-bullet-marker" />
                        <span>
                          <strong>Connect data and models</strong> seamlessly across SAP and third-party API ecosystems
                        </span>
                      </li>
                      <li className="jsc-feature-item">
                        <span className="jsc-bullet-marker" />
                        <span>
                          <strong>Enable relevant Business Suite and RISE entitlements**</strong> for end-to-end alignment
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="jsc-back-return-bar">
                  <span className="jsc-back-return-btn">⤺ Flip to Header</span>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Promotion Ribbon */}
        <section className="jsc-promo-ribbon" aria-label="Time-bound Promotion">
          <span className="jsc-promo-badge">Promotion</span>
          <p className="jsc-promo-text">
            Under a time-bound promotion, <strong>running custom agents will remain free through December 2026</strong> across both Joule Studio, classic edition and Joule Studio.
          </p>
        </section>

        {/* Footnotes Section */}
        <footer className="jsc-footnotes" aria-label="Commercial Footnotes">
          <div className="jsc-footnote-left">
            <span>*95 Joule Studio runtime Tokens per developer per month</span>
          </div>
          <div className="jsc-footnote-right">
            <span>**Not available as embedded in current RISE and Business Suite Packages. Inclusion as embedded entitlements is being considered in future package refreshes</span>
          </div>
        </footer>
      </main>

      {/* Footer Navigation Bar */}
      <footer className="jsc-footer">
        <button
          type="button"
          className="jsc-nav-btn"
          onClick={goToObjectives}
          aria-label="Return to Joule Studio Objectives"
        >
          <span>‹</span>
          <span>Pricing Objectives</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="jsc-nav-btn primary"
          onClick={goToJsDesign}
          aria-label="Proceed to Joule Studio Design-time Tooling"
        >
          <span>Design Tooling</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="jsc-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="jsc-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="jsc-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={originalSpec}
              alt="Original Joule Studio Commercial Model Specification"
              className="jsc-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
