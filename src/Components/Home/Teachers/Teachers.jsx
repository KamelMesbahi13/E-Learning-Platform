import React from 'react';
import Swiper from './Swiper';
import { useTranslation } from 'react-i18next';

const Teachers = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="container">
          <div>
            <div className="w-full xl:px-16 md:mt-20 mt-8 lg:w-10/12">
              <div className="mb-4 font-bold relative before:absolute before:hidden before:xl:block before:h-2 before:w-12 rtl:before:left-[56rem] ltr:before:-left-16 before:bg-third-color before:top-[1.2rem]">
                <h1 className="mb-2">{t('home_teacher_heading')}</h1>
              </div>
              <p>{t('home_teacher_paragraph')}</p>
            </div>
          </div>
          <div>
            <Swiper />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
