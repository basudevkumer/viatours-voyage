const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 cursor-pointer hover:shadow-md transition-shadow">
      {/* Icon */}
      <div className="text-accent text-3xl mb-4">{icon}</div>

      {/* Text */}
      <h3 className="title3 text-text-dark mb-2">{title}</h3>
      <p className="body4 text-text-secondary">{description}</p>
    </div>
  );
};

export default FeatureCard;
