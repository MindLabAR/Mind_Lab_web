const Hero = () => {
  return (
    <div
      className=" z-[2] bg-fixed bg-center bg-cover  bg-[url('./assets/bg.jpg')] "
      id="main"
    >
      <div className="max-w-[1366px]  m-auto flex  items-center justify-between h-screen mb-12 ">
        <div className="absolute top-0 left-0 right-0 bottom-0 " />
        <div className=" text-xl text-[#33363B] z-[2] mt-[-10rem]">
          <h2 className="text-6xl  font-bold leading-normal">
            COMBINED <br /> AUGMENTED REALITY <br /> WITH SCIENCE
          </h2>
          <p className="py-5 text-xl">
            Mind Lab platform offers a new way of learning by combining
            education with augmented reality technology
          </p>
          <button className="p-4  text-black bg-[#0099CC] ease-in duration-100  rounded-md  hover:bg-[#003366] hover:text-white">
            <a href="#">EnRoll Now</a>
          </button>
        </div>
      </div>
      {/* Overlay */}
    </div>
  );
};

export default Hero;
