import { useEffect, useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import suiteDiagram from '../assets/autonomous_suite_diagram.png'
import '../styles/autonomousSuite.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Slide5AutonomousSuite({ onNavigate }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<'explainer' | 'accruals' | 'tender' | 'connect'>('explainer')

  const VIDEOS = {
    explainer: {
      title: 'How Joule Agents and Joule Assistants Work | Explainer',
      badge: 'Official SAP Explainer',
      src: '/videos/how_joule_agents_assistants_work.webm',
      tabLabel: 'How Agents & Assistants Work',
    },
    accruals: {
      title: 'Accounting Accruals Agent for Scalable Precision | Joule Agents',
      badge: 'Autonomous Finance Agent',
      src: '/videos/accounting_accruals_agent.webm',
      tabLabel: 'Accruals Agent',
    },
    tender: {
      title: 'Joule Agents: Tender Analysis Agent Demo',
      badge: 'Autonomous Spend Agent',
      src: '/videos/tender_analysis_agent.webm',
      tabLabel: 'Tender Analysis Agent',
    },
    connect: {
      title: 'Introducing Assistants in Joule & Smarter Ways to Work',
      badge: 'SAP Connect Showcase',
      src: '/videos/assistants_agents_demo.mp4',
      tabLabel: 'SAP Connect Demo',
    },
  }

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isVideoPlaying) setIsVideoPlaying(false)
        if (isZoomed) setIsZoomed(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVideoPlaying, isZoomed])

  const goToDomain = (hashName: string) => {
    window.location.hash = `#/${hashName}`
  }

  const goToFinance = () => goToDomain('finance')
  const goToSpend = () => goToDomain('spend')
  const goToSCM = () => goToDomain('scm')
  const goToHCM = () => goToDomain('hcm')
  const goToCX = () => goToDomain('cx')

  const goToNext = () => {
    window.location.hash = '#/6'
    if (onNavigate) {
      onNavigate(6)
    }
  }

  const goToJoule = () => {
    window.location.hash = '#/4'
    if (onNavigate) {
      onNavigate(4)
    }
  }

  return (
    <div className="suite-slide-container">
      {/* Slide Header: Autonomous Suite */}
      <header className="suite-header">
        <div className="suite-eyebrow">Operational Core • Slide 5 of 19</div>
        <h1 className="suite-main-title">Autonomous Suite</h1>
        <p className="suite-subtitle">
          Unified engagement layer, domain assistants, autonomous agents, and modular skills
        </p>
      </header>

      {/* Main Content: Autonomous Suite Architecture Diagram with Interactive Hotspots */}
      <main className="suite-main-content">
        <div className="suite-diagram-wrapper">
          {/* Quick Domain Launcher Bar */}
          <div className="suite-domains-bar">
            <span className="suite-bar-label">Explore Domains:</span>
            <button
              className="suite-domain-pill active"
              onClick={goToFinance}
              title="Open Autonomous Finance detail"
            >
              <span className="domain-pulse-dot" />
              <span>Autonomous Finance</span>
              <span className="domain-arrow">→</span>
            </button>
            <button
              className="suite-domain-pill active"
              onClick={goToSpend}
              title="Open Autonomous Spend detail"
            >
              <span className="domain-pulse-dot" />
              <span>Autonomous Spend</span>
              <span className="domain-arrow">→</span>
            </button>
            <button
              className="suite-domain-pill active"
              onClick={goToSCM}
              title="Open Autonomous SCM detail"
            >
              <span className="domain-pulse-dot" />
              <span>Autonomous SCM</span>
              <span className="domain-arrow">→</span>
            </button>
            <button
              className="suite-domain-pill active"
              onClick={goToHCM}
              title="Open Autonomous HCM detail"
            >
              <span className="domain-pulse-dot" />
              <span>Autonomous HCM</span>
              <span className="domain-arrow">→</span>
            </button>
            <button
              className="suite-domain-pill active"
              onClick={goToCX}
              title="Open Autonomous CX detail"
            >
              <span className="domain-pulse-dot" />
              <span>Autonomous CX</span>
              <span className="domain-arrow">→</span>
            </button>
          </div>

          {/* Diagram Card with Direct Hotspots */}
          <div className="suite-diagram-card">
            <div className="suite-diagram-stage">
              <img
                src={suiteDiagram}
                alt="SAP Autonomous Suite Architecture Diagram"
                className="suite-diagram-img"
                onClick={() => setIsZoomed(true)}
              />

              {/* Interactive Hotspots directly over each domain on the diagram */}
              <button
                className="suite-hotspot finance"
                onClick={goToFinance}
                aria-label="Open Autonomous Finance domain page"
                title="Click to view Autonomous Finance detail"
              >
                <span className="hotspot-tooltip">Open Finance →</span>
              </button>

              <button
                className="suite-hotspot spend"
                onClick={goToSpend}
                aria-label="Open Autonomous Spend domain page"
                title="Click to view Autonomous Spend detail"
              >
                <span className="hotspot-tooltip">Open Spend →</span>
              </button>

              <button
                className="suite-hotspot scm"
                onClick={goToSCM}
                aria-label="Open Autonomous SCM domain page"
                title="Click to view Autonomous SCM detail"
              >
                <span className="hotspot-tooltip">Open SCM →</span>
              </button>

              <button
                className="suite-hotspot hcm"
                onClick={goToHCM}
                aria-label="Open Autonomous HCM domain page"
                title="Click to view Autonomous HCM detail"
              >
                <span className="hotspot-tooltip">Open HCM →</span>
              </button>

              <button
                className="suite-hotspot cx"
                onClick={goToCX}
                aria-label="Open Autonomous CX domain page"
                title="Click to view Autonomous CX detail"
              >
                <span className="hotspot-tooltip">Open CX →</span>
              </button>
            </div>

            <button
              className="suite-zoom-btn"
              onClick={() => setIsZoomed(true)}
              aria-label="Enlarge diagram"
            >
              <span>Click diagram to zoom</span>
              <span>⤢</span>
            </button>
          </div>
        </div>

        {/* Right-Center Floating Action Button: Play Assistants/Agents */}
        <div className="suite-right-center-anchor">
          <button
            className="suite-video-play-btn"
            onClick={() => setIsVideoPlaying(true)}
            title="Watch Domain Assistants & Autonomous Agents in Action"
            aria-label="Play Assistants/Agents"
          >
            <div className="suite-play-icon-glow">
              <span className="suite-play-icon">▶</span>
            </div>
            <div className="suite-play-btn-text">
              <span className="suite-play-tag">Demo Video</span>
              <span className="suite-play-title">Play Assistants/Agents</span>
            </div>
          </button>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="suite-footer">
        <button
          className="suite-nav-btn"
          onClick={goToJoule}
          aria-label="Return to Joule (Slide 4)"
        >
          ‹ Slide 4: Joule
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="suite-nav-btn primary"
          onClick={goToNext}
          aria-label="Proceed to Industry AI (Slide 6)"
        >
          Industry AI (Slide 6) ›
        </button>
      </footer>

      {/* Lightbox Modal for Full View */}
      {isZoomed && (
        <div
          className="suite-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="suite-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="suite-modal-header">
              <h3>SAP Autonomous Suite</h3>
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
                src={suiteDiagram}
                alt="SAP Autonomous Suite full architecture"
                className="suite-modal-img"
              />
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal for Assistants / Agents */}
      {isVideoPlaying && (
        <div
          className="suite-video-modal-overlay"
          onClick={() => setIsVideoPlaying(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="suite-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="suite-video-modal-header">
              <div className="suite-video-modal-title">
                <span className="suite-video-badge">{VIDEOS[selectedVideo].badge}</span>
                <h3>{VIDEOS[selectedVideo].title}</h3>
              </div>
              <div className="suite-video-modal-actions">
                {/* Video Switcher Tabs */}
                <div className="suite-video-tabs">
                  {(Object.keys(VIDEOS) as Array<keyof typeof VIDEOS>).map((key) => (
                    <button
                      key={key}
                      className={`suite-video-tab ${selectedVideo === key ? 'active' : ''}`}
                      onClick={() => setSelectedVideo(key)}
                    >
                      {VIDEOS[key].tabLabel}
                    </button>
                  ))}
                </div>
                <button
                  className="suite-video-close-btn"
                  onClick={() => setIsVideoPlaying(false)}
                  aria-label="Close Video Player"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="suite-video-player-wrapper">
              <video
                key={selectedVideo}
                src={VIDEOS[selectedVideo].src}
                controls
                autoPlay
                playsInline
                className="suite-video-element"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
