import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import allImages from "@/helper/imageProvider";
import Image from "next/image";
import React from "react";

const Bannar = () => {
  const { banner, map } = allImages;

  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
      className=" w-full bg-cover  bg-center bg-no-repeat h-[854px] "
    >
      <Container>
        <div className="py-[350px] grid grid-cols-2 gap-[50px]">
          <div>
            <p className="title3 text-white">Starting at $978</p>
            <h1 className="heading   text-white max-w-[400px] pt-5 pb-6 ">
              Iceland's Legendary Golden Circle
            </h1>
            <p className="max-w-[425px]  title4 text-white mb-6">
              Enjoy a full-day bus tour of Iceland's legendary Golden Circle.
              Soak in the warm thermal waters of the Secret Lagoon.
            </p>
            <Button childern={"View Tour"} />
          </div>
          <div className="justify-self-end">
            <div className=" max-w-[400px] ">
              <div>
                <p className="text-white body5">Day 1</p>
                <p className="title4 text-white mt-1">Secret Lagoon</p>
              </div>
              <div>
                <Image src={map} className="" alt="map-id" />
              </div>
              <div className="justify-self-end">
                <p className="text-white body5">Day 5</p>
                <p className="title4 text-white mt-1">Secret Lagoon</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Bannar;
