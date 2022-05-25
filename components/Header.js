import Link from "next/link";

import CartSummary from "./CartSummary";

import LogoSVG from "../svg/logo.svg";

function Header() {
  return (
    <header className="mb-10  w-full  bg-indigo-300  p-3 text-white fixed top-0 z-40 ">
      <div className=" flex items-center justify-between ">
        <Link href="/">
          <a title="Return to ChopChop" className="text-left font-bold text-lg font-sans">LOGO</a>
        </Link>

        


       <div className="float-right">
        <CartSummary />
        </div>
      </div>

   
    </header>
  );
}

export default Header;
