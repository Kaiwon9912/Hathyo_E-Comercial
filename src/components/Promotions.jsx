import React from 'react';

import promotionImage from '/images/promotionBanner.webp';

function Promotions() {
  return (
  
     
          <div className="relative hidden md:block w-[311px] rounded-[20px] my-5 bg-orange-400 shadow-Shadow/md">
            {/* Label đầu card */}
            <div className=" bg-orangePrimary flex p-3 text-white text-center rounded-t-[20px] z-10">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" fillRule="evenodd" d="M9.995 4h4.01c3.78 0 5.67 0 6.845 1.172.81.806 1.061 1.951 1.14 3.817.015.37.023.556-.046.679-.07.123-.345.278-.897.586a1.999 1.999 0 0 0 0 3.492c.552.309.828.463.897.586s.061.308.045.678c-.078 1.867-.33 3.012-1.139 3.818C19.676 20 17.786 20 14.005 20h-4.01c-3.78 0-5.67 0-6.845-1.172-.81-.806-1.061-1.951-1.14-3.817-.015-.37-.023-.556.046-.679.07-.123.345-.277.897-.586a1.999 1.999 0 0 0 0-3.492c-.552-.308-.828-.463-.897-.586s-.061-.308-.045-.679c.078-1.866.33-3.01 1.139-3.817C4.324 4 6.214 4 9.995 4m5.553 4.47a.75.75 0 0 1 0 1.06l-6.015 6a.753.753 0 0 1-1.063 0 .75.75 0 0 1 0-1.06l6.015-6a.753.753 0 0 1 1.063 0m-1.033 7.03a1.001 1.001 0 1 0 0-2c-.554 0-1.003.448-1.003 1s.45 1 1.003 1m-5.013-5c.554 0 1.003-.448 1.003-1s-.449-1-1.003-1a1.001 1.001 0 1 0 0 2" clipRule="evenodd"></path></svg>Tin khuyến mãi
            </div>

 

            {/* Ảnh */}
            <img
              src={promotionImage}
              alt="Dược mỹ phẩm giảm giá"
              className="w-full"
            />

            {/* Nội dung */}
            <div className="p-3 bg-orangePrimary text-white rounded-b-[20px] z-[3]">
              <p className="body-medium text-Grayiron/500">
              KHOẺ LÀ HẠNH PHÚC “ DƯỢC MỸ PHẨM GIẢM ĐẾN 30%”
              </p>

            </div>
          </div>
    
 
  );
}

export default Promotions;
