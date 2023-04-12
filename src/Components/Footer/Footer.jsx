import React from 'react';
import { LogoOne, Phone, Gmail, Facebook, Twitter, Instagram } from './Images';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="border-t-2 border-third-color">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center py-12">
            <div className="w-full md:w-3/12">
              <img
                src={LogoOne}
                className="md:w-5/12 mx-auto md:mx-0 w-6/12 my-0"
                alt="Logo"
              />
              <p>{t('text_header_home')}</p>
            </div>
            <div className="flex flex-col my-8 md:my-0 justify-center items-center w-full md:w-6/12">
              <Link
                className="mb-4 text-sm lg:text-base tracking-widest relative before:content-[''] before:absolute before:w-0 before:bg-third-color before:h-[2px] before:top-full before:ease-linear before:duration-300 hover:before:w-full"
                to="/"
                target="_blank"
              >
                {t('home_nav')}
              </Link>
              <Link
                className="text-sm lg:text-base tracking-widest relative before:content-[''] before:absolute before:w-0 before:bg-third-color before:h-[2px] before:top-full before:ease-linear before:duration-300 hover:before:w-full"
                to="/our-courses"
                target="_blank"
              >
                {t('courses_nav')}
              </Link>
              <Link
                offset={0}
                className="my-4 text-sm lg:text-base tracking-widest relative before:content-[''] before:absolute before:w-0 before:bg-third-color before:h-[2px] before:top-full before:ease-linear before:duration-300 hover:before:w-full"
                to="/our-teachers"
                target="_blank"
              >
                {t('teachers_nav')}
              </Link>
              <Link
                className="text-sm lg:text-base tracking-widest relative before:content-[''] before:absolute before:w-0 before:bg-third-color before:h-[2px] before:top-full before:ease-linear before:duration-300 hover:before:w-full"
                to="/Blog"
                target="_blank"
              >
                {t('blog_nav')}
              </Link>
              <Link
                className="my-4 text-sm lg:text-base tracking-widest relative before:content-[''] before:absolute before:w-0 before:bg-third-color before:h-[2px] before:top-full before:ease-linear before:duration-300 hover:before:w-full"
                to="/About-us"
                target="_blank"
              >
                {t('about-us_nav')}
              </Link>
              <Link
                className="text-sm lg:text-base tracking-widest relative before:content-[''] before:absolute before:w-0 before:bg-third-color before:h-[2px] before:top-full before:ease-linear before:duration-300 hover:before:w-full"
                to="/Contact-Us"
                target="_blank"
              >
                {t('contact-us_nav')}
              </Link>

              <Link
                className="mt-4 text-sm lg:text-base tracking-widest relative before:content-[''] before:absolute before:w-0 before:bg-third-color before:h-[2px] before:top-full before:ease-linear before:duration-300 hover:before:w-full"
                to="/Faq"
                target="_blank"
              >
                {t('faq_footer')}
              </Link>
            </div>
            <div className="w-full md:w-3/12">
              <h5 className="text-xl sm:text-2xl">{t('footer_paragraph')}</h5>
              <Link to="/Sign-up" target="_blank">
                <button type="submit"> {t('Sign-up_nav')}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-gray-color w-full directionLeft">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between p-4">
              <div>
                <div className="flex items-center mb-4">
                  <img src={Phone} className="w-1/12 mr-2" alt="Phone" />
                  <span>0560 60 68 96</span>
                </div>
                <div className="flex items-center">
                  <img src={Gmail} className="w-1/12 mr-2" alt="Gmail" />
                  <span>informica@gmail.com</span>
                </div>
              </div>
              <div>
                <div className="flex items-center textCenter my-4 md:my-0">
                  <Link to="">
                    <img src={Facebook} className="w-8/12" alt="Facebook" />
                  </Link>
                  <Link to="">
                    <img src={Twitter} className="w-8/12" alt="Twitter" />
                  </Link>
                  <Link to="">
                    <img src={Instagram} className="w-8/12" alt="Instagram" />
                  </Link>
                </div>
              </div>
              <div>
                <p>
                  Copyright <span>&#169;</span> All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
