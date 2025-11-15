import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import heroImage from '../assets/img/hero.jpg';
import './herosection.css';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const slides = t('hero.slides', { returnObjects: true }) || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [i18n.language]);

  useEffect(() => {
    if (!slides.length) return undefined;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      2800
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToNext = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth'
    });
  };

  const activeSlide = slides[currentIndex] || {};

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-main-title slide-in-left">{activeSlide.title}</h1>
          <p className="hero-subtitle slide-in-right">{activeSlide.subtitle}</p>
          <button className="hero-cta-button">
            <span>{t('hero.servicesButton')}</span>
          </button>
        </div>
      </div>
      <button className="scroll-down-arrow" onClick={scrollToNext} aria-label="Scroll down">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;

