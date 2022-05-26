import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function FeaturedProds() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          partialVisibilityGutter: 20 
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 20,
        
    
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 20 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          partialVisibilityGutter: 20 
        }
      };
  return (
    <div className=' mt-10 mb-10 w-full text-center'>
    <p className=' p-1.5  font-Lato font-semibold text-2xl text-gray-400 text-center  '>
     Best Sellers
    </p>
    <Carousel centerMode={true}  
    itemClassName="carousel-item"
     ssr={true} // means to render carousel on server-side.
     swipeable={true}
    infinite={true}
    responsive={responsive} className='flex flex-col md:flex-row justify-between mt-10 mb-5 gap-5 w-full h-full  '>
   
    <div className='md:p-6  w-full h-fit cursor-pointer'>
        <main className='grid md:p-6 p-2  justify-items-center items-center align-middle content-center w-fit h-full bg-gray-100 rounded'>
          <img src='https://i.imgur.com/36IhkNN.png' className='max-w-full h-auto md:p-2 ml-2   -mr-2 text-center object-cover '></img>
        </main>
      </div>

      <div className='md:p-6  w-full   cursor-pointer'>
        <main className='grid md:p-6 p-2  justify-items-center items-center align-middle content-center w-full h-full bg-gray-100 rounded'>
          <img src='https://i.imgur.com/36IhkNN.png' className='max-w-full h-auto md:p-2 ml-2   -mr-2 text-center object-cover'></img>
        </main>
      </div>

      <div className='md:p-6 w-full cursor-pointer'>
        <main className='grid md:p-6 p-2 justify-items-center items-center align-middle content-center w-full h-full bg-gray-100 rounded'>
          <section className="w-full h-full relative group">
          <img src='https://i.imgur.com/36IhkNN.png' className='max-w-full h-auto md:p-2 ml-2   -mr-2 text-center object-cover'></img>
          <span className="opacity-0 group-hover:opacity-75 duration-300 absolute inset-x-0 bottom-0 flex w-full h-full justify-center items-center text-xl bg-gray-200 text-black font-semibold">Dwayne</span>

          </section>
        </main>
      </div>


      <div className='md:p-6  w-full  cursor-pointer'>
        <main className='grid md:p-6 p-2  justify-items-center items-center align-middle content-center w-full h-full bg-gray-100 rounded'>
          <img src='https://i.imgur.com/36IhkNN.png' className='max-w-full h-auto md:p-2 ml-2   -mr-2 text-center object-cover'></img>
        </main>
      </div>

      <div className='md:p-6  w-full  cursor-pointer '>
        <main className='grid md:p-6 p-2 justify-items-center items-center align-middle content-center w-full h-full bg-gray-100 rounded'>
          <img src='https://i.imgur.com/36IhkNN.png' className='max-w-full h-auto md:p-2 ml-2   -mr-2 text-center object-cover'></img>
        </main>
      </div>

    </Carousel>

  </div>
  )
}

export default FeaturedProds