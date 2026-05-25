const weapons = [
  {
    glyph: '◈',
    name: 'ВОЛЮМЕТРИЯ',
    desc: 'Объёмный свет и проекция прямо в пространстве. Создаёт ощущение, что визуал существует физически. Людей это взрывает.',
  },
  {
    glyph: '⬡',
    name: '3D-КЕЙСЫ',
    desc: 'Интерактивные инсталляции, где контент живёт внутри физической формы. Для тех, кто хочет сделать что-то, чего не было.',
  },
  {
    glyph: '⟁',
    name: 'РОБОРУКИ',
    desc: 'Промышленные роботизированные манипуляторы в шоу, арте, перформансе. Механика будущего — уже сегодня на вашей площадке.',
  },
]

function WeaponCard({ weapon }) {
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
      <span className="mt-7 inline-block font-mono text-[8px] tracking-[.15em] text-page-white border border-[rgba(224,191,255,0.3)] px-3 py-[5px] uppercase">
        Доступно под запрос
      </span>
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
        <div className="font-mono text-[9px] tracking-[.25em] text-acid uppercase mb-[14px] flex items-center gap-[10px]">
          <span>//</span>Эксклюзивное оборудование
        </div>
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
