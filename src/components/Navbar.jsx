import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/services', label: 'Services' },
    { to: '/ineige', label: 'iNeige' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img src="/logo-GG-blanc.png" alt="Le Groupe Gysel" />
          <div className="logo-text">
            <span className="logo-title">LE GROUPE</span>
            <span className="logo-name">GYSEL</span>
            <span className="logo-sub">#1 EN ESTRIE</span>
          </div>
        </Link>

        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={pathname === l.to ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="nav-cta">
            <a href="tel:819-348-9513" className="btn-phone">
              <Phone size={16} />
              819-348-9513
            </a>
          </li>
        </ul>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  )
}
