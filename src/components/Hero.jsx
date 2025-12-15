import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">{t('heroTitle')}</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          {t('heroSubtitle')}
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            {t('getStarted')}
          </button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            {t('learnMore')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

