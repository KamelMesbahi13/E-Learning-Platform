import { useState } from 'react';
import TeacherDetails from './TeacherDetails';
import { useTranslation } from 'react-i18next';

const TeachersDetails = () => {
  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });
  const { t } = useTranslation();

  return (
    <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
      <div className="directionLeft">
        <div>
          <div className="container">
            <div className="w-full mt-20">
              <div className="mb-4 font-bold text-center">
                <h1 className="mb-2">{t('home_teacher_heading')} </h1>
              </div>
            </div>
          </div>
          <TeacherDetails />
        </div>
      </div>
    </div>
  );
};

export default TeachersDetails;
