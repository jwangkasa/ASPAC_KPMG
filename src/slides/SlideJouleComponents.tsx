import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import mainImg from '../assets/joule_components_main.png'
import conversationsIcon from '../assets/joule_conversations_icon.png'
import spacesIcon from '../assets/joule_spaces_icon.png'
import developIcon from '../assets/joule_develop_icon.png'
import '../styles/jouleComponents.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideJouleComponents({ onNavigate }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToJoule = () => {
    if (onNavigate) {
      onNavigate(4)
    } else {
      window.location.hash = '#/4'
    }
  }

  const goToArchitecture = () => {
    window.location.hash = '#/joule-architecture'
  }

  const goToSuite = () => {
    if (onNavigate) {
      onNavigate(5)
    } else {
      window.location.hash = '#/Autonomous_Suite'
    }
  }

  return (
    <div className="joule-comp-container">
      {/* Header */}
      <header className="joule-comp-header">
        <div className="joule-comp-header-text">
          <div className="joule-comp-eyebrow">Engagement Layer • Joule Work Components</div>
          <h1 className="joule-comp-main-title">Joule Components</h1>
          <p className="joule-comp-subtitle">
            One engagement layer to direct business across conversations, collaborative workspaces, and developer runtimes
          </p>
        </div>
      </header>

      {/* Main 2-Column Stage */}
      <main className="joule-comp-main">
        <div className="joule-comp-grid">
          {/* Left: Main Joule Component Screenshot */}
          <div
            className="joule-comp-image-card"
            onClick={() => setIsZoomed(true)}
            role="button"
            tabIndex={0}
            title="Click to view enlarged"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
            }}
          >
            <img
              src={mainImg}
              alt="Joule Work - Core Interface and Workflow Engine"
              className="joule-comp-main-img"
            />
            <div className="joule-comp-zoom-hint" aria-hidden="true">
              <span>Click to zoom</span>
              <span>⤢</span>
            </div>
          </div>

          {/* Right: 3 Component Cards */}
          <div className="joule-comp-cards-column">
            {/* Card 1: Conversations */}
            <div className="joule-feature-card conversations">
              <div className="joule-feature-header">
                <span className="joule-feature-icon">
                  <img src={conversationsIcon} alt="Conversations Icon" />
                </span>
                <h3 className="joule-feature-title">Conversations</h3>
              </div>
              <p className="joule-feature-body">
                AI chat where people get quick insights and perform business tasks across SAP and non-SAP systems.
              </p>
            </div>

            {/* Card 2: Spaces */}
            <div className="joule-feature-card spaces">
              <div className="joule-feature-header">
                <span className="joule-feature-icon">
                  <img src={spacesIcon} alt="Spaces Icon" />
                </span>
                <h3 className="joule-feature-title">Spaces</h3>
              </div>
              <p className="joule-feature-body">
                Dynamic, AI-generated workspaces for problem solving.
              </p>
            </div>

            {/* Card 3: Develop */}
            <div className="joule-feature-card develop">
              <div className="joule-feature-header">
                <span className="joule-feature-icon">
                  <img src={developIcon} alt="Develop Icon" />
                </span>
                <h3 className="joule-feature-title">Develop</h3>
              </div>
              <p className="joule-feature-body">
                Seamless navigation into Joule Studio, SAP's development solution for building custom agents, applications and workflows.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="joule-comp-footer">
        <button
          className="joule-comp-nav-btn"
          onClick={goToJoule}
          aria-label="Return to Slide 4: Joule"
        >
          ‹ Slide 4: Joule
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            className="joule-comp-nav-btn"
            onClick={goToArchitecture}
            aria-label="Open Joule Architecture"
          >
            Architecture Blueprint ›
          </button>
          <button
            className="joule-comp-nav-btn primary"
            onClick={goToSuite}
            aria-label="Proceed to Slide 5: Autonomous Suite"
          >
            Slide 5: Autonomous Suite ›
          </button>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {isZoomed && (
        <div
          className="suite-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="suite-modal-content wide" onClick={(e) => e.stopPropagation()}>
            <div className="suite-modal-header">
              <h3>Joule Work - Core Interface & Components</h3>
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
                src={mainImg}
                alt="Enlarged Joule Component View"
                className="suite-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
