import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Card from "../Card/Card"
import { products } from "../../data"

export default function Slider() {
    const responsiveSettings = {
        500: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
    };

    return (
        <>
        
        <Swiper
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={responsiveSettings}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              >
              <SwiperSlide>
                <Card {...products[0]} />
              </SwiperSlide>
              <SwiperSlide>
                <Card {...products[0]} />
              </SwiperSlide>
              <SwiperSlide>
                <Card {...products[0]} />
              </SwiperSlide>
              <SwiperSlide>
                <Card {...products[0]} />
              </SwiperSlide>
            </Swiper>
        
        </>
    )
}