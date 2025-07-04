import { useMemo, useState } from "react";
import heart from "@/assets/heart.svg";
import heartFill from "@/assets/heart-svgrepo-com.svg";

import ShareDialog from "../share/ShareDialog";
import { addCart } from "@/store/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState("medium");
  const [quantity, setQuantity] = useState(0);
  const [readmore, setreadmore] = useState(true);
  const [hearticon, setheart] = useState(true);
  const [IsLoding, setIsLoding] = useState(false)
  const cartItems = useSelector((state) => state.cart.products);

  const Loding = () => {
    setIsLoding (true) ;
    setTimeout(() => {
      setIsLoding (false)
    }, 500);
  }
  const addToCart = () => {
    console.log({ product });
    dispatch(addCart(product));
    Loding();
  };

  return (
    <div className="w-full flex flex-col gap-2 md:max-h-[400px] ">
      <div className="flex md:flex-col justify-between items-center md:items-start">
        <h2 className="text-[16px] font-bold">{product.title}</h2>
        <p className="text-[14px] md:text-lg font-semibold">
          {product.priceRange ||
            `$${(
              product.price -
              (product.price / 100) * product.discountPercentage
            ).toFixed(2)}`}
        </p>
      </div>

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

      <div className="flex flex-row-reverse justify-between items-center md:flex-col gap-2">
        <div className="flex items-center gap-7 justify-center bg-[#F3F5F9] rounded p-1 w-full">
          <button
            onClick={() => setQuantity((q) => Math.max(0, q - 1))}
            className="w-8 h-8 text-lg rounded cursor-pointer"
          >
            −
          </button>
          

          <span>0</span>
      
          <button
            onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
            className="w-8 h-8 text-lg rounded cursor-pointer"
          >
            +
          </button>
        </div>

        <button
          onClick={addToCart}
          className="bg-[#35AFA0] text-white py-2 rounded-lg cursor-pointer w-full"
        >
          {IsLoding? 'Loding...' : 'Add to Cart'}
        </button>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setheart(!hearticon)}
          className="flex w-[50%] justify-center items-center gap-2 hover:bg-[#f5f5f5] border px-4 py-1 rounded-lg cursor-pointer"
        >
          {hearticon ? (
            <img src={heart} alt="heart" width={20} height={20} />
          ) : (
            <img src={heartFill} alt="heartFill" width={20} height={20} />
          )}
          <span>Wishlist</span>
        </button>
        <ShareDialog product={product} />
      </div>

      <div className="flex flex-wrap gap-2">
        {(product.tags || []).map((tag, i) => (
          <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <div className="w-full">
        <h3 className="font-semibold text-[14px] mb-1">Product Details:</h3>
        <span
          className={`text-sm text-gray-600 ${
            readmore ? "line-clamp-1 md:line-clamp-1" : ""
          }`}
        >
          {product.description}
        </span>
        <span
          className="text-[#35AFA0] cursor-pointer ml-2"
          onClick={() => setreadmore(!readmore)}
        >
          {readmore ? "Read More" : "Less"}
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
