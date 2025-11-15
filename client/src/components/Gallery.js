import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import './gallery.css';

const DEFAULT_CARD_WIDTH = 360;
const DEFAULT_SCROLL_RATIO = 1.15;

const Gallery = ({
  items,
  title = 'GALERİDEN KARELER',
  eyebrow = 'GALERİ',
  viewAllHref = '/galeri',
  className = '',
  variant = 'carousel'
}) => {
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
      <a href={item.href || viewAllHref} className="gallery-card-link">
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
      </a>
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
          <div className="gallery-eyebrow">{eyebrow}</div>
          <h2 className="gallery-title">{title}</h2>
        </div>

        {variant === 'carousel' ? (
          <div className="gallery-carousel-wrapper">
            <button
              type="button"
              aria-label="Önceki"
              className="gallery-nav-btn gallery-nav-btn--left"
              onClick={() => scroll('left')}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Sonraki"
              className="gallery-nav-btn gallery-nav-btn--right"
              onClick={() => scroll('right')}
            >
              ›
            </button>

            <div className="gallery-scroller" ref={scrollerRef}>
              {items.map((item) => renderCard(item))}
            </div>
          </div>
        ) : (
          <div className="gallery-grid">
            {items.map((item) => renderCard(item))}
          </div>
        )}

        <div className="gallery-cta">
          <a href={viewAllHref} className="gallery-cta-button">
            <span>Tüm Galeri</span>
          </a>
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
  variant: PropTypes.oneOf(['carousel', 'grid'])
};

export default Gallery;

