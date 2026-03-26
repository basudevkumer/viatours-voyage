const TripCard = ({ image, days, location, title, rating, reviews, price }) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray5 bg-white cursor-pointer hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative w-full h-52">
        <Image src={image} alt={title} fill className="object-cover" />
        {/* Days Badge */}
        <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-text-primary body5 px-3 py-1 rounded-full">
          {days} days
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="body5 text-text-secondary mb-1">{location}</p>
        <h3 className="title3 text-text-dark mb-2 line-clamp-2">{title}</h3>

        {/* Rating & Price */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <span className="text-accent text-sm">★</span>
            <span className="body5 text-text-primary font-medium">
              {rating}
            </span>
            <span className="body5 text-text-secondary">({reviews})</span>
          </div>
          <div className="text-right">
            <p className="body5 text-text-secondary">From</p>
            <p className="title3 text-text-dark">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
