const cases = [
  { n: 'КЕЙС — 01', title: 'Название проекта', meta: 'Фестиваль · LED + Свет + Контент · 2024', placeholder: '[ Главный кейс ]', big: true },
  { n: 'КЕЙС — 02', title: 'Название проекта', meta: 'Корпоратив · Трансляция · 2024', placeholder: '[ Кейс 02 ]' },
  { n: 'КЕЙС — 03', title: 'Название проекта', meta: 'Концерт · Полный цикл · 2025', placeholder: '[ Кейс 03 ]' },
]

function CaseCard({ c }) {
  return (
    <div className="c-card" style={{
      background: 'var(--black)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'none',
      gridRow: c.big ? '1/3' : undefined,
    }}>
      <div className="c-thumb" style={{
        width: '100%',
        aspectRatio: c.big ? undefined : '16/10',
        background: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: c.big ? '440px' : undefined,
        height: c.big ? '100%' : undefined,
      }}>
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          color: 'var(--dim3)',
          letterSpacing: '.15em',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1,
        }}>
          {c.placeholder}
        </span>
        <div className="c-overlay" style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(6,6,6,.9) 0%, transparent 50%)',
          opacity: 0,
          transition: 'opacity .35s',
          zIndex: 2,
          display: 'flex',
          alignItems: 'flex-end',
          padding: '24px',
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '.1em',
            color: '#E0BFFF',
            textTransform: 'uppercase',
          }}>
            {c.big ? 'Открыть кейс →' : 'Открыть →'}
          </span>
        </div>
      </div>
      <div style={{
        padding: '24px 28px',
        borderTop: '1px solid var(--dim)',
      }}>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          color: '#E0BFFF',
          letterSpacing: '.2em',
          marginBottom: '8px',
        }}>
          {c.n}
        </div>
        <div style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '15px',
          fontWeight: 700,
          marginBottom: '6px',
        }}>
          {c.title}
        </div>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          color: 'var(--dim3)',
          letterSpacing: '.08em',
        }}>
          {c.meta}
        </div>
      </div>
    </div>
  )
}

export default function Cases() {
  return (
    <section style={{
      padding: '96px 48px',
      borderTop: '1px solid var(--dim)',
      position: 'relative',
      zIndex: 1,
    }} id="cases">
      <div className="reveal sec-header-row" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '64px',
      }}>
        <div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '9px',
            letterSpacing: '.25em',
            color: 'var(--acid)',
            textTransform: 'uppercase',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span>//</span>Портфолио
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(44px,6.5vw,96px)',
            lineHeight: '.95',
          }}>
            КАК ЭТО<br />ВЫГЛЯДИТ
          </h2>
        </div>
        <a href="#" style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          letterSpacing: '.1em',
          color: 'var(--dim3)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'color .2s, gap .2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.gap = '14px' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--dim3)'; e.currentTarget.style.gap = '8px' }}
        >
          Все кейсы →
        </a>
      </div>

      <div className="reveal cases-grid-container" style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '1px',
        background: 'var(--dim)',
      }}>
        {cases.map((c, i) => <CaseCard key={i} c={c} />)}
      </div>
    </section>
  )
}
