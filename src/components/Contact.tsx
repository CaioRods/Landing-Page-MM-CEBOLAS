import Reveal from './Reveal'
import { ArrowRight, Clock, Mail, Phone, Pin } from './Icons'

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <Reveal direction="left">
            <span className="eyebrow">Fale conosco</span>
            <h2 className="heading">Estamos prontos<br />para atender você.</h2>

            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-item-icon"><Phone className="icon-20" /></span>
                <div>
                  <strong>[Telefone / WhatsApp]</strong>
                  <span>Atendimento comercial</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item-icon"><Mail className="icon-20" /></span>
                <div>
                  <strong>[E-mail de contato]</strong>
                  <span>Orçamentos e parcerias</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item-icon"><Pin className="icon-20" /></span>
                <div>
                  <strong>[Endereço da empresa]</strong>
                  <span>[Cidade — Estado]</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item-icon"><Clock className="icon-20" /></span>
                <div>
                  <strong>Segunda a Sexta: 7h às 17h</strong>
                  <span>Sábado: 7h às 12h</span>
                </div>
              </div>
            </div>

            <a href="#contato" className="btn btn-orange">
              Solicitar orçamento
              <ArrowRight />
            </a>
          </Reveal>
        </div>

        <div className="contact-map">
          <img src="/img/campo-linhas.jpg" alt="Localização M&M Cebolas" loading="lazy" />
          <div className="contact-pin">
            <strong>M&amp;M Cebolas</strong>
            <span>[Cidade — Estado]</span>
          </div>
        </div>
      </div>
    </section>
  )
}
