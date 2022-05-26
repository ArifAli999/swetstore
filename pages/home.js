import React from 'react'
import { motion } from "framer-motion";
import { BsArrowReturnRight } from 'react-icons/bs'
import { Categories } from '../components/categories';
import Slider from "react-slick";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Caro from '../components/caro';


export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 20 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 20,
    

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 20 
    }
  };

  return (
    <><div className='container mx-auto w-full h-full  overflow-hidden'>
      <Caro />
      <Categories />
      <br />

      
    </div>

    <div className=' mt-10 mb-10 w-full text-center'>
        <p className=' p-1.5  font-Lato font-semibold text-2xl text-gray-400 text-center  '>
         Best Sellers
        </p>
        <Carousel centerMode={true}  
          itemClass="carousel-item"
         ssr={true} // means to render carousel on server-side.
         swipeable={true}

        infinite={true}
        responsive={responsive} className='flex flex-col md:flex-row justify-between mt-10 mb-5 gap-5 w-full h-full  '>
       
        <div className='md:p-6  w-full h-fit cursor-pointer'>
            <main className='grid md:p-6 p-2  justify-items-center items-center align-middle content-center w-fit h-full bg-gray-100 rounded'>
              <img src='https://i.imgur.com/36IhkNN.png' className='max-w-full h-auto md:p-2 md:-mr-5  -mr-2 text-center object-cover '></img>
            </main>
          </div>

          <div className='md:p-6  w-full   cursor-pointer'>
            <main className='grid md:p-6 p-2  justify-items-center items-center align-middle content-center w-full h-full bg-gray-100 rounded'>
              <img src='https://i.imgur.com/36IhkNN.png' className='max-w-full h-auto md:p-2 md:-mr-5  -mr-2 text-center object-cover'></img>
            </main>
          </div>

          <div className='md:p-6 w-full cursor-pointer'>
            <main className='grid md:p-6 p-2 justify-items-center items-center align-middle content-center w-full h-full bg-gray-100 rounded'>
              <img src='https://i.imgur.com/36IhkNN.png' className='max-w-full h-auto md:p-2 md:-mr-5  -mr-2 text-center object-cover'></img>
            </main>
          </div>


          <div className='md:p-6  w-full  cursor-pointer'>
            <main className='grid md:p-6 p-2  justify-items-center items-center align-middle content-center w-full h-full bg-gray-100 rounded'>
              <img src='https://i.imgur.com/36IhkNN.png' className='max-w-full h-auto md:p-2 md:-mr-5  -mr-2 text-center object-cover'></img>
            </main>
          </div>

          <div className='md:p-6  w-full  cursor-pointer '>
            <main className='grid md:p-6 p-2 justify-items-center items-center align-middle content-center w-full h-full bg-gray-100 rounded'>
              <img src='https://i.imgur.com/36IhkNN.png' className='max-w-full h-auto md:p-2 md:-mr-5  -mr-2 text-center object-cover'></img>
            </main>
          </div>

        </Carousel>

      </div>


    </>
  )
}
