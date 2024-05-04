import React, { useState } from "react";
import logo from "../assets/image 9 (1).png";
import Background__Img from "../assets/bg__img.png";
import { HiMenu } from "../../node_modules/react-icons/hi";
import { FaXmark } from "../../node_modules/react-icons/fa6";

function Header() {
  let Links = [
    { name: "Home Pages", link: "/" },
    { name: "Blogs", link: "/" },
    { name: "Ecommerce", link: "/" },
    { name: "Pages", link: "/" },
    { name: "RTL Version", link: "/" },
    { name: "Theme docs", link: "/" },
    { name: "Buy now", link: "/" },
  ];

  let [NavActive, setNavActive] = useState(false);
  return (
    <section
      className="w-full h-full bg-gray-400 md:bg-cover"
      style={{ backgroundImage: "url(" + Background__Img + ")" }}
    >
      {/* header section start  */}
      <div id="nav" className="w-full h-16 flex justify-center items-center">
        {/* header container  */}
        <div className="mx-auto flex w-[90%] justify-between items-center flex-col md:w-[90%] md:flex-row xl:w-[80%]">
          <div className="logo text-white flex items-center justify-between w-full mr-0 md:w-auto">
            <img src={logo} alt="" />
            {/* ham burger menu  */}
            <div
              className="w-3 h-3 md:hidden"
              onClick={() => {
                setNavActive(!NavActive); 
              }}
            >
              {NavActive ? (
                <FaXmark className="w-5 h-5 text-white duration-300" />
              ) : (
                <HiMenu className="w-5 h-5 text-white duration-300" />
              )}
            </div>
          </div>
          <nav
            className={`bg-white w-full absolute top-16 origin-right duration-300 md:scale-x-100 md:static md:bg-transparent md:flex md:justify-end md:items-center ${NavActive ? "scale-x-100" : "scale-x-0"
              }`}
          >
            <ul className="md:flex md:justify-center md:items-center">
              {Links.map((link) => (
                <li className="text-black group md:rounded-lg duration-200 hover:bg-red-500 py-2 md:text-white md:px-[5px] md:py-1 lg:px-[15px] ">
                  <a
                    href="/"
                    className="pl-4 md:text-md group-hover:text-white md:pl-0 md:text-base lg:font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* header section ends  */}
      {/* heor section starts  */}
      <div className="w-[80%] mx-auto h-full flex flex-col justify-start text-left items-center py-28 md:py-[200px] lg:py-[240px]">
        <span className="text-xs text-white font-normal text-left w-full sm:text-center tracking-[0.2em]">WE CREATE DIGITAL PRODUCTS</span>
        <h3 className=" text-4xl sm:text-5xl lg:text-6xl text-white max-w-[660px] text-left sm:text-center mt-5 font-bold tracking-wide">Introduce OurCreative Agency.</h3>
        <button className=" bg-red-500 text-white px-7 py-[14px] rounded-xl mt-11 float-left w-full sm:w-56  duration-300 before:w-[0%] before:left-0 before:bottom-0 before:h-full hover:before:w-full before:bg-cyan-900 before:absolute relative before:duration-300 before:rounded-xl overflow-hidden"><a href="/" className="relative z-10">SEE OUR WORK</a></button>
      </div>
      {/* heor section starts  */}
    </section>
  );
}

export default Header;
