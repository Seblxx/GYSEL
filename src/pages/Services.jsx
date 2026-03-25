import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Services.css'
import { useLanguage } from '../contexts/LanguageContext'

export default function Services() {
  const { lang, t } = useLanguage()
  
  const services = [
    { img: '/1grass.jpg', titleFr: 'Traitement de pelouse', titleEn: 'Lawn Treatment' },
    { img: '/1grassii.jpg', titleFr: 'Terreautage', titleEn: 'Top Dressing' },
    { img: '/1grassIII.jpg', titleFr: 'Hydro-ensemencement', titleEn: 'Hydro-seeding' },
    { img: '/1landscape.jpg', titleFr: 'Entretien et aménagement paysager', titleEn: 'Landscape Maintenance & Design' },
    { img: '/1brightgrass.jpg', titleFr: 'Tondeuse Robot', titleEn: 'Robot Mower' },
    { img: '/1sky.jpg', titleFr: 'Nettoyage saisonnier', titleEn: 'Seasonal Cleanup' },
    { img: '/1tondeuse.jpg', titleFr: 'Tonte de pelouse', titleEn: 'Lawn Mowing' },
    { img: '/1parking.jpg', titleFr: 'Nettoyage de stationnement', titleEn: 'Parking Lot Cleaning' },
    { img: '/1skygrass.jpg', titleFr: 'Réparation de pelouse', titleEn: 'Lawn Repair' }
  ]
  
  return (
    <div className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="container">
          <h1>
            {lang === 'fr' 
              ? 'Nous sommes les experts en Estrie pour votre résidence ou votre commerce !'
              : 'We are the experts in Estrie for your home or business!'}
          </h1>
          <p>
            {lang === 'fr'
              ? 'Des solutions complètes pour l\'entretien et l\'aménagement de vos espaces verts. Résidentiel et commercial en Estrie.'
              : 'Complete solutions for the maintenance and landscaping of your green spaces. Residential and commercial in Estrie.'}
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="gallery-grid">
          {services.map((service, index) => (
            <div key={index} className="gallery-item">
              <img src={service.img} alt={lang === 'fr' ? service.titleFr : service.titleEn} loading="lazy" />
              <div className="gallery-overlay">
                <h3>{lang === 'fr' ? service.titleFr : service.titleEn}</h3>
              </div>
            </div>
          ))}
          </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>
            {lang === 'fr' ? 'Prêt à embellir votre propriété?' : 'Ready to beautify your property?'}
          </h2>
          <p>
            {lang === 'fr'
              ? 'Contactez-nous dès aujourd\'hui pour un devis gratuit et personnalisé.'
              : 'Contact us today for a free and personalized quote.'}
          </p>
          <Link to="/contact" className="btn-primary">
            {lang === 'fr' ? 'Demander un devis' : 'Request a quote'} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
