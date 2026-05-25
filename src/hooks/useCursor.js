import { useEffect, useRef } from 'react'

export function useCursor(mouseRef) {
  const curElRef = useRef(null)
  const curRingRef = useRef(null)
  const curDotRef = useRef(null)
  const ringPosRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const curEl = curElRef.current
    const curRing = curRingRef.current
    const curDot = curDotRef.current
    if (!curRing || !curDot) return
    // Ensure container stays at (0,0) — no inheritance of stale inline styles
    if (curEl) { curEl.style.left = '0'; curEl.style.top = '0' }

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      // Dot follows cursor exactly — absolute coords relative to .cur at (0,0)
      curDot.style.left = e.clientX + 'px'
      curDot.style.top = e.clientY + 'px'
    }

    const animCur = () => {
      const { x: mx, y: my } = mouseRef.current
      // Ring lazily follows cursor
      ringPosRef.current.x += (mx - ringPosRef.current.x) * 0.1
      ringPosRef.current.y += (my - ringPosRef.current.y) * 0.1
      // Absolute coords relative to .cur at (0,0) = viewport coords
      curRing.style.left = ringPosRef.current.x + 'px'
      curRing.style.top = ringPosRef.current.y + 'px'
      rafRef.current = requestAnimationFrame(animCur)
    }
    rafRef.current = requestAnimationFrame(animCur)

    document.addEventListener('mousemove', onMove)

    const targetSelector = 'a, button, .dept-card, .weapon-card, .c-card'
    const onEnter = () => {
      curRing.style.width = '64px'
      curRing.style.height = '64px'
      curRing.style.borderColor = 'rgba(224,191,255,.8)'
      curDot.style.width = '4px'
      curDot.style.height = '4px'
    }
    const onLeave = () => {
      curRing.style.width = '40px'
      curRing.style.height = '40px'
      curRing.style.borderColor = 'rgba(224,191,255,.35)'
      curDot.style.width = '6px'
      curDot.style.height = '6px'
    }
    const onOver = (e) => {
      if (e.target.closest(targetSelector)) onEnter()
    }
    const onOut = (e) => {
      const target = e.target.closest(targetSelector)
      if (target && !target.contains(e.relatedTarget)) onLeave()
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [mouseRef])

  return { curElRef, curRingRef, curDotRef }
}
