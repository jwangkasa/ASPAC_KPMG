import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import '../styles/sapAiCore.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideSapAiCore({ onPrev, onNavigate }: Props) {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const goToAiServices = () => {
    window.location.hash = '#/ai_services'
  }

  const goToTabularAi = () => {
    window.location.hash = '#/Tabular_overview'
  }

  const goToGenAi = () => {
    window.location.hash = '#/GenAI'
  }

  const goToPlatform = () => {
    if (onNavigate) {
      onNavigate(7)
    } else {
      window.location.hash = '#/7'
    }
  }

  const goToAiAgentHub = () => {
    window.location.hash = '#/AI_Agent_Hub'
  }

  return (
    <div className="ai-core-container">
      {/* Ambient background glows */}
      <div className="ai-core-glow-blue" aria-hidden="true" />
      <div className="ai-core-glow-purple" aria-hidden="true" />

      {/* Header */}
      <header className="ai-core-header">
        <div className="ai-core-title-group">
          <div className="ai-core-eyebrow">
            <span>SAP AI Foundation • Core Execution & Intelligence</span>
          </div>
          <h1 className="ai-core-title">SAP AI Core</h1>
          <p className="ai-core-subtitle">
            The foundational platform to build, train, deploy, and scale enterprise AI solutions — bridging runtime execution, tabular machine learning, and cutting-edge generative AI.
          </p>
        </div>

        <div className="ai-core-badge-tag">
          <span>⚡ Scalable • Multi-Tenant • Enterprise-Ready</span>
        </div>
      </header>

      {/* Main 3 Pillars Content */}
      <main className="ai-core-main">
        <div className="ai-core-cards-container">
          {/* Card 1: AI Runtime */}
          <div
            className={`ai-core-card runtime ${activeCard === 'runtime' ? 'active' : ''}`}
            onClick={() => setActiveCard(activeCard === 'runtime' ? null : 'runtime')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveCard(activeCard === 'runtime' ? null : 'runtime')
              }
            }}
          >
            {/* Top Animated Icon: Execution Engine & Compute Core */}
            <div className="ai-core-icon-stage runtime" aria-hidden="true">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                {/* Outer Rotating Gear/Ring */}
                <circle
                  cx="30"
                  cy="30"
                  r="24"
                  stroke="#0284c7"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="ai-core-runtime-ring"
                />
                {/* Orbiting particles ring */}
                <circle
                  cx="30"
                  cy="30"
                  r="19"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="1 8"
                  className="ai-core-runtime-orbit"
                />
                {/* Central Glowing Processor Core */}
                <rect
                  x="20"
                  y="20"
                  width="20"
                  height="20"
                  rx="5"
                  fill="url(#runtimeGradient)"
                  className="ai-core-runtime-core"
                />
                {/* Circuit Pins */}
                <path
                  d="M16 26H20 M16 34H20 M40 26H44 M40 34H44 M26 16V20 M34 16V20 M26 40V44 M34 40V44"
                  stroke="#0284c7"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Inner Chip Symbol */}
                <path
                  d="M26 30L29 33L35 27"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="runtimeGradient" x1="20" y1="20" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0284c7" />
                    <stop offset="1" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <span className="ai-core-card-pill">Execution Engine</span>
            <h2 className="ai-core-card-title">AI Runtime</h2>
            <p className="ai-core-card-desc">
              High-performance compute infrastructure for containerized AI pipelines. Handles model training, automated deployment, autoscaling, GPU acceleration, and low-latency inference serving with enterprise SLAs.
            </p>

            <div className="ai-core-tags-row">
              <span className="ai-core-tag">Docker Containers</span>
              <span className="ai-core-tag">GPU Acceleration</span>
              <span className="ai-core-tag">Auto-Scaling</span>
              <span className="ai-core-tag">Serving Pipelines</span>
              <span className="ai-core-tag">Zero Downtime</span>
            </div>

            <div className="ai-core-card-btn">
              <span>View Runtime Specs</span>
              <span aria-hidden="true">→</span>
            </div>
          </div>

          {/* Card 2: Tabular AI */}
          <div
            className={`ai-core-card tabular ${activeCard === 'tabular' ? 'active' : ''}`}
            onClick={goToTabularAi}
            role="button"
            tabIndex={0}
            title="Click to explore Tabular AI in depth: Intelligent Payment Matching"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                goToTabularAi()
              }
            }}
          >
            {/* Top Animated Icon: Tabular Data Matrix & Predictive Analytics */}
            <div className="ai-core-icon-stage tabular" aria-hidden="true">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                {/* Grid Framework */}
                <rect
                  x="12"
                  y="12"
                  width="36"
                  height="36"
                  rx="6"
                  stroke="#2563eb"
                  strokeWidth="2"
                  fill="#ffffff"
                  className="ai-core-tabular-glow"
                />
                {/* Header Row */}
                <path d="M12 22H48" stroke="#93c5fd" strokeWidth="2" />
                <path d="M24 12V48" stroke="#e2e8f0" strokeWidth="1.5" />
                <path d="M36 12V48" stroke="#e2e8f0" strokeWidth="1.5" />

                {/* Animated Chart Bars */}
                <rect
                  x="16"
                  y="26"
                  width="5"
                  height="16"
                  rx="2"
                  fill="#60a5fa"
                  className="ai-core-tabular-bar1"
                />
                <rect
                  x="27"
                  y="26"
                  width="5"
                  height="16"
                  rx="2"
                  fill="#2563eb"
                  className="ai-core-tabular-bar2"
                />
                <rect
                  x="38"
                  y="26"
                  width="5"
                  height="16"
                  rx="2"
                  fill="#7c3aed"
                  className="ai-core-tabular-bar3"
                />

                {/* Trend line overlay */}
                <path
                  d="M18 36L29 28L41 32"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="29" cy="28" r="2.5" fill="#f59e0b" />
                <circle cx="41" cy="32" r="2.5" fill="#f59e0b" />
              </svg>
            </div>

            <span className="ai-core-card-pill">Predictive ML</span>
            <h2 className="ai-core-card-title">Tabular AI</h2>
            <p className="ai-core-card-desc">
              Specialized machine learning algorithms built for structured enterprise datasets. Delivers automated time-series forecasting, regression, classification, anomaly detection, and explainable AI on SAP ERP tables.
            </p>

            <div className="ai-core-tags-row">
              <span className="ai-core-tag">AutoML Pipelines</span>
              <span className="ai-core-tag">Time-Series Forecast</span>
              <span className="ai-core-tag">ERP Table Integration</span>
              <span className="ai-core-tag">Anomaly Detection</span>
              <span className="ai-core-tag">Explainable AI</span>
            </div>

            <div className="ai-core-card-btn">
              <span>Explore Tabular ML</span>
              <span aria-hidden="true">→</span>
            </div>
          </div>

          {/* Card 3: Generative AI */}
          <div
            className={`ai-core-card generative ${activeCard === 'generative' ? 'active' : ''}`}
            onClick={goToGenAi}
            role="button"
            tabIndex={0}
            title="Click to explore Generative AI architecture on SAP AI Core"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                goToGenAi()
              }
            }}
          >
            {/* Top Animated Icon: Generative AI Sparkles & Neural Hub */}
            <div className="ai-core-icon-stage generative" aria-hidden="true">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                {/* Breathing Aura Halo */}
                <circle
                  cx="30"
                  cy="30"
                  r="22"
                  fill="url(#generativeHalo)"
                  className="ai-core-generative-halo"
                />

                {/* Star Sparkle Primary */}
                <path
                  d="M30 14L33.5 24.5L44 28L33.5 31.5L30 42L26.5 31.5L16 28L26.5 24.5L30 14Z"
                  fill="url(#sparkleGradient)"
                  className="ai-core-sparkle-main"
                />

                {/* Small Accent Sparkle Top-Right */}
                <path
                  d="M43 14L44.5 18.5L49 20L44.5 21.5L43 26L41.5 21.5L37 20L41.5 18.5L43 14Z"
                  fill="#c084fc"
                  className="ai-core-sparkle-small"
                />

                {/* Small Accent Sparkle Bottom-Left */}
                <path
                  d="M17 37L18.2 40.5L22 41.5L18.2 42.8L17 46L15.8 42.8L12 41.5L15.8 40.5L17 37Z"
                  fill="#818cf8"
                  className="ai-core-sparkle-small"
                />

                <defs>
                  <radialGradient id="generativeHalo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 30) scale(22)">
                    <stop stopColor="#a855f7" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="sparkleGradient" x1="16" y1="14" x2="44" y2="42" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9333ea" />
                    <stop offset="0.5" stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <span className="ai-core-card-pill">Foundation Models</span>
            <h2 className="ai-core-card-title">Generative AI</h2>
            <p className="ai-core-card-desc">
              Access leading Foundation Models and multi-modal LLMs via Generative AI Hub. Power enterprise prompt engineering, RAG grounding on business context, safety guardrails, and autonomous agent orchestration.
            </p>

            <div className="ai-core-tags-row">
              <span className="ai-core-tag">Generative AI Hub</span>
              <span className="ai-core-tag">Multi-Modal LLMs</span>
              <span className="ai-core-tag">Enterprise RAG</span>
              <span className="ai-core-tag">Prompt Engineering</span>
              <span className="ai-core-tag">Safety Guardrails</span>
            </div>

            <div className="ai-core-card-btn">
              <span>Explore GenAI Hub</span>
              <span aria-hidden="true">→</span>
            </div>
          </div>
        </div>

        {/* Foundation & Governance Bar */}
        <div className="ai-core-foundation-bar">
          <div className="ai-core-foundation-left">
            <span className="ai-core-foundation-tag">Security & BTP Integration</span>
            <span>Seamlessly embedded into SAP Business Technology Platform with zero data egress vulnerabilities.</span>
          </div>
          <div className="ai-core-foundation-badges">
            <span className="ai-core-badge-item">🔒 SOC2 & ISO Compliant</span>
            <span className="ai-core-badge-item">🛡️ Enterprise Guardrails</span>
            <span className="ai-core-badge-item">🌐 Multi-Cloud Deployment</span>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="ai-core-footer">
        <button
          className="ai-core-nav-btn"
          onClick={onPrev || goToAiServices}
          aria-label="Return to AI Services"
        >
          ‹ AI Services & Models
        </button>

        <BrandLockup variant="footer" theme="light" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="ai-core-nav-btn"
            onClick={goToPlatform}
            title="Return to Slide 7: Business AI Platform"
          >
            Slide 7: Platform
          </button>

          <button
            className="ai-core-nav-btn primary"
            onClick={goToAiAgentHub}
            aria-label="Proceed to AI Agent Hub"
            title="Explore AI Agent Hub & Governance"
          >
            AI Agent Hub ›
          </button>
        </div>
      </footer>
    </div>
  )
}
