import { fetchCategories } from "@/store/categories/actGetCategories";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import CustomDropdownMenu from "./CustomDropdownMenu";

export default function Category() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products.products.length);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (slug) => {
    // تحديث searchParams
    const current = searchParams.getAll("category");
    const updated = [...new Set([...current, slug])];

    searchParams.delete("category");
    updated.forEach((v) => searchParams.append("category", v));

    // توجيه لصفحة shop مع البارامز المحدثة
    navigate({
      pathname: "/shop",
      search: searchParams.toString(),
    });
  };
  const trigger = (
    <div className="relative bg-[#35AFA0] cursor-pointer flex gap-4 md:gap-9 px-4 md:px-5 py-3 md:py-4 rounded-[50px] justify-between items-center dosis w-full md:w-auto">
      <div className="flex gap-2 md:gap-4 items-center">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="..." fill="white" />
        </svg>
        <h1 className="font-[600] text-sm md:text-[15px] text-[#FFFFFF] w-full text-nowrap">
          ALL CATEGORIES
        </h1>
        <div className="absolute text-[10px] font-[600] -bottom-3 left-10 border border-white bg-[#EDEEF5] rounded-[18px] px-2 py-1 text-[#71778E]">
          <h1>TOTAL {products} PRODUCTS</h1>
        </div>
      </div>
      <div className="cursor-pointer">
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="..." fill="white" />
        </svg>
      </div>
    </div>
  );

  const items = categories.map((category) => ({
    label: category.name,
    onClick: () => handleCategoryClick(category.slug),
  }));

  return <CustomDropdownMenu trigger={trigger} items={items} />;
}
