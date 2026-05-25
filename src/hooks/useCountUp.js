import { useEffect } from 'react'

function countUp(el, target, duration = 1800) {
  let start = null
  function step(ts) {
    if (!start) start = ts
    const p = Math.min((ts - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    el.textContent = Math.floor(eased * target) + (p < 1 ? '' : '+')
    if (p < 1) requestAnimationFrame(step)
    else el.textContent = target + '+'
  }
  requestAnimationFrame(step)
}

export function useCountUp() {
  useEffect(() => {
    const container = document.querySelector('.about-stats')
    if (!container) return
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const ids = [
          { id: 'cnt1', val: 120 },
          { id: 'cnt2', val: 15 },
          { id: 'cnt3', val: 8 },
          { id: 'cnt4', val: 5 },
        ]
        ids.forEach(({ id, val }) => {
          const el = document.getElementById(id)
          if (el) countUp(el, val)
        })
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(container)
    return () => obs.disconnect()
  }, [])
}
