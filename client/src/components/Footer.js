import React from 'react';
import { useTranslation } from 'react-i18next';
import instagramLogo from '../assets/logo/instagram.png';
import './footer.css';

const quickLinkAnchors = [
  { key: 'home', href: '#home' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'gallery', href: '#gallery' },
  { key: 'contact', href: '#contact' }
];

const serviceAnchors = [
  { key: 'intercity', href: '#service-air' },
  { key: 'office', href: '#service-expert' },
  { key: 'elevator', href: '#service-ground' },
  { key: 'logistics', href: '#service-logistics' }
];

const Footer = () => {
  const { t } = useTranslation();
  const brand = t('footer.brand', { returnObjects: true });

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
  const email = t('footer.contacts.email');

  const contactItems = [
    { key: 'address', icon: '📍', content: address },
    { key: 'phone', icon: '📞', content: phone, href: `tel:${phone.replace(/[^0-9+]/g, '')}` },
    { key: 'email', icon: '✉️', content: email, href: `mailto:${email}` }
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
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
                </svg>
              </a>
              <a
                href="https://instagram.com/"
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
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-col-border">
            <h4 className="footer-heading">{t('footer.servicesTitle')}</h4>
            <ul className="footer-list">
              {services.map((item) => (
                <li key={item.key}>
                  <a href={item.href}>{item.label}</a>
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
            <a href="#privacy">{t('footer.bottom.privacy')}</a>
            <span className="divider">|</span>
            <a href="#terms">{t('footer.bottom.terms')}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
