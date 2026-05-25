const navLinks = [
  { href: '#dept',                    label: 'Услуги' },
  { href: '#weapon',                  label: 'Оборудование' },
  { href: '#cases',                   label: 'Кейсы' },
  { href: '#about',                   label: 'О нас' },
  { href: '#cta',                     label: 'Контакты' },
  { href: 'https://t.me/weshareem',   label: 'Telegram' },
]

export default function Footer() {
  return (
    <footer className="border-t border-dim px-5 py-7 md:px-12 md:py-9 flex justify-between items-center relative z-[1] max-[900px]:flex-col max-[900px]:gap-6 max-[900px]:text-center">
      <div className="font-mono text-[12px] tracking-[.15em] text-page-white">
        <span className="text-acid">//</span>SHARIM
      </div>

      <ul className="flex gap-7 list-none flex-wrap max-[900px]:justify-center">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="font-mono text-[9px] text-dim3 no-underline tracking-[.1em] uppercase transition-colors duration-200 hover:text-page-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="text-right max-[900px]:text-center">
        <a
          href="mailto:hello@mysharim.ru"
          className="font-mono text-[10px] text-dim3 tracking-[.05em] no-underline block mb-1 transition-colors duration-200 hover:text-page-white"
        >
          hello@mysharim.ru
        </a>
        <div className="font-mono text-[9px] tracking-[.08em]" style={{ color: 'rgba(237,234,228,.18)' }}>
          © 2025 МЫ ШАРИМ — WE SHARE
        </div>
      </div>
    </footer>
  )
}
