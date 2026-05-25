const items = [
  { hi: true, text: 'МЫ ШАРИМ' },
  { text: 'WE SHARE' },
  { text: 'ПОЛНЫЙ ЦИКЛ' },
  { text: 'ТЕХНИЧЕСКИЙ ПРОДАКШЕН' },
  { text: 'LED · СВЕТ · ЗВУК · СЦЕНА' },
  { text: 'ВОЛЮМЕТРИЯ' },
  { text: 'ГЕНЕРАТИВНЫЙ КОНТЕНТ' },
  { hi: true, text: 'МЫ ШАРИМ' },
  { text: 'WE SHARE' },
  { text: 'ПОЛНЫЙ ЦИКЛ' },
  { text: 'ТЕХНИЧЕСКИЙ ПРОДАКШЕН' },
  { text: 'LED · СВЕТ · ЗВУК · СЦЕНА' },
  { text: 'ВОЛЮМЕТРИЯ' },
  { text: 'ГЕНЕРАТИВНЫЙ КОНТЕНТ' },
]

export default function Ticker() {
  return (
    <div className="border-t border-b border-dim py-[14px] overflow-hidden relative z-[1] bg-page-black">
      <div className="flex gap-0 animate-ticker-move whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[11px] tracking-[.18em] shrink-0 flex items-center px-8 uppercase ${item.hi ? 'text-page-white' : 'text-dim3'}`}
          >
            {i > 0 && !item.hi && <span className="text-dim2 mx-2">·</span>}
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
