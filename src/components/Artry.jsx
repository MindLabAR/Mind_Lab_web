import img from "../assets/ar_phone.png";

const About = () => {
  return (
    <div className="p-10" id="learnMore">
      <h2 className=" text-3xl text-center  text-[#0099CC]">
        Mind Lab AR lesson Try On
      </h2>
      <div className="flex justify-evenly m-10">
        <div>
          <img src={img} alt="" className="mx-auto h-100 w-40"/>
        </div>
        <div className="">
          <button>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
