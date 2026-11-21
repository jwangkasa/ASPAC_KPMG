import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import Petals from '../components/Petals'
import specImg from '../assets/incentive_100m_spec.png'
import '../styles/100mEuro.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface PackageTier {
  id: string
  amount: string
  title: string
  scope: string
  details: string
  badge?: string
  isTop?: boolean
}

const PACKAGES: PackageTier[] = [
  {
    id: 'p15',
    amount: '€15 k',
    title: 'SAP Agent Adoption',
    scope: 'Activates SAP AI Agent or Assistant',
    details: 'Customer activation of standard Joule Agent, Copilot assistant seats, or standard out-of-the-box SAP Business AI capabilities.',
    badge: 'Quick Win',
  },
  {
    id: 'p25',
    amount: '€25 k',
    title: 'Launch Package',
    scope: 'Custom Joule Studio or Build agent OR workflow / pro-code app',
    details: 'Delivers a custom Joule Studio or SAP Build agent OR an automated enterprise workflow / BTP pro-code application.',
    badge: 'Custom Agent',
  },
  {
    id: 'p50',
    amount: '€50 k',
    title: 'Performance Package',
    scope: 'Custom Joule Studio / Build agent PLUS workflow / pro-code app',
    details: 'Delivers a custom Joule Studio or Build agent PLUS integrated workflow / pro-code application with automated ERP execution.',
    badge: 'Most Popular',
    isTop: true,
  },
  {
    id: 'p100',
    amount: '€100 k',
    title: 'Enterprise Package',
    scope: '3+ custom Joule Studio / Build agents PLUS workflow / pro-code app',
    details: 'Delivers 3+ custom Joule Studio or Build agents PLUS automated workflow / pro-code application for multi-agent swarm orchestration.',
    badge: 'Max Payout',
    isTop: true,
  },
]

export default function Slide100MEuro({ onPrev }: Props) {
  const [selectedPkg, setSelectedPkg] = useState<string>('p50')
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const goToPrev = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/Key_Programs'
    }
  }

  const goToTakeaways = () => {
    window.location.hash = '#/Solidify_AI'
  }


  return (
    <div className="euro-container">
      {/* 1. White Canvas with Live Animated Sakura Petals */}
      <div className="euro-art-stage" aria-hidden="true">
        <Petals />
      </div>

      {/* 2. Header */}
      <header className="euro-header">
        <div className="euro-title-group">
          <div className="euro-eyebrow">
            <span className="euro-eyebrow-kanji">実り・百億</span>
            <span>• SAP × Partner Co-Investment Fund • FY2026</span>
          </div>
          <h1 className="euro-main-title">
            €100M Partner-led{' '}
            <span className="euro-title-highlight">AI Adoption Incentive</span>
            <span className="euro-title-badge">共創インセンティブ</span>
          </h1>
          <p className="euro-main-subtitle">
            Direct cash co-investment rewarding ecosystem partners who activate SAP AI Agents and scale customer Business AI Platform (BAIP) consumption velocity.
          </p>
        </div>

        <div className="euro-header-actions">
          <div className="euro-status-pill">
            <span>🏮 Live Pilot Active (Through 2026)</span>
          </div>
          <button
            type="button"
            className="euro-spec-btn"
            onClick={() => setIsZoomed(true)}
            title="Inspect original SAP incentive specification slide"
          >
            <span>✨ Spec Ref</span>
          </button>
        </div>
      </header>

      {/* 3. Main 3-Column Redesigned Showcase Stage */}
      <main className="euro-stage" aria-label="100M Euro Program Breakdown">
        {/* COLUMN 1: Strategic Foundations (3 Rounded Blue Blocks) */}
        <section className="euro-col-foundations" aria-label="Strategic Foundations">
          {/* Card 1: Fund Size */}
          <div className="euro-foundation-card">
            <div className="euro-fund-hero-val">€100M</div>
            <p className="euro-fund-sub">
              <strong>Investment in partners</strong> to drive customer consumption across enterprise accounts.
            </p>
            <div className="euro-fund-pill">
              <span>● Global FY2026 Fund</span>
            </div>
          </div>

          {/* Card 2: Live Pilot */}
          <div className="euro-foundation-card">
            <div className="euro-fund-hero-val">Live pilot</div>
            <p className="euro-fund-sub">
              Incentive runs through the <strong>end of 2026</strong>. Official partner nomination kicked-off <strong>June 15, 2026</strong>.
            </p>
            <div className="euro-fund-pill">
              <span>● Nomination Open</span>
            </div>
          </div>

          {/* Card 3: cACV Growth */}
          <div className="euro-foundation-card">
            <div className="euro-fund-hero-val">cACV</div>
            <p className="euro-fund-sub">
              <strong>Objective:</strong> Increase SAP Business AI Platform (BAIP) adoption and continuous AI Unit consumption.
            </p>
            <div className="euro-fund-pill">
              <span>● High-Velocity Impact</span>
            </div>
          </div>
        </section>

        {/* COLUMN 2: Partner & Customer Eligibility */}
        <section className="euro-col-governance" aria-label="Eligibility & Criteria">
          {/* Section A: Partner Eligibility */}
          <div className="euro-gov-section">
            <div className="euro-gov-title">
              <span>🏛️</span>
              <span>Partner Eligibility</span>
            </div>

            <div className="euro-gov-item">
              <span className="euro-gov-icon">✓</span>
              <div>
                <strong>SAP PartnerEdge partner:</strong> Must have achieved <span className="euro-gov-tag">SAP BTP Expert Competency</span>.
              </div>
            </div>

            <div className="euro-gov-item">
              <span className="euro-gov-icon">✓</span>
              <div>
                <strong>SAP due diligence:</strong> Valid due diligence of at least <span className="euro-gov-tag">Level 2</span> and in good standing with SAP.
              </div>
            </div>

            <div className="euro-gov-item">
              <span className="euro-gov-icon">✓</span>
              <div>
                <strong>SAP vendor number:</strong> Registered vendor number must exist in SAP's procurement system.
              </div>
            </div>
          </div>

          {/* Section B: Customer Eligibility */}
          <div className="euro-gov-section">
            <div className="euro-gov-title">
              <span>🎯</span>
              <span>Customer Eligibility</span>
            </div>

            <div className="euro-gov-item">
              <span className="euro-gov-icon">•</span>
              <div>
                <strong>Existing SAP BAIP Customers:</strong> Valid, active subscription (direct from SAP or reseller) renewal <span className="euro-gov-tag">&gt; 6 months</span>.
              </div>
            </div>

            <div className="euro-gov-item">
              <span className="euro-gov-icon">•</span>
              <div>
                <strong>Net New Customers:</strong> Signing agreement for eligible SAP Business AI Cloud Services during program period with <span className="euro-gov-tag">min 3-year contract</span>.
              </div>
            </div>

            <div className="euro-gov-item">
              <span className="euro-gov-icon">⚠</span>
              <div>
                <strong>Scope Restriction:</strong> Public Sector and Government Entities are <span className="euro-gov-tag excluded">Excluded</span>.
              </div>
            </div>
          </div>

          {/* Section C: Links & Fast-Track Documentation */}
          <div className="euro-gov-footer">
            <div className="euro-gov-links">
              <a
                href="#/100M_Euro"
                className="euro-gov-link"
                onClick={(e) => {
                  e.preventDefault()
                  setIsZoomed(true)
                }}
              >
                <span>↗</span> Landing Page with details on process &amp; criteria
              </a>
              <a
                href="#/100M_Euro"
                className="euro-gov-link"
                onClick={(e) => {
                  e.preventDefault()
                  setIsZoomed(true)
                }}
              >
                <span>↗</span> Partner Agreement Form (DocuSign)
              </a>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2px' }}>
                <a
                  href="#/100M_Euro"
                  className="euro-gov-link"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsZoomed(true)
                  }}
                >
                  <span>↗</span> T&amp;C
                </a>
                <a
                  href="#/100M_Euro"
                  className="euro-gov-link"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsZoomed(true)
                  }}
                >
                  <span>↗</span> FAQ
                </a>
              </div>
            </div>

            <div
              className="euro-qr-box"
              onClick={() => setIsZoomed(true)}
              style={{ cursor: 'pointer' }}
              title="Click to view full slide specification"
            >
              <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
                {/* QR Code Graphic Representation */}
                <rect x="10" y="10" width="30" height="30" rx="4" fill="#0f172a" />
                <rect x="16" y="16" width="18" height="18" fill="#ffffff" />
                <rect x="20" y="20" width="10" height="10" fill="#0f172a" />

                <rect x="60" y="10" width="30" height="30" rx="4" fill="#0f172a" />
                <rect x="66" y="16" width="18" height="18" fill="#ffffff" />
                <rect x="70" y="20" width="10" height="10" fill="#0f172a" />

                <rect x="10" y="60" width="30" height="30" rx="4" fill="#0f172a" />
                <rect x="16" y="66" width="18" height="18" fill="#ffffff" />
                <rect x="20" y="70" width="10" height="10" fill="#0f172a" />

                <rect x="45" y="15" width="8" height="8" fill="#0284c7" />
                <rect x="45" y="30" width="8" height="8" fill="#0284c7" />
                <rect x="45" y="45" width="10" height="10" rx="2" fill="#0284c7" />
                <rect x="60" y="45" width="8" height="8" fill="#0284c7" />
                <rect x="75" y="45" width="8" height="8" fill="#0284c7" />
                <rect x="60" y="60" width="12" height="12" fill="#0284c7" />
                <rect x="78" y="75" width="12" height="12" fill="#0284c7" />
                <rect x="60" y="78" width="12" height="12" fill="#0284c7" />
              </svg>
              <span>SAP PORTAL</span>
            </div>
          </div>
        </section>

        {/* COLUMN 3: 4 Incentive Payout Packages */}
        <section className="euro-col-packages" aria-label="Incentive Packages">
          {PACKAGES.map((pkg) => {
            const isSelected = selectedPkg === pkg.id
            return (
              <div
                key={pkg.id}
                className={`euro-pkg-card ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedPkg(pkg.id)}
              >
                <div className="euro-pkg-amount">{pkg.amount}</div>
                <div className="euro-pkg-info">
                  <div className="euro-pkg-title">
                    <span>{pkg.title}</span>
                    {pkg.badge && (
                      <span className={`euro-pkg-badge ${pkg.isTop ? 'top' : ''}`}>
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  <p className="euro-pkg-desc">
                    <strong>{pkg.scope}.</strong> {pkg.details}
                  </p>
                </div>
              </div>
            )
          })}
        </section>
      </main>


      {/* 5. Footer Navigation */}
      <footer className="euro-footer">
        <button
          type="button"
          className="euro-nav-btn"
          onClick={goToPrev}
          aria-label="Return to Key Programs"
        >
          <span>‹</span>
          <span>Key Programs</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="euro-nav-btn primary"
          onClick={goToTakeaways}
          aria-label="Proceed to Takeaways"
        >
          <span>Takeaways</span>
          <span>›</span>
        </button>
      </footer>

      {/* 6. Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="euro-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="euro-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="euro-modal-header">
              <h3 className="euro-modal-title">
                €100M Partner-led AI Adoption Incentive • Official Specification
              </h3>
              <button
                type="button"
                className="euro-modal-close-btn"
                onClick={() => setIsZoomed(false)}
                aria-label="Close specification modal"
              >
                ✕
              </button>
            </div>
            <div className="euro-modal-body">
              <img
                src={specImg}
                alt="€100M Partner-led AI Adoption Incentive Official Specification Slide"
                className="euro-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
