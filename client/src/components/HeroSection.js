import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import heroImage from '../assets/img/hero.jpg';
import './herosection.css';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const slides = t('hero.slides', { returnObjects: true }) || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateFlip, setAnimateFlip] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
  }, [i18n.language]);

  useEffect(() => {
    if (!slides.length) return undefined;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      3200
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setAnimateFlip((prev) => !prev);
  }, [currentIndex, i18n.language]);

  const scrollToNext = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth'
    });
  };

  const activeSlide = slides[currentIndex] || {};
  const animationKey = useMemo(
    () => `${i18n.language}-${currentIndex}`,
    [i18n.language, currentIndex]
  );

  return (
    <section className="hero-section" id="home" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-copy">
            <h1
              key={`hero-title-${animationKey}`}
              className={`hero-main-title ${animateFlip ? 'hero-slide-left' : 'hero-slide-left-alt'}`}
            >
              {activeSlide.title}
            </h1>
            <p
              key={`hero-subtitle-${animationKey}`}
              className={`hero-subtitle ${animateFlip ? 'hero-slide-right' : 'hero-slide-right-alt'}`}
            >
              {activeSlide.subtitle}
            </p>
          </div>
          <Link to="/services" className="hero-cta-button">
            <span>{t('hero.servicesButton')}</span>
          </Link>
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

