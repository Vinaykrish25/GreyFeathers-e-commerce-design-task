import React from 'react'
import casual from "../assets/Casual.png";
import formal from "../assets/Formal.png";
import party from "../assets/Party.png";
import gym from "../assets/Gym.png";

const BrowseCard = () => {
  return (
    <div className='max-w-md sm:max-w-6xl rounded-[40px] bg-[#F0F0F0] mx-auto mb-10'>
        <div className='flex flex-col p-10'>
        <h1 className='font-integralgf font-[700] text-[32px] sm:text-[48px] text-center leading-10'>BROWSE BY <br className='block sm:hidden'/> DRESS STYLE</h1>

        <div className='flex flex-col items-center gap-3 sm:grid grid-cols-3 sm:gap-6 mt-5 sm:mt-10 sm:mb-10'>
            <div className='h-[190px]  sm:col-span-1 sm:h-[289px] rounded-[20px] overflow-hidden relative'>
                <h1 className='font-satoshi font-bold text-[24px] sm:text-[36px] absolute left-7 top-2 z-10'>Casual</h1>
                <img src={casual} className='object-cover w-full h-full scale-x-[-1]'/>
            </div>
            <div className='h-[190px] sm:col-span-2 sm:h-[289px] rounded-[20px] overflow-hidden relative'>
                <h1 className='font-satoshi font-bold text-[24px] sm:text-[36px] absolute left-7 top-2 z-10'>Formal</h1>
                <img src={formal} className='object-cover w-full h-full scale-x-[-1]'/>
            </div>
            <div className='h-[190px] sm:col-span-2 sm:h-[289px] rounded-[20px] overflow-hidden relative'>
                <h1 className='font-satoshi font-bold text-[24px] sm:text-[36px] absolute left-7 top-2 z-10'>Party</h1>
                <img src={party} className='object-cover w-full h-full'/>
            </div>
            <div className='h-[190px] sm:col-span-1 sm:h-[289px] rounded-[20px] overflow-hidden relative'>
                <h1 className='font-satoshi font-bold text-[24px] sm:text-[36px] absolute left-7 top-2 z-10'>Gym</h1>
                <img src={gym} className='object-cover w-full h-full'/>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default BrowseCard