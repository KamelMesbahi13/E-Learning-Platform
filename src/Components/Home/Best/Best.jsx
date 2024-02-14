import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Img from './../../../Assets/Best.jpg';
import IconOne from './../../../Assets/iconOne.png';
import IconTwo from './../../../Assets/iconTwo.png';
import IconThree from './../../../Assets/iconThree.png';
import { useTranslation } from 'react-i18next';

const Best = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-24 rtl:md:my-40 rtl:my-20">
        <div className="container">
          <div className="flex flex-col-reverse items-center lg:flex-row">
            <div className="mt-8">
              <LazyLoadImage src={Img} alt="E-Learning" />
            </div>
            <div className="w-full ml-0 ltr:lg:ml-24 rtl:lg:mr-24 rtl:lg:w-8/12 ltr:lg:w-3/6">
              <div className="mb-4 font-bold relative before:absolute before:hidden before:xl:block before:h-2 before:w-12 before:rtl:left-[41rem] before:ltr:-left-16 before:bg-third-color before:top-[1.2rem]">
                <h1 className="mb-2">{t('home_best_heading')}</h1>
              </div>
              <p>{t('home_best_paragraph')}</p>
              <div className="mt-4">
                <div className="flex items-center">
                  <img src={IconOne} alt="Learn With Videos" />
                  <p className="ltr:ml-2 rtl:mr-2">{t('learn_with_videos')}</p>
                </div>
                <div className="my-4 items-center flex">
                  <img src={IconTwo} alt="Creative Study Pattern" />
                  <p className="ltr:ml-2 rtl:mr-2">{t('creative_study')}</p>
                </div>
                <div className=" flex items-center">
                  <img src={IconThree} alt="Provided With Examples" />
                  <p className="ltr:ml-2 rtl:mr-2">{t('exemples')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Best;
