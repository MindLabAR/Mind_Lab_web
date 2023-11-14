const Hero = () => {
  return (
    <div
      className=" z-[2] bg-center bg-cover  bg-[url('./assets/BG.png')] "
      id="main"
    >
      <div className="max-w-[1366px]  m-auto flex  items-center justify-between h-screen mb-12 ">
        <div className="absolute left-0 right-0 bottom-0 " />
        <div className=" text-xl text-[#33363B] z-[2] mt-[-10rem] m-5">
          <h2 className="text-4xl  font-bold md:leading-normal md:text-7xl">
            COMBINED <br /> AUGMENTED REALITY <br /> WITH SCIENCE
          </h2>
          <p className="py-5 text-xl md:text-2xl  md:leading-normal">
            Mind Lab platform offers a new way of learning by combining
            <br></br>
            education with augmented reality technology
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
