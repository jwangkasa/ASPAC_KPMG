import BrandLockup from '../components/BrandLockup'
import sapLogo from '../assets/logos/sap.png'
import diagramImg from '../assets/autonomous_enterprise_diagram.png'
import '../styles/autonomousVision.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface VisionPillar {
  title: string
  body: string
  accentColor: string
}

const PILLARS: VisionPillar[] = [
  {
    title: 'Your people can do their best work.',
    body: 'Agents handle routine transactions end to end, so people can focus on the decisions that move the business.',
    accentColor: '#00338d',
  },
  {
    title: 'Your business responds before teams convene.',
    body: 'When conditions change, the business acts as one. Agents coordinate across the business in real time. No lag between signal and action.',
    accentColor: '#6366f1',
  },
  {
    title: 'You move fast because you can trust the system.',
    body: "Every AI action is governed, auditable, and traceable. Not added later. Built in from the start. Speed and control aren't a tradeoff.",
    accentColor: '#0284c7',
  },
]

export default function SlideAutonomousVision({ onPrev, onNext, onNavigate }: Props) {
  const goToHub = () => {
    if (onNavigate) {
      onNavigate(3)
    } else {
      window.location.hash = '#/architecture_overview'
    }
  }

  const goToAgenticGap = () => {
    window.location.hash = '#/agentic-gap'
  }

  return (
    <div className="vision-slide-container">
      {/* Background Decorative Arc */}
      <div className="vision-bg-arc" aria-hidden="true" />

      {/* Main Two-Column Layout */}
      <main className="vision-main-layout">
        {/* Left Column: Logo, Heading, and 3D Architecture Graphic */}
        <section className="vision-left-col" aria-label="Autonomous Enterprise Vision Overview">
          <header className="vision-header">
            <img src={sapLogo} alt="SAP" className="vision-sap-logo" />
            <h1 className="vision-main-title">
              What is <span className="title-bold">SAP’s</span>
              <br />
              <span className="title-strong">Autonomous</span>
              <br />
              <span className="title-strong">Enterprise</span> vision?
            </h1>
          </header>

          <div className="vision-diagram-wrapper">
            <img
              src={diagramImg}
              alt="SAP Business AI Platform - Autonomous Enterprise Ecosystem Diagram"
              className="vision-diagram-img"
            />
          </div>
        </section>

        {/* Right Column: 3 Pillars with Bold Headings and Crisp Explanations */}
        <section className="vision-right-col" aria-label="Key Outcomes of Autonomous Enterprise">
          <div className="vision-pillars-list">
            {PILLARS.map((pillar, idx) => (
              <article key={idx} className="vision-pillar-card">
                <div
                  className="vision-pillar-indicator"
                  style={{ backgroundColor: pillar.accentColor }}
                  aria-hidden="true"
                />
                <div className="vision-pillar-content">
                  <h2 className="vision-pillar-title">{pillar.title}</h2>
                  <p className="vision-pillar-body">{pillar.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Slide Navigation Footer */}
      <footer className="vision-footer">
        <button
          className="vision-nav-btn"
          onClick={onPrev || goToAgenticGap}
          aria-label="Return to Agentic AI Foundation"
        >
          ‹ Agentic Foundation
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="vision-nav-btn primary"
          onClick={onNext || goToHub}
          aria-label="Proceed to Autonomous Enterprise Architecture Hub"
        >
          Architecture Hub (Slide 3) ›
        </button>
      </footer>
    </div>
  )
}
