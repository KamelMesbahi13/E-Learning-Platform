import React from 'react';
import Data from './../../../Why-Us.json';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const { t, i18n } = useTranslation();

  const data = Data.map((data) => {
    if (i18n.language == 'ar') {
      return {
        id: data.id,
        number: data.number,
        heading: data.heading_ar,
        description: data.description_ar,
      };
    }

    if (i18n.language == 'fr') {
      return {
        id: data.id,
        number: data.number,
        heading: data.heading_fr,
        description: data.description_fr,
      };
    }

    return data;
  });

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -150 },
          visible: { opacity: 1, y: 0 },
        }}
        className="md:mt-20 mt-12"
      >
        <div className="container">
          <div className="w-full ltr:ml-0 mt-8">
            <div className="mb-4 font-bold px-16 relative before:absolute before:hidden before:xl:block before:h-2 before:w-12 rtl:before:left-[73rem] ltr:before:left-0 before:bg-third-color before:top-[1.2rem]">
              <h1 className="mb-2">{t('why_us')}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-20 gap-12 lg:gap-28 directionLeft">
              {data.map((data) => {
                return (
                  <div key={data.id}>
                    <h1 className="mb-0">
                      {data.number}{' '}
                      <span className="text-second-color ml-0 lg:-ml-2 text-base">
                        &#9679;
                      </span>{' '}
                    </h1>
                    <div className="ml-8 mt-4 md:-mt-2 md:ml-12">
                      <h6 className="font-bold">{data.heading}</h6>
                      <div>
                        <p className="text-[0.9rem]">{data.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WhyUs;
