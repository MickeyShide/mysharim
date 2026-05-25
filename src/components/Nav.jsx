export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between py-4 px-5 md:py-5 md:px-12 bg-[rgba(6,6,6,0.55)] backdrop-blur-[20px] border-b border-dim">
      <a
        href="#"
        className="font-mono text-[12px] tracking-[.18em] text-page-white no-underline flex items-center gap-[6px]"
      >
        <img src="/Logo_alpha.png" alt="Logo" className="h-4" />
        //sharim
      </a>

      <ul className="nav-links flex gap-7 list-none">
        {[
          { href: '#dept',   label: 'Услуги' },
          { href: '#weapon', label: 'Оборудование' },
          { href: '#cases',  label: 'Кейсы' },
          { href: '#about',  label: 'О нас' },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="nav-link-item">{label}</a>
          </li>
        ))}
      </ul>

      <a
        href="#cta"
        className="font-mono text-[10px] tracking-[.1em] text-page-black bg-acid border-none px-[22px] py-[10px] cursor-none uppercase no-underline transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(224,191,255,0.5)]"
      >
        Отправить бриф
      </a>
    </nav>
  )
}
