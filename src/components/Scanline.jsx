export default function Scanline() {
  return (
    <div
      className="fixed left-0 w-full h-[2px] pointer-events-none z-[9980] animate-scan"
      style={{ background: 'linear-gradient(transparent, rgba(224,191,255,.05), transparent)', top: '-100%' }}
    />
  )
}
