import React, { useCallback, useState } from "react";
import Sidebar from "../../components/Sidebar";
import bgShop from "../../assets/img/shop/bgShop.png";
import ProductsShop from "../../components/ui/productsShop";

function Shop() {
  const [countProducts, setCountProducts] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ from: 0, to: Infinity });
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  /* Update selected categories when a checkbox is checked */
  const handleCategoryChange = (categorySlug, isChecked) => {
    setSelectedCategories((prev) => {
      if (isChecked) {
        if (!prev.includes(categorySlug)) {
          return [...prev, categorySlug];
        }
        return prev;
      } else {
        return prev.filter((cat) => cat !== categorySlug);
      }
    });
  };
  /*Update selected brands when a checkbox is checked*/
  const handleBrandChange = (brand, isChecked) => {
    setSelectedBrands((prev) => {
      if (isChecked) {
        if (!prev.includes(brand)) {
          return [...prev, brand];
        }
        return prev;
      } else {
        return prev.filter((b) => b !== brand);
      }
    });
  };
  /* Set  price range from inputs*/
  const handlePriceChange = useCallback((from, to) => {
    setPriceRange({
      from: Number(from) || 0,
      to: Number(to) || Infinity,
    });
  }, []);
  /* Update selected availability statuses when a checkbox is checked*/
  const handleAvailabilityChange = (status, isChecked) => {
    setSelectedAvailability((prev) => {
      if (isChecked) {
        if (!prev.includes(status)) {
          return [...prev, status];
        }
        return prev;
      } else {
        return prev.filter((s) => s !== status);
      }
    });
  };

  return (
    <section className="my-20">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-6 ">
          <button
            className="lg:hidden flex items-center gap-2 mb-4 bg-[#F3F4F7]  px-4 py-2 rounded cursor-pointer"
            onClick={() => setShowFilters(true)}
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
              />
            </svg>
          </button>
          {showFilters && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-start">
              <div className="w-full max-w-sm bg-white p-4 overflow-y-auto">
                <button
                  className="mb-4 cursor-pointer"
                  onClick={() => setShowFilters(false)}
                >
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </button>
                <Sidebar
                  onCategoryChange={handleCategoryChange}
                  onBrandChange={handleBrandChange}
                  onPriceChange={handlePriceChange}
                  selectedCategories={selectedCategories}
                  selectedAvailability={selectedAvailability}
                  onAvailabilityChange={handleAvailabilityChange}
                />
              </div>
            </div>
          )}
          <div className="hidden lg:block w-full lg:w-1/4">
            <Sidebar
              onCategoryChange={handleCategoryChange}
              onBrandChange={handleBrandChange}
              onPriceChange={handlePriceChange}
              selectedCategories={selectedCategories}
              selectedAvailability={selectedAvailability}
              onAvailabilityChange={handleAvailabilityChange}
            />
          </div>
          <div className="w-full lg:w-3/4 ">
            <div
              className="bg-cover bg-center h-64 w-full"
              style={{ backgroundImage: `url(${bgShop})` }}
            >
              <div className="  flex flex-col justify-center items-center h-full text-center">
                <p className="text-2xl font-light mb-0.5 font-inter text-[20px]">
                  Organic Meals Prepared
                </p>
                <h1 className="text-gray-700 mb-2 font-bold text-[30px]">
                  Delivered to{" "}
                  <span className="text-[#00B853]"> your Home</span>.
                </h1>
                <p className="text-[#9B9BB4] text-[12px]">
                  Fully prepared & delivered nationwide.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 bg-[#F5F5F5] px-4 py-4 rounded-md">
              <span className="text-[#9B9BB4] text-[12px]">
                {countProducts} products
              </span>
              <p className="text-[#9B9BB4] Inter text-[12px]">
                Sort by:{" "}
                <span className="text-[#202435]">Alphabetically, A-Z</span>
              </p>
            </div>
            <ProductsShop
              setCountProducts={setCountProducts}
              selectedCategories={selectedCategories}
              selectedBrands={selectedBrands}
              priceRange={priceRange}
              selectedAvailability={selectedAvailability}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
