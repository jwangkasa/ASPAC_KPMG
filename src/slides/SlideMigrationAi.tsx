import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/migration_ai_spec.png'
import '../styles/migrationAi.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideMigrationAi({ onPrev, onNext }: Props) {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')
  const [isZoomed, setIsZoomed] = useState(false)
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
    const anyFlipped = Object.values(flippedCards).some((v) => v)
    setFlippedCards({
      0: !anyFlipped,
      1: !anyFlipped,
      2: !anyFlipped,
    })
  }

  const goToPrevSlide = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/Embedded_Premium'
    }
  }

  const goToNextSlide = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/Joule_Work_Explained'
    }
  }

  return (
    <div className="mai-container">
      {/* Ambient background glows */}
      <div className="mai-ambient-left" aria-hidden="true" />
      <div className="mai-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="mai-header">
        <div className="mai-title-group">
          <div className="mai-eyebrow">
            <span>SAP Commercial Architecture • Customer Migration & Policy Guidelines</span>
          </div>
          <h1 className="mai-main-title">
            What does this mean for existing AI unit customers? What should they do?
          </h1>
          <p className="mai-main-subtitle">
            Tailored action paths for existing SKU cohorts across contracts, terms acceptance, and agentic feature adoption.
          </p>
        </div>

        <div className="mai-header-actions">
          {/* View Mode Segmented Switcher */}
          <div className="mai-view-tabs" role="tablist" aria-label="View switcher">
            <button
              type="button"
              className={`mai-view-tab ${viewMode === 'cards' ? 'active' : ''}`}
              onClick={() => setViewMode('cards')}
              role="tab"
              aria-selected={viewMode === 'cards'}
            >
              🗂️ Cohort Action Cards
            </button>
            <button
              type="button"
              className={`mai-view-tab ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => setViewMode('table')}
              role="tab"
              aria-selected={viewMode === 'table'}
            >
              📊 Comparison Matrix
            </button>
          </div>

          {viewMode === 'cards' && (
            <button
              type="button"
              className="mai-flip-all-btn"
              onClick={toggleAllFlips}
              title="Toggle between action plan and entitlement details on all cards"
            >
              <span>🔄 Flip All Cards</span>
            </button>
          )}

          <button
            type="button"
            className="mai-spec-btn"
            onClick={() => setIsZoomed(true)}
            title="View original slide visual specification"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Main Content Stage: Primary View displays 3 Tall Bottom-Aligned Cards, Toggle displays Matrix Table */}
      {viewMode === 'cards' ? (
        <section className="mai-cards-section" aria-label="Customer Cohorts Action Cards">
          <div className="mai-flip-grid">
            {/* Card 1: PM 430 PUPM (SKU 8019164) */}
            <div
              className={`mai-flip-card ${flippedCards[0] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(0)
                }
              }}
              aria-label="Existing Customer PM 430 PUPM SKU 8019164 action card"
            >
              <div className="mai-flip-inner">
                {/* Front Face: Core Message & Action Items (Matches Spec) */}
                <div className="mai-card-face mai-card-front">
                  <div className="mai-card-front-content">
                    <div>
                      <div className="mai-front-badge-row">
                        <span className="mai-sku-badge">SKU 8019164</span>
                        <span className="mai-status-pill status-green">✓ Grandfathered</span>
                      </div>
                      <div className="mai-front-header-banner">
                        <div className="mai-front-cohort-type">Existing Customer</div>
                        <div className="mai-front-plan-title">PM 430 PUPM</div>
                      </div>
                    </div>

                    <div className="mai-block-section">
                      <div className="mai-detail-label">🎯 Core message</div>
                      <div className="mai-core-message-box">
                        Autonomous Suite Assistants and Agents, Joule Work, Joule for Consultants, other consumption based premium AI features and expanded Base AI.
                      </div>
                    </div>

                    <div className="mai-block-section">
                      <div className="mai-detail-label">⚠️ What you need them to do</div>
                      <ul className="mai-actions-list">
                        <li className="mai-action-item">
                          <span className="bullet">✓</span>
                          <span><strong>Accept updated AI T&Cs</strong> to retain access to all AI capabilities.</span>
                        </li>
                        <li className="mai-action-item">
                          <span className="bullet">✓</span>
                          <span><strong>Begin activating agents</strong> and Joule Work and planning adoption roadmap.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mai-front-flip-cta">
                    <span>Show Entitlement Profile</span>
                    <span className="icon">↻</span>
                  </div>
                </div>

                {/* Back Face: Entitlement Summary & Profile */}
                <div className="mai-card-face mai-card-back">
                  <div className="mai-back-topbar">
                    <span className="mai-back-plan-name">PM 430 PUPM (SKU 8019164)</span>
                    <span className="mai-back-badge">Entitlements</span>
                  </div>

                  <div className="mai-back-summary-box">
                    <strong>Full Entitlement Profile:</strong> Retains all Autonomous Assistants, Agents, Joule Work, and Joule for Consultants with zero migration friction.
                  </div>

                  <div className="mai-back-checklist">
                    <div className="mai-back-check-item">
                      <span className="mai-back-check-icon">✓</span>
                      <span>Grandfathered contract terms across all premium AI services</span>
                    </div>
                    <div className="mai-back-check-item">
                      <span className="mai-back-check-icon">✓</span>
                      <span>Direct access to Joule for Consultants without SKU amendment</span>
                    </div>
                    <div className="mai-back-check-item">
                      <span className="mai-back-check-icon">✓</span>
                      <span>Seamless continuation under updated Autumn 2026 guidelines</span>
                    </div>
                  </div>

                  <div className="mai-back-return-bar">
                    <span className="mai-back-return-btn">⤺ Flip to Action Plan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: PM 430 Classic (SKU 8018592) */}
            <div
              className={`mai-flip-card ${flippedCards[1] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(1)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(1)
                }
              }}
              aria-label="Existing Customer PM 430 Classic SKU 8018592 action card"
            >
              <div className="mai-flip-inner">
                {/* Front Face: Core Message & Action Items (Matches Spec) */}
                <div className="mai-card-face mai-card-front">
                  <div className="mai-card-front-content">
                    <div>
                      <div className="mai-front-badge-row">
                        <span className="mai-sku-badge">SKU 8018592</span>
                        <span className="mai-status-pill status-blue">✓ Consumption Ready</span>
                      </div>
                      <div className="mai-front-header-banner">
                        <div className="mai-front-cohort-type">Existing Customer</div>
                        <div className="mai-front-plan-title">PM 430 Classic</div>
                      </div>
                    </div>

                    <div className="mai-block-section">
                      <div className="mai-detail-label">🎯 Core message</div>
                      <div className="mai-core-message-box">
                        Autonomous Suite Assistants and Agents, Joule Work, other consumption based premium AI features and expanded Base AI | <strong>no SKU switch needed</strong>.
                      </div>
                    </div>

                    <div className="mai-block-section">
                      <div className="mai-detail-label">⚠️ What you need them to do</div>
                      <ul className="mai-actions-list">
                        <li className="mai-action-item">
                          <span className="bullet">✓</span>
                          <span><strong>Accept updated AI T&Cs</strong> to retain access to all AI capabilities.</span>
                        </li>
                        <li className="mai-action-item">
                          <span className="bullet">✓</span>
                          <span><strong>Begin activating agents</strong> and Joule Work and planning adoption.</span>
                        </li>
                        <li className="mai-action-item">
                          <span className="bullet info">ℹ️</span>
                          <span><strong>Switch only if Joule for Consultants</strong> is required.*</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mai-front-flip-cta">
                    <span>Show Entitlement Profile</span>
                    <span className="icon">↻</span>
                  </div>
                </div>

                {/* Back Face: Entitlement Summary & Profile */}
                <div className="mai-card-face mai-card-back">
                  <div className="mai-back-topbar">
                    <span className="mai-back-plan-name">PM 430 Classic (SKU 8018592)</span>
                    <span className="mai-back-badge">Entitlements</span>
                  </div>

                  <div className="mai-back-summary-box">
                    <strong>Flexible Consumption Profile:</strong> Autonomous Assistants, Agents, Joule Work, and expanded Base AI. No SKU switch required unless Joule for Consultants is requested.
                  </div>

                  <div className="mai-back-checklist">
                    <div className="mai-back-check-item">
                      <span className="mai-back-check-icon">✓</span>
                      <span>Pay-as-you-go consumption metering active by default</span>
                    </div>
                    <div className="mai-back-check-item">
                      <span className="mai-back-check-icon">✓</span>
                      <span>Immediate access to Assistants, Agents, and Joule Work</span>
                    </div>
                    <div className="mai-back-check-item">
                      <span className="mai-back-check-icon">ℹ️</span>
                      <span>*Joule for Consultants requires Per-User Per-Month (PUPM) SKU 8019164</span>
                    </div>
                  </div>

                  <div className="mai-back-return-bar">
                    <span className="mai-back-return-btn">⤺ Flip to Action Plan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: PM 120 (SKU 8016532) */}
            <div
              className={`mai-flip-card ${flippedCards[2] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(2)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(2)
                }
              }}
              aria-label="Existing Customer PM 120 SKU 8016532 action card"
            >
              <div className="mai-flip-inner">
                {/* Front Face: Core Message & Action Items (Matches Spec) */}
                <div className="mai-card-face mai-card-front">
                  <div className="mai-card-front-content">
                    <div>
                      <div className="mai-front-badge-row">
                        <span className="mai-sku-badge">SKU 8016532</span>
                        <span className="mai-status-pill status-amber">⚠️ Upgrade Required</span>
                      </div>
                      <div
                        className="mai-front-header-banner"
                        style={{ background: 'linear-gradient(135deg, #4338ca 0%, #3730a3 100%)' }}
                      >
                        <div className="mai-front-cohort-type">Existing Customer</div>
                        <div className="mai-front-plan-title">PM 120 (Legacy)</div>
                      </div>
                    </div>

                    <div className="mai-block-section">
                      <div className="mai-detail-label">🎯 Core message</div>
                      <div className="mai-core-message-box">
                        Expanded Base AI – but to access AI assistants & agents and Joule Work, <strong>they need to switch to the new SKU</strong>.
                      </div>
                    </div>

                    <div className="mai-block-section">
                      <div className="mai-detail-label">⚠️ What you need them to do</div>
                      <ul className="mai-actions-list">
                        <li className="mai-action-item">
                          <span className="bullet">✓</span>
                          <span><strong>Accept updated AI T&Cs</strong> to retain access to base capabilities.</span>
                        </li>
                        <li className="mai-action-item">
                          <span className="bullet warn">⚡</span>
                          <span><strong>Switch to SKU 8019164</strong> to unlock the full value of assistants & agents and Joule Work.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mai-front-flip-cta">
                    <span>Show Entitlement Profile</span>
                    <span className="icon">↻</span>
                  </div>
                </div>

                {/* Back Face: Entitlement Summary & Profile */}
                <div className="mai-card-face mai-card-back">
                  <div className="mai-back-topbar">
                    <span className="mai-back-plan-name">PM 120 (SKU 8016532)</span>
                    <span className="mai-back-badge">Entitlements</span>
                  </div>

                  <div className="mai-back-summary-box">
                    <strong>Legacy Tier Profile:</strong> Receives expanded Base AI automatically, but requires SKU upgrade to access Assistants, Agents, and Joule Work.
                  </div>

                  <div className="mai-back-checklist">
                    <div className="mai-back-check-item">
                      <span className="mai-back-check-icon">✓</span>
                      <span>Expanded Base AI included under existing entitlement</span>
                    </div>
                    <div className="mai-back-check-item">
                      <span className="mai-back-check-icon">⚡</span>
                      <span>Requires upgrade to SKU 8019164 for Agentic capabilities</span>
                    </div>
                    <div className="mai-back-check-item">
                      <span className="mai-back-check-icon">⚡</span>
                      <span>Migration incentives available through Partner Adoption Programs</span>
                    </div>
                  </div>

                  <div className="mai-back-return-bar">
                    <span className="mai-back-return-btn">⤺ Flip to Action Plan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Alternate View Mode: Redesigned High-Legibility Comparison Table */
        <section className="mai-table-section" aria-label="Customer Migration Matrix Table">
          <div className="mai-table-header-bar">
            <div className="mai-table-title-wrap">
              <h2>Customer Migration & Entitlement Comparison Matrix</h2>
              <span className="mai-table-badge">Clear Decision Guide</span>
            </div>
            <span className="mai-table-subnote">Policy Alignment Effective November 1</span>
          </div>

          <div className="mai-table-wrap">
            <table className="mai-comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Customer Cohort & SKU</th>
                  <th style={{ width: '13%' }}>Pricing Model</th>
                  <th style={{ width: '13%' }}>Expanded Base AI</th>
                  <th style={{ width: '16%' }}>Agents & Joule Work</th>
                  <th style={{ width: '15%' }}>Joule for Consultants</th>
                  <th style={{ width: '21%' }}>SKU Action Required</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: PM 430 PUPM */}
                <tr>
                  <td>
                    <div className="mai-cohort-col">
                      <span className="mai-cohort-name">PM 430 PUPM</span>
                      <span className="mai-cohort-sku">SKU 8019164</span>
                    </div>
                  </td>
                  <td>
                    <span className="mai-chip-pill chip-pupm">PUPM (Per User)</span>
                  </td>
                  <td>
                    <strong style={{ color: '#16a34a' }}>✓ Included</strong>
                  </td>
                  <td>
                    <strong style={{ color: '#16a34a' }}>✓ Full Access</strong>
                  </td>
                  <td>
                    <strong style={{ color: '#16a34a' }}>✓ Included</strong>
                  </td>
                  <td>
                    <span className="mai-status-tag no-switch">
                      ✓ No SKU Switch Needed
                    </span>
                  </td>
                </tr>

                {/* Row 2: PM 430 Classic */}
                <tr>
                  <td>
                    <div className="mai-cohort-col">
                      <span className="mai-cohort-name">PM 430 Classic</span>
                      <span className="mai-cohort-sku">SKU 8018592</span>
                    </div>
                  </td>
                  <td>
                    <span className="mai-chip-pill chip-classic">Consumption</span>
                  </td>
                  <td>
                    <strong style={{ color: '#16a34a' }}>✓ Included</strong>
                  </td>
                  <td>
                    <strong style={{ color: '#16a34a' }}>✓ Full Access</strong>
                  </td>
                  <td>
                    <span style={{ color: '#d97706', fontSize: '0.88rem' }}>⚠️ Requires Switch</span>
                  </td>
                  <td>
                    <span className="mai-status-tag optional">
                      ℹ️ Switch Only if Consultants Needed
                    </span>
                  </td>
                </tr>

                {/* Row 3: PM 120 */}
                <tr>
                  <td>
                    <div className="mai-cohort-col">
                      <span className="mai-cohort-name">PM 120 (Legacy)</span>
                      <span className="mai-cohort-sku">SKU 8016532</span>
                    </div>
                  </td>
                  <td>
                    <span className="mai-chip-pill chip-legacy">Legacy Tier</span>
                  </td>
                  <td>
                    <strong style={{ color: '#16a34a' }}>✓ Included</strong>
                  </td>
                  <td>
                    <span style={{ color: '#dc2626', fontSize: '0.88rem' }}>❌ Switch to 8019164</span>
                  </td>
                  <td>
                    <span style={{ color: '#dc2626', fontSize: '0.88rem' }}>❌ Switch to 8019164</span>
                  </td>
                  <td>
                    <span className="mai-status-tag required">
                      ⚡ Switch to SKU 8019164
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Navigation Footer */}
      <footer className="mai-footer">
        <button
          type="button"
          className="mai-nav-btn"
          onClick={goToPrevSlide}
          aria-label="Return to Embedded vs Premium"
        >
          <span>‹</span>
          <span>Embedded vs Premium</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="mai-nav-btn primary"
          onClick={goToNextSlide}
          aria-label="Proceed to Joule Work Explained"
        >
          <span>Joule Work Explained</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="mai-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mai-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mai-modal-header">
              <span>Original Slide Specification: Existing AI Unit Customers</span>
              <button
                type="button"
                className="mai-modal-close"
                onClick={() => setIsZoomed(false)}
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>
            <div className="mai-modal-body">
              <img
                src={originalSpec}
                alt="What does this mean for existing AI unit customers original specification"
                className="mai-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
