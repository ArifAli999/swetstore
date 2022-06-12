import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { TiDelete } from 'react-icons/ti'
import { commerce } from "../lib/commerce";
import { useCartDispatch } from "../context/cart";

function CartItem({ id, media, name, quantity, line_total, selected_options }) {
  const { setCart } = useCartDispatch();
  const hasVariants = selected_options.length >= 1;

  const handleUpdateCart = ({ cart }) => {
    setCart(cart);

    return cart;
  };

  const handleRemoveItem = () =>
    commerce.cart
      .remove(id)
      .then(handleUpdateCart)
      .then(({ subtotal }) =>
        toast(
          `${name} has been removed from your cart. Your new subtotal is now ${subtotal.formatted_with_symbol}`
        )
      );

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
        .update(id, { quantity: quantity - 1 })
        .then(handleUpdateCart)
        .then(({ subtotal }) =>
          toast(
            `1 "${name}" has been removed from your cart. Your new subtotal is now ${subtotal.formatted_with_symbol}`
          )
        )
      : handleRemoveItem();
  };

  const incrementQuantity = () =>
    commerce.cart
      .update(id, { quantity: quantity + 1 })
      .then(handleUpdateCart)
      .then(({ subtotal }) =>
        toast(
          `Another "${name}" has been added to your cart. Your new subtotal is now ${subtotal.formatted_with_symbol}`
        )
      );

  return (

    <div className='flex md:flex-row w-fit md:gap-4 md:items-center ml-4 mr-4 mb-4 bg-white '>
      <div className='bg-gray-100 text-center p-4 h-fit w-40  md:h-fit  md:w-40  flex items-center'>
        <Image

          src={media.source}
          alt={name}
          layout="intrinsic"
          width={250}
          height={250}
          className=" object-fit w-50  md:w-1/4 md:p-10 ml-2 mr-2 text-center  cursor-pointer transform hover:scale-105 transition-all duration-700 ease-in-out  rounded-md"
          quality={100}
          />
      </div>
      <div className='md:hidden relative  w-full  flex-col bg-white'>
        <p className="absolute right-2 top-2 text-black font-black">X</p>
     <p className="mt-4 ml-2 text-black font-bold">{name}</p>
   
     <p className=' mt-4 text-gray-500 font-Lato font-semibold  text-sm md:text-md bg-white-100 p-0.5 md:p-2 border-b-2 border-solid border-gray-50'>&nbsp;&nbsp;Size: 1.5L</p>
     
     <p className=' mt-4 text-gray-500 font-Lato font-semibold  text-sm md:text-md bg-white-100 p-0.5 md:p-2 border-b-2 border-solid border-gray-50'>&nbsp;&nbsp;Size: 1.5L</p>
      
      <p className=' mt-4 text-gray-500 font-Lato font-semibold  text-sm md:text-md bg-white-100 p-0.5 md:p-2 border-b-2 border-solid border-gray-50'>&nbsp;&nbsp;Total:  $3000</p>


      </div>
      <div className=' p-4 col-span-6 md:flex-1  hidden md:block'>
        <span className='text-black font-sans font-semibold text-base md:text-lg'>{name}</span>
      </div>
      <div className=' p-4 grow-0 text-center hidden md:block'>

        <span className='text-gray-500 font-Lato font-semibold  text-sm md:text-md bg-white-100 p-0.5 md:p-2 border-2 border-solid border-gray-50'>15</span>
      </div>
      <div className=' p-4  text-center hidden md:block'>

        <span className='text-gray-500 font-Lato font-semibold  text-sm md:text-md bg-white-100 p-0.5 md:p-2 border-2 border-solid border-gray-50'>Size: 1.5L</span>
      </div>
      <div className=' p-4  md:flex-1 md:text-right  hidden md:block'>
        <span className='text-black font-sans font-semibold text-sm md:text-lg md:mr-10'>$300.33</span>
      </div>
      </div>



  );
}

export default CartItem;
