import { useSquirrel } from '../hooks/useSquirrel'

export default function Squirrel() {
  const sqRef = useSquirrel()

  return (
    <div
      ref={sqRef}
      className="fixed bottom-5 z-[9970] pointer-events-none opacity-0 transition-opacity duration-[400ms] text-[20px]"
      style={{ left: '-40px' }}
    >
      <span className="text-[20px] block -scale-x-100 drop-shadow-[0_0_4px_rgba(224,191,255,0.5)]">
        🐿️
      </span>
    </div>
  )
}
