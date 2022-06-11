import Link from "next/link";

import LogoSVG from "../svg/logo.svg";
import CommerceJsSVG from "../svg/commercejs.svg";
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai';

function Footer() {
  return (
    <footer className="py-4 lg:py-4 w-full bg-gray-100 border-t-2 border-gray-200 border-solid">
      <div className="">
     
          <ul className="mr-10 ml-20 flex flex-row grid-flow-col gap-4 list-none items-center ">
          <li className="text-base ">Follow us on </li>
        <li className=""><AiFillFacebook size={24}/></li>
        <li className=""><AiFillInstagram size={24} /></li>
        </ul>
    
      </div>
    </footer>
  );
}

export default Footer;
