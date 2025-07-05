import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/store/categories/actGetCategories";
import CategoryLink from "../CategoryLink";
export default function Category() {
  // const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const products = useSelector((state) => state.products.products.length);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div
      className="relative bg-[#35AFA0] cursor-pointer flex gap-4 md:gap-9 px-4 md:px-5 py-3 md:py-4 rounded-[50px] justify-between items-center dosis w-full md:w-auto"
      onClick={() => setShowCategories((prev) => !prev)}
    >
      <div className="flex gap-2 md:gap-4 items-center ">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.493 6.243H0.507C0.368333 6.243 0.249167 6.29284 0.1495 6.3925C0.0498333 6.49217 0 6.61134 0 6.75C0 6.88867 0.0498333 7.00784 0.1495 7.1075C0.249167 7.20717 0.368333 7.257 0.507 7.257H12.493C12.6403 7.257 12.7617 7.20717 12.857 7.1075C12.9523 7.00784 13 6.8865 13 6.7435C13 6.6005 12.9523 6.48134 12.857 6.386C12.7617 6.29067 12.6403 6.243 12.493 6.243ZM12.493 2.174H0.507C0.368333 2.174 0.249167 2.22384 0.1495 2.3235C0.0498333 2.42317 0 2.54234 0 2.681C0 2.81967 0.0498333 2.941 0.1495 3.045C0.249167 3.149 0.368333 3.201 0.507 3.201H12.493C12.6317 3.201 12.7508 3.15117 12.8505 3.0515C12.9502 2.95184 13 2.82834 13 2.681C13 2.53367 12.9523 2.41234 12.857 2.317C12.7617 2.22167 12.6403 2.174 12.493 2.174ZM12.493 10.299H0.507C0.368333 10.299 0.249167 10.3488 0.1495 10.4485C0.0498333 10.5482 0 10.6673 0 10.806C0 10.9447 0.0498333 11.066 0.1495 11.17C0.249167 11.274 0.368333 11.326 0.507 11.326H12.493C12.6317 11.326 12.7508 11.2762 12.8505 11.1765C12.9502 11.0768 13 10.9555 13 10.8125C13 10.6695 12.9502 10.5482 12.8505 10.4485C12.7508 10.3488 12.6317 10.299 12.493 10.299Z"
            fill="white"
          />
        </svg>

        <h1 className="font-[600] text-sm md:text-[15px] text-[#FFFFFF] w-full text-nowrap">
          ALL CATEGORIES
        </h1>
        <div className="absolute text-[10px] font-[600] -bottom-3 left-10 border border-white bg-[#EDEEF5] rounded-[18px] px-2 py-1 text-[#71778E]">
          <h1>TOTAL {products} PRODUCTS</h1>
        </div>
      </div>
      <div className=" cursor-pointer">
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_3026)">
            <path
              d="M1.40473 5.71863L5.25 9.4184L9.11605 5.71863C9.26848 5.5385 9.43476 5.5385 9.6149 5.71863C9.79504 5.87106 9.79504 6.03734 9.6149 6.21748L5.49942 10.2914C5.347 10.4438 5.18072 10.4438 5.00058 10.2914L0.885104 6.21748C0.704965 6.03734 0.704965 5.87106 0.885104 5.71863C1.05139 5.55235 1.2246 5.55235 1.40473 5.71863Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_3026">
              <rect
                width="9"
                height="15.75"
                fill="white"
                transform="matrix(1 0 0 -1 0.75 15.88)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <ul
        className={`mt-4 space-y-2 absolute left-0 top-full bg-white shadow-lg rounded-lg py-4 h-[400px] overflow-y-auto z-8 ${
          showCategories ? "opacity-100 block" : "opacity-0  hidden"
        }`}
      >
        {categories.map((category) => (
          <li
            key={category.slug}
            className="p-2 border-b border-[#E3E4E6] flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3 text-[#35AFA0] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>

            <CategoryLink category={category.slug}>
              {category.name}
            </CategoryLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
