import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ExternalLink, Send } from 'lucide-react'
import './Contact.css'
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  const serviceOptions = t('contact.servicesOptions') || []

  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', address: '', city: '', details: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t('contact.form.success'))
    setForm({ name: '', phone: '', email: '', service: '', address: '', city: '', details: '' })
  }

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        <div className="container contact-grid">
          {/* FORM */}
          <div className="contact-form-section">
            <h2>{t('contact.form.title')}</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.name')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phone')}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">{t('contact.form.service')}</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">{t('contact.form.selectService')}</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="address">Adresse</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="123 rue Exemple"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">Ville</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Sherbrooke"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="details">Détails</label>
                <textarea
                  id="details"
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  maxLength={500}
                  rows={4}
                  placeholder="Décrivez votre projet ou vos besoins..."
                />
                <span className="char-count">{form.details.length} / 500</span>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                <Send size={18} />
                Envoyer la demande
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3>Nos coordonnées</h3>
              <ul className="contact-info-list">
                <li>
                  <div className="contact-info-icon"><MapPin size={20} /></div>
                  <div>
                    <strong>Adresse</strong>
                    <p>7702 chemin de St-Élie<br />Sherbrooke, QC J1R 0C4</p>
                  </div>
                </li>
                <li>
                  <div className="contact-info-icon"><Phone size={20} /></div>
                  <div>
                    <strong>Téléphone</strong>
                    <p><a href="tel:819-348-9513">819-348-9513</a></p>
                  </div>
                </li>
                <li>
                  <div className="contact-info-icon"><Mail size={20} /></div>
                  <div>
                    <strong>Courriel</strong>
                    <p><a href="mailto:info@groupegysel.com">info@groupegysel.com</a></p>
                  </div>
                </li>
                <li>
                  <div className="contact-info-icon"><Clock size={20} /></div>
                  <div>
                    <strong>Heures d'ouverture</strong>
                    <p>Lundi - Vendredi : 8h - 17h<br />Samedi : Sur rendez-vous</p>
                  </div>
                </li>
              </ul>

              <div className="contact-socials">
                <a href="https://www.facebook.com/groupegysel" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} /> Facebook
                </a>
                <a href="https://www.instagram.com/groupe_gysel/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} /> Instagram
                </a>
              </div>
            </div>

            {/* MAP */}
            <div className="contact-map">
              <iframe
                title="Le Groupe Gysel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.5!2d-72.0575985!3d45.3917827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb7b30496fb3e15%3A0x8fd006fb638b5519!2sLe%20Groupe%20Gysel!5e0!3m2!1sfr!2sca!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: 16 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
