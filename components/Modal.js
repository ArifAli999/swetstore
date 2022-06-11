import { useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from 'react-icons/ai'

import { useModalState, useModalDispatch } from "../context/modal";
import { useCheckoutDispatch } from "../context/checkout";
import { useCartState } from "../context/cart";

import Breadcrumbs from "./Breadcrumbs";
import Cart from "./Cart";
import Checkout from "./Checkout";

function CurrentStep({ step }) {
  const { id } = useCartState();

  switch (step) {
    case "cart":
      return <Cart />;
    case "checkout":
      return <Checkout cartId={id} />;
    default:
      return null;
  }
}

function Modal() {
  const { open, step } = useModalState();
  const { closeModal } = useModalDispatch();
  const { reset: resetCheckout } = useCheckoutDispatch();
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", closeModal);

    return () => {
      router.events.off("routeChangeStart", closeModal);
    };
  }, []);

  const closeAndResetModal = () => {
    closeModal();
    resetCheckout();
  };

  return (
    <AnimatePresence className>
      {open && (
        <motion.div
          className="bg-white z-50 fixed overflow-scroll inset-0 mb-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{ opacity: 0, y: -50 }}
        >
          <div className="h-full   flex flex-col justify-between mb-2 relative" >
          <div className="md:mb-0 mb-10">
            <button
              className="appearance-none leading-none text-black p-4  focus:outline-none absolute top-0 right-0 "
              onClick={closeAndResetModal}
            >
              <AiOutlineClose size={30} />
            </button>
            </div>
            <div className="px-3 md:px-4 lg:px-5 mx-auto container ">
              <div className="py-3 md:py-4 lg:py-5 flex items-center justify-between mt-5 mb-0 p-4">
                <Breadcrumbs inCart={step === "cart"} />
              </div>
              <hr className="px-2 mx-auto h-full mb-0 mt-0 hr" />
            </div>
          
            <CurrentStep step={step} />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
