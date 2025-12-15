import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const Features = () => {
  const { t } = useTranslation();
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">{t('featuresTitle')}</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2 rounded">
            <i className="bi bi-collection"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">{t('feature1Title')}</h3>
          <p>
            {t('feature1Text')}
          </p>
          <a href="#" className="icon-link">
            {t('learnMore')}
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2 rounded">
            <i className="bi bi-gear-fill"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">{t('feature2Title')}</h3>
          <p>
            {t('feature2Text')}
          </p>
          <a href="#" className="icon-link">
            {t('learnMore')}
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2 rounded">
            <i className="bi bi-speedometer2"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">{t('feature3Title')}</h3>
          <p>
            {t('feature3Text')}
          </p>
          <a href="#" className="icon-link">
            {t('learnMore')}
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;

