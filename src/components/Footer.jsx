import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import "./Footer.css";
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { pathname } = useLocation();
  const isHiver = pathname === "/ineige";
  const isStihl = pathname === "/stihl";
  const { t } = useLanguage()

  return (
    <footer className={`footer ${isHiver ? "footer-hiver" : ""} ${isStihl ? "footer-stihl" : ""}`}>
      <div className="footer-top">
        <div className="container footer-grid">
            <div className="footer-brand">
            <img
              src="/logo-GG-blanc.png"
              alt="Le Groupe Gysel"
              className="footer-logo"
            />
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer-col">
            <h4>{t('footer.navigationTitle')}</h4>
            <ul>
              <li>
                <Link to="/">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/services">{t('nav.services')}</Link>
              </li>
              <li>
                <Link to="/ineige">{t('nav.ineige')}</Link>
              </li>
              <li>
                <Link to="/contact">{t('nav.contact')}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.servicesTitle')}</h4>
            <ul>
              {t('services.list').slice(0,4).map((s, i) => (
                <li key={i}>
                  <Link to="/services">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.contactTitle')}</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} />
                <span>{t('footer.address')}</span>
              </li>
              <li>
                <Phone size={16} />
                <a href={`tel:${t('phone')}`}>{t('phone')}</a>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
              </li>
            </ul>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/groupegysel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://www.instagram.com/groupe_gysel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
