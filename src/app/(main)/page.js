import Bannar from "@/components/sections/home/Bannar";
import ChooseTour from "@/components/sections/home/ChooseTour";
import Footprints from "@/components/sections/home/Footprints";
import Popular from "@/components/sections/home/Popular";
import Trending from "@/components/sections/home/Trending";
import Trip from "@/components/sections/home/Trip";
import React from "react";

const Home = () => {
  return (
    <>
      <Bannar />
      <Trending />
      <Trip />
      <ChooseTour />
      <Popular />
      <Footprints />
    </>
  );
};

export default Home;
