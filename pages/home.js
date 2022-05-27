import React from 'react'
import { useCartDispatch } from '../context/cart';
import { commerce } from "../lib/commerce";
import ProductGrid from "../components/ProductGrid";
import { toast } from 'react-toastify';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import Product from '../components/Product';


export async function getServerSideProps() {
  const { data } = await commerce.products.list();
  const products = data.filter(({ active }) => active);

  return {
    props: {
      products,
 
 
    },
    
  };
}

export default function HomePage({products}) {
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
    if (!products || products.length === 0) return null;

  return (
    <>
  
       <Product handleChange={handleChange} products={products}/>
    </>
  )
}
