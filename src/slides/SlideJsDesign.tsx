import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/js_design_spec.png'
import '../styles/jsDesign.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideJsDesign({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  // Track flip state for:
  // 0: Included design-time tooling
  // 1: AI-based capabilities subject to fair-use limits
  // 2: Consumption & Monetization Ladder
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

  const goToCommercialModel = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/Joule_Studio_Commercials'
    }
  }

  const goToRuntimePricing = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/JouleS_runtime'
    }
  }

  const allFlipped = Object.values(flippedCards).every((val) => val)

  return (
    <div className="jsd-container">
      {/* Ambient background glows */}
      <div className="jsd-ambient-left" aria-hidden="true" />
      <div className="jsd-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="jsd-header">
        <div className="jsd-title-group">
          <div className="jsd-eyebrow">
            <span>SAP Commercial Architecture • Developer Entitlements</span>
          </div>
          <h1 className="jsd-main-title">Joule Studio - Design-time Tooling</h1>
          <p className="jsd-main-subtitle">
            Core developer tooling, frontier AI model access, and fair-use consumption thresholds.
          </p>
        </div>

        <div className="jsd-header-actions">
          <div className="jsd-badge-pill">
            <span>⚡ 95 Runtime Tokens Included</span>
          </div>
          <button
            type="button"
            className="jsd-flip-all-btn"
            onClick={toggleAllFlips}
            title="Toggle between header view and full details for all cards"
          >
            <span>{allFlipped ? '⤺ Show All Headers' : '🔄 Flip All for Details'}</span>
          </button>
          <button
            type="button"
            className="jsd-badge-btn"
            onClick={() => setIsZoomed(true)}
            title="View original slide visual specification"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Main 2-Column Stage with Flip Capabilities */}
      <main className="jsd-stage">
        <div className="jsd-hint-ribbon">
          <span className="jsd-hint-text">
            💡 Compact card view. <strong>Click any card</strong> to flip between high-level overview and full itemized scope.
          </span>
        </div>

        <div className="jsd-columns-grid">
          {/* ================= LEFT COLUMN: 2 CAPABILITY CARDS ================= */}
          <div className="jsd-left-col">
            {/* Card 1: Included design-time tooling */}
            <div
              className={`jsd-flip-card card-included ${flippedCards[0] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(0)
                }
              }}
              aria-label="Included design-time tooling flip card"
            >
              <div className="jsd-flip-inner">
                {/* FRONT FACE: COMPACT HEADER VIEW */}
                <article className="jsd-card-face jsd-card-front card-included">
                  <header className="jsd-card-header-bar">
                    <div className="jsd-card-header-left">
                      <div className="jsd-card-header-icon" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      </div>
                      <h2 className="jsd-card-title">Included design-time tooling</h2>
                    </div>
                    <span className="jsd-card-badge">Base Entitlement</span>
                  </header>

                  <div className="jsd-front-body">
                    <p className="jsd-front-summary">
                      <strong>Full authoring suite:</strong> Joule Work unified workspace, Web/CLI/SDK code editors, agent builder, n8n workflows, knowledge graph &amp; AI Agent Hub.
                    </p>
                    <div className="jsd-front-tags">
                      <span className="jsd-tag-pill">🖥️ Joule Work</span>
                      <span className="jsd-tag-pill">🛠️ Code Editor &amp; CLI</span>
                      <span className="jsd-tag-pill">🤖 Agent Builder</span>
                      <span className="jsd-tag-pill">🔄 n8n Designer</span>
                      <span className="jsd-tag-pill">🌐 Knowledge Graph</span>
                    </div>
                  </div>

                  <div className="jsd-front-cta">
                    <span>Click to reveal 6 included tooling capabilities</span>
                    <span className="jsd-cta-icon">↻</span>
                  </div>
                </article>

                {/* BACK FACE: FULL ITEMIZED SCOPE */}
                <article className="jsd-card-face jsd-card-back card-included">
                  <header className="jsd-card-header-bar back">
                    <div className="jsd-card-header-left">
                      <span className="jsd-back-pill">Included</span>
                      <h3 className="jsd-back-title">Included design-time tooling</h3>
                    </div>
                    <span className="jsd-card-badge">6 Capabilities</span>
                  </header>

                  <div className="jsd-card-body">
                    <ul className="jsd-feature-list">
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>Joule Studio experience / Joule Work</strong> unified workspace</span>
                      </li>
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>Embedded developer workspace and code editor</strong> (Web UI, CLI &amp; SDK)</span>
                      </li>
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>Agent builder</strong> for multi-agent synthesis &amp; custom skills</span>
                      </li>
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>n8n designer</strong> for visual workflows, event triggers &amp; notifications</span>
                      </li>
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>SAP Knowledge Graph</strong> with business context &amp; semantic grounding</span>
                      </li>
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>SAP AI Agent Hub provisioned</strong> for customers without LeanIX</span>
                      </li>
                    </ul>
                  </div>

                  <div className="jsd-back-return-bar">
                    <span className="jsd-back-return-btn">⤺ Flip to Header</span>
                  </div>
                </article>
              </div>
            </div>

            {/* Card 2: AI-based capabilities subject to fair-use limits */}
            <div
              className={`jsd-flip-card card-fairuse ${flippedCards[1] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(1)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(1)
                }
              }}
              aria-label="AI-based capabilities subject to fair-use limits flip card"
            >
              <div className="jsd-flip-inner">
                {/* FRONT FACE: COMPACT HEADER VIEW */}
                <article className="jsd-card-face jsd-card-front card-fairuse">
                  <header className="jsd-card-header-bar">
                    <div className="jsd-card-header-left">
                      <div className="jsd-card-header-icon" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                      </div>
                      <h2 className="jsd-card-title">AI-based capabilities subject to fair-use limits</h2>
                    </div>
                    <span className="jsd-card-badge">Metered Tier</span>
                  </header>

                  <div className="jsd-front-body">
                    <p className="jsd-front-summary">
                      <strong>AI capabilities under fair-use:</strong> Domain Model abstractions, frontier LLM endpoints, Vercel app deployment, agent evaluation benchmarks, and Data Product queries.
                    </p>
                    <div className="jsd-front-tags">
                      <span className="jsd-tag-pill">🧠 Domain Model</span>
                      <span className="jsd-tag-pill">⚡ Frontier LLMs</span>
                      <span className="jsd-tag-pill">▲ Vercel Hosting</span>
                      <span className="jsd-tag-pill">🧪 Synthetic Eval</span>
                      <span className="jsd-tag-pill">📊 DP Query &amp; FOS</span>
                    </div>
                  </div>

                  <div className="jsd-front-cta">
                    <span>Click to reveal metered capabilities breakdown</span>
                    <span className="jsd-cta-icon">↻</span>
                  </div>
                </article>

                {/* BACK FACE: FULL ITEMIZED SCOPE */}
                <article className="jsd-card-face jsd-card-back card-fairuse">
                  <header className="jsd-card-header-bar back">
                    <div className="jsd-card-header-left">
                      <span className="jsd-back-pill fairuse">Metered</span>
                      <h3 className="jsd-back-title">AI-based capabilities subject to fair-use</h3>
                    </div>
                    <span className="jsd-card-badge">5 Capabilities</span>
                  </header>

                  <div className="jsd-card-body">
                    <ul className="jsd-feature-list">
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>SAP Domain Model:</strong> Deep enterprise object abstractions &amp; schema models</span>
                      </li>
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>Frontier LLM access:</strong> Multimodal foundational model endpoints</span>
                      </li>
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>Vercel usage:</strong> Rapid modern web application hosting &amp; deployment</span>
                      </li>
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>Agent evaluation:</strong> Automated accuracy benchmark &amp; synthetic testing</span>
                      </li>
                      <li className="jsd-feature-item">
                        <span className="jsd-bullet-dot" />
                        <span><strong>DP Query / embedded FOS:</strong> Token consumption for Data Products &amp; Foundation Ontology</span>
                      </li>
                    </ul>
                  </div>

                  <div className="jsd-back-return-bar">
                    <span className="jsd-back-return-btn">⤺ Flip to Header</span>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONSUMPTION & MONETIZATION LADDER ================= */}
          <div className="jsd-right-col">
            <div
              className={`jsd-flip-card jsd-ladder-card ${flippedCards[2] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(2)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(2)
                }
              }}
              aria-label="Consumption and monetization ladder flip card"
            >
              <div className="jsd-flip-inner">
                {/* FRONT FACE: VISUAL GROWTH LADDER */}
                <article className="jsd-card-face jsd-card-front jsd-ladder-face">
                  <div className="jsd-ladder-wrapper">
                    {/* Upward Growth Arrow Background Indicator */}
                    <div className="jsd-arrow-track" aria-hidden="true">
                      <div className="jsd-arrow-head" />
                    </div>

                    {/* Tier 1: Additional consumption monetized beyond fair-use limits */}
                    <div className="jsd-ladder-tier-top">
                      <h3 className="jsd-tier-top-title">
                        Additional consumption monetized beyond fair-use limits
                      </h3>
                      <p className="jsd-tier-top-desc">
                        Selected AI-based capabilities beyond fair-use limits
                      </p>
                      <div className="jsd-tier-top-pill">
                        <span>⚡ Overage Metered via AI Units</span>
                      </div>
                    </div>

                    {/* Threshold Boundary Divider */}
                    <div className="jsd-threshold-divider" aria-label="Fair-use threshold boundary">
                      <div className="jsd-threshold-line" />
                      <span className="jsd-threshold-badge">
                        ▲ Fair-Use Limit Threshold (95 Tokens / Dev / Mo) ▲
                      </span>
                    </div>

                    {/* Tier 2: Standard design-time capabilities included up to fair-use limits */}
                    <div className="jsd-ladder-tier-mid">
                      <h3 className="jsd-tier-mid-title">
                        Standard design-time capabilities included up to fair-use limits
                      </h3>
                      <p className="jsd-tier-mid-desc">
                        Selected AI-based capabilities are subject to defined fair-use limits of up to{' '}
                        <strong>95 Joule Studio runtime Tokens</strong> per developer per month
                      </p>
                    </div>

                    {/* Base Entry Pill */}
                    <div className="jsd-ladder-base-pill">
                      <p className="jsd-base-pill-text">
                        🎉 Free access via Joule Work*
                      </p>
                    </div>
                  </div>

                  <div className="jsd-front-cta ladder-cta">
                    <span>Click to inspect monetization terms &amp; policy</span>
                    <span className="jsd-cta-icon">↻</span>
                  </div>
                </article>

                {/* BACK FACE: MONETIZATION RULES & POLICY */}
                <article className="jsd-card-face jsd-card-back jsd-ladder-face">
                  <header className="jsd-card-header-bar back">
                    <div className="jsd-card-header-left">
                      <span className="jsd-back-pill ladder">Policy</span>
                      <h3 className="jsd-back-title">Fair-Use Threshold &amp; Monetization Rules</h3>
                    </div>
                    <span className="jsd-card-badge">Governance</span>
                  </header>

                  <div className="jsd-card-body ladder-back-body">
                    <div className="jsd-policy-block">
                      <div className="jsd-policy-title">⚡ 95 Tokens Quota Metric</div>
                      <p className="jsd-policy-desc">
                        Every developer workspace receives <strong>95 Joule Studio runtime Tokens</strong> per month for design-time prompt testing, tool calling, and agent validation at zero cost.
                      </p>
                    </div>

                    <div className="jsd-policy-block">
                      <div className="jsd-policy-title">📈 Automated AI Unit Transition</div>
                      <p className="jsd-policy-desc">
                        When experimentation exceeds the 95-token threshold, incremental consumption transitions seamlessly into metered <strong>AI Units</strong> without service disruption.
                      </p>
                    </div>

                    <div className="jsd-policy-block">
                      <div className="jsd-policy-title">🛡️ Tenant Safety &amp; Quota Guards</div>
                      <p className="jsd-policy-desc">
                        Administrators can set custom threshold alerts and soft caps within BTP Cockpit to prevent unexpected budget overruns during active prototyping sprints.
                      </p>
                    </div>
                  </div>

                  <div className="jsd-back-return-bar">
                    <span className="jsd-back-return-btn">⤺ Flip to Ladder</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <footer className="jsd-footnotes" aria-label="Footnotes">
          <span>
            *Uses existing Joule Base / AI Unit terms, plus an additional click-through for future fair-use enforcement.
          </span>
        </footer>
      </main>

      {/* Footer Navigation Bar */}
      <footer className="jsd-footer">
        <button
          type="button"
          className="jsd-nav-btn"
          onClick={goToCommercialModel}
          aria-label="Return to Joule Studio Commercial Model"
        >
          <span>‹</span>
          <span>Commercial Model</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="jsd-nav-btn primary"
          onClick={goToRuntimePricing}
          aria-label="Proceed to Joule Studio Runtime Pricing"
        >
          <span>Runtime Pricing</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="jsd-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="jsd-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="jsd-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={originalSpec}
              alt="Original Joule Studio - Design-time Tooling Specification"
              className="jsd-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
