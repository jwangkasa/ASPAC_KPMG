import BrandLockup from '../components/BrandLockup'
import {
  SAMPLE_SLIDE_16_DATA,
  SAMPLE_SLIDE_17_DATA,
} from '../data/samplePresentationData'
import '../styles/presentationSlides.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Slide16RiseLaunch({ onPrev, onNext, onNavigate }: Props) {
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
          <div className="pres-eyebrow">Transformation Engine • Slide 16 & 17 of 19</div>
          <h1 className="pres-title">{SAMPLE_SLIDE_17_DATA.title}</h1>
          <p className="pres-subtitle">{SAMPLE_SLIDE_17_DATA.subtitle}</p>
        </div>

        <div className="pres-header-actions">
          <button className="btn-hub-return" onClick={returnToHub}>
            <span>← Hub (Slide 3)</span>
          </button>
        </div>
      </header>

      {/* Main Content: Copied Diagrams (Left) + Pillars & Value Drivers (Right) */}
      <main className="pres-main">
        <div className="slide17-split">
          {/* RISE Vector Diagram */}
          <div className="slide17-svg-box">
            <img
              src={SAMPLE_SLIDE_17_DATA.riseDiagram}
              alt="Agent-Led Transformation RISE with SAP Framework"
            />
          </div>

          {/* Pillars List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {SAMPLE_SLIDE_17_DATA.pillars.map((pil, idx) => (
              <div
                key={idx}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(13, 27, 77, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <h4 style={{ color: '#0070f2', fontSize: '15px', marginBottom: '4px' }}>
                  {pil.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.4' }}>
                  {pil.desc}
                </p>
              </div>
            ))}

            {/* Effort to Outcome Callout */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(201, 162, 75, 0.1)',
                border: '1px solid rgba(201, 162, 75, 0.3)',
              }}
            >
              <img
                src={SAMPLE_SLIDE_16_DATA.effortImage}
                alt="Effort to Outcome"
                style={{ width: '42px', height: '42px', objectFit: 'contain' }}
              />
              <div style={{ fontSize: '12px', color: '#ffffff' }}>
                <strong>Effort to Outcome:</strong> Migration and modernization assistants absorb manual friction across data, testing, custom code, and configuration.
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pres-footer">
        <button className="pres-footer-nav-btn" onClick={onPrev}>
          ‹ Slide 15: Platform
        </button>

        <BrandLockup variant="footer" theme="dark" />

        <button className="pres-footer-nav-btn" onClick={onNext}>
          Slide 18: GROW with SAP ›
        </button>
      </footer>
    </div>
  )
}
