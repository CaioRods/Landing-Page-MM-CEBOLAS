import { motion } from 'motion/react'
import Reveal from './Reveal'
import Counter from './Counter'
import BrazilMap from './BrazilMap'
import { ArrowRight, Pin, Shield, Users, Weight } from './Icons'

const STATS = [
  { icon: Weight, value: 10000, prefix: '+', label: 'toneladas comercializadas' },
  { icon: Users, value: 500, prefix: '+', label: 'clientes atendidos' },
  { icon: Pin, value: 15, prefix: '+', label: 'estados atendidos' },
  { icon: Shield, value: 100, suffix: '%', label: 'controle de qualidade' },
]

export default function Impact() {
  return (
    <section id="atuacao" className="impact">
      <div className="stats">
        <div className="stats-inner">
          <Reveal>
            <span className="eyebrow">Números que comprovam</span>
            <h2 className="heading heading-light">Resultados que<br />nos orgulham.</h2>
          </Reveal>

          <div className="stats-grid">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="stat-icon"><s.icon className="icon-20" /></span>
                <div className="stat-value">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="coverage">
        <div className="coverage-inner">
          <Reveal direction="right">
            <span className="eyebrow">Atuação Nacional</span>
            <h2 className="heading">De Norte a Sul,<br />levamos qualidade.</h2>
            <p className="lead">
              Atendemos todo o Brasil com agilidade, segurança e compromisso.
            </p>
          </Reveal>

          <div className="coverage-map">
            <BrazilMap />
          </div>

          <Reveal delay={0.1}>
            <div className="coverage-stats">
              <div className="coverage-stat">
                <strong>27</strong>
                <span>Estados</span>
              </div>
              <div className="coverage-stat">
                <strong>+300</strong>
                <span>Cidades</span>
              </div>
              <div className="coverage-stat">
                <strong>+500</strong>
                <span>Clientes</span>
              </div>
            </div>

            <a href="#contato" className="btn btn-green" style={{ marginTop: 26 }}>
              Ver onde atuamos
              <ArrowRight />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
