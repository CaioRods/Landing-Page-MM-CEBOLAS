import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

interface CurtainProps {
  delay?: number
  /** Cor da cortina (por padrão, o creme do fundo) */
  color?: string
}

/*
 * Cortina que recolhe para cima revelando a imagem embaixo.
 *
 * É uma camada opaca, então quem prefere menos movimento não deve depender
 * da animação para ver o conteúdo — nesse caso ela simplesmente não é
 * renderizada.
 */
export default function Curtain({ delay = 0, color }: CurtainProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <motion.span
      ref={ref}
      className="wipe-curtain"
      style={color ? { background: color } : undefined}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: inView ? 0 : 1 }}
      transition={{ duration: 1.15, delay, ease: [0.76, 0, 0.24, 1] }}
    />
  )
}
