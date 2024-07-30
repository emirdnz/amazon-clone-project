import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

import Product from "./Product";
import Product17 from './images/17.png';
import Product18 from './images/18.png';
import Product19 from './images/22.png';
import Product20 from './images/23.png';
import Product21 from './images/19.png';


export default function ProductSlider() {
  const products = [
    {
      id: 15,
      title: "DERİ CÜZDAN",
      price: '434 TL ',
      imgSrc: Product17
    },
    {
      id: 16,
      title: "ARAÇ TUTUCU",
      price: '678 TL ',
      imgSrc: Product18
    },
    {
      id: 17,
      title: "DAĞ ÇANTASI",
      price: '2712 TL ',
      imgSrc: Product19
    },
    {
      id: 18,
      title: "İPHONE 15 PRO MAX",
      price: '84522 TL ',
      imgSrc: Product20
    },
    {
      id: 19,
      title: "ADİDAS FUTBOL TOPU",
      price: '1055 TL ',
      imgSrc: Product21
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
