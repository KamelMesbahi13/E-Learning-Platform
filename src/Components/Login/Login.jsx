import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from './../../Assets/loginTwo.png';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { Title } from '../../GeneralFunctions/title';

import { useTranslation } from 'react-i18next';

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const showPassword = () => {
    setPasswordShown(!passwordShown);
  };
  Title('Mendarek | Login');

  const { t } = useTranslation();

  return (
    <>
      <div name="Login">
        <div className="container">
          <div>
            <div className="flex flex-col lg:flex-row justify-between my-12 rounded-2xl loginShadow">
              <div className="bg-gray-color lg:w-1/2 p-12">
                <h1 className="md:text-4xl text-3xl">
                  <span className="text-second-color font-semibold">
                    {t('header_title')}
                  </span>{' '}
                  <br /> {t('login_paragraph')}
                </h1>
                <div className="mt-4">
                  <LazyLoadImage
                    src={Image}
                    className="lg:w-9/12 mx-auto sm:block hidden"
                    alt="Login"
                  ></LazyLoadImage>
                </div>
              </div>
              <div className="lg:w-1/2 w-full rounded-3xl mt-8 lg:mt-0  px-12 lg:px-20 py-12 directionLeft">
                <div className="mb-6">
                  <h1 className="mb-6 text-center">{t('welcome_back')}</h1>
                  <h6>{t('login_nav')}</h6>
                </div>
                <form>
                  <div>
                    <label htmlFor="email">{t('email')}</label> <br />
                    <input type="email" name="email" placeholder={t('email')} />
                  </div>
                  <div className="my-4">
                    <div>
                      <label htmlFor="password">{t('password')}</label>{' '}
                    </div>
                    <div className="flex items-center">
                      <input
                        type={passwordShown ? 'text' : 'password'}
                        name="password"
                        placeholder={t('password')}
                      />
                      <AiOutlineEye
                        onClick={showPassword}
                        className="cursor-pointer text-xl"
                      />{' '}
                      <br />
                    </div>
                    <a href="#" className="text-xs">
                      {t('forgot_password')}{' '}
                    </a>
                  </div>
                </form>
                <div>
                  <a href="#">
                    <button className="w-full" type="submit">
                      {t('login_nav')}
                    </button>
                  </a>
                </div>
                <div className="text-center mt-4">
                  <p>
                    {t('not_registered')}{' '}
                    <Link className="font-semibold ml-1" to="/Sign-up">
                      {t('Sign-up_nav')}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
