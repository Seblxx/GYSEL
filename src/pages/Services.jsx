import { Link } from 'react-router-dom'
import {
  Leaf, Droplets, Scissors, TreePine, Sparkles, Bot,
  Flower2, ParkingCircle, Wrench, Shovel, ArrowRight
} from 'lucide-react'
import './Services.css'
import { useLanguage } from '../contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const services = (t('services.list') || []).map((s, i) => ({
    icon: [<Leaf size={36} />, <Sparkles size={36} />, <Droplets size={36} />, <TreePine size={36} />, <Bot size={36} />, <Flower2 size={36} />, <Leaf size={36} />, <Scissors size={36} />, <ParkingCircle size={36} />, <Wrench size={36} />, <Shovel size={36} />][i] || <Leaf size={36} />,
    title: s.title,
    desc: s.desc,
    color: ['#4a7c3f','#5a8f4a','#3a6b2e','#4a7c3f','#5a8f4a','#7ab648','#3a6b2e','#4a7c3f','#5a8f4a','#3a6b2e','#4a7c3f'][i] || '#4a7c3f'
  }))

  return (
    <div className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="container">
          <h1>{t('services.title')}</h1>
          <p>{t('services.desc')}</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon" style={{ background: s.color }}>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERREAUTAGE FEATURE */}
      <section className="feature-section">
        <div className="container feature-inner">
          <div className="feature-text">
            <span className="feature-badge">{t('services.feature.badge')}</span>
            <h2>{t('services.feature.title')}</h2>
            <p>{t('services.feature.p')}</p>
            <ul className="feature-list">
              {(t('services.feature.list') || []).map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </ul>
          </div>
          <div className="feature-visual">
            <div className="feature-big-icon">
              <Sparkles size={80} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>{t('services.cta.title')}</h2>
          <p>{t('services.cta.desc')}</p>
          <Link to="/contact" className="btn-primary">
            {t('services.cta.btn')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
