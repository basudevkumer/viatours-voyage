"use client";

import Container from "@/components/shared/Container";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import allImages from "@/helper/imageProvider";
import BestCard from "@/components/shared/BestCart";

const BestPlace = () => {
  const { bestTrips } = allImages;
  return (
    <section>
      <Container>
        <div>
          <h4 className="heading !text-[30px] text-dark pb-12">
            Best of <span className="text-gray3">New York</span>
          </h4>
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {bestTrips.map((items, index) => {
                return (
                  <SwiperSlide key={index}>
                    <BestCard item={items}/>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BestPlace;
