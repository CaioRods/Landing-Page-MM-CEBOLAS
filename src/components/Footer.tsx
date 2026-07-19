import logo from '../assets/logo.png'
import { Facebook, Instagram, Linkedin, Whatsapp } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="M&M Cebolas" />
              <span>
                <strong>M&amp;M</strong>
                <span>CEBOLAS</span>
              </span>
            </div>
            <p className="footer-about">
              Excelência que vem do campo, chega a todo o Brasil.
            </p>
            <div className="footer-social">
              <a href="#contato" aria-label="Instagram"><Instagram className="icon-18" /></a>
              <a href="#contato" aria-label="Facebook"><Facebook className="icon-18" /></a>
              <a href="#contato" aria-label="LinkedIn"><Linkedin className="icon-18" /></a>
              <a href="#contato" aria-label="WhatsApp"><Whatsapp className="icon-18" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navegação</h4>
            <a href="#inicio">Início</a>
            <a href="#quem-somos">Quem Somos</a>
            <a href="#marca">A Marca</a>
            <a href="#produtos">Produtos</a>
            <a href="#processo">Processo</a>
          </div>

          <div className="footer-col">
            <h4>Institucional</h4>
            <a href="#estrutura">Estrutura</a>
            <a href="#qualidade">Qualidade</a>
            <a href="#atuacao">Atuação</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <p>[Telefone / WhatsApp]</p>
            <p>[E-mail de contato]</p>
            <p>[Endereço da empresa]</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} M&amp;M Cebolas. Todos os direitos reservados.</span>
          <span>Política de Privacidade · Termos de Uso</span>
        </div>
      </div>
    </footer>
  )
}
