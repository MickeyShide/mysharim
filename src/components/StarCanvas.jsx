import { useCanvas } from '../hooks/useCanvas'

export default function StarCanvas({ mouseRef }) {
  const canvasRef = useCanvas(mouseRef)

  return (
    <canvas
      id="c"
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
