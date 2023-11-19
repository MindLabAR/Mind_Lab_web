import img1 from "../assets/ar1img.png";
import aricon from "../assets/aricon.png";
import arsmallicon from "../assets/aricon2.png";
import "../style/custom.css";
const ARcontent = () => {
  return (
    <div className=" text-[#33363B] p-10" id="team">
      <div className="max-w-[1366px] m-auto">
        <h2 className="text-3xl text-center font-semibold ">
          <span className="text-[#0099CC] font-semibold">Туршилт хийх</span>
        </h2>
        <br />
        <br />
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="text-center m-auto px-9 py-7 bg-[#ffffff] drop-shadow-lg ease-in duration-200 rounded-3xl">
            <img src={img1} className=" mx-auto w-60 h-60 rounded-2xl " />
            <div className="flex justify-between font-bold">
              <span className="text-base ">Тайлбар </span>
              <img src={arsmallicon} className="h-5 w-5" />
            </div>
            <p className="flex">Хүний зүрхний үйл ажиллагаа</p>
            <span className="font-bold text-base flex">Төрөл </span>
            <div className="py-2 flex gap-2">
              <span className="bg-[#0099CC] p-1 rounded-lg text-[#f4f4f4]  ">
                Биологи
              </span>
              <span className="bg-[#0099CC] p-1 rounded-lg text-[#f4f4f4]  ">
                Эд эрхтэн
              </span>
              <span className="bg-[#0099CC] p-1 rounded-lg text-[#f4f4f4]  ">
                Цээж
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <button className="flex justify-center py-2 px-6 bg-[#0099CC] ease-in duration-100 rounded-lg  hover:bg-[#003366]">
                <img src={aricon} className="h-7 w-29" />
              </button>
            </div>
          </div>
          <div className="text-center m-auto px-9 py-7 bg-[#ffffff] drop-shadow-lg ease-in duration-200 rounded-3xl">
            <img src={img1} className=" mx-auto w-60 h-60 rounded-2xl " />
            <div className="flex justify-between font-bold">
              <span className="text-base ">Тайлбар </span>
              <img src={arsmallicon} className="h-5 w-5" />
            </div>
            <p className="flex">Хүний зүрхний үйл ажиллагаа</p>
            <span className="font-bold text-base flex">Төрөл </span>
            <div className="py-2 flex gap-2">
              <span className="bg-[#0099CC] p-1 rounded-lg text-[#f4f4f4]  ">
                Биологи
              </span>
              <span className="bg-[#0099CC] p-1 rounded-lg text-[#f4f4f4]  ">
                Эд эрхтэн
              </span>
              <span className="bg-[#0099CC] p-1 rounded-lg text-[#f4f4f4]  ">
                Цээж
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <button className="flex justify-center py-2 px-6 bg-[#0099CC] ease-in duration-100 rounded-lg  hover:bg-[#003366]">
                <img src={aricon} className="h-7 w-29" />
              </button>
            </div>
          </div>
          <div className="text-center m-auto px-9 py-7 bg-[#ffffff] drop-shadow-lg ease-in duration-200 rounded-3xl">
            <img src={img1} className=" mx-auto w-60 h-60 rounded-2xl " />
            <div className="flex justify-between font-bold">
              <span className="text-base ">Тайлбар </span>
              <img src={arsmallicon} className="h-5 w-5" />
            </div>
            <p className="flex">Хүний зүрхний үйл ажиллагаа</p>
            <span className="font-bold text-base flex">Төрөл </span>
            <div className="py-2 flex gap-2">
              <span className="bg-[#0099CC] p-1 rounded-lg text-[#f4f4f4]  ">
                Биологи
              </span>
              <span className="bg-[#0099CC] p-1 rounded-lg text-[#f4f4f4]  ">
                Эд эрхтэн
              </span>
              <span className="bg-[#0099CC] p-1 rounded-lg text-[#f4f4f4]  ">
                Цээж
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <button className="flex justify-center py-2 px-6 bg-[#0099CC] ease-in duration-100 rounded-lg  hover:bg-[#003366]">
                <img src={aricon} className="h-7 w-29" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARcontent;
