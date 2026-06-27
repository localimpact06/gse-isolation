'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/realisations/', label: 'Réalisations' },
  { href: '/solutions/', label: 'Solutions' },
  { href: '/aides-renovation-energetique/', label: 'Aides financières' },
  { href: '/a-propos/', label: 'À propos' },
  { href: '/contact/', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="/" aria-label="GSE Isolation - Accueil" className="flex items-center">
          <Logo light />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] uppercase tracking-[0.12em] text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/contact/"
            className="bg-green hover:bg-green-dark transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.1em] px-6 py-3 rounded-full"
          >
            Demander un devis
          </a>
        </div>

        <button
          aria-label="Ouvrir le menu"
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ink overflow-hidden"
          >
            <nav className="flex flex-col px-6 pb-8 gap-5">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white text-base uppercase tracking-wide py-1"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/contact/"
                className="mt-3 bg-green text-white text-center text-[13px] font-semibold uppercase tracking-[0.1em] px-6 py-3 rounded-full"
              >
                Demander un devis
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? '#fff' : '#121212'
  const sub = light ? '#bbb' : '#666'
  return (
    <svg viewBox="0 0 240 110" width="138" height="63" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,8 55,55 145,55" fill={light ? '#888' : '#3a3a3a'} />
      <polygon points="100,16 65,52 135,52" fill={light ? '#121212' : '#fff'} />
      <rect x="92" y="28" width="16" height="13" rx="1.5" fill={light ? '#121212' : '#fff'} stroke={light ? '#888' : '#3a3a3a'} strokeWidth="2" />
      <line x1="100" y1="28" x2="100" y2="41" stroke={light ? '#888' : '#3a3a3a'} strokeWidth="1.5" />
      <line x1="92" y1="34.5" x2="108" y2="34.5" stroke={light ? '#888' : '#3a3a3a'} strokeWidth="1.5" />
      <text x="6" y="100" fontFamily="Arial" fontWeight="900" fontSize="56" fill={ink} letterSpacing="-2">G</text>
      <text x="68" y="100" fontFamily="Arial" fontWeight="900" fontSize="56" fill={ink} letterSpacing="-2">S</text>
      <text x="130" y="100" fontFamily="Arial" fontWeight="900" fontSize="56" fill={ink} letterSpacing="-2">E</text>
      <line x1="58" y1="100" x2="118" y2="14" stroke="#3FA66B" strokeWidth="7" strokeLinecap="round" />
      <text x="20" y="95" fontFamily="Arial" fontWeight="400" fontSize="11" fill={sub} letterSpacing="6">ISOLATION</text>
    </svg>
  )
}
