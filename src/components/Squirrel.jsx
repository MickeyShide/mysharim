import { useSquirrel } from '../hooks/useSquirrel'

export default function Squirrel() {
  const sqRef = useSquirrel()

  return (
    <div
      ref={sqRef}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '-40px',
        zIndex: 9970,
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity .4s',
        fontSize: '20px',
      }}
    >
      <span
        style={{
          fontSize: '20px',
          display: 'block',
          transform: 'scaleX(-1)',
          filter: 'drop-shadow(0 0 4px rgba(224,191,255,.5))',
        }}
      >
        🐿️
      </span>
    </div>
  )
}
