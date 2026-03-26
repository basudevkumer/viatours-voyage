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
import TravelCard from "@/components/shared/TeavelCard";
import allImages from "@/helper/imageProvider";

const Travel = () => {
  const { traveItems } = allImages;
  return (
    <section className="py-[115px] px-[105px]">
      <Container>
        <div className="flex justify-between mb-[45px]">
          <h4 className="heading !text-[30px] text-dark">Travel Articles</h4>
          <button className=" cursor-pointer title4 text-dark !font-normal">
            see all
          </button>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {traveItems.map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <TravelCard item={items} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Travel;
