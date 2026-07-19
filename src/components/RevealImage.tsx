import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

interface RevealImageProps {
  src: string
  alt: string
  className?: string
  /** Intensidade do parallax interno (0 desliga) */
  parallax?: number
  delay?: number
}

const EASE = [0.76, 0, 0.24, 1] as const

/*
 * Imagem que entra com um "wipe" (cortina que sobe) e faz parallax lento
 * dentro da própria moldura enquanto a página rola.
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
      <motion.div
        className="reveal-img-inner"
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, delay, ease: EASE }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ y, scale: parallax ? 1 + parallax / 50 : 1 }}
        />
      </motion.div>
    </div>
  )
}
