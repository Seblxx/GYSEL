import { Link } from "react-router-dom";
import { Snowflake, ArrowRight, CheckCircle } from "lucide-react";
import "./Neige.css";
import { useLanguage } from "../contexts/LanguageContext";

export default function Neige() {
  const { lang, t } = useLanguage();

  const advantages = t("neige.advantages") || [];

  const services = [
    {
      img: "/images/residential-snow-removal.jpg",
      titleFr: "Déneigement résidentiel",
      titleEn: "Residential snow removal",
    },
    {
      img: "/images/multi-unit-snow-removal.jpg",
      titleFr: "Déneigement multi-logement",
      titleEn: "Multi-unit snow removal",
    },
    {
      img: "/images/your-snow-removal-solution.jpg",
      titleFr: "Votre solution déneigement",
      titleEn: "Your snow removal solution",
    },
    {
      img: "/images/abrasive-spreading.jpg",
      titleFr: "Épandage d'abrasif",
      titleEn: "Abrasive spreading",
    },
  ];

  return (
    <div className="neige-page">
      {/* HERO */}
      <section className="neige-hero">
        <div className="neige-hero-overlay" />
        <div className="container neige-hero-content">
          <div className="logo-ineige ">
            <img src="/ineige-web.png" alt="Logo ineige" />
          </div>
          <h1>{t("neige.hero.title")}</h1>
          <p>{t("neige.hero.desc")}</p>

          <p>
            <strong>{t("neige.hero.assurance")}</strong>
          </p>
          <div className="neige-hero-btns">
            <Link to="/contact" className="btn-primary-hiver">
              {t("neige.hero.cta")} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="gallery-section-hiver">
        <div className="neige-features-header">
          <h2 className="section-title-hiver">{t("neige.featuresTitle")}</h2>
          <p className="section-subtitle-hiver">
            {t("neige.featuresSubtitle")}
          </p>
        </div>
        <div className="gallery-grid">
          {services.map((service, index) => (
            <div key={index} className="gallery-item">
              <img
                src={service.img}
                alt={lang === "fr" ? service.titleFr : service.titleEn}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>{lang === "fr" ? service.titleFr : service.titleEn}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-soumission-hiver">
          <a href="/contact" className="btn-primary-hiver feature-btn">
            {t("neige.hero.cta")}
          </a>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="neige-advantages">
        <div className="container neige-adv-inner">
          <div className="neige-adv-text">
            <h2>{t("neige.why.title") || "Pourquoi choisir iNeige ?"}</h2>
            <p>
              {t("neige.why.p") ||
                `Avec iNeige, bénéficiez de l'expertise du Groupe Gysel pour un hiver sans tracas. Notre équipe professionnelle s'occupe de tout pour que vous puissiez profiter de la saison.`}
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
          <h2>{t("neige.cta.title") || "Prêt pour l'hiver ?"}</h2>
          <p>
            {t("neige.cta.desc") ||
              "Réservez votre forfait de déneigement dès maintenant et profitez d'un tarif préférentiel."}
          </p>
          <Link to="/contact" className="btn-primary-hiver">
            {t("neige.cta.btn") || "Demander un devis"} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
