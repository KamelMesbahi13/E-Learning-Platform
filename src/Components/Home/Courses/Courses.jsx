import React from 'react';
import Swiper from './SwiperCourses';
import { useTranslation } from 'react-i18next';

const Teachers = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="container">
          <div>
            <div className="w-full xl:px-16 md:mt-20 mt-4 lg:w-10/12">
              <div className="mb-4 font-bold relative before:absolute before:hidden before:xl:block before:h-2 before:w-12 rtl:before:left-[56rem] ltr:before:-left-16 before:bg-third-color before:top-[1.2rem]">
                <h1 className="mb-2">
                  {t('home_courses_heading')} <br />{' '}
                  {t('home_courses_sub_heading')}
                </h1>
              </div>
              <p>{t('home_courses_paragraph')}</p>
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
