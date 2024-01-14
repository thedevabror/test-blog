import React from 'react'
import { postData } from './data'
import location from '../assets/location.png'
import usz from '../assets/uz.jfif'

const Section = () => {
  return (
    <div className='text-[#fff] px-10 py-10 flex flex-col lg:flex-row gap-4' id='section'>
        <div className='grid grid-cols-1 gap-2 mt-4'>
            {postData.map(posts => (
                <>
                    <div className='p-2 shadow-md bg-[#111827a6] rounded-md border' key={posts.id}>
                        <h1 className='text-[25px] capitalize'>{posts.title}</h1>
                        <h3>{posts.description}</h3> 
                        <button className='p-2 mt-2 bg-[#20252f] outline-none rounded-md hover:bg-[#172137] transition-all duration-300'><a href='#section'>Read more</a></button>
                    </div>
                </>
            ))}
        </div>
        <div className='mt-4 mdin-[750px]:px-20 w-full lg:w-[70%] flex flex-col min-[750px]:flex-row lg:flex-col gap-[16px]'>
            <div className='rounded-md w-full py-5 px-2 bg-[#020817] flex flex-col'>
                <h1 className='text-[1.125rem] font-semibold px-4'>Where am I currently</h1>
                <div className='flex gap-[20px] justify-between px-4 items-center'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <h3 className='text-[.875rem]'>Tashkent</h3>
                    </div>
                    <div>
                        <img src={usz} className='w-[64px] h-[64px] rounded-md' />
                    </div>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
                <div class="flex items-center p-6 pt-0"><button className               ="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-full" disabled="">About more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></div>
            </div>
            <div className='rounded-md w-full py-5 px-2 bg-[#020817] flex flex-col'>
                <h1 className='text-[1.125rem] font-semibold px-4'>What am I working on?</h1>
                <div className='flex gap-[20px] justify-between px-4 items-center'>
                    <div className='flex items-center'>
                        <img src={location} className='w-[25px] h-[25px]' /> 
                        <h3 className='text-[.875rem]'>EuroAsisa Tarvels</h3>
                    </div>
                    <div>
                        <a href='https://euro-asia-travels.vercel.app'><img src={usz} className='w-[64px] h-[64px] rounded-md' /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section