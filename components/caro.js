import { Swiper, SwiperSlide  } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'


// import Swiper and modules styles


// init Swiper:

import React from 'react'
SwiperCore.use([Autoplay, Pagination]);
function Caro() {

  return (
    
    <><Swiper
  
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false
    }}
    modules={[Autoplay]}
      
     
      
     
     

      className='w-full h-128 bg-gray-200 group'>
      <SwiperSlide style={{ width: "100%" }}>
        <div className='mt-10 p-0 mb-10 flex justify-items-center items-center self-center w-full h-full text-center justify-center gap-0'>
          <div className="-mr-10 md:-mr-0 ">
            <img src='https://i.imgur.com/36IhkNN.png' className='object-cover md:h-58 md:w-58 h-40 transform origin-top-left rotate-12 group-hover:rotate-0 transition-all duration-500 ease-in-out '></img>
          </div>
          <div className='md:p-4'>
            <h1 className='font-serif font-black md:text-8xl text-2xl'>
              SPEAKER
            </h1>
            <h2 className='font-Lato text-black md:text-xl text-base'>
              Brand new portable speakers,
            </h2>
            <h2 className='font-Lato text-black md:text-lg text-base'>
              Get 20% off today exclusively on the store
            </h2>

          </div>
          <button className=' mb-2 ml-5 absolute bottom-0 font-light font-Lato text-gray-600 px-1.5 py-0.5 hover:opacity-75   mx-auto flex justify-items-center items-center '>
        </button>
        </div>





   
      </SwiperSlide>


      <SwiperSlide >
        <div className='mt-10 p-0 mb-10 flex justify-items-center items-center self-center w-full h-full text-center justify-center'>
        <div className="-mr-10 md:-mr-0">
          <img src='https://i.imgur.com/36IhkNN.png' className='object-cover md:h-58 md:w-58 h-48 transform origin-top-left rotate-12 group-hover:rotate-0 transition-all duration-500 ease-in-out '></img>
          </div>
          <div className='p-4'>
            <h1 className='font-serif font-black md:text-8xl text-4xl'>
              BLUETOOTH
            </h1>
            <h2 className='font-Lato text-black md:text-xl text-base mt-4'>
              Brand new portable speakers,
            </h2>
            <h2 className='font-Lato text-black md:text-lg text-xs mt-2'>
              Get 20% off today exclusively on the store
            </h2>

          </div>
          <button className=' mb-2 ml-5  absolute bottom-0 font-light font-Lato text-gray-600 px-1.5 py-0.5 hover:opacity-75   mx-auto flex justify-items-center items-center '>
        </button>
        </div>
      





       
      </SwiperSlide>
    
    </Swiper></>
  )
}

export default Caro