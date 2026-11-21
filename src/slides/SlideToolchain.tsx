import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import toolchainDiagram from '../assets/agent_led_toolchain_diagram.png'
import '../styles/toolchain.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface ToolInfo {
  name: string
  category: 'architecture' | 'process' | 'lifecycle' | 'development' | 'partner' | 'assistant'
  role: string
}

const TOOLS: ToolInfo[] = [
  { name: 'SAP LeanIX', category: 'architecture', role: 'Enterprise architecture management, app rationalization & clean core alignment' },
  { name: 'SAP Signavio', category: 'process', role: 'Process intelligence, process mining & end-to-end process orchestration' },
  { name: 'SAP Cloud ALM', category: 'lifecycle', role: 'Cloud Application Lifecycle Management for implementation & operations' },
  { name: 'SAP Build + Integration Suite', category: 'development', role: 'Low-code extension development, business workflows & integration' },
  { name: 'Syniti', category: 'partner', role: 'Automated data migration, cleansing & readiness validation' },
  { name: 'Tricentis', category: 'partner', role: 'Automated continuous testing and risk-based regression validation' },
  { name: 'OpenText', category: 'partner', role: 'Enterprise content management & structured document archival' },
  { name: 'WalkMe', category: 'partner', role: 'Digital adoption platform for accelerated user onboarding & change management' },
  { name: 'Joule for Consultants', category: 'assistant', role: 'AI copilot for business process scoping & best practice guidance' },
  { name: 'Joule for Developers', category: 'assistant', role: 'Generative AI assistant for ABAP modernization, app dev & testing' },
]

export default function SlideToolchain({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [selectedTool, setSelectedTool] = useState<ToolInfo | null>(null)

  const goToAiRapid = () => {
    window.location.hash = '#/ai_rapid'
  }

  const goToAssistants = () => {
    window.location.hash = '#/atc_assistants'
  }

  const goToAgents = () => {
    window.location.hash = '#/atc_agents'
  }

  const goToAgenticTransformation = () => {
    window.location.hash = '#/agentic_led_transformation'
  }

  return (
    <div className="toolchain-container">
      <div className="toolchain-glow-purple" aria-hidden="true" />
      <div className="toolchain-glow-blue" aria-hidden="true" />

      {/* Slide Header */}
      <header className="toolchain-header">
        <div className="toolchain-title-group">
          <h1 className="toolchain-title">Agent-led toolchain</h1>
          <p className="toolchain-subtitle">
            Driving business value and accelerated transformation
          </p>
        </div>

        <div
          className="toolchain-sparkle-badge"
          onClick={() => setIsZoomed(true)}
          title="Click to zoom toolchain diagram"
          aria-label="Zoom toolchain diagram"
          role="button"
          tabIndex={0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
        </div>
      </header>

      {/* Main Diagram Area */}
      <main className="toolchain-main">
        <div
          className="toolchain-diagram-card"
          onClick={() => setIsZoomed(true)}
          title="Click to expand diagram in high resolution"
          role="button"
          tabIndex={0}
        >
          <img
            src={toolchainDiagram}
            alt="Agent-led toolchain driving business value and accelerated transformation architecture diagram"
            className="toolchain-img"
          />
          <span className="toolchain-zoom-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            Click to Enlarge
          </span>
        </div>

        {/* Interactive Tool Highlights Strip */}
        <div className="toolchain-interactive-strip" aria-label="Ecosystem tools and assistants">
          {TOOLS.map((tool, idx) => (
            <button
              key={idx}
              className={`tool-chip ${selectedTool?.name === tool.name ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedTool(selectedTool?.name === tool.name ? null : tool)
              }}
              title={tool.role}
            >
              <span>{tool.name}</span>
            </button>
          ))}
        </div>

        {/* Tool Description Pill */}
        {selectedTool && (
          <div
            style={{
              marginTop: '10px',
              padding: '8px 18px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)',
              fontSize: '13px',
              color: '#1e293b',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '850px',
              animation: 'modalFadeIn 0.2s ease-out',
            }}
          >
            <strong style={{ color: '#6d28d9', whiteSpace: 'nowrap' }}>{selectedTool.name}:</strong>
            <span>{selectedTool.role}</span>
          </div>
        )}
      </main>

      {/* Footer Navigation */}
      <footer className="toolchain-footer">
        <button
          className="toolchain-nav-btn"
          onClick={onPrev || goToAiRapid}
          aria-label="Return to AI Rapid Implementation"
        >
          <span>‹</span>
          <span>AI Rapid Implementation</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="toolchain-nav-btn"
            onClick={goToAgenticTransformation}
            aria-label="Return to Agentic-Led Transformation"
          >
            <span>Agentic-Led Transformation</span>
          </button>

          <button
            className="toolchain-nav-btn primary"
            onClick={onNext || goToAssistants}
            aria-label="Proceed to ATC Assistants"
          >
            <span>ATC Assistants</span>
            <span>›</span>
          </button>

          <button
            className="toolchain-nav-btn primary"
            onClick={goToAgents}
            aria-label="Proceed to ATC Agents"
          >
            <span>ATC Agents</span>
            <span>›</span>
          </button>
        </div>
      </footer>

      {/* High-Resolution Lightbox Modal */}
      {isZoomed && (
        <div
          className="toolchain-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="toolchain-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="toolchain-modal-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close enlarged diagram"
            >
              ✕
            </button>
            <img
              src={toolchainDiagram}
              alt="Enlarged Agent-led toolchain diagram"
              className="toolchain-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
