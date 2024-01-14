import React from "react";

const MobileNav = ({ className, onClick, search, inpValue }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-[30px] gap-3 ${className} p-2 text-[#fff] font-bold focus:top-[-300px]`}
    >
      <div className="flex items-center gap-[6.519px] cursor-pointer">
        <a
          href="#section"
          className="hover:text-[#] transition-all duration-300"
          onClick={onClick}
        >
          Content
        </a>
      </div>
      <a
        href="#"
        className="hover:text-[#] transition-all duration-300"
        onClick={onClick}
      >
        Projects
      </a>
      <a
        href="#"
        className="hover:text-[#] transition-all duration-300"
        onClick={onClick}
      >
        Uses
      </a>
      <a
        href="#"
        className="hover:text-[#] transition-all duration-300"
        onClick={onClick}
      >
        Now
      </a>
      <form
        className="gap-2 p-2 items-center text-[20px] focus:bg-[#20252f]"
        onSubmit={search}
      >
        <input
          type="text"
          className="bg-transparent border-b outline-none p-2 text-[#fff] hover:bg-[#20252f] focus:bg-[#20252f] rounded-md transition-all duration-200 w-[90vw]"
          placeholder="Search..."
          onChange={(e) => inpValue(e.target.value)}
        />
        <button className="absolute right-5  p-2 mt-[.8px] bg-[#20252f] outline-none rounded-tr-md rounded-br-md">
          🔍
        </button>
      </form>
    </div>
  );
};

export default MobileNav;
