import { useEffect } from 'react'

export function useGlitchInterval() {
  useEffect(() => {
    const titleSolid = document.querySelector('.hero-solid')
    if (!titleSolid) return
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        titleSolid.style.animation = 'none'
        void titleSolid.offsetWidth
        titleSolid.style.animation = ''
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [])
}
