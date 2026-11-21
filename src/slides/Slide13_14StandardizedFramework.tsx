import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import {
  SAMPLE_SLIDE_13_DATA,
  SAMPLE_SLIDE_14_DATA,
} from '../data/samplePresentationData'
import '../styles/presentationSlides.css'

interface Props {
  initialSlide?: 13 | 14
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Slide13_14StandardizedFramework({
  initialSlide = 13,
  onPrev,
  onNext,
  onNavigate,
}: Props) {
  const [activeTab, setActiveTab] = useState<13 | 14>(initialSlide)

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
            Industry Intelligence • Slide {activeTab} of 19
          </div>
          <h1 className="pres-title">
            {activeTab === 13
              ? SAMPLE_SLIDE_13_DATA.title
              : SAMPLE_SLIDE_14_DATA.title}
          </h1>
          <p className="pres-subtitle">
            {activeTab === 13
              ? SAMPLE_SLIDE_13_DATA.subtitle
              : SAMPLE_SLIDE_14_DATA.subtitle}
          </p>
        </div>

        <div className="pres-header-actions">
          <div className="tab-toggle-container">
            <button
              className={`tab-toggle-btn ${activeTab === 13 ? 'active' : ''}`}
              onClick={() => setActiveTab(13)}
            >
              Slide 13: Industry AI Domains
            </button>
            <button
              className={`tab-toggle-btn ${activeTab === 14 ? 'active' : ''}`}
              onClick={() => setActiveTab(14)}
            >
              Slide 14: In Action (Oil & Gas)
            </button>
          </div>

          <button className="btn-hub-return" onClick={returnToHub}>
            <span>← Hub (Slide 3)</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pres-main">
        {activeTab === 13 ? (
          /* Slide 13: Industry Domains with Real Extracted Icons */
          <div>
            <div className="slide13-domains-grid">
              {SAMPLE_SLIDE_13_DATA.domains.map((dom, idx) => (
                <div key={idx} className="industry-domain-card">
                  <img
                    src={dom.icon}
                    alt={dom.name}
                    className="industry-domain-icon"
                  />
                  <div className="industry-domain-name">{dom.name}</div>
                  <div className="industry-domain-sol">{dom.solution}</div>
                </div>
              ))}
            </div>

            {/* Strategic Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '14px',
              }}
            >
              {SAMPLE_SLIDE_13_DATA.pillars.map((pil, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <h4 style={{ color: '#c9a24b', fontSize: '13.5px', marginBottom: '4px' }}>
                    {pil.title}
                  </h4>
                  <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.35' }}>
                    {pil.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Slide 14: Personas in Action (Oil, Gas & Energy) */
          <div>
            <div className="slide14-personas-grid">
              {SAMPLE_SLIDE_14_DATA.personas.map((per, idx) => (
                <div key={idx} className="slide14-persona-card">
                  <h4>👷 {per.role}</h4>
                  <p>{per.focus}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="pres-footer">
        <button className="pres-footer-nav-btn" onClick={onPrev}>
          ‹ Slide {activeTab === 14 ? '13' : '12'}
        </button>

        <BrandLockup variant="footer" theme="dark" />

        <button className="pres-footer-nav-btn" onClick={onNext}>
          Slide {activeTab === 13 ? '14: Action' : '15: Platform'} ›
        </button>
      </footer>
    </div>
  )
}
