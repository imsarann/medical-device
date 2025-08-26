import { useState } from 'react'
function Anchor({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="cursor-pointer text-slate-600 hover:text-slate-900">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#device-info', label: 'Device Info' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-semibold text-slate-900 tracking-tight">Team X</div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map(item => (
            <Anchor key={item.href} href={item.href}>{item.label}</Anchor>
          ))}
        </nav>

        <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100" onClick={() => setOpen(v => !v)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3.75 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {navItems.map(item => (
              <Anchor key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span className="block py-2">{item.label}</span>
              </Anchor>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}


