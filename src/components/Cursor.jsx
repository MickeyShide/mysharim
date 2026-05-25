import { useCursor } from '../hooks/useCursor'

export default function Cursor({ mouseRef }) {
  const { curElRef, curRingRef, curDotRef } = useCursor(mouseRef)

  return (
    <div className="cur" ref={curElRef} id="cur">
      <div className="cur-ring" ref={curRingRef} id="cur-ring" />
      <div className="cur-dot" ref={curDotRef} id="cur-dot" />
    </div>
  )
}
