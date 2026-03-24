import { Link } from 'react-router-dom'
import {
  Leaf, Droplets, Scissors, TreePine, Sparkles, Bot,
  Flower2, ParkingCircle, Wrench, Shovel, ArrowRight
} from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Leaf size={36} />,
    title: 'Traitement de pelouse',
    desc: 'Un problème avec votre pelouse ? Nous sommes les spécialistes. Pour une apparence soignée et en santé.',
    color: '#4a7c3f',
  },
  {
    icon: <Sparkles size={36} />,
    title: 'Terreautage haute performance',
    desc: 'Transformez votre sol ! Ne remplacez plus votre gazon, régénérez-le en profondeur grâce à notre terreautage biologique.',
    color: '#5a8f4a',
  },
  {
    icon: <Droplets size={36} />,
    title: 'Hydro-ensemencement',
    desc: 'La clé du gazon parfait. 3x moins cher ! Nous avons les meilleures techniques pour réparer et ensemencer toutes les superficies.',
    color: '#3a6b2e',
  },
  {
    icon: <TreePine size={36} />,
    title: 'Entretien et aménagement paysager',
    desc: 'Conception, installation et entretien d\'espaces extérieurs : jardins, pelouses, arbres, plantes et taillage de haies.',
    color: '#4a7c3f',
  },
  {
    icon: <Bot size={36} />,
    title: 'Tondeuse Robot',
    desc: 'Technologique comme vous ! Installation de qualité pour votre tondeuse robot par notre équipe d\'experts.',
    color: '#5a8f4a',
  },
  {
    icon: <Flower2 size={36} />,
    title: 'Nettoyage de printemps',
    desc: 'Débutez la saison estivale du bon pied avec notre équipe motivée !',
    color: '#7ab648',
  },
  {
    icon: <Leaf size={36} />,
    title: 'Nettoyage d\'automne',
    desc: 'Déchargez-vous d\'une tâche en nous confiant votre hivernisation.',
    color: '#3a6b2e',
  },
  {
    icon: <Scissors size={36} />,
    title: 'Tonte de pelouse',
    desc: 'Tonte hebdomadaire, nettoyage des débris, odeur de gazon frais garanti !',
    color: '#4a7c3f',
  },
  {
    icon: <ParkingCircle size={36} />,
    title: 'Nettoyage de stationnement',
    desc: 'Effacez l\'hiver, redonnez du prestige à votre espace. Redonnez vie à votre stationnement après un hiver intense.',
    color: '#5a8f4a',
  },
  {
    icon: <Wrench size={36} />,
    title: 'Réparation de pelouse',
    desc: 'Domptez votre terrain ! Nos équipements spécialisés sont conçus pour réparer votre pelouse.',
    color: '#3a6b2e',
  },
  {
    icon: <Shovel size={36} />,
    title: 'Terrassement et excavation',
    desc: 'Pose de muret et pavé, location de pelle mécanique avec ou sans opérateur.',
    color: '#4a7c3f',
  },
]

export default function Services() {
  return (
    <div className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="container">
          <h1>Nos Services</h1>
          <p>
            Des solutions complètes pour l'entretien et l'aménagement de vos espaces verts.
            Résidentiel et commercial en Estrie.
          </p>
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
            <span className="feature-badge">Nouveau</span>
            <h2>Terreautage Haute Performance</h2>
            <p>
              Découvrez le Terreautage Haute Performance. Une solution biologique pour densifier
              votre pelouse et enrichir votre terrain en profondeur.
            </p>
            <ul className="feature-list">
              <li>Solution 100% biologique</li>
              <li>Densifie la pelouse existante</li>
              <li>Enrichit le sol en profondeur</li>
              <li>Résultats visibles rapidement</li>
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
          <h2>Prêt à transformer votre terrain ?</h2>
          <p>Contactez-nous pour une évaluation gratuite de vos besoins.</p>
          <Link to="/contact" className="btn-primary">
            Demander une évaluation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
