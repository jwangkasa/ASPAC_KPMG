import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import atcAgentsDiagram from '../assets/atc_agents_diagram.png'
import systemAnalysisImg from '../assets/atc_agents_system_analysis.png'
import dataManagementImg from '../assets/atc_agents_data_management.png'
import customCodeImg from '../assets/atc_agents_custom_code.png'
import configurationImg from '../assets/atc_agents_configuration.png'
import testManagementImg from '../assets/atc_agents_test_management.png'
import projectManagementImg from '../assets/atc_agents_project_management.png'
import '../styles/atcAgents.css'

const ASSISTANT_IMAGES: Record<string, string> = {
  'System Analysis Assistant': systemAnalysisImg,
  'Data Management Assistant': dataManagementImg,
  'Custom Code Assistant': customCodeImg,
  'Configuration Assistant': configurationImg,
  'Test Management Assistant': testManagementImg,
  'Project Management Assistant': projectManagementImg,
}

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface AssistantAgentGroup {
  name: string
  count: number
  description: string
  agents: string[]
  clusters?: { name: string; agents: string[] }[]
}

const ASSISTANT_AGENT_GROUPS: AssistantAgentGroup[] = [
  {
    name: 'System Analysis Assistant',
    count: 7,
    description: 'Landscape topology scanning, usage footprint analysis, and customization telemetry baseline.',
    agents: [
      'Base / Analysis Orchestration Agent',
      'Customizing Analysis Agent',
      'Master Data Analysis Agent',
      'Transactional Data Analysis Agent',
      'Integration Data Analysis Agent',
      'Custom Dev Analysis Agent',
      'Security Analysis Agent',
    ],
  },
  {
    name: 'Data Management Assistant',
    count: 6,
    description: 'Data hygiene, automated validation, deduplication, and volume retention optimization.',
    agents: [
      'Scope Selection Agent I',
      'Evaluation Agent',
      'Prioritization Agent',
      'Validation Agent',
      'Automated Resolution Agent',
      'Scope Selection Agent II',
    ],
    clusters: [
      {
        name: 'Data Quality',
        agents: [
          'Scope Selection Agent I',
          'Evaluation Agent',
          'Prioritization Agent',
          'Validation Agent',
          'Automated Resolution Agent',
        ],
      },
      {
        name: 'Relevancy & Retention',
        agents: ['Scope Selection Agent II'],
      },
    ],
  },
  {
    name: 'Custom Code Assistant',
    count: 8,
    description: 'Clean-core modernization, ABAP cloud conversion, extension clustering, and RAP migration.',
    agents: [
      'Custom Code Scanner Agent',
      'Extension Clustering Agent',
      'Classification & Recommendation Agent',
      'Decommissioning Agent',
      'Task Agent',
      'Mass S/4 Custom Code Conversion Agent',
      'Mass Clean Core Adoption Agent',
      'Dynpro to RAP Modernization Agent',
    ],
    clusters: [
      {
        name: 'Cloud ALM',
        agents: [
          'Custom Code Scanner Agent',
          'Extension Clustering Agent',
          'Classification & Recommendation Agent',
          'Decommissioning Agent',
          'Task Agent',
        ],
      },
      {
        name: 'Execution',
        agents: [
          'Mass S/4 Custom Code Conversion Agent',
          'Mass Clean Core Adoption Agent',
          'Dynpro to RAP Modernization Agent',
        ],
      },
    ],
  },
  {
    name: 'Configuration Assistant',
    count: 4,
    description: 'Delta identification, scoping alignment, organizational structure setup, and product configuration.',
    agents: [
      'Configuration Transformation Agent',
      'Scoping Agent',
      'Organizational Structure Agent',
      'Product Configuration Agent',
    ],
  },
  {
    name: 'Test Management Assistant',
    count: 4,
    description: 'Automated test suite generation, synthetic test data provisioning, and execution verification.',
    agents: [
      'Test Scoping Agent',
      'Test Preparation Agent',
      'Test Data Agent',
      'Test Execution Agent',
    ],
  },
  {
    name: 'Rollout Assistant',
    count: 0,
    description: 'Governs automated cutover gates, enterprise release sequencing, and business readiness.',
    agents: ['To come in 2027'],
  },
  {
    name: 'Project Management Assistant',
    count: 6,
    description: 'Cross-functional orchestration: milestone monitoring, early risk prediction, daily briefs, and guidance.',
    agents: [
      'Transformation Onboarding Agent',
      '"Morning Brew" Agent',
      'Assistant Cockpit Agent',
      'Execution Intelligence Agent',
      'The "Cassandra" Agent',
      'Guidance & Services Agent',
    ],
  },
]

export default function SlideAtcAgents({ onPrev, onNavigate }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState<AssistantAgentGroup | null>(null)

  const currentDiagram = (selectedGroup && ASSISTANT_IMAGES[selectedGroup.name]) || atcAgentsDiagram

  const goToAssistants = () => {
    window.location.hash = '#/atc_assistants'
  }

  const goToGrow = () => {
    window.location.hash = '#/grow'
  }

  const goToOverview = () => {
    if (onNavigate) {
      onNavigate(2)
    } else {
      window.location.hash = '#/2'
    }
  }

  return (
    <div className="atc-agents-container">
      <div className="atc-agents-glow-purple" aria-hidden="true" />
      <div className="atc-agents-glow-blue" aria-hidden="true" />

      {/* Header */}
      <header className="atc-agents-header">
        <div className="atc-agents-title-group">
          <div className="atc-agents-eyebrow">Operational Core • Migration &amp; Modernization</div>
          <h1 className="atc-agents-title">Assistant break-down into agents</h1>
          <p className="atc-agents-subtitle">
            Granular specialized agents organized by modernization domain across the RISE with SAP lifecycle
          </p>
        </div>

        <div
          className="atc-agents-sparkle-badge"
          onClick={() => setIsZoomed(true)}
          title="Click to zoom agent breakdown diagram"
          aria-label="Zoom agent breakdown diagram"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsZoomed(true)
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.85 }}>
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
        </div>
      </header>

      {/* Main Graphic Area */}
      <main className="atc-agents-main">
        <div className="atc-agents-diagram-card">
          <div className="atc-agents-diagram-stage">
            <img
              src={currentDiagram}
              alt={selectedGroup ? selectedGroup.name : 'Migration and Modernization Assistants'}
              className="atc-agents-img"
              onClick={() => setIsZoomed(true)}
            />
            {/* Interactive hotspots overlay on top of the 7 tabs */}
            <div className="atc-agents-hotspots" aria-label="Interactive Diagram Tabs">
              {ASSISTANT_AGENT_GROUPS.map((grp, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`atc-agents-hotspot ${selectedGroup?.name === grp.name ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedGroup(grp)
                  }}
                  title={`View ${grp.name} breakdown`}
                  aria-label={`Select ${grp.name}`}
                />
              ))}
            </div>
          </div>
          <span
            className="atc-agents-zoom-hint"
            onClick={(e) => {
              e.stopPropagation()
              setIsZoomed(true)
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            Click to Enlarge
          </span>
        </div>

        {/* Interactive Assistant Selector Chips */}
        <div className="atc-agents-strip" aria-label="Interactive Assistants Filter">
          <button
            className={`atc-agents-chip ${!selectedGroup ? 'active' : ''}`}
            onClick={() => setSelectedGroup(null)}
            title="All Assistants Overview"
          >
            <span>All Assistants</span>
            <span className="atc-agents-chip-badge">Overview</span>
          </button>
          {ASSISTANT_AGENT_GROUPS.map((grp, idx) => (
            <button
              key={idx}
              className={`atc-agents-chip ${selectedGroup?.name === grp.name ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedGroup(selectedGroup?.name === grp.name ? null : grp)
              }}
              title={`${grp.name} (${grp.count ? `${grp.count} agents` : 'Roadmap'})`}
            >
              <span>{grp.name}</span>
              <span className="atc-agents-chip-badge">{grp.count || '2027'}</span>
            </button>
          ))}
        </div>

        {/* Selected Assistant Detail Info */}
        {selectedGroup && (
          <div className="atc-agents-detail-bar">
            <div className="atc-agents-detail-header">
              <strong className="atc-agents-detail-title">
                {selectedGroup.name} ({selectedGroup.count ? `${selectedGroup.count} Dedicated Agents` : 'Roadmap'})
              </strong>
              <span style={{ fontSize: '11px', color: '#64748b' }}>{selectedGroup.description}</span>
            </div>
            <div className="atc-agents-tags">
              {selectedGroup.clusters ? (
                selectedGroup.clusters.map((cluster, cIdx) => (
                  <div key={cIdx} style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#4338ca', marginRight: '2px' }}>
                      [{cluster.name}]:
                    </span>
                    {cluster.agents.map((agent, aIdx) => (
                      <span key={aIdx} className="atc-agents-tag">
                        {agent}
                      </span>
                    ))}
                  </div>
                ))
              ) : (
                selectedGroup.agents.map((agent, aIdx) => (
                  <span key={aIdx} className="atc-agents-tag">
                    {agent}
                  </span>
                ))
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer Navigation */}
      <footer className="atc-agents-footer">
        <button
          className="atc-agents-nav-btn"
          onClick={onPrev || goToAssistants}
          aria-label="Return to Modernization Assistants"
        >
          <span>‹</span>
          <span>Modernization Assistants</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="atc-agents-nav-btn"
            onClick={goToOverview}
            aria-label="Return to Overview"
          >
            <span>Overview</span>
          </button>

          <button
            className="atc-agents-nav-btn primary"
            onClick={goToGrow}
            aria-label="Proceed to SAP GROW"
          >
            <span>SAP GROW</span>
            <span>›</span>
          </button>
        </div>
      </footer>

      {/* High-Resolution Lightbox Modal */}
      {isZoomed && (
        <div
          className="atc-agents-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="atc-agents-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="atc-agents-modal-toolbar">
              <span className="atc-agents-modal-title">
                {selectedGroup ? selectedGroup.name : 'Migration & Modernization Assistants'}
              </span>
              <div className="atc-agents-modal-tabs">
                <button
                  type="button"
                  className={`atc-modal-tab ${!selectedGroup ? 'active' : ''}`}
                  onClick={() => setSelectedGroup(null)}
                >
                  Overview
                </button>
                {ASSISTANT_AGENT_GROUPS.filter((g) => ASSISTANT_IMAGES[g.name]).map((g) => (
                  <button
                    key={g.name}
                    type="button"
                    className={`atc-modal-tab ${selectedGroup?.name === g.name ? 'active' : ''}`}
                    onClick={() => setSelectedGroup(g)}
                  >
                    {g.name.replace(' Assistant', '')}
                  </button>
                ))}
              </div>
              <button
                className="atc-agents-modal-close"
                onClick={() => setIsZoomed(false)}
                aria-label="Close enlarged diagram"
              >
                ✕
              </button>
            </div>
            <img
              src={currentDiagram}
              alt={selectedGroup ? selectedGroup.name : 'Assistant break-down into agents full resolution'}
              className="atc-agents-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
