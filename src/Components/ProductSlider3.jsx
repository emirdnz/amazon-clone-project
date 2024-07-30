import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

import Product from "./Product";
import Product12 from './images/12.png';
import Product13 from './images/13.png';
import Product14 from './images/14.png';
import Product15 from './images/15.png';
import Product16 from './images/16.png';

export default function ProductSlider() {
  const products = [
    {
      id: 10,
      title: "BEBEK ARABASI",
      price: '8765 TL',
      imgSrc: Product12
    },
    {
      id: 11,
      title: "LG TELEVİZYON",
      price: '42034 tl ',
      imgSrc: Product13
    },
    {
      id: 12,
      title: "BEZ ÇANTASI",
      price: '1189 TL ',
      imgSrc: Product14
    },
    {
      id: 13,
      title: "KLASS AYAKABI",
      price: '2648 TL ',
      imgSrc: Product15
    },
    {
      id: 14,
      title: "GAMİNG MONITOR",
      price: '14200 TL ',
      imgSrc: Product16
    },
   
  ];

  return (
    <div className="container py-4 p-5 justify-content-center bg-dark">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[]}
        className={"mySwiper"}
        slidesPerView={5}
        pagination={{ clickable: true }}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30
          },
        }}
      >
        {products.map(prod => (
          <SwiperSlide key={prod.id} className="py-5">
            <Product data={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
