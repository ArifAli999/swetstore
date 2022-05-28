import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";
import {BsBagFill} from 'react-icons/bs'

function CartSummary() {
  const { total_unique_items } = useCartState();
  const { openModal } = useModalDispatch();

  return (
    <button className="appearance-none focus:outline-none z-50 bg-black text-white  text-center  rounded-full p-6 cursor-pointer font-black group transition-all duration-500 ease-in-out hover:opacity-80" onClick={openModal}>
      
      <span className=" text-red-500 text-xs font-bold hidden group-hover:block transition-all duration-500 ease-in-out">{total_unique_items}</span>
     <BsBagFill size={16} className="group-hover:hidden transition-all duration-700 ease-in-out">
     </BsBagFill >

    </button>
  );
}

export default CartSummary;
