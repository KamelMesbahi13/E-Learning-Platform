import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from './../../Assets/404Page.webp';
import { Link } from 'react-router-dom';
import { Title } from '../../GeneralFunctions/title';
import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();

  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });

  Title('Mendarek | 404 Not Found');
  return (
    <>
      <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
        <div>
          <div className="container">
            <div className="textCenter my-20">
              <div>
                <LazyLoadImage src={Image} alt="404 Image" />
              </div>
              <div>
                <h1 className="font-semibold mb-8">{t('not_found')}</h1>
                <p>{t('not_found_paragraph')}</p>
              </div>
              <Link to="/" target="_blank">
                <button type="submit">{t('back_home')}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
