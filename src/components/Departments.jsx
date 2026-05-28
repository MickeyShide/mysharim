const depts = [
  {
    n: '— 01',
    name: 'ГЕНЕРАТИВ,\nИНТЕРАКТИВ,\nИММЕРСИВ',
    desc: 'TouchDesigner, нейроарт, data-art, AR-ролики. Делаем контент, который живёт и реагирует.',
    image: '/генератив интерактив иммерсив.png',
    tags: ['TouchDesigner', 'Нейроарт', 'Data art', 'AR', 'Realtime'],
  },
  {
    n: '— 02',
    name: 'LED-ЭКРАНЫ',
    desc: 'Любая форма, размер, формат. Гибкие, прозрачные, наружные, студийные — всё.',
    image: '/LED-ЭКРАНЫ.png',
    tags: ['Любой размер', 'Любая форма', 'Гибкие LED', 'Прозрачные'],
  },
  {
    n: '— 03',
    name: 'СВЕТ,\nЗВУК,\nСЦЕНА',
    desc: 'Полное техническое оснащение площадки: от барьерной сетки до центрального процессора.',
    image: '/СВЕТ звук сцена.png',
    tags: ['Монтаж', 'Пусконаладка', 'Инсталляции', 'Под ключ'],
  },
  {
    n: '— 04',
    name: 'КОНТЕНТ\nИ ДИЗАЙН',
    desc: 'Моушн, 3D-визуализация, видеопродакшен, генеративный контент с нуля под ваш ивент.',
    image: '/КОНТЕНТ и дизайн.png',
    tags: ['Моушн', '3D', 'Видеопродакшен', 'Генератив'],
  },
  {
    n: '— 05',
    name: 'ВИДЕО-\nТРАНСЛЯЦИИ',
    desc: 'Live-стримы любой сложности. Мультикамера, режиссура, реалтайм-графика, онлайн-платформы.',
    image: '/ВИДЕО-трансляции.png',
    tags: ['Live-стрим', 'Мультикамера', 'Режиссура', 'Realtime-графика'],
  },
  {
    n: '— 06',
    name: 'МОНТАЖ\nИ ЗАПУСК',
    desc: 'Приедем, смонтируем, настроим, запустим. Остаёмся на ивенте. Любой масштаб — привычная работа.',
    image: '/монтаж и запуск.png',
    tags: ['Монтаж', 'Техподдержка', 'Любой масштаб', 'Дежурство'],
  },
]

function DeptCard({ dept }) {
  return (
    <div
      className="dept-card group bg-page-black min-h-[300px] relative overflow-hidden cursor-none transition-colors duration-300 hover:bg-[#0c0c0c] focus-visible:bg-[#0c0c0c] outline-none"
      tabIndex={0}
    >
      <img
        src={dept.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:opacity-0 group-hover:scale-105 group-focus-visible:opacity-0 group-focus-visible:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,13,.72)_0%,rgba(7,5,13,.18)_44%,rgba(7,5,13,.62)_100%)] transition-opacity duration-700 group-hover:opacity-0 group-focus-visible:opacity-0" />
      <div className="absolute left-5 right-5 top-8 z-[1] font-manrope text-[19px] font-extrabold leading-[1.25] whitespace-pre-line transition-opacity duration-700 group-hover:opacity-0 group-focus-visible:opacity-0 md:left-10 md:right-10 md:top-11">
        {dept.name}
      </div>
      <div className="relative z-[1] flex h-full min-h-[300px] flex-col justify-center px-5 py-8 opacity-0 translate-y-4 transition-[opacity,transform] duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 md:px-10 md:py-11">
        <div className="font-mono text-[9px] text-dim3 tracking-[.2em] mb-7 relative flex items-center">
          <span className="inline-block w-[5px] h-[5px] rounded-full bg-page-white mr-2 transition-all duration-300 shrink-0 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100" />
          {dept.n}
        </div>
        <div className="font-manrope text-[19px] font-extrabold leading-[1.25] mb-[14px] whitespace-pre-line">
          {dept.name}
        </div>
        <div className="font-manrope text-[12px] font-light text-dim3 leading-[1.7]">
          {dept.desc}
        </div>
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
