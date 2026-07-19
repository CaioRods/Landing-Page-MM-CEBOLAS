import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Magnetic } from './Interactive'
import { ArrowRight, Play } from './Icons'

/* Espera a cortina da abertura abrir antes de revelar o conteúdo */
const T = 1.9

const LINES = [
  <>Excelência que</>,
  <>vem do campo,</>,
  <><em>chega a todo</em></>,
  <><em>o Brasil.</em></>,
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  /*
   * Garante que o vídeo de fundo toque desde o início. Navegadores (e o modo
   * de baixo consumo do macOS/iOS) podem bloquear ou pausar o autoplay, então
   * tentamos tocar no load, ao voltar para a aba e na primeira interação.
   */
  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    v.muted = true
    v.defaultMuted = true

    const play = () => {
      const p = v.play()
      if (p) p.catch(() => {})
    }

    play()

    const onVisible = () => !document.hidden && play()
    const onPause = () => play() // fundo decorativo: retoma se algo pausar

    v.addEventListener('loadeddata', play)
    v.addEventListener('canplay', play)
    v.addEventListener('pause', onPause)
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('pointerdown', play, { once: true })
    window.addEventListener('touchstart', play, { once: true })

    return () => {
      v.removeEventListener('loadeddata', play)
      v.removeEventListener('canplay', play)
      v.removeEventListener('pause', onPause)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('pointerdown', play)
      window.removeEventListener('touchstart', play)
    }
  }, [])

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.16])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 110])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="inicio" ref={ref} className="hero">
      <motion.div className="hero-media" style={{ y: mediaY, scale: mediaScale }}>
        {/* Zoom lento e contínuo — sensação de câmera em movimento */}
        <motion.video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/img/campo-aereo.jpg"
          initial={{ scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.2, delay: T - 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <source src="/hero-field.mp4" type="video/mp4" />
        </motion.video>
        <div className="hero-scrim" />
      </motion.div>

      <motion.div
        className="container hero-content"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.span
          className="hero-tag"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: T + 0.15 }}
        >
          M&amp;M Cebolas
        </motion.span>

        <h1>
          {LINES.map((line, i) => (
            <span className="hero-line" key={i}>
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay: T + 0.3 + i * 0.11, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: T + 0.85 }}
        >
          Compra, seleção, beneficiamento e distribuição de cebolas com
          qualidade, tecnologia e confiança.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: T + 1.0 }}
        >
          <Magnetic>
            <a href="#quem-somos" className="btn btn-green">
              Conheça a empresa
              <ArrowRight />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contato" className="btn btn-outline-light">
              Solicite um orçamento
              <ArrowRight />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.a
        href="#quem-somos"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: T + 1.4 }}
      >
        <span className="hero-scroll-line" />
        Scroll
      </motion.a>

      <motion.a
        href="#video"
        className="hero-video-badge"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: T + 1.4 }}
      >
        <span>Assista ao vídeo institucional</span>
        <span className="hero-video-badge-btn"><Play className="icon-play" /></span>
      </motion.a>
    </section>
  )
}
