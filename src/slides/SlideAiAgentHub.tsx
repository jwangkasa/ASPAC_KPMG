import { useState, useRef, useEffect } from 'react'
import BrandLockup from '../components/BrandLockup'
import aiAgentHubDiagram from '../assets/ai_agent_hub_diagram.png'
import '../styles/aiAgentHub.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface DemoMovie {
  id: number
  title: string
  subtitle: string
  src: string
}

const DEMO_MOVIES: DemoMovie[] = [
  {
    id: 1,
    title: 'Discover Agents',
    subtitle: 'Scan catalog, MCP registry & multi-ecosystem sources (SAP, MSFT, Google, AWS)',
    src: '/videos/1_AgentHub.mp4',
  },
  {
    id: 2,
    title: 'Govern Agents',
    subtitle: 'Enforce access policy, identity & security guardrails across environments',
    src: '/videos/2_AgentHub.mp4',
  },
  {
    id: 3,
    title: 'Review and Approve Agents',
    subtitle: 'Evaluate benchmarks, safety scores & release gates prior to deployment',
    src: '/videos/3_AgentHub.mp4',
  },
  {
    id: 4,
    title: 'Monitor Agents',
    subtitle: 'Trace execution latency, token spend & observability telemetry logs',
    src: '/videos/4_AgentHub.mp4',
  },
  {
    id: 5,
    title: 'Optimize Agents',
    subtitle: 'Mine agent workflows, prune bottlenecks & boost accuracy with real data',
    src: '/videos/5_AgentHub.mp4',
  },
  {
    id: 6,
    title: 'Map Agents to Organization',
    subtitle: 'Assign agent skills to business roles, workflows & workforce structures',
    src: '/videos/6_AgentHub.mp4',
  },
]

export default function SlideAiAgentHub({ onPrev, onNavigate }: Props) {
  const [activeMovie, setActiveMovie] = useState<DemoMovie>(DEMO_MOVIES[0])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isEnded, setIsEnded] = useState<boolean>(false)
  const [isDiagramZoomed, setIsDiagramZoomed] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Current, next, and previous movies in the sequence
  const currentIdx = DEMO_MOVIES.findIndex((m) => m.id === activeMovie.id)
  const nextIdx = currentIdx >= 0 && currentIdx < DEMO_MOVIES.length - 1 ? currentIdx + 1 : 0
  const prevIdx = currentIdx > 0 ? currentIdx - 1 : DEMO_MOVIES.length - 1
  const nextMovie = DEMO_MOVIES[nextIdx]
  const prevMovie = DEMO_MOVIES[prevIdx]

  // Auto-play when movie changes or when isPlaying is triggered
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may require user interaction in some browser policies
      })
    }
  }, [isPlaying, activeMovie])

  // Close modals on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDiagramZoomed(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const playNextMovie = () => {
    setActiveMovie(nextMovie)
    setIsEnded(false)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const playPrevMovie = () => {
    setActiveMovie(prevMovie)
    setIsEnded(false)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handlePlayDiscoverAgents = () => {
    setActiveMovie(DEMO_MOVIES[0])
    setIsEnded(false)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handlePlayGovernAgents = () => {
    setActiveMovie(DEMO_MOVIES[1])
    setIsEnded(false)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handlePlayReviewApproveAgents = () => {
    setActiveMovie(DEMO_MOVIES[2])
    setIsEnded(false)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handlePlayMonitorAgents = () => {
    setActiveMovie(DEMO_MOVIES[3])
    setIsEnded(false)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handlePlayOptimizeAgents = () => {
    setActiveMovie(DEMO_MOVIES[4])
    setIsEnded(false)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handlePlayMapAgents = () => {
    setActiveMovie(DEMO_MOVIES[5])
    setIsEnded(false)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }


  const goToPlatform = () => {
    if (onPrev) {
      onPrev()
    } else if (onNavigate) {
      onNavigate(7)
    } else {
      window.location.hash = '#/7'
    }
  }

  const goToAgentLedTransformation = () => {
    window.location.hash = '#/agentic_led_transformation'
  }

  const goToAiServices = () => {
    window.location.hash = '#/ai_services'
  }

  return (
    <div className="hub-container">
      <div className="hub-bg-pattern" aria-hidden="true" />

      {/* Header Section */}
      <header className="hub-header">
        <div className="hub-title-group">
          <div className="hub-eyebrow">
            <span>SAP Business AI Platform • Enterprise Governance & Lifecycle</span>
          </div>
          <h1 className="hub-main-title">
            <span className="hub-title-gradient">SAP AI Agent Hub</span> & Governance
          </h1>
          <p className="hub-main-subtitle">
            Unified control plane orchestrating discovery, verification, observability, and organizational alignment across all enterprise agents.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            className="hub-nav-btn"
            onClick={goToAiServices}
            title="View SAP AI Core Services"
          >
            <span>⚡ AI Services</span>
          </button>
        </div>
      </header>

      {/* Main Split Stage: Left Diagram Image, Right Interactive Button & Video */}
      <main className="hub-split-stage" aria-label="SAP AI Agent Hub Split Showcase">
        {/* Left Column: Architecture Diagram Image */}
        <section
          className="hub-left-panel"
          onClick={() => setIsDiagramZoomed(true)}
          title="Click to zoom architecture diagram"
        >
          <img
            src={aiAgentHubDiagram}
            alt="SAP AI Agent Hub & Governance Architecture"
            className="hub-diagram-img"
          />
          <div className="hub-zoom-hint">
            <span>🔍</span>
            <span>Click to enlarge diagram</span>
          </div>
        </section>

        {/* Right Column: Discover Agents Action & Movie Player */}
        <section className="hub-right-panel">
          <div className="hub-right-header">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="hub-demo-badge">
                <span>🎬</span>
                <span>Demo {activeMovie.id} of {DEMO_MOVIES.length}</span>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  type="button"
                  className="hub-video-nav-arrow"
                  onClick={playPrevMovie}
                  title={`Previous Demo: ${prevMovie.id}) ${prevMovie.title}`}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="hub-video-nav-arrow"
                  onClick={playNextMovie}
                  title={`Next Demo: ${nextMovie.id}) ${nextMovie.title}`}
                >
                  ›
                </button>
              </div>
            </div>
            <h2 className="hub-right-title">{activeMovie.title}</h2>
            <p className="hub-right-desc">{activeMovie.subtitle}</p>
          </div>

          {/* Embedded Video Display Area */}
          <div className="hub-video-preview-box">
            <video
              ref={videoRef}
              key={activeMovie.src}
              src={activeMovie.src}
              controls
              playsInline
              className="hub-video-preview-element"
              poster=""
              onEnded={() => setIsEnded(true)}
              onPlay={() => setIsEnded(false)}
            >
              Your browser does not support the video tag.
            </video>

            {/* Next Video Prompt Overlay on Video End */}
            {isEnded && (
              <div
                className="hub-video-ended-overlay"
                onClick={playNextMovie}
                title="Click anywhere to play next demo"
              >
                <div className="hub-video-ended-content">
                  <span className="hub-video-ended-icon">🎬</span>
                  <div className="hub-video-ended-info">
                    <span className="hub-video-ended-subtitle">Video Complete</span>
                    <h4 className="hub-video-ended-title">Next: {nextMovie.id}) {nextMovie.title}</h4>
                  </div>
                  <button
                    type="button"
                    className="hub-video-next-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      playNextMovie()
                    }}
                  >
                    <span>Play Next Demo</span>
                    <span>▶</span>
                  </button>
                  <span className="hub-video-click-hint">Click anywhere to play next</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons: Discover Agents & Govern Agents */}
          <div className="hub-action-buttons-stack">
            <button
              type="button"
              className={`hub-hero-action-btn discover ${activeMovie.id === 1 ? 'active' : ''}`}
              onClick={handlePlayDiscoverAgents}
              title="Play Movie 1: Discover Agents"
            >
              <div className="hub-hero-action-btn-left">
                <span className="hub-play-symbol">▶</span>
                <span>Discover Agents</span>
              </div>
              <span className={`hub-hero-badge ${activeMovie.id === 1 && isPlaying ? 'playing' : ''}`}>
                {activeMovie.id === 1 && isPlaying ? '● Playing' : '1) Discover'}
              </span>
            </button>

            <button
              type="button"
              className={`hub-hero-action-btn govern ${activeMovie.id === 2 ? 'active' : ''}`}
              onClick={handlePlayGovernAgents}
              title="Play Movie 2: Govern Agents"
            >
              <div className="hub-hero-action-btn-left">
                <span className="hub-play-symbol">▶</span>
                <span>Govern Agents</span>
              </div>
              <span className={`hub-hero-badge ${activeMovie.id === 2 && isPlaying ? 'playing' : ''}`}>
                {activeMovie.id === 2 && isPlaying ? '● Playing' : '2) Govern'}
              </span>
            </button>

            <button
              type="button"
              className={`hub-hero-action-btn review ${activeMovie.id === 3 ? 'active' : ''}`}
              onClick={handlePlayReviewApproveAgents}
              title="Play Movie 3: Review & Approve Agents"
            >
              <div className="hub-hero-action-btn-left">
                <span className="hub-play-symbol">▶</span>
                <span>Review & Approve Agents</span>
              </div>
              <span className={`hub-hero-badge ${activeMovie.id === 3 && isPlaying ? 'playing' : ''}`}>
                {activeMovie.id === 3 && isPlaying ? '● Playing' : '3) Review'}
              </span>
            </button>

            <button
              type="button"
              className={`hub-hero-action-btn monitor ${activeMovie.id === 4 ? 'active' : ''}`}
              onClick={handlePlayMonitorAgents}
              title="Play Movie 4: Monitor Agents"
            >
              <div className="hub-hero-action-btn-left">
                <span className="hub-play-symbol">▶</span>
                <span>Monitor Agents</span>
              </div>
              <span className={`hub-hero-badge ${activeMovie.id === 4 && isPlaying ? 'playing' : ''}`}>
                {activeMovie.id === 4 && isPlaying ? '● Playing' : '4) Monitor'}
              </span>
            </button>

            <button
              type="button"
              className={`hub-hero-action-btn optimize ${activeMovie.id === 5 ? 'active' : ''}`}
              onClick={handlePlayOptimizeAgents}
              title="Play Movie 5: Optimize Agents"
            >
              <div className="hub-hero-action-btn-left">
                <span className="hub-play-symbol">▶</span>
                <span>Optimize Agents</span>
              </div>
              <span className={`hub-hero-badge ${activeMovie.id === 5 && isPlaying ? 'playing' : ''}`}>
                {activeMovie.id === 5 && isPlaying ? '● Playing' : '5) Optimize'}
              </span>
            </button>

            <button
              type="button"
              className={`hub-hero-action-btn map ${activeMovie.id === 6 ? 'active' : ''}`}
              onClick={handlePlayMapAgents}
              title="Play Movie 6: Map Agents to Organization"
            >
              <div className="hub-hero-action-btn-left">
                <span className="hub-play-symbol">▶</span>
                <span>Map Agents to Organization</span>
              </div>
              <span className={`hub-hero-badge ${activeMovie.id === 6 && isPlaying ? 'playing' : ''}`}>
                {activeMovie.id === 6 && isPlaying ? '● Playing' : '6) Map'}
              </span>
            </button>
          </div>
        </section>
      </main>

      {/* Navigation Footer */}
      <footer className="hub-footer">
        <button
          type="button"
          className="hub-nav-btn"
          onClick={goToPlatform}
          aria-label="Return to Slide 7: Business AI Platform"
        >
          <span>‹</span>
          <span>Slide 7: Business AI Platform</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            className="hub-nav-btn"
            onClick={() => { window.location.hash = '#/Solidify_AI' }}
            title="Explore Solidifying the AI Journey Blueprint"
          >
            <span>Solidify AI</span>
            <span>›</span>
          </button>

          <button
            type="button"
            className="hub-nav-btn primary"
            onClick={goToAgentLedTransformation}
            aria-label="Proceed to Agent-led Transformation"
            title="Explore Agent-led Transformation"
          >
            <span>Agent-led Transformation</span>
            <span>›</span>
          </button>
        </div>
      </footer>

      {/* High-Definition Diagram Zoom Modal */}
      {isDiagramZoomed && (
        <div
          className="hub-modal-overlay"
          onClick={() => setIsDiagramZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="hub-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="hub-modal-header">
              <h3 className="hub-modal-title">SAP AI Agent Hub & Governance Architecture</h3>
              <button
                type="button"
                className="hub-modal-close-btn"
                onClick={() => setIsDiagramZoomed(false)}
                aria-label="Close zoom modal"
              >
                ✕
              </button>
            </div>
            <div className="hub-modal-body" style={{ background: '#ffffff', padding: '1rem' }}>
              <img
                src={aiAgentHubDiagram}
                alt="SAP AI Agent Hub & Governance Architecture Full Size"
                style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
