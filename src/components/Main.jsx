import React from 'react'
import appleCoder from "../assets/applecoder.png"
import logo from "../assets/IMG_0172.JPG";

const Main = () => {
  return (
    <div className='max-w-[900px] h-[300px] m-auto text-[#fff] font-extrabold px-[20px] flex items-center justify-center text-center flex-col'>
      <div>
        <h1 className='text-[40px] md:text-[50px]'>Frontend Developer from <span className='text-[#415bab]'>Uzbekistan <img src={appleCoder} className='inline w-[45px] h-[45px]' /> </span></h1>
      </div>
      <div className='flex items-center gap-[5px]'>
        <img
          src={logo}
          alt="Blog logo"
          className="w-[50px] h-[50px] rounded-full"
        />
        <a
          href="https://instagram.com/thedevabror"
          className="px-[11px] py-[1px] text-[#F8FAFC] flex items-center gap-[4.861px]"
        >
          <div>@thedevabror</div>
        </a>
      </div>
    </div>
  )
}

export default Main