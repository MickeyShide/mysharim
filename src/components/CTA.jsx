import { BtnPrimary, BtnSecondary } from './Hero'

export default function CTA() {
  return (
    <section style={{
      padding: '120px 48px',
      borderTop: '1px solid var(--dim)',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
    }} id="cta">
      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '80vw', height: '80vw',
        maxWidth: '700px', maxHeight: '700px',
        background: 'radial-gradient(circle,rgba(224,191,255,.06) 0%,transparent 65%)',
        pointerEvents: 'none',
        animation: 'cta-pulse 5s ease-in-out infinite',
      }} />

      <div className="reveal" style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '9px',
        letterSpacing: '.25em',
        color: '#E0BFFF',
        textTransform: 'uppercase',
        marginBottom: '24px',
      }}>
        // Работаем?
      </div>

      <h2 className="reveal" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(64px,11vw,150px)',
        lineHeight: '.92',
        marginBottom: '20px',
      }}>
        <span style={{
          WebkitTextStroke: '1.5px rgba(237,234,228,.2)',
          color: 'transparent',
          display: 'block',
        }}>
          ГОТОВ
        </span>
        РАБОТАТЬ
        <span style={{
          WebkitTextStroke: '1.5px rgba(237,234,228,.2)',
          color: 'transparent',
          display: 'block',
        }}>
          С НАМИ?
        </span>
      </h2>

      <p className="reveal" style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: '13px',
        fontWeight: 300,
        color: 'var(--dim3)',
        marginBottom: '52px',
      }}>
        Без воды. Отправь бриф — ответим быстро.
      </p>

      <div className="reveal cta-btns-row" style={{
        display: 'flex',
        gap: '14px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <BtnPrimary href="#">Отправить бриф</BtnPrimary>
        <BtnSecondary href="#">Скачать презентацию</BtnSecondary>
        <BtnSecondary href="https://t.me/weshareem">Написать в Telegram</BtnSecondary>
      </div>
    </section>
  )
}
