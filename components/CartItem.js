import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import {TiDelete} from 'react-icons/ti'
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
    <div className="">
    <div className="py-3 md:py-4 lg:py-6 md:p-2 mt-0 flex md:items-center space-x-2 md:space-x-4 lg:space-x-4 gap-0 border-b-2 border-gray-200 border-solid  relative group hover:bg-gray-100 cursor-pointer transition-all duration-300 ease-in-out">
         <div className="absolute right-0 top-0">
              <button
                onClick={handleRemoveItem}
                className="text-center p-2 text-red-700 hover:opacity-75 transition-all duration-200 ease-in-out"
              >
                <TiDelete size={20}/>
              </button>
            </div>
      <div className="w-20 h-24 md:w-50 md:h-30 lg:w-30 lg:h-30 rounded relative shadow-lg ">
        <Image
          src={media.source}
          alt={name}
          layout="fill"
          className="object-cover rounded-lg hover:opacity-90 transition-all"
          loading="eager"
          priority={true}
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-10 p-2 flex-grow ">
        <div className="">
          <p className="font-Lato text-xl md:text-2xl lg:text-2xl font-light  leading-none">
            {name}
          </p>
          {hasVariants && (
            <p>
              {selected_options.map(({ option_name }, index) => (
                <React.Fragment key={index}>
                  {index ? `, ${option_name}` : option_name}
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start md:items-end justify-between flex-grow mr-10">
          <div className="text-lg md:text-xl lg:text-2xl font-sans font-light">
            {line_total.formatted_with_symbol}
          </div>
        </div>
        <div className=" flex md:flex-col items-center md:items-center justify-between">
            <div className="inline-flex items-center">
             
              <button
                onClick={decrementQuantity}
                className=" font-sans font-light appearance-none inline-flex items-center justify-center rounded-full border border-gray-500 w-5 h-5 text-lg text-black focus:outline-none hover:bg-gray-400 hover:opacity-75 transition bg-gray-300"
              >
                -
              </button>
              <span className="px-2 md:text-lg">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className=" font-sans font-light appearance-none inline-flex items-center justify-center rounded-full border border-gray-500 w-5 h-5 text-lg text-black focus:outline-none hover:bg-gray-400 hover:opacity-75 transition bg-gray-300"
              >
                +
              </button>
            </div>
         
          </div>
       
      </div>
    </div>
    </div>
  );
}

export default CartItem;
