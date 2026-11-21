import type React from 'react'
import { useCallback, useEffect, useState } from 'react'
import Welcome from './slides/Welcome'
import SlideAgenda from './slides/SlideAgenda'
import SlideRealityFoundation from './slides/SlideRealityFoundation'
import SlideAgenticGapFoundation from './slides/SlideAgenticGapFoundation'
import SlideAutonomousVision from './slides/SlideAutonomousVision'
import Slide3Hub from './slides/Slide3Hub'
import Slide4JouleWorkExperience from './slides/Slide4JouleWorkExperience'
import Slide5AutonomousSuite from './slides/Slide5AutonomousSuite'
import Slide6IndustryAI from './slides/Slide6IndustryAI'
import Slide7BusinessAIPlatform from './slides/Slide7BusinessAIPlatform'
import Slide8Transformation from './slides/Slide8Transformation'
import SlideRiseDetail from './slides/SlideRiseDetail'
import SlideGrowDetail from './slides/SlideGrowDetail'
import SlideFinanceDetail from './slides/SlideFinanceDetail'
import SlideSpendDetail from './slides/SlideSpendDetail'
import SlideSCMDetail from './slides/SlideSCMDetail'
import SlideHCMDetail from './slides/SlideHCMDetail'
import SlideCXDetail from './slides/SlideCXDetail'
import SlideJouleArchitecture from './slides/SlideJouleArchitecture'
import SlideJouleComponents from './slides/SlideJouleComponents'
import SlideRiseSap from './slides/SlideRiseSap'
import SlideGrowSap from './slides/SlideGrowSap'
import AgenticObstacles from './slides/AgenticObstacles'
import SlideAgenticLedTransformation from './slides/SlideAgenticLedTransformation'
import SlideToolchain from './slides/SlideToolchain'
import SlideAtcAssistants from './slides/SlideAtcAssistants'
import SlideAtcAgents from './slides/SlideAtcAgents'
import SlideSmj from './slides/SlideSmj'
import SlideAiRapid from './slides/SlideAiRapid'
import SlideComponentsAlternate from './slides/SlideComponentsAlternate'
import SlideAiServices from './slides/SlideAiServices'
import SlideSapAiCore from './slides/SlideSapAiCore'
import SlideTabularOverview from './slides/SlideTabularOverview'
import SlideRptScenario from './slides/SlideRptScenario'
import SlideTabularAi from './slides/SlideTabularAi'
import SlideGenAi from './slides/SlideGenAi'
import SlideBdcAi from './slides/SlideBdcAi'
import SlideCrackingCommercial from './slides/SlideCrackingCommercial'
import SlideStartGrowAi from './slides/SlideStartGrowAi'
import SlideJouleBase from './slides/SlideJouleBase'
import SlideJouleWorkExplained from './slides/SlideJouleWorkExplained'
import SlideSapAgenticModel from './slides/SlideSapAgenticModel'
import SlideAgenticOrchestrationPricing from './slides/SlideAgenticOrchestrationPricing'
import SlidePremiumAi from './slides/SlidePremiumAi'
import SlideEmbeddedPremium from './slides/SlideEmbeddedPremium'
import SlideMigrationAi from './slides/SlideMigrationAi'
import SlidePricingModel from './slides/SlidePricingModel'
import SlideJouleStudio from './slides/SlideJouleStudio'
import SlideJouleStudioObjectives from './slides/SlideJouleStudioObjectives'
import SlideJouleStudioCommercials from './slides/SlideJouleStudioCommercials'
import SlideJsDesign from './slides/SlideJsDesign'
import SlideJouleSRuntime from './slides/SlideJouleSRuntime'
import SlideJouleSTshirt from './slides/SlideJouleSTshirt'
import SlideKeyPrograms from './slides/SlideKeyPrograms'
import Slide100MEuro from './slides/Slide100MEuro'
import SlideMigrationRoi from './slides/SlideMigrationRoi'
import SlideAiAgentHub from './slides/SlideAiAgentHub'
import SlideSolidifyAi from './slides/SlideSolidifyAi'
import DeckMenu from './components/DeckMenu'
import PasswordModal from './components/PasswordModal'

interface SlideProps {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface SlideItem {
  key: string
  hash: string
  slideNumber?: number
  render: (props: SlideProps) => React.ReactElement
}

// Complete deck progression grouped according to user specifications:
// Autonomous Enterprise -> Joule -> Autonomous Suite -> Industry AI -> Business AI Platform -> Agent-led Transformation -> Commercial
const slideItems: SlideItem[] = [
  // Intro & Agenda
  { key: 'welcome', hash: '1', slideNumber: 1, render: (props) => <Welcome {...props} /> },
  { key: 'agenda', hash: 'agenda', render: (props) => <SlideAgenda {...props} /> },

  // Group 1: Autonomous Enterprise (#/reality, #/agentic-gap, #/vision, #/architecture_overview, #/components)
  { key: 'reality', hash: 'reality', render: (props) => <SlideRealityFoundation {...props} /> },
  { key: 'agentic-gap', hash: 'agentic-gap', render: (props) => <SlideAgenticGapFoundation {...props} /> },
  { key: 'vision', hash: 'vision', render: (props) => <SlideAutonomousVision {...props} /> },
  { key: 'architecture_overview', hash: 'architecture_overview', slideNumber: 3, render: (props) => <Slide3Hub {...props} /> },
  { key: 'components', hash: 'components', render: (props) => <SlideComponentsAlternate {...props} /> },

  // Group 2: Joule (#/4, #/joule-architecture, #/joule-components, #/SMJ)
  { key: 'joule', hash: '4', slideNumber: 4, render: (props) => <Slide4JouleWorkExperience {...props} /> },
  { key: 'joule-architecture', hash: 'joule-architecture', render: (props) => <SlideJouleArchitecture {...props} /> },
  { key: 'joule-components', hash: 'joule-components', render: (props) => <SlideJouleComponents {...props} /> },
  { key: 'smj', hash: 'SMJ', render: (props) => <SlideSmj {...props} /> },

  // Group 3: Autonomous Suite (#/Autonomous_Suite, #/finance, #/spend, #/scm, #/hcm, #/cx)
  { key: 'suite', hash: 'Autonomous_Suite', slideNumber: 5, render: (props) => <Slide5AutonomousSuite {...props} /> },
  { key: 'finance', hash: 'finance', render: (props) => <SlideFinanceDetail {...props} /> },
  { key: 'spend', hash: 'spend', render: (props) => <SlideSpendDetail {...props} /> },
  { key: 'scm', hash: 'scm', render: (props) => <SlideSCMDetail {...props} /> },
  { key: 'hcm', hash: 'hcm', render: (props) => <SlideHCMDetail {...props} /> },
  { key: 'cx', hash: 'cx', render: (props) => <SlideCXDetail {...props} /> },

  // Group 4: Industry AI (#/6)
  { key: 'industry6', hash: '6', slideNumber: 6, render: (props) => <Slide6IndustryAI {...props} /> },

  // Group 5: Business AI Platform (#/7, #/ai_services, #/sap_ai_core, #/AI_Agent_Hub, #/Tabular_overview, #/rpt_scenario, #/tabular_ai, #/GenAI, #/BDC_AI)
  { key: 'platform7', hash: '7', slideNumber: 7, render: (props) => <Slide7BusinessAIPlatform {...props} /> },
  { key: 'ai_services', hash: 'ai_services', render: (props) => <SlideAiServices {...props} /> },
  { key: 'sap_ai_core', hash: 'sap_ai_core', render: (props) => <SlideSapAiCore {...props} /> },
  { key: 'ai_agent_hub', hash: 'AI_Agent_Hub', render: (props) => <SlideAiAgentHub {...props} /> },
  { key: 'tabular_overview', hash: 'Tabular_overview', render: (props) => <SlideTabularOverview {...props} /> },
  { key: 'rpt_scenario', hash: 'rpt_scenario', render: (props) => <SlideRptScenario {...props} /> },
  { key: 'tabular_ai', hash: 'tabular_ai', render: (props) => <SlideTabularAi {...props} /> },
  { key: 'genai', hash: 'GenAI', render: (props) => <SlideGenAi {...props} /> },
  { key: 'bdc_ai', hash: 'BDC_AI', render: (props) => <SlideBdcAi {...props} /> },

  // Group 6: Agent-led Transformation (#/agentic_led_transformation, #/Agent_Led_(ATC), #/ai_rapid, #/toolchain, #/atc_assistants, #/atc_agents, #/Migration_ROI, #/rise, #/grow)
  { key: 'agentic_led_transformation', hash: 'agentic_led_transformation', render: (props) => <SlideAgenticLedTransformation {...props} /> },
  { key: 'transformation', hash: 'Agent_Led_(ATC)', slideNumber: 8, render: (props) => <Slide8Transformation {...props} /> },
  { key: 'ai_rapid', hash: 'ai_rapid', render: (props) => <SlideAiRapid {...props} /> },
  { key: 'toolchain', hash: 'toolchain', render: (props) => <SlideToolchain {...props} /> },
  { key: 'atc_assistants', hash: 'atc_assistants', render: (props) => <SlideAtcAssistants {...props} /> },
  { key: 'atc_agents', hash: 'atc_agents', render: (props) => <SlideAtcAgents {...props} /> },
  { key: 'migration_roi', hash: 'Migration_ROI', render: (props) => <SlideMigrationRoi {...props} /> },
  { key: 'rise', hash: 'rise', slideNumber: 9, render: (props) => <SlideRiseDetail {...props} /> },
  { key: 'grow', hash: 'grow', slideNumber: 10, render: (props) => <SlideGrowDetail {...props} /> },

  // Group 7: Commercial (#/commercial, #/Start_Grow_AI, #/joule_base, #/Joule_Work_Explained, #/sap_agentic_model, #/agentic_orchestration_pricing, #/Premium_AI, #/Joule_Studio, #/Joule_Studio_Objectives, #/Joule_Studio_Commercials, #/JS_Design, #/Pricing_Model)
  { key: 'commercial', hash: 'commercial', render: (props) => <SlideCrackingCommercial {...props} /> },
  { key: 'start_grow_ai', hash: 'Start_Grow_AI', render: (props) => <SlideStartGrowAi {...props} /> },
  { key: 'joule_base', hash: 'joule_base', render: (props) => <SlideJouleBase {...props} /> },
  { key: 'premium_ai', hash: 'Premium_AI', render: (props) => <SlidePremiumAi {...props} /> },
  { key: 'pricing_model', hash: 'Pricing_Model', render: (props) => <SlidePricingModel {...props} /> },
  { key: 'embedded_premium', hash: 'Embedded_Premium', render: (props) => <SlideEmbeddedPremium {...props} /> },
  { key: 'migration_ai', hash: 'Migration_AI', render: (props) => <SlideMigrationAi {...props} /> },
  { key: 'joule_work_explained', hash: 'Joule_Work_Explained', render: (props) => <SlideJouleWorkExplained {...props} /> },
  { key: 'sap_agentic_model', hash: 'sap_agentic_model', render: (props) => <SlideSapAgenticModel {...props} /> },
  { key: 'agentic_orchestration_pricing', hash: 'agentic_orchestration_pricing', render: (props) => <SlideAgenticOrchestrationPricing {...props} /> },
  { key: 'joule_studio', hash: 'Joule_Studio', render: (props) => <SlideJouleStudio {...props} /> },
  { key: 'joule_studio_objectives', hash: 'Joule_Studio_Objectives', render: (props) => <SlideJouleStudioObjectives {...props} /> },
  { key: 'joule_studio_commercials', hash: 'Joule_Studio_Commercials', render: (props) => <SlideJouleStudioCommercials {...props} /> },
  { key: 'js_design', hash: 'JS_Design', render: (props) => <SlideJsDesign {...props} /> },
  { key: 'joules_runtime', hash: 'JouleS_runtime', render: (props) => <SlideJouleSRuntime {...props} /> },
  { key: 'joules_tshirt', hash: 'JouleS_Tshirt', render: (props) => <SlideJouleSTshirt {...props} /> },

  // Group 8: Key Programs (2026) (#/Key_Programs, #/key_programs, #/100M_Euro)
  { key: 'key_programs', hash: 'Key_Programs', render: (props) => <SlideKeyPrograms {...props} /> },
  { key: '100m_euro', hash: '100M_Euro', render: (props) => <Slide100MEuro {...props} /> },

  // Group 9: Frameworks & Conclusion (#/RISE_SAP, #/GROW_SAP, #/obstacles)
  { key: 'rise_sap', hash: 'RISE_SAP', slideNumber: 16, render: (props) => <SlideRiseSap {...props} /> },
  { key: 'grow_sap', hash: 'GROW_SAP', slideNumber: 17, render: (props) => <SlideGrowSap {...props} /> },
  { key: 'obstacles', hash: 'obstacles', slideNumber: 18, render: (props) => <AgenticObstacles {...props} /> },

  // Group 10: Solidifying the AI Journey (#/Solidify_AI)
  { key: 'solidify_ai', hash: 'Solidify_AI', render: (props) => <SlideSolidifyAi {...props} /> },
]

function readHash(): number {
  let raw = window.location.hash.replace('#/', '').toLowerCase().trim()
  try {
    raw = decodeURIComponent(raw)
  } catch {
    // keep raw
  }
  if (!raw) return 0

  // Direct case-insensitive match on hash or key
  const directIdx = slideItems.findIndex(
    (item) => item.hash.toLowerCase() === raw || item.key.toLowerCase() === raw
  )
  if (directIdx !== -1) return directIdx
  if (raw === 'agenda' || raw === 'program' || raw === 'schedule' || raw === '1.5') {
    const idx = slideItems.findIndex((item) => item.key === 'agenda')
    if (idx !== -1) return idx
  }
  if (raw === 'key_programs' || raw === 'key-programs' || raw === 'keyprograms' || raw === 'programs' || raw === 'key_program') {
    const idx = slideItems.findIndex((item) => item.key === 'key_programs')
    if (idx !== -1) return idx
  }
  if (
    raw === '100m_euro' ||
    raw === '100m-euro' ||
    raw === '100meuro' ||
    raw === '100m' ||
    raw === '100m_incentive' ||
    raw === '100m-incentive' ||
    raw === '100m_fund' ||
    raw === '100m-fund'
  ) {
    const idx = slideItems.findIndex((item) => item.key === '100m_euro')
    if (idx !== -1) return idx
  }
  if (raw === 'reality' || raw === 'foundation' || raw === '2.5' || raw === '2' || raw === 'overview') {
    const idx = slideItems.findIndex((item) => item.key === 'reality')
    if (idx !== -1) return idx
  }
  if (raw === 'agentic-gap' || raw === 'gap' || raw === 'gaps' || raw === '2.6') {
    const idx = slideItems.findIndex((item) => item.key === 'agentic-gap')
    if (idx !== -1) return idx
  }
  if (raw === 'vision' || raw === 'autonomous-vision' || raw === 'enterprise-vision' || raw === '2.7') {
    const idx = slideItems.findIndex((item) => item.key === 'vision')
    if (idx !== -1) return idx
  }
  if (
    raw === 'architecture_overview' ||
    raw === 'architecture-overview' ||
    raw === 'architectureoverview' ||
    raw === 'architecture' ||
    raw === 'hub' ||
    raw === '3' ||
    raw === 'slide3'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'architecture_overview' || item.slideNumber === 3)
    if (idx !== -1) return idx
  }
  if (raw === 'joule' || raw === 'joule-work' || raw === 'joule-experience') {
    const idx = slideItems.findIndex((item) => item.slideNumber === 4)
    if (idx !== -1) return idx
  }
  if (
    raw === '5' ||
    raw === 'suite' ||
    raw === 'autonomous_suite' ||
    raw === 'autonomous-suite' ||
    raw === 'autonomoussuite'
  ) {
    const idx = slideItems.findIndex((item) => item.slideNumber === 5)
    if (idx !== -1) return idx
  }
  if (raw === 'industry' || raw === 'industry-ai' || raw === '6') {
    const idx = slideItems.findIndex((item) => item.slideNumber === 6)
    if (idx !== -1) return idx
  }
  if (raw === 'platform' || raw === 'business-ai-platform' || raw === 'platform7' || raw === '7') {
    const idx = slideItems.findIndex((item) => item.slideNumber === 7)
    if (idx !== -1) return idx
  }
  if (
    raw === 'ai_services' ||
    raw === 'ai-services' ||
    raw === 'aiservices' ||
    raw === 'ai_service' ||
    raw === 'ai-service' ||
    raw === 'services' ||
    raw === 'ai_services_and_models'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'ai_services')
    if (idx !== -1) return idx
  }
  if (
    raw === 'sap_ai_core' ||
    raw === 'sap-ai-core' ||
    raw === 'ai_core' ||
    raw === 'ai-core' ||
    raw === 'aicore' ||
    raw === 'sapaicore'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'sap_ai_core')
    if (idx !== -1) return idx
  }
  if (
    raw === 'ai_agent_hub' ||
    raw === 'ai-agent-hub' ||
    raw === 'aiagenthub' ||
    raw === 'agent_hub' ||
    raw === 'agent-hub' ||
    raw === 'agenthub' ||
    raw === 'governance' ||
    raw === 'agent_governance' ||
    raw === 'agent-governance'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'ai_agent_hub')
    if (idx !== -1) return idx
  }
  if (
    raw === 'solidify_ai' ||
    raw === 'solidify-ai' ||
    raw === 'solidifyai' ||
    raw === 'solidify' ||
    raw === 'solidifying_ai' ||
    raw === 'solidifying-ai' ||
    raw === 'solidifying_the_ai_journey' ||
    raw === 'solidifying-the-ai-journey'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'solidify_ai')
    if (idx !== -1) return idx
  }
  if (
    raw === 'tabular_overview' ||
    raw === 'tabular-overview' ||
    raw === 'tabularoverview' ||
    raw === 'tabular_intro' ||
    raw === 'tabular-intro'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'tabular_overview')
    if (idx !== -1) return idx
  }
  if (
    raw === 'rpt_scenario' ||
    raw === 'rpt-scenario' ||
    raw === 'rptscenario' ||
    raw === 'rpt_scenarios' ||
    raw === 'rpt-scenarios' ||
    raw === 'rpt' ||
    raw === 'sap_rpt' ||
    raw === 'sap-rpt' ||
    raw === 'sap_scenarios' ||
    raw === 'sap-scenarios'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'rpt_scenario')
    if (idx !== -1) return idx
  }
  if (
    raw === 'tabular_ai' ||
    raw === 'tabular-ai' ||
    raw === 'tabularai' ||
    raw === 'tabular' ||
    raw === 'payment-matching' ||
    raw === 'payment_matching'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'tabular_ai')
    if (idx !== -1) return idx
  }
  if (
    raw === 'genai' ||
    raw === 'gen-ai' ||
    raw === 'gen_ai' ||
    raw === 'generative_ai' ||
    raw === 'generative-ai' ||
    raw === 'generative'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'genai')
    if (idx !== -1) return idx
  }
  if (
    raw === 'bdc_ai' ||
    raw === 'bdc-ai' ||
    raw === 'bdcai' ||
    raw === 'bdc' ||
    raw === 'data-products' ||
    raw === 'dataproducts'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'bdc_ai')
    if (idx !== -1) return idx
  }
  if (raw === 'transformation' || raw === 'effort-to-outcome' || raw === '8') {
    const idx = slideItems.findIndex((item) => item.slideNumber === 8)
    if (idx !== -1) return idx
  }
  if (
    raw === 'ai_rapid' ||
    raw === 'ai-rapid' ||
    raw === 'airapid' ||
    raw === 'ai_rapid_implementation' ||
    raw === 'rapid'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'ai_rapid')
    if (idx !== -1) return idx
  }
  if (
    raw === 'agentic_led_transformation' ||
    raw === 'agentic-led-transformation' ||
    raw === 'agent-led-transformation' ||
    raw === 'agent-led' ||
    raw === 'agentic-transformation' ||
    raw === 'agentic_transformation' ||
    raw === 'agenticled'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'agentic_led_transformation')
    if (idx !== -1) return idx
  }
  if (
    raw === 'agent_led_(atc)' ||
    raw === 'agent_led (atc)' ||
    raw === 'agent_led(atc)' ||
    raw === 'agent-led-(atc)' ||
    raw === 'agent-led(atc)' ||
    raw === 'agent_led_atc' ||
    raw === 'agent-led-atc' ||
    raw === 'agent_led' ||
    raw === 'agent-led' ||
    raw === 'agentled' ||
    raw === 'atc' ||
    raw === 'transformation' ||
    raw === 'effort-to-outcome' ||
    raw === '8' ||
    raw === 'slide8'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'transformation' || item.slideNumber === 8)
    if (idx !== -1) return idx
  }
  if (
    raw === 'toolchain' ||
    raw === 'agent-led-toolchain' ||
    raw === 'agentic-toolchain' ||
    raw === 'agentic_toolchain' ||
    raw === 'tool-chain'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'toolchain')
    if (idx !== -1) return idx
  }
  if (
    raw === 'atc_assistants' ||
    raw === 'atc-assistants' ||
    raw === 'atc_assistant' ||
    raw === 'atc-assistant' ||
    raw === 'modernization-assistants' ||
    raw === 'assistants'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'atc_assistants')
    if (idx !== -1) return idx
  }
  if (
    raw === 'atc_agents' ||
    raw === 'atc-agents' ||
    raw === 'atc_agent' ||
    raw === 'atc-agent' ||
    raw === 'agents' ||
    raw === 'agent-breakdown' ||
    raw === 'assistant-breakdown'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'atc_agents')
    if (idx !== -1) return idx
  }
  if (
    raw === 'migration_roi' ||
    raw === 'migration-roi' ||
    raw === 'migrationroi' ||
    raw === 'migration_effort' ||
    raw === 'migration-effort' ||
    raw === 'complexity_drivers' ||
    raw === 'complexity-drivers' ||
    raw === 'roi'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'migration_roi')
    if (idx !== -1) return idx
  }
  if (
    raw === 'commercial' ||
    raw === 'cracking_the_commercial' ||
    raw === 'cracking-the-commercial' ||
    raw === 'crackingthecommercial' ||
    raw === 'cracking_commercial' ||
    raw === 'cracking-commercial' ||
    raw === 'ai_commercial' ||
    raw === 'ai-commercial'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'commercial')
    if (idx !== -1) return idx
  }
  if (
    raw === 'start_grow_ai' ||
    raw === 'start-grow-ai' ||
    raw === 'startgrowai' ||
    raw === 'start_grow' ||
    raw === 'start-grow' ||
    raw === 'startgrow'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'start_grow_ai')
    if (idx !== -1) return idx
  }
  if (
    raw === 'joule_base' ||
    raw === 'joule-base' ||
    raw === 'joulebase' ||
    raw === 'base_ai' ||
    raw === 'base-ai' ||
    raw === 'baseai'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'joule_base')
    if (idx !== -1) return idx
  }
  if (
    raw === 'joule_work_explained' ||
    raw === 'joule-work-explained' ||
    raw === 'jouleworkexplained' ||
    raw === 'joule_work' ||
    raw === 'joule-work' ||
    raw === 'joulework'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'joule_work_explained')
    if (idx !== -1) return idx
  }
  if (
    raw === 'sap_agentic_model' ||
    raw === 'sap-agentic-model' ||
    raw === 'agentic_model' ||
    raw === 'agentic-model' ||
    raw === 'agenticmodel' ||
    raw === 'sapagenticmodel'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'sap_agentic_model')
    if (idx !== -1) return idx
  }
  if (
    raw === 'agentic_orchestration_pricing' ||
    raw === 'agentic-orchestration-pricing' ||
    raw === 'agenticorchestrationpricing' ||
    raw === 'agentic_pricing' ||
    raw === 'agentic-pricing' ||
    raw === 'agenticpricing' ||
    raw === 'orchestration_pricing' ||
    raw === 'orchestration-pricing'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'agentic_orchestration_pricing')
    if (idx !== -1) return idx
  }
  if (
    raw === 'premium_ai' ||
    raw === 'premium-ai' ||
    raw === 'premiumai' ||
    raw === 'premium'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'premium_ai')
    if (idx !== -1) return idx
  }
  if (
    raw === 'embedded_premium' ||
    raw === 'embedded-premium' ||
    raw === 'embeddedpremium' ||
    raw === 'premium_to_base' ||
    raw === 'premium-to-base' ||
    raw === 'premiumtobase' ||
    raw === 'nov1' ||
    raw === 'november1' ||
    raw === 'november_1' ||
    raw === 'november-1'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'embedded_premium')
    if (idx !== -1) return idx
  }
  if (
    raw === 'migration_ai' ||
    raw === 'migration-ai' ||
    raw === 'migrationai' ||
    raw === 'customer_migration' ||
    raw === 'customer-migration' ||
    raw === 'customermigration' ||
    raw === 'ai_migration' ||
    raw === 'ai-migration' ||
    raw === 'aimigration' ||
    raw === 'sku_migration' ||
    raw === 'sku-migration' ||
    raw === 'existing_customers' ||
    raw === 'existing-customers'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'migration_ai')
    if (idx !== -1) return idx
  }
  if (
    raw === 'pricing_model' ||
    raw === 'pricing-model' ||
    raw === 'pricingmodel' ||
    raw === 'pricing_models' ||
    raw === 'pricing-models' ||
    raw === 'pricing'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'pricing_model')
    if (idx !== -1) return idx
  }
  if (
    raw === 'joule_studio' ||
    raw === 'joule-studio' ||
    raw === 'joulestudio' ||
    raw === 'studio' ||
    raw === 'custom_agents' ||
    raw === 'custom-agents'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'joule_studio')
    if (idx !== -1) return idx
  }
  if (
    raw === 'joule_studio_objectives' ||
    raw === 'joule-studio-objectives' ||
    raw === 'joulestudioobjectives' ||
    raw === 'studio_objectives' ||
    raw === 'studio-objectives' ||
    raw === 'studioobjectives' ||
    raw === 'pricing_and_packaging_objectives' ||
    raw === 'pricing-and-packaging-objectives' ||
    raw === 'pricing_objectives' ||
    raw === 'pricing-objectives' ||
    raw === 'objectives'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'joule_studio_objectives')
    if (idx !== -1) return idx
  }
  if (
    raw === 'joule_studio_commercials' ||
    raw === 'joule-studio-commercials' ||
    raw === 'joulestudiocommercials' ||
    raw === 'joule_studio_commercial_model' ||
    raw === 'joule-studio-commercial-model' ||
    raw === 'joulestudiocommercialmodel' ||
    raw === 'studio_commercials' ||
    raw === 'studio-commercials' ||
    raw === 'studiocommercials' ||
    raw === 'studio_commercial_model' ||
    raw === 'studio-commercial-model' ||
    raw === 'studio_commercial' ||
    raw === 'studio-commercial' ||
    raw === 'commercial_model' ||
    raw === 'commercial-model'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'joule_studio_commercials')
    if (idx !== -1) return idx
  }
  if (
    raw === 'js_design' ||
    raw === 'js-design' ||
    raw === 'jsdesign' ||
    raw === 'joule_studio_design' ||
    raw === 'joule-studio-design' ||
    raw === 'joulestudiodesign' ||
    raw === 'design_time_tooling' ||
    raw === 'design-time-tooling' ||
    raw === 'designtimetooling' ||
    raw === 'design_tooling' ||
    raw === 'design-tooling'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'js_design')
    if (idx !== -1) return idx
  }
  if (
    raw === 'joules_runtime' ||
    raw === 'joule_s_runtime' ||
    raw === 'joules-runtime' ||
    raw === 'joule-s-runtime' ||
    raw === 'joulesruntime' ||
    raw === 'joule_studio_runtime' ||
    raw === 'joule-studio-runtime' ||
    raw === 'joulestudioruntime' ||
    raw === 'runtime_pricing' ||
    raw === 'runtime-pricing' ||
    raw === 'runtimepricing' ||
    raw === 'runtime'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'joules_runtime')
    if (idx !== -1) return idx
  }
  if (
    raw === 'joules_tshirt' ||
    raw === 'joule_s_tshirt' ||
    raw === 'joules-tshirt' ||
    raw === 'joule-s-tshirt' ||
    raw === 'joulestshirt' ||
    raw === 'tshirt_sizing' ||
    raw === 'tshirt-sizing' ||
    raw === 'tshirtsizing' ||
    raw === 't_shirt_sizing' ||
    raw === 't-shirt-sizing' ||
    raw === 'agent_tshirt' ||
    raw === 'agent-tshirt' ||
    raw === 'agent_sizing' ||
    raw === 'agent-sizing' ||
    raw === 'tshirt' ||
    raw === 't-shirt'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'joules_tshirt')
    if (idx !== -1) return idx
  }
  if (raw === 'rise' || raw === 'rise-with-sap' || raw === '9') {
    const idx = slideItems.findIndex((item) => item.key === 'rise' || item.slideNumber === 9)
    if (idx !== -1) return idx
  }
  if (
    raw === 'rise_sap' ||
    raw === 'rise-sap' ||
    raw === 'risesap' ||
    raw === 'rise_with_sap' ||
    raw === '16'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'rise_sap' || item.slideNumber === 16)
    if (idx !== -1) return idx
  }
  if (raw === 'grow' || raw === 'sap-grow' || raw === 'grow-with-sap' || raw === '10') {
    const idx = slideItems.findIndex((item) => item.key === 'grow' || item.slideNumber === 10)
    if (idx !== -1) return idx
  }
  if (
    raw === 'grow_sap' ||
    raw === 'grow-sap' ||
    raw === 'growsap' ||
    raw === 'grow_with_sap' ||
    raw === '17'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'grow_sap' || item.slideNumber === 17)
    if (idx !== -1) return idx
  }
  if (raw === 'finance' || raw === 'autonomous-finance') {
    const idx = slideItems.findIndex((item) => item.key === 'finance')
    if (idx !== -1) return idx
  }
  if (raw === 'spend' || raw === 'autonomous-spend') {
    const idx = slideItems.findIndex((item) => item.key === 'spend')
    if (idx !== -1) return idx
  }
  if (raw === 'scm' || raw === 'autonomous-scm' || raw === 'supply-chain') {
    const idx = slideItems.findIndex((item) => item.key === 'scm')
    if (idx !== -1) return idx
  }
  if (raw === 'hcm' || raw === 'autonomous-hcm' || raw === 'hr') {
    const idx = slideItems.findIndex((item) => item.key === 'hcm')
    if (idx !== -1) return idx
  }
  if (raw === 'cx' || raw === 'autonomous-cx' || raw === 'customer-experience') {
    const idx = slideItems.findIndex((item) => item.key === 'cx')
    if (idx !== -1) return idx
  }
  if (raw === 'joule-architecture' || raw === 'architecture' || raw === 'arch') {
    const idx = slideItems.findIndex((item) => item.key === 'joule-architecture')
    if (idx !== -1) return idx
  }
  if (
    raw === 'components' ||
    raw === 'alternate' ||
    raw === 'components-alt' ||
    raw === 'key-elements' ||
    raw === 'alternate-components'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'components')
    if (idx !== -1) return idx
  }
  if (raw === 'joule-components' || raw === 'joule_components' || raw === 'joule-component') {
    const idx = slideItems.findIndex((item) => item.key === 'joule-components')
    if (idx !== -1) return idx
  }
  if (raw === 'smj' || raw === 'cmj-to-smj' || raw === 'cmj_to_smj' || raw === 'cmj2smj') {
    const idx = slideItems.findIndex((item) => item.key === 'smj')
    if (idx !== -1) return idx
  }
  if (
    raw === 'obstacles' ||
    raw === 'obstacle' ||
    raw === 'agentic-obstacles' ||
    raw === 'agentic_obstacles' ||
    raw === '18'
  ) {
    const idx = slideItems.findIndex((item) => item.key === 'obstacles' || item.slideNumber === 18)
    if (idx !== -1) return idx
  }

  const num = parseInt(raw, 10)
  if (Number.isFinite(num)) {
    const idx = slideItems.findIndex((item) => item.slideNumber === num)
    if (idx !== -1) return idx
  }

  return 0
}

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [index, setIndex] = useState(0)

  const go = useCallback((next: number) => {
    if (!isUnlocked) return
    const clamped = Math.max(0, Math.min(slideItems.length - 1, next))
    const item = slideItems[clamped]
    window.location.hash = `#/${item.hash}`
    setIndex(clamped)
  }, [isUnlocked])

  const navigateToSlideNumber = useCallback((slideNumber: number) => {
    if (!isUnlocked) return
    const targetIdx = slideItems.findIndex((item) => item.slideNumber === slideNumber)
    if (targetIdx !== -1) {
      go(targetIdx)
    }
  }, [go, isUnlocked])

  const handleUnlock = useCallback(() => {
    setIsUnlocked(true)
    window.location.hash = '#/1'
    setIndex(0)
  }, [])

  useEffect(() => {
    if (!isUnlocked) {
      if (window.location.hash && window.location.hash !== '#/1' && window.location.hash !== '#1') {
        window.location.hash = '#/1'
      }
      return
    }

    const onHash = () => setIndex(readHash())
    const onKey = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase()
      if (activeTag === 'input' || activeTag === 'textarea') return

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        go(index + 1)
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        go(index - 1)
      }
      if (e.key.toLowerCase() === 'f') {
        if (document.fullscreenElement) {
          document.exitFullscreen()
        } else {
          document.documentElement.requestFullscreen()
        }
      }
    }

    window.addEventListener('hashchange', onHash)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('keydown', onKey)
    }
  }, [go, index, isUnlocked])

  const currentItem = isUnlocked ? (slideItems[index] || slideItems[0]) : slideItems[0]

  return (
    <>
      {!isUnlocked && <PasswordModal onUnlock={handleUnlock} />}
      {isUnlocked && (
        <DeckMenu
          currentHash={currentItem.hash}
          onSelectHash={(hash) => {
            const targetIdx = slideItems.findIndex(
              (item) => item.hash.toLowerCase() === hash.toLowerCase() || item.key.toLowerCase() === hash.toLowerCase()
            )
            if (targetIdx !== -1) {
              go(targetIdx)
            } else {
              window.location.hash = `#/${hash}`
            }
          }}
        />
      )}
      {currentItem.render({
        onNext: () => (isUnlocked ? go(index + 1) : undefined),
        onPrev: () => (isUnlocked ? go(index - 1) : undefined),
        onNavigate: isUnlocked ? navigateToSlideNumber : undefined,
        hasNext: isUnlocked && index < slideItems.length - 1,
        hasPrev: isUnlocked && index > 0,
      })}
    </>
  )
}
