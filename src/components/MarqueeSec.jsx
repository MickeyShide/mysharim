const row1 = ['МЫ ШАРИМ', 'WE SHARE', 'TECH PRODUCTION', 'ПОЛНЫЙ ЦИКЛ']
const row2 = ['СВЕТОДИОДЫ', 'РОБОРУКИ', 'ВОЛЮМЕТРИЯ', 'ИММЕРСИВ', 'TOUCHDESIGNER']

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div style={{
      display: 'flex',
      gap: '56px',
      animation: `mq-move 20s linear infinite${reverse ? ' reverse' : ''}`,
      whiteSpace: 'nowrap',
      marginTop: reverse ? '12px' : 0,
    }}>
      {doubled.map((item, i) => (
        <div key={i} style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '13px',
          letterSpacing: '.22em',
          color: 'var(--dim3)',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '56px',
          transition: 'color .3s',
          cursor: 'default',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#E0BFFF'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--dim3)'}
        >
          {item}
          <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#E0BFFF', flexShrink: 0, display: 'inline-block' }} />
        </div>
      ))}
    </div>
  )
}

export default function MarqueeSec() {
  return (
    <div style={{
      borderTop: '1px solid var(--dim)',
      borderBottom: '1px solid var(--dim)',
      padding: '18px 0',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1,
    }}>
      <MarqueeRow items={row1} reverse={false} />
      <MarqueeRow items={row2} reverse={true} />
    </div>
  )
}
