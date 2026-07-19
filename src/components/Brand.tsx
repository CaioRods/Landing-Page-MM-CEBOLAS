import { useState } from 'react'
import { motion } from 'motion/react'
import Reveal from './Reveal'
import SplitText from './SplitText'
import { Tilt } from './Interactive'
import logo from '../assets/logo.png'

const COLORS = [
  {
    name: 'Verde Profundo',
    hex: '#0B3A22',
    text: '#FFFFFF',
    role: 'Cor principal',
    meaning:
      'É a terra e a lavoura. Representa a origem do produto, a solidez de mais de duas décadas no campo e a confiança de quem planta, colhe e entrega.',
  },
  {
    name: 'Dourado Colheita',
    hex: '#E8A33D',
    text: '#06210F',
    role: 'Cor de destaque',
    meaning:
      'É a própria cebola: a casca dourada no ponto certo da colheita. Traz o calor do sol, a energia do trabalho e marca tudo o que exige atenção na marca.',
  },
  {
    name: 'Creme Natural',
    hex: '#FAF7F1',
    text: '#1C1C1C',
    role: 'Base neutra',
    meaning:
      'É o espaço para respirar. Um fundo quente e silencioso que nunca disputa com o produto — deixa a cebola e a informação serem as protagonistas.',
  },
  {
    name: 'Verde Broto',
    hex: '#1A6B38',
    text: '#FFFFFF',
    role: 'Apoio',
    meaning:
      'É o crescimento. Usado em detalhes e estados ativos, lembra o broto que nasce e o ciclo que se renova a cada safra.',
  },
]

const PRINCIPLES = [
  {
    n: '01',
    title: 'O produto é o herói',
    text: 'Cada elemento que não fosse essencial foi removido para que a cebola ocupe o centro da atenção. Nada compete com o alimento.',
  },
  {
    n: '02',
    title: 'Clareza gera confiança',
    text: 'No mercado atacadista, quem decide precisa de informação direta. Menos ornamento significa menos ruído entre a marca e o cliente.',
  },
  {
    n: '03',
    title: 'Atemporalidade',
    text: 'Formas simples não seguem modismo. A identidade envelhece bem e continua atual daqui a dez anos, sem precisar de retoque.',
  },
  {
    n: '04',
    title: 'Funciona em qualquer lugar',
    text: 'A mesma marca precisa se manter legível na caixa, na lona do caminhão, no rótulo pequeno e na tela do celular.',
  },
]

export default function Brand() {
  const [active, setActive] = useState(0)
  const color = COLORS[active]

  return (
    <section id="marca" className="brand">
      <div className="container">
        <div className="brand-head">
          <Reveal><span className="eyebrow">Sobre a marca</span></Reveal>
          <SplitText
            as="h2"
            className="heading"
            text={'Cada detalhe da identidade\ntem um porquê.'}
            highlight={['porquê.']}
          />
          <Reveal delay={0.3}>
            <p className="lead brand-lead">
              A identidade da M&amp;M Cebolas nasceu de uma escolha simples: falar
              a mesma língua do campo — direta, honesta e sem excesso.
            </p>
          </Reveal>
        </div>

        {/* --- O símbolo --- */}
        <div className="brand-symbol">
          <Reveal direction="left">
            <Tilt max={11}>
              <div className="brand-logo-card">
                <img src={logo} alt="Logotipo M&M Cebolas" />
              </div>
            </Tilt>
          </Reveal>

          <div className="brand-symbol-text">
            <Reveal direction="right" delay={0.1}>
              <h3 className="brand-h3">O símbolo</h3>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <ul className="brand-list">
                <li>
                  <strong>A cebola estilizada</strong>
                  Reduzida ao essencial: o bulbo e o talo. Reconhecível à
                  distância, mesmo impressa em um selo de poucos centímetros.
                </li>
                <li>
                  <strong>O monograma M&amp;M</strong>
                  As duas iniciais são a assinatura da família por trás do
                  negócio — a marca carrega o nome de quem responde por ela.
                </li>
                <li>
                  <strong>A tipografia</strong>
                  Sem serifa, geométrica e de peso alto. Transmite estrutura e
                  modernidade sem soar fria, e mantém legibilidade em qualquer
                  tamanho.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* --- Paleta interativa --- */}
        <div className="brand-palette-block">
          <Reveal>
            <h3 className="brand-h3">A paleta</h3>
            <p className="lead brand-sub">
              Passe o mouse em cada cor para ver o que ela representa.
            </p>
          </Reveal>

          <div className="brand-palette">
            {COLORS.map((c, i) => (
              <motion.button
                key={c.hex}
                className={`brand-swatch ${active === i ? 'is-active' : ''}`}
                style={{ background: c.hex, color: c.text }}
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                aria-label={`${c.name} — ${c.hex}`}
              >
                <span className="brand-swatch-role">{c.role}</span>
                <span className="brand-swatch-name">{c.name}</span>
                <span className="brand-swatch-hex">{c.hex}</span>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="brand-meaning"
            key={color.hex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="brand-meaning-dot" style={{ background: color.hex }} />
            <p>
              <strong>{color.name}</strong>
              {color.meaning}
            </p>
          </motion.div>
        </div>

        {/* --- Por que minimalismo --- */}
        <div className="brand-why">
          <Reveal>
            <h3 className="brand-h3">Por que minimalismo</h3>
          </Reveal>

          <div className="brand-principles">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                className="brand-principle"
                key={p.n}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="brand-principle-n">{p.n}</span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
