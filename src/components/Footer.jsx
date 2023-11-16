import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import "../style/custom.css";

const Footer = () => {
  return (
    <div className="bg-[#006699] text-[#ffffff] font-semibold ">
      <div className="max-w-[1366px]  m-auto py-16">
        <div className="flex flex-col justify-between md:flex-row ">
          <div>
            <p className=" ">© 2023 Mind Lab. Зохиогчийн эрх хамгаалагдсан</p>
          </div>

          <div className="flex gap-6">
            <AiFillLinkedin
              className="font-color cursor-pointer ease-in duration-200 hover:scale-125"
              size={40}
            />
            <AiFillInstagram
              className="font-color cursor-pointer ease-in duration-200 hover:scale-125"
              size={40}
            />
            <AiFillFacebook
              className="font-color cursor-pointer ease-in duration-200 hover:scale-125"
              size={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
