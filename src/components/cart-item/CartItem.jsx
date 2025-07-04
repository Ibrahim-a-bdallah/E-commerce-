// import { decrease, increase, removeItem } from "@/store/cart/cartSlice";
// import React from "react";
// import { useDispatch } from "react-redux";

// export default function CartItem({ data }) {
//   const dispatch = useDispatch();

//   let increasee = () => {
//     dispatch(increase(data));
//   };

//   const decreseItems = () => {
//     dispatch(decrease(data));
//   };

//   const remooveItem = () => {
//     dispatch(removeItem(data));
//   };

//   return (
//     <>
//       <table>
//         <tbody>
//           <tr
//             key={data.product.id}
//             className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center justify-between"
//           >
//             <td className="p-4">
//               <img
//                 src={data.product.images[0]}
//                 className="w-16 md:w-32 max-w-full max-h-full"
//                 alt={data.brand}
//               />
//             </td>
//             <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
//               {data.product.brand}
//             </td>
//             <td className="px-6 py-4 flex max-w-2">
//               <div className="lg:flex items-center">
//                 <button
//                   onClick={decreseItems}
//                   className="cursor-pointer inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
//                   type="button"
//                 >
//                   <span className="sr-only">Quantity button</span>
//                   <svg
//                     className="w-3 h-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 18 2"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M1 1h16"
//                     />
//                   </svg>
//                 </button>
//                 <div className="my-2">
//                   <span
//                     id="first_product"
//                     className="bg-gray-50  border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   >
//                     {data.count}
//                   </span>
//                 </div>
//                 <button
//                   onClick={increasee}
//                   className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 cursor-pointer focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
//                   type="button"
//                 >
//                   <span className="sr-only">Quantity button</span>
//                   <svg
//                     className="w-3 h-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 18 18"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 1v16M1 9h16"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </td>
//             <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
//               ${data.totalPrice.toFixed(2)}
//             </td>
//             <td className="px-6 py-4">
//               <button
//                 onClick={remooveItem}
//                 className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
//               >
//                 Remove
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// }
import { decrease, increase, removeItem } from "@/store/cart/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function CartItem({ data }) {
  const dispatch = useDispatch();

  const increasee = () => {
    dispatch(increase(data));
  };

  const decreseItems = () => {
    dispatch(decrease(data));
  };

  const remooveItem = () => {
    dispatch(removeItem(data));
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 p-4">
      <div className="flex-shrink-0">
        <img
          src={data.product.images[0]}
          className="w-16 md:w-32 h-auto"
          alt={data.brand}
        />
      </div>
      <div className="flex-grow px-4">
        <h2 className="font-semibold text-gray-900 dark:text-white">{data.product.brand}</h2>
      </div>
      <div className="flex items-center">
        <button
          onClick={decreseItems}
          className="cursor-pointer inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          <span className="sr-only">Decrease Quantity</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h16"
            />
          </svg>
        </button>
        <span className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg w-12">
          {data.count}
        </span>
        <button
          onClick={increasee}
          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 cursor-pointer focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          <span className="sr-only">Increase Quantity</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
      <div className="px-4 font-semibold text-gray-900 dark:text-white">
        ${data.totalPrice.toFixed(2)}
      </div>
      <button
        onClick={remooveItem}
        className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
}
