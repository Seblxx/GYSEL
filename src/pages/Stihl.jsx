import './Stihl.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext'

export default function Stihl() {
  const navigate = useNavigate();
  const { t } = useLanguage()
  return (
    <div className="stihl-page">
      <img src="/stihl.png" alt="STIHL" className="stihl-img" />
      <h1>{t('stihl.title')}</h1>
      <div className="stihl-content">
        <div className="stihl-highlight">{t('stihl.highlight')}</div>
        <div className="stihl-info-block">
          <span className="stihl-info-title">{t('stihl.installationTitle')}</span>
          <p className="stihl-info-text">
            {t('stihl.installationDesc')}
          </p>
        </div>
        <div className="stihl-info-block">
          <span className="stihl-info-title">{t('stihl.contactTitle')}</span>
          <p className="stihl-contact">{t('stihl.contactDesc')}</p>
        </div>
        <button className="stihl-btn" onClick={() => navigate('/contact')}>{t('stihl.btn')}</button>
      </div>
    </div>
  );
}
