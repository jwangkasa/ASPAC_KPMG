import BrandLockup from '../components/BrandLockup'
import BrainVisual from '../components/BrainVisual'
import '../styles/overview.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function Overview({ onPrev, onNext }: Props) {
  return (
    <div className="overview-slide">
      <main className="overview-content overview-center-layout">
        <div className="brain-hero-container">
          <BrainVisual />
        </div>
      </main>

      <footer className="overview-footer-nav">
        <button
          className="btn-nav-slide btn-back"
          onClick={onPrev}
          aria-label="Return to Welcome slide"
        >
          ‹ Welcome
        </button>

        {/* Creative & Professional Co-Branding Anchor */}
        <BrandLockup variant="footer" theme="dark" />

        <button
          className="btn-nav-slide btn-next"
          onClick={onNext}
          aria-label="Proceed to AI Reality & Foundation"
        >
          <span>AI Reality &amp; Foundation</span>
          <span className="nav-arrow">›</span>
        </button>
      </footer>
    </div>
  )
}
