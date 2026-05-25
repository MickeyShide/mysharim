export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--dim)',
      padding: '36px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '12px',
        letterSpacing: '.15em',
        color: 'var(--white)',
      }}>
        <span style={{ color: 'var(--acid)' }}>//</span>SHARIM
      </div>

      <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }} className="f-links-row">
        {[
          { href: '#dept', label: 'Услуги' },
          { href: '#weapon', label: 'Оборудование' },
          { href: '#cases', label: 'Кейсы' },
          { href: '#about', label: 'О нас' },
          { href: '#cta', label: 'Контакты' },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '9px',
              color: 'var(--dim3)',
              textDecoration: 'none',
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              transition: 'color .2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--dim3)'}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ textAlign: 'right' }} className="f-right-col">
        <a href="mailto:hello@mysharim.ru" style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          color: 'var(--dim3)',
          letterSpacing: '.05em',
          textDecoration: 'none',
          transition: 'color .2s',
          display: 'block',
          marginBottom: '4px',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#E0BFFF'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--dim3)'}
        >
          hello@mysharim.ru
        </a>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          color: 'rgba(237,234,228,.18)',
          letterSpacing: '.08em',
        }}>
          © 2025 МЫ ШАРИМ — WE SHARE
        </div>
      </div>
    </footer>
  )
}
