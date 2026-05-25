import { useCanvas } from '../hooks/useCanvas'

export default function StarCanvas({ mouseRef }) {
  const canvasRef = useCanvas(mouseRef)

  return (
    <canvas
      id="c"
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
