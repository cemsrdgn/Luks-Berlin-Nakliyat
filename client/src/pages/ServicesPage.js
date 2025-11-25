import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { servicesContent } from '../data/servicesData';
import './servicesPage.css';

const resolveAsset = (path) => {
  if (!path) return '';
  return path.startsWith('http') ? path : `${process.env.PUBLIC_URL}/${path.replace(/^\//, '')}`;
};

const ServicesPage = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'tr';

  const brochureItems = useMemo(
    () =>
      servicesContent.brochure.map((item) => ({
        ...item,
        label: item.label[lang],
        description: item.description?.[lang]
      })),
    [lang]
  );

  const sidebarContact = useMemo(
    () =>
      servicesContent.contact.map((item) => ({
        ...item,
        label: item.label[lang],
        value: typeof item.value === 'string' ? item.value : item.value[lang] || item.value.tr
      })),
    [lang]
  );

  const categories = useMemo(
    () =>
      servicesContent.categories.map((category) => ({
        ...category,
        title: category.copy[lang].title,
        description: category.copy[lang].description,
        services: category.services.map((service) => ({
          ...service,
          title: service.copy[lang].title,
          intro: service.copy[lang].intro,
          body: service.copy[lang].body,
          features: service.copy[lang].features
        }))
      })),
    [lang]
  );

  const [activeSlug, setActiveSlug] = useState('');
  const [activeServiceId, setActiveServiceId] = useState('');

  useEffect(() => {
    if (!categories.length) return;
    const fallbackSlug = categories[0].slug;
    if (!categoryId) {
      navigate(`/services/${fallbackSlug}`, { replace: true });
      return;
    }
    const exists = categories.some((cat) => cat.slug === categoryId);
    if (!exists) {
      navigate(`/services/${fallbackSlug}`, { replace: true });
      return;
    }
    setActiveSlug(categoryId);
  }, [categories, categoryId, navigate]);

  useEffect(() => {
    if (!activeSlug || !categories.length) return;
    const currentCategory = categories.find((cat) => cat.slug === activeSlug);
    if (!currentCategory) return;
    const hash = location.hash?.replace('#', '');
    const defaultService = currentCategory.services[0]?.id || '';
    const selected = hash && currentCategory.services.some((service) => service.id === hash)
      ? hash
      : defaultService;
    if (selected && selected !== activeServiceId) {
      setActiveServiceId(selected);
    }
  }, [activeSlug, activeServiceId, categories, location.hash]);

  const activeCategory = useMemo(
    () => categories.find((cat) => cat.slug === activeSlug) || categories[0],
    [categories, activeSlug]
  );

  const activeService =
    activeCategory?.services.find((service) => service.id === activeServiceId) ||
    activeCategory?.services[0];

  const handleServiceSelect = (slug, serviceId) => {
    setActiveSlug(slug);
    setActiveServiceId(serviceId);
    navigate({
      pathname: `/services/${slug}`,
      hash: serviceId
    });
  };

  const openWhatsapp = () => {
    const number = '+90 541 596 54 91';
    const url = `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(
      lang === 'en'
        ? 'Hello, I would like to learn more about your services.'
        : 'Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const heroCopy = servicesContent.hero.copy[lang];

  return (
    <div className="services-page">
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${resolveAsset(servicesContent.hero.background)})` }}
      >
        <div className="services-hero-overlay" />
        <div className="services-hero-inner">
          <p className="services-hero-eyebrow">{heroCopy.eyebrow}</p>
          <h1>{heroCopy.title}</h1>
          <p className="services-hero-subtitle">{heroCopy.subtitle}</p>
        </div>
      </section>

      <div className="services-layout">
        <aside className="services-sidebar">
          <section className="services-sidebar-block services-list">
            <p className="services-sidebar-title">{servicesContent.sidebar.services[lang]}</p>
            <div className="services-drawer-group">
              {categories.map((category) => {
                const isOpen = category.slug === activeSlug;
                return (
                  <div key={category.slug} className={`services-drawer ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="services-drawer-trigger"
                      onClick={() => setActiveSlug(category.slug)}
                    >
                      <span>{category.title}</span>
                      <span className="services-drawer-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="services-drawer-panel">
                      {category.services.map((service) => {
                        const isActive = service.id === activeServiceId;
                        return (
                          <button
                            key={service.id}
                            type="button"
                            className={`services-drawer-item ${isActive ? 'active' : ''}`}
                            onClick={() => handleServiceSelect(category.slug, service.id)}
                          >
                            <span>{service.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="services-sidebar-block">
            <p className="services-sidebar-title">{servicesContent.sidebar.brochure[lang]}</p>
            <ul className="services-brochure-list">
              {brochureItems.map((item) => (
                <li key={item.id}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="services-brochure-card"
                      >
                        <div className="services-brochure-preview">
                          <img src={item.asset || item.href} alt={item.label} />
                        </div>
                        <div className="services-brochure-copy">
                          <span className="services-brochure-label">{item.label}</span>
                          {item.description ? (
                            <small>{item.description}</small>
                          ) : null}
                        </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="services-sidebar-block">
            <p className="services-sidebar-title">{servicesContent.sidebar.contact[lang]}</p>
            <ul className="services-contact-list">
              {sidebarContact.map((item) => (
                <li key={item.id}>
                  <span className="services-contact-icon">{item.icon}</span>
                  <div>
                    <small>{item.label}</small>
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <section className="services-detail">
          <div className="services-detail-card">
            <div className="services-detail-content">
              <p className="services-detail-eyebrow">{activeCategory?.title}</p>
              <h2>{activeService?.title}</h2>
              <p className="services-detail-intro">{activeService?.intro}</p>
              {activeService?.body?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="services-detail-features">
                <h3>{servicesContent.featuresTitle[lang]}</h3>
                <ul>
                  {activeService?.features?.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="services-cta">
        <div className="services-cta-card">
          <p>{servicesContent.cta.eyebrow[lang]}</p>
          <h3>{servicesContent.cta.title[lang]}</h3>
          <button type="button" className="services-cta-btn" onClick={openWhatsapp}>
            <span>{servicesContent.cta.button[lang]}</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

