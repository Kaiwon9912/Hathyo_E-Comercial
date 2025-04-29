import React from 'react';

function HealthExperts() {
    const experts = [
      {
        name: 'BS. Cao Xuân Hồng Hạnh',
        specialization: 'Chuyên Khoa Phụ Sản',
        image: 'src/assets/images/dr/dr.webp',
      },
      {
        name: 'BS.CKI. Nguyễn Tiến Lực',
        specialization: 'Chuyên Khoa Ngoại Tổng Hợp',
        image: 'src/assets/images/dr/dr2.webp',
      },
      {
        name: 'BS.CKI. Cao Thanh Tùng',
        specialization: 'Chuyên Khoa Phụ Sản',
        image: 'src/assets/images/dr/dr3.webp',
      },
      {
        name: 'BS.CKI. Nguyễn Lê Hồng Vân',
        specialization: 'Chuyên Khoa Dinh Dưỡng',
        image: 'src/assets/images/dr/dr4.webp',
      },
    ];
  
    return (
      <div className="bg-lime-50 py-8">
        <div className="container mx-auto flex flex-col gap-4 xl:gap-8">
          <h3 className="heading-3 text-Moss/700 xl:text-center text-3xl ml-10 text-green-800 font-bold">
            Chuyên Gia Sức Khỏe
          </h3>
          <div className="grid xl:grid-rows-1 grid-rows-2 grid-flow-col gap-1 xl:gap-4 xl:mx-6">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img
                  className="m-auto aspect-[1/1] xl:w-[220px] w-32"
                  src={expert.image}
                  alt={expert.name}
                  width={220}
                  height={220}
                />
                <div className="flex flex-col gap-2 justify-center items-center">
                  <div className="body-sm-semibold text-center text-Grayiron/600 font-bold">
                    {expert.name}
                  </div>
                  <div className="body-sm-medium text-center text-Grayiron/600">
                    {expert.specialization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default HealthExperts;