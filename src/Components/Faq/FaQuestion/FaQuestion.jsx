import React from 'react';
import FaqData from './../data/FaqData.json';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const FaQuestion = () => {
  const { t, i18n } = useTranslation();

  const question = FaqData.map((question) => {
    if (i18n.language == 'ar') {
      return {
        id: question.id,
        question: question.question_ar,
        response: question.response_ar,
      };
    }

    if (i18n.language == 'fr') {
      return {
        id: question.id,
        question: question.question_fr,
        response: question.response_ar,
      };
    }
    return question;
  });
  return (
    <>
      <div className="pb-12">
        <div>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-16">
              {question.map((faq) => {
                return (
                  <div key={faq.id}>
                    <div>
                      <div className="my-6">
                        <h6 className="font-semibold">
                          <div className="flex items-center">
                            <div className="text-second-color rtl:ml-2 ltr:mr-2">
                              <AiFillQuestionCircle />
                            </div>
                            <div>
                              {faq.id}. {faq.question}
                            </div>
                          </div>
                        </h6>
                      </div>
                      <div>
                        <p>{faq.response}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 text-center">
              <p>
                {t('other_questions')}{' '}
                <a
                  className="text-second-color font-bold"
                  href="mailto: elkamel.mesbahi@gmail.com"
                >
                  informica@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaQuestion;
