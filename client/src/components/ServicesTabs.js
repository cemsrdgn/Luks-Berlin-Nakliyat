import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './servicestabs.css';

const resolveImage = (path) => {
  if (!path) {
    return `${process.env.PUBLIC_URL}/images/gallery/1.jpg`;
  }
  if (path.startsWith('http')) {
    return path;
  }
  return `${process.env.PUBLIC_URL}/${path.replace(/^\//, '')}`;
};

const ServicesTabs = () => {
  const { t } = useTranslation();
  const sections = t('servicesTabs.sections', { returnObjects: true }) || [];
  const ctaLabel = t('servicesTabs.ctaLabel', 'View more');
  const [activeIndex, setActiveIndex] = useState(0);

  if (!sections.length) {
    return null;
  }

  const active = sections[activeIndex] || {};
  const imageSrc = resolveImage(active.image);

  return (
    <section className="services-tabs" id="services">
      <div className="services-tabs-inner">
        <div className="services-tabs-left">
          <p className="services-tabs-eyebrow">{t('servicesTabs.eyebrow')}</p>
          <h2 className="services-tabs-title">{t('servicesTabs.title')}</h2>

          <div className="services-tabs-nav">
            {sections.map((section, index) => (
              <button
                key={section.title}
                type="button"
                className={`services-tabs-nav-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{section.title}</span>
                <span className="services-tabs-icon">{index === activeIndex ? '−' : '+'}</span>
              </button>
            ))}
          </div>

        </div>

        <div className="services-tabs-right">
          <div className="services-tabs-image-wrapper">
            <img src={imageSrc} alt={active.title} className="services-tabs-image" />
          </div>

          <div className="services-tabs-panel">
            <h3>{active.title}</h3>
            {active.description && <p>{active.description}</p>}
            <ul>
              {(active.details || []).map((detail, idx) => (
                <li key={`${detail}-${idx}`}>{detail}</li>
              ))}
            </ul>
            <a href="/hizmetlerimiz" className="services-tabs-cta">
              <span>{ctaLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;

