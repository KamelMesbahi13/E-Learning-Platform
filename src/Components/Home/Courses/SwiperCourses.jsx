import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CoursesData from './../../../Components/Courses/data/Courses.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import './SwiperCourses.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function App() {
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
        spaceBetween={0}
        grabCursor={true}
        className="mySwiper rtl:directionLeft"
      >
        {courses.map(({ id, image, name, description }) => {
          return (
            <SwiperSlide key={id} className="mt-16 pb-16 rounded border shadow">
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
                  <Link target="_blank" to={`/course-details/${id}`}>
                    <button type="submit">{t('learn_more')}</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
