import React from 'react'

import Image from 'next/dist/client/image';




export default function HomePage() {



  return (
    <>

      <div className='flex flex-col h-screen bg-gray-50 p-2 w-full'>
        <div className="flex justify-between w-full items-center p-6 mb-4 border-b border-gray-200 border-solid">
          <div className="grid items-center grid-cols-2 md:gap-2"><p className="text-md md:text-xl font-Lato font-black uppercase text-center">Your Cart | </p><span className="md:text-lg text-xs text-gray-600 font-semibold ml-1"> 15 </span></div>
          <div className="grid items-center grid-cols-3 gap-2 w-fit"><p className="text-xs md:text-sm text-faded-black w-fit font-semibold">Total</p><span className="text-black font-extrabold font-lg md:font-3xl col-span-2">$300</span></div>
        </div>

        <div className='grid grid-flow-row'>




          <div className='flex md:flex-row justify-items-end gap-4 md:items-center bg-white ml-4 mr-4 mb-4 '>
            <div className='bg-gray-100 text-center p-4 h-fit w-60  md:h-fit  md:w-40  '>
              <Image

                src='https://i.imgur.com/36IhkNN.png'
                layout="intrinsic"
                width={250}
                height={250}
                className=" object-fit w-50  md:w-1/4 md:p-10 ml-2 mr-2 text-center  cursor-pointer transform hover:scale-105 transition-all duration-700 ease-in-out  rounded-md"
                quality={100}
                alt="" />
            </div>

            <div className='md:hidden visible  w-fit mr-5 overflow-hidden'>
              <p>Hiii</p>
            </div>


            <div className=' p-4 col-span-6 md:flex-1 text-center invisible md:visible'>
              <span className='text-black font-sans font-semibold text-base md:text-lg'>Bluetooth Wireless P40 Speakers</span>
            </div>

            <div className=' p-4 grow-0 text-center invisible md:visible'>

              <span className='text-gray-500 font-Lato font-semibold  text-sm md:text-md bg-white-100 p-0.5 md:p-2 border-2 border-solid border-gray-50'>15</span>
            </div>

            <div className=' p-4  text-center invisible md:visible'>

              <span className='text-gray-500 font-Lato font-semibold  text-sm md:text-md bg-white-100 p-0.5 md:p-2 border-2 border-solid border-gray-50'>Size: 1.5L</span>
            </div>

            <div className=' p-4  md:flex-1 md:text-right  invisible md:visible'>
              <span className='text-black font-sans font-semibold text-sm md:text-lg md:mr-10'>$300.33</span>
            </div>

          </div>

        </div>


        <div className='float-right text-right mt-10 mr-6 ml-4'>
          <button className='bg-black text-white p-4 text-md font-semibold font-serif hover:text-pink-300 transition-all duration-300 ease-linear'>Checkout</button>
        </div>


      </div>
    </>
  )
}
