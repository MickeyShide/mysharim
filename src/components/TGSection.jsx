import { BtnPrimary } from './Hero'

const messages = [
  { text: 'Сегодня отгрузили LED-экран 12×4 метра на площадку. Завтра монтаж — покажем процесс 🔧', time: 'сегодня, 14:32' },
  { text: 'Генеративный контент для фестиваля готов. 40 минут процедурной анимации в реальном времени через TD.', time: 'вчера, 21:15' },
  { text: 'Роборука прошла тестовый прогон. Получилось 🤖✨', time: '2 дня назад' },
]

export default function TGSection() {
  return (
    <section className="tg-grid" style={{
      padding: '96px 48px',
      borderTop: '1px solid var(--dim)',
      position: 'relative',
      zIndex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background text */}
      <div style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(100px,18vw,240px)',
        color: 'rgba(224,191,255,.025)',
        letterSpacing: '.05em',
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>
        TG
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
          <span>//</span>Телеграм-канал
        </div>
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(56px,8vw,110px)',
          lineHeight: '.95',
          marginBottom: '24px',
        }}>
          МЫ В<br />ТЕЛЕ&shy;ГРАМЕ
        </h2>
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '13px',
          fontWeight: 300,
          color: 'var(--dim3)',
          lineHeight: 1.85,
          marginBottom: '36px',
          maxWidth: '380px',
        }}>
          Кейсы, закулисье, оборудование и процессы — в реальном времени. Подпишись, чтобы быть в теме.
        </p>
        <BtnPrimary href="#">→ Подписаться</BtnPrimary>
      </div>

      <div className="reveal">
        <div style={{
          border: '1px solid var(--dim2)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div style={{
            padding: '18px 20px',
            borderBottom: '1px solid var(--dim)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(15,15,15,.5)',
          }}>
            <div style={{
              width: '36px', height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#E0BFFF,#C89FFF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              color: '#07050d',
              fontWeight: 700,
              flexShrink: 0,
            }}>
              WS
            </div>
            <div>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 700 }}>МЫ ШАРИМ</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'var(--dim3)', letterSpacing: '.08em' }}>TECH PRODUCTION CHANNEL</div>
            </div>
          </div>
          <div style={{ padding: '16px' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,.04)',
                borderRadius: '2px',
                padding: '12px 14px',
                marginBottom: i < messages.length - 1 ? '8px' : 0,
                fontFamily: "'Manrope', sans-serif",
                fontSize: '11px',
                color: 'var(--dim4)',
                lineHeight: 1.6,
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '5px', height: '5px',
                  borderRadius: '50%',
                  background: '#E0BFFF',
                  marginRight: '6px',
                  verticalAlign: 'middle',
                }} />
                {msg.text}
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '8px',
                  color: 'var(--dim3)',
                  textAlign: 'right',
                  marginTop: '4px',
                }}>
                  {msg.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
