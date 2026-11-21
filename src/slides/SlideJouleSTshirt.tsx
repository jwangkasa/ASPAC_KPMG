import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/joules_tshirt_spec.png'
import '../styles/jouleSTshirt.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

type FilterTier = 'all' | 'small' | 'medium' | 'large'

export default function SlideJouleSTshirt({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [selectedTier, setSelectedTier] = useState<FilterTier>('all')

  const goToRuntimePricing = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/JouleS_runtime'
    }
  }

  const goToKeyPrograms = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/Key_Programs'
    }
  }

  return (
    <div className="jst-container">
      {/* Ambient background glows */}
      <div className="jst-ambient-left" aria-hidden="true" />
      <div className="jst-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="jst-header">
        <div className="jst-title-group">
          <div className="jst-eyebrow">
            <span>SAP Commercial Architecture • Workload Sizing & Estimation</span>
          </div>
          <h1 className="jst-main-title">
            Agent T-Shirt Sizing - Indicative Consumption & Cost Ranges*
          </h1>
          <p className="jst-main-subtitle">
            Transparent sizing tiers to estimate monthly metered consumption based on operational patterns and agent sophistication.
          </p>
        </div>

        <div className="jst-header-actions">
          <div className="jst-filter-btn-group" role="tablist" aria-label="Workload Tier Filter">
            <button
              type="button"
              className={`jst-filter-btn ${selectedTier === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedTier('all')}
            >
              All Tiers
            </button>
            <button
              type="button"
              className={`jst-filter-btn ${selectedTier === 'small' ? 'active' : ''}`}
              onClick={() => setSelectedTier('small')}
            >
              Small (S)
            </button>
            <button
              type="button"
              className={`jst-filter-btn ${selectedTier === 'medium' ? 'active' : ''}`}
              onClick={() => setSelectedTier('medium')}
            >
              Medium (M)
            </button>
            <button
              type="button"
              className={`jst-filter-btn ${selectedTier === 'large' ? 'active' : ''}`}
              onClick={() => setSelectedTier('large')}
            >
              Large (L)
            </button>
          </div>

          <button
            type="button"
            className="jst-spec-btn"
            onClick={() => setIsZoomed(true)}
            title="View original slide visual specification"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Bottom-Aligned Main Stage (Workload Matrix, Guidance Banner, and Footnotes) */}
      <main className="jst-main-stage">
        {/* Main Matrix Section */}
        <section className="jst-matrix-card" aria-label="Agent T-Shirt Sizing Table">
        <div className="jst-table-wrap">
          <table className="jst-table">
            <thead>
              <tr>
                <th className="col-dim">
                  <span>Workload Profile</span>
                </th>

                {/* SMALL HEADER */}
                {(selectedTier === 'all' || selectedTier === 'small') && (
                  <th className="col-tier tier-small">
                    <div className="jst-tier-header-content">
                      <div className="jst-tier-title-row">
                        <span className="jst-tier-title-badge badge-small">
                          🌱 SMALL
                        </span>
                        <span className="jst-tier-tag tag-small">Tier S</span>
                      </div>
                      <span className="jst-tier-desc">Focused task automation</span>
                    </div>
                  </th>
                )}

                {/* MEDIUM HEADER */}
                {(selectedTier === 'all' || selectedTier === 'medium') && (
                  <th className="col-tier tier-medium">
                    <div className="jst-tier-header-content">
                      <div className="jst-tier-title-row">
                        <span className="jst-tier-title-badge badge-medium">
                          🚀 MEDIUM
                        </span>
                        <span className="jst-tier-tag tag-medium">Tier M</span>
                      </div>
                      <span className="jst-tier-desc">Multi-step operational assistance</span>
                    </div>
                  </th>
                )}

                {/* LARGE HEADER */}
                {(selectedTier === 'all' || selectedTier === 'large') && (
                  <th className="col-tier tier-large">
                    <div className="jst-tier-header-content">
                      <div className="jst-tier-title-row">
                        <span className="jst-tier-title-badge badge-large">
                          ⚡ LARGE
                        </span>
                        <span className="jst-tier-tag tag-large">Tier L</span>
                      </div>
                      <span className="jst-tier-desc">Complex, stateful orchestration</span>
                    </div>
                  </th>
                )}
              </tr>
            </thead>

            <tbody>
              {/* Row 1: Typical Operating Pattern */}
              <tr>
                <td>
                  <div className="jst-dim-cell">
                    <div className="jst-dim-icon" aria-hidden="true">⏱️</div>
                    <span className="jst-dim-title">Typical Operating Pattern</span>
                  </div>
                </td>
                {(selectedTier === 'all' || selectedTier === 'small') && (
                  <td>
                    <div className="jst-operating-pattern-text">
                      <strong>Intermittent / light usage</strong>
                      <div style={{ color: '#64748b', fontSize: '0.84rem' }}>~1 hr / day</div>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'medium') && (
                  <td>
                    <div className="jst-operating-pattern-text">
                      <strong>High-frequency / extended usage</strong>
                      <div style={{ color: '#64748b', fontSize: '0.84rem' }}>~2-4 hrs / day</div>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'large') && (
                  <td>
                    <div className="jst-operating-pattern-text">
                      <strong>Always-on / Systems usage</strong>
                      <div style={{ color: '#64748b', fontSize: '0.84rem' }}>Always-on / 24×7</div>
                    </div>
                  </td>
                )}
              </tr>

              {/* Row 2: AI Tokens */}
              <tr>
                <td>
                  <div className="jst-dim-cell">
                    <div className="jst-dim-icon" aria-hidden="true">🧠</div>
                    <span className="jst-dim-title">AI Tokens</span>
                  </div>
                </td>
                {(selectedTier === 'all' || selectedTier === 'small') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">≤ 25M / month</span>
                      <span className="jst-metric-cost">Up to €122.25 / month</span>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'medium') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">50 - 100M / month</span>
                      <span className="jst-metric-cost">€244.50 - €489 / month</span>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'large') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">100 - 250M / month</span>
                      <span className="jst-metric-cost">€489 to €1,222.50 / month</span>
                    </div>
                  </td>
                )}
              </tr>

              {/* Row 3: Compute */}
              <tr>
                <td>
                  <div className="jst-dim-cell">
                    <div className="jst-dim-icon" aria-hidden="true">⚡</div>
                    <span className="jst-dim-title">Compute</span>
                  </div>
                </td>
                {(selectedTier === 'all' || selectedTier === 'small') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">≤ 25 compute hour</span>
                      <span className="jst-metric-cost muted">Up to €0.32 / month</span>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'medium') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">50 - 100 compute hour</span>
                      <span className="jst-metric-cost muted">€0.64 - €1.28 / month</span>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'large') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">730 compute hour</span>
                      <span className="jst-metric-cost muted">€9.34 / month (full 24×7)</span>
                    </div>
                  </td>
                )}
              </tr>

              {/* Row 4: Agent Memory (Highlighted Yellow Row) */}
              <tr className="row-highlight-memory">
                <td className="col-dim-title">
                  <div className="jst-dim-cell">
                    <div className="jst-dim-icon" style={{ background: '#fef08a' }} aria-hidden="true">💾</div>
                    <span className="jst-dim-title" style={{ color: '#854d0e' }}>Agent Memory</span>
                  </div>
                </td>
                {(selectedTier === 'all' || selectedTier === 'small') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">≤ 0.2 GB actual</span>
                      <span className="jst-metric-cost" style={{ background: '#fef08a', color: '#713f12' }}>
                        2 GB billable min • €13.43 / mo
                      </span>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'medium') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">2 - 4 GB actual</span>
                      <span className="jst-metric-cost" style={{ background: '#fef08a', color: '#713f12' }}>
                        €13.43 - €26.86 / month
                      </span>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'large') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">4 - 8 GB actual</span>
                      <span className="jst-metric-cost" style={{ background: '#fef08a', color: '#713f12' }}>
                        €26.86 to €53.73 / month
                      </span>
                    </div>
                  </td>
                )}
              </tr>

              {/* Row 5: Workflows */}
              <tr>
                <td>
                  <div className="jst-dim-cell">
                    <div className="jst-dim-icon" aria-hidden="true">🔄</div>
                    <span className="jst-dim-title">Workflows</span>
                  </div>
                </td>
                {(selectedTier === 'all' || selectedTier === 'small') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">≤ 100 executions</span>
                      <span className="jst-metric-cost">Up to €13 / month</span>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'medium') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">≤ 1K executions</span>
                      <span className="jst-metric-cost">€13 to €130 / month</span>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'large') && (
                  <td>
                    <div className="jst-metric-box">
                      <span className="jst-metric-main">1K - 10K executions</span>
                      <span className="jst-metric-cost">€130 to €1,300 / month</span>
                    </div>
                  </td>
                )}
              </tr>

              {/* Row 6: TOTAL / AGENT / MONTH (Hero Purple Row) */}
              <tr className="row-total">
                <td className="col-dim-total">
                  <span>TOTAL / AGENT / MONTH</span>
                </td>
                {(selectedTier === 'all' || selectedTier === 'small') && (
                  <td>
                    <div className="jst-total-hero-box">
                      <span className="jst-total-hero-val">Up to €150</span>
                      <span className="jst-total-hero-sub">Estimated Monthly Total</span>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'medium') && (
                  <td>
                    <div className="jst-total-hero-box">
                      <span className="jst-total-hero-val">~ €300 - €650</span>
                      <span className="jst-total-hero-sub">Estimated Monthly Total</span>
                    </div>
                  </td>
                )}
                {(selectedTier === 'all' || selectedTier === 'large') && (
                  <td>
                    <div className="jst-total-hero-box">
                      <span className="jst-total-hero-val">~ €650 to €2,500</span>
                      <span className="jst-total-hero-sub">Estimated Monthly Total</span>
                    </div>
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* HOW TO USE THIS Guidance Card */}
      <section className="jst-guide-card" aria-label="How to use this framework">
        <div className="jst-guide-label-wrap">
          <span>💡 HOW TO USE THIS</span>
        </div>
        <ul className="jst-guide-bullets">
          <li className="jst-guide-bullet-item">
            <span className="bullet-dot">•</span>
            <span>
              <strong>Baseline Sizing:</strong> Select the closest workload profile, then use the meter-level ranges to estimate monthly cost.
            </span>
          </li>
          <li className="jst-guide-bullet-item">
            <span className="bullet-dot">•</span>
            <span>
              <strong>Independent Meter Scaling:</strong> Individual meters may scale independently. For example, a large agent can still have low workflow volume.
            </span>
          </li>
          <li className="jst-guide-bullet-item">
            <span className="bullet-dot">•</span>
            <span>
              <strong>High-Volume & Always-On Scaling:</strong> Always-on or higher-volume workloads should be estimated by scaling the large profile based on runtime duration and transaction volume.
            </span>
          </li>
        </ul>
      </section>

        {/* Footnotes Bar */}
        <div className="jst-footnotes-bar" aria-label="Footnotes">
          <p>
            *Final meter prices and totals remain subject to commercial approval. All pricing and cost estimates shown are based on list prices.
          </p>
          <p>
            For Agent Memory, billable quantity = max(actual usage, 2 GB). LLM = GPT 5.4. Workflow pricing uses €0.13/transaction, applicable to the 0–20K tier.
          </p>
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="jst-footer">
        <button
          type="button"
          className="jst-nav-btn"
          onClick={goToRuntimePricing}
          aria-label="Return to Joule Studio Runtime Pricing"
        >
          <span>‹</span>
          <span>Runtime Pricing</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="jst-nav-btn primary"
          onClick={goToKeyPrograms}
          aria-label="Proceed to Key Programs (2026)"
        >
          <span>Key Programs</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="jst-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="jst-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="jst-modal-header">
              <span>Original Slide Specification: Agent T-Shirt Sizing</span>
              <button
                type="button"
                className="jst-modal-close"
                onClick={() => setIsZoomed(false)}
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>
            <div className="jst-modal-body">
              <img
                src={originalSpec}
                alt="Agent T-Shirt Sizing Indicative Consumption and Cost Ranges Spec"
                className="jst-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
