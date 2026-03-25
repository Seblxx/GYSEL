import './Stihl.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext'


export default function Stihl() {
  const navigate = useNavigate();
  const { t } = useLanguage()

  return (
    <div className="stihl-page">
      <section className="stihl-hero">
        <div className="hero-overlay" />
        <div className="container stihl-hero-content">
          <div className="stihl-hero-left">
            <h1 className="stihl-title">{t('stihl.title')}</h1>
            <p className="stihl-desc">{t('stihl.highlight')}</p>
            <div className="hero-cta">
              <button className="btn-primary btn-orange" onClick={() => navigate('/contact')}>{t('stihl.btn')}</button>
            </div>
          </div>
          <div className="stihl-hero-right">
            <img src="/stihl.png" alt="STIHL" className="stihl-logo" />
          </div>
        </div>
      </section>

      <section className="stihl-content container">
        <div className="stihl-info-grid">
          <div className="stihl-info-block">
            <span className="stihl-info-title">{t('stihl.installationTitle')}</span>
            <p className="stihl-info-text">{t('stihl.installationDesc')}</p>
          </div>
          <div className="stihl-info-block">
            <span className="stihl-info-title">{t('stihl.contactTitle')}</span>
            <p className="stihl-info-text">{t('stihl.contactDesc')}</p>
          </div>
        </div>

        <div className="stihl-video-wrap">
          <div className="stihl-video">
            <iframe
              src="https://www.youtube.com/embed/oL7mnX0tYZY?rel=0"
              title="Tondeuse robotisée - vidéo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
