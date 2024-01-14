import React, { useState } from "react";
import logo from "../assets/IMG_0172.JPG";
import MobileNav from "../ui/MobileNav";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [inpValue, setInpValue] = useState();

  const handleClick = () => {
    setMobileNav(true);
    console.log(mobileNav);
  };

  const handleClose = () => {
    setMobileNav(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inpValue);
    setMobileNav(false);
  };

  return (
    <>
      <div className="flex text-[#fff] justify-between lg:justify-between px-[20px] py-[8px] items-center transition-all duration-300 border-b-[1px]">
        <div className="flex items-center gap-[8px]">
          <img
            src={logo}
            alt="Blog logo"
            className="w-[50px] h-[50px] rounded-full max-[345px]:hidden"
          />
          <a
            href="#section"
            className="px-[11px] py-[1px] border-[1px] border-[#5785FA] rounded-[9999px] text-[#F8FAFC] flex items-center gap-[4.861px] max-[345px]:hidden"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <rect
                  x="0.802795"
                  y="0.825317"
                  width="14"
                  height="14"
                  rx="7"
                  fill="#4ADE80"
                  fill-opacity="0.5"
                />
                <path
                  d="M3.8028 7.82532C3.8028 5.61618 5.59366 3.82532 7.8028 3.82532C10.0119 3.82532 11.8028 5.61618 11.8028 7.82532C11.8028 10.0345 10.0119 11.8253 7.8028 11.8253C5.59366 11.8253 3.8028 10.0345 3.8028 7.82532Z"
                  fill="#4ADE80"
                />
              </svg>
            </div>
            <div>I'm available for work</div>
          </a>
          <a
            href="https://thedevabror.uz"
            className="min-[346px]:hidden text-[30px]"
          >
            TheDevAbror
          </a>
        </div>
        <div className="hidden gap-8 items-center min-[865px]:flex menu-active">
          <div className="relative group flex items-center gap-[6.519px] cursor-pointer">
            <div>Content</div>
          </div>
          <a href="#">Projects</a>
          <a href="#">Uses</a>
          <a href="#">Now</a>
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              className="bg-[#111827] outline-none placeholder:font-medium text-[#94A3B8] hover:bg-[#20252f] focus:bg-[#20252f] p-2 rounded-tl-md rounded-bl-md transition-all duration-300"
              placeholder="Search..."
              onChange={(e) => setInpValue(e.target.value)}
            />
            <button
              className="p-2 bg-[#20252f] outline-none rounded-tr-md rounded-br-md"
              type="submit"
            >
              🔍
            </button>
          </form>
        </div>
        <div className="min-[865px]:hidden w-[50px] h-[50px] flex items-center justify-center bg-[#20252f] outline-none rounded-md hover:bg-[#172137] transition-all duration-300 active:menu-active:flex">
          <button onClick={handleClick} className="text-[25px] w-[40px] h-[40px] flex justify-center items-center">
            <span className="w-[40px] h-[40px]">🎛️</span>
          </button>
        </div>
      </div>
      <MobileNav
        className={`absolute z-10 top-[-400px] w-[100%] h-[400px] lg:hidden ${
          mobileNav ? "top-[0px]" : ""
        } transition-all duration-300 bg-[#111827]`}
        onClick={handleClose}
        search={handleSubmit}
        inpValue={setInpValue}
      />
    </>
  );
};

export default Nav;
