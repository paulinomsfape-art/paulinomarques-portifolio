import { ArrowLeft, ExternalLink, PlayCircle, CheckCircle2 } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <main className="section page-top">
        <div className="container">
          <h1>Projeto não encontrado</h1>
          <Link className="btn" to="/">Voltar ao portfólio</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="project-page">
      <section className="project-hero" style={{'--accent': project.accent} as CSSProperties}>
        <div className="container">
          <Link to="/" className="back-link"><ArrowLeft size={17}/> Voltar ao portfólio</Link>
          <div className="project-hero-grid">
            <div>
              <div className="section-kicker">{project.category}</div>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="detail-actions">
                {project.videoUrl ? (
                  <a className="btn" href={project.videoUrl} target="_blank" rel="noreferrer"><PlayCircle size={18}/> Assistir demonstração</a>
                ) : (
                  <span className="btn disabled"><PlayCircle size={18}/> Vídeo será adicionado</span>
                )}
                {project.demoUrl && <a className="btn btn-secondary" href={project.demoUrl} target="_blank" rel="noreferrer">Abrir demonstração <ExternalLink size={18}/></a>}
              </div>
            </div>
            <div className="detail-preview">
              <div className="detail-window">
                <div className="detail-window-top"><i></i><i></i><i></i><span>{project.shortTitle}</span></div>
                <div className="detail-window-content">
                  <div className="detail-side"></div>
                  <div className="detail-main">
                    <div className="detail-cards"><i></i><i></i><i></i></div>
                    <div className="detail-chart"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-block">
            <span className="detail-label">O PROBLEMA</span>
            <h2>Contexto</h2>
            <p>{project.problem}</p>
          </div>
          <div className="detail-block">
            <span className="detail-label">A SOLUÇÃO</span>
            <h2>Como o projeto responde</h2>
            <p>{project.solution}</p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">RECURSOS</div><h2 className="section-title">Principais funcionalidades</h2></div></div>
          <div className="highlights-grid">
            {project.highlights.map(item => <div key={item}><CheckCircle2/><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container project-meta">
          <div>
            <span className="detail-label">TECNOLOGIAS</span>
            <div className="tag-row large">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          </div>
          <div>
            <span className="detail-label">STATUS</span>
            <div className="status-pill">{project.status}</div>
          </div>
        </div>
      </section>

      <section className="section gallery-placeholder">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">GALERIA</div><h2 className="section-title">Imagens do projeto</h2><p>Substitua estes espaços por capturas reais do sistema.</p></div></div>
          <div className="gallery-grid">
            <div>Adicionar screenshot 01</div>
            <div>Adicionar screenshot 02</div>
            <div>Adicionar screenshot 03</div>
          </div>
        </div>
      </section>
    </main>
  )
}
