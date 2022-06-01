import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";
import {TiDelete} from 'react-icons/ti'

import Button from "./Button";
import CartItem from "./CartItem";

export default function Cart() {
  const { line_items, subtotal, total_unique_items } = useCartState();
  const { showCheckout } = useModalDispatch();

  const isEmpty = line_items.length === 0;

  return (
    <div className=" w-full flex flex-col  mt-5 mb-40 justify-auto gap-4 bg-gray-200 p-4 items-start ">
      <div className="bg-white p-2 w-full">
        {line_items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className=" w-full h-max flex flex-row  justify-between py-3 md:py-4 lg:py-5  p-2 flex-1 rounded">
        {isEmpty ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="text-lg md:text-lg">
            <span className='bg-gray-400 px-3 py-1 text-white mr-2 mt-2 rounded text-xs font-bold'>ITEMS</span>  <span className=' px-3 py-1 text-black mr-2 mt-2 rounded text-xs font-bold'>{total_unique_items}{" "}  {total_unique_items === 1 ? "item" : "items"}</span> <br/><br/>
              <span className='bg-indigo-500 px-3 py-1 text-white mr-2 mt-2 rounded text-xs font-bold'>SUBTOTAL</span> <span className=" px-3 py-1 text-black mr-2 mt-2 rounded text-lg font-bold"> {subtotal?.formatted_with_symbol}</span>
             
            </div>
            <br/>
            <div className="mb-10">
              <Button
                className="appearance-none leading-none p-1 md:p-1.5 lg:px-2.5 text-lg md:text-xl"
                onClick={showCheckout}
              >
                Check Out
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
