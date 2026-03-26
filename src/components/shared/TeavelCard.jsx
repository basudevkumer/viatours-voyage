// TravelCard.jsx
import Image from "next/image";

const TravelCard = ({ item }) => {
  const { image, category, date, author, title } = item;

  return (
    <div className="bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative w-full h-[220px]">
        <Image src={image} fill className="object-cover" alt={title} />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 body5 text-dark font-medium">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Date & Author */}
        <div className="flex items-center gap-2 mb-3">
          <span className="caption text-text-secondary">{date}</span>
          <span className="caption text-text-secondary">By {author}</span>
        </div>

        {/* Title */}
        <h3 className="title3 text-dark line-clamp-2">{title}</h3>
      </div>
    </div>
  );
};

export default TravelCard;