import React from 'react';

import { useTranslation } from 'react-i18next';
function FeedbackForm() {
  const { t, i18n } = useTranslation();
    return (
      <div className="xl:container m-auto md:py-8  bg-center bg-cover xl:rounded-[30px] ">
        <div className="relative flex flex-row justify-around items-center xl:px-16 px-6 xl:py-16 py-8 xl:mt-14">
          <div
            className="absolute z-0 w-full h-[80%] min-h-[500px] bg-[url('https://hathyo.com/scientist.jpg')] bg-center bg-cover xl:rounded-[30px]"
          ></div>
          <div className="absolute w-full h-[80%] min-h-[500px]   bg-green-700/50 rounded-[30px] z-1 blur-sm opacity-65 xl:rounded-[30px]"></div>
          <div className="flex justify-between md:gap-4 xl:gap-16">
            <div className="xl:mt-[-130px] md:basis-1/2 bg-white z-[3] flex flex-col w-full px-6 py-6 gap-8 shadow-md rounded-[20px]">
              <h5 className="text-gray-700 text-xl font-bold">{t('feedback.suggestions')}</h5>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder={t('feedback.name_placeholder')}
                  className="body-medium border p-2 text-gray-600 placeholder-gray-300 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-200 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                />
                <input
                  type="email"
                  placeholder={t('feedback.email_placeholder')}
                  className="body-medium border p-2 text-gray-600 placeholder-gray-300 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-200 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                />
                <textarea
                  placeholder={t('feedback.suggestions_placeholder')}
                  className="p-2 min-h-[144px] body-medium border text-gray-600 placeholder-gray-300 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-200 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div className="mx-auto">
                <div
                  className="text-center min-w-[200px] bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-full"
                >
                  {t('feedback.send_suggestion')}
                </div>
              </div>
              <div className="body-medium text-gray-600 font-normal text-center text-[17px] text-sm  ">
              {t('feedback.thank_you')}
              </div>
            </div>
            <div className="hidden md:flex basis-1/2 flex-col gap-4 z-[3]">
              <div className="body-sm-semibold rounded-lg bg-orange-400 text-white py-2 px-4 w-fit">
                Hathyo
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-white text-xl font-semibold">
                {t('feedback.title')}
                </h5>
                <div className="flex flex-col gap-4">
                  <div className="body-medium text-white font-normal">
                  {t('feedback.p1')}
                  </div>
                  <div className="body-medium text-white font-normal">
                  {t('feedback.p2')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FeedbackForm;