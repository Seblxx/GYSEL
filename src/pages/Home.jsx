import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Droplets, Scissors, Snowflake, Star, Shield, Clock } from 'lucide-react'
import './Home.css'
import { useLanguage } from '../contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  const highlights = (t('home.highlights') || []).map((h, i) => ({
    icon: [<Leaf size={32} />, <Droplets size={32} />, <Scissors size={32} />, <Snowflake size={32} />][i] || <Leaf size={32} />,
    title: h.title,
    desc: h.desc,
  }))

  const stats = t('home.stats') || []

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/79998-570766625_medium.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="hero-quote">{t('home.hero.quote')}</p>
          <div className="hero-btns">
            <Link to="/services" className="btn-primary">
              {t('home.hero.cta1')} <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              {t('home.hero.cta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="container intro-inner">
          <div className="intro-text">
            <h2 className="section-title">{t('services.title') /* reuse services title */}</h2>
            <p>{t('services.desc')}</p>
            <p>{/* keep empty or additional copy could go here */}</p>
            <Link to="/services" className="btn-primary" style={{ marginTop: 24 }}>
              {t('home.hero.cta1')}
            </Link>
          </div>
          <div className="intro-visual">
            <div className="intro-card">
              <Shield size={40} />
              <h3>Professionnalisme</h3>
              <p>Des experts certifiés à votre service</p>
            </div>
            <div className="intro-card">
              <Star size={40} />
              <h3>Qualité</h3>
              <p>Des résultats qui dépassent vos attentes</p>
            </div>
            <div className="intro-card">
              <Clock size={40} />
              <h3>Fiabilité</h3>
              <p>Ponctualité et service régulier garanti</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="highlights">
        <div className="container">
          <div className="highlights-header">
            <h2 className="section-title" style={{ color: '#fff' }}>{t('home.highlightsTitle') || 'Nos experts pour votre résidence ou commerce'}</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)' }}>{t('home.highlightsSubtitle') || 'Des services complets pour transformer et maintenir vos espaces verts.'}</p>
          </div>
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-card">
                <div className="highlight-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services" className="btn-secondary">
              Voir tous les services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta-inner">
          <h2>{t('footer.tagline')}</h2>
          <p>{t('services.desc')}</p>
          <Link to="/contact" className="btn-primary">
            {t('home.hero.cta2')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
