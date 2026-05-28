const weapons = [
  {
    glyph: '◈',
    name: 'ВОЛЮМЕТРИЯ',
    desc: 'Объёмный свет и проекция прямо в пространстве. Создаёт ощущение, что визуал существует физически. Людей это взрывает.',
    image: '/волюметрия.png',
  },
  {
    glyph: '⬡',
    name: '3D-КЕЙСЫ',
    desc: 'Интерактивные инсталляции, где контент живёт внутри физической формы. Для тех, кто хочет сделать что-то, чего не было.',
    image: '/3д-кейсы.png',
  },
  {
    glyph: '⟁',
    name: 'РОБОРУКИ',
    desc: 'Промышленные роботизированные манипуляторы в шоу, арте, перформансе. Механика будущего — уже сегодня на вашей площадке.',
    image: '/роборуки.png',
  },
]

function WeaponCard({ weapon }) {
  if (weapon.image) {
    return (
      <div
        className="weapon-card group border border-dim2 min-h-[320px] relative overflow-hidden cursor-none transition-[border-color,transform] duration-[350ms] hover:border-page-white hover:-translate-y-1 focus-visible:border-page-white focus-visible:-translate-y-1 outline-none"
        tabIndex={0}
      >
        <img
          src={weapon.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:opacity-0 group-hover:scale-105 group-focus-visible:opacity-0 group-focus-visible:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,13,.72)_0%,rgba(7,5,13,.18)_42%,rgba(7,5,13,.55)_100%)] transition-opacity duration-700 group-hover:opacity-0 group-focus-visible:opacity-0" />
        <div className="absolute left-6 right-6 top-8 md:left-11 md:right-11 md:top-[52px] font-manrope text-[22px] font-extrabold leading-[1.2] z-[1] transition-opacity duration-700 group-hover:opacity-0 group-focus-visible:opacity-0">
          {weapon.name}
        </div>
        <div className="relative z-[1] flex h-full min-h-[320px] flex-col justify-center px-6 py-10 opacity-0 translate-y-4 transition-[opacity,transform] duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 md:px-11 md:py-[52px]">
          <span className="w-glyph font-mono text-[28px] text-page-white mb-7 block transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110 group-focus-visible:rotate-[15deg] group-focus-visible:scale-110">
            {weapon.glyph}
          </span>
          <div className="font-manrope text-[22px] font-extrabold leading-[1.2] mb-[14px]">
            {weapon.name}
          </div>
          <div className="font-manrope text-[12px] font-light text-dim3 leading-[1.8]">
            {weapon.desc}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="weapon-card border border-dim2 px-6 py-10 md:px-11 md:py-[52px] relative overflow-hidden cursor-none transition-[border-color,transform] duration-[350ms] hover:border-page-white hover:-translate-y-1">
      <span className="w-glyph font-mono text-[28px] text-page-white mb-7 block transition-transform duration-300 hover:rotate-[15deg] hover:scale-110">
        {weapon.glyph}
      </span>
      <div className="font-manrope text-[22px] font-extrabold leading-[1.2] mb-[14px]">
        {weapon.name}
      </div>
      <div className="font-manrope text-[12px] font-light text-dim3 leading-[1.8]">
        {weapon.desc}
      </div>
      {/* <span className="mt-7 inline-block font-mono text-[8px] tracking-[.15em] text-page-white border border-[rgba(224,191,255,0.3)] px-3 py-[5px] uppercase">
        Доступно под запрос
      </span> */}
    </div>
  )
}

export default function Weapon() {
  return (
    <section
      className="px-5 py-14 md:px-12 md:py-24 border-t border-dim relative z-[1] overflow-hidden"
      id="weapon"
    >
      <div
        className="absolute font-bebas text-[clamp(80px,12vw,160px)] tracking-[.05em] bottom-8 right-0 pointer-events-none whitespace-nowrap select-none"
        style={{ color: 'rgba(224,191,255,.025)' }}
      >
        ЭКСКЛЮЗИВ
      </div>

      <div className="reveal">
        {/* <div className="font-mono text-[9px] tracking-[.25em] text-acid uppercase mb-[14px] flex items-center gap-[10px]">
          <span>//</span>Эксклюзивное оборудование
        </div> */}
        <h2 className="font-bebas text-[clamp(44px,6.5vw,96px)] leading-[.95]">
          ТО, ЧЕГО<br />НЕТ У ДРУГИХ
        </h2>
      </div>

      <div className="reveal grid grid-cols-3 max-[900px]:grid-cols-1 gap-5 mt-16">
        {weapons.map((w, i) => <WeaponCard key={i} weapon={w} />)}
      </div>
    </section>
  )
}
