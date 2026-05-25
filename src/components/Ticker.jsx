const items = [
  { hi: true, text: 'МЫ ШАРИМ' },
  { text: 'WE SHARE' },
  { text: 'ПОЛНЫЙ ЦИКЛ' },
  { text: 'ТЕХНИЧЕСКИЙ ПРОДАКШЕН' },
  { text: 'LED · СВЕТ · ЗВУК · СЦЕНА' },
  { text: 'ВОЛЮМЕТРИЯ' },
  { text: 'ГЕНЕРАТИВНЫЙ КОНТЕНТ' },
  { hi: true, text: 'МЫ ШАРИМ' },
  { text: 'WE SHARE' },
  { text: 'ПОЛНЫЙ ЦИКЛ' },
  { text: 'ТЕХНИЧЕСКИЙ ПРОДАКШЕН' },
  { text: 'LED · СВЕТ · ЗВУК · СЦЕНА' },
  { text: 'ВОЛЮМЕТРИЯ' },
  { text: 'ГЕНЕРАТИВНЫЙ КОНТЕНТ' },
]

export default function Ticker() {
  return (
    <div style={{
      borderTop: '1px solid var(--dim)',
      borderBottom: '1px solid var(--dim)',
      padding: '14px 0',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1,
      background: 'var(--black)',
    }}>
      <div style={{
        display: 'flex',
        gap: 0,
        animation: 'ticker-move 22s linear infinite',
        whiteSpace: 'nowrap',
      }}>
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '.18em',
            color: item.hi ? '#E0BFFF' : 'var(--dim3)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '0 32px',
            textTransform: 'uppercase',
          }}>
            {i > 0 && !item.hi && <span style={{ color: 'var(--dim2)', margin: '0 8px' }}>·</span>}
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
