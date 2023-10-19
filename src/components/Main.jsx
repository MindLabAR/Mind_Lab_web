

const Main = () => {
  return (
    <div
      className="flex items-center justify-center h-screen mb-[0rem] bg-center bg-cover bg-[url('./assets/bg.jpg')] "
      id="main"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/  z-[2]" />
      <div className="p-5 text-white z-[2] mt-[3rem]">
        <h2 className="text-5xl font-bold text-[#33363B] text-center ">
          Augmented Reality x Science Education
        </h2>
        <div className="flex justify-center items-center">
          <p className="py-5 text-xl text-[#33363B] text-center">
            Mind Lab platform offers a new way of learning by combining
            education with augmented reality technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
