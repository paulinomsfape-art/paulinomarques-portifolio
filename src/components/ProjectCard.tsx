import { ArrowUpRight, PlayCircle } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-preview" style={{'--accent': project.accent} as CSSProperties}>
        <div className="preview-top">
          <span className="preview-mark">{project.shortTitle.slice(0, 2)}</span>
          <span>{project.shortTitle}</span>
        </div>
        <div className="preview-body">
          <div className="preview-stat"><span>Dados</span><b>100%</b></div>
          <div className="preview-stat"><span>Status</span><b>Ativo</b></div>
          <div className="preview-bars"><i></i><i></i><i></i><i></i><i></i></div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-category">{project.category}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.highlights.slice(0,3).map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-actions">
          <Link className="btn btn-card" to={`/projeto/${project.slug}`}>Conhecer projeto <ArrowUpRight size={17}/></Link>
          {project.videoUrl ? <a className="text-link" href={project.videoUrl} target="_blank" rel="noreferrer"><PlayCircle size={17}/> Vídeo</a> : <span className="text-muted"><PlayCircle size={17}/> Vídeo em breve</span>}
        </div>
      </div>
    </article>
  )
}
