import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark">PM</span><span>Paulino Marques</span></div>
          <p>Educação • Tecnologia • GovTech</p>
          <small>Portfólio profissional de Paulino Marques.</small>
        </div>
        <div>
          <h4>Contato</h4>
          <a href="mailto:SEU_EMAIL_AQUI"><Mail size={17}/> SEU_EMAIL_AQUI</a>
          <p className="footer-note">Substitua o e-mail e os links sociais pelos seus dados antes de publicar.</p>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
        </div>
      </div>
    </footer>
  )
}
