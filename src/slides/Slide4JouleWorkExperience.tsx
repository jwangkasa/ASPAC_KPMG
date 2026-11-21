import { useEffect, useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import jouleDiagram from '../assets/joule_diagram_exact.png'
import '../styles/jouleWorkExperience.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Slide4JouleWorkExperience({ onNavigate }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Listen for Escape key to close modals
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

  const returnToHub = () => {
    if (onNavigate) {
      onNavigate(3)
    } else {
      window.location.hash = '#/architecture_overview'
    }
  }

  const goToSuite = () => {
    if (onNavigate) {
      onNavigate(5)
    } else {
      window.location.hash = '#/Autonomous_Suite'
    }
  }

  const goToArchitecture = () => {
    window.location.hash = '#/joule-architecture'
  }

  const goToComponents = () => {
    window.location.hash = '#/joule-components'
  }

  const goToSmj = () => {
    window.location.hash = '#/SMJ'
  }

  return (
    <div className="joule-slide-container">
      {/* Slide Header: Renamed to Joule */}
      <header className="joule-header">
        <div className="joule-eyebrow">Engagement Layer • Slide 4 of 19</div>
        <h1 className="joule-main-title">Joule</h1>
        <p className="joule-subtitle">
          One engagement layer to direct business across conversations, spaces, workflows, and developer runtimes
        </p>

        {/* Buttons on the right: Architecture, Component (underneath), and Play Video */}
        <div className="joule-header-actions">
          {/* 1. Architecture Button (Top) */}
          <button
            className="joule-action-btn arch-btn"
            onClick={goToArchitecture}
            title="Open Joule Architecture Blueprint"
            aria-label="Open Architecture page"
          >
            <span className="btn-left">
              <svg
                className="action-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
              </svg>
              <span>Architecture</span>
            </span>
            <span className="action-arrow">→</span>
          </button>

          {/* 2. Component Button (Under Architecture) */}
          <button
            className="joule-action-btn component-btn"
            onClick={goToComponents}
            title="Open Joule Work Components"
            aria-label="Open Components page"
          >
            <span className="btn-left">
              <svg
                className="action-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
              </svg>
              <span>Component</span>
            </span>
            <span className="action-arrow">→</span>
          </button>

          {/* 3. CMJ to SMJ Button (Below Component and Before Play Video) */}
          <button
            className="joule-action-btn smj-btn"
            onClick={goToSmj}
            title="Customer-Managed Joule to SAP-Managed Joule Transition"
            aria-label="Open CMJ to SMJ page"
          >
            <span className="btn-left">
              <svg
                className="action-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 3h5v5" />
                <path d="m21 3-7 7" />
                <path d="M4 21v-7a4 4 0 0 1 4-4h11" />
              </svg>
              <span>CMJ to SMJ</span>
            </span>
            <span className="action-arrow">→</span>
          </button>

          {/* 4. Play Video Button */}
          <button
            className="joule-action-btn video-btn"
            onClick={() => setIsVideoPlaying(true)}
            title="Play Joule Work Video"
            aria-label="Play Joule Work Video"
          >
            <span className="btn-left">
              <svg
                className="action-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Play Video</span>
            </span>
            <span className="action-arrow">▶</span>
          </button>
        </div>
      </header>

      {/* Main Content: Crisp, Natural-Size Diagram (Not Overexposed) */}
      <main className="joule-main-content">
        <div
          className="joule-diagram-card"
          onClick={() => setIsZoomed(true)}
          role="button"
          tabIndex={0}
          title="Click to view enlarged"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
          }}
        >
          <img
            src={jouleDiagram}
            alt="Joule - The New Work Experience: Conversations, Spaces, Jobs, Develop, Discover"
            className="joule-diagram-img"
          />
          <div className="joule-zoom-badge" aria-hidden="true">
            <span>Click to zoom</span>
            <span>⤢</span>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="joule-footer">
        <button
          className="joule-nav-btn"
          onClick={returnToHub}
          aria-label="Return to Slide 3: Strategy & Vision Hub"
        >
          ‹ Slide 3: Strategy & Vision Hub
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="joule-nav-btn primary"
          onClick={goToSuite}
          aria-label="Proceed to Autonomous Suite"
        >
          Slide 5: Autonomous Suite ›
        </button>
      </footer>

      {/* Lightbox Modal for Zoom View */}
      {isZoomed && (
        <div
          className="joule-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="joule-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="joule-modal-header">
              <h3>Joule Work Experience</h3>
              <button
                className="joule-modal-close"
                onClick={() => setIsZoomed(false)}
                aria-label="Close Preview"
              >
                ✕
              </button>
            </div>
            <div className="joule-modal-body">
              <img
                src={jouleDiagram}
                alt="Joule Work Experience full preview"
                className="joule-modal-img"
              />
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {isVideoPlaying && (
        <div
          className="joule-video-modal-overlay"
          onClick={() => setIsVideoPlaying(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="joule-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="joule-video-modal-header">
              <div className="joule-video-modal-title">
                <span className="joule-video-badge">SAP Joule Video</span>
                <h3>Joule Work Experience & Capabilities</h3>
              </div>
              <button
                className="joule-video-close-btn"
                onClick={() => setIsVideoPlaying(false)}
                aria-label="Close Video Player"
              >
                ✕
              </button>
            </div>
            <div className="joule-video-player-wrapper">
              <video
                src="/videos/joule_work_video.mp4"
                controls
                autoPlay
                playsInline
                className="joule-video-element"
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
