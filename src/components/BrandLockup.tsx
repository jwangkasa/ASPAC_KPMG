import kpmgWhite from '../assets/logos/kpmg.png'
import kpmgDark from '../assets/logos/kpmg-dark.png'
import sapLogo from '../assets/logos/sap.png'
import '../styles/brandLockup.css'

interface Props {
  variant?: 'hero' | 'footer'
  theme?: 'dark' | 'light'
}

export default function BrandLockup({ variant = 'hero', theme = 'dark' }: Props) {
  if (variant === 'footer') {
    const isLight = theme === 'light'
    return (
      <div className="brand-lockup-wrapper">
        <div
          className={`brand-lockup-footer ${isLight ? 'theme-light' : 'theme-dark'}`}
          aria-label="KPMG and SAP Strategic Alliance"
        >
          <img
            src={isLight ? kpmgDark : kpmgWhite}
            alt="KPMG"
            className="lockup-img kpmg-footer"
          />
          <span className="lockup-cross" aria-hidden="true">✕</span>
          <img src={sapLogo} alt="SAP" className="lockup-img sap-footer" />
          <span className="lockup-sep" aria-hidden="true">|</span>
          <span className="lockup-sub">ASPAC Summit 2026</span>
        </div>

        {/* Menu button placed at bottom next to the BrandLockup image */}
        <button
          type="button"
          className={`brand-lockup-menu-btn ${isLight ? 'theme-light' : 'theme-dark'}`}
          onClick={() => window.dispatchEvent(new CustomEvent('toggle-deck-menu'))}
          aria-label="Toggle Deck Navigation Menu"
          title="Browse All Presentation Pages (Menu)"
        >
          <div className="deck-menu-sandwich-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="brand-lockup-menu-label">Menu</span>
        </button>
      </div>
    )
  }

  // Hero variant (Welcome slide on dark background)
  return (
    <div className="brand-lockup-hero" aria-label="KPMG and SAP Strategic Alliance">
      <div className="lockup-logos-row">
        <img src={kpmgWhite} alt="KPMG" className="lockup-img kpmg-hero" />
        <span className="lockup-divider" aria-hidden="true" />
        <img src={sapLogo} alt="SAP" className="lockup-img sap-hero" />
      </div>
      <div className="lockup-label">Strategic Alliance • Asia Pacific</div>
    </div>
  )
}
