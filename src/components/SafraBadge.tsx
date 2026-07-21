import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// Status controlado pelo perfil "chefe" direto no Portal M&M Cebolas (Configurações → Status da
// Safra). Endpoint público, sem autenticação, só o booleano — nenhum dado sensível exposto.
const SAFRA_API_URL = 'https://portalmmcebolas.com/api/public/safra'

export default function SafraBadge() {
  const [ativa, setAtiva] = useState<boolean | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(SAFRA_API_URL)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data) setAtiva(!!data.ativa)
      })
      .catch(() => {
        /* offline ou portal fora do ar — simplesmente não mostra o indicador */
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <AnimatePresence>
      {ativa !== null && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className={`safra-float ${ativa ? 'safra-ativa' : 'safra-inativa'}`}
        >
          <span className="safra-float-dot" />
          <span className="safra-float-text">
            <strong>{ativa ? 'Safra Ativa' : 'Fora de Safra'}</strong>
            <span>{ativa ? 'Colheita em andamento agora' : 'Aguardando o próximo ciclo'}</span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
