import { useEffect, useRef, type ReactNode } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react'

/* ------------------------------------------------------------------
   Magnetic — o elemento é "puxado" na direção do cursor
   ------------------------------------------------------------------ */
interface MagneticProps {
  children: ReactNode
  className?: string
  /** Deslocamento máximo em px */
  strength?: number
}

export function Magnetic({ children, className = '', strength = 16 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.5 })

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
    x.set(Math.max(-1, Math.min(1, dx)) * strength)
    y.set(Math.max(-1, Math.min(1, dy)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`magnetic ${className}`}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------
   Tilt — inclinação 3D seguindo o cursor, com brilho que acompanha
   ------------------------------------------------------------------ */
interface TiltProps {
  children: ReactNode
  className?: string
  /** Graus máximos de inclinação */
  max?: number
}

export function Tilt({ children, className = '', max = 9 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const spring = { stiffness: 220, damping: 20, mass: 0.5 }

  // Valores definidos direto no handler (padrão confiável do motion)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const gx = useMotionValue(50)
  const gy = useMotionValue(50)

  const rotateX = useSpring(rx, spring)
  const rotateY = useSpring(ry, spring)
  const glareX = useSpring(gx, spring)
  const glareY = useSpring(gy, spring)

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3), transparent 55%)`

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // currentTarget é sempre o elemento do handler — mais confiável que ref
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    rx.set((0.5 - py) * 2 * max)
    ry.set((px - 0.5) * 2 * max)
    gx.set(px * 100)
    gy.set(py * 100)
  }

  const reset = () => {
    rx.set(0)
    ry.set(0)
    gx.set(50)
    gy.set(50)
  }

  /* A perspectiva fica no pai (CSS) e a rotação no filho — do contrário o
     motion não consegue montar o transform corretamente. */
  return (
    <div ref={ref} className={`tilt-scene ${className}`} onPointerMove={onMove} onPointerLeave={reset}>
      <motion.div className="tilt" style={{ rotateX, rotateY }}>
        {children}
        <motion.span className="tilt-glare" style={{ background: glare }} />
      </motion.div>
    </div>
  )
}

/* ------------------------------------------------------------------
   Spotlight — luz que segue o cursor em seções escuras
   ------------------------------------------------------------------ */
export function Spotlight({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const sx = useSpring(x, { stiffness: 120, damping: 24 })
  const sy = useSpring(y, { stiffness: 120, damping: 24 })

  const background = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(232,163,61,0.14), transparent 68%)`

  /*
   * O próprio spotlight tem pointer-events: none, então escutamos no
   * elemento pai (a seção) para acompanhar o cursor.
   */
  useEffect(() => {
    const host = ref.current?.parentElement
    if (!host) return

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect()
      x.set(e.clientX - r.left)
      y.set(e.clientY - r.top)
    }
    const onLeave = () => {
      x.set(-500)
      y.set(-500)
    }

    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => {
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [x, y])

  return <motion.div ref={ref} className={`spotlight ${className}`} style={{ background }} />
}
