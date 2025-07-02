import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CardSim } from "lucide-react";
import { useSelector } from "react-redux";
import CarouselSpacing from "./carousel";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductDetails from "./ProductDetails";

const PopBob = ({ open, onOpenChange, selectedProductId }) => {
  const products = useSelector((state) => state.products.products);
  const product = products.find((p) => p.id === selectedProductId);

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="md:max-w-[700px] lg:max-w-[900px] w-full select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProductImageCarousel images={product.images} />

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
