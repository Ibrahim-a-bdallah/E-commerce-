import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import CarouselSpacing from "./carousel";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductDetails from "./ProductDetails";
import { useEffect } from "react";
import actGetProductById from "@/store/popBob/actGetProductById";

const PopBob = ({ open, onOpenChange, selectedProductId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedProductId) {
      dispatch(actGetProductById(selectedProductId));
    }
  }, [dispatch, selectedProductId]);

  const product = useSelector((state) => state.popup.product);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="popupContent max-h-[92vh] overflow-y-auto gap-0  p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProductImageCarousel images={product?.images || []} />
          <ProductDetails product={product} />
        </div>

        <div className="hidden md:flex w-full flex-col justify-center items-center gap-2 mt-4">
          <h2 className="self-start font-bold text-xl">Related products</h2>
          <CarouselSpacing categoryName={product?.category} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopBob;
