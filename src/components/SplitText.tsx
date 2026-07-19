import { motion } from 'motion/react'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
  /** Palavras destacadas em laranja (comparação por palavra, sem pontuação) */
  highlight?: string[]
}

const EASE = [0.22, 1, 0.36, 1] as const

/*
 * Revela o texto palavra por palavra, cada uma subindo de dentro de uma
 * máscara. É o efeito de título das grandes agências.
 */
export default function SplitText({
  text,
  className,
  delay = 0,
  as = 'h2',
  highlight = [],
}: SplitTextProps) {
  const Tag = motion[as]
  const lines = text.split('\n')
  const hl = highlight.map((h) => h.toLowerCase())
  let wordIndex = 0

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {lines.map((line, li) => (
        <span className="split-line" key={li}>
          {line.split(' ').map((word) => {
            const i = wordIndex++
            const clean = word.replace(/[.,;:!?]/g, '').toLowerCase()
            const isHl = hl.includes(clean)
            return (
              <span className="split-word" key={`${li}-${i}`}>
                <motion.span
                  className={isHl ? 'split-inner split-hl' : 'split-inner'}
                  variants={{
                    hidden: { y: '110%' },
                    show: {
                      y: '0%',
                      transition: { duration: 0.9, delay: delay + i * 0.055, ease: EASE },
                    },
                  }}
                >
                  {word}
                </motion.span>
              </span>
            )
          })}
        </span>
      ))}
    </Tag>
  )
}
