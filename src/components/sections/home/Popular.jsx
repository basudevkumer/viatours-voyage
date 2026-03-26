import Container from "@/components/shared/Container";
import PopularCard from "@/components/shared/PopularCard";
import React from "react";

const Popular = () => {
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
            <PopularCard/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Popular;
