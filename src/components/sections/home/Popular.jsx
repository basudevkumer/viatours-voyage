"use client";
import Container from "@/components/shared/Container";
import PopularCard from "@/components/shared/PopularCard";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import allImages from "@/helper/imageProvider";

const Popular = () => {
  const { popularThings } = allImages;
  return (
    <section>
      <Container>
        <div>
          <div className="flex justify-between mb-[45px]">
            <h4 className="heading !text-[30px] text-dark">
              Popular things to do
            </h4>
            <button className=" cursor-pointer title4 text-dark !font-normal">
              see all
            </button>
          </div>
          <div>
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {popularThings.map((items, index) => {
                return (
                  <SwiperSlide key={index}>
                    <PopularCard
                      img={items.image}
                      title={items.title}
                      num={items.count}
                    />
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

export default Popular;
