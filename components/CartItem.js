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

    <div className='flex flex-col md:flex-row w-fit md:gap-4 md:items-center ml-4 mr-4 mb-4 bg-white relative  '>
      <div className='bg-gray-100 text-center p-2  w-full md:w-40 md:max-w-40 flex items-center justify-center'>
        <img

          src={media.source}
          alt={name}
         
          className=" p-6 w-1/2 md:w-full h-30 mx-auto md:p-2 ml-2 mr-2 text-center md:max-h-40 md:h-fit cursor-pointer transform hover:scale-105 transition-all duration-700 ease-in-out  rounded-md"
     
        ></img>
      </div>

      {/**Mobile design */}
  

      {/**larger screens design */}

     

      <div className=' p-4 col-span-6 flex-1   md:block text-center md:text-left'>
        <span className='text-black font-sans font-semibold text-lg md:text-lg'>{name}</span>
      </div>

      <div className=" right-0 md:top-0 absolute z-99">
        <button
          onClick={handleRemoveItem}
          className="text-center p-2 text-black hover:opacity-75 transition-all duration-200 ease-in-out"
        >
          <TiDelete size={20} />
        </button>
      </div>

      <div className=' p-4 grow text-center  md:flex justify-center items-center gap-2 md:relative'>
        <button
          onClick={decrementQuantity}
          className=" text-white text-center w-6 h-6 md:w-8 md:h-8 leading-tight text-xs md:text-base	 rounded-full bg-black  focus:outline-none hover:bg-gray-400 hover:opacity-75 transition "
        >-</button>
        <span className='text-black font-Lato font-semibold  text-lg md:text-sm md:text-md bg-white-100  p-4 md:p-2 '>{quantity}</span>
        <button
          onClick={incrementQuantity}
          className=" text-white text-center w-6 h-6 md:w-8 md:h-8 leading-tight text-xs md:text-base	 rounded-full bg-black"
        >+
        </button>
      </div>


      <div className=' p-4  w-fit text-center'>
        {hasVariants && (
          <p className='text-gray-700 font-Lato font-semibold  text-sm md:text-md bg-white-100 p-1.5 md:p-2  border-solid border-2 inline-block  '>
            Size: &nbsp;
            <span className="text-black">
              {selected_options.map(({ option_name }, index) => (
                <React.Fragment key={index}>
                  {index ? `, ${option_name}` : option_name}
                </React.Fragment>
              ))}
            </span>

          </p>
        )}
      </div>


      <div className=' p-4  md:flex-1 md:text-right mt-4  hidden md:block'>
        <span className='text-black font-sans font-semibold text-sm md:text-lg md:mr-10'>{line_total.formatted_with_symbol}</span>
      </div>
    </div>



  );
}

export default CartItem;
