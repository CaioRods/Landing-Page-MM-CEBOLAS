import { motion, useScroll, useSpring } from 'motion/react'

/* Barra fina de progresso da leitura, no topo da página. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

/* Grão de filme + vinheta sobre toda a página. */
export function FilmLayer() {
  return (
    <>
      <div className="film-grain" aria-hidden="true" />
      <div className="film-vignette" aria-hidden="true" />
    </>
  )
}

interface MarqueeProps {
  items: string[]
  className?: string
  reverse?: boolean
  duration?: number
}

/* Faixa de texto gigante em movimento contínuo. */
export function Marquee({ items, className = '', reverse = false, duration = 34 }: MarqueeProps) {
  const row = [...items, ...items]
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div
        className={`marquee-track ${reverse ? 'is-reverse' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {row.map((t, i) => (
          <span className="marquee-item" key={i}>
            {t}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
