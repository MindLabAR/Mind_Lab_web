// import img from "../assets/phone.png";
import img1 from "../assets/ui1.png";
import img2 from "../assets/ui2.png";
import img3 from "../assets/ui3.png";

const About = () => {
  return (
    <div className="bg-[#0099CC] text-[#f4f4f4]">
      <div className="p-10 max-w-[1366px] m-auto " id="learnMore">
        <h2 className=" text-3xl text-center font-semibold ">
          {" "}
          Тун удахгүй...
        </h2>
        <div className="flex flex-col justify-evenly  md:flex-row m-5">
          <div className="transform duration-150 cursor-pointer ease-in hover:scale-110">
            <img src={img1} alt="" className="mx-auto h-96 w-50 p-5 " />
          </div>
          <div className="transform duration-150 cursor-pointer ease-in hover:scale-110">
            <img src={img2} alt="" className="mx-auto h-96 w-50 p-5" />
          </div>
          <div className="transform duration-150 cursor-pointer ease-in hover:scale-110">
            <img src={img3} alt="" className="mx-auto h-96 w-50 p-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
