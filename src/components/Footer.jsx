import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo-GG-blanc.png" alt="Le Groupe Gysel" className="footer-logo" />
            <p className="footer-tagline">
              Domptez votre terrain, devenez la fierté de l'Estrie.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/ineige">iNeige</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services populaires</h4>
            <ul>
              <li><Link to="/services">Traitement de pelouse</Link></li>
              <li><Link to="/services">Tonte de pelouse</Link></li>
              <li><Link to="/services">Terreautage</Link></li>
              <li><Link to="/services">Hydro-ensemencement</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Nous joindre</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} />
                <span>7702 chemin de St-Élie, Sherbrooke, QC J1R 0C4</span>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:819-348-9513">819-348-9513</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:info@groupegysel.com">info@groupegysel.com</a>
              </li>
            </ul>
            <div className="footer-socials">
              <a href="https://www.facebook.com/groupegysel" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <ExternalLink size={20} />
              </a>
              <a href="https://www.instagram.com/groupe_gysel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Le Groupe Gysel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
