import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from './../../../../src/Assets/AboutUs.png';
import { useTranslation } from 'react-i18next';

const OurStory = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        <div className="flex flex-col items-center mt-28 ltr:lg:flex-row rtl:lg:flex-row-reverse">
          <div>
            <LazyLoadImage
              src={Image}
              className="w-full lg:w-9/12 rtl:float-left"
              alt="About-Us"
            ></LazyLoadImage>
          </div>
          <div className="w-full rtl:mr-0 ltr:ml-0 rtl:lg:mr-20 ltr:lg:ml-20 lg:w-7/12">
            <div className="mb-4 font-bold relative before:absolute before:hidden before:xl:block before:h-2 before:w-12 rtl:before:left-[33rem] ltr:before:-left-16 before:bg-third-color before:top-1/2">
              <h1 className="mb-2">{t('our_story')}</h1>
            </div>
            <p>{t('our_story_paragraph')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
