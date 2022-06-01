import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";
import {BsBagFill} from 'react-icons/bs'

function CartSummary() {
  const { total_unique_items } = useCartState();
  const { openModal } = useModalDispatch();

  return (
    <button className="appearance-none focus:outline-none z-50 bg-gray-500 text-white  text-center  rounded-full md:p-2.5  p-1 cursor-pointer font-black group transition-all duration-500 ease-in-out hover:opacity-80" onClick={openModal}>
      
      <span className="  absolute  mx-auto right-0.5 text-center text-white text-xs font-bold bg-red-500 w-5 h-5 p-0.5 rounded-full ">{total_unique_items}</span>

     <BsBagFill size={24} className="p-0.5 md:p-0">
     </BsBagFill >
 
    </button>
  );
}

export default CartSummary;
