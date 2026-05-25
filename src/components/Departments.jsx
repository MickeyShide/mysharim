const depts = [
  {
    n: '— 01',
    name: 'ГЕНЕРАТИВ,\nИНТЕРАКТИВ,\nИММЕРСИВ',
    desc: 'TouchDesigner, нейроарт, data-art, AR-ролики. Делаем контент, который живёт и реагирует.',
    tags: ['TouchDesigner', 'Нейроарт', 'Data art', 'AR', 'Realtime'],
  },
  {
    n: '— 02',
    name: 'LED-ЭКРАНЫ',
    desc: 'Любая форма, размер, формат. Гибкие, прозрачные, наружные, студийные — всё.',
    tags: ['Любой размер', 'Любая форма', 'Гибкие LED', 'Прозрачные'],
  },
  {
    n: '— 03',
    name: 'СВЕТ,\nЗВУК,\nСЦЕНА',
    desc: 'Полное техническое оснащение площадки: от барьерной сетки до центрального процессора.',
    tags: ['Монтаж', 'Пусконаладка', 'Инсталляции', 'Под ключ'],
  },
  {
    n: '— 04',
    name: 'КОНТЕНТ\nИ ДИЗАЙН',
    desc: 'Моушн, 3D-визуализация, видеопродакшен, генеративный контент с нуля под ваш ивент.',
    tags: ['Моушн', '3D', 'Видеопродакшен', 'Генератив'],
  },
  {
    n: '— 05',
    name: 'ВИДЕО-\nТРАНСЛЯЦИИ',
    desc: 'Live-стримы любой сложности. Мультикамера, режиссура, реалтайм-графика, онлайн-платформы.',
    tags: ['Live-стрим', 'Мультикамера', 'Режиссура', 'Realtime-графика'],
  },
  {
    n: '— 06',
    name: 'МОНТАЖ\nИ ЗАПУСК',
    desc: 'Приедем, смонтируем, настроим, запустим. Остаёмся на ивенте. Любой масштаб — привычная работа.',
    tags: ['Монтаж', 'Техподдержка', 'Любой масштаб', 'Дежурство'],
  },
]

function DeptCard({ dept }) {
  return (
    <div className="dept-card" style={{
      background: 'var(--black)',
      padding: '44px 40px',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'none',
      transition: 'background .3s',
    }}
      onMouseEnter={e => e.currentTarget.style.background = '#0c0c0c'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
    >
      <div className="d-num" style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '9px',
        color: 'var(--dim3)',
        letterSpacing: '.2em',
        marginBottom: '28px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}>
        <span style={{
          display: 'inline-block',
          width: '5px', height: '5px',
          borderRadius: '50%',
          background: '#E0BFFF',
          marginRight: '8px',
          opacity: 0,
          transform: 'scale(0)',
          transition: 'opacity .3s, transform .3s',
          flexShrink: 0,
        }} className="d-dot" />
        {dept.n}
      </div>
      <div style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: '19px',
        fontWeight: 800,
        lineHeight: 1.25,
        marginBottom: '14px',
        whiteSpace: 'pre-line',
      }}>
        {dept.name}
      </div>
      <div className="d-desc" style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: '12px',
        fontWeight: 300,
        color: 'var(--dim3)',
        lineHeight: 1.7,
        maxHeight: 0,
        overflow: 'hidden',
        transition: 'max-height .4s ease, opacity .4s',
        opacity: 0,
      }}>
        {dept.desc}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '18px' }}>
        {dept.tags.map(tag => (
          <span key={tag} className="tag" style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '8px',
            letterSpacing: '.09em',
            color: 'var(--dim3)',
            border: '1px solid var(--dim2)',
            padding: '3px 9px',
            textTransform: 'uppercase',
            transition: 'border-color .2s, color .2s',
          }}>
            {tag}
          </span>
        ))}
      </div>
      <div className="d-arrow" style={{
        position: 'absolute',
        bottom: '28px', right: '28px',
        fontSize: '18px',
        color: 'var(--dim2)',
        transition: 'color .2s, transform .25s',
      }}>
        ↗
      </div>
    </div>
  )
}

export default function Departments() {
  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '96px 48px' }} id="dept">
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
            <span>//</span>Что мы делаем
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(44px,6.5vw,96px)',
            lineHeight: '.95',
          }}>
            НАШИ<br />ДЕPART&shy;МЕНТЫ
          </h2>
        </div>
        <a href="#cta" style={{
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
          Обсудить проект →
        </a>
      </div>

      <div className="reveal dept-grid-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        background: 'var(--dim)',
        gap: '1px',
      }}>
        {depts.map((dept, i) => <DeptCard key={i} dept={dept} />)}
      </div>
    </section>
  )
}
