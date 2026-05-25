export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 48px 64px',
      zIndex: 1,
      overflow: 'hidden',
    }}>
      {/* Glowing orbs */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle,rgba(224,191,255,.06) 0%,transparent 65%)',
        pointerEvents: 'none',
        animation: 'orb-drift 8s ease-in-out infinite alternate',
      }} />
      <div style={{
        position: 'absolute', bottom: '-30%', left: '-15%',
        width: '50vw', height: '50vw',
        background: 'radial-gradient(circle,rgba(200,159,255,.035) 0%,transparent 65%)',
        pointerEvents: 'none',
        animation: 'orb-drift 11s ease-in-out infinite alternate-reverse',
      }} />

      {/* Floating tech labels */}
      {[
        { cls: 'fl1', text: 'TOUCHDESIGNER ↗', top: '22%', right: '8%', delay: '0s', color: 'var(--dim3)', borderColor: 'var(--dim)' },
        { cls: 'fl2', text: '↯ LIVE PRODUCTION', top: '38%', right: '6%', delay: '1.5s', color: 'rgba(200,255,0,.4)', borderColor: 'rgba(200,255,0,.15)' },
        { cls: 'fl3', text: 'LED · SOUND · LIGHT', top: '55%', right: '9%', delay: '3s', color: 'var(--dim3)', borderColor: 'var(--dim)' },
        { cls: 'fl4', text: 'FULL CYCLE', top: '72%', right: '7%', delay: '4.5s', color: 'var(--dim3)', borderColor: 'var(--dim)' },
      ].map(({ cls, text, top, right, delay, color, borderColor }) => (
        <div key={cls} style={{
          position: 'absolute',
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          letterSpacing: '.15em',
          color,
          border: `1px solid ${borderColor}`,
          padding: '5px 10px',
          pointerEvents: 'none',
          animation: `float-idle 6s ease-in-out infinite ${delay}`,
          top, right,
        }} className="float-label-item">
          {text}
        </div>
      ))}

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '48px',
        display: 'flex', alignItems: 'center', gap: '12px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '9px',
        letterSpacing: '.2em',
        color: 'var(--dim3)',
        textTransform: 'uppercase',
        opacity: 0,
        animation: 'hero-in 1s ease 1s forwards',
      }}>
        <span style={{
          width: '40px', height: '1px',
          background: 'linear-gradient(to right, transparent, #E0BFFF)',
          animation: 'scroll-pulse 2s ease-in-out infinite',
          display: 'block',
        }} />
        прокрути вниз
      </div>

      {/* Eyebrow */}
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px',
        letterSpacing: '.22em',
        color: 'var(--acid)',
        textTransform: 'uppercase',
        marginBottom: '20px',
        opacity: 0,
        animation: 'hero-in .9s ease .1s forwards',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <span style={{ width: '32px', height: '1px', background: 'var(--acid)', display: 'block', flexShrink: 0 }} />
        Технический продакшен полного цикла
      </div>

      {/* Title */}
      <h1 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(72px,13.5vw,196px)',
        lineHeight: '.88',
        letterSpacing: '.01em',
        opacity: 0,
        animation: 'hero-in .9s ease .25s forwards',
      }}>
        <span
          className="hero-solid"
          data-text="МЫ"
          style={{
            color: 'var(--white)',
            display: 'block',
            position: 'relative',
          }}
        >
          МЫ
        </span>
        <span style={{
          WebkitTextStroke: '1.5px rgba(237,234,228,.22)',
          color: 'transparent',
          display: 'block',
        }}>
          ШАРИМ
        </span>
      </h1>

      {/* Sub row */}
      <div className="hero-sub-row" style={{
        marginTop: '36px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        opacity: 0,
        animation: 'hero-in .9s ease .45s forwards',
      }}>
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '14px',
          fontWeight: 300,
          lineHeight: 1.85,
          color: 'var(--dim4)',
          maxWidth: '360px',
        }}>
          От <strong style={{ color: 'var(--white)', fontWeight: 600 }}>идеи и контента</strong> — до пусконаладки<br />
          и live-трансляции. Знаем индустрию изнутри.<br />
          <strong style={{ color: 'var(--white)', fontWeight: 600 }}>С нами не проебётесь.</strong>
        </p>
        <div className="hero-btns-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
          <BtnPrimary href="#cta">Отправить бриф</BtnPrimary>
          <BtnSecondary href="#cases">Смотреть кейсы</BtnSecondary>
          <a href="#dept" style={{
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
            Что умеем →
          </a>
        </div>
      </div>
    </section>
  )
}

export function BtnPrimary({ href, children, style = {} }) {
  return (
    <a href={href} className="btn-p" style={{
      fontFamily: "'Space Mono', monospace",
      fontSize: '11px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: '#07050d',
      background: '#E0BFFF',
      border: 'none',
      padding: '15px 32px',
      cursor: 'none',
      textDecoration: 'none',
      display: 'inline-block',
      position: 'relative',
      overflow: 'hidden',
      transition: 'box-shadow .25s',
      ...style,
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(224,191,255,.4)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      {children}
    </a>
  )
}

export function BtnSecondary({ href, children, style = {} }) {
  return (
    <a href={href} style={{
      fontFamily: "'Space Mono', monospace",
      fontSize: '11px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--white)',
      background: 'transparent',
      border: '1px solid var(--dim2)',
      padding: '15px 32px',
      cursor: 'none',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'border-color .2s, background .2s',
      ...style,
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(237,234,228,.5)'
        e.currentTarget.style.background = 'var(--dim)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--dim2)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {children}
    </a>
  )
}
