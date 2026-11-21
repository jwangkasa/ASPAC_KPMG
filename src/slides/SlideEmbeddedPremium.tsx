import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import originalSpec from '../assets/embedded_premium_spec.png'
import '../styles/embeddedPremium.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideEmbeddedPremium({ onPrev, onNext }: Props) {
  const [isZoomed, setIsZoomed] = useState(false)

  const goToPrev = () => {
    if (onPrev) {
      onPrev()
    } else {
      window.location.hash = '#/Pricing_Model'
    }
  }

  const goToNextSlide = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/Migration_AI'
    }
  }

  return (
    <div className="ep-container">
      {/* Ambient background glows */}
      <div className="ep-ambient-left" aria-hidden="true" />
      <div className="ep-ambient-right" aria-hidden="true" />

      {/* Header */}
      <header className="ep-header">
        <div className="ep-title-group">
          <div className="ep-eyebrow">
            <span>SAP Commercial Policy • Commercial Model Evolution</span>
          </div>
          <h1 className="ep-main-title">Premium-to-Base: what changes on November 1</h1>
          <p className="ep-main-subtitle">
            A simpler foundation, with Premium focused where AI executes work
          </p>
        </div>

        <div className="ep-header-actions">
          <div className="ep-effective-badge">
            <span>📅 Effective Nov 1</span>
          </div>
          <button
            type="button"
            className="ep-spec-btn"
            onClick={() => setIsZoomed(true)}
            title="View original slide visual specification"
          >
            <span>✨ Original Spec</span>
          </button>
        </div>
      </header>

      {/* Main Pillars Container: Move to Base AI directly on top of Remain Premium */}
      <main className="ep-pillars-main">
        {/* Pillar 1: Move to Base AI */}
        <article className="ep-pillar-card pillar-base">
          <div className="ep-pillar-header-row">
            <div className="ep-badge-pill-base">
              <span>🔵 Move to Base AI</span>
            </div>
            <span className="ep-tier-indicator">Standard Cloud Inclusion</span>
          </div>
          <h2 className="ep-pillar-title">Most generative AI capabilities</h2>
          <p className="ep-pillar-desc">
            Become included in standard cloud subscriptions, expanding everyday embedded AI value and reducing commercial friction.
          </p>
          <div className="ep-tags-row">
            <span className="ep-tag tag-base">✓ Standard Cloud Subscription Inclusion</span>
            <span className="ep-tag tag-base">✓ Everyday Embedded Assistance</span>
            <span className="ep-tag tag-base">✓ Zero Commercial Friction</span>
          </div>
        </article>

        {/* Pillar 2: Remain Premium */}
        <article className="ep-pillar-card pillar-premium">
          <div className="ep-pillar-header-row">
            <div className="ep-badge-pill-premium">
              <span>🟣 Remain Premium</span>
            </div>
            <span className="ep-tier-indicator">Execution &amp; Consumption</span>
          </div>
          <h2 className="ep-pillar-title">Execution-based and select high-value AI</h2>
          <p className="ep-pillar-desc">
            Agents and agentic orchestration consume AI Units on a per-action basis. Joule for Consultants remains licensed per user, while most other services transition to a consumption-based model. The PUPM model is being phased out.
          </p>
          <div className="ep-tags-row">
            <span className="ep-tag tag-premium">⚡ Per-Action AI Unit Consumption</span>
            <span className="ep-tag tag-premium">🤖 Agentic Autonomous Orchestration</span>
            <span className="ep-tag tag-premium">👤 Joule for Consultants (Per User)</span>
            <span className="ep-tag tag-premium">❌ PUPM Model Phased Out</span>
          </div>
        </article>
      </main>

      {/* Bottom Banner: What does not change */}
      <section className="ep-footer-banner" aria-label="Unchanged Core Principles">
        <div className="ep-banner-tag">
          <span>What does not change</span>
        </div>
        <div className="ep-banner-items">
          <div className="ep-banner-item">
            <span className="ep-banner-dot" />
            <span><strong>AI Units remain the core currency</strong> across execution services</span>
          </div>
          <div className="ep-banner-item">
            <span className="ep-banner-dot" />
            <span><strong>SKU 8019164 customers</strong> stay on their existing SKU</span>
          </div>
          <div className="ep-banner-item">
            <span className="ep-banner-dot" />
            <span><strong>Customers buy upfront</strong> and consume over time</span>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="ep-footer">
        <button
          type="button"
          className="ep-nav-btn"
          onClick={goToPrev}
          aria-label="Return to Pricing Models at a Glance"
        >
          <span>‹</span>
          <span>Pricing Models</span>
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          type="button"
          className="ep-nav-btn primary"
          onClick={goToNextSlide}
          aria-label="Proceed to Existing Customer Migration Guidance"
        >
          <span>Customer Migration</span>
          <span>›</span>
        </button>
      </footer>

      {/* Lightbox Modal for Original Slide Specification */}
      {isZoomed && (
        <div
          className="ep-modal-overlay"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="ep-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="ep-modal-header">
              <span>Original Slide Specification: Premium-to-Base Transition</span>
              <button
                type="button"
                className="ep-modal-close"
                onClick={() => setIsZoomed(false)}
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>
            <div className="ep-modal-body">
              <img
                src={originalSpec}
                alt="Premium-to-Base what changes on November 1 original specification"
                className="ep-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
