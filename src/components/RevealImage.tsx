import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Curtain from './Curtain'

interface RevealImageProps {
  src: string
  alt: string
  className?: string
  /** Intensidade do parallax interno (0 desliga) */
  parallax?: number
  delay?: number
}

/*
 * Imagem que entra com uma cortina recolhendo para cima e faz parallax lento
 * dentro da moldura enquanto a página rola. A cortina usa transform (GPU) —
 * clip-path não anima de forma confiável nesta versão do motion.
 */
export default function RevealImage({
  src,
  alt,
  className = '',
  parallax = 10,
  delay = 0,
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`])

  return (
    <div className={`reveal-img ${className}`} ref={ref}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: parallax ? 1 + parallax / 50 : 1 }}
      />
      <Curtain delay={delay} />
    </div>
  )
}
