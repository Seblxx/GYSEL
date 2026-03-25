import { Link } from "react-router-dom";
import {
  Snowflake,
  ArrowRight,
  CheckCircle,
  Truck,
  Clock,
  Shield,
} from "lucide-react";
import "./Neige.css";
import { useLanguage } from '../contexts/LanguageContext'

export default function Neige() {
  const { t } = useLanguage()

  const features = (t('neige.features') || []).map((f, i) => ({
    icon: [<Truck size={32} />, <Shield size={32} />, <Clock size={32} />, <Truck size={32} />][i] || <Truck size={32} />,
    title: f.title,
    desc: f.desc,
  }))

  const advantages = t('neige.advantages') || []

  return (
    <div className="neige-page">
      {/* HERO */}
      <section className="neige-hero">
        <div className="neige-hero-overlay" />
        <div className="container neige-hero-content">
          <div className="logo-ineige ">
            <img src="/ineige-web.png" alt="Logo ineige" />
          </div>
          <h1>{t('neige.hero.title')}</h1>
          <p>{t('neige.hero.desc')}</p>

          <p>
            <strong>{t('neige.hero.assurance')}</strong>
          </p>
          <div className="neige-hero-btns">
            <Link to="/contact" className="btn-primary-hiver">
              {t('neige.hero.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="neige-features">
        <div className="container">
          <div className="neige-features-header">
            <h2 className="section-title-hiver">{t('neige.featuresTitle')}</h2>
            <p className="section-subtitle-hiver">{t('neige.featuresSubtitle')}</p>
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
          <a href="/contact" className="btn-primary-hiver feature-btn">
            {t('neige.hero.cta')}
          </a>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="neige-advantages">
        <div className="container neige-adv-inner">
          <div className="neige-adv-text">
            <h2>{t('neige.why.title') || 'Pourquoi choisir iNeige ?'}</h2>
            <p>{t('neige.why.p') || `Avec iNeige, bénéficiez de l'expertise du Groupe Gysel pour un hiver sans tracas. Notre équipe professionnelle s'occupe de tout pour que vous puissiez profiter de la saison.`}</p>
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
            <div className="neige-col-image">
              <img src="/images/img-section-avantage.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="neige-cta">
        <div className="container" style={{ textAlign: "center" }}>
          <Snowflake size={48} className="neige-cta-icon" />
          <h2>{t('neige.cta.title') || 'Prêt pour l\'hiver ?'}</h2>
          <p>{t('neige.cta.desc') || 'Réservez votre forfait de déneigement dès maintenant et profitez d\'un tarif préférentiel.'}</p>
          <Link to="/contact" className="btn-primary-hiver">
            {t('neige.cta.btn') || 'Demander un devis'} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
