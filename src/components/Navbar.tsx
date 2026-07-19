import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import logo from '../assets/logo.png'
import { ArrowRight } from './Icons'

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#marca', label: 'A Marca' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#processo', label: 'Processo' },
  { href: '#atuacao', label: 'Atuação' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#qualidade', label: 'Qualidade' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar({ onOpenQuote }: { onOpenQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  // Esconde ao descer, revela ao subir — comportamento de site premium
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 420)
        last = y
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Marca o link da seção visível
  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.05, ease: [0.22, 1, 0.36, 1] }}
        className={`nav ${scrolled ? 'scrolled' : ''} ${hidden && !open ? 'nav-hidden' : ''}`}
      >
        <div className="container nav-inner">
          <a href="#inicio" className="nav-logo">
            <img src={logo} alt="M&M Cebolas" />
            <span className="nav-logo-text">
              <strong>M&amp;M</strong>
              <span>CEBOLAS</span>
            </span>
          </a>

          <nav className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={active === l.href ? 'active' : ''}>
                {l.label}
              </a>
            ))}
          </nav>

          <button className="btn btn-orange nav-cta" onClick={onOpenQuote}>
            Solicitar Orçamento
            <ArrowRight />
          </button>

          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.header>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <button className="btn btn-orange" style={{ margin: '0 20px', width: 'calc(100% - 40px)', justifyContent: 'center' }} onClick={() => { setOpen(false); onOpenQuote(); }}>
          Solicitar Orçamento
          <ArrowRight />
        </button>
      </div>
    </>
  )
}
