import allImages from "@/helper/imageProvider";
import Image from "next/image";

const Footprints = () => {
  const { footprints } = allImages;
  return (
    <section className="bg-bg-cream py-[120px]  mt-[105px] mb-[115px]">
      <div className="max-w-[1270px] mx-auto px-6">
        {/* Heading */}
        <h2 className="heading text-dark text-center mb-[50px]">
          Our Footprints
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
          {footprints.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-[20px]"
            >
              {/* Icon */}
              <div className="relative w-[70px] h-[70px]">
                <Image
                  src={item.icon}
                  fill
                  className="object-contain"
                  alt={item.label}
                />
              </div>

              {/* Value + Label */}
              <div className="flex flex-col items-center gap-[6px]">
                <span className="heading !font-bold text-dark">
                  {item.value}
                </span>
                <span className="body4 text-text-secondary">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footprints;
