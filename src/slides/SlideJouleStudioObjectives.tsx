import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/joule_studio_objectives_spec.png'
import '../styles/jouleStudioObjectives.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideJouleStudioObjectives({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  // Track flip state for the 3 objective pillars
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
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
      2: !anyFlipped,
    })
  }

  const goToJouleStudio = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/Joule_Studio'
    }
  }

  const goToCommercials = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/Joule_Studio_Commercials'
    }
  }

  const allFlipped = Object.values(flippedCards).every((val) => val)

  return (
    <div className="jso-container">
      {/* Ambient background glows */}
      <div className="jso-ambient-left" aria-hidden="true" />
      <div className="jso-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="jso-header">
        <div className="jso-title-group">
          <div className="jso-eyebrow">
            <span>SAP Commercial Architecture • Joule Studio Strategy</span>
          </div>
          <h1 className="jso-main-title">Joule Studio Pricing and Packaging Objectives</h1>
          <p className="jso-main-subtitle">
            Core commercial pillars engineered to eliminate developer friction, unify toolchains, and enable seamless consumption growth.
          </p>
        </div>

        <div className="jso-header-actions">
          <div className="jso-badge-pill">
            <span>🎯 Strategic Blueprint 2026</span>
          </div>
          <button
            type="button"
            className="jso-flip-all-btn"
            onClick={toggleAllFlips}
            title="Toggle between header overview and full details for all cards"
          >
            <span>{allFlipped ? '⤺ Show All Headers' : '🔄 Flip All for Details'}</span>
          </button>
          <button
            type="button"
            className="jso-badge-btn"
            onClick={() => setIsZoomed(true)}
            title="View original slide visual specification"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Master 3-Pillars Interactive Flip Cards Stage */}
      <main className="jso-stage">
        <div className="jso-hint-ribbon">
          <span className="jso-hint-text">
            💡 Showing pillar headers. <strong>Click any card</strong> to flip and reveal strategic details &amp; commercial mechanics.
          </span>
        </div>

        <div className="jso-pillars-grid">
          {/* ================= PILLAR 1: LOW BARRIER TO ENTRY ================= */}
          <div
            className={`jso-flip-card pillar-entry ${flippedCards[0] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip(0)
              }
            }}
            aria-label="Pillar 1: Low barrier to entry flip card"
          >
            <div className="jso-flip-inner">
              {/* FRONT FACE: HEADER VIEW */}
              <article className="jso-card-face jso-card-front">
                <div className="jso-front-header">
                  <div className="jso-header-left">
                    <div className="jso-header-icon-wrap" aria-hidden="true">
                      {/* User Target / Verified Checkmark Icon */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="10" r="3" />
                        <path d="M7 18.5c1.4-1.8 3.1-2.5 5-2.5s3.6.7 5 2.5" />
                        <path d="M16 4l2 2 4-4" stroke="#86efac" strokeWidth="2.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="jso-face-eyebrow">Strategic Objective</span>
                      <h2 className="jso-card-title">Low barrier to entry</h2>
                    </div>
                  </div>
                  <span className="jso-step-badge">Pillar 01</span>
                </div>

                <div className="jso-front-body">
                  <div className="jso-front-summary-card">
                    <span className="jso-front-summary-label">Key Executive Header</span>
                    <p className="jso-front-summary-text">
                      <strong>Get started more easily</strong> with free access to Joule Work and developer tooling, eliminating upfront procurement friction for rapid experimentation.
                    </p>
                  </div>

                  <div className="jso-front-highlights">
                    <div className="jso-front-chip">
                      <span className="icon">⚡</span>
                      <span>Zero Upfront Cost</span>
                    </div>
                    <div className="jso-front-chip">
                      <span className="icon">🛠️</span>
                      <span>Tooling Included</span>
                    </div>
                    <div className="jso-front-chip">
                      <span className="icon">🧪</span>
                      <span>Instant PoC</span>
                    </div>
                  </div>
                </div>

                <div className="jso-front-cta">
                  <span>Click to reveal details &amp; strategy</span>
                  <span className="jso-cta-icon">↻</span>
                </div>
              </article>

              {/* BACK FACE: DEEP STRATEGIC DETAILS */}
              <article className="jso-card-face jso-card-back">
                <div className="jso-back-header">
                  <div className="jso-back-header-left">
                    <span className="jso-step-badge mini">Pillar 01</span>
                    <h3 className="jso-back-title">Low barrier to entry</h3>
                  </div>
                  <span className="jso-back-tag">Details</span>
                </div>

                <div className="jso-back-body">
                  <p className="jso-lead-statement">
                    <strong>Get started more easily</strong> with free access to Joule Work and developer tooling, reducing upfront friction for development and experimentation.
                  </p>

                  <ul className="jso-feature-list">
                    <li className="jso-feature-item">
                      <span className="jso-bullet-dot" />
                      <span className="jso-feature-item-text">
                        <strong>Zero Upfront Cost:</strong> Immediate design-time access without commitment or complex procurement cycles.
                      </span>
                    </li>
                    <li className="jso-feature-item">
                      <span className="jso-bullet-dot" />
                      <span className="jso-feature-item-text">
                        <strong>Developer Tooling Included:</strong> Full access to prompt engineering, agent chaining, and sandbox test harnesses.
                      </span>
                    </li>
                    <li className="jso-feature-item">
                      <span className="jso-bullet-dot" />
                      <span className="jso-feature-item-text">
                        <strong>Rapid Proof-of-Concept:</strong> Accelerated exploration of enterprise use cases with zero licensing friction.
                      </span>
                    </li>
                  </ul>

                  <div className="jso-card-bottom">
                    <div className="jso-takeaway-chip">
                      <span>🚀</span>
                      <span>Frictionless Developer Onboarding &amp; Experimentation</span>
                    </div>
                  </div>
                </div>

                <div className="jso-back-return-bar">
                  <span className="jso-back-return-btn">⤺ Flip to Header</span>
                </div>
              </article>
            </div>
          </div>

          {/* ================= PILLAR 2: SIMPLER PACKAGING ================= */}
          <div
            className={`jso-flip-card pillar-packaging ${flippedCards[1] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(1)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip(1)
              }
            }}
            aria-label="Pillar 2: Simpler Packaging flip card"
          >
            <div className="jso-flip-inner">
              {/* FRONT FACE: HEADER VIEW */}
              <article className="jso-card-face jso-card-front">
                <div className="jso-front-header">
                  <div className="jso-header-left">
                    <div className="jso-header-icon-wrap" aria-hidden="true">
                      {/* Modular 3D Cube / Package Icon */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    </div>
                    <div>
                      <span className="jso-face-eyebrow">Strategic Objective</span>
                      <h2 className="jso-card-title">Simpler Packaging</h2>
                    </div>
                  </div>
                  <span className="jso-step-badge">Pillar 02</span>
                </div>

                <div className="jso-front-body">
                  <div className="jso-front-summary-card">
                    <span className="jso-front-summary-label">Key Executive Header</span>
                    <p className="jso-front-summary-text">
                      <strong>Clearer build-to-run model</strong> with free design-time access and a separate managed runtime layer, consolidating toolchains into 1 unified platform.
                    </p>
                  </div>

                  <div className="jso-front-highlights">
                    <div className="jso-front-chip">
                      <span className="icon">🔄</span>
                      <span>Build vs. Run Decoupled</span>
                    </div>
                    <div className="jso-front-chip">
                      <span className="icon">📦</span>
                      <span>Tool Consolidation</span>
                    </div>
                    <div className="jso-front-chip">
                      <span className="icon">🛡️</span>
                      <span>Enterprise Governance</span>
                    </div>
                  </div>
                </div>

                <div className="jso-front-cta">
                  <span>Click to reveal details &amp; strategy</span>
                  <span className="jso-cta-icon">↻</span>
                </div>
              </article>

              {/* BACK FACE: DEEP STRATEGIC DETAILS */}
              <article className="jso-card-face jso-card-back">
                <div className="jso-back-header">
                  <div className="jso-back-header-left">
                    <span className="jso-step-badge mini">Pillar 02</span>
                    <h3 className="jso-back-title">Simpler Packaging</h3>
                  </div>
                  <span className="jso-back-tag">Details</span>
                </div>

                <div className="jso-back-body">
                  <p className="jso-lead-statement">
                    <strong>Clearer build-to-run model</strong> with free design-time access and a separate managed runtime layer, accelerating adoption, consolidating tools, and advancing agent innovation.
                  </p>

                  <ul className="jso-feature-list">
                    <li className="jso-feature-item">
                      <span className="jso-bullet-dot" />
                      <span className="jso-feature-item-text">
                        <strong>Decoupled Build vs. Run:</strong> Distinct boundaries between free design workspaces and managed production runtimes.
                      </span>
                    </li>
                    <li className="jso-feature-item">
                      <span className="jso-bullet-dot" />
                      <span className="jso-feature-item-text">
                        <strong>Tool Consolidation:</strong> Eliminates SKU fragmentation across prompt studios, workflows, and agent engines.
                      </span>
                    </li>
                    <li className="jso-feature-item">
                      <span className="jso-bullet-dot" />
                      <span className="jso-feature-item-text">
                        <strong>Enterprise Governance:</strong> Centralized compliance, security, and audit trails baked into the managed platform.
                      </span>
                    </li>
                  </ul>

                  <div className="jso-card-bottom">
                    <div className="jso-takeaway-chip">
                      <span>📦</span>
                      <span>1 Unified Managed Agent Architecture</span>
                    </div>
                  </div>
                </div>

                <div className="jso-back-return-bar">
                  <span className="jso-back-return-btn">⤺ Flip to Header</span>
                </div>
              </article>
            </div>
          </div>

          {/* ================= PILLAR 3: FLEXIBLE GROWTH PATH ================= */}
          <div
            className={`jso-flip-card pillar-growth ${flippedCards[2] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(2)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip(2)
              }
            }}
            aria-label="Pillar 3: Flexible Growth Path flip card"
          >
            <div className="jso-flip-inner">
              {/* FRONT FACE: HEADER VIEW */}
              <article className="jso-card-face jso-card-front">
                <div className="jso-front-header">
                  <div className="jso-header-left">
                    <div className="jso-header-icon-wrap" aria-hidden="true">
                      {/* Expanding Diagonal Scaling / Growth Icon */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </div>
                    <div>
                      <span className="jso-face-eyebrow">Strategic Objective</span>
                      <h2 className="jso-card-title">Flexible Growth Path</h2>
                    </div>
                  </div>
                  <span className="jso-step-badge">Pillar 03</span>
                </div>

                <div className="jso-front-body">
                  <div className="jso-front-summary-card">
                    <span className="jso-front-summary-label">Key Executive Header</span>
                    <p className="jso-front-summary-text">
                      <strong>Scale into production as needed</strong> with Joule Studio runtime consumption aligned to usage across apps, workflows, and multi-agent scenarios.
                    </p>
                  </div>

                  <div className="jso-front-highlights">
                    <div className="jso-front-chip">
                      <span className="icon">📈</span>
                      <span>Usage-Aligned Metering</span>
                    </div>
                    <div className="jso-front-chip">
                      <span className="icon">🤖</span>
                      <span>Multi-Scenario Evolution</span>
                    </div>
                    <div className="jso-front-chip">
                      <span className="icon">☁️</span>
                      <span>Elastic Cloud Scale</span>
                    </div>
                  </div>
                </div>

                <div className="jso-front-cta">
                  <span>Click to reveal details &amp; strategy</span>
                  <span className="jso-cta-icon">↻</span>
                </div>
              </article>

              {/* BACK FACE: DEEP STRATEGIC DETAILS */}
              <article className="jso-card-face jso-card-back">
                <div className="jso-back-header">
                  <div className="jso-back-header-left">
                    <span className="jso-step-badge mini">Pillar 03</span>
                    <h3 className="jso-back-title">Flexible Growth Path</h3>
                  </div>
                  <span className="jso-back-tag">Details</span>
                </div>

                <div className="jso-back-body">
                  <p className="jso-lead-statement">
                    <strong>Scale into production as needed</strong> with Joule Studio runtime consumption aligned to usage, supporting apps, workflows, and agent scenarios over time.
                  </p>

                  <ul className="jso-feature-list">
                    <li className="jso-feature-item">
                      <span className="jso-bullet-dot" />
                      <span className="jso-feature-item-text">
                        <strong>Usage-Aligned Economics:</strong> Runtime consumption directly metered via AI Units based on real business executions.
                      </span>
                    </li>
                    <li className="jso-feature-item">
                      <span className="jso-bullet-dot" />
                      <span className="jso-feature-item-text">
                        <strong>Multi-Scenario Evolution:</strong> Effortlessly expands from simple tasks to autonomous multi-agent orchestration.
                      </span>
                    </li>
                    <li className="jso-feature-item">
                      <span className="jso-bullet-dot" />
                      <span className="jso-feature-item-text">
                        <strong>Elastic Enterprise Scale:</strong> Built-in auto-scaling, high availability, and SAP enterprise SLA backing.
                      </span>
                    </li>
                  </ul>

                  <div className="jso-card-bottom">
                    <div className="jso-takeaway-chip">
                      <span>📈</span>
                      <span>Pay-as-You-Scale Enterprise Value</span>
                    </div>
                  </div>
                </div>

                <div className="jso-back-return-bar">
                  <span className="jso-back-return-btn">⤺ Flip to Header</span>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Executive Synthesis Ribbon */}
        <div className="jso-synthesis-bar" aria-label="Commercial Synthesis">
          <div className="jso-synthesis-left">
            <span className="jso-synthesis-badge">Executive Takeaway</span>
            <p className="jso-synthesis-text">
              <strong>TCO Alignment:</strong> Eliminates upfront adoption friction with free developer tooling, while providing transparent, predictable usage-based runtime scaling as agentic workloads mature into production.
            </p>
          </div>
          <div className="jso-flow-steps">
            <span className="jso-flow-step active-1">1. Free Design-Time</span>
            <span className="jso-flow-arrow">➔</span>
            <span className="jso-flow-step active-2">2. Unified Tooling</span>
            <span className="jso-flow-arrow">➔</span>
            <span className="jso-flow-step active-3">3. Metered Runtime</span>
          </div>
        </div>
      </main>

      {/* Footer Navigation Bar */}
      <footer className="jso-footer">
        <button
          type="button"
          className="jso-nav-btn"
          onClick={goToJouleStudio}
          aria-label="Return to Joule Studio Managed Platform"
        >
          <span>‹</span>
          <span>Joule Studio Platform</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="jso-nav-btn primary"
          onClick={goToCommercials}
          aria-label="Proceed to Joule Studio Commercial Model"
        >
          <span>Commercial Model</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="jso-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="jso-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="jso-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={originalSpec}
              alt="Original Joule Studio Pricing and Packaging Objectives Specification"
              className="jso-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
