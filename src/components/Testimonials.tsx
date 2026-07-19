import { motion } from 'motion/react'
import Reveal from './Reveal'
import SplitText from './SplitText'

const ITEMS = [
  {
    text: 'A M&M Cebolas é nossa parceira há anos. Qualidade constante e entrega sempre no prazo.',
    author: 'Hortifruti Natural',
  },
  {
    text: 'Produtos excelentes e equipe muito comprometida. Recomendamos!',
    author: 'Supermercados Bom Preço',
  },
  {
    text: 'Agilidade e confiança que fazem toda a diferença no nosso dia a dia.',
    author: 'Distribuidora Aliança',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container testimonials-grid">
        <div className="testimonials-intro">
          <Reveal><span className="eyebrow">Depoimentos</span></Reveal>
          <SplitText
            as="h2"
            className="heading"
            text={'Quem confia,\nrecomenda.'}
            highlight={['recomenda.']}
          />
        </div>

        {ITEMS.map((t, i) => (
          <motion.blockquote
            className="testimonial"
            key={t.author}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.68, delay: 0.1 + i * 0.11, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="testimonial-quote">&ldquo;</span>
            <p>{t.text}</p>
            <footer className="testimonial-author">{t.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
