import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CoursesData from '../data/Courses.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CoursList = () => {
  const { t, i18n } = useTranslation();

  const courses = CoursesData.map((course) => {
    if (i18n.language == 'ar') {
      return {
        id: course.id,
        image: course.image,
        name: course.name_ar,
        description: course.description_ar,
      };
    }

    if (i18n.language == 'fr') {
      return {
        id: course.id,
        image: course.image,
        name: course.name_fr,
        description: course.description_fr,
      };
    }
    return course;
  });

  return (
    <>
      <div>
        <div className="container">
          <div>
            <div className="w-full xl:px-16 mt-20 lg:w-10/12">
              <div className="mb-4 font-bold relative before:absolute before:hidden before:xl:block before:h-2 before:w-12 rtl:before:left-[56rem] ltr:before:-left-16 before:bg-third-color before:top-[1.2rem]">
                <h1 className="mb-2">
                  {t('all_courses')}: <br /> {t('find_all')}
                </h1>
              </div>
            </div>
          </div>
          <div>
            <Swiper
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },

                550: {
                  slidesPerView: 2,
                },

                1023: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              grabCursor={true}
              className="mySwiper"
            >
              {courses.map(({ id, image, name, description }) => {
                return (
                  <SwiperSlide
                    key={id}
                    className="mt-16 pb-16 rounded border shadow"
                  >
                    <div>
                      <LazyLoadImage
                        src={image}
                        effect="blur"
                        alt="test"
                        className="w-full aspect-[3/2] object-fill"
                      ></LazyLoadImage>

                      <div>
                        <h6 className="my-4 font-semibold">{name}</h6>
                        <p className="text-base w-10/12 my-0 mx-auto">
                          {description}
                        </p>
                      </div>
                      <div>
                        <Link to={`/course-details/${id}`}>
                          <button type="submit">{t('learn_more')}</button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursList;
