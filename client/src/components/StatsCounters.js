import React from 'react';
import { useTranslation } from 'react-i18next';

import icon1 from '../assets/about/ci-1.png.webp';
import icon2 from '../assets/about/ci-2.png.webp';
import icon3 from '../assets/about/ci-3.png.webp';
import icon4 from '../assets/about/ci-4.png.webp';
import mapBg from '../assets/about/about-bg.png.webp';

import './statscounters.css';

const icons = [icon1, icon2, icon3, icon4];

const StatsCounters = () => {
  const { t } = useTranslation();
  const items = t('stats.items', { returnObjects: true }) || [];

  return (
    <section className="stats-section" id="stats">
      <div className="stats-background" style={{ backgroundImage: `url(${mapBg})` }} />
      <div className="stats-inner">
        <p className="stats-eyebrow">{t('stats.eyebrow')}</p>
        <h2 className="stats-title">{t('stats.title')}</h2>

        <div className="stats-grid">
          {items.map((item, idx) => (
            <article key={item.label} className="stats-card">
              <div className="stats-icon">
                <img src={icons[idx % icons.length]} alt="" />
              </div>
              <div className="stats-value">
                <span>{item.value}</span>
                {item.suffix ? <small>{item.suffix}</small> : null}
              </div>
              <div className="stats-label">{item.label}</div>
              <p className="stats-body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounters;


