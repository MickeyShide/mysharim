const depts = [
  {
    n: '— 01',
    name: 'ГЕНЕРАТИВ,\nИНТЕРАКТИВ,\nИММЕРСИВ',
    desc: 'TouchDesigner, нейроарт, data-art, AR-ролики. Делаем контент, который живёт и реагирует.',
    tags: ['TouchDesigner', 'Нейроарт', 'Data art', 'AR', 'Realtime'],
  },
  {
    n: '— 02',
    name: 'LED-ЭКРАНЫ',
    desc: 'Любая форма, размер, формат. Гибкие, прозрачные, наружные, студийные — всё.',
    tags: ['Любой размер', 'Любая форма', 'Гибкие LED', 'Прозрачные'],
  },
  {
    n: '— 03',
    name: 'СВЕТ,\nЗВУК,\nСЦЕНА',
    desc: 'Полное техническое оснащение площадки: от барьерной сетки до центрального процессора.',
    tags: ['Монтаж', 'Пусконаладка', 'Инсталляции', 'Под ключ'],
  },
  {
    n: '— 04',
    name: 'КОНТЕНТ\nИ ДИЗАЙН',
    desc: 'Моушн, 3D-визуализация, видеопродакшен, генеративный контент с нуля под ваш ивент.',
    tags: ['Моушн', '3D', 'Видеопродакшен', 'Генератив'],
  },
  {
    n: '— 05',
    name: 'ВИДЕО-\nТРАНСЛЯЦИИ',
    desc: 'Live-стримы любой сложности. Мультикамера, режиссура, реалтайм-графика, онлайн-платформы.',
    tags: ['Live-стрим', 'Мультикамера', 'Режиссура', 'Realtime-графика'],
  },
  {
    n: '— 06',
    name: 'МОНТАЖ\nИ ЗАПУСК',
    desc: 'Приедем, смонтируем, настроим, запустим. Остаёмся на ивенте. Любой масштаб — привычная работа.',
    tags: ['Монтаж', 'Техподдержка', 'Любой масштаб', 'Дежурство'],
  },
]

function DeptCard({ dept }) {
  return (
    <div className="dept-card group bg-page-black px-5 py-8 md:px-10 md:py-11 relative overflow-hidden cursor-none transition-colors duration-300 hover:bg-[#0c0c0c]">
      <div className="font-mono text-[9px] text-dim3 tracking-[.2em] mb-7 relative flex items-center">
        <span className="inline-block w-[5px] h-[5px] rounded-full bg-page-white mr-2 opacity-0 scale-0 transition-all duration-300 shrink-0 group-hover:opacity-100 group-hover:scale-100" />
        {dept.n}
      </div>
      <div className="font-manrope text-[19px] font-extrabold leading-[1.25] mb-[14px] whitespace-pre-line">
        {dept.name}
      </div>
      <div className="font-manrope text-[12px] font-light text-dim3 leading-[1.7] max-h-0 overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-[ease] opacity-0 group-hover:max-h-[80px] group-hover:opacity-100">
        {dept.desc}
      </div>
      {/* <div className="flex flex-wrap gap-[5px] mt-[18px]">
        {dept.tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-[8px] tracking-[.09em] text-dim3 border border-dim2 px-[9px] py-[3px] uppercase transition-all duration-200 group-hover:border-[rgba(224,191,255,0.25)] group-hover:text-[rgba(224,191,255,0.6)]"
          >
            {tag}
          </span>
        ))}
      </div> */}
      {/* <div className="absolute bottom-7 right-7 text-[18px] text-dim2 transition-all duration-[250ms] group-hover:text-page-white group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </div> */}
    </div>
  )
}

export default function Departments() {
  return (
    <section className="relative z-[1] pt-14 md:pt-24" id="dept">
      <div className="reveal flex justify-between items-end mb-10 md:mb-16 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4 px-5 md:px-12">
        <div>
          {/* <div className="font-mono text-[9px] tracking-[.25em] text-acid uppercase mb-[14px] flex items-center gap-[10px]">
            <span>//</span>Что мы делаем
          </div> */}
          <h2 className="font-bebas text-[clamp(44px,6.5vw,96px)] leading-[.95]">
            НАШИ<br />ДЕPART&shy;МЕНТЫ
          </h2>
        </div>
        {/* <a
          href="#cta"
          className="font-mono text-[10px] tracking-[.1em] text-dim3 no-underline flex items-center gap-2 transition-colors duration-200 hover:text-page-white"
        >
          Обсудить проект →
        </a> */}
      </div>

      <div className="reveal grid grid-cols-3 max-[900px]:grid-cols-1 bg-dim gap-px">
        {depts.map((dept, i) => <DeptCard key={i} dept={dept} />)}
      </div>
    </section>
  )
}
