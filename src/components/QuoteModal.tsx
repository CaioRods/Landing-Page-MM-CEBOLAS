import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

type Role = 'cliente' | 'fornecedor' | null

export default function QuoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState<Role>(null)

  const handleClose = () => {
    onClose()
    // Reset state after animation finishes
    setTimeout(() => {
      setStep(1)
      setRole(null)
    }, 300)
  }

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step + 1)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="modal-content"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleClose}>
              ✕
            </button>

            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <div className="modal-header">
                  <h3>Como podemos ajudar?</h3>
                  <p>Selecione o seu perfil para direcionarmos o seu atendimento.</p>
                </div>
                <div className="modal-options">
                  <div className={`modal-option ${role === 'cliente' ? 'active' : ''}`} onClick={() => setRole('cliente')}>
                    <strong>Quero Comprar</strong>
                    <span>Sou um cliente buscando cebolas de qualidade</span>
                  </div>
                  <div className={`modal-option ${role === 'fornecedor' ? 'active' : ''}`} onClick={() => setRole('fornecedor')}>
                    <strong>Quero Vender</strong>
                    <span>Sou um produtor/fornecedor</span>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-green" disabled={!role} onClick={() => setStep(2)}>
                    Continuar
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.form onSubmit={handleNext} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <div className="modal-header">
                  <h3>{role === 'cliente' ? 'Dados do Cliente' : 'Dados do Fornecedor'}</h3>
                  <p>Preencha os dados abaixo para entrarmos em contato.</p>
                </div>
                <div className="modal-form">
                  <div className="form-group">
                    <label>Nome Completo</label>
                    <input type="text" required placeholder="Seu nome" />
                  </div>
                  <div className="form-group">
                    <label>{role === 'cliente' ? 'Empresa' : 'Fazenda / Propriedade'}</label>
                    <input type="text" required placeholder={role === 'cliente' ? 'Nome da empresa' : 'Nome da propriedade'} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>E-mail</label>
                      <input type="email" required placeholder="seu@email.com" />
                    </div>
                    <div className="form-group">
                      <label>Telefone / WhatsApp</label>
                      <input type="tel" required placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>{role === 'cliente' ? 'Volume Estimado' : 'Variedade que produz'}</label>
                    <input type="text" required placeholder={role === 'cliente' ? 'Ex: 100 sacos por semana' : 'Ex: Cebola Amarela, Roxa'} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-light" onClick={() => setStep(1)}>
                    Voltar
                  </button>
                  <button type="submit" className="btn btn-orange">
                    Enviar Solicitação
                  </button>
                </div>
              </motion.form>
            )}

            {step === 3 && (
              <motion.div className="modal-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="modal-success-icon">✓</div>
                <h3>Solicitação Enviada!</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '12px', marginBottom: '24px' }}>
                  Recebemos seus dados com sucesso. Em breve nossa equipe entrará em contato.
                </p>
                <button className="btn btn-green" onClick={handleClose}>
                  Concluir
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
