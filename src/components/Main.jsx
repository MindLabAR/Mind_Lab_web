const Hero = () => {
  return (
    <div
      className=" z-[2] bg-center bg-cover  bg-[url('./assets/BG.png')] "
      id="main"
    >
      <div className="max-w-[1366px]  m-auto flex  items-center justify-between h-screen mb-12 ">
        <div className="absolute left-0 right-0 bottom-0 " />
        <div className=" text-xl text-[#33363B] z-[2] mt-[-10rem] m-5">
          <h2 className="text-4xl  font-bold md:leading-normal md:text-5xl">
            Өргөтгөсөн бодит байдал <br /> шинжлэх ухааны хослол
          </h2>
          <p className="py-5 text-xl md:text-2xl  md:leading-normal">
            Mind Lab платформ нь боловсролыг нэмэгдүүлсэн бодит байдлын
            <br />
            технологитой хослуулан суралцах шинэ аргыг санал болгодог
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
