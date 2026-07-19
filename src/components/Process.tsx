import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import { Box, Cart, CheckBadge, Droplet, Gear, Sort, Truck } from './Icons'

const STEPS = [
  { n: '01', icon: Cart, title: 'Compra da produção' },
  { n: '02', icon: Sort, title: 'Classificação' },
  { n: '03', icon: Droplet, title: 'Lavagem' },
  { n: '04', icon: CheckBadge, title: 'Seleção' },
  { n: '05', icon: Gear, title: 'Beneficiamento' },
  { n: '06', icon: Box, title: 'Embalagem' },
  { n: '07', icon: Truck, title: 'Distribuição' },
]

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.8', 'end 0.55'],
  })
  // A linha laranja se desenha conforme o scroll
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })

  return (
    <section id="processo" className="process">
      <div className="container">
        <div className="process-head">
          <Reveal><span className="eyebrow">Nosso Processo</span></Reveal>
          <SplitText
            as="h2"
            className="heading heading-light"
            text={'Do campo à sua mesa,\num processo de excelência.'}
            highlight={['excelência.']}
          />
        </div>

        <div className="process-track" ref={trackRef}>
          <div className="process-line" />
          <motion.div className="process-line-fill" style={{ scaleX }} />

          <div className="process-steps">
            {STEPS.map((s, i) => (
              <motion.div
                className="process-step"
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="process-step-icon"><s.icon className="icon-28" /></span>
                <span className="process-step-num">{s.n}</span>
                <h3>{s.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
