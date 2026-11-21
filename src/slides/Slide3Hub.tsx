import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import {
  SAMPLE_SLIDE_3_BULLETS,
  SAMPLE_SLIDE_3_DATA,
} from '../data/samplePresentationData'
import '../styles/presentationSlides.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

const DIAGRAM_PINS = [
  { id: 1, label: '1', name: 'Joule', targetSlide: 4, left: '46%', top: '6.5%' },
  { id: 2, label: '2', name: 'SAP Autonomous Suite', targetSlide: 5, left: '3%', top: '34%' },
  { id: 3, label: '3', name: 'Industry AI', targetSlide: 6, left: '46.5%', top: '23%' },
  { id: 4, label: '4', name: 'SAP Business AI Platform', targetSlide: 7, left: '3%', top: '76%' },
]

export default function Slide3Hub({ onPrev, onNavigate }: Props) {
  // Executive White background
  const isWhiteTheme = true
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleNav = (slideNum: number) => {
    if (slideNum === 4) {
      window.location.hash = '#/4'
      return
    }
    if (onNavigate) {
      onNavigate(slideNum)
    } else {
      window.location.hash = `#/${slideNum}`
    }
  }

  const goToSlide4 = () => {
    window.location.hash = '#/4'
  }

  const goToAlternate = () => {
    window.location.hash = '#/components'
  }

  return (
    <div className={`pres-slide-container ${isWhiteTheme ? 'theme-white' : 'theme-dark'}`}>
      {!isWhiteTheme && (
        <>
          <div className="pres-ambient-glow blue" />
          <div className="pres-ambient-glow gold" />
        </>
      )}

      {/* Header */}
      <header className="pres-header">
        <div className="pres-header-left">
          <div className="pres-eyebrow">Architecture Overview • Slide 3 of 19</div>
          <h1 className="pres-title">{SAMPLE_SLIDE_3_DATA.title}</h1>
          <p className="pres-subtitle">{SAMPLE_SLIDE_3_DATA.subtitle}</p>
        </div>

        {/* Alternate View Button */}
        <div className="pres-header-actions">
          <button
            className="btn-theme-toggle active-white"
            onClick={goToAlternate}
            title="Explore Alternate Components View"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              fontWeight: 700,
              fontSize: '12px',
              borderRadius: '999px',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
              color: '#ffffff',
              border: 'none',
              boxShadow: '0 2px 8px rgba(2, 132, 199, 0.35)',
              transition: 'all 0.2s ease',
            }}
          >
            <span>Alternate</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </header>

      {/* Main Split Layout: Architecture Image (Left) + 5 Bullets (Right) */}
      <main className="pres-main">
        <div className="slide3-split-layout">
          {/* Left: Embedded Architecture Diagram Image with interactive pins */}
          <div className="slide3-diagram-pane">
            <div className="slide3-image-frame">
              <img
                src={SAMPLE_SLIDE_3_DATA.diagramImage}
                alt="Components of the Autonomous Enterprise Architecture Diagram (High Resolution)"
                className="slide3-annotated-img"
              />

              {/* Interactive diagram pins matching slide reference */}
              {DIAGRAM_PINS.map((pin) => (
                <button
                  key={pin.id}
                  className={`diagram-pin-badge ${hoveredId === pin.id ? 'is-active' : ''}`}
                  style={{ left: pin.left, top: pin.top }}
                  onClick={() => handleNav(pin.targetSlide)}
                  onMouseEnter={() => setHoveredId(pin.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  title={`Click to explore: ${pin.name} (Slide ${pin.targetSlide})`}
                  aria-label={`${pin.name} (Slide ${pin.targetSlide})`}
                >
                  {pin.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: 5 Bullets Stack */}
          <div className="slide3-bullets-stack">
            {SAMPLE_SLIDE_3_BULLETS.map((bullet) => {
              const isBullet5 = bullet.id === 5
              const isHovered = hoveredId === bullet.id

              if (isBullet5) {
                return (
                  <div
                    key={bullet.id}
                    className={`hub-bullet-card has-actions ${isHovered ? 'is-active-card' : ''}`}
                    onMouseEnter={() => setHoveredId(5)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="hub-bullet-left">
                      <div className="hub-bullet-num">5</div>
                      <div className="hub-bullet-content">
                        <div className="hub-bullet-inline-text">
                          <span className="hub-highlight">{bullet.highlight}</span>
                          <span className="hub-suffix">{bullet.suffix}</span>
                        </div>
                      </div>
                    </div>

                    {/* Empty Space + Two Buttons: RISE and GROW */}
                    <div className="hub-bullet-actions-container">
                      <div className="hub-spacer-block" title="Visual Separation" />

                      <button
                        className="btn-rise-action"
                        onClick={() => handleNav(16)}
                        title="Explore Slide 16 & 17: RISE with SAP"
                      >
                        <span>RISE with SAP</span>
                        <span>→</span>
                      </button>

                      <button
                        className="btn-grow-action"
                        onClick={() => handleNav(17)}
                        title="Explore Slide 17: GROW with SAP"
                      >
                        <span>GROW with SAP</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                )
              }

              return (
                <div
                  key={bullet.id}
                  className={`hub-bullet-card ${isHovered ? 'is-active-card' : ''}`}
                  onClick={() => handleNav(bullet.targetSlide)}
                  onMouseEnter={() => setHoveredId(bullet.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleNav(bullet.targetSlide)
                    }
                  }}
                >
                  <div className="hub-bullet-left">
                    <div className="hub-bullet-num">{bullet.id}</div>
                    <div className="hub-bullet-content">
                      <div className="hub-bullet-inline-text">
                        <span className="hub-highlight">{bullet.highlight}</span>
                        <span className="hub-suffix">{bullet.suffix}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hub-bullet-cta">
                    <span>Slide {bullet.targetSlide}</span>
                    <span>→</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pres-footer">
        <button className="pres-footer-nav-btn" onClick={onPrev}>
          ‹ Autonomous Enterprise Vision
        </button>

        <BrandLockup variant="footer" theme={isWhiteTheme ? 'light' : 'dark'} />

        <button
          className="pres-footer-nav-btn"
          onClick={goToSlide4}
          aria-label="Proceed to Slide 4: Joule Work"
        >
          Slide 4: Joule Work ›
        </button>
      </footer>
    </div>
  )
}
