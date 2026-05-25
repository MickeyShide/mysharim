const cells = [
  { n: '01 —', h: 'ПОЛНЫЙ ЦИКЛ',        d: 'От концепции и дизайна до монтажа, пусконаладки и live-трансляции. Берём весь процесс на себя.' },
  { n: '02 —', h: 'МЫ ШАРИМ',           d: 'Знаем индустрию изнутри. Партнёрская сеть под любой запрос — оборудование, специалисты, технологии.' },
  { n: '03 —', h: 'С НАМИ НЕ ПРОЕБЁТЕСЬ',d: 'Берём ответственность за результат целиком. Работаем чётко, говорим прямо, делаем красиво.' },
]

export default function UTPStrip() {
  return (
    <div className="reveal grid grid-cols-3 max-[900px]:grid-cols-1 bg-dim gap-px relative z-[1]">
      {cells.map((cell, i) => (
        <div
          key={i}
          className="utp-cell bg-page-black px-5 py-7 md:px-11 md:py-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#0f0f0f]"
        >
          <div className="font-mono text-[9px] text-acid tracking-[.2em] mb-[18px]">{cell.n}</div>
          <div className="font-manrope text-[16px] font-extrabold leading-[1.25] mb-3">{cell.h}</div>
          <div className="font-manrope text-[12px] font-light text-dim3 leading-[1.75]">{cell.d}</div>
        </div>
      ))}
    </div>
  )
}
