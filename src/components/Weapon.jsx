const weapons = [
  {
    glyph: '◈',
    name: 'ВОЛЮМЕТРИЯ',
    desc: 'Объёмный свет и проекция прямо в пространстве. Создаёт ощущение, что визуал существует физически. Людей это взрывает.',
  },
  {
    glyph: '⬡',
    name: '3D-КЕЙСЫ',
    desc: 'Интерактивные инсталляции, где контент живёт внутри физической формы. Для тех, кто хочет сделать что-то, чего не было.',
  },
  {
    glyph: '⟁',
    name: 'РОБОРУКИ',
    desc: 'Промышленные роботизированные манипуляторы в шоу, арте, перформансе. Механика будущего — уже сегодня на вашей площадке.',
  },
]

function WeaponCard({ weapon }) {
  return (
    <div className="weapon-card" style={{
      border: '1px solid var(--dim2)',
      padding: '52px 44px',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'none',
      transition: 'border-color .35s, transform .35s',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#E0BFFF'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--dim2)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <span className="w-glyph" style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '28px',
        color: '#E0BFFF',
        marginBottom: '28px',
        display: 'block',
        transition: 'transform .3s',
      }}>
        {weapon.glyph}
      </span>
      <div style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: '22px',
        fontWeight: 800,
        lineHeight: 1.2,
        marginBottom: '14px',
      }}>
        {weapon.name}
      </div>
      <div style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: '12px',
        fontWeight: 300,
        color: 'var(--dim3)',
        lineHeight: 1.8,
      }}>
        {weapon.desc}
      </div>
      <span style={{
        marginTop: '28px',
        display: 'inline-block',
        fontFamily: "'Space Mono', monospace",
        fontSize: '8px',
        letterSpacing: '.15em',
        color: '#E0BFFF',
        border: '1px solid rgba(224,191,255,.3)',
        padding: '5px 12px',
        textTransform: 'uppercase',
      }}>
        Доступно под запрос
      </span>
    </div>
  )
}

export default function Weapon() {
  return (
    <section style={{
      padding: '96px 48px',
      borderTop: '1px solid var(--dim)',
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
    }} id="weapon">
      <div style={{
        position: 'absolute',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(80px,12vw,160px)',
        letterSpacing: '.05em',
        color: 'rgba(224,191,255,.025)',
        bottom: '32px',
        right: 0,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}>
        ЭКСКЛЮЗИВ
      </div>

      <div className="reveal">
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
          <span>//</span>Эксклюзивное оборудование
        </div>
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(44px,6.5vw,96px)',
          lineHeight: '.95',
        }}>
          ТО, ЧЕГО<br />НЕТ У ДРУГИХ
        </h2>
      </div>

      <div className="reveal weapon-grid-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '20px',
        marginTop: '64px',
      }}>
        {weapons.map((w, i) => <WeaponCard key={i} weapon={w} />)}
      </div>
    </section>
  )
}
