import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpeg";
import "../style/custom.css";

const Team = () => {
  return (
    <div className=" text-[#33363B] p-10 bg-[#FCFCFC]" id="team">
      <div className="max-w-[1366px] m-auto">
        <h2 className="text-3xl text-center ">
          <span className="text-[#0099CC]">Team </span>members
        </h2>
        <br />
        <br />
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="text-center p-5 bg-[#ffffff] drop-shadow-md ease-in duration-200 cursor-pointer rounded-2xl hover:shadow-xl hover:scale-105">
            <img src={img1} className=" mx-auto w-60 h-60 rounded-2xl" />
            <div className="text-center py-5 ">
              <span className="font-semibold">Developer</span>
              <p>Margad Erdene Kh</p>
            </div>
          </div>
          <div className="text-center p-5 bg-[#ffffff] drop-shadow-md ease-in duration-200 cursor-pointer rounded-2xl hover:shadow-xl hover:scale-105 ">
            <img src={img2} className="mx-auto w-60 h-60 rounded-2xl" />
            <div className="text-center py-5">
              <span className="font-semibold">Developer</span>
              <p>Khulan E</p>
            </div>
          </div>
          <div className="text-center p-5 bg-[#ffffff] drop-shadow-md ease-in duration-200 cursor-pointer rounded-2xl hover:shadow-xl hover:scale-105  ">
            <img src={img3} className="mx-auto w-60 h-60 rounded-2xl" />
            <div className="text-center py-5">
              <span className="font-semibold">Developer</span>
              <p>Usukhbayr G</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
