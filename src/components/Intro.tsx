import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import logo from '../assets/logo.png'

const EASE = [0.76, 0, 0.24, 1] as const
const DURATION = 2100

/*
 * Abertura cinematográfica: marca no centro, contador de 0 a 100 e uma
 * cortina que abre em duas metades revelando o hero.
 */
export default function Intro() {
  const [done, setDone] = useState(false)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / (DURATION - 500), 1)
      const eased = 1 - Math.pow(1 - p, 2.2)
      setPct(Math.round(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const t = setTimeout(() => setDone(true), DURATION + 700)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div className="intro" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <motion.div
            className="intro-panel intro-panel-top"
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            transition={{ duration: 1, delay: DURATION / 1000 - 0.4, ease: EASE }}
          />
          <motion.div
            className="intro-panel intro-panel-bottom"
            initial={{ y: 0 }}
            animate={{ y: '100%' }}
            transition={{ duration: 1, delay: DURATION / 1000 - 0.4, ease: EASE }}
          />

          <motion.div
            className="intro-brand"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.94, 1, 1, 1.05] }}
            transition={{ duration: DURATION / 1000, times: [0, 0.22, 0.76, 1], ease: 'easeOut' }}
          >
            <img src={logo} alt="M&M Cebolas" />
            <span className="intro-brand-name">M&amp;M CEBOLAS</span>
            <span className="intro-bar">
              <motion.span
                className="intro-bar-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: DURATION / 1000 - 0.5, ease: 'easeOut' }}
              />
            </span>
            <span className="intro-pct">{pct}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
