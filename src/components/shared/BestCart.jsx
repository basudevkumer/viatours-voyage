// BestCard.jsx
import Image from "next/image";

const BestCard = ({ item }) => {
  const { image, location, title, rating, reviews, days, price } = item;

  return (
    <div className="bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative w-full h-[220px]">
        <Image src={image} fill className="object-cover" alt={title} />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="body5 text-text-secondary mb-1">{location}</p>
        <h3 className="title3 text-dark mb-2 line-clamp-2">{title}</h3>

        <div className="flex items-center gap-1 mb-3">
          <span className="text-accent text-sm">★</span>
          <span className="body4 font-semibold text-dark">{rating}</span>
          <span className="body4 text-text-secondary">({reviews})</span>
        </div>

        <div className="border-t border-gray5 pt-3 flex items-center justify-between">
          <span className="body4 text-text-secondary">{days} days</span>
          <span className="body4 text-text-secondary">
            From <span className="title3 text-dark">${price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BestCard;