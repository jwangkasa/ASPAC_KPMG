import { useRef } from 'react'
import BrandLockup from '../components/BrandLockup'
import Petals from '../components/Petals'
import fuji from '../assets/hero/fuji.jpg'
import sakura from '../assets/hero/sakura.jpg'
import '../styles/welcome.css'

interface Props {
  onNext?: () => void
  onPrev?: () => void
  hasNext?: boolean
  hasPrev?: boolean
  onNavigate?: (slideNumber: number) => void
}

export default function Welcome({ onNext }: Props) {
  const root = useRef<HTMLElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = root.current
    if (!el) return
    const x = e.clientX / window.innerWidth - 0.5
    const y = e.clientY / window.innerHeight - 0.5
    el.style.setProperty('--px', x.toFixed(3))
    el.style.setProperty('--py', y.toFixed(3))
  }

  return (
    <main ref={root} className="welcome" onMouseMove={onMove}>
      <div className="art" aria-hidden="true">
        <img className="art-fuji" src={fuji} alt="" />
        <img className="art-sakura" src={sakura} alt="" />
        <div className="art-fade" />
        <Petals />
      </div>

      <svg className="waves" aria-hidden="true" viewBox="0 0 400 200" preserveAspectRatio="xMinYMax slice">
        <defs>
          <pattern id="seigaiha" width="60" height="30" patternUnits="userSpaceOnUse">
            {[0, 30].map((ox) => [0, 15].map((oy) => (
              <g key={`${ox}-${oy}`} transform={`translate(${ox + (oy ? 0 : 0)} ${oy})`} fill="none" stroke="rgba(120,150,255,0.35)" strokeWidth="0.8">
                <circle cx="30" cy="30" r="28" /><circle cx="30" cy="30" r="20" /><circle cx="30" cy="30" r="12" />
              </g>
            )))}
          </pattern>
        </defs>
        <rect width="400" height="200" fill="url(#seigaiha)" />
      </svg>

      <section className="copy">
        <span className="gold-rule" />

        {/* Unified Creative & Professional Co-Brand Lockup */}
        <BrandLockup variant="hero" />

        <p className="chip reveal" style={{ ['--i' as string]: 0 }}>
          東京 &nbsp;•&nbsp; TOKYO &nbsp;•&nbsp; 26–29 OCTOBER 2026
        </p>

        <h1 className="title">
          <span className="reveal" style={{ ['--i' as string]: 1 }}>ASPAC SAP</span>
          <span className="reveal" style={{ ['--i' as string]: 2 }}>Leadership Summit</span>
        </h1>

        <p className="tagline reveal" style={{ ['--i' as string]: 4 }}>
          Connect. Challenge. Build what’s next.
        </p>

        <p className="venue reveal" style={{ ['--i' as string]: 5 }}>
          ANA InterContinental Tokyo
        </p>
      </section>

      {/* Right Bottom Button: Agenda */}
      <button
        className="btn-overview-trigger"
        onClick={(e) => {
          e.stopPropagation()
          if (onNext) {
            onNext()
          } else {
            window.location.hash = '#/agenda'
          }
        }}
        aria-label="Proceed to Agenda page"
      >
        <span className="btn-label">Agenda</span>
        <span className="btn-arrow" aria-hidden="true">→</span>
      </button>
    </main>
  )
}
