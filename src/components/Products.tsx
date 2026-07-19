import { motion } from 'motion/react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import { Magnetic, Tilt } from './Interactive'
import { ArrowRight } from './Icons'

const PRODUCTS = [
  {
    img: '/img/onion-amarela.jpg',
    name: 'Cebola Amarela',
    desc: 'Mais sabor e versatilidade para o dia a dia.',
    pack: '5KG | 10KG | 20KG',
  },
  {
    img: '/img/onion-branca.jpg',
    name: 'Cebola Branca',
    desc: 'Ideal para quem busca leveza e frescor.',
    pack: '5KG | 10KG | 20KG',
  },
  {
    img: '/img/onion-roxa.jpg',
    name: 'Cebola Roxa',
    desc: 'Cor, sabor e nutrientes para suas receitas.',
    pack: '5KG | 10KG',
  },
  {
    img: '/img/onion-perola.jpg',
    name: 'Cebola Pérola',
    desc: 'Perfeita para conservas e pratos especiais.',
    pack: '2KG | 5KG',
  },
  {
    img: '/img/onion-picada.jpg',
    name: 'Cebola Picada',
    desc: 'Prática, padronizada e pronta para usar.',
    pack: '1KG | 2KG',
  },
]

export default function Products() {
  return (
    <section id="produtos" className="products">
      <div className="container">
        <div className="products-head">
          <div>
            <Reveal><span className="eyebrow">Nossos Produtos</span></Reveal>
            <SplitText
              as="h2"
              className="heading"
              text={'Qualidade em cada\ntipo de cebola.'}
              highlight={['cebola.']}
            />
          </div>
          <Reveal delay={0.15} direction="none">
            <Magnetic>
              <a href="#contato" className="btn btn-outline-dark">
                Ver todos os produtos
                <ArrowRight />
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 46 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <Tilt>
                <article className="product-card" data-cursor="media" data-cursor-label="VER">
                  <div className="product-img">
                    <img src={p.img} alt={p.name} loading="lazy" />
                    <span className="product-index">0{i + 1}</span>
                  </div>
                  <div className="product-body">
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <div className="product-pack">EMBALAGENS: {p.pack}</div>
                  </div>
                </article>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
