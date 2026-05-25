export default function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 48px',
        background: 'rgba(6,6,6,.55)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--dim)',
      }}
    >
      <a href="#" style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '12px',
        letterSpacing: '.18em',
        color: 'var(--white)',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}>
        <span style={{ color: 'var(--acid)', fontSize: '16px' }}>//</span>
        SHARIM
        <span style={{
          fontSize: '8px',
          letterSpacing: '.1em',
          color: '#E0BFFF',
          border: '1px solid rgba(224,191,255,.3)',
          padding: '2px 6px',
          marginLeft: '4px',
          animation: 'badge-blink 3s ease-in-out infinite',
        }}>
          LIVE
        </span>
      </a>

      <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }} className="nav-links">
        {[
          { href: '#dept', label: 'Услуги' },
          { href: '#weapon', label: 'Оборудование' },
          { href: '#cases', label: 'Кейсы' },
          { href: '#about', label: 'О нас' },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="nav-link-item">{label}</a>
          </li>
        ))}
      </ul>

      <a href="#cta" style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px',
        letterSpacing: '.1em',
        color: '#07050d',
        background: '#E0BFFF',
        border: 'none',
        padding: '10px 22px',
        cursor: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none',
        transition: 'box-shadow .2s',
      }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 24px rgba(224,191,255,.5)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
      >
        Отправить бриф
      </a>
    </nav>
  )
}
