import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

import Product from "./Product";

import Product2 from './images/2.png';
import Product3 from './images/3.png';
import Product4 from './images/4.png';
import Product5 from './images/5.png';
import Product6 from './images/6.png';

export default function ProductSlider() {
  const products = [
    {
      id: 0,
      title: "NİKE AYAKKABISI",
      price: '3000 TL',
      imgSrc: Product5
    },
    {
      id: 1,
      title: "KAHVE MAKİNASI",
      price: '4568 TL ',
      imgSrc: Product2
    },
    {
      id: 2,
      title: "TEL TUTUCU",
      price: '689 TL ',
      imgSrc: Product3
    },
    {
      id: 3,
      title: "KİTAP SET ",
      price: '396 TL ',
      imgSrc: Product4
    },
    {
      id: 4,
      title: "FOTO MAKİNASI",
      price: '62.000 TL ' ,
      imgSrc: Product6
    },
    
  ];

  return (
    <div className="container py-4 p-5 justify-content-center bg-dark" >
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
