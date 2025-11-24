import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactTestimonialsSection from '../sections/ContactTestimonialsSection';
import StatsCounters from '../components/StatsCounters';
import './aboutPage.css';

const valueIcons = [
  { key: 'operationalSafety', icon: '🚛' },
  { key: 'onTime', icon: '⏱️' },
  { key: 'expertTeam', icon: '👷‍♂️' },
  { key: 'customerFocus', icon: '🤝' },
  { key: 'smartTracking', icon: '📡' },
  { key: 'storageAssurance', icon: '📦' },
  { key: 'sustainability', icon: '🌱' },
  { key: 'support247', icon: '📞' }
];

const socialLinks = [
  { key: 'instagram', icon: '📸', href: 'https://instagram.com' },
  { key: 'tiktok', icon: '🎵', href: 'https://tiktok.com' },
  { key: 'linkedin', icon: '💼', href: 'https://linkedin.com' }
];

const AboutPage = () => {
  const { t } = useTranslation();
  const hero = t('aboutPage.hero', { returnObjects: true });
  const who = t('aboutPage.who', { returnObjects: true });
  const vision = t('aboutPage.vision', { returnObjects: true });
  const mission = t('aboutPage.mission', { returnObjects: true });
  const socialText = t('aboutPage.social', { returnObjects: true });
  const valueTexts = t('aboutPage.values.items', { returnObjects: true }) || {};

  return (
    <div className="about-page">
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${hero.background})`
        }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p>{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
        </div>
      </section>

      <section className="about-card about-who">
        <p className="about-eyebrow">{who.eyebrow}</p>
        <h2>{who.title}</h2>
        <p>{who.body}</p>
      </section>

      <section className="about-split">
        <article className="about-feature-card">
          <div className="about-feature-icon">👁️</div>
          <h3>{vision.title}</h3>
          <p>{vision.body}</p>
        </article>
        <article className="about-feature-card">
          <div className="about-feature-icon">🌐</div>
          <h3>{mission.title}</h3>
          <p>{mission.body}</p>
        </article>
      </section>

      <section className="about-social">
        <div className="about-social-card">
          <p className="about-eyebrow">{socialText.eyebrow}</p>
          <h3>{socialText.title}</h3>
          <div className="about-social-links">
            {socialLinks.map((item) => (
              <a key={item.key} href={item.href} target="_blank" rel="noreferrer">
                <span>{item.icon}</span>
                {socialText.links?.[item.key]}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <p className="about-eyebrow">{t('aboutPage.values.eyebrow')}</p>
        <h2>{t('aboutPage.values.title')}</h2>
        <div className="about-values-grid">
          {valueIcons.map((item) => (
            <article key={item.key}>
              <span className="about-value-icon">{item.icon}</span>
              <h3>{valueTexts[item.key]?.title}</h3>
              <p>{valueTexts[item.key]?.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactTestimonialsSection
        backgroundUrl={`${process.env.PUBLIC_URL}/images/background_logistic_truck.jpg`}
        phoneE164="+49 30 000000"
        whatsappE164="+49 30 000000"
        email="info@luksberlinnakliyat.com"
      />

      <div className="about-stats">
        <StatsCounters />
      </div>
    </div>
  );
};

export default AboutPage;

