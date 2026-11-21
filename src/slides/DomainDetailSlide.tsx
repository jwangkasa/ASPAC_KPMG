import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import { DOMAIN_CONFIGS, type DomainKey } from '../data/domainConfigs'
import '../styles/autonomousSuite.css'

interface Props {
  domain: DomainKey
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function DomainDetailSlide({ domain }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const config = DOMAIN_CONFIGS[domain]

  const goToDomain = (targetDomain: DomainKey) => {
    window.location.hash = `#/${targetDomain}`
  }

  const goToSuite = () => {
    window.location.hash = '#/Autonomous_Suite'
  }

  const handlePrev = () => {
    if (domain === 'finance') {
      window.location.hash = '#/Autonomous_Suite'
    } else {
      const domains: DomainKey[] = ['finance', 'spend', 'scm', 'hcm', 'cx']
      const currentIndex = domains.indexOf(domain)
      if (currentIndex > 0) {
        window.location.hash = `#/${domains[currentIndex - 1]}`
      } else {
        window.location.hash = '#/Autonomous_Suite'
      }
    }
  }

  const handleNext = () => {
    const domains: DomainKey[] = ['finance', 'spend', 'scm', 'hcm', 'cx']
    const currentIndex = domains.indexOf(domain)
    if (currentIndex < domains.length - 1) {
      window.location.hash = `#/${domains[currentIndex + 1]}`
    } else {
      window.location.hash = '#/6'
    }
  }

  return (
    <div className="suite-slide-container">
      {/* Slide Header: Page Name */}
      <header className="suite-header">
        <div className="suite-eyebrow">
          Operational Core • Slide 5 Architecture Deep Dive • {config.fullName}
        </div>
        <h1 className="suite-main-title">{config.fullName}</h1>
        <p className="suite-subtitle">
          The Autonomous Enterprise is built around five autonomous business domains: {config.fullName}
        </p>
      </header>

      {/* Main Content */}
      <main className="suite-main-content">
        <div className="suite-diagram-wrapper">
          {/* Quick Domain Switcher Bar */}
          <div className="suite-domains-bar">
            <span className="suite-bar-label">Domains:</span>
            {(['finance', 'spend', 'scm', 'hcm', 'cx'] as DomainKey[]).map((d) => {
              const active = d === domain
              return (
                <button
                  key={d}
                  className={`suite-domain-pill ${active ? 'active' : ''}`}
                  onClick={() => goToDomain(d)}
                  title={`Switch to Autonomous ${DOMAIN_CONFIGS[d].title}`}
                >
                  {active && <span className="domain-pulse-dot" />}
                  <span>{DOMAIN_CONFIGS[d].fullName}</span>
                </button>
              )
            })}
            <button
              className="suite-return-hub-btn"
              onClick={goToSuite}
              title="Return to Autonomous Suite overview (Slide 5)"
            >
              <span>‹ Suite</span>
            </button>
          </div>

          {/* Diagram Card with click-to-zoom */}
          <div
            className="suite-diagram-card finance-detail-card"
            onClick={() => setIsZoomed(true)}
            role="button"
            tabIndex={0}
            title="Click to view enlarged"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
            }}
          >
            <img
              src={config.diagram}
              alt={config.alt}
              className="suite-diagram-img"
            />
            <div className="suite-zoom-badge" aria-hidden="true">
              <span>Click to zoom</span>
              <span>⤢</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="suite-footer">
        <button
          className="suite-nav-btn"
          onClick={handlePrev}
          aria-label={config.prevLabel}
        >
          {config.prevLabel}
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="suite-nav-btn primary"
          onClick={handleNext}
          aria-label={config.nextLabel}
        >
          {config.nextLabel}
        </button>
      </footer>

      {/* Lightbox Modal for High-Res Detail Inspection */}
      {isZoomed && (
        <div
          className="suite-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="suite-modal-content wide" onClick={(e) => e.stopPropagation()}>
            <div className="suite-modal-header">
              <h3>{config.fullName} — End-to-End Process Architecture</h3>
              <button
                className="suite-modal-close"
                onClick={() => setIsZoomed(false)}
                aria-label="Close Preview"
              >
                ✕
              </button>
            </div>
            <div className="suite-modal-body">
              <img
                src={config.diagram}
                alt={config.alt}
                className="suite-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
