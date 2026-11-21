import { useEffect, useRef, useState } from 'react'
import brainBase from '../assets/brain/brain_base.jpg'

interface NodeDef {
  id: string
  name: string
  x: number // percentage
  y: number // percentage
  color: string
  metric: string
}

const NODES: NodeDef[] = [
  { id: 'fin', name: 'Finance', x: 26, y: 32, color: '#4da6ff', metric: 'Real-Time Financial Close' },
  { id: 'sc', name: 'Supply Chain', x: 74, y: 28, color: '#38d9a9', metric: 'Predictive Demand & Logistics' },
  { id: 'ops', name: 'Operations', x: 78, y: 52, color: '#74c0fc', metric: 'Autonomous Manufacturing' },
  { id: 'hr', name: 'Human Resources', x: 24, y: 68, color: '#da77f2', metric: 'Workforce Planning & AI' },
  { id: 'cust', name: 'Customers', x: 70, y: 76, color: '#ffa94d', metric: 'Omnichannel 360° Insight' },
]

const EDGES: [number, number][] = [
  [0, 1], // Finance <-> Supply Chain
  [1, 2], // Supply Chain <-> Operations
  [2, 4], // Operations <-> Customers
  [3, 4], // HR <-> Customers
  [0, 3], // Finance <-> HR
  [0, 2], // Finance <-> Operations
]

export default function BrainVisual() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    // Packet particle stream
    const packets = Array.from({ length: 20 }, (_, i) => ({
      edgeIdx: i % EDGES.length,
      progress: (i / 20),
      speed: 0.006 + Math.random() * 0.005,
      direction: Math.random() > 0.5 ? 1 : -1,
      size: 2.8 + Math.random() * 1.5,
      color: i % 2 === 0 ? '#4da6ff' : '#ffd43b',
    }))

    const render = (time: number) => {
      ctx.clearRect(0, 0, w, h)

      // Center ERP point
      const cx = w * 0.5
      const cy = h * 0.49

      // Draw lines between nodes
      ctx.lineWidth = 1.4
      for (let i = 0; i < EDGES.length; i++) {
        const [a, b] = EDGES[i]
        const p1 = { x: (NODES[a].x / 100) * w, y: (NODES[a].y / 100) * h }
        const p2 = { x: (NODES[b].x / 100) * w, y: (NODES[b].y / 100) * h }

        const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
        grad.addColorStop(0, 'rgba(77, 166, 255, 0.45)')
        grad.addColorStop(0.5, 'rgba(255, 212, 59, 0.4)')
        grad.addColorStop(1, 'rgba(77, 166, 255, 0.45)')
        ctx.strokeStyle = grad
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      }

      // Draw lines from nodes to central ERP core
      for (const n of NODES) {
        const nx = (n.x / 100) * w
        const ny = (n.y / 100) * h
        ctx.strokeStyle = 'rgba(100, 180, 255, 0.32)'
        ctx.beginPath()
        ctx.moveTo(nx, ny)
        ctx.lineTo(cx, cy)
        ctx.stroke()
      }

      // Draw packets traveling between nodes (information passing)
      for (const p of packets) {
        p.progress += p.speed * p.direction
        if (p.progress > 1) p.progress = 0
        if (p.progress < 0) p.progress = 1

        const [a, b] = EDGES[p.edgeIdx]
        const p1 = { x: (NODES[a].x / 100) * w, y: (NODES[a].y / 100) * h }
        const p2 = { x: (NODES[b].x / 100) * w, y: (NODES[b].y / 100) * h }

        const px = p1.x + (p2.x - p1.x) * p.progress
        const py = p1.y + (p2.y - p1.y) * p.progress

        // Packet glow aura
        ctx.save()
        ctx.shadowColor = p.color
        ctx.shadowBlur = 12
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Hot center
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(px, py, p.size * 0.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // Pulse rings around nodes
      for (const n of NODES) {
        const nx = (n.x / 100) * w
        const ny = (n.y / 100) * h
        const isHover = activeNode === n.id
        const pulse = (Math.sin(time / 450 + n.x) + 1) / 2
        const r = 6 + pulse * (isHover ? 10 : 6)

        ctx.strokeStyle = isHover ? '#ffd43b' : 'rgba(77, 166, 255, 0.7)'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(nx, ny, r, 0, Math.PI * 2)
        ctx.stroke()

        // Center dot
        ctx.fillStyle = isHover ? '#ffd43b' : '#4da6ff'
        ctx.beginPath()
        ctx.arc(nx, ny, isHover ? 5.5 : 4, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [activeNode])

  return (
    <div className="brain-card-wrapper">
      <div className="brain-visual-stage">
        <img src={brainBase} alt="Realistic 3D Brain" className="brain-bg-render" />
        <div className="brain-vignette" />
        <canvas ref={canvasRef} className="brain-network-canvas" />

        {/* Interactive Node Chips */}
        {NODES.map((n) => (
          <div
            key={n.id}
            className={`node-chip ${activeNode === n.id ? 'active' : ''}`}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            onMouseEnter={() => setActiveNode(n.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <span className="node-dot" />
            <span className="node-name">{n.name}</span>
            {activeNode === n.id && (
              <div className="node-tooltip">{n.metric}</div>
            )}
          </div>
        ))}

        {/* Central Core Title Banner */}
        <div className="erp-center-banner">
          <div className="erp-center-title">ERP is the brain</div>
          <div className="erp-center-sub">of every company</div>
        </div>
      </div>
    </div>
  )
}
