import React from 'react'
import { motion } from "framer-motion";
import { BsArrowReturnRight } from 'react-icons/bs'
import { Categories } from '../components/categories';
import Slider from "react-slick";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Caro from '../components/caro';


export default function Home() {


  return (
    <><div className='container mx-auto w-full h-full  overflow-hidden'>
     
      <Categories />
      <br />

      
    </div>

  


    </>
  )
}
