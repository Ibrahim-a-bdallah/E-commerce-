import { Star, Plus } from "lucide-react";

const ProductMain = ({
  image,
  title,
  price,
  originalPrice,
  availabilityStatus,
  rating,
  discount,
  isNew,
  size = "medium",
  showAddButton = Boolean,
  addQuantity = Boolean,
}) => {
  const sizeClasses = {
    small: "w-32",
    medium: "w-48",
    large: "w-56",
  };

  return (
    <div
      className={`${sizeClasses[size]} bg-white rounded-lg shadow-sm border border-gray-100 hover:scale-95 transition-all duration-200 relative overflow-hidden cursor-pointer`}
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 flex flex-col space-y-1 z-10">
        {discount && (
          <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
            {discount}
          </div>
        )}
        {isNew && (
          <div className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
            New
          </div>
        )}
      </div>

      {/* Product Image - Fixed Aspect Ratio */}
      <div className="p-4 pb-0">
        <div className="aspect-square  rounded-lg mb-3 overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain max-h-[180px] "
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 pt-0">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
          {title}
        </h3>
        <h3 className="uppercase font-[500] text-[15px] text-[#00B853]">
          {availabilityStatus}
        </h3>

        {/* Rating */}
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

        {/* Price and Add Button */}
        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              {originalPrice}
            </span>
            {price && (
              <span className="text-sm text-gray-500 line-through">
                {price}
              </span>
            )}
          </div>
          {/*Buttons */}
          {showAddButton && (
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg mt-4 transition-colors">
              Add to Cart
            </button>
          )}
          {addQuantity && (
            <div className=" flex items-center rounded-5xl py-2 ">
              <button className=" bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-l-lg ">
                -
              </button>
              <span className="bg-white px-4 py-1 text-gray-800 ps-8 pe-8">
                1
              </span>
              <button className="bg-amber-400 hover:bg-amber-500 text-gray-800 px-3 py-1 rounded-r-lg">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductMain;
