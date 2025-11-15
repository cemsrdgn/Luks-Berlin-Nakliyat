import React from 'react';
import { useTranslation } from 'react-i18next';
import instagramLogo from '../assets/logo/instagram.png';
import './topbar.css';

const TopBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <svg className="top-bar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>{t('topbar.phone')}</span>
          </div>
          <div className="top-bar-item">
            <svg className="top-bar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{t('topbar.address')}</span>
          </div>
        </div>
        <div className="top-bar-right">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={instagramLogo} alt="Instagram" className="instagram-logo" />
            </a>
          </div>
          <div className="language-switch">
            <span className="lang-label">TR</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={i18n.resolvedLanguage === 'en'}
                onChange={(e) => changeLanguage(e.target.checked ? 'en' : 'tr')}
              />
              <span className="toggle-slider"></span>
            </label>
            <span className="lang-label">EN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

