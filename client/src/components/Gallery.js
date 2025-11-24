import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './gallery.css';

const DEFAULT_CARD_WIDTH = 360;
const DEFAULT_SCROLL_RATIO = 1.15;

const Gallery = ({
  items,
  title,
  eyebrow,
  viewAllHref = '/galeri',
  className = '',
  variant = 'carousel',
  ctaLabel,
  navPrevLabel,
  navNextLabel
}) => {
  const { t } = useTranslation();
  const galleryCopy = t('homeGallery', { returnObjects: true }) || {};
  const resolvedItems = Array.isArray(items) ? items : [];

  const scrollerRef = useRef(null);
  const cardWidth = useMemo(() => DEFAULT_CARD_WIDTH, []);
  const scrollByAmount = useMemo(
    () => Math.round(cardWidth * DEFAULT_SCROLL_RATIO),
    [cardWidth]
  );

  const scroll = (dir) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({
      left: dir === 'left' ? -scrollByAmount : scrollByAmount,
      behavior: 'smooth'
    });
  };

  const renderCard = (item) => (
    <article
      key={item.id}
      className={`gallery-card ${variant === 'carousel' ? 'gallery-card--carousel' : 'gallery-card--grid'}`}
    >
      <Link to={item.href || viewAllHref} className="gallery-card-link">
        <img src={item.image} alt={item.title} className="gallery-card-image" />
        <div className="gallery-card-overlay" />
        {item.tag && (
          <div className="gallery-card-tag">
            <span>{item.tag}</span>
          </div>
        )}
        <div className="gallery-card-title">
          <h3>{item.title}</h3>
        </div>
      </Link>
      {item.caption && (
        <div className="gallery-card-caption">
          {item.caption}
        </div>
      )}
    </article>
  );

  return (
    <section className={`gallery-section ${className}`} id="gallery">
      <div className="gallery-container">
        <div className="gallery-heading">
          <div className="gallery-eyebrow">{eyebrow || galleryCopy.eyebrow}</div>
          <h2 className="gallery-title">{title || galleryCopy.title}</h2>
        </div>

        {variant === 'carousel' ? (
          <div className="gallery-carousel-wrapper">
            <button
              type="button"
              aria-label={navPrevLabel || galleryCopy.navPrev || 'Previous'}
              className="gallery-nav-btn gallery-nav-btn--left"
              onClick={() => scroll('left')}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label={navNextLabel || galleryCopy.navNext || 'Next'}
              className="gallery-nav-btn gallery-nav-btn--right"
              onClick={() => scroll('right')}
            >
              ›
            </button>

            <div className="gallery-scroller" ref={scrollerRef}>
              {resolvedItems.map((item) => renderCard(item))}
            </div>
          </div>
        ) : (
          <div className="gallery-grid">
            {resolvedItems.map((item) => renderCard(item))}
          </div>
        )}

        <div className="gallery-cta">
          <Link to={viewAllHref} className="gallery-cta-button">
            <span>{ctaLabel || galleryCopy.cta || 'View Gallery'}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tag: PropTypes.string,
      href: PropTypes.string,
      caption: PropTypes.string
    })
  ).isRequired,
  title: PropTypes.string,
  eyebrow: PropTypes.string,
  viewAllHref: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['carousel', 'grid']),
  ctaLabel: PropTypes.string,
  navPrevLabel: PropTypes.string,
  navNextLabel: PropTypes.string
};

export default Gallery;

