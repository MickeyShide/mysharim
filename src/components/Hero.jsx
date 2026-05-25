const floatLabels = [
  { cls: 'fl1', text: 'TOUCHDESIGNER ↗',   top: '22%', right: '8%', delay: '0s',   color: 'var(--dim3)', borderColor: 'var(--dim)' },
  { cls: 'fl2', text: '↯ LIVE PRODUCTION', top: '38%', right: '6%', delay: '1.5s', color: 'rgba(200,255,0,.4)', borderColor: 'rgba(200,255,0,.15)' },
  { cls: 'fl3', text: 'LED · SOUND · LIGHT',top: '55%', right: '9%', delay: '3s',   color: 'var(--dim3)', borderColor: 'var(--dim)' },
  { cls: 'fl4', text: 'FULL CYCLE',         top: '72%', right: '7%', delay: '4.5s', color: 'var(--dim3)', borderColor: 'var(--dim)' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-5 pb-12 md:px-12 md:pb-16 z-[1] overflow-hidden">
      {/* Glowing orbs */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] pointer-events-none animate-orb-drift"
        style={{ background: 'radial-gradient(circle,rgba(224,191,255,.06) 0%,transparent 65%)' }}
      />
      <div
        className="absolute bottom-[-30%] left-[-15%] w-[50vw] h-[50vw] pointer-events-none animate-orb-drift-rev"
        style={{ background: 'radial-gradient(circle,rgba(200,159,255,.035) 0%,transparent 65%)' }}
      />

      {/* Floating tech labels */}
      {floatLabels.map(({ cls, text, top, right, delay, color, borderColor }) => (
        <div
          key={cls}
          className="float-label-item absolute font-mono text-[9px] tracking-[.15em] px-[10px] py-[5px] pointer-events-none animate-float-idle max-[900px]:hidden"
          style={{ color, border: `1px solid ${borderColor}`, top, right, animationDelay: delay }}
        >
          {text}
        </div>
      ))}

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-5 md:left-12 hidden md:flex items-center gap-3 font-mono text-[9px] tracking-[.2em] text-dim3 uppercase opacity-0 animate-hero-in"
        style={{ animationDelay: '1s' }}
      >
        <span className="w-10 h-px bg-gradient-to-r from-transparent to-page-white block animate-scroll-pulse" />
        прокрути вниз
      </div>

      {/* Eyebrow */}
      <div
        className="font-mono text-[10px] tracking-[.22em] text-acid uppercase mb-5 opacity-0 animate-hero-in flex items-center gap-3"
        style={{ animationDelay: '.1s' }}
      >
        <span className="w-8 h-px bg-acid block shrink-0" />
        Технический продакшен полного цикла
      </div>

      {/* Title */}
      <h1
        className="font-bebas text-[clamp(72px,13.5vw,196px)] leading-[.88] tracking-[.01em] opacity-0 animate-hero-in"
        style={{ animationDelay: '.25s' }}
      >
        <span className="hero-solid text-page-white block relative" data-text="МЫ">МЫ</span>
        <span className="cta-stroke">ШАРИМ</span>
      </h1>

      {/* Sub row */}
      <div
        className="hero-sub-row mt-9 flex items-end justify-between opacity-0 animate-hero-in max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-7"
        style={{ animationDelay: '.45s' }}
      >
        <p className="font-manrope text-sm font-light leading-[1.85] text-dim4 max-w-[360px]">
          От <strong className="text-page-white font-semibold">идеи и контента</strong> — до пусконаладки<br />
          и live-трансляции. Знаем индустрию изнутри.<br />
          <strong className="text-page-white font-semibold">С нами не проебётесь.</strong>
        </p>
        <div className="hero-btns-col flex flex-col items-end gap-[10px] max-[900px]:items-start max-[900px]:w-full">
          <BtnPrimary href="#cta">Отправить бриф</BtnPrimary>
          <BtnSecondary href="#cases">Смотреть кейсы</BtnSecondary>
          <a
            href="#dept"
            className="font-mono text-[10px] tracking-[.1em] text-dim3 no-underline flex items-center gap-2 transition-colors duration-200 hover:text-page-white"
          >
            Что умеем →
          </a>
        </div>
      </div>
    </section>
  )
}

export function BtnPrimary({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`btn-p font-mono text-[11px] tracking-[.1em] uppercase text-page-black bg-acid border-none px-8 py-[15px] cursor-none no-underline inline-block relative overflow-hidden transition-shadow duration-[250ms] hover:shadow-[0_0_30px_rgba(224,191,255,0.4)] max-[900px]:w-full max-[900px]:text-center max-[900px]:box-border ${className}`}
    >
      {children}
    </a>
  )
}

export function BtnSecondary({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`font-mono text-[11px] tracking-[.1em] uppercase text-page-white bg-transparent border border-dim2 px-8 py-[15px] cursor-none no-underline inline-block transition-all duration-200 hover:border-[rgba(237,234,228,0.5)] hover:bg-dim max-[900px]:w-full max-[900px]:text-center max-[900px]:box-border ${className}`}
    >
      {children}
    </a>
  )
}
