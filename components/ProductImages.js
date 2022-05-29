import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Scrollbar } from 'swiper'

function ProductImages({ images = [] }) {
  if (!images || images.length === 0) return null;

  SwiperCore.use([Scrollbar]);

  return (
    <>
      <Swiper
        
        scrollbar={{
          hide: true,
          
        }}
        modules={[Scrollbar]}
        className='w-fit  opacity-100 '
       
         >

        {images.map(({ id, url, image_dimensions, index }) => (
        


            <SwiperSlide  key={id}>
              <div className='p-6 relative h-full w-full'>
                <Image
                
                  src={url}
                  layout="intrinsic"
                  width={400}
                  height={400}
                  sizes="506px, (min-width: 768px): 352px, (min-width: 1024px): 232px, (min-width: 1280px): 288px"
                  className=" object-fit w-50  md:w-1/4 h-50 md:p-10 ml-2 -mr-2 text-center  cursor-pointer transform hover:scale-105 transition-all duration-700 ease-in-out  rounded-md"
                  quality={100}
                  alt="" />
              </div>
            </SwiperSlide>



          

        ))}
      </Swiper>
    </>
  )


}

export default ProductImages;
