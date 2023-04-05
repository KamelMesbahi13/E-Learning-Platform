import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeachersData from './../../Teachers/TeachersDetails/data/Teachers.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import './Swiper.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function App() {
  const { i18n } = useTranslation();

  const teacher = TeachersData.map((teacher) => {
    if (i18n.language == 'ar') {
      return {
        id: teacher.id,
        image: teacher.image,
        job: teacher.job_ar,
        name: teacher.name_ar,
        introduction: teacher.introduction_ar,
      };
    }

    if (i18n.language == 'fr') {
      return {
        id: teacher.id,
        image: teacher.image,
        job: teacher.job_fr,
        name: teacher.name_fr,
        introduction: teacher.introduction_fr,
      };
    }

    return teacher;
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
        spaceBetween={10}
        grabCursor={true}
        className="mySwiper rtl:directionLeft"
      >
        {teacher.map((teacher) => {
          return (
            <SwiperSlide
              key={teacher.id}
              className="mt-16 pt-4 pb-16 rounded border"
            >
              <div className="py-4">
                <div className="">
                  <Link to={`/our-teachers/${teacher.id}`} target="_blank">
                    <LazyLoadImage
                      src={teacher.image}
                      effect="blur"
                      alt="test"
                      className="w-20 h-20 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-[50%] object-cover"
                    ></LazyLoadImage>
                  </Link>
                </div>

                <div>
                  <Link to={`/our-teachers/${teacher.id}`} target="_blank">
                    <h6 className="my-4 font-semibold">{teacher.name}</h6>
                  </Link>
                  <h6>{teacher.job}</h6>
                  <p className="text-base w-10/12 my-0 mx-auto">
                    {teacher.introduction}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
