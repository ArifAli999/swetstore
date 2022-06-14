import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";
import { TiDelete } from 'react-icons/ti'

import Button from "./Button";
import CartItem from "./CartItem";

export default function Cart() {
  const { line_items, subtotal, total_unique_items } = useCartState();
  const { showCheckout } = useModalDispatch();

  const isEmpty = line_items.length === 0;

  console.log(line_items)
  return (
    <div className='grid grid-flow-row mx-auto container w-fit '>

      <div className="mt-6 mb-6 border-b-4 border-solid border-gray-300">

{line_items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
</div>
     

  

      <div className="mt-10 mb-10 text-right ml-4 mr-4">

        <button
          className=" bg-black text-white p-4 text-md font-semibold font-serif hover:text-pink-300 transition-all duration-300 ease-linear"
          onClick={showCheckout}
        >Check Out
        </button>
      </div>

    </div>
  );
}
