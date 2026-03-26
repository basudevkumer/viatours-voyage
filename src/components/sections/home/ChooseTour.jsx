import Container from "@/components/shared/Container";
import FeatureCard from "@/components/shared/FeatureCard";
import allImages from "@/helper/imageProvider";
import { tourfeature } from "@/helper/projectsData";
import Image from "next/image";

import React from "react";

const ChooseTour = () => {
  const { tourImages } = allImages;
  return (
    <section className=" relative pt-[120px] pb-[115px]">
      <div className=" absolute rounded-[24px] overflow-hidden w-[710px] h-[710px] top-[50%] translate-y-[-50%]">
        <Image src={tourImages} width={710} height={710} alt="choses-images" />
      </div>

      <div className="  relative rounded-[14px] ml-auto   bg-commonbg max-w-[1270px]  h-[816px]">
        <div className="flex gap-[30px] absolute top-1/2 left-[-80px] translate-y-[-50%]">
          {tourfeature.map((items, index) => {
            return (
              <FeatureCard
                key={index}
                icon={items.img}
                title={items.title}
                description={items.description}
              />
            );
          })}
        </div>
        <div className="pt-[210px] pl-[285px]">
          {" "}
          <h4 className="heading !text-[30px] text-dark">Why choose Tour</h4>
          <p className="text-gray2 pt-1  title4">
            Most viewed and all-time top-selling services
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseTour;
