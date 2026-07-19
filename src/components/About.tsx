import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import Curtain from './Curtain'
import { ArrowRight, Box, Cart, Gear, Sort, Truck } from './Icons'

const STEPS = [
  { icon: Cart, label: 'Compra' },
  { icon: Sort, label: 'Seleção' },
  { icon: Gear, label: 'Beneficiamento' },
  { icon: Box, label: 'Embalagem' },
  { icon: Truck, label: 'Distribuição' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Parallax suave dentro da moldura da imagem
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="quem-somos" className="about">
      <div className="container about-grid">
        <div className="about-media" ref={ref}>
          <motion.img
            src="/img/campo-aereo.jpg"
            alt="Estrutura da M&M Cebolas"
            style={{ y: imgY, scale: 1.18 }}
          />
          {/* Cortina que recolhe para cima, revelando a imagem */}
          <Curtain />
          <motion.div
            className="about-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <strong>+20</strong>
            <span>anos de mercado</span>
          </motion.div>
        </div>

        <div className="about-text">
          <Reveal direction="right" delay={0.05}>
            <span className="eyebrow">Quem Somos</span>
          </Reveal>

          <SplitText
            as="h2"
            className="heading"
            text={'Há anos entregando\nqualidade que\no Brasil confia.'}
            highlight={['confia.']}
          />

          <Reveal direction="right" delay={0.35}>
            <p className="lead">
              A M&amp;M Cebolas é referência no mercado nacional quando o assunto é
              seleção, beneficiamento e distribuição de cebolas. Trabalhamos com
              tecnologia, estrutura moderna e uma equipe especializada para
              entregar sempre o melhor produto.
            </p>
          </Reveal>

          <div className="about-icons">
            {STEPS.map((s, i) => (
              <motion.div
                className="about-icon"
                key={s.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              >
                <span className="about-icon-circle"><s.icon className="icon-24" /></span>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>

          <Reveal direction="right" delay={0.5}>
            <a href="#processo" className="btn btn-outline-dark">
              Saiba mais sobre nós
              <ArrowRight />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
