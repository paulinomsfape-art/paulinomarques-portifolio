import { Moon, Sun, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => setOpen(false), [location.pathname])

  const homeLink = (hash: string) => location.pathname === '/' ? hash : `/${hash}`

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="Página inicial">
          <span className="brand-mark">PM</span>
          <span>Paulino Marques</span>
        </Link>

        <nav className={open ? 'nav open' : 'nav'}>
          <a href={homeLink('#inicio')}>Início</a>
          <a href={homeLink('#sobre')}>Sobre</a>
          <a href={homeLink('#projetos')}>Projetos</a>
          <a href={homeLink('#tecnologias')}>Tecnologias</a>
          <a href={homeLink('#contato')}>Contato</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setDark(v => !v)} aria-label="Alternar tema">
            {dark ? <Sun size={19}/> : <Moon size={19}/>}
          </button>
          <a className="btn btn-small" href={homeLink('#contato')}>Fale comigo</a>
          <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-label="Abrir menu">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </div>
    </header>
  )
}
