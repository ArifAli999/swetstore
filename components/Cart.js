import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";
import { TiDelete } from 'react-icons/ti'

import Button from "./Button";
import CartItem from "./CartItem";

export default function Cart() {
  const { line_items, subtotal, total_unique_items } = useCartState();
  const { showCheckout } = useModalDispatch();

  const isEmpty = line_items.length === 0;

  return (
    <div className=" w-full flex flex-col  mt-2 mb-0 justify-auto gap-2  p-4 items-start mx-auto container ">


     

      <div className="bg-white p-2 w-full">
        {line_items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="">

        <Button
          className=" bg-gray-800 appearance-none leading-none p-1 md:p-1.5 lg:px-2.5 text-lg md:text-xl"
          onClick={showCheckout}
        >
          Check Out
        </Button>
      </div>

    </div>
  );
}
