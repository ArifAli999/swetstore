import { commerce } from '../../lib/commerce'
import ProductList from '../../components/ProductList';
import {AnimatePresence} from  'framer-motion'
import React, {useEffect} from 'react';
import router from 'next/router';
import { useRouter } from 'next/router'

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
    return (
        <AnimatePresence>
            <h1>{category.name}</h1>
            <ProductList products={products}/>
        </AnimatePresence>
    )
}