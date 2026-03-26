import Image from "next/image";

const TripCard = ({ image, days, location, title, rating, reviews, price }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow w-full h-[450px]">
      {/* Background Image */}
      <Image src={image} alt={title} fill className="object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05073C]/70 from-20%   via-[#05073C]/20   to-transparent " />

      {/* Days Badge - top left */}
      <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white body5 px-3 py-1 rounded-full">
        {days} days
      </span>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="body5 text-white/70 mb-1">{location}</p>
        <h3 className="title3 text-white mb-3 line-clamp-2">{title}</h3>

        {/* Rating & Price */}
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="body5 text-white font-medium">{rating}</span>
            <span className="body5 text-white/70">({reviews})</span>
          </div>
          <div className="text-right">
            <p className="body5 text-white/70">From</p>
            <p className="title2 text-white">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
