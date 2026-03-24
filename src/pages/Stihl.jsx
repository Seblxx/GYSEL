import './Stihl.css';
import { useNavigate } from 'react-router-dom';

export default function Stihl() {
  const navigate = useNavigate();
  return (
    <div className="stihl-page">
      <img src="/stihl.png" alt="STIHL" className="stihl-img" />
      <h1>TONDEUSE ROBOTISÉE</h1>
      <div className="stihl-content">
        <div className="stihl-highlight">Tondre sera une histoire du passé !</div>
        <div className="stihl-info-block">
          <span className="stihl-info-title">Installation professionnelle</span>
          <p className="stihl-info-text">
            Besoin d'une installation de qualité pour votre tondeuse robot&nbsp;?<br />
            Faites confiance à notre équipe d'experts pour s'occuper de tout&nbsp;! <span role="img" aria-label="outil">🔧</span>
          </p>
        </div>
        <div className="stihl-info-block">
          <span className="stihl-info-title">Contactez-nous</span>
          <p className="stihl-contact">
            Contactez-nous dès aujourd'hui pour en savoir plus sur nos offres<br />
            et profitez d'un jardin impeccable grâce à notre service de Tondeuse Robot&nbsp;!
          </p>
        </div>
        <button className="stihl-btn" onClick={() => navigate('/contact')}>En savoir plus</button>
      </div>
    </div>
  );
}
