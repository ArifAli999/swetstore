import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";
import {BsBagFill} from 'react-icons/bs'

function CartSummary() {
  const { total_unique_items } = useCartState();
  const { openModal } = useModalDispatch();

  return (
    <button className="appearance-none focus:outline-none z-50 bg-black text-white  text-center  rounded-full p-3 cursor-pointer font-black group transition-all duration-500 ease-in-out hover:opacity-80" onClick={openModal}>
      
      <span className="  absolute bottom-3 mx-auto right-4 text-center text-black text-xs font-bold  ">{total_unique_items}</span>

     <BsBagFill size={24} className="">
     </BsBagFill >
 
    </button>
  );
}

export default CartSummary;
