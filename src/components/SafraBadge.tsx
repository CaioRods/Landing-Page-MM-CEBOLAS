import { useEffect, useState } from 'react'

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

  if (ativa === null) return null

  return (
    <span className={`safra-badge ${ativa ? 'safra-ativa' : 'safra-inativa'}`}>
      <span className="safra-dot" />
      {ativa ? 'Safra Ativa' : 'Fora de Safra'}
    </span>
  )
}
