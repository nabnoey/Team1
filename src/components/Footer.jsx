import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid px-4">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <strong>System1</strong>
          </Link>
          <span className="mb-3 mb-md-0 text-body-secondary">{t('companyInfo')}</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

