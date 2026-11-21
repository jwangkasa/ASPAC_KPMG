import { useState, useEffect } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/joule_studio_spec.png'
import '../styles/jouleStudio.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

type LayerFocus = 'all' | 'designtime' | 'runtime' | 'integration'

export default function SlideJouleStudio({ onPrev, onNext }: Props) {
  const [activeFocus, setActiveFocus] = useState<LayerFocus>('all')
  const [isZoomed, setIsZoomed] = useState(false)
  const [activePillar, setActivePillar] = useState<string | null>(null)

  // Keyboard shortcut to close lightbox on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZoomed) {
        setIsZoomed(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isZoomed])

  const goToPrev = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/agentic_orchestration_pricing'
    }
  }

  const goToNext = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/Joule_Studio_Objectives'
    }
  }

  return (
    <div className="js-container">
      {/* Ambient background glows */}
      <div className="js-ambient-left" aria-hidden="true" />
      <div className="js-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="js-header">
        <div className="js-title-group">
          <div className="js-eyebrow">
            <span>SAP Enterprise AI Architecture • Managed Agent Platform</span>
          </div>
          <h1 className="js-main-title">SAP's managed Platform offering for agentic workloads</h1>
          <p className="js-main-subtitle">
            Joule Studio: The end-to-end enterprise platform to design, deploy, and govern agentic applications across SAP and beyond
          </p>
        </div>

        <div className="js-header-actions">
          {/* Interactive Layer Focus Tabs */}
          <div className="js-focus-btn-group" role="tablist" aria-label="Layer Focus Filters">
            <button
              type="button"
              className={`js-focus-btn ${activeFocus === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFocus('all')}
              role="tab"
              aria-selected={activeFocus === 'all'}
            >
              Full Stack
            </button>
            <button
              type="button"
              className={`js-focus-btn ${activeFocus === 'designtime' ? 'active' : ''}`}
              onClick={() => setActiveFocus('designtime')}
              role="tab"
              aria-selected={activeFocus === 'designtime'}
            >
              Design Time
            </button>
            <button
              type="button"
              className={`js-focus-btn ${activeFocus === 'runtime' ? 'active' : ''}`}
              onClick={() => setActiveFocus('runtime')}
              role="tab"
              aria-selected={activeFocus === 'runtime'}
            >
              Runtime Engine
            </button>
            <button
              type="button"
              className={`js-focus-btn ${activeFocus === 'integration' ? 'active' : ''}`}
              onClick={() => setActiveFocus('integration')}
              role="tab"
              aria-selected={activeFocus === 'integration'}
            >
              Integration
            </button>
          </div>

          <button
            type="button"
            className="js-spec-modal-btn"
            onClick={() => setIsZoomed(true)}
            title="Inspect original architecture specification slide"
          >
            <span>✨ Spec Ref</span>
          </button>
        </div>
      </header>

      {/* Master Native Interactive Architecture Stage */}
      <main className="js-canvas">
        {/* LAYER 1: JOULE WORK */}
        <section
          className={`js-layer-card layer-joule-work ${
            activeFocus !== 'all' && activeFocus !== 'designtime' ? 'dimmed' : ''
          }`}
          aria-label="Joule Work Experience Layer"
        >
          <div className="js-work-center">
            <span className="js-work-title">Joule Work</span>
            <div className="js-work-tabs">
              <span className="js-work-tab">Conversations</span>
              <span className="js-work-sep">|</span>
              <span className="js-work-tab active">Develop</span>
              <span className="js-work-sep">|</span>
              <span className="js-work-tab">Spaces</span>
            </div>
          </div>
        </section>

        {/* LAYER 2: JOULE STUDIO (Core Managed Agent Platform - Resized & Compact) */}
        <section
          className={`js-studio-wrapper ${
            activeFocus === 'integration' ? 'dimmed' : ''
          }`}
          aria-label="Joule Studio Platform"
        >
          <div className="js-studio-main-title">Joule Studio</div>

          {/* Sub-Layer A: Design time */}
          <div
            className={`js-sublayer-box box-design-time ${
              activeFocus !== 'all' && activeFocus !== 'designtime' ? 'dimmed' : ''
            }`}
          >
            <div className="js-sublayer-sidebar sidebar-purple">
              <span className="sidebar-vertical-text">AI-assisted development</span>
            </div>

            <div className="js-sublayer-content">
              <div className="js-section-heading">Design time</div>

              {/* 3 Design Modules Grid */}
              <div className="js-design-modules-grid">
                {/* Module 1: Agents */}
                <div
                  className={`js-module-card ${activePillar === 'agents' ? 'highlighted' : ''}`}
                  onMouseEnter={() => setActivePillar('agents')}
                  onMouseLeave={() => setActivePillar(null)}
                >
                  <div className="js-module-header">
                    <span className="js-module-icon">🤖</span>
                    <span className="js-module-name">Agents</span>
                  </div>
                  <div className="js-module-items-row">
                    <span>Tools</span>
                    <span className="item-sep">|</span>
                    <span>Document Grounding</span>
                    <span className="item-sep">|</span>
                    <span>Agent Skills</span>
                  </div>
                </div>

                {/* Module 2: Apps */}
                <div
                  className={`js-module-card ${activePillar === 'apps' ? 'highlighted' : ''}`}
                  onMouseEnter={() => setActivePillar('apps')}
                  onMouseLeave={() => setActivePillar(null)}
                >
                  <div className="js-module-header">
                    <span className="js-module-icon">📱</span>
                    <span className="js-module-name">Apps</span>
                  </div>
                  <div className="js-module-items-row">
                    <span className="tech-badge cap">CAP</span>
                    <span className="item-sep">|</span>
                    <span className="tech-badge react">React</span>
                    <span className="item-sep">|</span>
                    <span className="tech-badge next">Next.js</span>
                  </div>
                </div>

                {/* Module 3: Workflows (n8n) */}
                <div
                  className={`js-module-card ${activePillar === 'workflows' ? 'highlighted' : ''}`}
                  onMouseEnter={() => setActivePillar('workflows')}
                  onMouseLeave={() => setActivePillar(null)}
                >
                  <div className="js-module-header">
                    <span className="js-module-icon">☍</span>
                    <span className="js-module-name">
                      <span className="n8n-tag">n8n</span> Workflows
                    </span>
                  </div>
                  <div className="js-module-items-row">
                    <span>Agent orchestration</span>
                    <span className="item-sep">|</span>
                    <span>Processes</span>
                    <span className="item-sep">|</span>
                    <span>Notifications</span>
                  </div>
                </div>
              </div>

              {/* Developer Access / Tooling Row */}
              <div className="js-tooling-row">
                <span className="js-tooling-primary">Joule Studio Web UI, CLI &amp; SDK</span>
                <div className="js-ide-logos">
                  <span className="js-ide-item cursor">
                    <span className="ide-dot cursor" /> CURSOR
                  </span>
                  <span className="js-ide-item cline">
                    <span className="ide-dot cline" /> Cline
                  </span>
                  <span className="js-ide-item vercel">
                    <span className="ide-triangle">▲</span> Vercel
                  </span>
                  <span className="js-ide-item claude">
                    <span className="ide-sparkle">✴</span> Claude Code
                  </span>
                  <span className="js-ide-item vscode">
                    <span className="ide-dot vscode" /> VS Code
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Layer B: Joule Studio runtime */}
          <div
            className={`js-sublayer-box box-runtime ${
              activeFocus !== 'all' && activeFocus !== 'runtime' ? 'dimmed' : ''
            }`}
          >
            <div className="js-sublayer-sidebar sidebar-indigo">
              <span className="sidebar-vertical-text">Automated Deployment, Ops &amp; Scaling</span>
            </div>

            <div className="js-sublayer-content">
              <div className="js-section-heading">Joule Studio runtime</div>

              {/* Unified 4-Column Runtime Card (Single White Box like Spec) */}
              <div className="js-unified-runtime-card">
                {/* Col 1: Agent Frameworks */}
                <div className="js-runtime-section">
                  <div className="js-runtime-heading">Agent Frameworks</div>
                  <div className="js-runtime-values">
                    <span>LangChain</span>
                    <span className="item-sep">|</span>
                    <span>Pydantic AI</span>
                    <span className="item-sep">|</span>
                    <span>LlamaIndex</span>
                    <span className="item-sep">|</span>
                    <span>LangGraph</span>
                  </div>
                </div>

                <div className="js-runtime-col-divider" />

                {/* Col 2: Agent Connectivity */}
                <div className="js-runtime-section">
                  <div className="js-runtime-heading">Agent Connectivity</div>
                  <div className="js-runtime-values">
                    <span>MCP</span>
                    <span className="item-sep">|</span>
                    <span>A2A</span>
                  </div>
                </div>

                <div className="js-runtime-col-divider" />

                {/* Col 3: Agent Security */}
                <div className="js-runtime-section">
                  <div className="js-runtime-heading">Agent Security</div>
                  <div className="js-runtime-values">
                    <span>Identity</span>
                    <span className="item-sep">|</span>
                    <span>Sandboxing</span>
                    <span className="item-sep">|</span>
                    <span>Policy enforcement</span>
                  </div>
                </div>

                <div className="js-runtime-col-divider" />

                {/* Col 4: Agent Governance */}
                <div className="js-runtime-section">
                  <div className="js-runtime-heading">Agent Governance</div>
                  <div className="js-runtime-values">
                    <span>AI Agent Hub</span>
                    <span className="item-sep">|</span>
                    <span>Mining</span>
                    <span className="item-sep">|</span>
                    <span>Performance</span>
                    <span className="item-sep">|</span>
                    <span>Eval</span>
                    <span className="item-sep">|</span>
                    <span>Traces</span>
                  </div>
                </div>
              </div>

              {/* Underlying Infrastructure Row */}
              <div className="js-infra-row">
                <span className="js-infra-item">Purpose-built AI models</span>
                <span className="item-sep">|</span>
                <span className="js-infra-item">Always-on Compute</span>
                <span className="item-sep">|</span>
                <span className="js-infra-item">Scalable Agent Memory</span>
                <span className="item-sep">|</span>
                <span className="js-infra-item">Secure Storage</span>
              </div>
            </div>
          </div>
        </section>

        {/* LAYER 3: INTEGRATION SUITE & BUSINESS DATA CLOUD */}
        <section
          className={`js-layer-card layer-integration ${
            activeFocus !== 'all' && activeFocus !== 'integration' ? 'dimmed' : ''
          }`}
          aria-label="Enterprise Data & Integration Layer"
        >
          <div className="js-integration-split">
            <div className="js-integration-half">
              <span className="js-integ-name">SAP Integration Suite</span>
              <span className="js-integ-desc">Enterprise Integration Scenarios</span>
            </div>
            <div className="js-integ-divider" />
            <div className="js-integration-half">
              <span className="js-integ-name">SAP Business Data Cloud</span>
              <span className="js-integ-desc">Data Products</span>
            </div>
          </div>
        </section>

        {/* LAYER 4: ENTERPRISE ECOSYSTEM */}
        <section
          className={`js-layer-card layer-ecosystem ${
            activeFocus !== 'all' && activeFocus !== 'integration' ? 'dimmed' : ''
          }`}
          aria-label="SAP and non-SAP Applications and Agents"
        >
          <span className="js-eco-title">SAP and non-SAP Apps &amp; Agents</span>
          <div className="js-ecosystem-nodes">
            <div className="js-eco-circle blue" title="SAP S/4HANA (ERP Core)">
              <span>▶</span>
            </div>
            <div className="js-eco-circle cyan" title="SuccessFactors / HCM">
              <span>⏱</span>
            </div>
            <div className="js-eco-circle purple" title="Ariba & Spend">
              <span>💙</span>
            </div>
            <div className="js-eco-circle indigo" title="Customer Experience">
              <span>💼</span>
            </div>
            <div className="js-eco-circle sky" title="Salesforce / Third-party CRM">
              <span>⚙️</span>
            </div>
            <div className="js-eco-circle teal" title="ServiceNow">
              <span>📦</span>
            </div>
            <div className="js-eco-circle blue-dark" title="Custom APIs & Microservices">
              <span>🏠</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="js-footer">
        <button
          type="button"
          className="js-nav-btn"
          onClick={goToPrev}
          aria-label="Return to Agentic Orchestration Pricing"
        >
          <span>‹</span>
          <span>Agentic Pricing</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="js-nav-btn primary"
          onClick={goToNext}
          aria-label="Proceed to Joule Studio Pricing and Packaging Objectives"
        >
          <span>Pricing Objectives</span>
          <span>›</span>
        </button>
      </footer>

      {/* Optional Lightbox Modal for Original Specification Reference */}
      {isZoomed && (
        <div
          className="js-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="js-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="js-modal-topbar">
              <div className="js-modal-title">
                <span className="js-modal-indicator" />
                <span>Reference Specification: SAP Joule Studio Platform Architecture</span>
              </div>
              <button
                type="button"
                className="js-modal-close"
                onClick={() => setIsZoomed(false)}
                aria-label="Close preview"
              >
                ✕ Close
              </button>
            </div>
            <div className="js-modal-img-container">
              <img
                src={originalSpec}
                alt="Original SAP managed Platform offering for agentic workloads (Joule Studio) Specification"
                className="js-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
