import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useTranslation } from 'react-i18next';

const Statistics = () => {
  const [counterOn, setCounterOn] = useState(false);

  const setCounterOnEnter = () => {
    setCounterOn(true);
  };

  const setCounterOnExit = () => {
    setCounterOnExit(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <ScrollTrigger onEnter={setCounterOnEnter} onExit={setCounterOnExit}>
        <div className="bg-gray-color">
          <div className="container">
            <div className="flex flex-wrap gap-12 lg:gap-x-32 justify-between place-items-center text-center py-16 mt-12">
              <div>
                <h6>
                  {t('students')} <br />
                </h6>
                <div className="flex items-center justify-center">
                  <span className="font-bold text-second-color">+</span>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={349} duration={3} delay={0} />
                    )}
                  </h1>
                </div>
              </div>

              <div>
                <h6>
                  {t('courses')} <br />
                </h6>
                <div className="flex items-center justify-center">
                  <span className="font-bold text-second-color">+</span>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={253} duration={3} delay={0} />
                    )}
                  </h1>
                </div>
              </div>

              <div>
                <h6>
                  {t('teachers')} <br />
                </h6>
                <div className="flex items-center justify-center">
                  <span className="font-bold text-second-color">+</span>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={27} duration={3} delay={0} />
                    )}
                  </h1>
                </div>
              </div>

              <div>
                <h6>
                  {t('videos')} <br />
                </h6>
                <div className="flex items-center justify-center">
                  <span className="font-bold text-second-color">+</span>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={239} duration={3} delay={0} />
                    )}
                  </h1>
                </div>
              </div>

              <div>
                <h6>
                  {t('corrected')} <br />
                </h6>
                <div className="flex items-center justify-center">
                  <span className="font-bold text-second-color">+</span>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={105} duration={3} delay={0} />
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Statistics;
