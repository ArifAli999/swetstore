import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { AiFillCaretDown } from 'react-icons/ai'

import { commerce } from "../../lib/commerce";
import { useCartDispatch } from "../../context/cart";
import { useThemeDispatch } from "../../context/theme";
import { useModalDispatch } from "../../context/modal";

import Header from "../../components/Header";
import Button from "../../components/Button";
import VariantPicker from "../../components/VariantPicker";
import ProductImages from "../../components/ProductImages";
import ProductAttributes from "../../components/ProductAttributes";
import RelatedProducts from "../../components/RelatedProducts";
import DiscBoxes from '../../components/DiscBoxes'


import { BsFillCartPlusFill } from 'react-icons/bs'

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map(({ permalink }) => ({
      params: {
        permalink,
      },
    })),
    fallback: 'blocking',
  };
}

function ProductPage({ product }) {
  const { setCart } = useCartDispatch();
  const {
    variant_groups: variantGroups,
    assets,
    meta,
    related_products: relatedProducts,
  } = product;
  const images = assets.filter(({ is_image }) => is_image);
  const attributes = product.attributes;
  const setTheme = useThemeDispatch();
  const { openModal } = useModalDispatch();

  const initialVariants = React.useMemo(
    () =>
      variantGroups.reduce((all, { id, options }) => {
        const [firstOption] = options;

        return { ...all, [id]: firstOption.id };
      }, {}),
    [product.permalink]
  );

  const [selectedVariants, setSelectedVariants] = React.useState(
    initialVariants
  );

  React.useEffect(() => {
    setSelectedVariants(initialVariants);
    setTheme(product.permalink);

    return () => setTheme("default");
  }, [product.permalink]);

  const handleVariantChange = ({ target: { id, value } }) =>
    setSelectedVariants({
      ...selectedVariants,
      [id]: value,
    });

  const addToCart = () =>
    commerce.cart
      .add(product.id, 1, selectedVariants)
      .then(({ cart }) => {
        setCart(cart);

        return cart;
      })
      .then(({ subtotal }) =>
        toast(
          `${product.name} is now in your cart. Your subtotal is now ${subtotal.formatted_with_symbol}. Click to view what's in your cart.`,
          {
            onClick: openModal,
          }
        )
      )
      .catch(() => {
        toast.error("Please try again.");
      });

  console.log(product.attributes)
  return (

    <React.Fragment>
      <Head>
        <title>{product.seo.title}</title>
        <meta name="description" content={product.seo.description}></meta>
      </Head>



      <div className="bg-gray-400 p-2 md:ml-5 md:mr-5 rounded">
        <div className=" md:flex-row grid grid-cols-1 p-4 items-start content-center h-full w-full bg-white rounded">
          <div className=" p-6 mb-4">

            <h1 className="font-serif font-black italic text-2xl md:text-4xl lg:text-5xl mt-5">{product.name}</h1>
            <p className="text-gray-600 font-sans font-black text-lg mt-5">{product.price.formatted_with_symbol}</p>

          </div>
          <div className="md:py-12 h-full w-full p-4	 md:z-40 col-span-1 text-center flex justify-items-center overflow-hidden  bg-white rounded-md 	 ">

            <ProductImages images={images} />
            <ProductAttributes {...meta} />

          </div>

          <div className="col-span-1 w-full  p-4 bg-white">

            <motion.div
              className="p-2"
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




              <div className="flex items-center justify-between pt-3 p-4">
                <div className="flex items-center">


                  <VariantPicker
                    variantGroups={variantGroups}
                    defaultValues={initialVariants}
                    onChange={handleVariantChange}
                  />
                </div>


              </div>


            </motion.div>
            <main className="text-gray-800 py-4 bg-gray-300  border-2 border-gray-600 p-2 w-full  flex justify-between appearance-none focus:outline-none hover:opacity-90 transition-all duration-500 ease-in-out font-serif font-black mb-4">
              <p className="border-4  border-black ">Description</p>
              <AiFillCaretDown size={20}/>
              </main>

            <div
              className="pt-0 md:pt-2 md:mb-2 md:leading-relaxed lg:leading-loose lg:text-base p-4"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <DiscBoxes attributes={product.attributes} />
            <div className="text-center flex justify-center p-4">

              <Button onClick={addToCart} className="mt-10 text-center text-sm p-2" >
                <p className="mr-2">ADD TO CART</p>
                <BsFillCartPlusFill size={20} />
              </Button>
            </div>
          </div>




        </div>
      </div>

      <div className="py-3 md:py-4 lg:py-8">
        <RelatedProducts products={relatedProducts} />
      </div>
    </React.Fragment>
  );
}

export default ProductPage;
