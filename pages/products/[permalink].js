import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

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


import {BsFillCartPlusFill} from 'react-icons/bs'

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
    fallback: false,
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
  console.log(product)
  return (

    <React.Fragment>
      <Head>
        <title>{product.seo.title}</title>
        <meta name="description" content={product.seo.description}></meta>
      </Head>



      <div className="bg-gray-50 border-b-4 border-green-500">
        <div className="h-screen grid md:grid-cols-2 p-4 gap-0 content-center">

          <div className="md:py-12 h-max w-fit p-4	 md:z-40 col-span-1 text-center flex justify-items-center ">

            <ProductImages images={images} />
            <ProductAttributes {...meta} />

          </div>

          <div className="col-span-1 p-4">

            <motion.div
              className="py-6 md:py-12 "
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
              <div className=" flex justify-between align-middle">
                <h1 className="font-serif font-medium italic text-2xl md:text-4xl lg:text-5xl mt-5">{product.name}</h1>

              </div>

              <div className="flex items-center justify-between pt-3">
                <div className="flex items-center">


                  <VariantPicker
                    variantGroups={variantGroups}
                    defaultValues={initialVariants}
                    onChange={handleVariantChange}
                  />
                </div>


              </div>
              <div
                className="pt-5 md:pt-8 lg:pt-10 md:leading-relaxed lg:leading-loose lg:text-lg"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </motion.div>
            <div className="text-center">
            <Button onClick={addToCart} className="mt-10 text-center text-sm p-2" >
              <p className="mr-2">ADD TO CART</p>
              <BsFillCartPlusFill size={20}/>
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
