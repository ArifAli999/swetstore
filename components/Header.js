import Link from "next/link";

import CartSummary from "./CartSummary";

import LogoSVG from "../svg/logo.svg";

function Header() {
  return (
    <header className="mb-10  w-full   p-3 text-black ">
      <div className=" flex items-center justify-between ">
        <Link href="/">
          <a title="Return to ChopChop" className="text-left font-bold text-lg font-serif text-gray-600">HOME</a>
        </Link>
        <Link href="/">
          <a title="Return to ChopChop" className="text-left font-bold text-lg font-serif text-gray-600">SHOP</a>
        </Link>
        <Link href="/">
          <a title="Return to ChopChop" className="text-left font-bold text-lg font-serif text-gray-600 md:block hidden">CONTACT</a>
        </Link>

        


       <div className="float-right md:fixed right-4 bottom-4 ">
        <CartSummary />
        </div>
      </div>

   
    </header>
  );
}

export default Header;
