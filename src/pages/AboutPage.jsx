import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container px-4 py-5">
      <h1 className="pb-2 border-bottom">{t('about')}</h1>
      <p className="lead mt-4">
        {t('aboutPageLead')}
      </p>
      <p>
        {t('aboutPageText')}
      </p>
    </div>
  );
};

export default AboutPage;
