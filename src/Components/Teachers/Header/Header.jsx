import React from 'react';
import { Title } from '../../../GeneralFunctions/title';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  Title('Mendarek | Teachers');
  return (
    <>
      <div>
        <div className="container">
          <div className="w-full xl:px-16 mt-20 lg:w-10/12">
            <div className="mb-4 font-bold relative">
              <h1 className="mb-2">{t('home_teacher_heading')} </h1>
            </div>
            <p>{t('home_teacher_paragraph')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
