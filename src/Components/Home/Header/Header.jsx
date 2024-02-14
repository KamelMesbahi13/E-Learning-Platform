import React from 'react';
import Img from './../../../Assets/HeaderTwo.jpg';
import { Link } from 'react-router-dom';
import { Title } from '../../../GeneralFunctions/title';
import { useTranslation } from 'react-i18next';

const Heading = () => {
  const { t } = useTranslation();

  Title('Mendarek');

  return (
    <>
      <div className="md:mt-20 mt-4">
        <div className="container">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-full lg:w-4/6">
              <div className="mb-4 font-bold">
                <h1 className="mb-2">{t('header_title')}</h1>
                <h1>{t('header_sub_title')}</h1>
              </div>
              <p>{t('text_header_home')}</p>
              <div>
                <Link to="/our-courses">
                  <button type="submit">{t('start_now')}</button>
                </Link>
              </div>
            </div>
            <div>
              <img src={Img} className="mt-8" alt="E-Learning" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
