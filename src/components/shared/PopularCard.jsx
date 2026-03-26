import allImages from "@/helper/imageProvider";
import Image from "next/image";
import React from "react";

const PopularCard = ({ title, num }) => {
  const { featuredTrips } = allImages;
  return (
    <div className=" relative overflow-hidden rounded-[12px]  w-[190px]   h-[220px]">
      <div className="absolute z-20 w-full top-0 left-0 h-full bg-gradient-to-t from-[#05073C]/60 from-10% via-[#05073C]/30 via-10% to-transparent "></div>
      <Image
        src={featuredTrips[0].image}
        alt="popular-img"
        className="object-cover"
        fill
      />
      <div className=" absolute bottom-6 left-1/2 translate-x-[-50%]   z-30">
        <p className="title2 text-white ">{title} </p>
        <p className="mt-1 title4 text-white">{num}+ Tours </p>
      </div>
    </div>
  );
};

export default PopularCard;
