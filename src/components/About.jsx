import { useCountUp } from '../hooks/useCountUp'
import { BtnSecondary } from './Hero'

export default function About() {
  useCountUp()

  return (
    <section className="about-grid" style={{
      padding: '96px 48px',
      borderTop: '1px solid var(--dim)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'start',
      position: 'relative',
      zIndex: 1,
    }} id="about">
      <div className="about-manifesto reveal" style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: 'clamp(20px,2.5vw,32px)',
        fontWeight: 800,
        lineHeight: 1.35,
        position: 'relative',
      }}>
        Мы — <em>команда</em>, которая делает<br />
        продакшен <em>иначе.</em><br /><br />
        Не сдаём оборудование.<br />
        Мы <span style={{ color: '#E0BFFF' }}>строим опыт.</span>
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
          <span>//</span>О нас
        </div>
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '13px',
          fontWeight: 300,
          color: 'var(--dim4)',
          lineHeight: 1.85,
          marginBottom: '40px',
        }}>
          «Мы шарим» — это не слоган. Это факт. Мы знаем индустрию изнутри, дружим с лучшими партнёрами и умеем делать так, чтобы мероприятие запоминалось. От небольшого корпоратива до многотысячного фестиваля — процесс один и тот же: чётко, красиво, с ответственностью.
        </p>
        <div className="about-stats" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'var(--dim)',
          marginBottom: '36px',
        }}>
          {[
            { id: 'cnt1', label: 'Проектов' },
            { id: 'cnt2', label: 'Партнёров' },
            { id: 'cnt3', label: 'Городов' },
            { id: 'cnt4', label: 'Лет в индустрии' },
          ].map(({ id, label }) => (
            <div key={id} style={{
              background: 'var(--black)',
              padding: '24px 28px',
            }}>
              <div id={id} style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '48px',
                lineHeight: 1,
                color: '#E0BFFF',
                marginBottom: '4px',
              }}>
                0
              </div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                letterSpacing: '.12em',
                color: 'var(--dim3)',
                textTransform: 'uppercase',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
        <BtnSecondary href="#cta">Познакомиться →</BtnSecondary>
      </div>
    </section>
  )
}
