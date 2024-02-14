import React from 'react';
import { Title } from '../../../GeneralFunctions/title';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  Title('Mendarek | Blog');
  return (
    <>
      <div>
        <div>
          <div className="container">
            <div className="md:mt-20 mt-8 mb-8 md:mb-32 text-center">
              <h1 className="font-bold">
                {t('latest_news_one')} <br /> {t('latest_news_two')}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
