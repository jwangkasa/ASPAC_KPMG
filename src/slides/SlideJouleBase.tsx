import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSlideSpec from '../assets/joule_base_ai_entitlement.png'
import '../styles/jouleBase.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideJouleBase({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [flipped1, setFlipped1] = useState(false)
  const [flipped2, setFlipped2] = useState(false)

  const toggleFlip1 = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setFlipped1((prev) => !prev)
  }

  const toggleFlip2 = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setFlipped2((prev) => !prev)
  }

  const flipBoth = () => {
    const shouldFlip = !(flipped1 && flipped2)
    setFlipped1(shouldFlip)
    setFlipped2(shouldFlip)
  }

  const goToCommercial = () => {
    window.location.hash = '#/Start_Grow_AI'
  }

  const goToNextSlide = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/Premium_AI'
    }
  }

  return (
    <div className="jb-container">
      {/* Header */}
      <header className="jb-header">
        <div className="jb-title-group">
          <div className="jb-eyebrow">
            <span>SAP AI Foundation • Commercial & Entitlement Scope</span>
          </div>
          <h1 className="jb-main-title">Base AI</h1>
          <p className="jb-main-subtitle">
            Included foundational AI — no AI Units required
          </p>
        </div>

        <div className="jb-header-actions">
          <div className="jb-badge-pill">
            <span>⚡ Zero AI Units Consumed</span>
          </div>
          <button
            type="button"
            className="jb-badge-btn"
            onClick={() => setIsZoomed(true)}
            title="View original specification visual"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Main Split: Central Bridge + Two Path Cards */}
      <main className="jb-main">
        {/* Central Connecting Ribbon */}
        <div className="jb-connector-bar">
          <div className="jb-connector-line" aria-hidden="true" />
          <div className="jb-connector-pill">
            <span>Accessed through two simple paths</span>
          </div>
          <button
            type="button"
            className="jb-flip-all-btn"
            onClick={flipBoth}
            title="Toggle details for both cards"
          >
            <span>{flipped1 && flipped2 ? '↺ Show Headers' : '↻ Flip to Details'}</span>
          </button>
        </div>

        {/* Two Symmetrical Executive Flip Cards */}
        <div className="jb-grid">
          {/* Card 1: Joule Basic Orchestration */}
          <div
            className="jb-flip-card-container"
            onClick={() => toggleFlip1()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip1()
              }
            }}
            aria-label="Joule Basic Orchestration card. Click to flip."
          >
            <div className={`jb-flip-card-inner ${flipped1 ? 'is-flipped' : ''}`}>
              {/* FRONT FACE: Header Only Mode */}
              <div className="jb-flip-card-face jb-flip-front orchestration">
                <div>
                  <div className="jb-card-header">
                    <div className="jb-card-icon-node" aria-hidden="true">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
                          fill="#ffffff"
                        />
                        <circle cx="12" cy="12" r="2.5" fill="#7dd3fc" />
                      </svg>
                    </div>

                    <div className="jb-card-title-group">
                      <span className="jb-card-tag">Path 1 • Conversational AI</span>
                      <h2 className="jb-card-title">Joule Basic Orchestration</h2>
                    </div>
                  </div>

                  {/* Front Overview Content */}
                  <div className="jb-front-overview">
                    <div className="jb-front-badge-row">
                      <span className="jb-front-status-badge">⚡ Included in Base • $0 SKU</span>
                      <span className="jb-front-status-badge outline">Web & Mobile</span>
                    </div>

                    <p className="jb-front-summary-p">
                      Foundational, <strong>conversational AI</strong> available across SAP applications; accessible across <strong>Joule Work web, mobile, and in-app</strong>.
                    </p>

                    <div className="jb-front-highlights-grid">
                      <div className="jb-highlight-item">
                        <span className="jb-highlight-icon">🌐</span>
                        <div>
                          <strong>Omnichannel Hub</strong>
                          <p>Web browser, iOS / Android, and embedded native navigation</p>
                        </div>
                      </div>
                      <div className="jb-highlight-item">
                        <span className="jb-highlight-icon">💎</span>
                        <div>
                          <strong>Universal Entitlement</strong>
                          <p>Accessible to all customers with or without AI Units via $0 SKU</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flip Action Bar */}
                <div className="jb-flip-cta-bar">
                  <div className="jb-flip-cta-btn">
                    <span>Click to flip for details</span>
                    <span className="jb-flip-cta-arrow">↻</span>
                  </div>
                  <span className="jb-flip-cta-hint">Entitlements • Capabilities • Scope</span>
                </div>
              </div>

              {/* BACK FACE: Details Mode */}
              <div className="jb-flip-card-face jb-flip-back orchestration">
                <div>
                  <div className="jb-card-header back-header">
                    <div className="jb-card-header-left">
                      <div className="jb-card-icon-node small" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
                            fill="#ffffff"
                          />
                        </svg>
                      </div>
                      <div className="jb-card-title-group">
                        <span className="jb-card-tag">Path 1 • Detailed Scope</span>
                        <h2 className="jb-card-title small">Joule Basic Orchestration</h2>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="jb-flip-return-btn"
                      onClick={(e) => toggleFlip1(e)}
                      title="Flip back to header"
                    >
                      <span>↺ Flip</span>
                    </button>
                  </div>

                  <div className="jb-sections-container">
                    {/* Section 1: What it is */}
                    <div className="jb-section-block">
                      <span className="jb-section-label">What it is</span>
                      <p className="jb-section-p">
                        Foundational, <strong>conversational AI</strong> available across SAP applications; accessible across <strong>Joule Work web, mobile, and in-app</strong>.
                      </p>
                    </div>

                    {/* Section 2: Entitlement & access */}
                    <div className="jb-section-block">
                      <span className="jb-section-label">Entitlement & access</span>
                      <ul className="jb-bullet-list">
                        <li className="jb-bullet-item">
                          <strong>Universal entitlement</strong> for Base AI across enterprise SAP landscapes.
                        </li>
                        <li className="jb-bullet-item">
                          Customers with an active <strong>AI Units SKU</strong> automatically have access to Joule Base.
                        </li>
                        <li className="jb-bullet-item">
                          Customers without an AI Units SKU can access Joule Base via a <strong>zero-dollar SKU</strong>.
                        </li>
                      </ul>
                    </div>

                    {/* Section 3: What it enables */}
                    <div className="jb-section-block">
                      <span className="jb-section-label">What it enables</span>
                      <ul className="jb-bullet-list">
                        <li className="jb-bullet-item">
                          Conversational assistance and orchestration across connected SAP applications.
                        </li>
                        <li className="jb-bullet-item">
                          Global navigation, enterprise information lookup, and contextual task guidance.
                        </li>
                        <li className="jb-bullet-item">
                          Simple, everyday productivity interactions embedded directly into user workflows.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom feature tags */}
                <div className="jb-card-pills-row">
                  <span className="jb-feature-pill">Web & Mobile</span>
                  <span className="jb-feature-pill">Cross-App Dispatching</span>
                  <span className="jb-feature-pill">$0 Zero-Dollar SKU</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Embedded AI */}
          <div
            className="jb-flip-card-container"
            onClick={() => toggleFlip2()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip2()
              }
            }}
            aria-label="Embedded AI card. Click to flip."
          >
            <div className={`jb-flip-card-inner ${flipped2 ? 'is-flipped' : ''}`}>
              {/* FRONT FACE: Header Only Mode */}
              <div className="jb-flip-card-face jb-flip-front embedded">
                <div>
                  <div className="jb-card-header">
                    <div className="jb-card-icon-node" aria-hidden="true">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
                          fill="#ffffff"
                        />
                        <path
                          d="M19 16L20 19L23 20L20 21L19 24L18 21L15 20L18 19L19 16Z"
                          fill="#c7d2fe"
                        />
                      </svg>
                    </div>

                    <div className="jb-card-title-group">
                      <span className="jb-card-tag">Path 2 • In-Context Intelligence</span>
                      <h2 className="jb-card-title">Embedded AI</h2>
                    </div>
                  </div>

                  {/* Front Overview Content */}
                  <div className="jb-front-overview">
                    <div className="jb-front-badge-row">
                      <span className="jb-front-status-badge purple">⚡ Included with Solution</span>
                      <span className="jb-front-status-badge outline purple">Zero Prompt Overhead</span>
                    </div>

                    <p className="jb-front-summary-p">
                      AI capabilities <strong>embedded directly into SAP applications</strong> without requiring separate standalone interaction windows.
                    </p>

                    <div className="jb-front-highlights-grid">
                      <div className="jb-highlight-item purple">
                        <span className="jb-highlight-icon">⚡</span>
                        <div>
                          <strong>Zero Click Overhead</strong>
                          <p>Field recommendations and intelligence presented directly in active transactions</p>
                        </div>
                      </div>
                      <div className="jb-highlight-item purple">
                        <span className="jb-highlight-icon">🎯</span>
                        <div>
                          <strong>Solution-Scoped</strong>
                          <p>Integrated natively into S/4HANA, SuccessFactors, Ariba, and CX clouds</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flip Action Bar */}
                <div className="jb-flip-cta-bar purple">
                  <div className="jb-flip-cta-btn purple">
                    <span>Click to flip for details</span>
                    <span className="jb-flip-cta-arrow">↻</span>
                  </div>
                  <span className="jb-flip-cta-hint">Subscriptions • Activations • In-Line Features</span>
                </div>
              </div>

              {/* BACK FACE: Details Mode */}
              <div className="jb-flip-card-face jb-flip-back embedded">
                <div>
                  <div className="jb-card-header back-header">
                    <div className="jb-card-header-left">
                      <div className="jb-card-icon-node small" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
                            fill="#ffffff"
                          />
                        </svg>
                      </div>
                      <div className="jb-card-title-group">
                        <span className="jb-card-tag">Path 2 • Detailed Scope</span>
                        <h2 className="jb-card-title small">Embedded AI</h2>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="jb-flip-return-btn"
                      onClick={(e) => toggleFlip2(e)}
                      title="Flip back to header"
                    >
                      <span>↺ Flip</span>
                    </button>
                  </div>

                  <div className="jb-sections-container">
                    {/* Section 1: What it is */}
                    <div className="jb-section-block">
                      <span className="jb-section-label">What it is</span>
                      <p className="jb-section-p">
                        AI capabilities <strong>embedded directly into SAP applications</strong> without requiring separate standalone interaction windows.
                      </p>
                    </div>

                    {/* Section 2: Entitlement & access */}
                    <div className="jb-section-block">
                      <span className="jb-section-label">Entitlement & access</span>
                      <ul className="jb-bullet-list">
                        <li className="jb-bullet-item">
                          Scoped and included within specific <strong>SAP cloud subscriptions</strong>.
                        </li>
                        <li className="jb-bullet-item">
                          Availability depends on the specific SAP solution (S/4HANA, SuccessFactors, Ariba, etc.).
                        </li>
                        <li className="jb-bullet-item">
                          Activated or accessed via standard system configuration or <strong>click-through enablement</strong> in the application.
                        </li>
                      </ul>
                    </div>

                    {/* Section 3: What it enables */}
                    <div className="jb-section-block">
                      <span className="jb-section-label">What it enables</span>
                      <ul className="jb-bullet-list">
                        <li className="jb-bullet-item">
                          AI-driven insights and field recommendations embedded inside business processes.
                        </li>
                        <li className="jb-bullet-item">
                          Intelligence delivered in-context, without separate user interaction or prompts.
                        </li>
                        <li className="jb-bullet-item">
                          Continuous productivity and quality improvements exactly where work happens.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom feature tags */}
                <div className="jb-card-pills-row">
                  <span className="jb-feature-pill">In-Line Recommendations</span>
                  <span className="jb-feature-pill">Zero Click Overhead</span>
                  <span className="jb-feature-pill">Solution-Scoped</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Executive Summary Strip */}
        <div className="jb-summary-strip">
          <div className="jb-summary-item">
            <span className="jb-summary-icon">🛡️</span>
            <span><strong>No Consumption Meters:</strong> 100% covered under base cloud contracts with no token limits on standard tasks.</span>
          </div>
          <div className="jb-summary-item">
            <span className="jb-summary-icon">⚡</span>
            <span><strong>Zero-Dollar SKU:</strong> Universal enablement path regardless of whether the customer has purchased AI Units.</span>
          </div>
          <div className="jb-summary-item">
            <span className="jb-summary-icon">🌐</span>
            <span><strong>Unified Surface:</strong> Synchronized across Joule Work desktop, browser, and mobile applications.</span>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="jb-footer">
        <button
          className="jb-nav-btn"
          onClick={onPrev || goToCommercial}
          aria-label="Return to Start & Grow with SAP AI"
        >
          ‹ Start & Grow with AI
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="jb-nav-btn primary"
          onClick={goToNextSlide}
          aria-label="Proceed to Premium AI"
        >
          Premium AI ›
        </button>
      </footer>

      {/* Lightbox Modal for Original Specification */}
      {isZoomed && (
        <div
          className="jb-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="jb-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="jb-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={originalSlideSpec}
              alt="Original Base AI Slide Specification"
              className="jb-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
