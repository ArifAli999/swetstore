import Head from "next/head";
import { motion } from "framer-motion";

import { commerce } from "../lib/commerce";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import ProductGrid from "../components/ProductGrid";
import Home from "./home";

export async function getServerSideProps() {
  const { data } = await commerce.products.list();
  const {data: categories} = await commerce.categories.list()



  const products = data.filter(({ active }) => active);

  return {
    props: {
      products,
      categories
    },
    
  };
}

function IndexPage({ products,categories }) {
  console.log(categories)
  return (
    <>
      <Head>
        <title>Radhas Sweet Shop</title>
      </Head>
      <div className="md:min-h-screen ">
        <div className="">
          <div className="  flex ">
            <Header />

            <Home/>

            <motion.div
              className="md:py-12 hidden md:block md:sticky md:top-0 mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.25,
                },
              }}
              exit={{ opacity: 0, y: -50 }}
            >

        
            </motion.div>
          </div>

          <motion.div
            className="md:min-h-screen p-6 md:py-12 flex items-center md:w-full md:z-40 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <ProductGrid
              products={products}
              className="  "
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
