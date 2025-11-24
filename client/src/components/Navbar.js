import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { key: 'home', translation: 'navbar.home', to: '/' },
    { key: 'services', translation: 'navbar.services', to: '/services' },
    { key: 'about', translation: 'navbar.about', to: '/about' },
    { key: 'gallery', translation: 'navbar.gallery', to: '/gallery' },
    { key: 'contact', translation: 'navbar.contact', to: '/contact' }
  ];

  const whatsappNumber = '+905551234567';
  const phoneLabel = t('topbar.phone');
  const addressLabel = t('topbar.address');
  const trustItems = t('navbar.trust.items', { returnObjects: true });
  const trustTitle = t('navbar.trust.title');
  const hasTrustItems = Array.isArray(trustItems) && trustItems.length > 0;
  const brandContent = t('navbar.brand', { returnObjects: true }) || {};
  const brandPrimary = brandContent.primary || 'L\u00dcKS BERL\u0130N';
  const brandSecondary = brandContent.secondary || 'NAKL\u0130YAT';
  const brandTagline = brandContent.tagline || '';
  const normalizedPhone = phoneLabel?.replace(/[^\d+]/g, '');
  const phoneHref = normalizedPhone ? `tel:${normalizedPhone}` : undefined;
  const isEnglish = i18n.resolvedLanguage === 'en';

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const brandLabel = `${brandPrimary} ${brandSecondary}`.trim();

  const handleLanguageToggle = (checked) => {
    i18n.changeLanguage(checked ? 'en' : 'tr');
  };

  return (
    <nav className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="nav-mobile-brand" aria-label={brandLabel}>
        <div className="nav-mobile-brand-title">
          <span className="nav-mobile-brand-primary">{brandPrimary}</span>
          <span className="nav-mobile-brand-secondary">{brandSecondary}</span>
        </div>
        {brandTagline && <span className="nav-mobile-brand-tagline">{brandTagline}</span>}
      </div>
      <button
        type="button"
        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-panel ${menuOpen ? 'open' : ''}`}>
        <div className="nav-panel-header">
          <div className="nav-panel-title" aria-label={brandLabel}>
            <span>{brandPrimary}</span>
            <span>{brandSecondary}</span>
          </div>
          <button
            type="button"
            className="nav-panel-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <span />
            <span />
          </button>
        </div>

        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.key} className="nav-item">
              <NavLink
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t(item.translation)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-panel-contact">
          <a
            className="nav-panel-contact-item"
            href={phoneHref || undefined}
            onClick={closeMenu}
          >
            <span className="nav-panel-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            <span className="nav-panel-contact-text">{phoneLabel}</span>
          </a>
          <div className="nav-panel-contact-item">
            <span className="nav-panel-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <span className="nav-panel-contact-text">{addressLabel}</span>
          </div>
        </div>

        {hasTrustItems && (
          <div className="nav-trust-section">
            <p className="nav-trust-title">{trustTitle}</p>
            <div className="nav-trust-grid">
              {trustItems.map((item, index) => (
                <div key={index} className="nav-trust-card">
                  <span className="nav-trust-value">{item.value}</span>
                  <span className="nav-trust-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="nav-panel-lang">
          <span className="nav-lang-label">TR</span>
          <label className="nav-lang-switch">
            <input
              type="checkbox"
              checked={isEnglish}
              onChange={(e) => handleLanguageToggle(e.target.checked)}
            />
            <span className="nav-lang-slider"></span>
          </label>
          <span className="nav-lang-label">EN</span>
        </div>

        <div className="navbar-right mobile-cta">
          <a
            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            onClick={closeMenu}
          >
            <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.148-.199.297-.769.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>{t('navbar.getQuote')}</span>
          </a>
        </div>
      </div>

      <div className="navbar-right desktop-cta">
        <a 
          href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.148-.199.297-.769.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span>{t('navbar.getQuote')}</span>
        </a>
      </div>

      <div
        className={`nav-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </nav>
  );
};

export default Navbar;
