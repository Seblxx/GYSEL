import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Droplets, Scissors, Snowflake, Star, Shield, Clock } from 'lucide-react'
import './Home.css'

const highlights = [
  {
    icon: <Leaf size={32} />,
    title: 'Traitement de pelouse',
    desc: 'Un gazon vert et en santé grâce à nos traitements spécialisés.',
  },
  {
    icon: <Droplets size={32} />,
    title: 'Hydro-ensemencement',
    desc: '3x moins cher que la tourbe. La clé du gazon parfait.',
  },
  {
    icon: <Scissors size={32} />,
    title: 'Tonte & Entretien',
    desc: 'Tonte hebdomadaire et entretien paysager professionnel.',
  },
  {
    icon: <Snowflake size={32} />,
    title: 'Déneigement iNeige',
    desc: 'Pelleter est une chose du passé. Découvrez iNeige.',
  },
]

const stats = [
  { number: '10+', label: 'Années d\'expérience' },
  { number: '1000+', label: 'Clients satisfaits' },
  { number: '#1', label: 'En Estrie' },
  { number: '100%', label: 'Satisfaction garantie' },
]

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/79998-570766625_medium.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="hero-quote">
            "Cessez de regarder chez le voisin pour trouver un gazon parfait !"
          </p>
          <div className="hero-btns">
            <Link to="/services" className="btn-primary">
              Découvrir nos services <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Évaluation gratuite
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="container intro-inner">
          <div className="intro-text">
            <h2 className="section-title">Spécialiste en espaces verts</h2>
            <p>
              Depuis sa création, Le Groupe Gysel est reconnu pour ses services de qualité,
              son efficacité exceptionnelle et son professionnalisme sans pareil. Quel que soit
              le service que vous recherchez, avec nous vous aurez la garantie d'une entière satisfaction.
            </p>
            <p>
              Notre équipe est prête à répondre à toutes les demandes, et gère chaque projet
              avec le professionnalisme attendu par nos clients.
            </p>
            <Link to="/services" className="btn-primary" style={{ marginTop: 24 }}>
              Découvrir nos services
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
            <h2 className="section-title" style={{ color: '#fff' }}>
              Nos experts pour votre résidence ou commerce
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Des services complets pour transformer et maintenir vos espaces verts.
            </p>
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
          <h2>Domptez votre terrain, devenez la fierté de l'Estrie.</h2>
          <p>
            Nos équipements spécialisés sont conçus pour réparer, ensemencer et terreauter votre pelouse.
          </p>
          <Link to="/contact" className="btn-primary">
            Évaluation gratuite <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
