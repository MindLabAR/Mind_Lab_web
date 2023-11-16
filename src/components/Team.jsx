import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpeg";
import "../style/custom.css";

const Team = () => {
  return (
    <div className=" text-[#33363B] p-10" id="team">
      <div className="max-w-[1366px] m-auto">
        <h2 className="text-3xl text-center font-semibold ">
          <span className="text-[#0099CC] font-semibold">Бид </span>
        </h2>
        <br />
        <br />
        <div className="flex flex-col md:flex-row justify-">
          <div className="text-center m-auto p-5 bg-[#ffffff] drop-shadow-lg ease-in duration-200 rounded-3xl">
            <img src={img1} className=" mx-auto w-60 h-60 rounded-2xl" />
            <div className="text-center py-5 ">
              <span className="font-semibold text-[#0099CC]">Хөгжүүлэгч</span>
              <p>Х.Маргад-Эрдэнэ</p>
            </div>
          </div>
          <br />
          <div className="text-center m-auto p-5 bg-[#ffffff] drop-shadow-lg ease-in duration-200 rounded-3xl">
            <img src={img2} className="mx-auto w-60 h-60 rounded-2xl" />
            <div className="text-center py-5">
              <span className="font-semibold text-[#0099CC]">Хөгжүүлэгч</span>
              <p>Э.Хулан</p>
            </div>
          </div>
          <br />
          <div className="text-center m-auto p-5 bg-[#ffffff] drop-shadow-lg ease-in duration-200 rounded-3xl ">
            <img src={img3} className="mx-auto w-60 h-60 rounded-2xl" />
            <div className="text-center py-5">
              <span className="font-semibold text-[#0099CC]">Хөгжүүлэгч</span>
              <p>Г.Өсөхбаяр</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
