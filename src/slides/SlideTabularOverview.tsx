import { useState } from 'react'
import BrandLockup from '../components/BrandLockup'
import '../styles/tabularOverview.css'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

interface TickerItem {
  symbol: string
  name: string
  metric: string
  type: 'up' | 'alert' | 'live'
}

const TICKERS_ROW_1: TickerItem[] = [
  { symbol: 'CASHFLOW', name: 'Mid-term Cashflow Forecasting', metric: '▲ 98.4% Acc', type: 'up' },
  { symbol: 'GR/IR', name: 'Goods Receipt / Invoice Reconciliation', metric: '▲ 99.1% Auto-Match', type: 'up' },
  { symbol: 'S-QUOTE', name: 'Sales Quotation Conversion Rate', metric: '▲ +24.2% Win', type: 'up' },
  { symbol: 'ANOMALY', name: 'Payment Anomaly Detection', metric: '• Real-Time Active', type: 'live' },
  { symbol: 'RECOM-PRD', name: 'Intelligent Product Recommendation', metric: '▲ +18.4% Margin', type: 'up' },
  { symbol: 'TAX-CODE', name: 'Tax Code Determination', metric: '▲ 99.9% 0-Discrepancy', type: 'up' },
  { symbol: 'STOCK-OPT', name: 'Dynamic Stock Level Optimization', metric: '▲ -18.5% Buffer', type: 'up' },
  { symbol: 'PMT-DELAY', name: 'Incoming Payment Delay Prediction', metric: '⚠ Early Warning', type: 'alert' },
  { symbol: 'RET-ORD', name: 'Return Order Auto-completion', metric: '• Zero Touch', type: 'live' },
  { symbol: 'COMM-CODE', name: 'Commodity Code Classification', metric: '▲ 98.2% Verified', type: 'up' },
  { symbol: 'MAT-GRP', name: 'Material Group Prediction', metric: '▲ 96.7% Clean', type: 'up' },
  { symbol: 'SO-AUTO', name: 'Sales Order Auto-completion', metric: '• Instant Cleared', type: 'live' },
  { symbol: 'LEAD-TIME', name: 'Demand-Driven Replenishment', metric: '▲ 96.5% Precision', type: 'up' },
  { symbol: 'ESG-EMISS', name: 'Emissions Factor Estimation', metric: '• Scope 3 Audit', type: 'live' },
  { symbol: 'FAIL-MODE', name: 'Failure Mode Identification', metric: '▲ -32% Downtime', type: 'up' },
]

const TICKERS_ROW_2: TickerItem[] = [
  { symbol: 'SPEND-CAT', name: 'Procurement Spend Categorization', metric: '▲ 98.7% Clean', type: 'up' },
  { symbol: 'ACCRUALS', name: 'Intelligent Accruals Fast-Close', metric: '• Month-End Fast', type: 'live' },
  { symbol: 'DELIV-DLY', name: 'Delivery Delay Prediction', metric: '⚠ Proactive Reroute', type: 'alert' },
  { symbol: 'CREDIT-RSK', name: 'Credit Risk & Default Prediction', metric: '• Live Scoring', type: 'live' },
  { symbol: 'UPSELL', name: 'Product Upselling Recommendation', metric: '▲ +16.2% Deal Size', type: 'up' },
  { symbol: 'BIN-REC', name: 'Destination Bin Recommendation', metric: '▲ Optimal Path', type: 'up' },
  { symbol: 'DMG-CODE', name: 'Damage Code Proposal & Validation', metric: '▲ 97.4% Match', type: 'up' },
  { symbol: 'SYS-CONF', name: 'Guided System Configuration', metric: '• Clean Core Ready', type: 'live' },
  { symbol: 'PROJ-COST', name: 'Project Cost Forecasting', metric: '▲ 95.8% On Budget', type: 'up' },
  { symbol: 'ADV-RET', name: 'Advanced Returns Management', metric: '• Automated Audit', type: 'live' },
  { symbol: 'M-DATA', name: 'Self-Healing ERP Master Data', metric: '▲ Autonomous Fix', type: 'up' },
  { symbol: 'SUST-TAX', name: 'Sustainability Taxonomy Classification', metric: '• Regulatory Aligned', type: 'live' },
  { symbol: 'MIGRATION', name: 'Guided ERP Data Migration', metric: '• AI-Assisted Risk 0', type: 'live' },
  { symbol: 'INV-OBJ', name: 'Invoice Object Recommendation', metric: '▲ 99.4% Match', type: 'up' },
  { symbol: 'FULFILL-DLY', name: 'Sales Fulfillment Delay Alert', metric: '⚠ SLA Protection', type: 'alert' },
]

export default function SlideTabularOverview({ onPrev, onNext }: Props) {
  const [isPaused, setIsPaused] = useState(false)
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({ 0: false, 1: false, 2: false })

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const toggleAllFlips = () => {
    const anyFlipped = Object.values(flippedCards).some((val) => val)
    setFlippedCards({ 0: !anyFlipped, 1: !anyFlipped, 2: !anyFlipped })
  }

  const allFlipped = Object.values(flippedCards).every((val) => val)

  const goToAiCore = () => {
    window.location.hash = '#/sap_ai_core'
  }

  const goToRptScenario = () => {
    if (onNext) {
      onNext()
    } else {
      window.location.hash = '#/rpt_scenario'
    }
  }

  return (
    <div className="tabular-ov-container">
      {/* Header */}
      <header className="tabular-ov-header">
        <div className="tabular-ov-title-group">
          <div className="tabular-ov-eyebrow">
            <span>SAP AI Core • Tabular AI Foundation</span>
          </div>
          <h1 className="tabular-ov-title">
            Tabular AI Overview: Why LLMs Fail on Structured ERP Data
          </h1>
          <p className="tabular-ov-subtitle">
            Large Language Models are engineered for language, not tabular ERP databases. Linear tokenization strips relational table semantics, corrupts mathematical accuracy, and yields unexplainable hallucinations. Tabular AI delivers deterministic, explainable enterprise predictions.
          </p>
        </div>

        <div className="tabular-ov-header-actions">
          <button
            className="tabular-ov-badge-btn primary"
            onClick={goToRptScenario}
            title="Explore SAP-RPT Scenarios"
          >
            <span>Explore SAP-RPT Scenarios →</span>
          </button>
        </div>
      </header>

      {/* Main Split: Center Redesigned White Diagram Stage (Zero Whitespace) + Bottom Stock Ticker Board */}
      <main className="tabular-ov-main">
        {/* Redesigned Native White Background Diagram with Zero Empty Space */}
        <section className="tabular-ov-diagram-stage">
          {/* Header of Diagram: Dead-Centered with much bigger fonts */}
          <div className="tabular-ov-diagram-header-row">
            <div className="tabular-ov-diagram-header">
              <h2 className="tabular-ov-diagram-main-title">Large Language Models</h2>
              <p className="tabular-ov-diagram-sub-title">
                Built for <span className="hl-lang">language</span> and{' '}
                <span className="hl-struct">not structured data</span>
              </p>
            </div>
            <button
              type="button"
              className="tabular-ov-flip-toggle-btn"
              onClick={toggleAllFlips}
              title="Flip all 3 cards to view details"
            >
              <span>{allFlipped ? '⤺ Show All Front Faces' : '🔄 Flip All 3 Cards for Details'}</span>
            </button>
          </div>

          {/* 3 Core Limitations: High-Density Diagnostic Cards */}
          <div className="tabular-ov-problems-grid">
            <div className="tabular-ov-problem-card">
              <div className="tabular-ov-problem-header">
                <span className="tabular-ov-problem-icon">✕</span>
                <span className="tabular-ov-problem-heading">Weak handling of numbers</span>
              </div>
              <p className="tabular-ov-problem-desc">
                Linguistic tokenizers slice numbers into arbitrary sub-words (e.g. "14", ",250"). Cannot perform reliable multi-digit multiplication or currency precision.
              </p>
            </div>

            <div className="tabular-ov-problem-card">
              <div className="tabular-ov-problem-header">
                <span className="tabular-ov-problem-icon">✕</span>
                <span className="tabular-ov-problem-heading">Structurally mismatch for tables</span>
              </div>
              <p className="tabular-ov-problem-desc">
                ERP tables are multi-dimensional relational schemas (BSEG/BKPF) with foreign keys and temporal continuity—not sequential narrative sentences.
              </p>
            </div>

            <div className="tabular-ov-problem-card">
              <div className="tabular-ov-problem-header">
                <span className="tabular-ov-problem-icon">✕</span>
                <span className="tabular-ov-problem-heading">Non-deterministic hallucinations</span>
              </div>
              <p className="tabular-ov-problem-desc">
                Next-token probability sampling generates mathematically plausible yet false values. Impossible to audit, violating double-entry financial compliance.
              </p>
            </div>
          </div>

          {/* 3-Stage Visual Architectural Flow with Interactive 3D Flip Cards */}
          <div className="tabular-ov-flow-container">
            {/* Stage 1: Structured Data (2D Relational Topology) */}
            <div
              className={`tabular-ov-flip-card ${flippedCards[0] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(0)
                }
              }}
              title="Click to flip for details"
            >
              <div className="tabular-ov-flip-inner">
                {/* Front Face */}
                <div className="tabular-ov-card-front structured">
                  <div className="tabular-ov-card-top-bar">
                    <span className="tabular-ov-stage-pill stage-blue">Stage 01</span>
                    <h3 className="tabular-ov-flow-label">Structured data</h3>
                    <span className="tabular-ov-card-flip-hint">Click to Flip 🔄</span>
                  </div>

                  <div className="tabular-ov-table-visual">
                    <div className="tabular-ov-table-meta-bar">
                      <span className="tabular-ov-meta-tag">BSEG • Financial Items</span>
                      <span className="tabular-ov-meta-coord">2D Matrix [R × C]</span>
                    </div>
                    <div className="tabular-ov-table-grid">
                      <div className="tabular-ov-table-row hdr">
                        <span>Doc ID</span>
                        <span>G/L Account</span>
                        <span>Amount (JPY)</span>
                        <span>Status</span>
                      </div>
                      <div className="tabular-ov-table-row">
                        <span className="cell-id">0100492810</span>
                        <span className="cell-code">113100 (Bank)</span>
                        <span className="cell-num pos">+¥14,250,000</span>
                        <span className="cell-badge ok">Cleared</span>
                      </div>
                      <div className="tabular-ov-table-row">
                        <span className="cell-id">0100492811</span>
                        <span className="cell-code">211000 (Vendor)</span>
                        <span className="cell-num neg">-¥8,420,500</span>
                        <span className="cell-badge ok">Matched</span>
                      </div>
                      <div className="tabular-ov-table-row">
                        <span className="cell-id">0100492812</span>
                        <span className="cell-code">400000 (Revenue)</span>
                        <span className="cell-num neg">-¥5,829,500</span>
                        <span className="cell-badge ok">Posted</span>
                      </div>
                    </div>
                  </div>

                  <div className="tabular-ov-card-summary summary-blue">
                    <span className="summary-icon">✨</span>
                    <span className="summary-text">
                      <strong>2D Relational Topology:</strong> Exact column types, foreign keys & balanced net zero.
                    </span>
                  </div>
                </div>

                {/* Back Face */}
                <div className="tabular-ov-card-back structured">
                  <div className="tabular-ov-card-top-bar">
                    <span className="tabular-ov-stage-pill stage-blue">Stage 01 • Deep Dive</span>
                    <h3 className="tabular-ov-flow-label">Relational Guarantees</h3>
                    <span className="tabular-ov-card-flip-hint">⤺ Flip Back</span>
                  </div>

                  <div className="tabular-ov-back-content">
                    <div className="tabular-ov-back-point">
                      <span className="point-badge">1</span>
                      <div>
                        <span className="point-title">Relational Schema Integrity</span>
                        <p className="point-text">
                          Enforces foreign keys (BKPF → BSEG), constraints, and net zero debit/credit balance.
                        </p>
                      </div>
                    </div>
                    <div className="tabular-ov-back-point">
                      <span className="point-badge">2</span>
                      <div>
                        <span className="point-title">2D Coordinate Semantics</span>
                        <p className="point-text">
                          Row indices and column types ensure cell values retain currency, sign, and fiscal context.
                        </p>
                      </div>
                    </div>
                    <div className="tabular-ov-back-point">
                      <span className="point-badge">3</span>
                      <div>
                        <span className="point-title">Deterministic Audit Trail</span>
                        <p className="point-text">
                          Direct trace back to posting documents and user stamps required for statutory audits.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tabular-ov-card-summary summary-blue">
                    <span className="summary-icon">ℹ️</span>
                    <span className="summary-text">
                      <strong>Preserved Context:</strong> Tabular models (SAP-RPT) process relational vectors natively.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector 1 */}
            <div className="tabular-ov-flow-connector">
              <div className="tabular-ov-connector-circle">→</div>
              <span className="tabular-ov-connector-badge">FLATTEN</span>
              <span className="tabular-ov-connector-sub">2D to 1D Text</span>
            </div>

            {/* Stage 2: Lost Structure & Semantics at Linear Tokenization */}
            <div
              className={`tabular-ov-flip-card ${flippedCards[1] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(1)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(1)
                }
              }}
              title="Click to flip for details"
            >
              <div className="tabular-ov-flip-inner">
                {/* Front Face */}
                <div className="tabular-ov-card-front tokenized">
                  <div className="tabular-ov-card-top-bar">
                    <span className="tabular-ov-stage-pill stage-gray">Stage 02</span>
                    <h3 className="tabular-ov-flow-label">
                      Lost structure & semantics<br />at linear tokenization
                    </h3>
                    <span className="tabular-ov-card-flip-hint">Click to Flip 🔄</span>
                  </div>

                  <div className="tabular-ov-token-visual">
                    <div className="tabular-ov-token-meta-bar">
                      <span className="tabular-ov-meta-tag">BPE Token Stream</span>
                      <span className="tabular-ov-meta-coord">Coordinates Destroyed</span>
                    </div>
                    <div className="tabular-ov-token-raw-string">
                      <code>"BSEG-WRBTR | 14,250,000.50 | 113100"</code>
                    </div>
                    <div className="tabular-ov-token-chips-wrap">
                      <span className="tabular-ov-token-chip">tok_1: "BSEG"</span>
                      <span className="tabular-ov-token-chip">tok_2: "-"</span>
                      <span className="tabular-ov-token-chip">tok_3: "WR"</span>
                      <span className="tabular-ov-token-chip">tok_4: "BTR"</span>
                      <span className="tabular-ov-token-chip">tok_5: "14"</span>
                      <span className="tabular-ov-token-chip split">tok_6: ",250"</span>
                      <span className="tabular-ov-token-chip split">tok_7: ",000"</span>
                      <span className="tabular-ov-token-chip split">tok_8: ".50"</span>
                    </div>
                  </div>

                  <div className="tabular-ov-card-summary summary-gray">
                    <span className="summary-icon">✂️</span>
                    <span className="summary-text">
                      <strong>Flattened Chaos:</strong> Numerical values split arbitrarily; table geometry lost.
                    </span>
                  </div>
                </div>

                {/* Back Face */}
                <div className="tabular-ov-card-back tokenized">
                  <div className="tabular-ov-card-top-bar">
                    <span className="tabular-ov-stage-pill stage-gray">Stage 02 • Deep Dive</span>
                    <h3 className="tabular-ov-flow-label">Tokenization Bottleneck</h3>
                    <span className="tabular-ov-card-flip-hint">⤺ Flip Back</span>
                  </div>

                  <div className="tabular-ov-back-content">
                    <div className="tabular-ov-back-point">
                      <span className="point-badge">1</span>
                      <div>
                        <span className="point-title">BPE Sub-Token Fracture</span>
                        <p className="point-text">
                          Numbers like 14,250,000 are split into arbitrary chunks ("14", ",250"), destroying numerical magnitude.
                        </p>
                      </div>
                    </div>
                    <div className="tabular-ov-back-point">
                      <span className="point-badge">2</span>
                      <div>
                        <span className="point-title">Serial 1D Flattening</span>
                        <p className="point-text">
                          Converting 2D tables into 1D text forces attention layers to guess column-row spatial relationships.
                        </p>
                      </div>
                    </div>
                    <div className="tabular-ov-back-point">
                      <span className="point-badge">3</span>
                      <div>
                        <span className="point-title">Context Window Quadratic Bloat</span>
                        <p className="point-text">
                          Text serialization causes high prompt token cost, slower inference, and compounding reasoning drift.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tabular-ov-card-summary summary-gray">
                    <span className="summary-icon">⚠️</span>
                    <span className="summary-text">
                      <strong>Architectural Mismatch:</strong> Language self-attention cannot learn arithmetic operations reliably.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector 2 */}
            <div className="tabular-ov-flow-connector">
              <div className="tabular-ov-connector-circle">→</div>
              <span className="tabular-ov-connector-badge">AUTO-REGRESS</span>
              <span className="tabular-ov-connector-sub">Probabilistic Next-Token</span>
            </div>

            {/* Stage 3: Plausible, but Wrong Unexplainable Predictions */}
            <div
              className={`tabular-ov-flip-card ${flippedCards[2] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(2)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(2)
                }
              }}
              title="Click to flip for details"
            >
              <div className="tabular-ov-flip-inner">
                {/* Front Face */}
                <div className="tabular-ov-card-front predictions">
                  <div className="tabular-ov-card-top-bar">
                    <span className="tabular-ov-stage-pill stage-red">Stage 03</span>
                    <h3 className="tabular-ov-flow-label">
                      Plausible, but wrong<br />unexplainable predictions
                    </h3>
                    <span className="tabular-ov-card-flip-hint">Click to Flip 🔄</span>
                  </div>

                  <div className="tabular-ov-broken-visual">
                    <div className="tabular-ov-broken-meta-bar">
                      <span className="tabular-ov-meta-tag error">Hallucination Failure</span>
                      <span className="tabular-ov-meta-coord error">Arithmetic Drift</span>
                    </div>

                    <div className="tabular-ov-broken-matrix">
                      <div className="tabular-ov-broken-item error">
                        <span className="item-label">Predicted Total:</span>
                        <span className="item-val">¥14,590,000.00</span>
                        <span className="item-tag">✕ +¥340,000 Math Error</span>
                      </div>
                      <div className="tabular-ov-broken-item error">
                        <span className="item-label">Account Code:</span>
                        <span className="item-val">999999 (Non-Existent)</span>
                        <span className="item-tag">✕ Invalid Master Data</span>
                      </div>
                      <div className="tabular-ov-broken-item warn">
                        <span className="item-label">Sampling Probability:</span>
                        <span className="item-val">p(tok) = 0.638</span>
                        <span className="item-tag">⚠ Non-Deterministic Run</span>
                      </div>
                    </div>

                    {/* Erratic connection lines overlaid */}
                    <svg className="tabular-ov-broken-svg" viewBox="0 0 200 45" preserveAspectRatio="none">
                      <path
                        d="M 15 12 Q 70 38, 110 15 T 185 32"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                      />
                      <circle cx="15" cy="12" r="3" fill="#ef4444" />
                      <circle cx="110" cy="15" r="3" fill="#ef4444" />
                      <circle cx="185" cy="32" r="3" fill="#ef4444" />
                    </svg>
                  </div>

                  <div className="tabular-ov-card-summary summary-red">
                    <span className="summary-icon">⚠️</span>
                    <span className="summary-text">
                      <strong>Compliance Risk:</strong> Unexplainable hallucinations fail GAAP/IFRS audits.
                    </span>
                  </div>
                </div>

                {/* Back Face */}
                <div className="tabular-ov-card-back predictions">
                  <div className="tabular-ov-card-top-bar">
                    <span className="tabular-ov-stage-pill stage-red">Stage 03 • Deep Dive</span>
                    <h3 className="tabular-ov-flow-label">Why Tabular AI Wins</h3>
                    <span className="tabular-ov-card-flip-hint">⤺ Flip Back</span>
                  </div>

                  <div className="tabular-ov-back-content">
                    <div className="tabular-ov-back-point">
                      <span className="point-badge error">1</span>
                      <div>
                        <span className="point-title">Deterministic Calculations</span>
                        <p className="point-text">
                          Tabular Models (SAP-RPT) preserve numeric datatypes, computing deterministic forecasts with zero hallucination.
                        </p>
                      </div>
                    </div>
                    <div className="tabular-ov-back-point">
                      <span className="point-badge error">2</span>
                      <div>
                        <span className="point-title">Regulatory & Audit Compliance</span>
                        <p className="point-text">
                          Feature-importance vectors (SHAP values) provide the mathematical explainability required for SOX compliance.
                        </p>
                      </div>
                    </div>
                    <div className="tabular-ov-back-point">
                      <span className="point-badge error">3</span>
                      <div>
                        <span className="point-title">10x Speed & 100x Lower Cost</span>
                        <p className="point-text">
                          Pre-trained tabular transformers run in milliseconds on standard CPU/GPU without expensive token loops.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tabular-ov-card-summary summary-red">
                    <span className="summary-icon">✅</span>
                    <span className="summary-text">
                      <strong>SAP-RPT Solution:</strong> Built specifically to replace LLM guessing with tabular intelligence.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom: Stock Tickers for Enterprise Predictions */}
        <section className="tabular-ov-ticker-section">
          <div className="tabular-ov-ticker-header">
            <div className="tabular-ov-ticker-title">
              <span>📈 Enterprise Prediction Tickers</span>
              <span style={{ color: '#64748b', fontWeight: 500, fontSize: '11px', textTransform: 'none' }}>
                (Hover to pause • 30 Live SAP ERP predictive models streaming at readable pace)
              </span>
            </div>

            <div className="tabular-ov-ticker-controls">
              <button
                type="button"
                className="tabular-ov-pause-btn"
                onClick={() => setIsPaused(!isPaused)}
                title="Pause or resume ticker animation"
              >
                <span>{isPaused ? '▶ Resume' : '⏸ Pause'}</span>
              </button>

              <div className="tabular-ov-ticker-live">
                <span className="tabular-ov-live-dot" />
                <span>LIVE PREDICTIONS</span>
              </div>
            </div>
          </div>

          {/* Marquee Track 1: Streaming Left */}
          <div className="tabular-ov-marquee-track">
            <div className={`tabular-ov-marquee-content ${isPaused ? 'is-paused' : ''}`}>
              {TICKERS_ROW_1.concat(TICKERS_ROW_1).map((item, idx) => (
                <div key={`t1-${idx}`} className="tabular-ov-ticker-item">
                  <span className="tabular-ov-ticker-symbol">{item.symbol}</span>
                  <span>{item.name}</span>
                  <span className={`tabular-ov-ticker-metric ${item.type}`}>
                    {item.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Track 2: Streaming Right */}
          <div className="tabular-ov-marquee-track">
            <div className={`tabular-ov-marquee-content reverse ${isPaused ? 'is-paused' : ''}`}>
              {TICKERS_ROW_2.concat(TICKERS_ROW_2).map((item, idx) => (
                <div key={`t2-${idx}`} className="tabular-ov-ticker-item">
                  <span className="tabular-ov-ticker-symbol">{item.symbol}</span>
                  <span>{item.name}</span>
                  <span className={`tabular-ov-ticker-metric ${item.type}`}>
                    {item.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="tabular-ov-footer">
        <button
          className="tabular-ov-nav-btn"
          onClick={onPrev || goToAiCore}
          aria-label="Return to SAP AI Core"
        >
          ‹ SAP AI Core
        </button>

        <BrandLockup variant="footer" theme="light" />

        <button
          className="tabular-ov-nav-btn primary"
          onClick={goToRptScenario}
          aria-label="Proceed to SAP Scenarios with SAP-RPT"
        >
          SAP Scenarios (SAP-RPT) ›
        </button>
      </footer>
    </div>
  )
}
