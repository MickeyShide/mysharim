const cells = [
  { n: '01 —', h: 'ПОЛНЫЙ ЦИКЛ', d: 'От концепции и дизайна до монтажа, пусконаладки и live-трансляции. Берём весь процесс на себя.' },
  { n: '02 —', h: 'МЫ ШАРИМ', d: 'Знаем индустрию изнутри. Партнёрская сеть под любой запрос — оборудование, специалисты, технологии.' },
  { n: '03 —', h: 'С НАМИ НЕ ПРОЕБЁТЕСЬ', d: 'Берём ответственность за результат целиком. Работаем чётко, говорим прямо, делаем красиво.' },
]

export default function UTPStrip() {
  return (
    <div className="reveal" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      background: 'var(--dim)',
      gap: '1px',
      position: 'relative',
      zIndex: 1,
    }}>
      {cells.map((cell, i) => (
        <div key={i} className="utp-cell" style={{
          background: 'var(--black)',
          padding: '40px 44px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background .3s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#0f0f0f'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
        >
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '9px',
            color: 'var(--acid)',
            letterSpacing: '.2em',
            marginBottom: '18px',
          }}>
            {cell.n}
          </div>
          <div style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '16px',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '12px',
          }}>
            {cell.h}
          </div>
          <div style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '12px',
            fontWeight: 300,
            color: 'var(--dim3)',
            lineHeight: 1.75,
          }}>
            {cell.d}
          </div>
        </div>
      ))}
    </div>
  )
}
