const Timeline = () => {
  return (
    <div className="bg-[#0099CC] p-10 ">
      <h1 className="text-3xl text-center font-semibold text-[#ffffff]">
        Бидний алсын хараа
      </h1>
      <div className="m-10 flex justify-center items-center">
        <div className="max-w-[1366px] mx-auto w-full grid grid-cols-9 px-2">
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-[#ffffff] rounded-md p-2 md:pl-4">
              <h1 className="text-[#33363B] text-xl font-medium py-2 text-center">
                2023
              </h1>
              <p className="text-[#33363B] sm:text-sm text-xs text-center">
                Интеграцчлалыг нэмэгдүүлэх: Виртуал лаборатори, оюун ухааны
                лаборатори, виртуал хиймэл оюун ухааны платформуудын хоорондын
                уялдаа холбоог нэмэгдүүлэх хүсэл эрмэлзэл байж болно. Энэ нь
                салбар хоорондын судалгаа, боловсролын хамтын ажиллагааг бүтээх
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-[#ffffff]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#ffffff] z-10 text-[#33363B] text-center"></div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-[#ffffff]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#ffffff] z-10 text-[#33363B] text-center"></div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-[#ffffff] rounded-md p-2 md:pl-4">
              <h1 className="text-[#33363B] text-xl font-medium py-2 text-center">
                2024
              </h1>
              <p className="text-[#33363B]sm:text-sm text-xs text-center">
                Ёс суртахууны талаар анхаарах зүйлс: Эдгээр технологи хөгжихийн
                хэрээр ёс суртахууны асуудалд анхаарал хандуулах, виртуал
                лаборатори, оюун ухааныг сайжруулах технологиудыг хариуцлагатай
                ашиглах, түүнчлэн хиймэл оюун ухааныг хөгжүүлэх ёс зүйн
                асуудлуудыг шийдвэрлэхэд ихээхэн анхаарал хандуулж болох.
              </p>
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-[#ffffff] rounded-md p-2 md:pl-4">
              <h1 className="text-[#33363B] text-xl font-medium py-2 text-center">
                2025
              </h1>
              <p className="text-[#33363B] sm:text-sm text-xs text-center">
                Салбар хоорондын лаборатори: Виртуал лабораторид олон салбарыг
                нэгтгэж, хэрэглэгчдэд сэдвүүдийн хоорондын холболтыг судлах
                боломжийг олгож, шинжлэх ухааны үзэл баримтлалын талаар илүү
                цогц ойлголтыг бий болгох.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-[#ffffff]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#ffffff] z-10 text-[#33363B] text-center"></div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
