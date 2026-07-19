import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import { ArrowRight, Play } from './Icons'

export default function VideoCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Zoom lento amarrado ao scroll — a imagem "respira" enquanto passa
  const scale = useTransform(scrollYProgress, [0, 1], [1.22, 1])
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section id="video" className="videocta">
      <div className="container">
        <div className="videocta-box" ref={ref}>
          <motion.img src="/img/campo-linhas.jpg" alt="" style={{ scale, y }} />
          <div className="videocta-scrim" />

          <div className="videocta-content">
            <Reveal><span className="eyebrow">Conheça a M&amp;M Cebolas</span></Reveal>
            <SplitText
              as="h2"
              className="heading heading-light"
              text={'Assista ao nosso\nvídeo institucional.'}
              highlight={['institucional.']}
            />
            <Reveal delay={0.4}>
              <a href="#contato" className="btn btn-outline-light">
                Assista agora
                <ArrowRight />
              </a>
            </Reveal>
          </div>

          <motion.button
            className="videocta-play"
            aria-label="Reproduzir vídeo"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="videocta-play-ring" />
            <Play className="icon-32" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
