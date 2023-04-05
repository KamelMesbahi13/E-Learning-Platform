import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillStar } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import TestimonialsData from './../../../Testimonials.json';
import { useTranslation } from 'react-i18next';

const TestimonialsSwiper = () => {
  const { t, i18n } = useTranslation();

  const testimonials = TestimonialsData.map((testimonial) => {
    if (i18n.language == 'ar') {
      return {
        id: testimonial.id,
        image: testimonial.image,
        name: testimonial.name_ar,
        opinion: testimonial.opinion_ar,
      };
    }

    if (i18n.language == 'fr') {
      return {
        id: testimonial.id,
        image: testimonial.image,
        name: testimonial.name_fr,
        opinion: testimonial.opinion_fr,
      };
    }
    return testimonial;
  });

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center mt-12 mb-20 directionLeft">
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
          grabCursor={true}
          watchSlidesProgress={true}
          slidesPerView={3}
          className="mySwiper"
        >
          {testimonials.map(({ id, image, opinion, name }) => {
            return (
              <SwiperSlide key={id}>
                <div>
                  <div>
                    <div className="mx-12">
                      <LazyLoadImage
                        className="aspect-[6/6] w-full md:w-812 object-cover"
                        effect="blur"
                        src={image}
                        alt={name}
                      />
                      <div>
                        <p className="my-4 text-sm">"{opinion}"</p>
                        <div className="text-left">
                          <div className="flex items-center">
                            <h6 className="text-2xl mr-12 mb-0">{name}</h6>
                            <AiFillStar className="text-[#E6B325] text-2xl" />
                            <AiFillStar className="text-[#E6B325] text-2xl" />
                            <AiFillStar className="text-[#E6B325] text-2xl" />
                            <AiFillStar className="text-[#E6B325] text-2xl" />
                            <AiFillStar className="text-[#E6B325] text-2xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="md:w-[40%] md:mr-4 text-center">
          <h1>{t('people_say')}</h1>
          <p>{t('said_about_us')}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSwiper;
