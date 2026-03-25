import './Stihl.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext'


export default function Stihl() {
  const navigate = useNavigate();
  const { t } = useLanguage()
  

  return (
    <div className="stihl-page">
      <div className="stihl-container">
        <div className="stihl-top">
          <img src="/stihl.png" alt="STIHL" className="stihl-logo" />
          <h1 className="stihl-title">{t('stihl.title')}</h1>
        </div>

        <div className="stihl-hero">
          <div className="stihl-video">
            <iframe
              src="https://www.youtube.com/embed/oL7mnX0tYZY?rel=0"
              title="Tondeuse robotisée - vidéo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="stihl-hero-info">
            <p className="stihl-desc">{t('stihl.highlight')}</p>
            <div className="stihl-cta-row">
              <button className="stihl-btn" onClick={() => navigate('/contact')}>{t('stihl.btn')}</button>
            </div>
          </div>
        </div>

        <div className="stihl-content">
          <div className="stihl-highlight">{t('stihl.highlight')}</div>
          <div className="stihl-info-grid">
            <div className="stihl-info-block">
              <span className="stihl-info-title">{t('stihl.installationTitle')}</span>
              <p className="stihl-info-text">{t('stihl.installationDesc')}</p>
            </div>
            <div className="stihl-info-block">
              <span className="stihl-info-title">{t('stihl.contactTitle')}</span>
              <p className="stihl-contact">{t('stihl.contactDesc')}</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
