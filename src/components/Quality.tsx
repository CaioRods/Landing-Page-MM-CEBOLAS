import { motion } from 'motion/react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import { Box, CheckBadge, Headset, Leaf, Route, Shield } from './Icons'

const ITEMS = [
  { icon: CheckBadge, title: 'Seleção rigorosa', text: 'Padrões altos para garantir o melhor produto.' },
  { icon: Shield, title: 'Rastreabilidade', text: 'Controle completo de toda a cadeia.' },
  { icon: Route, title: 'Agilidade logística', text: 'Entregas rápidas e seguras em todo o Brasil.' },
  { icon: Leaf, title: 'Produtos frescos', text: 'Mais sabor e durabilidade na sua mesa.' },
  { icon: Box, title: 'Embalagens modernas', text: 'Mais proteção, praticidade e apresentação.' },
  { icon: Headset, title: 'Atendimento nacional', text: 'Equipe preparada para atender você.' },
]

export default function Quality() {
  return (
    <section id="qualidade" className="quality">
      <div className="container">
        <div className="quality-head">
          <Reveal><span className="eyebrow">Qualidade em cada etapa</span></Reveal>
          <SplitText
            as="h2"
            className="heading"
            text={'Compromisso do campo à entrega.'}
            highlight={['entrega.']}
          />
        </div>

        <div className="quality-grid">
          {ITEMS.map((item, i) => (
            <motion.div
              className="quality-card"
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.62, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="quality-icon"><item.icon className="icon-22" /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
