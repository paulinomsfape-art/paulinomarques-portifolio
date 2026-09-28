import { BrainCircuit, Code2, GraduationCap, Landmark, Layers3, Database, Sparkles, Smartphone } from 'lucide-react'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section" id="sobre">
        <div className="container split-section">
          <div>
            <div className="section-kicker">SOBRE MIM</div>
            <h2 className="section-title">Da educação pública para a construção de soluções digitais.</h2>
          </div>
          <div className="about-copy">
            <p>
              Professor, profissional da gestão educacional e desenvolvedor de soluções digitais.
              Minha experiência em escolas e na gestão pública orienta a criação de ferramentas voltadas
              a problemas reais de acompanhamento pedagógico, dados e processos administrativos.
            </p>
            <div className="about-stats">
              <div><b>Educação</b><span>Experiência pedagógica</span></div>
              <div><b>Gestão</b><span>Processos e indicadores</span></div>
              <div><b>Tecnologia</b><span>Produtos digitais</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projetos">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">PORTFÓLIO</div>
              <h2 className="section-title">Projetos em destaque</h2>
              <p>Uma seleção de soluções em educação, gestão pública e automação.</p>
            </div>
            <div className="project-count">{projects.length.toString().padStart(2,'0')} projetos</div>
          </div>
          <div className="projects-grid">
            {projects.map(project => <ProjectCard key={project.slug} project={project}/>)}
          </div>
        </div>
      </section>

      <section className="section" id="tecnologias">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">O QUE EU DESENVOLVO</div>
              <h2 className="section-title">Tecnologia aplicada a problemas reais.</h2>
            </div>
          </div>
          <div className="feature-grid">
            <div className="feature-card"><Code2/><h3>Sistemas Web</h3><p>Aplicações responsivas para computador, tablet e celular.</p></div>
            <div className="feature-card"><GraduationCap/><h3>Educação Digital</h3><p>Ferramentas para ensino, avaliação e acompanhamento pedagógico.</p></div>
            <div className="feature-card"><Landmark/><h3>GovTech</h3><p>Soluções para processos de gestão pública e educacional.</p></div>
            <div className="feature-card"><BrainCircuit/><h3>Inteligência Artificial</h3><p>IA como apoio à análise, automação e produção de conteúdos.</p></div>
          </div>

          <div className="tech-panel">
            <div className="tech-title">
              <span>Tecnologias e recursos</span>
              <small>Stack utilizada nos projetos</small>
            </div>
            <div className="tech-chips">
              <span><Layers3/>React</span>
              <span><Code2/>TypeScript</span>
              <span><Database/>Firebase / Firestore</span>
              <span><Sparkles/>IA generativa</span>
              <span><Smartphone/>Design responsivo</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
