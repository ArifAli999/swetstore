import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { commerce } from "../lib/commerce";
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router'


export const Categories = () => {
  const router = useRouter()

  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetchProducts()
  }, [])



  const fetchProducts = async () => {

    const cat = await commerce.categories.list()
    setCats(cat.data)

  };



  return (

    <div className='grid md:grid-cols-3 gap-10 items-center align-middle self-center justify-items-center mt-10'>

      {cats.map((c) => (
 <Link href={`/categories/${c.slug}`} key={c.id}>

 <>


        <motion.div
          key={c.id}
          initial={{ opacity: 1, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.25,
            },
          }}
          className=' group h-full w-full bg-gray-400 shadow-xl cursor-pointer opacity-90 hover:opacity-100 transition-all ease-in-out duration-500 overflow-hidden '>


          <div className=' grid grid-cols-5 justify-items-center justify-center items-center align-middle w-full h-full '
          >

            <div className='col-span-3  align-middle  p-1.5 rounded float-right ml-20'>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}


                className='  text-gray-300 text-center z-40 group-hover:text-gray-50 transition-all duration-300 ease-in-out p-2 text-4xl font-serif font-black'>

                <a href={`/categories/${c.slug}`}> {c.name}</a>


              </motion.div>

            </div>
            <div className='col-span-2'>

              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 }
                }}
                className='float-right w-56 h-56	relative overflow-hidden'>
                <img src='https://i.imgur.com/36IhkNN.png' className='h-52 w-52 absolute top-10 left-24 md:left-20 transform origin-top-left group-hover:scale-150 transition-all duration-500 ease-in-out  '></img>

              </motion.div>

            </div>
          </div>



        </motion.div>
        </>


</Link >

      ))}










    </div >



  )
}

