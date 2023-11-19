import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 "
    >
      <div className="max-w-[1366px] m-auto flex justify-between items-center p-2 text-white">
        <div className="flex">
          <img src="/longlogo.png" className="h-12 w-56" alt="" />
        </div>

        <ul className="hidden text-lg sm:flex">
          <li className="p-4 text-[#33363B]  ease-in duration-200 hover:text-[#0099CC]">
            <a href="/#main">Эхлэл</a>
          </li>
          <li className="p-4 text-[#33363B]  ease-in duration-200 hover:text-[#0099CC]">
            <a href="/#learnMore">Илүү ихийг</a>
          </li>
          <li className="p-4 text-[#33363B]  ease-in duration-200 hover:text-[#0099CC]">
            <a href="/#team">Бид</a>
          </li>
          <li className="p-4 text-[#33363B]  ease-in duration-200 hover:text-[#0099CC]">
            <a href="/#contact">Холбоо барих</a>
          </li>
          <button className="px-4   text-white  bg-[#0099CC] ease-in duration-200 rounded-lg  hover:bg-[#003366]">
            <a href="/">Урьдчилсан</a>
          </button>
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu color="black" size={30} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <a href="/">Эхлэл</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <a href="/">Илүү ихийг</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <a href="/#about">Бид</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <a href="/team">Холбоо барих</a>
            </li>
            <button className="p-4 text-[#33363B] bg-[#0099CC] ease-in duration-200  rounded-md  hover:bg-[#003366] hover:text-white">
              <a href="/enroll">Урьдчилсан</a>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
