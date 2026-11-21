import { useEffect, useState } from 'react'
import '../styles/deckMenu.css'

interface DeckMenuGroup {
  title: string
  icon: string
  items: {
    hash: string
    title: string
    code: string
  }[]
}

const DECK_GROUPS: DeckMenuGroup[] = [
  {
    title: 'Autonomous Enterprise',
    icon: '🏛️',
    items: [
      { hash: 'reality', title: 'AI Reality Foundation', code: '#/reality' },
      { hash: 'agentic-gap', title: 'Agentic Gap Foundation', code: '#/agentic-gap' },
      { hash: 'vision', title: 'Autonomous Vision', code: '#/vision' },
      { hash: 'architecture_overview', title: 'Architecture Overview (Slide 3)', code: '#/architecture_overview' },
      { hash: 'components', title: 'Components Alternate View', code: '#/components' },
    ],
  },
  {
    title: 'Joule',
    icon: '⚡',
    items: [
      { hash: '4', title: 'Slide 4: Joule Work Experience', code: '#/4' },
      { hash: 'joule-architecture', title: 'Joule Architecture', code: '#/joule-architecture' },
      { hash: 'joule-components', title: 'Joule Components Main', code: '#/joule-components' },
      { hash: 'SMJ', title: 'SAP Managed Joule', code: '#/SMJ' },
    ],
  },
  {
    title: 'Autonomous Suite',
    icon: '🏢',
    items: [
      { hash: 'Autonomous_Suite', title: 'Slide 5: Autonomous Suite', code: '#/Autonomous_Suite' },
      { hash: 'finance', title: 'Autonomous Finance', code: '#/finance' },
      { hash: 'spend', title: 'Autonomous Spend', code: '#/spend' },
      { hash: 'scm', title: 'Autonomous Supply Chain (SCM)', code: '#/scm' },
      { hash: 'hcm', title: 'Autonomous HCM', code: '#/hcm' },
      { hash: 'cx', title: 'Autonomous CX', code: '#/cx' },
    ],
  },
  {
    title: 'Industry AI',
    icon: '🌐',
    items: [
      { hash: '6', title: 'Slide 6: Industry AI', code: '#/6' },
    ],
  },
  {
    title: 'Business AI Platform',
    icon: '🧠',
    items: [
      { hash: '7', title: 'Slide 7: Business AI Platform', code: '#/7' },
      { hash: 'AI_Agent_Hub', title: 'AI Agent Hub & Governance', code: '#/AI_Agent_Hub' },
      { hash: 'ai_services', title: 'AI Services & Models', code: '#/ai_services' },
      { hash: 'sap_ai_core', title: 'SAP AI Core Engine', code: '#/sap_ai_core' },
      { hash: 'Tabular_overview', title: 'Tabular Overview (LLM vs Structured)', code: '#/Tabular_overview' },
      { hash: 'rpt_scenario', title: 'SAP Scenarios with SAP-RPT', code: '#/rpt_scenario' },
      { hash: 'tabular_ai', title: 'Intelligent Payment Matching', code: '#/tabular_ai' },
      { hash: 'GenAI', title: 'Generative AI Hub', code: '#/GenAI' },
      { hash: 'BDC_AI', title: 'BDC AI & Data Products (Video)', code: '#/BDC_AI' },
    ],
  },
  {
    title: 'Agent-led Transformation',
    icon: '🚀',
    items: [
      { hash: 'agentic_led_transformation', title: 'Agentic-Led Transformation', code: '#/agentic_led_transformation' },
      { hash: 'Agent_Led_(ATC)', title: 'Agentic Led Transformation (Slide 8)', code: '#/Agent_Led_(ATC)' },
      { hash: 'ai_rapid', title: 'AI Rapid Implementation', code: '#/ai_rapid' },
      { hash: 'toolchain', title: 'Agent-Led Toolchain', code: '#/toolchain' },
      { hash: 'Migration_ROI', title: 'Migration ROI & Complexity Drivers', code: '#/Migration_ROI' },
      { hash: 'atc_assistants', title: 'Modernization Assistants', code: '#/atc_assistants' },
      { hash: 'atc_agents', title: 'ATC Agents Breakdown', code: '#/atc_agents' },
      { hash: 'rise', title: 'Slide 9: RISE with SAP Detail', code: '#/rise' },
      { hash: 'grow', title: 'Slide 10: GROW with SAP Detail', code: '#/grow' },
    ],
  },
  {
    title: 'Commercial',
    icon: '💴',
    items: [
      { hash: 'commercial', title: 'Cracking the Commercial', code: '#/commercial' },
      { hash: 'Start_Grow_AI', title: 'Start & Grow with SAP AI', code: '#/Start_Grow_AI' },
      { hash: 'joule_base', title: 'Base AI (Joule Base)', code: '#/joule_base' },
      { hash: 'Premium_AI', title: 'Premium AI (AI Units)', code: '#/Premium_AI' },
      { hash: 'Pricing_Model', title: 'Pricing Models at a Glance', code: '#/Pricing_Model' },
      { hash: 'Embedded_Premium', title: 'Premium-to-Base Transition', code: '#/Embedded_Premium' },
      { hash: 'Migration_AI', title: 'Existing Customer Migration', code: '#/Migration_AI' },
      { hash: 'Joule_Work_Explained', title: 'Joule Work Explained', code: '#/Joule_Work_Explained' },
      { hash: 'sap_agentic_model', title: 'Agentic Commercial Model', code: '#/sap_agentic_model' },
      { hash: 'agentic_orchestration_pricing', title: 'Agentic Orchestration Pricing', code: '#/agentic_orchestration_pricing' },
      { hash: 'Joule_Studio', title: 'Joule Studio (Managed Platform)', code: '#/Joule_Studio' },
      { hash: 'Joule_Studio_Objectives', title: 'Joule Studio Objectives', code: '#/Joule_Studio_Objectives' },
      { hash: 'Joule_Studio_Commercials', title: 'Joule Studio Commercial Model', code: '#/Joule_Studio_Commercials' },
      { hash: 'JS_Design', title: 'Joule Studio Design-time Tooling', code: '#/JS_Design' },
      { hash: 'JouleS_runtime', title: 'Joule Studio Runtime Pricing', code: '#/JouleS_runtime' },
      { hash: 'JouleS_Tshirt', title: 'Agent T-Shirt Sizing', code: '#/JouleS_Tshirt' },
    ],
  },
  {
    title: 'Key Programs (2026)',
    icon: '🏮',
    items: [
      { hash: 'Key_Programs', title: 'Key Programs (2026): Partner Ecosystem', code: '#/Key_Programs' },
      { hash: '100M_Euro', title: '€100M Partner AI Adoption Incentive', code: '#/100M_Euro' },
    ],
  },
  {
    title: 'Frameworks & Conclusion',
    icon: '📑',
    items: [
      { hash: '1', title: 'Slide 1: Welcome (Tokyo 2026)', code: '#/1' },
      { hash: 'agenda', title: 'Program Agenda', code: '#/agenda' },
      { hash: 'RISE_SAP', title: 'Slide 16: RISE Architecture', code: '#/RISE_SAP' },
      { hash: 'GROW_SAP', title: 'Slide 17: GROW Architecture', code: '#/GROW_SAP' },
      { hash: 'obstacles', title: 'Slide 18: Agentic Obstacles', code: '#/obstacles' },
    ],
  },
  {
    title: 'Solidifying the AI Journey',
    icon: '⛩️',
    items: [
      { hash: 'Solidify_AI', title: 'Solidifying the AI Journey: Recommended Sales Play and GTM', code: '#/Solidify_AI' },
    ],
  },
]

interface Props {
  currentHash: string
  onSelectHash: (hash: string) => void
}

export default function DeckMenu({ currentHash, onSelectHash }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  // Normalize current hash for comparison
  const normalizedCurrent = currentHash.replace(/^#\/?/, '').toLowerCase()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    const onToggle = () => setIsOpen((prev) => !prev)
    const onOpen = () => setIsOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('toggle-deck-menu', onToggle)
    window.addEventListener('open-deck-menu', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('toggle-deck-menu', onToggle)
      window.removeEventListener('open-deck-menu', onOpen)
    }
  }, [])

  const handleSelect = (hash: string) => {
    onSelectHash(hash)
    setIsOpen(false)
  }

  return (
    <>
      {/* On Welcome slide (which has hero layout without footer), provide a top-right floating Menu button */}
      {(normalizedCurrent === '1' || normalizedCurrent === 'welcome' || normalizedCurrent === '') && (
        <button
          type="button"
          className="deck-menu-toggle-welcome"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Deck Navigation Menu"
          title="Browse All Presentation Pages (Menu)"
        >
          <div className="deck-menu-sandwich-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="deck-menu-toggle-label">Menu</span>
        </button>
      )}

      {/* Flyout Drawer / Modal Overlay */}
      {isOpen && (
        <div
          className="deck-menu-overlay"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="deck-menu-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="deck-menu-header">
              <div className="deck-menu-header-title">
                <span className="deck-menu-header-eyebrow">KPMG × SAP • ASPAC Summit 2026</span>
                <h2 className="deck-menu-header-h2">Deck Navigator</h2>
              </div>
              <button
                type="button"
                className="deck-menu-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close Navigator"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Groups */}
            <div className="deck-menu-content">
              {DECK_GROUPS.map((group, gIdx) => (
                <div key={gIdx} className="deck-menu-group">
                  <div className="deck-menu-group-header">
                    <h3 className="deck-menu-group-title">
                      <span>{group.icon}</span>
                      <span>{group.title}</span>
                    </h3>
                    <span className="deck-menu-group-count">{group.items.length} slides</span>
                  </div>

                  <div className="deck-menu-items-grid">
                    {group.items.map((item, iIdx) => {
                      const isActive = normalizedCurrent === item.hash.toLowerCase()
                      return (
                        <button
                          key={iIdx}
                          type="button"
                          className={`deck-menu-item-btn ${isActive ? 'is-active' : ''}`}
                          onClick={() => handleSelect(item.hash)}
                        >
                          <div className="deck-menu-item-left">
                            <span className="deck-menu-hash-badge">{item.code}</span>
                            <span>{item.title}</span>
                          </div>
                          {isActive && <span className="deck-menu-active-dot" />}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
