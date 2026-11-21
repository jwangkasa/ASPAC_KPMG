import BrandLockup from '../components/BrandLockup'
import { SAMPLE_SLIDE_4_DATA } from '../data/samplePresentationData'
import '../styles/presentationSlides.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Slide4PilotGaps({ onPrev, onNext, onNavigate }: Props) {
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
          <div className="pres-eyebrow">Interaction Layer • Slide 4 of 19</div>
          <h1 className="pres-title">{SAMPLE_SLIDE_4_DATA.title}</h1>
          <p className="pres-subtitle">{SAMPLE_SLIDE_4_DATA.subtitle}</p>
        </div>

        <div className="pres-header-actions">
          <button className="btn-hub-return" onClick={returnToHub}>
            <span>← Back to Hub (Slide 3)</span>
          </button>
        </div>
      </header>

      {/* Main Grid: 5 Core Capabilities (Left) + Real UI Screenshots (Right) */}
      <main className="pres-main">
        <div className="slide4-grid-layout">
          {/* Capabilities List */}
          <div className="slide4-caps-list">
            {SAMPLE_SLIDE_4_DATA.capabilities.map((cap, idx) => (
              <div key={idx} className="slide4-cap-card">
                <h4>{cap.title}</h4>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Copied Real UI Screenshots */}
          <div className="slide4-screenshots-gallery">
            <div className="slide4-screen-card large">
              <img
                src={SAMPLE_SLIDE_4_DATA.images[0]}
                alt="Joule Workspace Interface"
              />
            </div>
            <div className="slide4-screen-card">
              <img
                src={SAMPLE_SLIDE_4_DATA.images[1]}
                alt="Joule Agent Chat & Context"
              />
            </div>
            <div className="slide4-screen-card">
              <img
                src={SAMPLE_SLIDE_4_DATA.images[2]}
                alt="Joule Mobile Experience"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pres-footer">
        <button className="pres-footer-nav-btn" onClick={onPrev}>
          ‹ Slide 3: Hub
        </button>

        <BrandLockup variant="footer" theme="dark" />

        <button className="pres-footer-nav-btn" onClick={onNext}>
          Slide 5: Autonomous Suite ›
        </button>
      </footer>
    </div>
  )
}
