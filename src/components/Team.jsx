import img1 from "../assets/img1.png";

const Team = () => {
  return (
    <div className=" text-[#33363B] " id="team">
      <div className=" ">
        <h2 className="text-3xl text-center ">
          <span className="text-[#0099CC]">Team </span>members
        </h2>
        <br />
        <br />
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="text-center py-5 ">
            <img
              src={img1}
              className=" mx-auto w-60 h-60 rounded-full"
            />
            <div className="text-center py-5 ">
              <span>Developer</span>
              <p>Margad Erdene Kh</p>
            </div>
          </div>
          <div className="text-center py-5 ">
          <img
              src={img1}
              className="mx-auto w-60 h-60 rounded-full"
            />
            <div className="text-center py-5">
              <span>Developer</span>
              <p>Khulan E</p>
            </div>
          </div>
          <div className="text-center py-5 ">
          <img
              src={img1}
              className="mx-auto w-60 h-60 rounded-full"
            />
            <div className="text-center py-5">
              <span>Developer</span>
              <p>Usukhbayr G</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
