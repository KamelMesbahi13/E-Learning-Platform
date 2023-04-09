import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Teacher from './../../../Assets/teacher.png';
import Digital from './../../../Assets/digitalization.png';
import LowCoast from './../../../Assets/low-cost.png';

const AboutUs = () => {
  const [windowValue, setWindowValue] = useState(false);
  const activeClass = window.addEventListener('scroll', () => {
    if (window.scrollY > 2650) {
      setWindowValue(true);
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', activeClass);
    return window.removeEventListener('scroll', activeClass);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="w-full xl:px-16 mt-20 lg:w-10/12">
          <div className="mb-4 font-bold relative before:absolute before:hidden before:xl:block before:h-2 before:w-12 rtl:before:left-[56rem] ltr:before:-left-16 before:bg-third-color before:top-[1.2rem]">
            <h1 className="mb-2">
              {t('home_about-us_heading')} <br />{' '}
              {t('home_about-us_sub_heading')}
            </h1>
          </div>
          <p>{t('home_about-us_paragraph')}</p>
          <Link to="/About-us" target="_blank">
            <button type="submit">{t('learn_more')}</button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-color py-16 w-full mt-8">
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div
              className={
                windowValue
                  ? 'textCenter bg-main-color p-12 rounded shadow relative w-full duration-[1400ms] top-0'
                  : 'textCenter bg-main-color p-12 rounded shadow relative w-full duration-[1400ms] top-48'
              }
            >
              <div>
                <img src={Teacher} className="w-[60px]" alt="teacher" />
                <div>
                  <h6 className="my-4">
                    {t('about-us_best-teachers_best_teachers')}
                  </h6>
                  <p>{t('about-us_best-teachers_paragraph_best_teachers')}</p>
                </div>
              </div>
            </div>

            <div
              className={
                windowValue
                  ? 'textCenter bg-main-color p-12 rounded shadow relative w-full duration-[1700ms] top-0 my-8 lg:my-0 lg:mx-8'
                  : 'textCenter bg-main-color p-12 rounded shadow relative w-full duration-[1700ms] top-48'
              }
            >
              {' '}
              <div>
                <img src={Digital} className="w-[60px]" alt="digital" />
                <div>
                  <h6 className="my-4">
                    {t('about-us_best-teachers_digital_learning')}
                  </h6>
                  <p>
                    {t('about-us_best-teachers_paragraph_digital_learning')}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={
                windowValue
                  ? 'textCenter bg-main-color p-12 rounded shadow relative w-full duration-[2000ms] top-0'
                  : 'textCenter bg-main-color p-12 rounded shadow relative w-full duration-[2000ms] top-48'
              }
            >
              {' '}
              <div>
                <img src={LowCoast} className="w-[60px]" alt="low coast" />
                <div>
                  <h6 className="my-4">
                    {t('about-us_best-teachers_low_coast')}
                  </h6>
                  {t('about-us_best-teachers_paragraph_low_coast')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
