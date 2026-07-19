import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import { ArrowRight } from './Icons'

const ITEMS = [
  { img: '/img/campo-aereo.jpg', caption: 'Lavouras parceiras' },
  { img: '/img/campo-linhas.jpg', caption: 'Produção em campo' },
  { img: '/img/selecao.jpg', caption: 'Seleção e classificação' },
  { img: '/img/armazem.jpg', caption: 'Armazenagem' },
  { img: '/img/embalagem.jpg', caption: 'Embalagem' },
  { img: '/img/logistica.jpg', caption: 'Frota e logística' },
]

export default function Structure() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Trilho desliza horizontalmente conforme o scroll vertical
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-32%'])
  const smoothX = useSpring(x, { stiffness: 60, damping: 22, restDelta: 0.001 })

  return (
    <section id="estrutura" className="structure" ref={ref}>
      <div className="container structure-head">
        <div>
          <Reveal><span className="eyebrow">Nossa Estrutura</span></Reveal>
          <SplitText
            as="h2"
            className="heading"
            text={'Tecnologia, pessoas\ne dedicação.'}
            highlight={['dedicação.']}
          />
        </div>
        <Reveal delay={0.12} direction="none">
          <a href="#contato" className="btn btn-outline-dark">
            Ver mais fotos
            <ArrowRight />
          </a>
        </Reveal>
      </div>

      <motion.div className="structure-rail" style={{ x: smoothX }} data-cursor="drag">
        {ITEMS.map((item, i) => (
          <motion.figure
            className="structure-item"
            key={item.caption}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={item.img} alt={item.caption} loading="lazy" />
            <figcaption>{item.caption}</figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  )
}
