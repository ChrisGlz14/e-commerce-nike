'use client'
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';


import './slideshow.css'
import { Autoplay, FreeMode, Navigation, Pagination} from 'swiper/modules';
import Image from 'next/image';





interface Props {
    images: string[];
    title: string;
    classname?: string;
}
export const ProductMobileSlideShow = ({images, title, classname}: Props) => {
    const url = "https://nikearprod.vtexassets.com/arquivos/ids/"
    
    return (
    <div className={classname}>

<Swiper
        style={{
          width: '100vw',
          height: '500px',
        }}
        loop={true}
        navigation={true}
        pagination
       
        modules={[FreeMode, Navigation, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image} className='swaper-slide-mobile'>
            <Image src={url + image} className='object-fill' alt={title} width={500} height={600} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        )
}
