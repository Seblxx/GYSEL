import { Link } from 'react-router-dom'
import { Snowflake, ArrowRight, CheckCircle, Truck, Clock, Shield } from 'lucide-react'
import './Neige.css'

const features = [
  {
    icon: <Truck size={32} />,
    title: 'Déneigement résidentiel',
    desc: 'Service rapide et fiable pour votre entrée, stationnement et trottoirs.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Déneigement commercial',
    desc: 'Solutions sur mesure pour vos espaces commerciaux et stationnements.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Service 24/7',
    desc: 'Intervention rapide lors de tempêtes, peu importe l\'heure.',
  },
]

const advantages = [
  'Service rapide et fiable',
  'Équipement professionnel',
  'Forfaits saisonniers avantageux',
  'Couverture complète en Estrie',
  'Équipe expérimentée',
  'Déglaçage inclus',
]

export default function Neige() {
  return (
    <div className="neige-page">
      {/* HERO */}
      <section className="neige-hero">
        <div className="neige-hero-overlay" />
        <div className="container neige-hero-content">
          <div className="neige-badge">
            <Snowflake size={20} />
            iNeige
          </div>
          <h1>Pelleter est une chose du passé.</h1>
          <p>
            Découvrez iNeige, le service de déneigement professionnel du Groupe Gysel.
            Libérez-vous de cette corvée hivernale et profitez de l'hiver en toute tranquillité.
          </p>
          <div className="neige-hero-btns">
            <Link to="/contact" className="btn-primary">
              Obtenir un forfait <ArrowRight size={18} />
            </Link>
            <a href="https://ineige.ca/" target="_blank" rel="noopener noreferrer" className="btn-neige-outline">
              Visiter iNeige.ca <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="neige-features">
        <div className="container">
          <div className="neige-features-header">
            <h2 className="section-title">Services de déneigement</h2>
            <p className="section-subtitle">
              Des solutions adaptées pour passer l'hiver sans souci.
            </p>
          </div>
          <div className="neige-features-grid">
            {features.map((f, i) => (
              <div key={i} className="neige-feature-card">
                <div className="neige-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="neige-advantages">
        <div className="container neige-adv-inner">
          <div className="neige-adv-text">
            <h2>Pourquoi choisir iNeige ?</h2>
            <p>
              Avec iNeige, bénéficiez de l'expertise du Groupe Gysel pour un hiver sans tracas.
              Notre équipe professionnelle s'occupe de tout pour que vous puissiez profiter de la saison.
            </p>
            <ul className="neige-adv-list">
              {advantages.map((a, i) => (
                <li key={i}>
                  <CheckCircle size={20} />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="neige-adv-visual">
            <div className="neige-big-snowflake">
              <Snowflake size={100} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="neige-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <Snowflake size={48} className="neige-cta-icon" />
          <h2>Prêt pour l'hiver ?</h2>
          <p>Réservez votre forfait de déneigement dès maintenant et profitez d'un tarif préférentiel.</p>
          <Link to="/contact" className="btn-primary">
            Demander un devis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
