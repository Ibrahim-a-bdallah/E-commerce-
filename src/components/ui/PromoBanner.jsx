const PromoBanner = ({
  title,
  subtitle,
  buttonText,
  bgColor,
  image,
  size = "large",
}) => {
  const sizeClasses = size === "large" ? "h-40" : "h-32";

  return (
    <div
      className={`${bgColor} ${sizeClasses} rounded-xl p-6 flex items-center justify-between overflow-hidden relative`}
    >
      <div className="flex-1 z-10">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        {subtitle && <p className="text-white/90 text-sm mb-4">{subtitle}</p>}
        {buttonText && (
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            {buttonText}
          </button>
        )}
      </div>
      <div className="flex-shrink-0 ml-4">
        <img src={image} alt={title} className="h-32 w-32 object-cover" />
      </div>
    </div>
  );
};

export default PromoBanner;
