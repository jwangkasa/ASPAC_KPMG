import BrandLockup from '../components/BrandLockup'
import smjTransitionGraphic from '../assets/smj_transition_graphic.png'
import '../styles/smj.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideSmj({ onPrev, onNext, onNavigate }: Props) {
  const goToJoule = () => {
    if (onPrev) {
      onPrev()
    } else if (onNavigate) {
      onNavigate(4)
    } else {
      window.location.hash = '#/4'
    }
  }

  const goToSuite = () => {
    if (onNext) {
      onNext()
    } else if (onNavigate) {
      onNavigate(5)
    } else {
      window.location.hash = '#/Autonomous_Suite'
    }
  }

  const goToArchitecture = () => {
    window.location.hash = '#/joule-architecture'
  }

  return (
    <div className="smj-container">
      <div className="smj-glow-purple" aria-hidden="true" />
      <div className="smj-glow-blue" aria-hidden="true" />

      {/* Header (No top-right buttons) */}
      <header className="smj-header">
        <div className="smj-title-group">
          <div className="smj-eyebrow">Engagement Layer • Customer-Managed Joule to SAP-Managed Joule</div>
          <h1 className="smj-title">SAP-Managed Joule</h1>
          <p className="smj-subtitle">
            We transition Joule from a customer-managed to a fully SAP-managed service. Eliminating customer setup and
            integration complexity while positioning Joule as the entry point to the autonomous enterprise.
          </p>
        </div>
      </header>

      {/* Main Content Area: Column 1 (Pillars & Architecture) and Column 2 (What Changed?) */}
      <main className="smj-main">
        {/* Column 1: SAP-Managed Joule Architecture & Transition Flow */}
        <section className="smj-col" aria-labelledby="smj-arch-title">
          <div className="smj-col-header">
            <h2 id="smj-arch-title" className="smj-col-title">
              <span>Transition Architecture</span>
            </h2>
            <span className="smj-col-badge">BTP → SAP for Me</span>
          </div>

          {/* 3 Core Pillars */}
          <div className="smj-pillars-grid">
            <div className="smj-pillar-card">
              <div className="smj-pillar-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="smj-pillar-title">Setup</div>
              <div className="smj-pillar-desc">
                Activation moves from BTP to SAP for Me with a lightweight configuration &amp; reduced dependencies.
              </div>
            </div>

            <div className="smj-pillar-card">
              <div className="smj-pillar-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6" />
                  <path d="m21 3-7 7" />
                  <path d="M9 21H3v-6" />
                  <path d="m3 21 7-7" />
                </svg>
              </div>
              <div className="smj-pillar-title">Integrations</div>
              <div className="smj-pillar-desc">
                Automated integration with SAP applications and components of the Business AI Platform.
              </div>
            </div>

            <div className="smj-pillar-card">
              <div className="smj-pillar-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="5" height="5" rx="1" />
                  <rect x="17" y="3" width="5" height="5" rx="1" />
                  <rect x="17" y="16" width="5" height="5" rx="1" />
                  <path d="M7 9.5h5a4 4 0 0 0 4-4V5.5" />
                  <path d="M12 9.5v5a4 4 0 0 0 4 4h1" />
                </svg>
              </div>
              <div className="smj-pillar-title">Future Ready</div>
              <div className="smj-pillar-desc">Access to continuous stream of future innovations.</div>
            </div>
          </div>

          {/* Centered Architecture Transition Image Diagram */}
          <div className="smj-diagram-card">
            <div className="smj-diagram-badges">
              <span className="smj-flow-badge btp">Customer-Managed</span>
              <span className="smj-flow-arrow-label">Streamlined Transition →</span>
              <span className="smj-flow-badge me">SAP-Managed (SaaS)</span>
            </div>
            <div className="smj-diagram-img-wrap">
              <img
                src={smjTransitionGraphic}
                alt="Transition from SAP Business Technology Platform to SAP for Me"
                className="smj-diagram-img"
              />
            </div>
          </div>
        </section>

        {/* Column 2: What Changed? (Customer-Managed vs. SAP-Managed) */}
        <section className="smj-col" aria-labelledby="smj-compare-title">
          <div className="smj-col-header">
            <h2 id="smj-compare-title" className="smj-col-title">
              <span>What Changed?</span>
            </h2>
            <span className="smj-col-badge">Operating Model Shift</span>
          </div>

          {/* Header pill indicator */}
          <div className="smj-matrix-header">
            <div className="smj-matrix-pill">
              <span className="smj-matrix-pill-side">Customer-managed</span>
              <span className="smj-matrix-pill-side active-sap">SAP-Managed</span>
            </div>
          </div>

          {/* 3 Comparison Rows (Generously sized & clean) */}
          <div className="smj-rows-container">
            <div className="smj-compare-row">
              <div className="smj-side-left">Ensure availability of dependent services</div>
              <div className="smj-side-right">Joule and Business AI Platform provided as one</div>
            </div>

            <div className="smj-compare-row">
              <div className="smj-side-left">Provisioning and activation in different platforms</div>
              <div className="smj-side-right">
                Abstraction of platform &amp; activation based on customer selection
              </div>
            </div>

            <div className="smj-compare-row">
              <div className="smj-side-left">Integration of Joule with SAP solutions</div>
              <div className="smj-side-right">Customers control – SAP sets up integration</div>
            </div>
          </div>

          {/* Key Strategic Outcomes Strip */}
          <div className="smj-outcomes-strip">
            <div className="smj-outcome-item">
              <span className="smj-outcome-val">Instant</span>
              <span className="smj-outcome-lbl">Time to Value</span>
            </div>
            <div className="smj-outcome-divider" />
            <div className="smj-outcome-item">
              <span className="smj-outcome-val">Zero</span>
              <span className="smj-outcome-lbl">Tenant Overhead</span>
            </div>
            <div className="smj-outcome-divider" />
            <div className="smj-outcome-item">
              <span className="smj-outcome-val">100%</span>
              <span className="smj-outcome-lbl">Continuous AI Upgrades</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="smj-footer">
        <button className="smj-nav-btn" onClick={goToJoule} aria-label="Return to Slide 4: Joule">
          <span>‹</span>
          <span>Slide 4: Joule</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="smj-nav-btn" onClick={goToArchitecture} aria-label="Open Joule Architecture">
            <span>Architecture</span>
          </button>

          <button className="smj-nav-btn primary" onClick={goToSuite} aria-label="Proceed to Autonomous Suite">
            <span>Autonomous Suite (Slide 5)</span>
            <span>›</span>
          </button>
        </div>
      </footer>
    </div>
  )
}
