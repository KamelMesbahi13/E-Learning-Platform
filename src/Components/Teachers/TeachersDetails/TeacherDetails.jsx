import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TeachersData from './data/Teachers.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Facebook, Gmail, Instagram, Phone, Twitter } from './Images';
import { Title } from '../../../GeneralFunctions/title';
import { useTranslation } from 'react-i18next';

const TeacherDetails = () => {
  const { t, i18n } = useTranslation();

  const teachers = TeachersData.map((teacher) => {
    if (i18n.language == 'ar') {
      return {
        id: teacher.id,
        image: teacher.image,
        job: teacher.job_ar,
        name: teacher.name_ar,
        description: teacher.description_ar,
        age: teacher.age,
        phone: teacher.phone,
        email: teacher.email,
        facebook: teacher.facebook,
        instagram: teacher.instagram,
        twitter: teacher.twitter,
      };
    }

    if (i18n.language == 'fr') {
      return {
        id: teacher.id,
        image: teacher.image,
        job: teacher.job_fr,
        name: teacher.name_fr,
        description: teacher.description_fr,
        age: teacher.age,
        phone: teacher.phone,
        email: teacher.email,
        facebook: teacher.facebook,
        instagram: teacher.instagram,
        twitter: teacher.twitter,
      };
    }

    return teacher;
  });

  const { teacherId } = useParams();

  const teacher = teachers.find((teacher) => teacher.id == teacherId);
  const {
    id,
    image,
    job,
    name,
    description,
    age,
    phone,
    email,
    facebook,
    instagram,
    twitter,
  } = teacher;

  console.log(teacher);
  Title(`Mendarek | ${name}`);
  return (
    <div>
      <div className="container">
        <div className="shadow-xl rounded-xl mb-20">
          <div>
            <div className="flex items-center mt-20 p-12">
              <div>
                <LazyLoadImage
                  src={image}
                  alt={name}
                  effect="blur"
                  className="w-48 h-48 object-cover rtl:ml-4 rounded-full"
                ></LazyLoadImage>
              </div>
              <div className="ml-20 lg:ml-36 rtl:directionRight">
                <h6 className="font-semibold text-xl md:text-2xl lg:text-3xl m-0">
                  {name}
                </h6>
                <p className="my-2 text-xl md:text-2xl">{job}</p>
                <p className="text-xl md:text-2xl">
                  {age}{' '}
                  <span className="text-lg md:text-xl">{t('years_old')}</span>{' '}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between p-12 border-t-4 bg-gray-color">
              <div className="lg:w-8/12 rtl:directionRight">
                <h6 className="font-semibold mb-4">{t('about_me')}:</h6>
                <p>{description}</p>
                <div>
                  <Link to={`/course-details/${id}`}>
                    <button type="submit">{t('my_courses')}</button>
                  </Link>
                </div>
              </div>
              <div className="ml-0 lg:ml-12">
                <h6 className="font-semibold mt-8 lg:mt-0 mb-4">
                  {t('contact_details')}
                </h6>

                <div className="flex">
                  <div className={facebook ? 'block' : 'hidden'}>
                    <Link to={facebook}>
                      <img className="w-9/12" src={Facebook} alt="Facebook" />
                    </Link>
                  </div>

                  <div className={instagram ? 'block' : 'hidden'}>
                    <Link to={instagram}>
                      <img className="w-9/12" src={Instagram} alt="Instagram" />
                    </Link>
                  </div>

                  <div className={twitter ? 'block' : 'hidden'}>
                    <Link to={twitter}>
                      <img className="w-9/12" src={Twitter} alt="Twitter" />
                    </Link>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center">
                    <img className="w-[6%] lg:w-1/12" src={Phone} alt="Phone" />
                    <p className="ml-2">{phone}</p>
                  </div>

                  <div className="flex items-center mt-4">
                    <img className="w-[6%] lg:w-1/12" src={Gmail} alt="Gmail" />
                    <p className="ml-2">{email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
