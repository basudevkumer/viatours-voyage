"use client";

import Container from "@/components/shared/Container";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import allImages from "@/helper/imageProvider";

const Travelers = () => {
  const { travelersImages ,travelerArr} = allImages;

  return (
    <section className="pt-[75px] pb-[90px] bg-text-dark mt-[105px]">
      <Container>
        <div className="grid grid-cols-2 gap-x-[200px]">
          <div>
            <h4 className="heading !text-[30px] text-bg-white max-w-[277.4]">
              What our Travelers are saying
            </h4>
            <div className="mt-[33px] flex gap-5 ">
              <div>
                <h4 className="heading !text-[38px] text-bg-white">4.8</h4>
                <p className="title4 mt-2 text-bg-white  max-w-[208px]">
                  1000+ reviews on TripAdvisor. Certificate of Excellence
                </p>
              </div>
              <div>
                <h4 className="heading !text-[38px] text-bg-white">16M</h4>
                <p className="title4 mt-2 text-bg-white">Happy customers</p>
              </div>
            </div>
          </div>
          <div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {[...new Array(10)].map((_, index) => {
                return (
                  <SwiperSlide key={index}>
                    {" "}
                    <Image
                      src={travelersImages}
                      width={520}
                      height={342}
                      alt="slider-images"
                      
                    />{" "}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="mt-[160px]">
            <p className="title4 text-bg-white text-center">Trusted by all thelargest travel brands</p>

            <div className="flex justify-between mt-10">
                 {
                    travelerArr.map((items)=>{
                        return <Image width={100} height={30} src={items.img} key={items.id}/>
                    })
                 }
            </div>

        </div>
      </Container>
    </section>
  );
};

export default Travelers;
