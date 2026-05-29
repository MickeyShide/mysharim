import { BtnPrimary, BtnSecondary } from './Hero'

export default function CTA() {
  return (
    <section
      className="px-5 py-16 md:px-12 md:py-[120px] border-t border-dim text-center relative z-[1] overflow-hidden"
      id="cta"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] pointer-events-none animate-cta-pulse"
        style={{ background: 'radial-gradient(circle,rgba(224,191,255,.06) 0%,transparent 65%)' }}
      />

      {/* <div className="reveal font-mono text-[9px] tracking-[.25em] text-page-white uppercase mb-6">
        // Работаем?
      </div> */}

      <h2 className="reveal font-bebas text-[clamp(64px,11vw,150px)] leading-[.92] mb-5">
        <span className="cta-stroke">ГОТОВ</span>
        РАБОТАТЬ
        <span className="cta-stroke">С НАМИ?</span>
      </h2>

      {/* <p className="reveal font-manrope text-[13px] font-light text-dim3 mb-[52px]">
        Без воды. Отправь бриф — ответим быстро.
      </p> */}

      <div className="reveal flex gap-[14px] justify-center flex-wrap max-[900px]:flex-col max-[900px]:items-center">
        <BtnPrimary href={`https://t.me/wisharim`} className="max-[900px]:!w-[280px]">Отправить бриф</BtnPrimary>
        {/* <BtnSecondary href="#" className="max-[900px]:!w-[280px]">Скачать презентацию</BtnSecondary> */}
        <BtnSecondary href="https://t.me/wisharim" className="max-[900px]:!w-[280px]">Написать в Telegram</BtnSecondary>
      </div>
    </section>
  )
}
