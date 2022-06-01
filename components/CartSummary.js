import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";
import {BsBagFill} from 'react-icons/bs'

function CartSummary() {
  const { total_unique_items } = useCartState();
  const { openModal } = useModalDispatch();

  return (
    <button className="appearance-none focus:outline-none z-50 bg-gray-500 text-white  text-center  rounded-full md:p-3.5  p-2 cursor-pointer font-black group transition-all duration-500 ease-in-out hover:opacity-80" onClick={openModal}>
      
      <span className="  absolute  mx-auto right-2 text-center text-white text-xs font-bold bg-red-500 p-1 rounded-full ">{total_unique_items}</span>

     <BsBagFill size={30} className="p-0.5 md:p-0">
     </BsBagFill >
 
    </button>
  );
}

export default CartSummary;
