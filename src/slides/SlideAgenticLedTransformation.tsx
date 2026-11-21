import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import Petals from '../components/Petals'
import japaneseHeroBg from '../assets/hero/japanese_transformation_hero.jpg'
import '../styles/agenticLedTransformation.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface JapanesePillar {
  kanji: string
  romaji: string
  theme: string
  title: string
  desc: string
  actionTitle: string
  actionText: string
}

const PILLARS: JapanesePillar[] = [
  {
    kanji: '架け橋',
    romaji: 'Kakehashi',
    theme: 'Clean Core Bridge',
    title: 'The Bridge to Clean Core',
    desc: 'Connecting mission-critical heritage with the infinite horizon of the cloud.',
    actionTitle: 'RISE Transformation',
    actionText: 'De-risk legacy migration with proven KPMG accelerators, preserving business continuity while adopting SAP standard cloud core.',
  },
  {
    kanji: '改善',
    romaji: 'Kaizen',
    theme: 'Autonomous Mastery',
    title: 'Self-Optimizing Workflows',
    desc: 'Continuous refinement where processes self-tune through proactive agentic reasoning.',
    actionTitle: 'Agentic Execution',
    actionText: 'Cross-functional Joule agents continuously detect bottlenecks, reconcile variances, and autonomously compress cycle times.',
  },
  {
    kanji: '守破離',
    romaji: 'Shuhari',
    theme: 'Three Stages of Mastery',
    title: 'Standardize, Adapt, Transcend',
    desc: 'Shu (master the standard), Ha (extend with agility), Ri (transcend into autonomy).',
    actionTitle: 'Strategic Evolution',
    actionText: 'Adopt standard cloud best practices, decouple custom extensions via SAP BTP, and achieve autonomous enterprise operations.',
  },
  {
    kanji: '金継ぎ',
    romaji: 'Kintsugi',
    theme: 'Data Fabric Synergy',
    title: 'Strength in Unified Data',
    desc: 'Golden joinery — repairing and binding fragmented systems into an elevated, resilient whole.',
    actionTitle: 'Business Context',
    actionText: 'Unify disparate SAP and non-SAP data silos into a singular semantic data fabric, unlocking high-fidelity AI decision-making.',
  },
]

export default function SlideAgenticLedTransformation({ onNext, onNavigate }: Props) {
  const [activePillar, setActivePillar] = useState<number | null>(null)

  const goToAiAgentHub = () => {
    window.location.hash = '#/AI_Agent_Hub'
  }

  const goToSlide8 = () => {
    if (onNext) {
      onNext()
    } else if (onNavigate) {
      onNavigate(8)
    } else {
      window.location.hash = '#/Agent_Led_(ATC)'
    }
  }

  const goToOverview = () => {
    if (onNavigate) {
      onNavigate(2)
    } else {
      window.location.hash = '#/2'
    }
  }

  return (
    <div className="agentic-trans-container">
      {/* 1. Full-bleed Majestic Japanese Scenery (Kyoto Bridge, Reflecting Pond & Mount Fuji Sunrise) */}
      <div className="agentic-trans-bg-layer" aria-hidden="true">
        <img
          src={japaneseHeroBg}
          alt="Tranquil Kyoto arched bridge, tranquil water reflection, and serene Mount Fuji at dawn"
          className="agentic-trans-bg-img"
        />
        <div className="agentic-trans-vignette" />
        <Petals />
      </div>

      {/* 2. Top Navigation Bar */}
      <header className="agentic-trans-top-bar">
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="agentic-trans-nav-pill"
            onClick={goToAiAgentHub}
            aria-label="Previous slide: AI Agent Hub"
          >
            <span>‹</span>
            <span>AI Agent Hub</span>
          </button>
          <button
            className="agentic-trans-nav-pill"
            onClick={goToOverview}
            aria-label="Return to Overview"
          >
            <span>Overview</span>
          </button>
        </div>

        <BrandLockup variant="footer" theme="dark" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="agentic-trans-nav-pill primary"
            onClick={goToSlide8}
            aria-label="Start"
          >
            <span>Start</span>
            <span>›</span>
          </button>
        </div>
      </header>

      {/* 3. Hero Brand Title Banner (Upper Left Ribbon matching user attachment) */}
      <section className="agentic-trans-hero-banner">
        <h1 className="agentic-trans-title-main">Agent-led Transformation</h1>
        <h2 className="agentic-trans-subtitle">RISE with SAP</h2>
        <div className="agentic-trans-engine-pill">
          <span className="agentic-trans-engine-dot" aria-hidden="true" />
          <span>Autonomous Enterprise Engine</span>
        </div>
      </section>

      {/* 4. Japanese Cultural Transformation Pillars Grid */}
      <main className="agentic-pillars-grid" aria-label="Business Transformation Pillars inspired by Japanese Culture">
        {PILLARS.map((pillar, idx) => (
          <article
            key={idx}
            className={`agentic-pillar-card ${activePillar === idx ? 'active' : ''}`}
            onClick={() => setActivePillar(activePillar === idx ? null : idx)}
            tabIndex={0}
            role="button"
            aria-label={`${pillar.title} - ${pillar.kanji}`}
          >
            <div className="agentic-pillar-header">
              <span className="agentic-pillar-kanji">{pillar.kanji}</span>
              <span className="agentic-pillar-tag">{pillar.romaji}</span>
            </div>

            <h3 className="agentic-pillar-title">{pillar.title}</h3>
            <p className="agentic-pillar-desc">{pillar.desc}</p>

            <div className="agentic-pillar-context-box">
              <span className="agentic-pillar-context-label">{pillar.actionTitle}</span>
              <p className="agentic-pillar-context-text">{pillar.actionText}</p>
            </div>
          </article>
        ))}
      </main>
    </div>
  )
}
