import { commerce } from '../../lib/commerce'
import ProductList from '../../components/ProductList';
import {AnimatePresence} from  'framer-motion'
import React, {useEffect} from 'react';
import router from 'next/router';
import { useRouter } from 'next/router'
import Product from '../../components/Product';
import Header from '../../components/Header';
import {useCartDispatch} from '../../context/cart'
import { toast } from 'react-toastify';


export async function getStaticProps({params}) {
  
    const {slug}  = params

    const category = await commerce.categories.retrieve(slug, {
            type: 'slug'
    })

    const {data: products} = await commerce.products.list ({
        category_slug : slug,
    });

    return {
        props: {
            category,
            products
        },
    };
}


export async function getStaticPaths () {
    
    const {data: categories} = await commerce.categories.list();

    return {
        paths: categories.map((category) => ({
            params: {
                slug: category.slug,
            },
        })),
        fallback: 'blocking',
    }
}


export default function CategoryPage ({category,products}){
    useEffect(() => {
        router.beforePopState(({ as }) => {
            if (as !== router.asPath) {
                // Will run when leaving the current page; on back/forward actions
                // Add your logic here, like toggling the modal state
                router.push('/')
            }
            return true;
        });
    
        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);
    const { setCart } = useCartDispatch();





    function handleChange(event, data, name){
    commerce.cart
      .add(data, 1)
      .then(({ cart }) => {
        setCart(cart);
  console.log(name)
        return cart;
      })
      .then(({ subtotal }) =>
        toast(
          `${name} is now in your cart. Your subtotal is now ${subtotal.formatted_with_symbol}. Click to view what's in your cart.`,
         
        )
      )
      .catch(() => {
        toast.error("Please try again.");
      });
    }

    return (
        <><AnimatePresence>
            <div className='mt-10 mb-10 bg-gray-400 p-2 md:rounded'>
                <div className='bg-white p-6'>
                <h1 className='font-serif text-2xl text-center md:text-6xl text-black font-black mb-4 mt-4'>
                    {category.name}
                </h1><br />
                <Product  handleChange={handleChange} products={products} />
                </div>
            </div>
        </AnimatePresence></>
    )
}