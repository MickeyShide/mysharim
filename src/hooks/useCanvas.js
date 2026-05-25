import { useEffect, useRef } from 'react'

export function useCanvas(mouseRef) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, animId

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function drawStar(x, y, r, alpha, color) {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.strokeStyle = color
      ctx.lineWidth = 0.6
      ctx.beginPath()
      ctx.moveTo(x, y - r); ctx.lineTo(x, y + r)
      ctx.moveTo(x - r, y); ctx.lineTo(x + r, y)
      const d = r * 0.55
      ctx.moveTo(x - d, y - d); ctx.lineTo(x + d, y + d)
      ctx.moveTo(x + d, y - d); ctx.lineTo(x - d, y + d)
      ctx.stroke()
      ctx.restore()
    }

    class Star {
      constructor(rand) { this.reset(rand) }
      reset(rand = false) {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.r = Math.random() * 3.5 + 1
        this.baseAlpha = Math.random() * 0.28 + 0.04
        this.alpha = this.baseAlpha
        this.twinkleSpeed = Math.random() * 0.015 + 0.004
        this.twinkleOffset = Math.random() * Math.PI * 2
        this.vx = (Math.random() - 0.5) * 0.18
        this.vy = (Math.random() - 0.5) * 0.14
        this.age = rand ? Math.random() * 400 : 0
        this.maxAge = Math.random() * 400 + 200
        this.color = Math.random() > 0.2 ? 'rgba(224,191,255,1)' : 'rgba(255,255,255,1)'
      }
      update(t) {
        this.age++
        if (this.age > this.maxAge) { this.reset(); return }
        this.x += this.vx
        this.y += this.vy
        if (this.x < -10) this.x = W + 10
        if (this.x > W + 10) this.x = -10
        if (this.y < -10) this.y = H + 10
        if (this.y > H + 10) this.y = -10
        const life = this.age < 30 ? this.age / 30 : this.age > this.maxAge - 30 ? (this.maxAge - this.age) / 30 : 1
        this.alpha = this.baseAlpha * life * (0.6 + 0.4 * Math.sin(t * this.twinkleSpeed + this.twinkleOffset))
        const mx = mouseRef.current?.x ?? 0
        const my = mouseRef.current?.y ?? 0
        const dx = this.x - mx, dy = this.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 90 && dist > 0) {
          this.x += dx / dist * 0.6
          this.y += dy / dist * 0.6
        }
      }
      draw() { drawStar(this.x, this.y, this.r, this.alpha, this.color) }
    }

    class BigCross {
      constructor() { this.reset(true) }
      reset(rand = false) {
        this.x = Math.random() * W; this.y = Math.random() * H
        this.r = Math.random() * 7 + 4
        this.alpha = Math.random() * 0.09 + 0.02
        this.vx = (Math.random() - 0.5) * 0.08
        this.vy = (Math.random() - 0.5) * 0.06
        this.age = rand ? Math.random() * 600 : 0
        this.maxAge = Math.random() * 600 + 300
        this.rot = Math.random() * Math.PI / 4
        this.rotSpeed = (Math.random() - 0.5) * 0.002
      }
      update() {
        this.age++; if (this.age > this.maxAge) this.reset()
        this.x += this.vx; this.y += this.vy
        this.rot += this.rotSpeed
        if (this.x < 0) this.x = W; if (this.x > W) this.x = 0
        if (this.y < 0) this.y = H; if (this.y > H) this.y = 0
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.strokeStyle = 'rgba(224,191,255,1)'
        ctx.lineWidth = 0.5
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rot)
        ctx.beginPath()
        ctx.moveTo(0, -this.r); ctx.lineTo(0, this.r)
        ctx.moveTo(-this.r, 0); ctx.lineTo(this.r, 0)
        ctx.stroke()
        ctx.restore()
      }
    }

    const stars = Array.from({ length: 160 }, () => new Star(true))
    const bigCrosses = Array.from({ length: 18 }, () => new BigCross())
    let t = 0

    function draw() {
      ctx.clearRect(0, 0, W, H)
      t++
      bigCrosses.forEach(b => { b.update(); b.draw() })
      stars.forEach(s => { s.update(t); s.draw() })
      const mx = mouseRef.current?.x ?? 0
      const my = mouseRef.current?.y ?? 0
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        const dx = s.x - mx, dy = s.y - my
        if (Math.sqrt(dx * dx + dy * dy) < 130) {
          for (let j = i + 1; j < stars.length; j++) {
            const q = stars[j]
            const ex = s.x - q.x, ey = s.y - q.y
            const d = Math.sqrt(ex * ex + ey * ey)
            if (d < 75) {
              ctx.save()
              ctx.globalAlpha = (1 - d / 75) * 0.05
              ctx.strokeStyle = 'rgba(224,191,255,1)'
              ctx.lineWidth = 0.3
              ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(q.x, q.y); ctx.stroke()
              ctx.restore()
            }
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  return canvasRef
}
