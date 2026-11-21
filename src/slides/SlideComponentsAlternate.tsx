import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import card1Img from '../assets/card_1_joule.png'
import card2Img from '../assets/card_2_autonomous_suite.png'
import card3Img from '../assets/card_3_industry_ai.png'
import card4Img from '../assets/card_4_business_ai_platform.png'
import card5Img from '../assets/card_5_transformation.png'
import '../styles/componentsAlternate.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface ComponentElement {
  id: number
  title: string
  subtitle: string
  targetSlide: number
  targetHash: string
  badge: string
  image: string
}

const KEY_ELEMENTS: ComponentElement[] = [
  {
    id: 1,
    title: 'Joule',
    subtitle:
      'Joule as the new engagement layer, bringing together data, workflows, and agents across SAP systems and beyond.',
    targetSlide: 4,
    targetHash: '4',
    badge: 'Slide 4',
    image: card1Img,
  },
  {
    id: 2,
    title: 'SAP Autonomous Suite',
    subtitle:
      'SAP Autonomous Suite to reinvent how enterprises run, based on AI assistants and agents executing work E2E.',
    targetSlide: 5,
    targetHash: '5',
    badge: 'Slide 5',
    image: card2Img,
  },
  {
    id: 3,
    title: 'Industry AI',
    subtitle:
      'Industry AI embeds the process knowledge, compliance rules, and data models specific to your industry.',
    targetSlide: 6,
    targetHash: '6',
    badge: 'Slide 6',
    image: card3Img,
  },
  {
    id: 4,
    title: 'SAP Business AI Platform',
    subtitle:
      'SAP Business AI platform delivering business context, unified data, models, and enterprise-grade governance.',
    targetSlide: 7,
    targetHash: '7',
    badge: 'Slide 7',
    image: card4Img,
  },
  {
    id: 5,
    title: 'Agent-led business transformation',
    subtitle:
      'Accelerate the evolution to an Autonomous Enterprise with agent-led transformation, delivered through RISE and GROW.',
    targetSlide: 8,
    targetHash: '8',
    badge: 'Slide 8',
    image: card5Img,
  },
]

export default function SlideComponentsAlternate({
  onPrev,
  onNext,
  onNavigate,
}: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const handleNav = (slideNumber: number, hash?: string) => {
    if (onNavigate) {
      onNavigate(slideNumber)
    } else {
      window.location.hash = hash ? `#/${hash}` : `#/${slideNumber}`
    }
  }

  const goToStandardView = () => {
    if (onNavigate) {
      onNavigate(3)
    } else {
      window.location.hash = '#/architecture_overview'
    }
  }

  const goToJoule = () => {
    if (onNavigate) {
      onNavigate(4)
    } else {
      window.location.hash = '#/4'
    }
  }

  return (
    <div className="comp-alt-container">
      {/* Ambient background glows */}
      <div className="comp-alt-glow-blue" aria-hidden="true" />
      <div className="comp-alt-glow-purple" aria-hidden="true" />

      {/* Header */}
      <header className="comp-alt-header">
        <div className="comp-alt-title-group">
          <div className="comp-alt-eyebrow">
            <span>Architecture Overview • Slide 3 (Alternate View)</span>
          </div>
          <h1 className="comp-alt-title">
            Key elements of the Autonomous Enterprise
          </h1>
          <p className="comp-alt-subtitle">
            An end-to-end architectural perspective on how Joule, Autonomous Suite, Industry AI, Business AI Platform, and Agent-led Transformation power the enterprise.
          </p>
        </div>

        <div className="comp-alt-header-actions">
          <button
            type="button"
            className="comp-alt-btn-toggle"
            onClick={goToStandardView}
            title="Switch back to Slide 3 Standard View"
          >
            <span>‹ Standard View</span>
          </button>
        </div>
      </header>

      {/* Main Content: Hero 5 Cards Showcase (Diagram section removed per user request) */}
      <main className="comp-alt-main">
        <div className="comp-alt-cards-grid" role="list">
          {KEY_ELEMENTS.map((el) => {
            const isSelected = selectedId === el.id
            return (
              <div
                key={el.id}
                className={`comp-alt-card ${isSelected ? 'active' : ''}`}
                onClick={() => handleNav(el.targetSlide, el.targetHash)}
                onMouseEnter={() => setSelectedId(el.id)}
                onMouseLeave={() => setSelectedId(null)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleNav(el.targetSlide, el.targetHash)
                  }
                }}
                title={`Explore ${el.title} (Slide ${el.targetSlide})`}
              >
                {/* Hero Card Image from Image 2 */}
                <div className="comp-alt-card-image-wrap">
                  <img
                    src={el.image}
                    alt={`${el.title} illustration card`}
                    className="comp-alt-card-hero-img"
                  />
                </div>

                {/* Card Content & Description */}
                <div className="comp-alt-card-content">
                  <p className="comp-alt-card-desc">{el.subtitle}</p>
                </div>

                {/* Interactive Action Button */}
                <div className="comp-alt-card-action">
                  <span>Explore Slide {el.targetSlide}</span>
                  <span className="action-arrow" aria-hidden="true">→</span>
                </div>
              </div>
            )
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="comp-alt-footer">
        <button
          type="button"
          className="comp-alt-nav-btn"
          onClick={onPrev || goToStandardView}
          aria-label="Return to Slide 3 Standard View"
        >
          ‹ Slide 3: Standard View
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="comp-alt-nav-btn primary"
          onClick={onNext || goToJoule}
          aria-label="Proceed to Slide 4: Joule Work"
        >
          Slide 4: Joule Work ›
        </button>
      </footer>
    </div>
  )
}
