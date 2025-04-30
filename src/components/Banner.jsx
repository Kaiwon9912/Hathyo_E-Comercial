import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import banner1 from '/images/banner/banner1.jpg';
import banner2 from '/images/banner/banner2.jpg';
import banner3 from '/images/banner/banner3.jpg';
import { useTranslation } from 'react-i18next';

const quotes = [
  {
    text: "banner.quotes1",
    author: "banner.author1"
  },
  {
text: "banner.quotes1",
    author: "banner.author1"
  },
  {
    text: "banner.quotes2",
    author: "banner.author2"
  },
  {
    text: "banner.quotes3",
    author: "banner.author3"
  },
  {
    text: "banner.quotes4",
    author: "banner.author4"
  }
];

function Banner() {
  const [currentBanner, setCurrentBanner] = useState('');
  const [currentQuote, setCurrentQuote] = useState({ text: '', author: '' });
  const [currentDate, setCurrentDate] = useState('');
  const { t, i18n } = useTranslation();
  useEffect(() => {
    // Random banner
    const banners = [banner1, banner2, banner3];
    const randomBannerIndex = Math.floor(Math.random() * banners.length);
    setCurrentBanner(banners[randomBannerIndex]);

    // Random quote
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomQuoteIndex]);


    const updateDate = () => {
      const now = new Date();
      const days = {
        vi: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
        en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      };
    
      const lang = i18n.language || 'vi'; 
      const dayName = days[lang][now.getDay()];
      const formattedDate = `${dayName}, ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      setCurrentDate(formattedDate);
    };
    

    updateDate();
    const interval = setInterval(updateDate, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative min-h-full min-w-full pt-24 xl:pt-12 py-12 xl:h-full xl:aspect-[1280/520] object-cover">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
          <img
            className="w-full h-full xl:aspect-[1280/520] object-cover"
            alt="main banner"
            src={currentBanner?currentBanner : banner1}
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center text-white z-10" />
        </div>
        <div className="w-full h-full flex justify-center items-center relative flex-1 z-30">
          <div className="container m-auto flex flex-row justify-between xl:px-8 px-2">
            <div className="justify-center flex flex-col gap-2 xl:gap-4 w-full">
              <div className="text-white body-sm-semibold capitalize flex items-center gap-2">
                <svg
                  className="inline-block align-sub w-5 h-5 md:w-6 md:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7 4V2.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 4V2.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.5 9H21.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
                    fill="white"
                  />
                  <path
                    d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z"
                    fill="white"
                  />
                  <path
                    d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
                    fill="white"
                  />
                  <path
                    d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
                    fill="white"
                  />
                  <path
                    d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z"
                    fill="white"
                  />
                  <path
                    d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white font-bold text-sm md:text-base">{currentDate}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-white quote text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  {t(currentQuote.text)}"
                </h5>
                <div className="text-orange-200 text-lg sm:text-xl md:text-2xl font-bold">
                  -  {t(currentQuote.author)}"
                </div>
              </div>
              <div className="xl:flex">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder={t("banner.Search_placeholder")}
                    className="w-full pl-4 pr-32 py-2 sm:py-3 text-base sm:text-lg rounded-xl bg-[#F5RBEE] text-green-800 bg-green-50 placeholder-green-800 border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg flex items-center gap-1 sm:gap-2 transition-all duration-300">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5" size={20} />
                    <span className="font-semibold text-xs sm:text-sm">{t("banner.Search")}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Banner;