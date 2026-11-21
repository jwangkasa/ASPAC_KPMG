import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/joule_work_spec.png'
import '../styles/jouleWorkExplained.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideJouleWorkExplained({ onPrev, onNext }: Props) {
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

  const goToPrev = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/Migration_AI'
    }
  }

  const goToNext = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/sap_agentic_model'
    }
  }

  return (
    <div className="jw-container">
      {/* Ambient background glows */}
      <div className="jw-ambient-left" aria-hidden="true" />
      <div className="jw-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="jw-header">
        <div className="jw-title-group">
          <div className="jw-eyebrow">
            <span>SAP Unified AI Experience • Omnichannel Work Orchestration</span>
          </div>
          <h1 className="jw-main-title">Joule Work Explained</h1>
          <p className="jw-main-subtitle">
            One place to direct the business.
          </p>
        </div>

        <div className="jw-header-actions">
          <div className="jw-badge-pill">
            <span>⚡ SAP Managed Experience Layer</span>
          </div>
          <button
            type="button"
            className="jw-badge-btn"
            onClick={() => setIsZoomed(true)}
            title="View original Joule Work specification visual"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Main Orchestration & Experience Stage */}
      <main className="jw-stage">
        {/* ================= 4 CHANNELS / ACCESS SURFACES ================= */}
        <div className="jw-channels-section">
          <div className="jw-channels-label-row">
            <span className="jw-experience-badge">
              <span>Joule Work*</span>
              <span style={{ opacity: 0.7, fontWeight: 400 }}>|</span>
              <span style={{ textTransform: 'none', fontWeight: 500 }}>Your experience layer to direct assistants, get answers, and move work forward</span>
            </span>
            <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>4 Omnichannel Access Points</span>
          </div>

          <div className="jw-channels-grid">
            {/* Channel 1: Web Browser */}
            <div className="jw-channel-card">
              <div>
                <div className="jw-channel-top">
                  <div className="jw-channel-icon-box" aria-hidden="true">
                    {/* Browser Window Icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="16" rx="3" stroke="#0284c7" strokeWidth="2" />
                      <line x1="3" y1="9" x2="21" y2="9" stroke="#0284c7" strokeWidth="1.5" />
                      <circle cx="6" cy="6.5" r="1" fill="#0284c7" />
                      <circle cx="9" cy="6.5" r="1" fill="#0284c7" />
                      <circle cx="12" cy="6.5" r="1" fill="#0284c7" />
                    </svg>
                  </div>
                  <span className="jw-channel-name">Web Browser</span>
                </div>
                <p className="jw-channel-desc">
                  Standalone full-screen portal for enterprise search, analytics, and cross-application prompts.
                </p>
              </div>
              <div className="jw-channel-footer-tag">
                <span>Basic & Standard Agentic</span>
              </div>
            </div>

            {/* Channel 2: In-App */}
            <div className="jw-channel-card">
              <div>
                <div className="jw-channel-top">
                  <div className="jw-channel-icon-box" aria-hidden="true">
                    {/* In-App Fiori Side-by-Side Icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="16" rx="3" stroke="#2563eb" strokeWidth="2" />
                      <line x1="15" y1="4" x2="15" y2="20" stroke="#2563eb" strokeWidth="1.5" />
                      <path d="M18 10L19.5 12L18 14L16.5 12Z" fill="#3b82f6" />
                    </svg>
                  </div>
                  <span className="jw-channel-name">In-App</span>
                </div>
                <p className="jw-channel-desc">
                  Embedded side-by-side copilot directly inside S/4HANA, SuccessFactors, Ariba, and CX.
                </p>
              </div>
              <div className="jw-channel-footer-tag">
                <span>Native LoB Context</span>
              </div>
            </div>

            {/* Channel 3: Mobile App */}
            <div className="jw-channel-card">
              <div>
                <div className="jw-channel-top">
                  <div className="jw-channel-icon-box" aria-hidden="true">
                    {/* Smartphone Icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="6" y="3" width="12" height="18" rx="3" stroke="#4f46e5" strokeWidth="2" />
                      <line x1="10" y1="6" x2="14" y2="6" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="12" cy="17.5" r="1" fill="#4f46e5" />
                    </svg>
                  </div>
                  <span className="jw-channel-name">Mobile App</span>
                </div>
                <p className="jw-channel-desc">
                  On-the-go smartphone experience for instant approvals, voice queries, and proactive alerts.
                </p>
              </div>
              <div className="jw-channel-footer-tag">
                <span>iOS & Android</span>
              </div>
            </div>

            {/* Channel 4: Desktop App (Flagship) */}
            <div className="jw-channel-card desktop-flagship">
              <div>
                <div className="jw-channel-top">
                  <div className="jw-channel-icon-box" aria-hidden="true">
                    {/* Native Desktop Workstation Icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="13" rx="2.5" stroke="#7c3aed" strokeWidth="2" />
                      <path d="M8 20H16 M12 16V20" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="9.5" r="2.5" fill="#a855f7" />
                    </svg>
                  </div>
                  <span className="jw-channel-name" style={{ color: '#6d28d9' }}>Desktop App</span>
                </div>
                <p className="jw-channel-desc">
                  Native OS workspace for multi-turn workflows, hotkey invocation, and advanced reasoning.
                </p>
              </div>
              <div className="jw-channel-footer-tag" style={{ background: '#f3e8ff', borderColor: '#e9d5ff', color: '#6d28d9' }}>
                <span>✨ Standard & Advanced Modes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Central Connecting Ribbon with Flip All Toggle */}
        <div className="jw-connector-bar">
          <div className="jw-connector-line" aria-hidden="true" />
          <div className="jw-connector-pill">
            <span>Two Unified Orchestration Tiers</span>
          </div>
          <button
            type="button"
            className="jw-flip-all-btn"
            onClick={flipBoth}
            title="Toggle details for both cards"
          >
            <span>{flipped1 && flipped2 ? '↺ Show Headers' : '↻ Flip to Details'}</span>
          </button>
        </div>

        {/* ================= DUAL ORCHESTRATION 3D FLIP CARDS ================= */}
        <div className="jw-grid">
          {/* Card 1: Basic Orchestration */}
          <div
            className="jw-flip-card-container"
            onClick={() => toggleFlip1()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip1()
              }
            }}
            aria-label="Basic Orchestration tier card. Click to flip."
          >
            <div className={`jw-flip-card-inner ${flipped1 ? 'is-flipped' : ''}`}>
              {/* FRONT FACE: Header Mode */}
              <div className="jw-flip-card-face jw-flip-front basic">
                <div>
                  <div className="jw-card-header">
                    <div className="jw-card-icon-node" aria-hidden="true">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
                          fill="#ffffff"
                        />
                        <circle cx="12" cy="12" r="2.5" fill="#38bdf8" />
                      </svg>
                    </div>

                    <div className="jw-card-title-group">
                      <span className="jw-card-tag">Tier 1 • Conversational Assistant</span>
                      <h2 className="jw-card-title">Basic Orchestration</h2>
                    </div>
                  </div>

                  {/* Front Overview Content */}
                  <div className="jw-front-overview">
                    <div className="jw-front-badge-row">
                      <span className="jw-front-status-badge">⚡ Included in Base • $0 Cost</span>
                      <span className="jw-front-status-badge outline">Zero AI Units Consumed</span>
                    </div>

                    <p className="jw-front-summary-p">
                      Use Joule for <strong>predefined scenarios</strong>, navigational lookups, and direct SAP system guidance across connected landscapes.
                    </p>

                    <div className="jw-front-highlights-grid">
                      <div className="jw-highlight-item">
                        <span className="jw-highlight-icon">💬</span>
                        <div>
                          <strong>Predefined Scenarios</strong>
                          <p>Fixed conversational skills, answers, and transactional lookups</p>
                        </div>
                      </div>
                      <div className="jw-highlight-item">
                        <span className="jw-highlight-icon">💎</span>
                        <div>
                          <strong>Universal Entitlement</strong>
                          <p>Included with all SAP cloud subscriptions with zero metering overhead</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front Channels Footer + Flip Bar */}
                <div>
                  <div className="jw-front-channels-row">
                    <span className="jw-channel-mini-pill active">✓ Web Browser</span>
                    <span className="jw-channel-mini-pill active">✓ In-App</span>
                    <span className="jw-channel-mini-pill active">✓ Mobile</span>
                    <span className="jw-channel-mini-pill disabled">✕ Desktop App</span>
                  </div>

                  <div className="jw-flip-cta-bar">
                    <div className="jw-flip-cta-btn">
                      <span>Click to flip for details</span>
                      <span className="jw-flip-cta-arrow">↻</span>
                    </div>
                    <span className="jw-flip-cta-hint">Entitlements • Capabilities • Scope</span>
                  </div>
                </div>
              </div>

              {/* BACK FACE: Details Mode */}
              <div className="jw-flip-card-face jw-flip-back basic">
                <div>
                  <div className="jw-card-header back-header">
                    <div className="jw-card-header-left">
                      <div className="jw-card-icon-node small" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
                            fill="#ffffff"
                          />
                        </svg>
                      </div>
                      <div className="jw-card-title-group">
                        <span className="jw-card-tag">Tier 1 • Detailed Scope</span>
                        <h2 className="jw-card-title small">Basic Orchestration</h2>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="jw-flip-return-btn"
                      onClick={(e) => toggleFlip1(e)}
                      title="Flip back to header"
                    >
                      <span>↺ Flip</span>
                    </button>
                  </div>

                  <div className="jw-sections-container">
                    {/* Section 1: What it is */}
                    <div className="jw-section-block">
                      <span className="jw-section-label">What it is</span>
                      <p className="jw-section-p">
                        Foundational, <strong>conversational AI</strong> for predefined business queries and navigation without autonomous multi-agent chaining.
                      </p>
                    </div>

                    {/* Section 2: Entitlement & Pricing */}
                    <div className="jw-section-block">
                      <span className="jw-section-label">Entitlement & Pricing</span>
                      <ul className="jw-bullet-list">
                        <li className="jw-bullet-item">
                          <strong>Universal entitlement</strong>: Included at no additional cost for all SAP cloud enterprise subscribers.
                        </li>
                        <li className="jw-bullet-item">
                          <strong>Zero AI Units</strong>: Consumes 0 AI Units regardless of user volume or query frequency.
                        </li>
                        <li className="jw-bullet-item">
                          <strong>Zero-dollar SKU</strong>: Available to customers without AI Units via standard $0 provisioning SKU.
                        </li>
                      </ul>
                    </div>

                    {/* Section 3: What it enables */}
                    <div className="jw-section-block">
                      <span className="jw-section-label">What it enables</span>
                      <ul className="jw-bullet-list">
                        <li className="jw-bullet-item">
                          Pre-configured transactional and navigational assistance across S/4HANA, SuccessFactors, and CX.
                        </li>
                        <li className="jw-bullet-item">
                          In-context search, enterprise documentation lookup, and step-by-step business guidance.
                        </li>
                        <li className="jw-bullet-item">
                          Everyday productivity interactions embedded directly into active user workflows.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom feature tags */}
                <div className="jw-card-pills-row">
                  <span className="jw-feature-pill">$0 Base AI</span>
                  <span className="jw-feature-pill">Zero AI Units</span>
                  <span className="jw-feature-pill">Single-Turn</span>
                  <span className="jw-feature-pill">Web / In-App / Mobile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Agentic Orchestration** */}
          <div
            className="jw-flip-card-container"
            onClick={() => toggleFlip2()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip2()
              }
            }}
            aria-label="Agentic Orchestration tier card. Click to flip."
          >
            <div className={`jw-flip-card-inner ${flipped2 ? 'is-flipped' : ''}`}>
              {/* FRONT FACE: Header Mode */}
              <div className="jw-flip-card-face jw-flip-front agentic">
                <div>
                  <div className="jw-card-header">
                    <div className="jw-card-icon-node agentic" aria-hidden="true">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L14.5 8.5L21 9.5L16 14.5L17.5 21L12 17.5L6.5 21L8 14.5L3 9.5L9.5 8.5L12 2Z"
                          fill="#ffffff"
                        />
                        <circle cx="12" cy="12" r="2.5" fill="#c084fc" />
                      </svg>
                    </div>

                    <div className="jw-card-title-group">
                      <span className="jw-card-tag agentic">Tier 2 • Multi-Agent Autonomous Systems</span>
                      <h2 className="jw-card-title agentic">Agentic Orchestration**</h2>
                    </div>
                  </div>

                  {/* Front Overview Content */}
                  <div className="jw-front-overview">
                    <div className="jw-front-badge-row">
                      <span className="jw-front-status-badge purple">⚡ Consumes AI Units per Action</span>
                      <span className="jw-front-status-badge outline purple">Standard (0.02) · Advanced (0.05)</span>
                    </div>

                    <p className="jw-front-summary-p">
                      Use Joule for <strong>complex reasoning</strong>, multi-turn queries, tool execution, and invoking <strong>domain assistants and autonomous agents</strong>.
                    </p>

                    <div className="jw-front-highlights-grid">
                      <div className="jw-highlight-item purple">
                        <span className="jw-highlight-icon">🤖</span>
                        <div>
                          <strong>Domain Agent Delegation</strong>
                          <p>Coordinates finance, supply chain, HCM, and custom Joule Studio agents</p>
                        </div>
                      </div>
                      <div className="jw-highlight-item purple">
                        <span className="jw-highlight-icon">⚡</span>
                        <div>
                          <strong>Dual Reasoning Modes</strong>
                          <p>Standard Mode (0.02) across all apps; Advanced (0.05) on Desktop</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front Channels Footer + Flip Bar */}
                <div>
                  <div className="jw-front-channels-row">
                    <span className="jw-channel-mini-pill active-purple">✓ Web Browser</span>
                    <span className="jw-channel-mini-pill active-purple">✓ In-App</span>
                    <span className="jw-channel-mini-pill active-purple">✓ Mobile</span>
                    <span className="jw-channel-mini-pill active-purple" style={{ fontWeight: 800, borderColor: '#c084fc' }}>
                      ★ Desktop (Advanced Mode)
                    </span>
                  </div>

                  <div className="jw-flip-cta-bar purple">
                    <div className="jw-flip-cta-btn purple">
                      <span>Click to flip for details</span>
                      <span className="jw-flip-cta-arrow">↻</span>
                    </div>
                    <span className="jw-flip-cta-hint">Reasoning Modes • Consumption • Execution</span>
                  </div>
                </div>
              </div>

              {/* BACK FACE: Details Mode */}
              <div className="jw-flip-card-face jw-flip-back agentic">
                <div>
                  <div className="jw-card-header back-header">
                    <div className="jw-card-header-left">
                      <div className="jw-card-icon-node small agentic" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 2L14.5 8.5L21 9.5L16 14.5L17.5 21L12 17.5L6.5 21L8 14.5L3 9.5L9.5 8.5L12 2Z"
                            fill="#ffffff"
                          />
                        </svg>
                      </div>
                      <div className="jw-card-title-group">
                        <span className="jw-card-tag agentic">Tier 2 • Detailed Scope</span>
                        <h2 className="jw-card-title small agentic">Agentic Orchestration**</h2>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="jw-flip-return-btn"
                      onClick={(e) => toggleFlip2(e)}
                      title="Flip back to header"
                    >
                      <span>↺ Flip</span>
                    </button>
                  </div>

                  <div className="jw-sections-container">
                    {/* Section 1: What it is */}
                    <div className="jw-section-block">
                      <span className="jw-section-label agentic">What it is</span>
                      <p className="jw-section-p">
                        High-order orchestrator powered by <strong>advanced foundation models</strong> to plan, reason, and delegate complex tasks across specialized agents.
                      </p>
                    </div>

                    {/* Section 2: Commercial & Consumption */}
                    <div className="jw-section-block">
                      <span className="jw-section-label agentic">Commercial & Consumption</span>
                      <ul className="jw-bullet-list">
                        <li className="jw-bullet-item agentic">
                          <strong>Action-based metric</strong>: Consumes AI Units strictly per completed action; same rate as domain agents.
                        </li>
                        <li className="jw-bullet-item agentic">
                          <strong>Standard reasoning (0.02 AI Units)</strong>: Available across Web Browser, In-App, Mobile, and Desktop.
                        </li>
                        <li className="jw-bullet-item agentic">
                          <strong>Advanced reasoning (0.05 AI Units)</strong>: Deep multi-step reasoning, currently exclusive to Desktop App.
                        </li>
                      </ul>
                    </div>

                    {/* Section 3: What it enables */}
                    <div className="jw-section-block">
                      <span className="jw-section-label agentic">What it enables</span>
                      <ul className="jw-bullet-list">
                        <li className="jw-bullet-item agentic">
                          Cross-application problem solving across SAP S/4HANA, SuccessFactors, Ariba, and CX.
                        </li>
                        <li className="jw-bullet-item agentic">
                          Autonomous goal execution with human-in-the-loop approvals for sensitive transactions.
                        </li>
                        <li className="jw-bullet-item agentic">
                          Direct integration with enterprise agents built and customized in Joule Studio.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom feature tags */}
                <div className="jw-card-pills-row">
                  <span className="jw-feature-pill agentic">AI Units Metered</span>
                  <span className="jw-feature-pill agentic">Multi-Agent Routing</span>
                  <span className="jw-feature-pill agentic">0.02 / 0.05 Actions</span>
                  <span className="jw-feature-pill agentic">Desktop Flagship</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="jw-footnotes-container">
          <div className="jw-footnote">
            <strong>* Deployment Architecture:</strong> All new Joule Work deployments will be SAP Managed and existing customers will be migrated smoothly.
          </div>
          <div className="jw-footnote">
            <strong>** Reasoning Modes:</strong> Includes two reasoning modes — <em>Standard (0.02 AI Units)</em> and <em>Advanced (0.05 AI Units)</em>. The advanced reasoning mode (triggering advanced action pricing) is currently only available on Desktop App.
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="jw-footer">
        <button
          type="button"
          className="jw-nav-btn"
          onClick={goToPrev}
          aria-label="Return to Existing Customer Migration"
        >
          <span>‹</span>
          <span>Customer Migration</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="jw-nav-btn primary"
          onClick={goToNext}
          aria-label="Proceed to Agentic Commercial Model"
        >
          <span>Agentic Model</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="jw-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="jw-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="jw-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={originalSpec}
              alt="Original Joule Work Explained Slide Specification"
              className="jw-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
