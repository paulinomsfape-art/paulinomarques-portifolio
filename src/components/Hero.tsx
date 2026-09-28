import { ArrowRight, Download, School, BarChart3, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">TECNOLOGIA A SERVIÇO DA EDUCAÇÃO PÚBLICA</div>
          <h1>Paulino Marques</h1>
          <h2>Educação <span>•</span> Tecnologia <span>•</span> GovTech</h2>
          <p className="hero-text">
            Desenvolvimento de soluções digitais para gestão educacional,
            acompanhamento pedagógico e administração pública.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#projetos">Conheça meus projetos <ArrowRight size={18}/></a>
            <a className="btn btn-secondary" href="/curriculo-paulino-marques.pdf" target="_blank" rel="noreferrer">
              Baixar currículo <Download size={18}/>
            </a>
          </div>
          <div className="hero-points">
            <div><School/><span>Educação<br/>mais eficiente</span></div>
            <div><ShieldCheck/><span>Gestão pública<br/>mais organizada</span></div>
            <div><BarChart3/><span>Tecnologia<br/>orientada por dados</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Prévia de dashboard educacional">
          <div className="glow glow-a"></div>
          <div className="glow glow-b"></div>
          <div className="dashboard-shell">
            <div className="dash-top">
              <span className="mini-logo">PM</span>
              <div>
                <strong>MP GovTech</strong>
                <small>Visão geral da rede</small>
              </div>
              <span className="status-dot">online</span>
            </div>
            <div className="metrics">
              <div className="metric"><small>Escolas</small><strong>42</strong><span>+12%</span></div>
              <div className="metric"><small>Estudantes</small><strong>12.580</strong><span>+8%</span></div>
              <div className="metric"><small>Frequência</small><strong>92%</strong><span>+2%</span></div>
            </div>
            <div className="chart-card">
              <div className="chart-head"><strong>Evolução da aprendizagem</strong><span>6 meses</span></div>
              <div className="fake-chart">
                <div className="grid-line g1"></div><div className="grid-line g2"></div><div className="grid-line g3"></div>
                <svg viewBox="0 0 500 160" preserveAspectRatio="none" role="img">
                  <polyline points="0,130 80,110 160,116 240,80 320,88 400,45 500,58" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="dash-row">
              <div><b>Indicadores</b><span>Dados integrados</span></div>
              <div><b>Relatórios</b><span>Apoio à decisão</span></div>
            </div>
          </div>
          <div className="floating-card float-one"><BarChart3 size={20}/><span>Mais dados para<br/><b>melhores decisões</b></span></div>
          <div className="floating-card float-two"><ShieldCheck size={20}/><span>Gestão educacional<br/><b>com propósito</b></span></div>
        </div>
      </div>
    </section>
  )
}
