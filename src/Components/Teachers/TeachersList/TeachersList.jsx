import React from 'react';
import TeacherData from './../TeachersDetails/data/Teachers.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Gmail } from '../TeachersDetails/Images';
import { useTranslation } from 'react-i18next';

const TeachersList = () => {
  const { i18n } = useTranslation();

  const teacher = TeacherData.map((teacher) => {
    if (i18n.language == 'ar') {
      return {
        id: teacher.id,
        image: teacher.image,
        job: teacher.job_ar,
        name: teacher.name_ar,
        email: teacher.email,
      };
    }

    if (i18n.language == 'fr') {
      return {
        id: teacher.id,
        image: teacher.image,
        job: teacher.job_fr,
        name: teacher.name_fr,
        email: teacher.email,
      };
    }

    return teacher;
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="grid grid-cols-1 mb-20 md:grid-cols-2 text-center lg:grid-cols-3 mt-12 lg:mt-20 gap-12 lg:gap-28">
            {teacher.map((teacher) => {
              return (
                <div key={teacher.id}>
                  <div className="bg-main-color shadow-lg pt-8 pb-20 relative before:absolute before:w-0 before:h-1 before:transition-all before:duration-1000 before:bottom-0 before:left-0 before:bg-third-color hover:before:w-full">
                    <div>
                      <Link to={`/our-teachers/${teacher.id}`} target="_blank">
                        <LazyLoadImage
                          src={teacher.image}
                          alt={teacher.name}
                          effect="blur"
                          className="w-36 h-36 object-cover rounded-full mb-2"
                        />
                      </Link>
                    </div>

                    <div>
                      <h6 className="font-semibold">{teacher.name}</h6>
                      <h6 className="font-light text-lg">{teacher.job}</h6>
                      <div className="flex items-center justify-center mt-4">
                        <img
                          className="w-[6%] lg:w-1/12"
                          src={Gmail}
                          alt="Gmail"
                        />
                        <p className="ml-2">{teacher.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachersList;
