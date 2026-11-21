import BrandLockup from '../components/BrandLockup'
import { SAMPLE_SLIDE_18_DATA } from '../data/samplePresentationData'
import '../styles/presentationSlides.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Slide17GrowPrep({ onPrev, onNavigate }: Props) {
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
          <div className="pres-eyebrow">Scale & Agility • Slide 18 of 19</div>
          <h1 className="pres-title">{SAMPLE_SLIDE_18_DATA.title}</h1>
          <p className="pres-subtitle">{SAMPLE_SLIDE_18_DATA.subtitle}</p>
        </div>

        <div className="pres-header-actions">
          <button className="btn-hub-return" onClick={returnToHub}>
            <span>← Hub (Slide 3)</span>
          </button>
        </div>
      </header>

      {/* Main Content: Copied GROW Banners (Left) + Advantages List (Right) */}
      <main className="pres-main">
        <div className="slide18-split">
          {/* GROW Visual Banner */}
          <div className="slide18-banner-box">
            <img
              src={SAMPLE_SLIDE_18_DATA.growBanner}
              alt="SAP GROW Ecosystem Overview Banner"
            />
            <div style={{ textAlign: 'center', maxWidth: '400px' }}>
              <h3 style={{ color: '#34d399', fontSize: '18px', marginBottom: '6px' }}>
                Start with What You Need. Grow Without Limits.
              </h3>
              <p style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.4' }}>
                Activate Joule and domain agents across your choice of Finance, SCM, or HR with pre-configured cloud simplicity.
              </p>
            </div>
          </div>

          {/* Advantages List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SAMPLE_SLIDE_18_DATA.advantages.map((adv, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  background: 'rgba(13, 27, 77, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <h4 style={{ color: '#10b981', fontSize: '14.5px', marginBottom: '4px' }}>
                  ✦ {adv.title}
                </h4>
                <p style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.35' }}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pres-footer">
        <button className="pres-footer-nav-btn" onClick={onPrev}>
          ‹ Slide 16: RISE with SAP
        </button>

        <BrandLockup variant="footer" theme="dark" />

        <button
          className="pres-footer-nav-btn"
          onClick={returnToHub}
          style={{ borderColor: 'rgba(201, 162, 75, 0.5)', color: '#c9a24b' }}
        >
          Return to Hub (Slide 3) ↺
        </button>
      </footer>
    </div>
  )
}
