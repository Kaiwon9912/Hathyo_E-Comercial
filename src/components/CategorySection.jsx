import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import anessa from '../assets/categories/anessa.webp';
import nhietke from '../assets/categories/nhietke.webp';
import vitamin from '../assets/categories/vitamin.webp';
import sensodyne from '../assets/categories/sensodyne.webp';
import { useTranslation } from 'react-i18next';
const categories = [
  {
    id: 1,
    name: 'Kem chống nắng',
    image: anessa,
    productCount: 25,
    firstProduct: {
      name: 'Kem chống nắng Anessa',
      price: '200.000đ'
    }
  },
  {
    id: 2,
    name: 'Nhiệt kế',
    image: nhietke,
    productCount: 18,
    firstProduct: {
      name: 'Nhiệt kế điện tử',
      price: '899.000đ'
    }
  },
  {
    id: 3,
    name: 'Vitamin & Khoáng Chất',
    image: vitamin,
    productCount: 12,
    firstProduct: {
      name: 'Vitamin tổng hợp',
      price: 'Giảm đến 50%'
    }
  },
  {
    id: 4,
    name: 'Chăm sóc răng miệng',
    image: sensodyne,
    productCount: 15,
    firstProduct: {
      name: 'Kem đánh răng Sensodyne',
      price: 'Giảm đến 30%'
    }
  }
];

function CategorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8 text-center">
        {t('home.product_category')}
        </h2>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {categories.map((category) => (
                <div key={category.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="h-48 flex items-center justify-center">
                      <img 
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-green-700 font-bold text-lg mb-4">{category.firstProduct.price}</p>
                    <button className="w-full bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                    {t('home.buy_now')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-green-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

          <div className="hidden md:flex gap-6 h-[484px]">
            <div className="w-[40%]  border-4 border-secondary rounded-xl">
              <div className="relative h-full bg-[#FEF0C7] rounded-xl shadow-xl">
                <div className="absolute top-6 left-6 z-10">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                      <div className="font-normal">{t('home.SkinCare')}</div>
                      <div className="text-xl font-semibold">{t('home.Suncream')}</div>
                    </div>
                    <div className="text-md text-orange-600">{t('home.only')} 200.000đ</div>
                    <button className="flex flex-row text-base items-center py-2.5 text-md bg-green-700  hover:bg-green-800 rounded-full">
                      <div className="text-center w-full px-5 xl:px-7 body-sm-semibold text-white font-bold">
                      {t('home.buy_now')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="inline-block ml-2">
                          <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.333 10h13.334m0 0-5-5m5 5-5 5"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <img
                  src={anessa}
                  alt="Anessa" 
                  className="absolute bottom-0 right-0 w-[400px] h-[400px] object-contain"
                />
              </div>
            </div>

            <div className="w-[20%]  border-4 border-secondary rounded-xl">
              <div className="relative h-full bg-[#054627] rounded-xl shadow-xl">
                <div className="absolute top-6 left-6 z-10">
                  <div className="flex flex-col gap-3 text-white">
                    <div className="font-normal text-lg -text">{t('home.Medical_equipment')}</div>
                    <div className="text-xl font-semibold">{t('home.Thermometer')}</div>
                    <div className="text-md text-Orange/200">{t('home.only')} 150.000đ</div>
                    <button className="flex flex-row text-base items-center  py-1.5 text-md shadow-Shadow/xs bg-white hover:bg-gray-100 border-2 border-green-700 rounded-full">
                      <div className="text-center w-full px-5 xl:px-7 body-sm-semibold text-green-700 font-bold border-green-700">
                      {t('home.buy_now')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="inline-block">
                          <path stroke="#0B8249" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.333 10h13.334m0 0-5-5m5 5-5 5"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <img
                  src={nhietke}
                  alt="Nhiệt kế" 
                  className="absolute bottom-0 right-0 w-[232px] object-contain"
                />
              </div>
            </div>

            <div className="w-[40%] flex flex-col gap-6 ">
              <div className="relative h-1/2 bg-[#D1FBE7] rounded-xl shadow-xl border-4 border-secondary">
                <div className="absolute top-6 left-6 z-10 ">
                  <div className="flex flex-col">
                    <div className="font-normal  text-gray-500">  {t('home.FunctionalFood')} </div>
                    <div className="text-xl font-semibold capitalize">{t('home.Vitamin_Mineral')}</div>
                    <div className="text-md  text-gray-500">      {t('home.only')} 100.000đ</div>
                    <button className="flex mt-1 flex-row text-base items-center py-1.5 text-md  bg-white border-green-700 border-2 w-[130px]  hover:bg-gray-50 rounded-full">
                      <div className="text-center w-full  text-green-700 font-semibold border-green-700">
                      {t('home.buy_now')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="inline-block">
                          <path stroke="#0B8249" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.333 10h13.334m0 0-5-5m5 5-5 5"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <img
                  src={vitamin}
                  alt="Vitamin" 
                  className="absolute bottom-0 right-0 w-[172px] object-contain"
                />
              </div>

              <div className="relative h-1/2 border-4 border-secondary rounded-xl rounded-xl shadow-xl">
                <div className="absolute top-6 left-6 z-10">
                  <div className="flex flex-col ">
                    <div className="font-normal  text-textPrimary "> {t('home.Dental_care')}</div>
                    <div className="text-xl font-semibold text-textPrimary capitalize" > {t('home.Toothpaste')}</div>
                    <div className="text-md text-textSecondary">Giảm đến 30%</div>
                    <button className="flex mt-1 flex-row text-base items-center py-1.5 text-md  bg-white border-green-700 border-2 w-[130px]  hover:bg-gray-50 rounded-full">
                      <div className="text-center w-full  text-green-700 font-semibold border-green-700">
                      {t('home.buy_now')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="inline-block">
                          <path stroke="#0B8249" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.333 10h13.334m0 0-5-5m5 5-5 5"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <img
                  src={sensodyne}
                  alt="Sensodyne" 
                  className="absolute bottom-0 right-0 w-[232px] object-contain"
                />
              </div>
            </div>
          </div>

          
         
          

 
      </div>
    </section>
  );
}

export default CategorySection; 