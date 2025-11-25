import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import instagramLogo from '../assets/logo/instagram.png';
import './footer.css';

const quickLinkAnchors = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
  { key: 'gallery', href: '/gallery' },
  { key: 'contact', href: '/contact' }
];

const serviceAnchors = [
  { key: 'homeMoving', href: '/services/domestic#home-moving' },
  { key: 'officeMoving', href: '/services/domestic#office-moving' },
  { key: 'safeTransport', href: '/services/domestic#safe-transport' },
  { key: 'packingService', href: '/services/logistics#packing-service' },
  { key: 'liftService', href: '/services/logistics#lift-service' },
  { key: 'logisticsSupport', href: '/services/logistics#logistics-support-core' }
];

const Footer = () => {
  const { t } = useTranslation();
  const [legalModal, setLegalModal] = useState(null);
  const brand = t('footer.brand', { returnObjects: true });
  const legalCopy = t('footer.legal', { returnObjects: true }) || {};

  const handleScrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const quickLinks = quickLinkAnchors.map((item) => ({
    ...item,
    label: t(`navbar.${item.key}`)
  }));

  const services = serviceAnchors.map((item) => ({
    ...item,
    label: t(`footer.services.${item.key}`)
  }));

  const address = t('footer.contacts.address');
  const phone = t('footer.contacts.phone');

  const contactItems = [
    { key: 'address', icon: '📍', content: address },
    { key: 'phone', icon: '📞', content: phone, href: `tel:${phone.replace(/[^0-9+]/g, '')}` }
  ];

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-white">{brand.primary}</span>{' '}
              <span className="logo-accent">{brand.accent}</span>{' '}
              <span className="logo-white">{brand.suffix}</span>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/luksberlinevofistransferi?igsh=M3VjODJ6cnQ4M2o0&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <img src={instagramLogo} alt="Instagram" className="footer-instagram-logo" />
              </a>
            </div>
          </div>

          <div className="footer-col footer-col-border">
            <h4 className="footer-heading">{t('footer.quickLinksTitle')}</h4>
            <ul className="footer-list">
              {quickLinks.map((item) => (
                <li key={item.key}>
                  <Link to={item.href} onClick={handleScrollTop}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-col-border">
            <h4 className="footer-heading">{t('footer.servicesTitle')}</h4>
            <ul className="footer-list">
              {services.map((item) => (
                <li key={item.key}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-col-border">
            <h4 className="footer-heading">{t('footer.contactsTitle')}</h4>
            <ul className="footer-contact-list">
              {contactItems.map((item) => (
                <li key={item.key}>
                  <span className="contact-icon">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href}>{item.content}</a>
                  ) : (
                    <span>{item.content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.bottom.copyright')}</p>
          <nav className="footer-bottom-nav">
            <button type="button" onClick={() => setLegalModal('privacy')}>
              {t('footer.bottom.privacy')}
            </button>
            <span className="divider">|</span>
            <button type="button" onClick={() => setLegalModal('terms')}>
              {t('footer.bottom.terms')}
            </button>
          </nav>
        </div>
      </div>

      {legalModal ? (
        <div
          className="footer-modal"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setLegalModal(null);
            }
          }}
        >
          <div className="footer-modal-content">
            <button
              type="button"
              className="footer-modal-close"
              onClick={() => setLegalModal(null)}
              aria-label="Close legal modal"
            >
              ×
            </button>
            <h3>{legalCopy[legalModal]?.title}</h3>
            {(legalCopy[legalModal]?.body || []).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      ) : null}
    </footer>
  );
};

export default Footer;
