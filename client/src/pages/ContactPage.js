import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WhyChooseUs from '../components/WhyChooseUs';
import './contactPage.css';

const CONTACT_NUMBER = '+49 30 000 00 00';
const WHATSAPP_NUMBER = '+49 30 000 00 00';

const infoSchema = [
  {
    id: 'address',
    icon: '📍',
    value: 'Karl-Marx-Allee 90, 10243 Berlin, Germany'
  },
  {
    id: 'phone',
    icon: '📞',
    value: CONTACT_NUMBER,
    href: `tel:${CONTACT_NUMBER.replace(/\s/g, '')}`
  },
  {
    id: 'mail',
    icon: '✉️',
    value: 'info@luksberlinnakliyat.com',
    href: 'mailto:info@luksberlinnakliyat.com'
  },
  {
    id: 'hours',
    icon: '🕗',
    value: '7/24 hizmet veriyoruz'
  }
];

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const infoItems = infoSchema.map((item) => ({
    ...item,
    label: t(`contactPage.infoItems.${item.id}.label`),
    value: t(`contactPage.infoItems.${item.id}.value`, { defaultValue: item.value })
  }));

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsappPayload = () => {
    const templates = t('contactPage.whatsapp', { returnObjects: true });
    const parts = [templates.greeting];
    if (formData.name) parts.push(templates.name.replace('{{name}}', formData.name));
    if (formData.email) parts.push(templates.email.replace('{{email}}', formData.email));
    if (formData.message) parts.push(templates.message.replace('{{message}}', formData.message));
    return parts.filter(Boolean).join(' ');
  };

  const openWhatsapp = (text) => {
    const message = text || t('contactPage.whatsappDefault');
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = buildWhatsappPayload();
    openWhatsapp(payload);
  };

  return (
    <div className="contact-page">
      <div className="contact-map-wrapper">
        <div className="contact-map-card">
          <iframe
            title="Lüks Berlin Nakliyat"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.725097681604!2d13.426496012968103!3d52.51397723637533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e23522a4975%3A0xaca5a05b3cfd540!2sKarl-Marx-Allee%2090%2C%2010243%20Berlin!5e0!3m2!1str!2sde!4v1732290000000!5m2!1str!2sde"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <section className="contact-content">
        <div className="contact-card">
          <p className="contact-eyebrow">{t('contactPage.infoEyebrow')}</p>
          <h2>{t('contactPage.infoTitle')}</h2>
          <p className="contact-lead">{t('contactPage.infoLead')}</p>
          <ul className="contact-info-list">
            {infoItems.map((item) => (
              <li key={item.id}>
                <span className="contact-info-icon">{item.icon}</span>
                <div>
                  <small>{item.label}</small>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-card">
          <p className="contact-eyebrow">{t('contactPage.formEyebrow')}</p>
          <h2>{t('contactPage.formTitle')}</h2>
          <p className="contact-lead">{t('contactPage.formLead')}</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <input
                type="text"
                name="name"
                placeholder={t('contactPage.placeholders.name')}
                value={formData.name}
                onChange={onChange}
              />
              <input
                type="email"
                name="email"
                placeholder={t('contactPage.placeholders.email')}
                value={formData.email}
                onChange={onChange}
              />
            </div>
            <textarea
              name="message"
              placeholder={t('contactPage.placeholders.message')}
              rows={5}
              value={formData.message}
              onChange={onChange}
            />
            <button type="submit" className="hero-cta-button contact-whatsapp-btn">
              <span>{t('contactPage.formButton')}</span>
            </button>
          </form>
        </div>
      </section>

      <WhyChooseUs />

      <section className="contact-cta">
        <div className="contact-cta-card">
          <p>{t('contactPage.ctaEyebrow')}</p>
          <h3>{t('contactPage.ctaTitle')}</h3>
          <button
            type="button"
            className="contact-cta-btn"
            onClick={() => openWhatsapp()}
          >
            <span>{t('contactPage.ctaButton')}</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

