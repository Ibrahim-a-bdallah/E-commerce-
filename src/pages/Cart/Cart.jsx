import CartItem from "@/components/cart-item/CartItem";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.cart.products);

  const totalPrice = useMemo(() => {
    let totalNumbers = 0;
    items.forEach((object) => {
      totalNumbers += object.totalPrice;
    });
    return totalNumbers;
  }, [items]);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {items < 1 ? (
        <div className="items-center text-mainColor ">
          <h1
            className="text-center py-40
           text-3xl"
          >
            Cart Is Empty
          </h1>
        </div>
      ) : (
        <div className="w-5/6 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          {items?.map((item) => (
            <CartItem key={item.product.id} data={item} />
          ))}
          <div className="w-full flex justify-between">
            <div className="py-4 text-xl text-end flex gap-3">
              <Link
                to={"/checkout"}
                className=" px-4 py-2 rounded-md bg-[#35AFA0] text-white"
              >
                Checkout
              </Link>
              <Link
                to={"/shop"}
                className="  px-4 py-2 rounded-md bg-[#35AFA0] text-white"
              >
                Continue Shopping
              </Link>
            </div>
            <div className=" flex gap-3 justify-end">
              <div className="py-4 text-2xl text-end">Total Prise</div>
              <div className="py-4 text-2xl text-end text-mainColor">
                ${totalPrice.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
