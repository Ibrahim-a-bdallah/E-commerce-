import React, { useEffect } from "react";
import imgShop from "../../assets/img/shop/aeb9763b1145b3dd6e2fadd6c2b27941d3d7b0fa.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/store/categories/actGetCategories";
import { fetchCategoriesProducts } from "@/Store/categoryProducts/actGetCategoryProducts";
import { Link, useParams } from "react-router-dom";

function Sidebar({ onCategoryChange, onBrandChange }) {
  const dispatch = useDispatch();
  const categoryName = useParams();
  console.log(categoryName.category);
  const { categories } = useSelector((state) => state.categories);
  const categoriesProducts = useSelector((state) => state.categoriesProducts);

  const allBrands = Array.isArray(categoriesProducts.categories)
    ? categoriesProducts.categories
        .map((brand) => brand.brand)
        .filter((brand) => brand && brand.trim() !== "")
    : [];

  // console.log('Aside', allBrands);
  const uniqueBrands = [];
  allBrands.forEach((brand) => {
    // Check if the brand is not already in the uniqueBrands array
    if (!uniqueBrands.includes(brand)) {
      uniqueBrands.push(brand);
    }
  });

  const brandCounts = {}; // Object to hold the count of each brand
  // Count the occurrences of each brand
  if (Array.isArray(categoriesProducts.categories)) {
    categoriesProducts.categories.forEach((product) => {
      const brand = product.brand?.trim();
      if (brand) {
        if (brandCounts[brand]) {
          brandCounts[brand]++; // increment the count if the brand already exists
        } else {
          brandCounts[brand] = 1; // if the brand does not exist initialize it with 1
        }
      }
    });
  }
  // console.log('Brand Counts', brandCounts);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCategoriesProducts());
  }, [dispatch]);
  return (
    <aside className="w-full lg:w-1/4  ">
      <div>
        <h2 className="text-[#202435] font-semibold text-[15px] uppercase dosis pb-4">
          Product Categories
        </h2>
        <ul className="list-none p-0  ">
          {categories.map((category, index) => {
            const inputId = `category-${index}`; // Unique ID for each category input
            return (
              <li className="py-2 px-2" key={category.slug}>
                <div className="relative">
                  {console.log(category.slug == categoryName.category)}
                  <Link to={`/category/${category.slug}`}>
                    <input
                      type="checkbox"
                      id={inputId}
                      name={category.slug} // to selected more than one category
                      value=""
                      className="peer hidden"
                      checked={category.slug == categoryName.category}
                      onChange={(e) =>
                        onCategoryChange(category.slug, e.target.checked)
                      }
                    />
                  </Link>
                  <label
                    htmlFor={inputId}
                    className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
                  >
                    {category.name}
                  </label>
                  <span className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"></span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pt-6">
        <h2 className="text-[#202435] font-semibold text-[15px] uppercase dosis pb-4">
          Brands
        </h2>
        <ul>
          {uniqueBrands.map((brand, index) => {
            const inputId = `brand-${index}`; // Unique ID for each category input
            return (
              <li className="py-2 px-2 " key={index}>
                <div className="relative flex items-center justify-between">
                  <input
                    type="checkbox"
                    id={inputId}
                    name={brand} // to selected more than one brand
                    value=""
                    className="peer hidden"
                    onChange={(e) => onBrandChange(brand, e.target.checked)}
                  />
                  <label
                    htmlFor={inputId}
                    className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
                  >
                    {brand}
                  </label>
                  <span className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"></span>
                  <span className="text-[#71778E] text-[14px]">
                    ({brandCounts[brand] || 0})
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pt-6">
        <h2 className="text-[#202435] font-semibold text-[15px] uppercase dosis pb-4">
          Price
        </h2>
        <div className="flex align-center justify-between gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="priceFrom" className="text-sm text-[#71778E] mb-1">
              From
            </label>
            <input
              type="number"
              id="priceFrom"
              placeholder="0"
              className="w-full border border-[#ccc] rounded px-4 py-4 text-sm focus:outline-none bg-[#F3F4F7] "
            />
          </div>
          <div className="flex items-center justify-center">
            <span className="text-[#71778E] text-sm">-</span>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="priceFrom" className="text-sm text-[#71778E] mb-1">
              To
            </label>
            <input
              type="number"
              id="priceFrom"
              placeholder="0"
              className="w-full border border-[#ccc] rounded px-4 py-4 text-sm focus:outline-none bg-[#F3F4F7]"
            />
          </div>
        </div>
      </div>
      <div className="pt-6">
        <h2 className="text-[#202435] font-semibold text-[15px] uppercase dosis pb-4">
          Availability
        </h2>
        <ul>
          <li className="py-2 px-2 flex items-center justify-between">
            <div className="relative">
              <input
                type="radio"
                id="Instock"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Instock"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                In stock
              </label>
              <span className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"></span>
            </div>
            <span className="text-[#71778E] text-[14px]"> (62)</span>
          </li>
          <li className="py-2 px-2 flex items-center justify-between">
            <div className="relative">
              <input
                type="radio"
                id="Outofstock"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Outofstock"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Out of stock
              </label>
              <span className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"></span>
            </div>
            <span className="text-[#71778E] text-[14px]"> (0)</span>
          </li>
        </ul>
      </div>
      <div>
        <img
          src={imgShop}
          alt="Shop Banner"
          className="w-[270px] h-[368.69px] mt-6"
        />
      </div>
    </aside>
  );
}

export default Sidebar;
