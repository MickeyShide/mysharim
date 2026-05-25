import { useEffect, useRef } from 'react'

export function useSquirrel() {
  const sqRef = useRef(null)

  useEffect(() => {
    const sq = sqRef.current
    if (!sq) return
    let sqRunning = false
    let idleTimer = null

    function runSquirrel() {
      if (sqRunning) return
      sqRunning = true
      sq.style.opacity = '1'
      sq.style.left = '-40px'
      const span = sq.querySelector('span')
      if (span) span.style.transform = 'scaleX(-1)'
      const duration = Math.random() * 3000 + 4000
      const targetX = window.innerWidth + 60
      let startTime = null
      function animSq(ts) {
        if (!startTime) startTime = ts
        const p = Math.min((ts - startTime) / duration, 1)
        const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2
        sq.style.left = (eased * targetX - 40) + 'px'
        sq.style.bottom = (20 + Math.sin(p * 30) * 2) + 'px'
        if (p < 1) {
          requestAnimationFrame(animSq)
        } else {
          sq.style.opacity = '0'
          setTimeout(() => { sqRunning = false; sq.style.left = '-40px' }, 500)
        }
      }
      requestAnimationFrame(animSq)
    }

    function resetIdle() {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(runSquirrel, 8000)
    }
    ;['mousemove', 'keydown', 'scroll', 'click'].forEach(ev =>
      document.addEventListener(ev, resetIdle, { passive: true })
    )
    resetIdle()

    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    let konamiIdx = 0
    const onKey = (e) => {
      if (e.keyCode === konami[konamiIdx]) { konamiIdx++ } else { konamiIdx = 0 }
      if (konamiIdx === konami.length) { konamiIdx = 0; runSquirrel() }
    }
    document.addEventListener('keydown', onKey)

    return () => {
      clearTimeout(idleTimer)
      ;['mousemove', 'keydown', 'scroll', 'click'].forEach(ev =>
        document.removeEventListener(ev, resetIdle)
      )
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return sqRef
}
