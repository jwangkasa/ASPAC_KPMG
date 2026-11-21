import { useRef, useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import '../styles/agenticObstacles.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface ObstacleItem {
  id: string
  num: string
  tag: string
  title: string
  summary: string
  wording: string
  riskLevel: 'Critical' | 'High' | 'Severe'
}

const OBSTACLES: ObstacleItem[] = [
  {
    id: 'hallucinations',
    num: '01',
    tag: 'Execution Risk',
    title: 'Actionable Hallucinations & Wrong Action Chains',
    summary: 'Autonomous actions trigger irreversible real-world ERP changes when reasoning drifts mid-task.',
    riskLevel: 'Critical',
    wording:
      'While a standard chatbot hallucinating gives a wrong answer, an agentic AI hallucinating can trigger a real-world action—such as sending the wrong email, misrouting a financial transaction, or creating incorrect support tickets. When reasoning drifts mid-task, confidence remains high even as errors compound.',
  },
  {
    id: 'loops',
    num: '02',
    tag: 'Orchestration',
    title: 'Infinite Loops & Agent Sprawl',
    summary: 'Agents proliferate without governance or get trapped in recursive execution deadlocks.',
    riskLevel: 'High',
    wording:
      'Agents can get stuck in repetitive execution cycles (infinite loops) or proliferate across an enterprise without clear oversight, consuming massive compute and creating unexpected system locks.',
  },
  {
    id: 'drift',
    num: '03',
    tag: 'Workflow State',
    title: 'Task Drift & Bot Communication Chaos',
    summary: 'Loss of state across multi-step chains and unstandardized inter-agent messaging.',
    riskLevel: 'High',
    wording:
      'As workflows break down into longer chains of sub-tasks, agents can lose state or drift from their original objective. Furthermore, a lack of standardized communication formats between different agents causes integration failures.',
  },
  {
    id: 'data-quality',
    num: '04',
    tag: 'Data Foundation',
    title: 'Poor Data Quality & Readiness',
    summary: 'Incomplete, outdated, or fragmented enterprise data directly compromises agent decision reliability.',
    riskLevel: 'Critical',
    wording:
      'Agents rely heavily on clean, real-time data pipelines. Incomplete, outdated, or fragmented enterprise data—cited as a top blocker across industry surveys—directly drives hallucinations and flawed automated decision-making.',
  },
  {
    id: 'governance',
    num: '05',
    tag: 'Compliance & Trust',
    title: 'Governance & Continuous Monitoring Deficits',
    summary: 'Static pre-deployment checks fail when autonomous systems adapt behavior dynamically at runtime.',
    riskLevel: 'Severe',
    wording:
      'Traditional AI governance relies on static, pre-deployment checks. Agentic systems change behavior dynamically over time, run outside normal business hours, and operate autonomously, making real-time behavioral tracking and human-in-the-loop validation mandatory.',
  },
  {
    id: 'security',
    num: '06',
    tag: 'Cyber & Surface',
    title: 'Expanded Security & Attack Surfaces',
    summary: 'Persistent memory, tool calling, and multi-agent meshes create new zero-day attack vectors.',
    riskLevel: 'Severe',
    wording:
      'Persistent memory, tool access, and multi-agent network sharing open new attack vectors, including prompt injection, unauthorized data exfiltration, tool privilege escalation, and resistance to emergency cutoffs.',
  },
  {
    id: 'infra',
    num: '07',
    tag: 'Hardware & Cloud',
    title: 'Infrastructure & Compute Constraints',
    summary: 'Multi-agent loops, real-time streaming, and high reasoning demand strain enterprise infrastructure.',
    riskLevel: 'High',
    wording:
      'Running multi-agent networks, real-time streaming data, and massive reasoning loops requires heavy energy, specialized GPU/TPU hardware, and low-latency architectural resilience across hybrid clouds.',
  },
]

export default function AgenticObstacles({ onPrev, onNavigate }: Props) {
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [flippedCardIds, setFlippedCardIds] = useState<Set<string>>(new Set())
  const trackRef = useRef<HTMLDivElement>(null)

  const toggleFlip = (id: string, e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.stopPropagation()
    setFlippedCardIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const allFlipped = flippedCardIds.size === OBSTACLES.length

  const toggleFlipAll = () => {
    if (allFlipped) {
      setFlippedCardIds(new Set())
    } else {
      setFlippedCardIds(new Set(OBSTACLES.map((o) => o.id)))
    }
  }

  const scrollToCard = (index: number) => {
    setActiveCardIndex(index)
    if (trackRef.current) {
      const card = trackRef.current.children[index] as HTMLElement
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }

  const scrollLeft = () => {
    const nextIdx = Math.max(0, activeCardIndex - 1)
    scrollToCard(nextIdx)
  }

  const scrollRight = () => {
    const nextIdx = Math.min(OBSTACLES.length - 1, activeCardIndex + 1)
    scrollToCard(nextIdx)
  }

  const goToGrow = () => {
    if (onNavigate) onNavigate(17)
    else window.location.hash = '#/GROW_SAP'
  }

  const goToWelcome = () => {
    if (onNavigate) onNavigate(1)
    else window.location.hash = '#/1'
  }

  const goToOverview = () => {
    if (onNavigate) onNavigate(2)
    else window.location.hash = '#/2'
  }

  return (
    <div className="obstacles-slide">
      <div className="obstacles-glow-red" aria-hidden="true" />
      <div className="obstacles-glow-blue" aria-hidden="true" />

      {/* Header */}
      <header className="obstacles-header-row">
        <div className="obstacles-title-group">
          <div className="obstacles-badge">Critical Enterprise Risks • Slide 18 of 19</div>
          <h1 className="obstacles-main-title">
            Major Obstacles of <span className="warn-highlight">Agentic AI</span>
          </h1>
          <p className="obstacles-subtitle">
            Click any card to flip between the high-level challenge header and in-depth architectural details.
          </p>
        </div>

        <div className="obstacles-controls">
          <button
            type="button"
            className="obstacles-flip-all-btn"
            onClick={toggleFlipAll}
            title={allFlipped ? 'Flip all cards back to headers' : 'Flip all cards to show details'}
          >
            <span>{allFlipped ? '↺ Show All Headers' : '↻ Flip All to Details'}</span>
          </button>
          <span className="obstacles-counter">
            Card {activeCardIndex + 1} of {OBSTACLES.length}
          </span>
          <button
            type="button"
            className="obstacles-scroll-btn"
            onClick={scrollLeft}
            disabled={activeCardIndex === 0}
            title="Scroll to previous card"
            aria-label="Previous obstacle card"
          >
            ‹
          </button>
          <button
            type="button"
            className="obstacles-scroll-btn"
            onClick={scrollRight}
            disabled={activeCardIndex === OBSTACLES.length - 1}
            title="Scroll to next card"
            aria-label="Next obstacle card"
          >
            ›
          </button>
        </div>
      </header>

      {/* Quick Navigation Chips */}
      <nav className="obstacles-quick-nav" aria-label="Jump to card">
        {OBSTACLES.map((item, idx) => {
          const isFlipped = flippedCardIds.has(item.id)
          return (
            <button
              key={item.id}
              className={`obstacles-nav-chip ${activeCardIndex === idx ? 'active' : ''}`}
              onClick={() => scrollToCard(idx)}
              title={`${item.title} — ${isFlipped ? 'Flipped to details' : 'Showing header'}`}
            >
              <span>Card {item.num}: {item.tag}</span>
              <span className="obstacles-nav-chip-flip-icon">
                {isFlipped ? '✓ Details' : '↻'}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Main Area: Horizontal 3D Flip Track */}
      <main className="obstacles-main-area">
        <div className="obstacles-horizontal-track" ref={trackRef}>
          {OBSTACLES.map((item, idx) => {
            const isFlipped = flippedCardIds.has(item.id)
            return (
              <div
                key={item.id}
                className="obstacle-flip-card-wrapper"
                onClick={() => {
                  setActiveCardIndex(idx)
                  toggleFlip(item.id)
                }}
                role="button"
                tabIndex={0}
                aria-label={`Obstacle Card ${item.num}: ${item.title}. ${isFlipped ? 'Showing details. Click to flip to header.' : 'Showing header. Click to flip to details.'}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveCardIndex(idx)
                    toggleFlip(item.id)
                  }
                }}
              >
                <div className={`obstacle-flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                  {/* FRONT FACE: HEADER & TITLE */}
                  <div className="obstacle-card-face obstacle-card-front">
                    <div className="obstacle-card-front-top">
                      <div className="obstacle-card-header-bar">
                        <div className="obstacle-card-number-badge">
                          <span className="obstacle-card-number">Card {item.num}</span>
                          <span className="obstacle-card-tag">{item.tag}</span>
                        </div>
                        <div className="obstacle-card-icon" title={`Risk Level: ${item.riskLevel}`}>
                          ⚠
                        </div>
                      </div>

                      <h2 className="obstacle-card-title">{item.title}</h2>
                      <div className="obstacle-card-summary-pill">
                        {item.summary}
                      </div>
                    </div>

                    <div className="obstacle-card-front-footer">
                      <span className="obstacle-card-risk-badge">
                        {item.riskLevel} Risk
                      </span>
                      <span className="obstacle-card-flip-prompt">
                        Flip for details ↻
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE: IN-DEPTH DETAILS */}
                  <div className="obstacle-card-face obstacle-card-back">
                    <div className="obstacle-card-back-header">
                      <span className="obstacle-card-back-title">
                        Card {item.num} • {item.tag}
                      </span>
                      <button
                        type="button"
                        className="obstacle-card-back-flip-btn"
                        onClick={(e) => toggleFlip(item.id, e)}
                        title="Flip back to header"
                      >
                        ↺ Header
                      </button>
                    </div>

                    <div className="obstacle-card-back-body">
                      <p className="obstacle-card-wording">{item.wording}</p>
                    </div>

                    <div className="obstacle-card-back-footer">
                      <span className="obstacle-card-back-hint">
                        Click card to flip back ↺
                      </span>
                      <span className="obstacle-card-back-status">
                        Active Risk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="obstacles-footer-nav">
        <button
          className="obstacles-nav-btn"
          onClick={onPrev || goToGrow}
          aria-label="Return to GROW with SAP"
        >
          <span>‹</span>
          <span>GROW with SAP (Slide 17)</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="obstacles-nav-btn"
            onClick={goToOverview}
            aria-label="Return to Overview"
          >
            <span>Overview</span>
          </button>

          <button
            className="obstacles-nav-btn primary"
            onClick={goToWelcome}
            aria-label="Return to Welcome slide"
          >
            <span>Welcome Page</span>
            <span>↺</span>
          </button>
        </div>
      </footer>
    </div>
  )
}
