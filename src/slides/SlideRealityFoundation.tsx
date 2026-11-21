import BrandLockup from '../components/BrandLockup'
import '../styles/realityFoundation.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideRealityFoundation({ onPrev, onNext }: Props) {
  const goToNextSlide = () => {
    window.location.hash = '#/agentic-gap'
  }

  const goToAgenda = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/agenda'
    }
  }

  return (
    <div className="reality-slide-container">
      {/* Main Split Grid */}
      <main className="reality-main-grid">
        {/* Left Panel: The Problem */}
        <section className="reality-left-panel" aria-labelledby="problem-heading">
          <div className="reality-left-header">
            <h2 id="problem-heading" className="reality-left-title">
              AI is everywhere. Results aren’t
            </h2>

            {/* Two Key Metrics */}
            <div className="reality-stats-row">
              <div className="reality-stat-item">
                <div className="reality-stat-number">42%</div>
                <div className="reality-stat-label">
                  Report data access &amp; quality issues as leading barrier
                </div>
              </div>

              <div className="reality-stat-item">
                <div className="reality-stat-number">74%</div>
                <div className="reality-stat-label">
                  of orgs stuck in pilot mode with no path to scale
                </div>
              </div>
            </div>

            <h3 className="reality-gaps-subtitle">
              Three gaps are keeping AI stuck in pilot.
            </h3>
          </div>

          {/* 3 Gaps Cards */}
          <div className="reality-gaps-cards">
            <div className="reality-gap-card">
              <h4 className="reality-gap-title">
                Lack of business &amp; process context
              </h4>
              <p className="reality-gap-desc">
                Generic models can read your data. They can’t reason over how your business actually runs.
              </p>
            </div>

            <div className="reality-gap-card">
              <h4 className="reality-gap-title">
                Lack of data connection &amp; integration
              </h4>
              <p className="reality-gap-desc">
                AI is added on top of disconnected, outdated systems.
              </p>
            </div>

            <div className="reality-gap-card">
              <h4 className="reality-gap-title">
                Lack of governance &amp; reliability
              </h4>
              <p className="reality-gap-desc">
                AI that can’t be audited or controlled becomes a risk for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Right Panel: What AI Needs to Succeed, SAP Already Has! */}
        <section className="reality-right-panel" aria-labelledby="solution-heading">
          <h2 id="solution-heading" className="reality-right-title">
            What AI needs to succeed, SAP already has!
          </h2>

          {/* 3 SAP Foundation Pillars */}
          <div className="reality-sap-cards">
            {/* Pillar 1 */}
            <div className="reality-sap-card">
              <div className="reality-sap-card-top">
                <h4 className="reality-sap-card-title">
                  Deep Process &amp; Industry Knowledge
                </h4>
                <p className="reality-sap-card-desc">
                  50 years of process &amp; industry intelligence encoded in our applications, knowledge graph and LLMs
                </p>
              </div>

              <div className="reality-sap-card-bottom">
                <div className="reality-sap-kpi-val">&gt; 120</div>
                <div className="reality-sap-kpi-lbl">
                  Mission-critical processes covered
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="reality-sap-card">
              <div className="reality-sap-card-top">
                <h4 className="reality-sap-card-title">
                  Semantically Rich Business Data
                </h4>
                <p className="reality-sap-card-desc">
                  Data enriched with operational business context in a suite-wide semantic model
                </p>
              </div>

              <div className="reality-sap-card-bottom">
                <div className="reality-sap-kpi-val">7.3M</div>
                <div className="reality-sap-kpi-lbl">
                  data fields covered by SAP Knowledge Graph
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="reality-sap-card">
              <div className="reality-sap-card-top">
                <h4 className="reality-sap-card-title">
                  Enterprise-Grade Governance
                </h4>
                <p className="reality-sap-card-desc">
                  AI for enterprise deployment, managing the full Agentic AI lifecycle securely and reliably out-of-the-box
                </p>
              </div>

              <div className="reality-sap-card-bottom">
                <div className="reality-sap-kpi-val">100%</div>
                <div className="reality-sap-kpi-lbl">
                  of AI workloads covered by certified controls
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Foundation Banner */}
      <aside className="reality-bottom-banner" aria-label="Competitive Foundation Difference">
        <div className="reality-banner-content">
          <h4 className="reality-banner-title">
            Other providers promising to fix this don’t have the foundation to do so
          </h4>
          <p className="reality-banner-subtitle">
            Most AI providers are building from the outside in. Layering intelligence on top of systems they don’t own, data they didn’t generate, processes they’ve never run.
          </p>
        </div>
        <div className="reality-banner-arrow" aria-hidden="true">
          →
        </div>
      </aside>

      {/* Footer Navigation */}
      <footer className="reality-footer">
        <button
          className="reality-nav-btn"
          onClick={onPrev || goToAgenda}
          aria-label="Return to Agenda"
        >
          ‹ Agenda
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="reality-nav-btn primary"
          onClick={onNext || goToNextSlide}
          aria-label="Proceed to The Gap in Agentic AI"
        >
          <span>The Gap in Agentic AI</span>
          <span>›</span>
        </button>
      </footer>
    </div>
  )
}
