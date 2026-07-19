import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

/*
 * Cursor customizado: um ponto que gruda no mouse e um anel que segue com
 * atraso. Cresce sobre links/botões e vira "ASSISTIR"/"ARRASTAR" em áreas
 * específicas. Desativado em dispositivos de toque.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState<'default' | 'hover' | 'media' | 'drag'>('default')
  const [label, setLabel] = useState('')

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 })

  useEffect(() => {
    // Só em dispositivos com mouse de verdade
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)

      const el = e.target as HTMLElement
      const media = el.closest('[data-cursor="media"]')
      const drag = el.closest('[data-cursor="drag"]')
      const link = el.closest('a, button, [role="button"]')

      if (media) {
        setVariant('media')
        setLabel(media.getAttribute('data-cursor-label') || 'VER')
      } else if (drag) {
        setVariant('drag')
        setLabel('ARRASTAR')
      } else if (link) {
        setVariant('hover')
        setLabel('')
      } else {
        setVariant('default')
        setLabel('')
      }
    }

    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  if (!enabled) return null

  const ringSize = variant === 'default' ? 34 : variant === 'hover' ? 62 : 92

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className={`cursor-ring cursor-${variant}`}
        style={{ x: ringX, y: ringY }}
        animate={{ width: ringSize, height: ringSize }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      >
        {label && <span className="cursor-label">{label}</span>}
      </motion.div>
    </>
  )
}
