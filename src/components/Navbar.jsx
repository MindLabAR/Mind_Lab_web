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
          <h1 className="font-bold text-4xl text-[#0099CC]">Mind </h1>
          <a href="/">
            <h1 className="font-bold text-4xl text-[#33363B]"> Lab</h1>
          </a>
        </div>

        <ul className="hidden sm:flex">
          <li className="p-4 text-black ease-in duration-100 hover:text-[#0099CC]">
            <a href="/#main">Home</a>
          </li>
          <li className="p-4 text-black ease-in duration-100 hover:text-[#0099CC]">
            <a href="/#learnMore">Learn more</a>
          </li>
          <li className="p-4 text-black ease-in duration-100 hover:text-[#0099CC]">
            <a href="/#team">Team</a>
          </li>
          <li className="p-4 text-black ease-in duration-100 hover:text-[#0099CC]">
            <a href="/#contact">Contact</a>
          </li>
          <button className="p-4  text-black bg-[#0099CC] ease-in duration-100  rounded-md  hover:bg-[#003366] hover:text-white">
            <a href="#">EnRoll Now</a>
          </button>
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
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
              <a href="/">Home</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <a href="/">Learn more</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <a href="/#about">About</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <a href="/team">Team</a>
            </li>
            <button className="p-4 text-black bg-[#0099CC] ease-in duration-200  rounded-md  hover:bg-[#003366] hover:text-white">
              <a href="/enroll">EnRoll Now</a>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
