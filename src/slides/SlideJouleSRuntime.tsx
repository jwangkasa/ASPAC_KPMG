import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import pricingTableSpec from '../assets/joules_runtime_pricing_spec.png'
import cardsSpec from '../assets/joules_runtime_cards_spec.png'
import '../styles/jouleSRuntime.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideJouleSRuntime({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [activeSpecTab, setActiveSpecTab] = useState<'table' | 'cards'>('table')
  
  // Track flip state for the 3 cards (index 0, 1, 2)
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

  const goToDesignTooling = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/JS_Design'
    }
  }

  const goToTshirtSizing = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/JouleS_Tshirt'
    }
  }

  return (
    <div className="jsr-container">
      {/* Ambient background glows */}
      <div className="jsr-ambient-left" aria-hidden="true" />
      <div className="jsr-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="jsr-header">
        <div className="jsr-title-group">
          <div className="jsr-eyebrow">
            <span>SAP Commercial Architecture • Runtime Pricing & Entitlements</span>
          </div>
          <h1 className="jsr-main-title">Joule Studio runtime Pricing</h1>
          <p className="jsr-main-subtitle">
            Transparent, benchmarked runtime metering aligned to hyperscalers and LLM provider list prices.
          </p>
        </div>

        <div className="jsr-header-actions">
          <button
            type="button"
            className="jsr-flip-all-btn"
            onClick={toggleAllFlips}
            title="Toggle front/back on all 3 entitlement cards"
          >
            <span>🔄 Flip All Cards</span>
          </button>
          <button
            type="button"
            className="jsr-spec-btn"
            onClick={() => setIsZoomed(true)}
            title="View original slide visual specifications"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Bottom-Aligned Main Stage (Principles, Pricing Table, and Entitlement Cards) */}
      <main className="jsr-main-stage">
        {/* Strategic Pricing Principles Strip */}
        <section className="jsr-principles-grid" aria-label="Core Pricing Principles">
        <div className="jsr-principle-card">
          <div className="jsr-principle-icon" aria-hidden="true">🌐</div>
          <div className="jsr-principle-body">
            <div className="jsr-principle-title">Market Parity</div>
            <p className="jsr-principle-desc">
              List prices are <strong>at par with competitors (hyperscalers)</strong> to drive frictionless enterprise adoption.
            </p>
          </div>
        </div>

        <div className="jsr-principle-card">
          <div className="jsr-principle-icon" aria-hidden="true">🤖</div>
          <div className="jsr-principle-body">
            <div className="jsr-principle-title">LLM Cost Pass-through</div>
            <p className="jsr-principle-desc">
              SAP AI token prices <strong>match LLM list prices</strong> (AI represents the largest percentage of Joule Studio cost).
            </p>
          </div>
        </div>

        <div className="jsr-principle-card">
          <div className="jsr-principle-icon" aria-hidden="true">⚙️</div>
          <div className="jsr-principle-body">
            <div className="jsr-principle-title">Workflow Parity</div>
            <p className="jsr-principle-desc">
              Workflow executions are <strong>at parity with n8n Enterprise pricing</strong>, reflecting a comparable feature set.
            </p>
          </div>
        </div>
      </section>

      {/* Redesigned Obvious & Digestible Pricing Table */}
      <section className="jsr-table-section" aria-label="Joule Studio Runtime Pricing Table">
        <div className="jsr-table-header-bar">
          <div className="jsr-table-title-wrap">
            <h2>Billed Features & Metering Matrix</h2>
            <span className="jsr-table-badge">Standard SAP List Price</span>
          </div>
          <span className="jsr-table-subnote">5 Core Metered Dimensions</span>
        </div>

        <div className="jsr-table-wrapper">
          <table className="jsr-pricing-table">
            <thead>
              <tr>
                <th style={{ width: '38%' }}>Billed Feature</th>
                <th style={{ width: '22%' }}>Consumption Metric</th>
                <th style={{ width: '22%' }}>SAP List Price</th>
                <th style={{ width: '18%' }}>SKU Availability</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: AI Tokens */}
              <tr className="active-sku">
                <td>
                  <div className="jsr-feature-col">
                    <div className="jsr-feature-icon icon-tokens" aria-hidden="true">🧠</div>
                    <div className="jsr-feature-text">
                      <span className="jsr-feature-name">Joule Studio runtime, AI tokens</span>
                      <span className="jsr-feature-desc">Frontier LLM completions, embeddings & multi-modal inferences</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="jsr-metric-pill">Token</span>
                </td>
                <td>
                  <div className="jsr-price-box">
                    <span className="jsr-price-val parity">**At parity with LLM providers</span>
                  </div>
                </td>
                <td>
                  <span className="jsr-status-pill active">
                    <span className="dot" /> Active at GA
                  </span>
                </td>
              </tr>

              {/* Row 2: Compute */}
              <tr className="active-sku">
                <td>
                  <div className="jsr-feature-col">
                    <div className="jsr-feature-icon icon-compute" aria-hidden="true">⚡</div>
                    <div className="jsr-feature-text">
                      <span className="jsr-feature-name">Joule Studio runtime, compute*</span>
                      <span className="jsr-feature-desc">Dedicated serverless micro-sandbox execution during active agent runs</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="jsr-metric-pill">Compute hour</span>
                </td>
                <td>
                  <div className="jsr-price-box">
                    <span className="jsr-price-val euro">€ 0.0128</span>
                    <span className="jsr-price-sub">/ hour</span>
                  </div>
                </td>
                <td>
                  <span className="jsr-status-pill active">
                    <span className="dot" /> Active at GA
                  </span>
                </td>
              </tr>

              {/* Row 3: Workflow Executions */}
              <tr>
                <td>
                  <div className="jsr-feature-col">
                    <div className="jsr-feature-icon icon-workflow" aria-hidden="true">🔄</div>
                    <div className="jsr-feature-text">
                      <span className="jsr-feature-name">Joule Studio runtime, workflow executions</span>
                      <span className="jsr-feature-desc">Automated multi-step agent toolchains & n8n workflow runs</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="jsr-metric-pill">Block of 1,000 Transactions</span>
                </td>
                <td>
                  <div className="jsr-price-box">
                    <span className="jsr-price-val euro">€ 19 - € 130</span>
                    <span className="jsr-price-sub">(tiered)</span>
                  </div>
                </td>
                <td>
                  <span className="jsr-status-pill planned">
                    <span className="dot" /> Active at Feature GA
                  </span>
                </td>
              </tr>

              {/* Row 4: Agent Memory */}
              <tr>
                <td>
                  <div className="jsr-feature-col">
                    <div className="jsr-feature-icon icon-memory" aria-hidden="true">💾</div>
                    <div className="jsr-feature-text">
                      <span className="jsr-feature-name">Joule Studio runtime, agent memory</span>
                      <span className="jsr-feature-desc">Stateful conversational context, working scratchpad & session cache</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="jsr-metric-pill">GB - hour</span>
                </td>
                <td>
                  <div className="jsr-price-box">
                    <span className="jsr-price-val euro">€ 0.0092</span>
                    <span className="jsr-price-sub">/ GB·hr</span>
                  </div>
                </td>
                <td>
                  <span className="jsr-status-pill planned">
                    <span className="dot" /> Active at Feature GA
                  </span>
                </td>
              </tr>

              {/* Row 5: Storage */}
              <tr>
                <td>
                  <div className="jsr-feature-col">
                    <div className="jsr-feature-icon icon-storage" aria-hidden="true">🗄️</div>
                    <div className="jsr-feature-text">
                      <span className="jsr-feature-name">Joule Studio runtime, storage</span>
                      <span className="jsr-feature-desc">Persistent vector indices, knowledge bases & telemetry archive</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="jsr-metric-pill">GB - hour</span>
                </td>
                <td>
                  <div className="jsr-price-box">
                    <span className="jsr-price-val euro">€ 0.0029</span>
                    <span className="jsr-price-sub">/ GB·hr</span>
                  </div>
                </td>
                <td>
                  <span className="jsr-status-pill planned">
                    <span className="dot" /> Active at Feature GA
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Notes */}
        <div className="jsr-table-notes-bar">
          <div className="jsr-table-note-item">
            <span className="bullet">✓</span>
            <span><strong>GA Active Scope:</strong> Only AI Tokens and compute will be active SKUs at General Availability (GA).</span>
          </div>
          <div className="jsr-table-note-item">
            <span className="bullet">⏳</span>
            <span><strong>Roadmap Expansion:</strong> Workflow executions, agent memory, and storage SKUs will become active as capabilities go GA within the product.</span>
          </div>
        </div>
      </section>

      {/* 3 Flip Cards Section */}
      <section className="jsr-cards-section" aria-label="Included Developer Entitlement Cards">
        <div className="jsr-cards-header-row">
          <h3 className="jsr-cards-section-title">
            <span>Included Developer Entitlements</span>
            <span className="tag">Free with Joule Work</span>
          </h3>
          <span className="jsr-cards-hint">💡 Click or tap any card to flip front / back details</span>
        </div>

        <div className="jsr-flip-grid">
          {/* Card 1: AI-based dev capabilities */}
          <div
            className={`jsr-flip-card ${flippedCards[0] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip(0)
              }
            }}
            aria-label="AI-based dev capabilities flip card"
          >
            <div className="jsr-flip-inner">
              {/* Front Face */}
              <div className="jsr-card-face jsr-card-front">
                <div className="jsr-card-topbar">
                  <div className="jsr-card-icon-bubble" aria-hidden="true">⚡</div>
                  <span className="jsr-included-badge">Included</span>
                </div>
                <h4 className="jsr-card-title">AI-based dev capabilities</h4>
                <div className="jsr-hero-kpi-wrap">
                  <div className="jsr-hero-kpi-number">95 Runtime Tokens</div>
                  <div className="jsr-hero-kpi-sub">per developer per month included</div>
                </div>
                <div className="jsr-card-flip-prompt">
                  <span className="jsr-flip-prompt-text">
                    <span>View quota details</span>
                    <span className="jsr-flip-hint-icon">↻</span>
                  </span>
                </div>
              </div>

              {/* Back Face */}
              <div className="jsr-card-face jsr-card-back">
                <div className="jsr-card-back-header">
                  <span className="jsr-card-back-title">AI-based dev capabilities</span>
                  <span className="jsr-back-tag">Entitlement Specs</span>
                </div>
                <ul className="jsr-card-bullets">
                  <li className="jsr-card-bullet-item">
                    <span className="chk">✓</span>
                    <span>Initial developer entitlement for <strong>AI-assisted design-time capabilities</strong></span>
                  </li>
                  <li className="jsr-card-bullet-item">
                    <span className="chk">✓</span>
                    <span><strong>95 Joule Studio runtime Tokens</strong> per developer per month</span>
                  </li>
                  <li className="jsr-card-bullet-item">
                    <span className="chk">✓</span>
                    <span>Additional usage beyond the initial entitlement is <strong>charged separately</strong></span>
                  </li>
                </ul>
                <div className="jsr-back-return-bar">
                  <span className="jsr-back-return-btn">⤺ Flip to front</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI Agent Hub */}
          <div
            className={`jsr-flip-card ${flippedCards[1] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(1)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip(1)
              }
            }}
            aria-label="AI Agent Hub flip card"
          >
            <div className="jsr-flip-inner">
              {/* Front Face */}
              <div className="jsr-card-face jsr-card-front">
                <div className="jsr-card-topbar">
                  <div className="jsr-card-icon-bubble" aria-hidden="true">🤖</div>
                  <span className="jsr-included-badge">Included</span>
                </div>
                <h4 className="jsr-card-title">AI Agent Hub</h4>
                <div className="jsr-hero-kpi-wrap">
                  <div className="jsr-hero-kpi-number">500 Agent Records</div>
                  <div className="jsr-hero-kpi-sub">managed inventory quota</div>
                </div>
                <div className="jsr-card-flip-prompt">
                  <span className="jsr-flip-prompt-text">
                    <span>View inventory & LeanIX details</span>
                    <span className="jsr-flip-hint-icon">↻</span>
                  </span>
                </div>
              </div>

              {/* Back Face */}
              <div className="jsr-card-face jsr-card-back">
                <div className="jsr-card-back-header">
                  <span className="jsr-card-back-title">AI Agent Hub</span>
                  <span className="jsr-back-tag">Governance Quota</span>
                </div>
                <ul className="jsr-card-bullets">
                  <li className="jsr-card-bullet-item">
                    <span className="chk">✓</span>
                    <span><strong>Access to AI Agent Hub</strong> capabilities across the landscape</span>
                  </li>
                  <li className="jsr-card-bullet-item">
                    <span className="chk">✓</span>
                    <span>The <strong>500-agent quota</strong> applies to agent records managed in the inventory</span>
                  </li>
                  <li className="jsr-card-bullet-item">
                    <span className="chk">✓</span>
                    <span>Customers with <strong>LeanIX</strong> access the additional LeanIX-specific capabilities</span>
                  </li>
                </ul>
                <div className="jsr-back-return-bar">
                  <span className="jsr-back-return-btn">⤺ Flip to front</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: SAP Signavio */}
          <div
            className={`jsr-flip-card ${flippedCards[2] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(2)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleFlip(2)
              }
            }}
            aria-label="SAP Signavio flip card"
          >
            <div className="jsr-flip-inner">
              {/* Front Face */}
              <div className="jsr-card-face jsr-card-front">
                <div className="jsr-card-topbar">
                  <div className="jsr-card-icon-bubble" aria-hidden="true">📊</div>
                  <span className="jsr-included-badge">Included</span>
                </div>
                <h4 className="jsr-card-title">SAP Signavio</h4>
                <div className="jsr-hero-kpi-wrap">
                  <div className="jsr-hero-kpi-number">Modeler + 50 Collab Users</div>
                  <div className="jsr-hero-kpi-sub">+ 25,000 Process Intelligence records</div>
                </div>
                <div className="jsr-card-flip-prompt">
                  <span className="jsr-flip-prompt-text">
                    <span>View Signavio seat & quota details</span>
                    <span className="jsr-flip-hint-icon">↻</span>
                  </span>
                </div>
              </div>

              {/* Back Face */}
              <div className="jsr-card-face jsr-card-back">
                <div className="jsr-card-back-header">
                  <span className="jsr-card-back-title">SAP Signavio</span>
                  <span className="jsr-back-tag">Process Suite Quotas</span>
                </div>
                <ul className="jsr-card-bullets">
                  <li className="jsr-card-bullet-item">
                    <span className="chk">✓</span>
                    <span><strong>Process Modeler:</strong> 1 user, for administrative purposes only (no modeling)</span>
                  </li>
                  <li className="jsr-card-bullet-item">
                    <span className="chk">✓</span>
                    <span><strong>Collaboration Hub:</strong> 5 blocks of 10 users (50 total collaboration users)</span>
                  </li>
                  <li className="jsr-card-bullet-item">
                    <span className="chk">✓</span>
                    <span><strong>Process Intelligence:</strong> up to 25,000 process analysis records</span>
                  </li>
                </ul>
                <div className="jsr-back-return-bar">
                  <span className="jsr-back-return-btn">⤺ Flip to front</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer Navigation Bar */}
      <footer className="jsr-footer">
        <button
          type="button"
          className="jsr-nav-btn"
          onClick={goToDesignTooling}
          aria-label="Return to Joule Studio Design-time Tooling"
        >
          <span>‹</span>
          <span>Design Tooling</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="jsr-nav-btn primary"
          onClick={goToTshirtSizing}
          aria-label="Proceed to Agent T-Shirt Sizing"
        >
          <span>T-Shirt Sizing</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specifications */}
      {isZoomed && (
        <div
          className="jsr-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="jsr-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="jsr-modal-header">
              <div className="jsr-modal-tabs">
                <button
                  type="button"
                  className={`jsr-modal-tab-btn ${activeSpecTab === 'table' ? 'active' : ''}`}
                  onClick={() => setActiveSpecTab('table')}
                >
                  Table Spec (Pricing)
                </button>
                <button
                  type="button"
                  className={`jsr-modal-tab-btn ${activeSpecTab === 'cards' ? 'active' : ''}`}
                  onClick={() => setActiveSpecTab('cards')}
                >
                  Cards Spec (Included Entitlements)
                </button>
              </div>
              <button
                type="button"
                className="jsr-modal-close"
                onClick={() => setIsZoomed(false)}
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>
            <div className="jsr-modal-body">
              <img
                src={activeSpecTab === 'table' ? pricingTableSpec : cardsSpec}
                alt={activeSpecTab === 'table' ? 'Joule Studio runtime Pricing Spec' : 'Included Entitlements Spec'}
                className="jsr-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
