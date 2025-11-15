import React from 'react';
import { useTranslation } from 'react-i18next';

import chooseImg from '../assets/chooseUs/chooseus-pic.png.webp';
import icon1 from '../assets/chooseUs/ci-1.png.webp';
import icon2 from '../assets/chooseUs/ci-2.png.webp';
import icon3 from '../assets/chooseUs/ci-3.png.webp';
import icon4 from '../assets/chooseUs/ci-4.png (1).webp';

import './whychooseus.css';

const iconSet = [icon1, icon2, icon3, icon4];

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const points = t('whyChooseUs.points', { returnObjects: true }) || [];

  return (
    <section className="chooseus-section" id="why-us">
      <div className="chooseus-inner">
        <div className="chooseus-left">
          <p className="chooseus-eyebrow">{t('whyChooseUs.eyebrow')}</p>
          <h2 className="chooseus-title">{t('whyChooseUs.title')}</h2>

          <div className="chooseus-grid">
            {points.map((point, idx) => (
              <article key={point.title} className="chooseus-card">
                <div className="chooseus-icon-wrapper">
                  <img src={iconSet[idx % iconSet.length]} alt="" className="chooseus-icon" />
                </div>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="chooseus-right">
          <div className="chooseus-image-wrapper">
            <img src={chooseImg} alt="Our team at work" className="chooseus-image" />
            <div className="chooseus-image-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


