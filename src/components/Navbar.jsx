import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import './Navbar.css'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { lang, setLang, t } = useLanguage()

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/ineige', label: t('nav.ineige') },
    { to: '/stihl', label: t('nav.stihl') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const isHiver = pathname === '/ineige'
  const isStihl = pathname === '/stihl'
  const isHome = pathname === '/'
  
  // For non-home pages, always show scrolled state
  const showScrolled = isHome ? scrolled : true

  return (
    <nav className={`navbar ${showScrolled ? 'scrolled' : ''} ${isHiver ? 'navbar-hiver' : ''} ${isStihl ? 'navbar-stihl' : ''}`}>
      <div className="navbar-inner container">
        {/* Centered logo text - only visible before scroll */}
        <div className="navbar-center-logo">
          <span className="logo-prefix">LE GROUPE</span>
          <span className="logo-name">GYSEL</span>
        </div>

        {/* Left logo image - only visible after scroll */}
        <Link to="/" className="navbar-logo">
          <img src="/logo-GG-blanc.png" alt="Le Groupe Gysel" />
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
          <li className="nav-lang">
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              aria-label="Change language"
            >
              <span className={`lang-label ${lang === 'fr' ? 'active' : ''}`}>FR</span>
              <span className="lang-sep">/</span>
              <span className={`lang-label ${lang === 'en' ? 'active' : ''}`}>EN</span>
            </button>
          </li>
          <li className="nav-cta">
            <a href={`tel:${t('phone')}`} className="btn-phone">
              <Phone size={16} />
              {lang === 'fr' ? 'Appelez-nous' : 'Call us'}
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
