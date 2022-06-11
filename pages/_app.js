import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import "../styles/globals.css"

import { useEffect } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer } from "react-toastify";

import * as gtag from "../lib/gtag";

import { ThemeProvider } from "../context/theme";
import { ModalProvider } from "../context/modal";
import { CartProvider } from "../context/cart";
import { CheckoutProvider } from "../context/checkout";

import Layout from "../components/Layout";
import Modal from "../components/Modal";

import Header from "../components/Header";
import 'swiper/swiper-bundle.css'




 




const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const toastOptions = {
  position: "bottom-center",
  draggable: false,
  hideProgressBar: true,
  className: "w-full md:max-w-xl",
  toastClassName: "bg-ecru-white rounded-lg text-black px-3 shadow-md",
};

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Elements
        stripe={stripePromise}
        options={{
          fonts: [
            {
              cssSrc:
                "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap",
            },
          ],
        }}
      >
        <ThemeProvider>
          <ModalProvider>
            <CartProvider>
              <CheckoutProvider>
                <Modal />
                <Layout>
                  <motion.div
                    className="container mx-auto w-full h-full  overflow-hidden"
                   initial="pageInitial"
                   animate="pageAnimate"
                   variants={{
                     pageInitial : {
                       opacity: 0,
                       x:-200

                     },
                     pageAnimate: {
                       opacity: 1,
                       x:0
                      
                     },
                   }}>

                
                 
                  <Header/>
                    <Component  {...pageProps} key={router.route} />
               
                  <ToastContainer {...toastOptions} />
                  </motion.div>

                </Layout>
              </CheckoutProvider>
            </CartProvider>
          </ModalProvider>
        </ThemeProvider>
      </Elements>
    </>
  );
}

export default MyApp;
