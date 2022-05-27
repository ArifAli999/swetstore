import Head from "next/head";
import { motion } from "framer-motion";


import { commerce } from "../lib/commerce";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import ProductGrid from "../components/ProductGrid";
import HomePage from "./home";
import Caro from "../components/caro";
import FeaturedProds from "../components/Form/FeaturedProds";
import { Categories } from "../components/categories";
import Product from "../components/Product";
import { toast } from 'react-toastify';
import { useCartDispatch } from '../context/cart';


export async function getServerSideProps() {
  const { data } = await commerce.products.list({
    limit: 30,
  });
  const {data: categories} = await commerce.categories.list()



 



  const products = data.filter(({ active }) => active);

  return {
    props: {
      products,
      categories,
 
    },
    
  };
}

function IndexPage({ products,categories  }) {

  const { setCart } = useCartDispatch();





  function handleChange(event, data, name){
  commerce.cart
    .add(data, 1)
    .then(({ cart }) => {
      setCart(cart);
console.log(name)
      return cart;
    })
    .then(({ subtotal }) =>
      toast(
        `${name} is now in your cart. Your subtotal is now ${subtotal.formatted_with_symbol}. Click to view what's in your cart.`,
       
      )
    )
    .catch(() => {
      toast.error("Please try again.");
    });
  }


  return (
    <>
      <Head>
        <title>Radhas Sweet Shop</title>
      </Head>
      <div className="md:min-h-screen ">
      <div className='container mx-auto w-full h-full  overflow-hidden'>
          
          <Caro /> 
  
          <Categories/>
          
          <FeaturedProds/>
          <hr className="w-1/2 mx-auto h-full mb-10 "/>
          <p className="text-center mb-2 text-black font-black font-serif text-3xl">Latest Products
          </p>
          <hr className="w-1/2 mx-auto h-full mb-20 mt-10"/>
          <Product handleChange={handleChange} products={products}/>
   

           
         



          <motion.div
            className="md:min-h-screen p-6 md:py-12 flex items-center md:w-full md:z-40 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
               
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
