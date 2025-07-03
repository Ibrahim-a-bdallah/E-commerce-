import { useState } from "react";
import heart from "@/assets/heart.svg";
// import share from "@/assets/share.svg";
import ShareDialog from "../share/ShareDialog";
import { addCart } from "@/store/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState("medium");
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    console.log({ product });
    dispatch(addCart(product));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-xl font-bold">{product.title}</h2>

      <p className="text-lg font-semibold ">
        {product.priceRange ||
          `$${(
            product.price -
            (product.price / 100) * product.discountPercentage
          ).toFixed(2)}`}
      </p>

      <div>
        <p className="font-semibold mb-1">Available in:</p>
        <div className="flex gap-2">
          {["small", "medium", "large"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-3 py-1 border rounded-full text-sm cursor-pointer ${
                size === s
                  ? "bg-[#35AFA0] text-white"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-7 justify-center bg-[#F3F5F9] rounded p-1 ">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="w-8 h-8 text-lg  rounded cursor-pointer "
        >
          −
        </button>
        <span>{quantity}</span>
        <button
          onClick={() =>
            setQuantity((q) => (product.stock > q + 1 ? q + 1 : product.stock))
          }
          className="w-8 h-8 text-lg  rounded cursor-pointer "
        >
          +
        </button>
      </div>

      <button
        onClick={addToCart}
        className="bg-[#35AFA0] text-white py-2 rounded-lg cursor-pointer "
      >
        Add to Cart
      </button>

      <div className="flex gap-3 ">
        <button className="flex w-[50%] justify-center items-center gap-2 hover:bg-[#f5f5f5] border px-4 py-1 rounded-lg cursor-pointer">
          <img src={heart} alt="heart" width={20} height={20} />
          <span>Wishlist</span>
        </button>
        <ShareDialog product={product} />
      </div>

      <div className="flex flex-wrap gap-2 ">
        {(product.tags || []).map((tag, i) => (
          <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* <div>
        <h3 className=" mb-1">
          <h3 className="font-semibold text-[16px]">Product Details:</h3>
          <span className="text-[14px] ">{product.description}</span>
        </h3>
        <p className="text-sm text-gray-600 line-clamp-4">{product.details}</p>
      </div> */}
    </div>
  );
};

export default ProductDetails;
