import { useEffect, useRef } from 'react'

interface Petal { x: number; y: number; r: number; vx: number; vy: number; rot: number; vr: number; a: number }

export default function Petals() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let w = 0, h = 0, raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const make = (initial: boolean): Petal => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : -20,
      r: 3 + Math.random() * 5,
      vx: -0.2 - Math.random() * 0.5,
      vy: 0.3 + Math.random() * 0.6,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.03,
      a: 0.35 + Math.random() * 0.5,
    })
    const petals = Array.from({ length: 26 }, () => make(true))

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      for (const p of petals) {
        p.x += p.vx + Math.sin(t / 1400 + p.y / 80) * 0.25
        p.y += p.vy
        p.rot += p.vr
        if (p.y > h + 20 || p.x < -20) Object.assign(p, make(false), { x: Math.random() * w * 1.2 })
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.globalAlpha = p.a
        ctx.fillStyle = '#f7c6d4'
        ctx.beginPath()
        ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="petals" aria-hidden="true" />
}
