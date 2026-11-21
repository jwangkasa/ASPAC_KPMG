import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/rpt_scenario_spec.png'
import '../styles/rptScenario.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

type FilterOption = 'all' | 'available' | 'planned'

interface ScenarioItem {
  id: string
  title: string
  lob: string
  icon: string
  quote: string
  highlightText?: string
  statusText: string
  statusType: 'ga' | 'eac' | 'beta' | 'planned'
  tier: 'available' | 'planned'
}

const SCENARIOS: ScenarioItem[] = [
  // Top Row: Available Scenarios (Soft Lavender/Purple Border)
  {
    id: 'access-review',
    title: 'AI-Assisted Access Review',
    lob: 'SAP Cloud Identity & Access Governance',
    icon: '🛡️',
    quote: '“AI-driven recommendations reduce review effort by up to 50%, accelerating campaign completion by 25-40% while improving quality and compliance.”',
    highlightText: 'accelerating campaign completion by 25-40%',
    statusText: 'Now GA',
    statusType: 'ga',
    tier: 'available',
  },
  {
    id: 'cash-app',
    title: 'SAP Cash Application (FI-AR)',
    lob: 'SAP S/4HANA Cloud Private Edition',
    icon: '💰',
    quote: '“Achieving a match rate of above 90%, leading to a 71% reduction in A/R matching efforts and 0.5% reduction in day sales outstanding”',
    highlightText: '0.5% reduction in day sales outstanding',
    statusText: 'Now in EAC',
    statusType: 'eac',
    tier: 'available',
  },
  {
    id: 'billing-anomaly',
    title: 'Billing Anomaly Agent',
    lob: 'S/4 HANA Public Cloud',
    icon: '⚡',
    quote: '”97% reduction in effort on identifying anomalies, leading to 40% reduction in effort on reprocessing invoices and an overall faster billing cycle”',
    highlightText: '40% reduction in effort on reprocessing invoices',
    statusText: 'Now GA',
    statusType: 'ga',
    tier: 'available',
  },
  {
    id: 'lead-scoring',
    title: 'Sales Lead Scoring',
    lob: 'SAP Sales Cloud V2',
    icon: '🎯',
    quote: '“Enabling insights from day-one, even with limited data, allowing sales reps to take immediate actions”',
    statusText: 'Now in Beta',
    statusType: 'beta',
    tier: 'available',
  },

  // Bottom Row: Planned Scenarios (Sky Blue/Cyan Border)
  {
    id: 'retail-forecasting',
    title: 'Retail Demand Forecasting Agent',
    lob: 'Autonomous CX – Unified Commerce',
    icon: '🛍️',
    quote: '“Reduction in markdown leakage by up to 10%”',
    highlightText: 'up to 10%',
    statusText: 'Planned GA in late Q4 2026',
    statusType: 'planned',
    tier: 'planned',
  },
  {
    id: 'account-determination',
    title: 'Intelligent Account Determination',
    lob: 'Green Ledger, Cloud ERP Finance',
    icon: '🌱',
    quote: '“Saving several working days with SAP-RPT-1”',
    highlightText: 'SAP-RPT-1',
    statusText: 'Planned GA in Q4 2026',
    statusType: 'planned',
    tier: 'planned',
  },
  {
    id: 'merchandising-assistant',
    title: 'CX Merchandising Assistant',
    lob: 'Autonomous CX – Unified Commerce',
    icon: '✨',
    quote: '“Targeting potential losses of up to 23% in clicks and 14% in conversion”',
    highlightText: '23% in clicks and 14% in conversion',
    statusText: 'Planned GA in Q4 2026',
    statusType: 'planned',
    tier: 'planned',
  },
  {
    id: 'payment-anomaly',
    title: 'Payment Anomaly Agent',
    lob: 'TBC',
    icon: '💳',
    quote: '“Targeting potential losses of up to 23% in clicks and 14% in conversion”',
    highlightText: '23% in clicks and 14% in conversion',
    statusText: 'Planned GA in Q4 2026',
    statusType: 'planned',
    tier: 'planned',
  },
]

export default function SlideRptScenario({ onPrev, onNext }: Props) {
  const [filter, setFilter] = useState<FilterOption>('all')
  const [isZoomed, setIsZoomed] = useState(false)

  const goToTabularOverview = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/Tabular_overview'
    }
  }

  const goToTabularAi = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/tabular_ai'
    }
  }

  const availableScenarios = SCENARIOS.filter((s) => s.tier === 'available')
  const plannedScenarios = SCENARIOS.filter((s) => s.tier === 'planned')

  const renderQuote = (item: ScenarioItem) => {
    if (!item.highlightText) {
      return <span>{item.quote}</span>
    }
    const parts = item.quote.split(item.highlightText)
    if (parts.length === 2) {
      return (
        <span>
          {parts[0]}
          <span className="quote-hl">{item.highlightText}</span>
          {parts[1]}
        </span>
      )
    }
    return <span>{item.quote}</span>
  }

  return (
    <div className="rpt-container">
      {/* Ambient background glows */}
      <div className="rpt-ambient-left" aria-hidden="true" />
      <div className="rpt-ambient-right" aria-hidden="true" />

      {/* Header Section */}
      <header className="rpt-header">
        <div className="rpt-title-group">
          <div className="rpt-eyebrow">
            <span>SAP Business AI Platform • Foundation Models & Scenarios</span>
          </div>
          <h1 className="rpt-main-title">
            SAP Scenarios with <span className="highlight-rpt">SAP-RPT</span>
          </h1>
          <p className="rpt-main-subtitle">
            Pre-trained tabular foundation models unlocking real-time operational insights, anomaly detection, and autonomous workflows across SAP line-of-business applications.
          </p>
        </div>

        <div className="rpt-header-actions">
          <div className="rpt-filter-btn-group" role="tablist" aria-label="Scenario availability filter">
            <button
              type="button"
              className={`rpt-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All (8)
            </button>
            <button
              type="button"
              className={`rpt-filter-btn ${filter === 'available' ? 'active' : ''}`}
              onClick={() => setFilter('available')}
            >
              Available Now (4)
            </button>
            <button
              type="button"
              className={`rpt-filter-btn ${filter === 'planned' ? 'active' : ''}`}
              onClick={() => setFilter('planned')}
            >
              Roadmap (4)
            </button>
          </div>

          <button
            type="button"
            className="rpt-spec-btn"
            onClick={() => setIsZoomed(true)}
            title="View original slide visual specification"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Main 2-Tier Showcase Grid */}
      <main className="rpt-grid-container" aria-label="SAP-RPT Business Scenarios">
        {/* Tier 1: Available Now (4 Cards) */}
        {(filter === 'all' || filter === 'available') && (
          <section className="rpt-cards-row" aria-label="Available Scenarios">
            {availableScenarios.map((item) => (
              <article key={item.id} className="rpt-card card-available">
                <div className="rpt-card-top">
                  <div className="rpt-card-title-row">
                    <h2 className="rpt-card-title">{item.title}</h2>
                    <span className="rpt-card-icon" aria-hidden="true">{item.icon}</span>
                  </div>
                  <p className="rpt-card-subtitle">{item.lob}</p>
                </div>

                <p className="rpt-card-quote">
                  {renderQuote(item)}
                </p>

                <div className="rpt-card-footer">
                  <span className={`rpt-status-badge status-${item.statusType}`}>
                    {item.statusText}
                  </span>
                  <span className={`rpt-status-pill ${item.statusType === 'ga' ? 'pill-live' : 'pill-preview'}`}>
                    {item.statusType === 'ga' ? 'Live GA' : 'Preview'}
                  </span>
                </div>
              </article>
            ))}
          </section>
        )}

        {/* Section Divider: More coming soon */}
        {filter === 'all' && (
          <div className="rpt-divider-row" aria-hidden="true">
            <span className="rpt-divider-text">More coming soon</span>
            <span className="rpt-divider-line" />
          </div>
        )}

        {/* Tier 2: Planned Roadmap (4 Cards) */}
        {(filter === 'all' || filter === 'planned') && (
          <section className="rpt-cards-row" aria-label="Planned Scenarios">
            {plannedScenarios.map((item) => (
              <article key={item.id} className="rpt-card card-planned">
                <div className="rpt-card-top">
                  <div className="rpt-card-title-row">
                    <h2 className="rpt-card-title">{item.title}</h2>
                    <span className="rpt-card-icon" aria-hidden="true">{item.icon}</span>
                  </div>
                  <p className="rpt-card-subtitle">{item.lob}</p>
                </div>

                <p className="rpt-card-quote">
                  {renderQuote(item)}
                </p>

                <div className="rpt-card-footer">
                  <span className={`rpt-status-badge status-${item.statusType}`}>
                    {item.statusText}
                  </span>
                  <span className="rpt-status-pill pill-roadmap">
                    Q4 2026
                  </span>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>

      {/* Footer Section */}
      <footer className="rpt-footer">
        <p className="rpt-disclaimer">
          Disclaimer: The information in this document is not a commitment, promise, or legal obligation to deliver any material, code, or functionality.
        </p>

        {/* KPMG × SAP Co-Brand Lockup */}
        <BrandLockup variant="footer" theme="light" />

        {/* Navigation Actions */}
        <div className="rpt-footer-actions">
          <button
            type="button"
            className="rpt-nav-btn"
            onClick={goToTabularOverview}
            aria-label="Return to Tabular Overview"
          >
            <span>‹</span>
            <span>Tabular Overview</span>
          </button>
          <button
            type="button"
            className="rpt-nav-btn primary"
            onClick={goToTabularAi}
            aria-label="Proceed to Intelligent Payment Matching"
          >
            <span>Payment Matching</span>
            <span>›</span>
          </button>
        </div>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="rpt-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="rpt-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rpt-modal-header">
              <span>Original Slide Specification: SAP Scenarios with SAP-RPT</span>
              <button
                type="button"
                className="rpt-modal-close"
                onClick={() => setIsZoomed(false)}
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>
            <div className="rpt-modal-body">
              <img
                src={originalSpec}
                alt="SAP Scenarios with SAP-RPT Specification"
                className="rpt-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
