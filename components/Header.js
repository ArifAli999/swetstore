import Link from "next/link";

import CartSummary from "./CartSummary";

import LogoSVG from "../svg/logo.svg";
import {BsCloudMoon} from 'react-icons/bs'
function Header() {
  return (
    <header className="mb-10  w-full   p-3 text-black ">
      <div className=" flex items-center gap-10">
     
          <a title="Return to ChopChop" href='/' className="text-left font-bold text-lg font-serif text-gray-800 flex-1">HOME</a>
    
  
          <a title="Return to ChopChop" className="text-left font-bold text-lg font-serif text-gray-800 ">SHOP</a>
       
      
          <a title="Return to ChopChop" className="text-left font-black text-lg font-serif text-gray-800 md:block hidden">CONTACT</a>
        
        <Link href="/">
          <a title="Return to ChopChop" className="text-left font-bold text-lg font-serif text-gray-800 md:block hidden">
            <BsCloudMoon size={20}/>
          </a>
        </Link>

        


       <div className="float-right md:fixed right-4 bottom-4 ">
        <CartSummary />
        </div>
      </div>

   
    </header>
  );
}

export default Header;
