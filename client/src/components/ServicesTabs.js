import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import hizmetlerimizGorsel from '../assets/img/hizmetlerimizGorsel.png';
import './servicestabs.css';

const MAX_VISIBLE_SERVICES = 4;

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
  const { t, i18n } = useTranslation();
  const viewAllFallback = t('servicesTabs.viewAllLabel', { defaultValue: 'View all services…' });
  const readMoreLabel = t('servicesTabs.readMoreLabel', { defaultValue: 'Read more' });

  const categories = useMemo(() => {
    const translatedCategories = t('servicesTabs.categories', { returnObjects: true }) || [];
    if (Array.isArray(translatedCategories) && translatedCategories.length) {
      return translatedCategories;
    }
    const legacySections = t('servicesTabs.sections', { returnObjects: true }) || [];
    return legacySections.map((section, index) => ({
      id: `legacy-${index}`,
      title: section.title,
      image: section.image,
      href: '/services',
      services: (section.details || []).map((detail, detailIdx) => ({
        id: `legacy-${index}-${detailIdx}`,
        title: detail,
        summary: section.description || '',
        href: '/services'
      }))
    }));
  }, [t, i18n.language]);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setActiveCategory(0);
    setActiveService(0);
  }, [categories.length]);

  useEffect(() => {
    const servicesCount = categories[activeCategory]?.services?.length || 0;
    if (servicesCount === 0) {
      setActiveService(0);
      return;
    }
    if (activeService > servicesCount - 1) {
      setActiveService(0);
    }
  }, [categories, activeCategory, activeService]);

  if (!categories.length) {
    return null;
  }

  const activeCategoryData = categories[activeCategory] || {};
  const services = activeCategoryData.services || [];
  const currentService = services[activeService] || services[0] || {};

  const handleCategoryToggle = (index) => {
    if (index === activeCategory) return;
    setActiveCategory(index);
    setActiveService(0);
  };

  const visibleServices = (category) => (category.services || []).slice(0, MAX_VISIBLE_SERVICES);

  return (
    <section className="services-tabs" id="services">
      <div className="services-tabs-inner">
        <div className="services-tabs-left">
          <p className="services-tabs-eyebrow">{t('servicesTabs.eyebrow')}</p>
          <h2 className="services-tabs-title">{t('servicesTabs.title')}</h2>

          <div className="services-drawer-group">
            {categories.map((category, index) => {
              const isOpen = index === activeCategory;
              return (
                <div className={`services-drawer ${isOpen ? 'open' : ''}`} key={category.id || category.title}>
                  <button
                    type="button"
                    className="services-drawer-trigger"
                    onClick={() => handleCategoryToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{category.title}</span>
                    <span className="services-drawer-trigger-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div
                    className={`services-drawer-panel ${isOpen ? 'open' : ''}`}
                    aria-hidden={!isOpen}
                  >
                    {visibleServices(category).map((service, serviceIdx) => (
              <button
                type="button"
                        key={service.id || service.title}
                        className={`services-drawer-item ${activeService === serviceIdx && isOpen ? 'active' : ''}`}
                        onClick={() => setActiveService(serviceIdx)}
              >
                        <span>{service.title}</span>
              </button>
            ))}
                    <Link
                      to={category.href || '/services'}
                      className="services-drawer-viewall"
                    >
                      {category.viewAllLabel || viewAllFallback}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="services-tabs-right">
          <div className="services-card">
            <div className="services-card-media">
              <img src={hizmetlerimizGorsel} alt={activeCategoryData.title} />
            </div>
            <div className="services-card-body">
              <p className="services-card-eyebrow">{activeCategoryData.title}</p>
              <h3>{currentService.title}</h3>
              {currentService.summary && <p>{currentService.summary}</p>}
            </div>
            <div className="services-card-actions">
              <Link
                to={currentService.href || activeCategoryData.href || '/services'}
                className="services-card-link"
              >
                <span>{readMoreLabel}</span>
              </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;

