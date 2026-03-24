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

const features = [
  {
    icon: <Truck size={32} />,
    title: "Déneigement résidentiel",
    desc: `Faites confiance au leader en Estrie.\nSERVICE EXEMPLAIRE\nNous avons les meilleures techniques, la meilleure équipe et les meilleurs équipements.`,
  },
  {
    icon: <Shield size={32} />,
    title: "Déneigement multi-logements",
    desc: `Déchargez-vous d'une tâche en nous confiant votre déneigement.\nStationnement parfait pour votre immeuble.`,
  },
  {
    icon: <Clock size={32} />,
    title: "Votre solution déneigement",
    desc: `La neige, c'est dame nature. Le déneigement, c'est nous.`,
  },
  {
    icon: <Truck size={32} />,
    title: "Épandage d'abrasif",
    desc: `La clé pour affronter l'hiver.\nSécurité hivernale garantie grâce à notre service d'épandage d'abrasif.`,
  },
];

const advantages = [
  "Service rapide et fiable",
  "Équipement professionnel",
  "Forfaits saisonniers avantageux",
  "Couverture complète en Estrie",
  "Équipe expérimentée",
  "Déglaçage inclus",
];

export default function Neige() {
  return (
    <div className="neige-page">
      {/* HERO */}
      <section className="neige-hero">
        <div className="neige-hero-overlay" />
        <div className="container neige-hero-content">
          <div className="logo-ineige ">
            <img src="ineige-web.png" alt="Logo ineige" />
          </div>
          <h1>Pelleter est une chose du passé.</h1>
          <p>
            Le Groupe Gysel et son nouveau service iNeige sont l'essence même du
            mot QUIÉTUDE. Nous nous occupons de votre entrée de cour, votre
            stationnement, votre espace commercial et de votre parc de
            stationnements.
          </p>

          <p>
            <strong>
              Soyez assurés d'un déneigement rapide, efficace et minutuieux
            </strong>
          </p>
          <div className="neige-hero-btns">
            <Link to="/contact" className="btn-primary-hiver">
              Obtenir une soumission <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="neige-features">
        <div className="container">
          <div className="neige-features-header">
            <h2 className="section-title-hiver">Services de déneigement</h2>
            <p className="section-subtitle-hiver">
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
          <a href="/contact" className="btn-primary-hiver feature-btn">
            Obtenir une soumission
          </a>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="neige-advantages">
        <div className="container neige-adv-inner">
          <div className="neige-adv-text">
            <h2>Pourquoi choisir iNeige ?</h2>
            <p>
              Avec iNeige, bénéficiez de l'expertise du Groupe Gysel pour un
              hiver sans tracas. Notre équipe professionnelle s'occupe de tout
              pour que vous puissiez profiter de la saison.
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
          <h2>Prêt pour l'hiver ?</h2>
          <p>
            Réservez votre forfait de déneigement dès maintenant et profitez
            d'un tarif préférentiel.
          </p>
          <Link to="/contact" className="btn-primary-hiver">
            Demander un devis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
