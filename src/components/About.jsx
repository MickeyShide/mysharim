import { useCountUp } from '../hooks/useCountUp'
import { BtnSecondary } from './Hero'

const stats = [
  { id: 'cnt1', label: 'Проектов' },
  { id: 'cnt2', label: 'Партнёров' },
  { id: 'cnt3', label: 'Городов' },
  { id: 'cnt4', label: 'Лет в индустрии' },
]

export default function About() {
  useCountUp()

  return (
    <section
      className="px-5 py-14 md:px-12 md:py-24 border-t border-dim grid grid-cols-2 max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-10 items-start relative z-[1]"
      id="about"
    >
      <div
        className="about-manifesto reveal font-manrope text-[clamp(20px,2.5vw,32px)] font-extrabold leading-[1.35] relative"
      >
        Мы — <em>команда</em>, которая делает<br />
        продакшен <em>иначе.</em><br /><br />
        Не сдаём оборудование.<br />
        Мы <span className="text-page-white">строим опыт.</span>
      </div>

      <div className="reveal">
        <div className="font-mono text-[9px] tracking-[.25em] text-acid uppercase mb-[14px] flex items-center gap-[10px]">
          <span>//</span>О нас
        </div>
        <p className="font-manrope text-[13px] font-light text-dim4 leading-[1.85] mb-10">
          «Мы шарим» — это не слоган. Это факт. Мы знаем индустрию изнутри, дружим с лучшими партнёрами и умеем делать так, чтобы мероприятие запоминалось. От небольшого корпоратива до многотысячного фестиваля — процесс один и тот же: чётко, красиво, с ответственностью.
        </p>
        <div className="about-stats grid grid-cols-2 gap-px bg-dim mb-9">
          {stats.map(({ id, label }) => (
            <div key={id} className="bg-page-black px-7 py-6">
              <div id={id} className="font-bebas text-[48px] leading-none text-page-white mb-1">0</div>
              <div className="font-mono text-[9px] tracking-[.12em] text-dim3 uppercase">{label}</div>
            </div>
          ))}
        </div>
        <BtnSecondary href="#cta">Познакомиться →</BtnSecondary>
      </div>
    </section>
  )
}
