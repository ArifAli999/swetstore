import React from 'react'
import { motion } from "framer-motion";
import {BsArrowReturnRight} from 'react-icons/bs'
import { Categories } from '../components/categories';


export default function Home() {
  return (
    <><div className='container mx-auto w-full h-full  overflow-hidden'>
      <div className='grid grid-flow-col auto-cols-max bg-gray-200 mt-10 shadow-md justify-center gap-10 items-center relative w-full h-full group '>
        <div className='mt-10 p-0 mb-10'>
          <img src='https://i.imgur.com/36IhkNN.png' className='object-cover md:h-58 md:w-58 h-48 transform origin-top-left rotate-12 group-hover:rotate-0 transition-all duration-500 ease-in-out '></img>
        </div>
        <div className='p-4'>
          <h1 className='font-serif font-black md:text-8xl text-4xl'>
            SPEAKER
          </h1>
          <h2 className='font-Lato text-black md:text-xl text-base'>
            Brand new portable speakers,
          </h2>
          <h2 className='font-Lato text-black md:text-lg text-base'>
            Get 20% off today exclusively on the store
          </h2><br/>
         
        </div>
        <button className=' float-right text-right font-light font-Lato text-gray-600 px-1.5 py-0.5 hover:opacity-75 absolute right-0 bottom-0 ' >
          <BsArrowReturnRight  size={30}/>
          </button>
      </div>



      <Categories/>
      <br />

      <div className=' mt-10 mb-10 w-full'>
        <span className=' p-1.5 w-full font-Lato font-semibold text-2xl'>
          LATEST PRODUCTS
        </span>
      </div>
</div>


    </>
  )
}
