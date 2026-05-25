export default function Scanline() {
  return (
    <div
      className="scanline"
      style={{
        position: 'fixed',
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(transparent, rgba(224,191,255,.05), transparent)',
        pointerEvents: 'none',
        zIndex: 9980,
        animation: 'scan 8s linear infinite',
        top: '-100%',
      }}
    />
  )
}
