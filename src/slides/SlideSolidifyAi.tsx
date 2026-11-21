import { useEffect, useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import Petals from '../components/Petals'
import japaneseHeroBg from '../assets/hero/japanese_transformation_hero.jpg'
import originalSpec from '../assets/solidify_ai_diagram.png'
import '../styles/solidifyAi.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface ComponentInfo {
  title: string
  mark: string
  sub: string
  desc: string
  link?: string
  linkLabel?: string
}

interface VideoItem {
  id: string
  label: string
  badge: string
  src: string
  title: string
}

const CLOSING_VIDEOS: VideoItem[] = [
  {
    id: 'tokyo',
    label: 'Tokyo Subway Journey',
    badge: 'Closing Reel',
    src: '/videos/Colleagues_navigating_Tokyo_subw…_20261028002538.mp4',
    title: 'Colleagues Navigating Tokyo Subway',
  },
  {
    id: 'sap_agents',
    label: 'SAP Business AI 2026',
    badge: 'Executive Vision',
    src: '/videos/joule_agents_2025.mp4',
    title: 'SAP Business AI & Autonomous Agents 2026',
  },
]

export default function SlideSolidifyAi({ onPrev }: Props) {
  const [selectedItem, setSelectedItem] = useState<ComponentInfo | null>(null)
  const [showSpecModal, setShowSpecModal] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  // Listen for Escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isVideoPlaying) setIsVideoPlaying(false)
        if (showSpecModal) setShowSpecModal(false)
        if (selectedItem) setSelectedItem(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVideoPlaying, showSpecModal, selectedItem])

  const goToPrev = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/obstacles'
    }
  }

  const goToAgenda = () => {
    window.location.hash = '#/agenda'
  }

  return (
    <div className="sai-container">
      {/* 1. Full-bleed Majestic Japanese Scenery (Kyoto Bridge, Reflecting Pond & Mount Fuji Sunrise) */}
      <div className="sai-bg-layer" aria-hidden="true">
        <img
          src={japaneseHeroBg}
          alt="Tranquil Japanese scenery with arched bridge, reflecting water, and Mount Fuji dawn"
          className="sai-bg-img"
        />
        <div className="sai-vignette" />
        <Petals />
      </div>

      {/* Header Section */}
      <header className="sai-header">
        <div className="sai-title-group">
          <div className="sai-eyebrow">
            <span>SAP Business AI • Executive Blueprint</span>
          </div>
          <h1 className="sai-main-title">Solidifying the AI Journey</h1>
          <h2 className="sai-subtitle">Recommended Sales Play and GTM</h2>
        </div>

        {/* Legend in Top Right */}
        <div className="sai-legend-group">
          <div className="sai-legend-item">
            <span>*Compulsory</span>
          </div>
          <div className="sai-legend-item">
            <span>**Sales Play (GTM)</span>
          </div>
          <div className="sai-legend-item">
            <span>***Big Rocks</span>
          </div>
        </div>
      </header>

      {/* Main Stack Stage: Seamless 3-Block Stack with Zero Large Whitespace */}
      <main className="sai-showcase-stage" aria-label="Solidifying the AI Journey Stack">
        <div className="sai-stack-container">
          {/* ----------------------------------------------------------------
             Block 1: Top Lavender Block (4 Purple Cards)
             ---------------------------------------------------------------- */}
          <section className="sai-block-top">
            <div className="sai-top-grid">
              {/* Card 1: Joule Base* */}
              <div
                className="sai-card-purple"
                onClick={() =>
                  setSelectedItem({
                    title: 'Joule Base',
                    mark: '*',
                    sub: 'Navigation, Information, Transactional',
                    desc: 'The foundational generative AI assistant across SAP enterprise workflows — handling natural language navigation, procedural Q&A, and direct transactional commands.',
                    link: '#/joule_base',
                    linkLabel: 'Explore Joule Base AI',
                  })
                }
                role="button"
                tabIndex={0}
                title="Click to view Joule Base details"
              >
                <h3 className="sai-card-purple-title gold-title">Joule Base*</h3>
                <p className="sai-card-purple-sub gold-sub">Navigation, Information, Transactional</p>
              </div>

              {/* Card 2: Embedded AI* */}
              <div
                className="sai-card-purple"
                onClick={() =>
                  setSelectedItem({
                    title: 'Embedded AI',
                    mark: '*',
                    sub: 'Finance',
                    desc: 'Native ML and GenAI intelligence integrated directly into core Finance and ERP workflows — including intelligent invoice matching, accrual automation, and risk detection.',
                    link: '#/Embedded_Premium',
                    linkLabel: 'Explore Embedded AI Models',
                  })
                }
                role="button"
                tabIndex={0}
                title="Click to view Embedded AI details"
              >
                <h3 className="sai-card-purple-title gold-title">Embedded AI*</h3>
                <p className="sai-card-purple-sub gold-sub">Finance</p>
              </div>

              {/* Card 3: Document Grounding** */}
              <div
                className="sai-card-purple"
                onClick={() =>
                  setSelectedItem({
                    title: 'Document Grounding',
                    mark: '**',
                    sub: 'Knowledge Management',
                    desc: 'Retrieval-augmented grounding service that parses structured/unstructured internal corporate documents, policies, and contracts to provide verifiable facts for AI interactions.',
                    link: '#/Tabular_overview',
                    linkLabel: 'Explore Document Grounding',
                  })
                }
                role="button"
                tabIndex={0}
                title="Click to view Document Grounding details"
              >
                <h3 className="sai-card-purple-title">Document Grounding**</h3>
                <p className="sai-card-purple-sub">Knowledge Management</p>
              </div>

              {/* Card 4: SAP Managed Assistants/Agents** */}
              <div
                className="sai-card-purple"
                onClick={() =>
                  setSelectedItem({
                    title: 'SAP Managed Assistants/Agents',
                    mark: '**',
                    sub: 'Cross-Domain Autonomous Agents',
                    desc: 'Out-of-the-box autonomous multi-agent systems built and continuously curated by SAP across Autonomous Finance, Supply Chain, Spend, and HR.',
                    link: '#/Autonomous_Suite',
                    linkLabel: 'Explore Autonomous Suite',
                  })
                }
                role="button"
                tabIndex={0}
                title="Click to view SAP Managed Assistants/Agents details"
              >
                <h3 className="sai-card-purple-title">SAP Managed Assistants/Agents**</h3>
                <p className="sai-card-purple-sub" style={{ opacity: 0.85 }}>Cross-Domain Autonomous Agents</p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------
             Block 2: Middle Deep Indigo Keystone Bar
             ---------------------------------------------------------------- */}
          <section
            className="sai-block-middle"
            onClick={() =>
              setSelectedItem({
                title: 'SAP Knowledge Graph (through SAP HANA Cloud)',
                mark: '***',
                sub: 'Enterprise Semantic Backbone (Big Rocks)',
                desc: 'The central ontological and graph layer bridging enterprise business objects, processes, and relationships across SAP and non-SAP datasets hosted inside SAP HANA Cloud.',
                link: '#/7',
                linkLabel: 'View Business AI Platform (Slide 7)',
              })
            }
            role="button"
            tabIndex={0}
            title="Click to view SAP Knowledge Graph details"
          >
            <h2 className="sai-middle-title">
              SAP Knowledge Graph (through SAP HANA Cloud)***
            </h2>
          </section>

          {/* ----------------------------------------------------------------
             Block 3: Bottom Bright Blue Architecture Container
             ---------------------------------------------------------------- */}
          <section className="sai-block-bottom">
            {/* Row 1: Integration Suite Enhance Edition / MCP Gateway */}
            <div
              className="sai-slab-blue"
              onClick={() =>
                setSelectedItem({
                  title: 'Integration Suite Enhance Edition',
                  mark: '',
                  sub: 'MCP Gateway',
                  desc: 'Enterprise integration gateway supporting the Model Context Protocol (MCP) to standardize external tool connections, third-party LLMs, and API integrations.',
                  link: '#/toolchain',
                  linkLabel: 'View Toolchain & Integration',
                })
              }
              role="button"
              tabIndex={0}
              title="Click to view Integration Suite Enhance Edition"
            >
              <h3 className="sai-slab-title">Integration Suite Enhance Edition</h3>
              <p className="sai-slab-sub">MCP Gateway</p>
            </div>

            {/* Row 2: 4 Core Pillars Sub-Grid */}
            <div className="sai-pillars-grid">
              {/* Document AI */}
              <div
                className="sai-card-pillar"
                onClick={() =>
                  setSelectedItem({
                    title: 'Document AI',
                    mark: '',
                    sub: 'Standalone – GenAI OCR',
                    desc: 'End-to-end document processing service leveraging optical character recognition and multimodal GenAI to extract structured key-value pairs from documents.',
                  })
                }
                role="button"
                tabIndex={0}
              >
                <h4 className="sai-slab-title">Document AI</h4>
                <p className="sai-slab-sub">Standalone – GenAI OCR</p>
              </div>

              {/* AI Core */}
              <div
                className="sai-card-pillar"
                onClick={() =>
                  setSelectedItem({
                    title: 'AI Core',
                    mark: '',
                    sub: 'Primarily on RAG',
                    desc: 'Execution engine and managed runtime for training, serving, and orchestration of foundation models with vector search and RAG retrieval pipelines.',
                    link: '#/sap_ai_core',
                    linkLabel: 'View SAP AI Core',
                  })
                }
                role="button"
                tabIndex={0}
              >
                <h4 className="sai-slab-title">AI Core</h4>
                <p className="sai-slab-sub">Primarily on RAG</p>
              </div>

              {/* RPT 1.5 */}
              <div
                className="sai-card-pillar"
                onClick={() =>
                  setSelectedItem({
                    title: 'RPT 1.5',
                    mark: '',
                    sub: 'Part of AI Core for Prediction or ML Use Cases',
                    desc: 'SAP Relational Pre-trained Transformer 1.5 model specialized in zero-shot and few-shot tabular predictions across structured ERP transaction tables.',
                    link: '#/rpt_scenario',
                    linkLabel: 'View SAP-RPT 1.5 Scenarios',
                  })
                }
                role="button"
                tabIndex={0}
              >
                <h4 className="sai-slab-title">RPT 1.5</h4>
                <p className="sai-slab-sub">Part of AI Core for Prediction or ML Use Cases</p>
              </div>

              {/* SAP Build */}
              <div
                className="sai-card-pillar"
                onClick={() =>
                  setSelectedItem({
                    title: 'SAP Build',
                    mark: '',
                    sub: 'Workflow (RPA) + Extension',
                    desc: 'Low-code solution combining SAP Build Process Automation, RPA bots, and app development extensions for end-to-end operational execution.',
                  })
                }
                role="button"
                tabIndex={0}
              >
                <h4 className="sai-slab-title">SAP Build</h4>
                <p className="sai-slab-sub">Workflow (RPA) + Extension</p>
              </div>
            </div>

            {/* Row 3: Joule Studio (Classic) + 2.0 / Custom-built Agents */}
            <div
              className="sai-slab-blue"
              onClick={() =>
                setSelectedItem({
                  title: 'Joule Studio (Classic) + 2.0',
                  mark: '',
                  sub: 'Custom-built Agents',
                  desc: 'Comprehensive visual design-time and runtime environment enabling partners and customers to engineer custom Joule agent skills and multi-agent systems.',
                  link: '#/Joule_Studio',
                  linkLabel: 'Explore Joule Studio',
                })
              }
              role="button"
              tabIndex={0}
              title="Click to view Joule Studio"
            >
              <h3 className="sai-slab-title">Joule Studio (Classic) + 2.0</h3>
              <p className="sai-slab-sub">Custom-built Agents</p>
            </div>

            {/* Row 4: Governance Layer (AI AGENT HUB)** / SAP LeanIX, Signavio */}
            <div
              className="sai-slab-blue"
              onClick={() =>
                setSelectedItem({
                  title: 'Governance Layer (AI AGENT HUB)',
                  mark: '**',
                  sub: 'SAP LeanIX, Signavio',
                  desc: 'Enterprise governance and management console tracking agent discovery, access control, risk assessment, and process mining across LeanIX and Signavio.',
                  link: '#/AI_Agent_Hub',
                  linkLabel: 'Open AI Agent Hub Slide',
                })
              }
              role="button"
              tabIndex={0}
              title="Click to view Governance Layer"
            >
              <h3 className="sai-slab-title">Governance Layer (AI AGENT HUB)**</h3>
              <p className="sai-slab-sub">SAP LeanIX, Signavio</p>
            </div>

            {/* Row 5: Business Data Cloud / SAP + Non-SAP */}
            <div
              className="sai-slab-blue"
              onClick={() =>
                setSelectedItem({
                  title: 'Business Data Cloud',
                  mark: '',
                  sub: 'SAP + Non-SAP',
                  desc: 'Unified business data cloud consolidating transaction records, master data, and third-party data pipelines into unified data products for AI consumption.',
                  link: '#/BDC_AI',
                  linkLabel: 'Open BDC AI Data Products',
                })
              }
              role="button"
              tabIndex={0}
              title="Click to view Business Data Cloud"
            >
              <h3 className="sai-slab-title">Business Data Cloud</h3>
              <p className="sai-slab-sub">SAP + Non-SAP</p>
            </div>
          </section>
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="sai-footer">
        <button
          type="button"
          className="sai-nav-btn"
          onClick={goToPrev}
          aria-label="Return to Obstacles"
        >
          <span>‹</span>
          <span>Obstacles (Slide 18)</span>
        </button>

        <BrandLockup variant="footer" theme="dark" />

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            className="sai-nav-btn"
            onClick={goToAgenda}
            title="Navigate to Agenda"
            aria-label="Navigate to Agenda"
          >
            <span>📋 Agenda</span>
          </button>

          <button
            type="button"
            className="sai-nav-btn primary"
            onClick={() => setIsVideoPlaying(true)}
            aria-label="Play Closing Video"
          >
            <span>Closing</span>
            <span>▶</span>
          </button>
        </div>
      </footer>

      {/* Detail Modal */}
      {selectedItem && (
        <div
          className="sai-modal-overlay"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="sai-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="sai-modal-header">
              <h3 className="sai-modal-title">
                {selectedItem.title} {selectedItem.mark && <span>{selectedItem.mark}</span>}
              </h3>
              <button
                type="button"
                className="sai-modal-close"
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="sai-modal-body">
              <p style={{ color: '#2563eb', fontWeight: 700, margin: '0 0 0.5rem' }}>
                {selectedItem.sub}
              </p>
              <p style={{ margin: '0 0 1rem', lineHeight: 1.6 }}>{selectedItem.desc}</p>
              {selectedItem.link && (
                <button
                  type="button"
                  className="sai-nav-btn primary"
                  onClick={() => {
                    setSelectedItem(null)
                    window.location.hash = selectedItem.link!
                  }}
                >
                  <span>{selectedItem.linkLabel || 'Open Deep Dive'} ›</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Original Diagram Preview Lightbox */}
      {showSpecModal && (
        <div
          className="sai-modal-overlay"
          onClick={() => setShowSpecModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="sai-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '960px' }}
          >
            <div className="sai-modal-header">
              <h3 className="sai-modal-title">Original Diagram: Solidifying the AI Journey</h3>
              <button
                type="button"
                className="sai-modal-close"
                onClick={() => setShowSpecModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="sai-modal-body" style={{ padding: '1rem', background: '#ffffff', textAlign: 'center' }}>
              <img
                src={originalSpec}
                alt="Solidifying the AI Journey Architecture"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Closing Video Modal */}
      {isVideoPlaying && (
        <div
          className="sai-modal-overlay"
          onClick={() => setIsVideoPlaying(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="sai-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '960px', background: '#0f172a', border: '1.5px solid #334155' }}
          >
            <div className="sai-modal-header" style={{ background: '#0f172a', borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ background: '#2563eb', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {CLOSING_VIDEOS[activeVideoIndex].badge}
                </span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {CLOSING_VIDEOS.map((vid, idx) => (
                    <button
                      key={vid.id}
                      type="button"
                      onClick={() => setActiveVideoIndex(idx)}
                      style={{
                        background: activeVideoIndex === idx ? '#3b82f6' : '#1e293b',
                        color: activeVideoIndex === idx ? '#ffffff' : '#94a3b8',
                        border: '1px solid ' + (activeVideoIndex === idx ? '#60a5fa' : '#334155'),
                        borderRadius: '6px',
                        padding: '4px 10px',
                        fontSize: '12px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      {vid.label}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="sai-modal-close"
                onClick={() => setIsVideoPlaying(false)}
                aria-label="Close video"
                style={{ background: '#1e293b', color: '#f8fafc', borderColor: '#475569' }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: 0, background: '#000000', display: 'flex', justifyContent: 'center' }}>
              <video
                key={CLOSING_VIDEOS[activeVideoIndex].src}
                src={CLOSING_VIDEOS[activeVideoIndex].src}
                controls
                autoPlay
                playsInline
                style={{ width: '100%', maxHeight: '72vh', outline: 'none' }}
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
