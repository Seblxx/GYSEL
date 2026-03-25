import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Droplets, Scissors, Snowflake, ChevronLeft, ChevronRight } from 'lucide-react'
import './Home.css'
import { useLanguage } from '../contexts/LanguageContext'

const defaultHighlights = [
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

export default function Home() {
  const { t, lang } = useLanguage()

  const icons = [<Leaf size={32} />, <Droplets size={32} />, <Scissors size={32} />, <Snowflake size={32} />]
  const localeHighlights = t('home.highlights') || []
  const highlights = (localeHighlights.length > 0)
    ? localeHighlights.map((h, i) => ({ icon: icons[i] || <Leaf size={32} />, title: h.title, desc: h.desc }))
    : defaultHighlights

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/GYSEL%20HOMEII.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="hero-quote">{t('home.hero.quote')}</p>
          <div className="hero-btns">
            <Link to="/services" className="btn-secondary">
              {t('home.hero.cta1')} <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              {t('home.hero.cta2')}
            </Link>
          </div>
          <div className="hero-partners">
            <p className="partners-title">{lang === 'fr' ? 'Ils nous font confiance' : 'They trust us'}</p>
            <div className="partners-logos">
              <img src="/COSTCO LOGO.png" alt="Costco" className="partner-logo" />
              <img src="/IMMEX.png" alt="Immex" className="partner-logo partner-logo-immex" />
              <img src="/ROYER.png" alt="Royer" className="partner-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="intro-overlay" />
        <div className="container intro-content">
          <div className="intro-badge">
            <img src="/estrie.png" alt="LE #1 EN ESTRIE" />
          </div>
          <h2 className="intro-title">{t('home.intro.title') || 'Spécialiste en espaces verts.'}</h2>
          <p className="intro-text">{t('home.intro.p1') || `Depuis sa création, Le Groupe Gysel est reconnu pour ses services de qualité, son efficacité exceptionnelle et son professionnalisme sans pareil. Quel que soit le service que vous recherchez et vos attentes, avec nous vous aurez la garantie d'une entière satisfaction.`}</p>
          <p className="intro-text">{t('home.intro.p2') || `Notre équipe est prête à répondre à toutes les demandes, et gère chaque projet avec le professionnalisme attendu par nos clients.`}</p>
          <Link to="/services" className="btn-intro">
            {t('home.intro.cta') || 'Découvrir nos services'}
          </Link>
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
              {t('seeAll.services') || 'Voir tous les services'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">{lang === 'fr' ? 'Ce que disent nos clients' : 'What our clients say'}</h2>
          <p className="section-subtitle">{lang === 'fr' ? 'La satisfaction de nos clients est notre priorité' : 'Our clients\' satisfaction is our priority'}</p>
          
          <div className="testimonials-carousel">
            <button className="carousel-arrow carousel-arrow-left" onClick={() => { const track = document.querySelector('.testimonials-track'); track.scrollBy({ left: -400, behavior: 'smooth' }) }}>
              <ChevronLeft size={24} />
            </button>
            <div className="testimonials-track">
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  {lang === 'fr' 
                    ? '"Service exceptionnel! Notre pelouse n\'a jamais été aussi belle. L\'équipe est professionnelle et ponctuelle."'
                    : '"Exceptional service! Our lawn has never looked better. The team is professional and punctual."'}
                </p>
                <div className="testimonial-author">
                  <strong>Marie Dubois</strong>
                  <span>{lang === 'fr' ? 'Cliente résidentielle' : 'Residential Client'}</span>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  {lang === 'fr'
                    ? '"Le terreautage et l\'hydro-ensemencement ont transformé notre terrain. Résultats impressionnants!"'
                    : '"The top dressing and hydro-seeding transformed our property. Impressive results!"'}
                </p>
                <div className="testimonial-author">
                  <strong>Jean Tremblay</strong>
                  <span>{lang === 'fr' ? 'Client commercial' : 'Commercial Client'}</span>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  {lang === 'fr'
                    ? '"Excellent rapport qualité-prix. Je recommande fortement Le Groupe Gysel pour tous vos besoins en entretien paysager."'
                    : '"Excellent value for money. I highly recommend Le Groupe Gysel for all your landscaping needs."'}
                </p>
                <div className="testimonial-author">
                  <strong>Sophie Bergeron</strong>
                  <span>{lang === 'fr' ? 'Cliente résidentielle' : 'Residential Client'}</span>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  {lang === 'fr'
                    ? '"Depuis que Le Groupe Gysel s\'occupe de notre terrain, nous recevons des compliments de tous nos voisins!"'
                    : '"Since Le Groupe Gysel started taking care of our property, we receive compliments from all our neighbors!"'}
                </p>
                <div className="testimonial-author">
                  <strong>Pierre Lavoie</strong>
                  <span>{lang === 'fr' ? 'Client résidentiel' : 'Residential Client'}</span>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  {lang === 'fr'
                    ? '"La tondeuse robot a changé notre vie! Plus besoin de tondre et le résultat est impeccable toute la saison."'
                    : '"The robot mower changed our lives! No more mowing and the result is flawless all season long."'}
                </p>
                <div className="testimonial-author">
                  <strong>Isabelle Côté</strong>
                  <span>{lang === 'fr' ? 'Cliente résidentielle' : 'Residential Client'}</span>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  {lang === 'fr'
                    ? '"Équipe fiable et travail soigné. Le nettoyage de notre stationnement commercial est toujours parfait."'
                    : '"Reliable team and meticulous work. Our commercial parking lot cleaning is always perfect."'}
                </p>
                <div className="testimonial-author">
                  <strong>Marc-André Roy</strong>
                  <span>{lang === 'fr' ? 'Client commercial' : 'Commercial Client'}</span>
                </div>
              </div>
            </div>
            <button className="carousel-arrow carousel-arrow-right" onClick={() => { const track = document.querySelector('.testimonials-track'); track.scrollBy({ left: 400, behavior: 'smooth' }) }}>
              <ChevronRight size={24} />
            </button>
          </div>
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
