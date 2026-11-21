import BrandLockup from '../components/BrandLockup'
import { SAMPLE_CHILDREN_6_12 } from '../data/samplePresentationData'
import '../styles/presentationSlides.css'

interface Props {
  slideNumber: number
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideDetailView({
  slideNumber,
  onPrev,
  onNext,
  onNavigate,
}: Props) {
  const card =
    SAMPLE_CHILDREN_6_12.find((c) => c.slideNumber === slideNumber) ||
    SAMPLE_CHILDREN_6_12[0]

  const returnToSlide5 = () => {
    if (onNavigate) onNavigate(5)
    else window.location.hash = '#/Autonomous_Suite'
  }

  const returnToHub = () => {
    if (onNavigate) onNavigate(3)
    else window.location.hash = '#/architecture_overview'
  }

  return (
    <div className="pres-slide-container">
      <div className="pres-ambient-glow blue" />
      <div className="pres-ambient-glow gold" />

      {/* Header */}
      <header className="pres-header">
        <div className="pres-header-left">
          <div className="pres-eyebrow">
            {card.domain} • Slide {card.slideNumber} of 19
          </div>
          <h1 className="pres-title">{card.title}</h1>
          <p className="pres-subtitle">{card.subtitle}</p>
        </div>

        <div className="pres-header-actions">
          <button className="btn-hub-return" onClick={returnToSlide5}>
            <span>← Slide 5 (Cards View)</span>
          </button>
          <button className="btn-hub-return" onClick={returnToHub}>
            <span>Hub (Slide 3)</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pres-main">
        <div className="card-expanded-body" style={{ maxHeight: 'none', padding: 0 }}>
          {/* Left Column: Summary & Assistant Roles */}
          <div>
            <div className="card-expanded-summary-box">
              <div className="card-expanded-section-title">Domain Scope & Strategy</div>
              <p>{card.summary}</p>
            </div>

            <div className="card-expanded-section-title">Specialized Assistants & Agents</div>
            {card.assistants.map((ast, idx) => (
              <div key={idx} className="assistant-role-card">
                <div className="assistant-role-title">🤖 {ast.role}</div>
                {ast.impact && (
                  <div style={{ fontSize: '11px', color: '#c9a24b', marginBottom: '4px' }}>
                    Impact: {ast.impact}
                  </div>
                )}
                <div className="assistant-agents-list">
                  {ast.agents.map((ag, i) => (
                    <span key={i} className="agent-chip">{ag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: KPIs & Outcomes */}
          <div>
            {card.kpis && card.kpis.length > 0 && (
              <div>
                <div className="card-expanded-section-title">Core Target Impact (ACR Scale)</div>
                <div className="card-kpis-list">
                  {card.kpis.map((kpi, idx) => (
                    <div key={idx} className="card-kpi-item">
                      <span>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pres-footer">
        <button className="pres-footer-nav-btn" onClick={onPrev}>
          ‹ Slide {slideNumber - 1}
        </button>

        <BrandLockup variant="footer" theme="dark" />

        <button className="pres-footer-nav-btn" onClick={onNext}>
          Slide {slideNumber + 1} ›
        </button>
      </footer>
    </div>
  )
}
