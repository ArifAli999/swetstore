import Product from "./Product";
import Link from "next/link";
import Image from "next/image";

function RelatedProducts({ products }) {
  if (!products || products.length === 0) return null;
console.log(products)
  return (
    <div className="bg-white p-6">
      <h3 className="w-1/3 md:w-full leading-tight md:leading-normal font-serif text-xl md:text-3xl mb-2">
        Some other things you might like
      </h3>

      <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 pt-4 md:pt-8">
        {products.map((product) => (
          <div className=' p-0 w-full h-full ' key={product.id}>
          <Link href='/home'  key={product.id} title="hi">
      <>
        <div className='bg-gray-100 grid p-10 justify-items-center items-center align-middle  content-center w-full  group relative' >
        
          <button className='text-white font-sans font-semibold text-xs py-0.5 px-1.5  absolute left-0 top-3 ml-2  hidden group-hover:block z-50 bg-black rounded-lg'>
          {product.price.formatted_with_symbol}
          </button>

          {product.media?.source && (
           <div className="mt-2  overflow-hidden flex justify-center">
              <Image
                src="https://i.imgur.com/36IhkNN.png"
                alt={product.name}
                layout="intrinsic"
                width={500}
                height={500}
                sizes="506px, (min-width: 768px): 352px, (min-width: 1024px): 232px, (min-width: 1280px): 288px"
                className="  w-max-full md:w-1/4 h-50 md:p-10 ml-2 -mr-2 text-center  cursor-pointer transform  md:group-hover:scale-105 transition-all duration-700 ease-in-out "
                priority={true}
                quality={100}
               />
      </div>
          )}



        </div>

        <div className='flex justify-between mt-2'>
          <a href={`/products/${product.permalink}`} className='text-gray-700 font-sans font-semibold text-lg '>{product.name}</a>
        </div>
      
        </></Link> 
      </div>

        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
