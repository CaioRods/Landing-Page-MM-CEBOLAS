import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import logo from '../assets/logo.png'

const EASE = [0.76, 0, 0.24, 1] as const

/*
 * Abertura cinematográfica: tela preta com a marca, seguida de uma cortina
 * que abre em duas metades revelando o hero. Roda uma vez, no carregamento.
 */
export default function Intro() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2500)
    // Trava o scroll enquanto a abertura roda
    document.body.style.overflow = 'hidden'
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div className="intro" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          {/* Cortina superior */}
          <motion.div
            className="intro-panel intro-panel-top"
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            transition={{ duration: 1, delay: 1.5, ease: EASE }}
          />
          {/* Cortina inferior */}
          <motion.div
            className="intro-panel intro-panel-bottom"
            initial={{ y: 0 }}
            animate={{ y: '100%' }}
            transition={{ duration: 1, delay: 1.5, ease: EASE }}
          />

          {/* Marca */}
          <motion.div
            className="intro-brand"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.92, 1, 1, 1.06] }}
            transition={{ duration: 1.9, times: [0, 0.28, 0.72, 1], ease: 'easeOut' }}
          >
            <img src={logo} alt="M&M Cebolas" />
            <span className="intro-brand-name">M&amp;M CEBOLAS</span>
            <motion.span
              className="intro-brand-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
