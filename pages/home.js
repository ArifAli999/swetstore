import React from 'react'
import { useCartDispatch } from '../context/cart';
import { commerce } from "../lib/commerce";
import ProductGrid from "../components/ProductGrid";
import { toast } from 'react-toastify';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import Product from '../components/Product';




export default function HomePage() {
 
  

  return (
    <>
  
      <div className='grid md:grid-cols-2 grid-cols-1 w-full h-full'>
      <div className='bg-gray-500 w-full h-full p-6'>
        <div className='w-50 flex justify-center '>
        <img src='https://i.imgur.com/36IhkNN.png' className='w-50 object-cover max-w-full   transform origin-top-left group-hover:scale-150 transition-all duration-500 ease-in-out  '></img>
        </div>
      </div>

      <div className='bg-green-50 w-full h-full p-6'>
        <div className='p-6 mt-5 mb-5'>
          <h3 className='font-serif text-xl italic text-green-500'>
            Our Ingredients
          </h3>
          <hr className='text-black bg-black border-green-200 mt-2 mb-5' style={{color: "#000"}}/>
          <br/>
          <p className='text-green-400 font-serif font-base font-light '>
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            This is jus a placeholder text that will be replaced during production of the official website.
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,

          </p><br/>
          <p className='text-green-400 font-serif font-base font-light mt-2 text-center'>
          This is jus a placeholder text that will be replaced during production of the official website.
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            </p><br/>
            <div className='flex justify-end mt-10'>
            <button className='bg-green-100 p-2 rounded-lg text-green-300 font-semibold font-serif hover:opacity-75 hover:rounded-md duration-300 transition-all ease-in-out border-2 border-green-200 hover:bg-green-400 hover:text-green-50'>learn more</button>
            </div>
        </div>
      </div>

      <div className='bg-pink-50 w-full h-full p-6 border-2 border-black'>
      <div className='p-6 mt-5 mb-5'>
          <h3 className='font-serif text-xl italic text-pink-400'>
            Our Story
          </h3>
          <hr className='text-black bg-black border-pink-200 mt-2 mb-5' style={{color: "#000"}}/>
          <br/>
          <p className='text-pink-400 font-serif font-base font-lighter text-center '>
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            This is jus a placeholder text that will be replaced during production of the official website.
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,
            Here is a logn story regarding the ingredients that are beig used for the production of the materials,

          </p><br/>
          
            <div className='flex justify-end mt-10'>
              <button className='bg-pink-100 p-2 rounded-lg text-pink-300 font-semibold font-serif hover:opacity-75 hover:rounded-md duration-300 transition-all ease-in-out border-2 border-pink-200 hover:bg-pink-400 hover:text-pink-50'>learn more</button>
            </div>
        </div>
      </div>

      <div className='bg-gray-500 w-full h-full p-6'>
      <div className='w-full flex justify-center self-center text-center '>
        <img src='https://i.imgur.com/36IhkNN.png' className='w-1/2 object-cover max-w-full text-center  transform origin-top-left group-hover:scale-150 transition-all duration-500 ease-in-out  '></img>
        </div>
      </div>
      </div>
    </>
  )
}
