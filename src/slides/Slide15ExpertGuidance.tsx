import BrandLockup from '../components/BrandLockup'
import { SAMPLE_SLIDE_15_DATA } from '../data/samplePresentationData'
import '../styles/presentationSlides.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Slide15ExpertGuidance({ onPrev, onNext, onNavigate }: Props) {
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
          <div className="pres-eyebrow">Platform Foundation • Slide 15 of 19</div>
          <h1 className="pres-title">{SAMPLE_SLIDE_15_DATA.title}</h1>
          <p className="pres-subtitle">{SAMPLE_SLIDE_15_DATA.subtitle}</p>
        </div>

        <div className="pres-header-actions">
          <button className="btn-hub-return" onClick={returnToHub}>
            <span>← Hub (Slide 3)</span>
          </button>
        </div>
      </header>

      {/* Main Content: Copied Architecture Image (Left) + Platform Layers (Right) */}
      <main className="pres-main">
        <div className="slide15-split">
          {/* Architecture Diagram Image */}
          <div className="slide15-img-container">
            <img
              src={SAMPLE_SLIDE_15_DATA.architectureImage}
              alt="SAP Business AI Platform Architecture Diagram"
            />
          </div>

          {/* Platform Pillars & Layers */}
          <div className="slide15-layers-stack">
            {SAMPLE_SLIDE_15_DATA.layers.map((layer, idx) => (
              <div key={idx} className="slide15-layer-box">
                <h4>Layer {idx + 1}: {layer.name}</h4>
                <p>{layer.desc}</p>
              </div>
            ))}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                marginTop: '10px',
              }}
            >
              {SAMPLE_SLIDE_15_DATA.pillars.map((pil, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    background: 'rgba(201, 162, 75, 0.1)',
                    border: '1px solid rgba(201, 162, 75, 0.25)',
                    fontSize: '11px',
                    color: '#c9a24b',
                    textAlign: 'center',
                    fontWeight: 600,
                  }}
                >
                  {pil.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pres-footer">
        <button className="pres-footer-nav-btn" onClick={onPrev}>
          ‹ Slide 14: Action
        </button>

        <BrandLockup variant="footer" theme="dark" />

        <button className="pres-footer-nav-btn" onClick={onNext}>
          Slide 16: RISE with SAP ›
        </button>
      </footer>
    </div>
  )
}
