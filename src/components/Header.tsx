import kpmg from '../assets/logos/kpmg.png'
import sap from '../assets/logos/sap.png'

export default function Header() {
  return (
    <header className="slide-header">
      <img className="logo logo-kpmg" src={kpmg} alt="KPMG" />
      <img className="logo logo-sap" src={sap} alt="SAP" />
    </header>
  )
}
