const cases = [
  { n: 'КЕЙС — 01', title: 'Название проекта', meta: 'Фестиваль · LED + Свет + Контент · 2024', placeholder: '[ Главный кейс ]', big: true },
  { n: 'КЕЙС — 02', title: 'Название проекта', meta: 'Корпоратив · Трансляция · 2024',           placeholder: '[ Кейс 02 ]' },
  { n: 'КЕЙС — 03', title: 'Название проекта', meta: 'Концерт · Полный цикл · 2025',             placeholder: '[ Кейс 03 ]' },
]

function CaseCard({ c }) {
  return (
    <div
      className="c-card bg-page-black relative overflow-hidden cursor-none"
      style={{ gridRow: c.big ? '1/3' : undefined }}
    >
      <div
        className="c-thumb w-full bg-[#111] flex items-center justify-center relative overflow-hidden"
        style={{
          aspectRatio: c.big ? undefined : '16/10',
          minHeight: c.big ? '440px' : undefined,
          height: c.big ? '100%' : undefined,
        }}
      >
        <span className="font-mono text-[9px] text-dim3 tracking-[.15em] uppercase relative z-[1]">
          {c.placeholder}
        </span>
        <div className="c-overlay absolute inset-0 bg-gradient-to-t from-[rgba(6,6,6,0.9)] to-transparent opacity-0 transition-opacity duration-[350ms] z-[2] flex items-end p-6">
          <span className="font-mono text-[10px] tracking-[.1em] text-page-white uppercase">
            {c.big ? 'Открыть кейс →' : 'Открыть →'}
          </span>
        </div>
      </div>
      <div className="px-7 py-6 border-t border-dim">
        <div className="font-mono text-[9px] text-page-white tracking-[.2em] mb-2">{c.n}</div>
        <div className="font-manrope text-[15px] font-bold mb-[6px]">{c.title}</div>
        <div className="font-mono text-[9px] text-dim3 tracking-[.08em]">{c.meta}</div>
      </div>
    </div>
  )
}

export default function Cases() {
  return (
    <section
      className="px-5 py-14 md:px-12 md:py-24 border-t border-dim relative z-[1]"
      id="cases"
    >
      <div className="reveal flex justify-between items-end mb-16 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
        <div>
          <div className="font-mono text-[9px] tracking-[.25em] text-acid uppercase mb-[14px] flex items-center gap-[10px]">
            <span>//</span>Портфолио
          </div>
          <h2 className="font-bebas text-[clamp(44px,6.5vw,96px)] leading-[.95]">
            КАК ЭТО<br />ВЫГЛЯДИТ
          </h2>
        </div>
        <a
          href="#"
          className="font-mono text-[10px] tracking-[.1em] text-dim3 no-underline flex items-center gap-2 transition-colors duration-200 hover:text-page-white"
        >
          Все кейсы →
        </a>
      </div>

      <div
        className="reveal grid bg-dim gap-px max-[900px]:grid-cols-1"
        style={{ gridTemplateColumns: '1.5fr 1fr 1fr', gridTemplateRows: 'auto auto' }}
      >
        {cases.map((c, i) => <CaseCard key={i} c={c} />)}
      </div>
    </section>
  )
}
