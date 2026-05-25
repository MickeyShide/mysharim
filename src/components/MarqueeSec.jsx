const row1 = ['МЫ ШАРИМ', 'WE SHARE', 'TECH PRODUCTION', 'ПОЛНЫЙ ЦИКЛ']
const row2 = ['СВЕТОДИОДЫ', 'РОБОРУКИ', 'ВОЛЮМЕТРИЯ', 'ИММЕРСИВ', 'TOUCHDESIGNER']

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div
      className="flex gap-14 whitespace-nowrap"
      style={{
        animation: `mq-move 20s linear infinite${reverse ? ' reverse' : ''}`,
        marginTop: reverse ? '12px' : 0,
      }}
    >
      {doubled.map((item, i) => (
        <div
          key={i}
          className="font-bebas text-[13px] tracking-[.22em] text-dim3 shrink-0 flex items-center gap-14 transition-colors duration-300 cursor-default hover:text-page-white"
        >
          {item}
          <span className="w-[3px] h-[3px] rounded-full bg-page-white shrink-0 inline-block" />
        </div>
      ))}
    </div>
  )
}

export default function MarqueeSec() {
  return (
    <div className="border-t border-b border-dim py-[18px] overflow-hidden relative z-[1]">
      <MarqueeRow items={row1} reverse={false} />
      <MarqueeRow items={row2} reverse={true} />
    </div>
  )
}
