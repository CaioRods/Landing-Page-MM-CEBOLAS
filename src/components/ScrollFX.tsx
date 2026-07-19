import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react'

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
  /** Direção base do movimento */
  reverse?: boolean
  /** Velocidade base em % por segundo */
  speed?: number
}

/*
 * Faixa de texto que corre continuamente e REAGE ao scroll: acelera com a
 * velocidade da rolagem, inverte de direção quando você sobe e inclina
 * levemente — dá a sensação de inércia física.
 */
export function Marquee({ items, className = '', reverse = false, speed = 4 }: MarqueeProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, { damping: 48, stiffness: 380 })
  const velocityFactor = useTransform(smoothVelocity, [-1800, 0, 1800], [-4, 0, 4], {
    clamp: false,
  })
  // Inclina o texto conforme a inércia
  const skew = useTransform(smoothVelocity, [-1800, 0, 1800], [-4, 0, 4], { clamp: true })

  const direction = useRef(reverse ? -1 : 1)

  useAnimationFrame((_, delta) => {
    let move = direction.current * speed * (delta / 1000)
    const v = velocityFactor.get()
    // Sobe = inverte a direção da faixa
    if (v < 0) direction.current = reverse ? 1 : -1
    else if (v > 0) direction.current = reverse ? -1 : 1

    move += direction.current * move * Math.abs(v)
    let next = baseX.get() + move
    // Mantém no laço de -50%..0 (a lista está duplicada)
    if (next <= -50) next += 50
    if (next > 0) next -= 50
    baseX.set(next)
  })

  const x = useTransform(baseX, (v) => `${v}%`)
  const row = [...items, ...items, ...items, ...items]

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <motion.div className="marquee-track" style={{ x, skewX: skew }}>
        {row.map((t, i) => (
          <span className="marquee-item" key={i}>
            {t}
            <span className="marquee-dot" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
