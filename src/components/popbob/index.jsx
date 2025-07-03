import { Dialog, DialogContent } from "@/components/ui/dialog";

import { addCart } from "@/store/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { CardSim } from "lucide-react";
import { useSelector } from "react-redux";
import CarouselSpacing from "./carousel";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductDetails from "./ProductDetails";


const PopBob = ({ open, onOpenChange, selectedProductId }) => {
  const products = useSelector((state) => state.products.products);
  const product = products.find((p) => p.id === selectedProductId);

  const dispatch = useDispatch();

  const addToCart = () => {
    console.log({product})
    dispatch(addCart(product));
  };

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="md:max-w-[700px] lg:max-w-[900px] w-full select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProductImageCarousel images={product.images} />

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-green-600 font-semibold">
              {product.availabilityStatus}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {product.price} EGP
              </span>
              <span className="text-sm line-through text-gray-400">
                {product.originalPrice || product.price + 20} EGP
              </span>
            </div>
            <button
              className="bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg mt-2  cursor-pointer"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>

          <ProductDetails product={product} />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 mt-4 ">
          <h2 className="self-start font-bold text-xl ">Related products</h2>
          <CarouselSpacing categoryName={product.category} />

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopBob;
