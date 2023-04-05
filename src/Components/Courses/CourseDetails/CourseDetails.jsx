import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseData from './../data/Courses.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Title } from '../../../GeneralFunctions/title';
import { useTranslation } from 'react-i18next';

const CourseDetails = () => {
  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });

  const { t, i18n } = useTranslation();

  const courses = CourseData.map((course) => {
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

  const { courseId } = useParams();

  const Course = courses.find((course) => course.id == courseId);

  const { image, name, description } = Course;

  Title(`Mendarek | ${name} Course`);

  return (
    <>
      <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
        <div className="container">
          <div className="mt-20 mb-16 md:mb-32 text-center">
            <h1 className="font-bold">
              {t('this_course_for')} <br /> {name}
            </h1>
          </div>
          <div>
            <p>{description}</p>
          </div>

          <div>
            <LazyLoadImage src={image} alt={name} effect="blur" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
