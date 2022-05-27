import Image from "next/image";
import Link from "next/link";
import cc from "classcat";
import { MdOutlineAddShoppingCart } from 'react-icons/md'

function Product({ products, handleChange }) {


  console.log(products)
  return (
    <>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-10 mb-10 mt-5 '>

        {products.map((product) => (
          <div className=' p-0 w-full h-full ' key={product.id}>
            <div className='bg-gray-100 grid p-10 justify-items-center items-center align-middle  content-center w-full  group relative'>
              <button className='text-black font-sans font-light text-base px-1.5  absolute right-0 top-3  mr-2 hidden group-hover:block z-50' onClick={(e) => handleChange(e, product.id, product.name)}><MdOutlineAddShoppingCart size={30} /></button>
              <button className='text-white font-sans font-semibold text-xs py-0.5 px-1.5  absolute left-0 top-3 ml-2  hidden group-hover:block z-50 bg-black rounded-lg' onClick={(e) => handleChange(e, product.id, product.name)}>
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
                    className=" - w-max-full md:w-1/4 h-50 md:p-10 ml-2 -mr-2 text-center  cursor-pointer transform  md:group-hover:scale-105 transition-all duration-700 ease-in-out "
                    priority={true}
                    quality={100}
                    style={{ backgroundColor: "#000" }} />
          </div>
              )}

            </div>

            <div className='flex justify-between mt-2'>
              <p className='text-gray-900 font-sans font-semibold text-lg '>{product.name}</p>
            </div>

          </div>
        ))}

      </div>








    </>
  );
}

export default Product;
