import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, HeartPulse } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-md shadow-sm border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-clinic flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-2 font-display text-xl text-ink">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-ink text-mint">
            <HeartPulse size={18} strokeWidth={2.25} />
          </span>
          Clínica Vitalis
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contato"
            className="inline-flex items-center rounded-full bg-accent text-paper font-medium text-sm px-5 py-2.5 hover:bg-accent/90 hover:scale-105 transition-all duration-200"
          >
            Agendar Consulta
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-paper border-b border-line"
            aria-label="Navegação mobile"
          >
            <div className="container-clinic flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="py-2.5 text-ink/80 font-medium border-b border-line/60 last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={handleNavClick}
                className="mt-3 text-center rounded-full bg-accent text-paper font-medium text-sm px-5 py-3"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
