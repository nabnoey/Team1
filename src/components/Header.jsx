import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const Header = ({ setPage }) => {
  const { t, setLanguage, language } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'th' : 'en';
    setLanguage(newLang);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => setPage('home')}>
          <strong>System1</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('home')}>
                {t('home')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('projects')}>
                {t('projects')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('about')}>
                {t('about')}
              </a>
            </li>
            <li className="nav-item ms-3">
              <button className="btn btn-outline-light btn-sm" onClick={handleLanguageChange}>
                {language === 'en' ? 'ไทย' : 'EN'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

