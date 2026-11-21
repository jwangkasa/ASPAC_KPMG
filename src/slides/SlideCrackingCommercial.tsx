import BrandLockup from '../components/BrandLockup'
import japaneseCommercialBg from '../assets/hero/japanese_commercial_wealth_bg.jpg'
import '../styles/crackingCommercial.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

// Floating Koban Japanese gold coins positions
const KOBAN_PARTICLES = [
  { left: '8%', delay: '0s', duration: '14s', size: '20px' },
  { left: '18%', delay: '4s', duration: '18s', size: '26px' },
  { left: '27%', delay: '1.5s', duration: '16s', size: '22px' },
  { left: '38%', delay: '6s', duration: '20s', size: '28px' },
  { left: '46%', delay: '3s', duration: '15s', size: '18px' },
  { left: '58%', delay: '7.5s', duration: '17s', size: '24px' },
  { left: '68%', delay: '2s', duration: '19s', size: '26px' },
  { left: '79%', delay: '5s', duration: '14s', size: '22px' },
  { left: '88%', delay: '1s', duration: '22s', size: '30px' },
  { left: '94%', delay: '8s', duration: '16s', size: '20px' },
]

export default function SlideCrackingCommercial({ onPrev, onNext }: Props) {
  const goToPrev = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/grow'
    }
  }

  const goToNext = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/Start_Grow_AI'
    }
  }

  const goToJouleBase = () => {
    window.location.hash = '#/joule_base'
  }

  const goToPremiumAi = () => {
    window.location.hash = '#/Premium_AI'
  }

  const goToJouleStudio = () => {
    window.location.hash = '#/Joule_Studio'
  }

  return (
    <div className="commercial-container">
      {/* Background: Japanese Commercial Culture & Prosperity Artwork */}
      <div className="commercial-art-stage" aria-hidden="true">
        <img
          src={japaneseCommercialBg}
          alt="Edo period Japanese commercial counting house and vermilion Torii gates of prosperity"
          className="commercial-bg-img"
        />
        <div className="commercial-vignette-top" />
        <div className="commercial-vignette-bottom" />
        <div className="commercial-torii-glow" />

        {/* Floating Japanese Gold Koban Coins Animation */}
        <div className="commercial-gold-particles">
          {KOBAN_PARTICLES.map((p, idx) => (
            <div
              key={`koban-${idx}`}
              className="commercial-koban"
              style={{
                left: p.left,
                width: p.size,
                height: `calc(${p.size} * 1.35)`,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="commercial-header">
        <div className="commercial-title-group">
          <div className="commercial-eyebrow">
            <span>商売繁盛 • Commercial Architecture</span>
          </div>
          <h1 className="commercial-title">
            Cracking the <span className="highlight-gold">Commercial</span>
          </h1>
          <p className="commercial-subtitle">
            How enterprise leaders navigate AI commercialization, entitlement tiers, and consumption economics across the SAP Enterprise AI landscape.
          </p>
        </div>
      </header>

      {/* Main Area: 3 Bottom Circles */}
      <main className="commercial-main">
        {/* 3 Small Circles Bottom: Joule Base, SAP Assistants/Agents, Custom Agents */}
        <section className="commercial-circles-stage" aria-label="Commercial AI Tiers">
          {/* Circle 1: Joule Base */}
          <button
            type="button"
            className="commercial-circle-card joule-base"
            onClick={goToJouleBase}
            title="Click to explore Joule Base page"
          >
            <div className="commercial-circle-node">
              <div className="commercial-circle-icon">
                {/* Joule Sparkle / Core Icon */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 4L24 16L36 20L24 24L20 36L16 24L4 20L16 16L20 4Z"
                    fill="url(#jouleCircleGrad)"
                  />
                  <circle cx="20" cy="20" r="3" fill="#ffffff" />
                  <defs>
                    <linearGradient id="jouleCircleGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ffffff" />
                      <stop offset="0.5" stopColor="#7dd3fc" />
                      <stop offset="1" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="commercial-circle-label-group">
              <h3 className="commercial-circle-title">Joule Base</h3>
              <span className="commercial-circle-badge">Cloud Entitlement</span>
            </div>
          </button>

          {/* Circle 2: SAP Assistants/Agents */}
          <button
            type="button"
            className="commercial-circle-card sap-agents"
            onClick={goToPremiumAi}
            title="Click to explore Premium AI (AI Units) page"
          >
            <div className="commercial-circle-node">
              <div className="commercial-circle-icon">
                {/* Autonomous Multi-Agent Robot / Network Icon */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="8" y="10" width="24" height="20" rx="6" stroke="#ffffff" strokeWidth="2.5" fill="none" />
                  <circle cx="15" cy="18" r="2.5" fill="#ffffff" />
                  <circle cx="25" cy="18" r="2.5" fill="#ffffff" />
                  <path d="M15 24H25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20 4V10" stroke="#f0abfc" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="20" cy="4" r="2.5" fill="#f0abfc" />
                </svg>
              </div>
            </div>
            <div className="commercial-circle-label-group">
              <h3 className="commercial-circle-title">SAP Assistants/Agents</h3>
              <span className="commercial-circle-badge">AI Units Metered</span>
            </div>
          </button>

          {/* Circle 3: Custom Agents */}
          <button
            type="button"
            className="commercial-circle-card custom-agents"
            onClick={goToJouleStudio}
            title="Click to explore Joule Studio page"
          >
            <div className="commercial-circle-node">
              <div className="commercial-circle-icon">
                {/* Custom Brain / Architecture Hub Icon */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="14" stroke="#ffffff" strokeWidth="2.5" />
                  <path d="M20 8V32 M8 20H32" stroke="#fde047" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="20" cy="20" r="4.5" fill="#ffffff" />
                  <circle cx="20" cy="11" r="2" fill="#facc15" />
                  <circle cx="29" cy="20" r="2" fill="#facc15" />
                  <circle cx="20" cy="29" r="2" fill="#facc15" />
                  <circle cx="11" cy="20" r="2" fill="#facc15" />
                </svg>
              </div>
            </div>
            <div className="commercial-circle-label-group">
              <h3 className="commercial-circle-title">Custom Agents</h3>
              <span className="commercial-circle-badge">Tokens & BTP Runtime</span>
            </div>
          </button>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="commercial-footer">
        <button
          className="commercial-nav-btn"
          onClick={goToPrev}
          aria-label="Return to SAP GROW"
        >
          ‹ SAP GROW (Slide 10)
        </button>

        <BrandLockup variant="footer" theme="dark" />

        <button
          className="commercial-nav-btn primary"
          onClick={goToNext}
          aria-label="Proceed to Start & Grow with SAP AI"
        >
          Start & Grow with AI ›
        </button>
      </footer>
    </div>
  )
}
