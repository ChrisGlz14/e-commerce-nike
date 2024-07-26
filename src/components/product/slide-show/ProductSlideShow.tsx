'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper as SwiperObjetc } from 'swiper';
import { useState } from 'react';



import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import './slideshow.css'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';





interface Props {
    images: string[];
    title: string;
    classname?: string;
}
export const ProductSlideShow = ({images, title, classname}: Props) => {
    const url = "https://nikearprod.vtexassets.com/arquivos/ids/"

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObjetc>();
    
    return (
    <div className={classname}>

<Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 2500 }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image src={url + image} className='rounded-lg object-cover' alt={title} width={1200} height={1200} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image src={url + image} className='rounded-lg object-cover' alt={title} width={200} height={200} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        )
}
