import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import galleryMedia from '../data/galleryMedia';
import './galleryPage.css';

const GalleryPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'tr';
  const pageCopy = t('galleryPage', { returnObjects: true }) || {};
  const hero = pageCopy.hero || {};
  const tabLabels = pageCopy.tabs || {};
  const lightboxCopy = pageCopy.lightbox || {};

  const [activeTab, setActiveTab] = useState('photos');
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const tabs = galleryMedia.hideVideos ? ['photos'] : ['photos', 'videos'];

  useEffect(() => {
    if (galleryMedia.hideVideos) {
      setActiveTab('photos');
    }
  }, [galleryMedia.hideVideos]);

  const mediaList = useMemo(() => {
    const list = galleryMedia[activeTab] || [];
    return list.map((item) => ({
      ...item,
      title: typeof item.title === 'string' ? item.title : item.title[lang] || item.title.tr,
      location:
        typeof item.location === 'string'
          ? item.location
          : item.location?.[lang] || item.location?.tr
    }));
  }, [activeTab, lang]);

  useEffect(() => {
    setLightbox({ open: false, index: 0 });
  }, [activeTab]);

  useEffect(() => {
    document.body.style.overflow = lightbox.open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox.open]);

  const openLightbox = (index) => {
    setLightbox({ open: true, index });
  };

  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const navigateLightbox = (direction) => {
    setLightbox((prev) => {
      if (!mediaList.length) return prev;
      const nextIndex =
        direction === 'next'
          ? (prev.index + 1) % mediaList.length
          : (prev.index - 1 + mediaList.length) % mediaList.length;
      return { ...prev, index: nextIndex };
    });
  };

  const renderTile = (item, index) => (
    <button
      key={item.id}
      type="button"
      className="gallery-tile"
      onClick={() => openLightbox(index)}
    >
      <img src={item.thumbnail} alt={item.title} loading="lazy" />
      {item.type === 'video' && (
        <div className="gallery-tile-play">
          <span>▶</span>
        </div>
      )}
      <div className="gallery-tile-caption">
        <h3>{item.title}</h3>
        {item.location && <p>{item.location}</p>}
      </div>
    </button>
  );

  const activeMedia =
    lightbox.open && mediaList.length ? mediaList[lightbox.index] : null;

  return (
    <div className="gallery-page">
      <section
        className="gallery-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background_logistic_truck.jpg)`
        }}
      >
        <div className="gallery-hero-overlay" />
        <div className="gallery-hero-content">
          <p>{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
        </div>
      </section>

      <div className="gallery-tabs">
        {tabs.map((key) => (
          <button
            key={key}
            type="button"
            className={`gallery-tab ${key === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {tabLabels[key] || key}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {mediaList.map((item, index) => renderTile(item, index))}
      </div>

      {activeMedia ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label={lightboxCopy.close || 'Close'}
          >
            ×
          </button>
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-nav--prev"
            onClick={() => navigateLightbox('prev')}
            aria-label={lightboxCopy.prev || 'Previous'}
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-nav--next"
            onClick={() => navigateLightbox('next')}
            aria-label={lightboxCopy.next || 'Next'}
          >
            ›
          </button>
          <div className="gallery-lightbox-content">
            {activeMedia.type === 'video' ? (
              <>
                <video
                  src={activeMedia.src}
                  poster={activeMedia.thumbnail}
                  controls
                  autoPlay
                />
                <div className="gallery-lightbox-caption">
                  <h3>{activeMedia.title}</h3>
                  {activeMedia.location && <p>{activeMedia.location}</p>}
                </div>
              </>
            ) : (
              <img src={activeMedia.src} alt="" />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPage;

