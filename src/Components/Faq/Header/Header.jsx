import React from 'react';
import { Title } from '../../../GeneralFunctions/title';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  Title('Mendarek | FAQ');
  return (
    <>
      <div>
        <div className="container">
          <div className="mt-20 mb-16 md:mb-32 text-center">
            <h1 className="font-bold">{t('fa_question')}</h1>
            <p className="mt-8 md:w-1/2 mx-auto">{t('faq_paragraph')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
