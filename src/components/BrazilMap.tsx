import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

/* Contorno real do Brasil (GeoJSON projetado para viewBox 400x430) */
const BRAZIL =
  'M168.4 371.6 L181.3 358.3 L192.2 348.7 L198.7 344.7 L206.9 339.3 L207.1 331.5 L202.2 325.8 L197.4 327.7 L199.3 322.0 L200.6 316.2 L200.6 310.8 L197.2 309.0 L193.5 310.6 L189.9 310.2 L188.8 306.4 L187.9 297.4 L186.1 294.5 L179.5 291.8 L175.6 293.7 L165.4 291.9 L166.0 278.5 L163.1 273.1 L166.2 271.0 L165.2 265.4 L167.9 261.1 L169.6 253.4 L167.3 247.3 L162.0 244.6 L161.0 240.7 L162.4 235.0 L143.9 234.6 L140.1 223.2 L143.0 223.0 L142.8 218.8 L140.9 215.9 L140.5 210.2 L134.9 207.3 L128.8 207.4 L124.8 204.6 L118.3 202.6 L114.5 198.9 L103.6 197.3 L93.1 188.5 L93.9 182.0 L92.7 178.2 L93.7 170.8 L81.1 172.5 L76.0 176.2 L67.5 180.1 L65.3 183.1 L60.3 183.3 L53.1 182.5 L47.7 184.2 L43.3 183.1 L43.9 168.1 L36.0 173.9 L27.4 173.7 L23.8 168.4 L17.4 167.9 L19.4 163.7 L14.0 157.7 L10.0 148.8 L12.6 147.0 L12.5 142.9 L18.4 140.1 L17.4 134.8 L19.9 131.3 L20.6 126.8 L31.7 120.1 L39.6 118.2 L40.9 116.7 L49.6 117.2 L54.0 90.3 L54.2 86.0 L52.7 80.4 L48.4 76.8 L48.4 69.7 L53.9 68.0 L55.8 69.1 L56.2 65.3 L50.5 64.3 L50.4 58.1 L69.2 58.4 L72.4 55.0 L75.1 58.1 L77.0 63.9 L78.8 62.7 L84.2 67.9 L91.7 67.2 L93.6 64.2 L100.8 61.9 L104.7 60.3 L105.9 56.2 L112.8 53.4 L112.3 51.3 L104.1 50.5 L102.7 44.3 L103.1 37.7 L98.8 35.1 L100.6 34.2 L107.8 35.5 L115.5 38.0 L118.2 35.6 L125.2 34.1 L136.0 30.4 L139.6 26.7 L138.3 23.9 L143.3 23.5 L145.6 25.7 L144.3 30.1 L147.6 31.5 L149.9 36.1 L147.2 39.6 L145.6 47.9 L148.1 52.9 L148.8 57.4 L154.8 62.0 L159.5 62.5 L160.6 60.6 L163.7 60.2 L168.0 58.5 L171.2 55.8 L176.5 56.7 L178.9 56.3 L184.2 57.1 L185.0 55.1 L183.4 53.2 L184.4 50.3 L188.3 51.2 L192.8 50.2 L198.4 52.3 L202.6 54.3 L205.6 51.6 L207.8 52.0 L209.1 54.8 L213.7 54.1 L217.4 50.4 L220.4 43.1 L226.1 34.2 L229.4 33.7 L231.8 39.1 L237.3 56.3 L242.4 57.9 L242.7 64.7 L235.4 72.8 L238.4 75.7 L255.5 77.3 L255.9 87.1 L263.2 80.7 L275.4 84.2 L291.5 90.2 L296.2 96.0 L294.6 101.4 L305.9 98.4 L324.7 103.6 L339.2 103.2 L353.5 111.3 L365.9 122.3 L373.3 125.1 L381.6 125.5 L385.1 128.6 L388.4 141.1 L390.0 147.1 L386.1 163.3 L381.2 169.7 L367.6 183.4 L361.4 194.5 L354.2 203.0 L351.8 203.2 L349.1 210.4 L349.8 228.8 L347.1 243.9 L346.1 250.4 L343.0 254.3 L341.3 267.4 L331.5 280.2 L329.8 290.4 L322.0 294.6 L319.7 300.5 L309.2 300.5 L294.0 304.2 L287.2 308.6 L276.3 311.5 L264.9 319.3 L256.8 329.0 L255.3 336.4 L257.0 341.8 L255.1 351.7 L252.9 356.5 L246.2 361.9 L235.4 379.2 L226.9 387.0 L220.4 391.6 L215.9 400.9 L209.5 406.5 L206.9 401.0 L211.1 396.3 L205.5 389.6 L197.9 384.2 L188.0 377.9 L184.4 378.2 L174.7 370.6 L168.4 371.6 Z'

/* Sede (Presidente Prudente/SP) e capitais atendidas — coordenadas reais projetadas */
const HUB = { x: 228.7, y: 292.2 }
const NODES = [
  { x: 145.2, y: 105.4, city: 'Manaus' },
  { x: 256.7, y: 89.3, city: 'Belém' },
  { x: 353.1, y: 111.5, city: 'Fortaleza' },
  { x: 388.5, y: 154.0, city: 'Recife' },
  { x: 353.5, y: 202.3, city: 'Salvador' },
  { x: 262.2, y: 229.9, city: 'Brasília' },
  { x: 300.8, y: 270.6, city: 'Belo Horizonte' },
  { x: 308.0, y: 299.9, city: 'Rio de Janeiro' },
  { x: 274.8, y: 306.2, city: 'São Paulo' },
  { x: 249.3, y: 324.7, city: 'Curitiba' },
  { x: 230.3, y: 369.8, city: 'Porto Alegre' },
  { x: 183.1, y: 228.1, city: 'Cuiabá' },
  { x: 107.6, y: 161.0, city: 'Porto Velho' },
]

function curve(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2
  const my = (from.y + to.y) / 2
  const dx = to.x - from.x
  const dy = to.y - from.y
  const len = Math.hypot(dx, dy) || 1
  const bend = len * 0.16
  const cx = mx - (dy / len) * bend
  const cy = my + (dx / len) * bend
  return `M${from.x} ${from.y} Q${cx} ${cy} ${to.x} ${to.y}`
}

export default function BrazilMap() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.5'],
  })
  // As rotas se desenham conforme o scroll
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref}>
      <svg className="br-map" viewBox="0 0 400 430" role="img" aria-label="Mapa de atuação da M&M Cebolas no Brasil">
        <motion.path
          className="br-map-shape"
          d={BRAZIL}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        />

        {NODES.map((n) => (
          <motion.path
            key={`r-${n.city}`}
            className="br-route"
            d={curve(HUB, n)}
            style={{ pathLength: draw }}
          />
        ))}

        {NODES.map((n, i) => (
          <motion.circle
            key={`n-${n.city}`}
            className="br-node"
            cx={n.x}
            cy={n.y}
            r={3.2}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.55 + i * 0.06 }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <title>{n.city}</title>
          </motion.circle>
        ))}

        {/* Sede pulsante */}
        <motion.circle
          className="br-hub"
          cx={HUB.x}
          cy={HUB.y}
          r={5.5}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
        />
        <motion.circle
          cx={HUB.x}
          cy={HUB.y}
          r={5.5}
          fill="none"
          stroke="var(--orange)"
          strokeWidth={1.4}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0.7, 0], scale: [1, 2.8] }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
        />
      </svg>
    </div>
  )
}
