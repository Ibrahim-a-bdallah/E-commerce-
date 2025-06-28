import { Star, Plus } from "lucide-react";

const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  rating,
  discount,
  isNew,
  size = "medium",
}) => {
  const sizeClasses = {
    small: "w-32",
    medium: "w-48",
    large: "w-56",
  };

  return (
    <div
      className={`${sizeClasses[size]} bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200 relative`}
    >
      {discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {discount}
        </div>
      )}
      {isNew && (
        <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
          New
        </div>
      )}

      <div className="p-4">
        <div className="aspect-square bg-gray-50 rounded-lg mb-3 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
        </div>

        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white p-1.5 rounded-full transition-colors">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
