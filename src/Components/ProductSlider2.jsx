import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

import Product from "./Product";

import Product7 from './images/7.png';
import Product8 from './images/8.png';
import Product9 from './images/9.png';
import Product10 from './images/10.png';
import Product11 from './images/11.png';

export default function ProductSlider() {
  const products = [
    {
      id: 5,
      title: "TARİH SETİ",
      price: '1200 TL ',
      imgSrc: Product7
    },
    {
      id: 6,
      title: "SAHİL ÇANTASI",
      price: '850 TL ',
      imgSrc: Product8
    },
    {
      id: 7,
      title: "PS 5 SET",
      price: '14200 TL ',
      imgSrc: Product9
    },
    {
      id: 8,
      title: "TİŞÖRT",
      price: '126 TL ',
      imgSrc: Product10
    },
    {
      id: 9,
      title: "SPOR ÇANTASI",
      price: '333 TL ',
      imgSrc: Product11
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
