import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TranslateIcon } from '../../INDEX';
import LogoImg from './../../Assets/MenDarkLogo.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const navHandle = () => {
    setNav(!nav);
  };

  const { t } = useTranslation();

  return (
    <>
      <div
        className="z-10 w-full relative py-1 shadow-md activeClass"
        name="nav"
      >
        <div className="container">
          <div className="flex justify-between py-1 items-center">
            <div>
              <img className="w-20 lg:w-24" src={LogoImg} alt="Logo" />
            </div>
            <div className="hidden md:flex">
              <Link className="nav-link" to="/">
                {t('home_nav')}
              </Link>
              <Link className="nav-link" to="/our-courses">
                {t('courses_nav')}
              </Link>
              <Link className="nav-link" to="/our-teachers">
                {t('teachers_nav')}
              </Link>
              <Link className="nav-link" to="/Blog">
                {t('blog_nav')}
              </Link>
              <Link className="nav-link" to="/About-us">
                {t('about-us_nav')}
              </Link>
              <Link className="nav-link" to="/Contact-Us">
                {t('contact-us_nav')}
              </Link>
            </div>

            <div className="md:flex hidden">
              <div>
                <Link to="/Login">
                  <div
                    className="border-2 px-[0.5rem] py-2 lg:px-4 rounded duration-300 hover:border-second-color-opacity"
                    type="submit"
                  >
                    {t('login_nav')}
                  </div>
                </Link>
              </div>

              <div>
                <Link to="/Sign-up">
                  <div
                    className="bg-second-color-opacity border-2 border-second-color-opacity px-[0.5rem] py-2 lg:px-4 duration-300 text-main-color ltr:ml-4 rtl:mr-4 rounded  hover:border-second-color hover:bg-second-color"
                    type="submit"
                  >
                    {t('Sign-up_nav')}
                  </div>
                </Link>
              </div>

              <div>
                <TranslateIcon />
              </div>
            </div>

            <div className="md:hidden">
              <div className="cursor-pointer">
                {nav ? (
                  <AiOutlineMenu className="text-2xl" onClick={navHandle} />
                ) : (
                  <AiOutlineClose className="text-2xl" onClick={navHandle} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? 'relative duration-500 opacity-0 w-full h-[0vh]'
              : 'relative duration-500 opacity-100 w-full bg-main-color h-[150vh] p-4'
          }
        >
          <div>
            <div>
              <h1 className="md:hidden text-2xl mb-4">Mendarek</h1>
            </div>
            <div className="flex flex-col">
              <Link className="nav-link-sm" onClick={navHandle} to="/">
                {t('home_nav')}
              </Link>
              <Link
                className="nav-link-sm"
                onClick={navHandle}
                to="/our-courses"
              >
                {t('courses_nav')}
              </Link>
              <Link
                className="nav-link-sm"
                onClick={navHandle}
                to="/our-teachers"
              >
                {t('teachers_nav')}
              </Link>
              <Link className="nav-link-sm" onClick={navHandle} to="/Blog">
                {t('blog_nav')}
              </Link>
              <Link className="nav-link-sm" onClick={navHandle} to="/About-us">
                {t('about-us_nav')}
              </Link>
              <Link
                className="nav-link-sm"
                onClick={navHandle}
                to="/Contact-Us"
              >
                {t('contact-us_nav')}
              </Link>
            </div>
            <div className="md:flex block">
              <div>
                <Link to="/Login">
                  <div
                    onClick={navHandle}
                    className="border-2 px-[0.5rem] py-2 lg:px-4 rounded text-center duration-300 hover:border-second-color-opacity"
                    type="submit"
                  >
                    {t('login_nav')}
                  </div>
                </Link>
              </div>

              <div>
                <Link to="/Sign-up">
                  <div
                    onClick={navHandle}
                    className="bg-second-color-opacity border-2 border-second-color-opacity px-[0.5rem] py-2 duration-300 text-main-color text-center rounded  hover:border-second-color hover:bg-second-color"
                    type="submit"
                  >
                    {t('Sign-up_nav')}
                  </div>
                </Link>
              </div>

              <div>
                <TranslateIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
