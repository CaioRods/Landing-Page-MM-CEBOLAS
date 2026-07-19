import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type Dir = 'up' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Dir
  amount?: number
  blur?: boolean
}

const offset: Record<Dir, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  left: { x: -46, y: 0 },
  right: { x: 46, y: 0 },
  none: { x: 0, y: 0 },
}

/* Entrada suave ao entrar na viewport — usada em todas as seções. */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  amount = 0.25,
  blur = true,
}: RevealProps) {
  const { x, y } = offset[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, filter: blur ? 'blur(8px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
