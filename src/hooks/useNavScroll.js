import { useEffect } from 'react'

export function useNavScroll() {
  useEffect(() => {
    const nav = document.querySelector('nav')
    if (!nav) return
    const onScroll = () => {
      nav.style.background = window.scrollY > 60
        ? 'rgba(6,6,6,.85)'
        : 'rgba(6,6,6,.55)'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
