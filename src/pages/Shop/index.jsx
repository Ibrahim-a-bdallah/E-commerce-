import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import bgShop from "../../assets/img/shop/bgShop.png";
import PaginationControls from "@/components/pagination/PaginationControls";
import ProductsShop from "@/components/ui/productsShop";
import Loading from "@/components/feedback/Loading/Loading";

function Shop() {
  const [countProducts, setCountProducts] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ from: 0, to: Infinity });
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 30;
  const {loading , error , categories: allProducts =[] } = useSelector((state) => state.categoriesProducts );

  const filteredProducts = allProducts.filter((product) => {
    if (!product) return false;

    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category?.trim());

    const matchBrand =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand?.trim());

    const matchPrice =
      product.price >= priceRange.from && product.price <= priceRange.to;

    const matchAvailability =
      selectedAvailability.length === 0 ||
      selectedAvailability.includes(product.availabilityStatus);

    return matchCategory && matchBrand && matchPrice && matchAvailability;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedBrands, priceRange, selectedAvailability]);

  const handleCategoryChange = (categorySlug, isChecked) => {
    setSelectedCategories((prev) =>
      isChecked
        ? [...new Set([...prev, categorySlug])]
        : prev.filter((cat) => cat !== categorySlug)
    );
  };

  const handleBrandChange = (brand, isChecked) => {
    setSelectedBrands((prev) =>
      isChecked
        ? [...new Set([...prev, brand])]
        : prev.filter((b) => b !== brand)
    );
  };

  const handlePriceChange = useCallback((from, to) => {
    setPriceRange({
      from: Number(from) || 0,
      to: Number(to) || Infinity,
    });
  }, []);

  const handleAvailabilityChange = (status, isChecked) => {
    setSelectedAvailability((prev) =>
      isChecked
        ? [...new Set([...prev, status])]
        : prev.filter((s) => s !== status)
    );
  };

  return (
    <section className="my-20">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Button for mobile filters */}
          <button
            className="lg:hidden flex items-center gap-2 mb-4 bg-[#F3F4F7] px-4 py-2 rounded cursor-pointer"
            onClick={() => setShowFilters(true)}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Sidebar Filters */}
          {showFilters && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-start">
              <div className="w-full max-w-sm bg-white p-4 overflow-y-auto">
                <button
                  className="mb-4 cursor-pointer"
                  onClick={() => setShowFilters(false)}
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M6 18L18 6M6 6l12 12"
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

          <div className="w-full lg:w-3/4">
            <div
              className="bg-cover bg-center h-64 w-full"
              style={{ backgroundImage: `url(${bgShop})` }}
            >
              <div className="flex flex-col justify-center items-center h-full text-center">
                <p className="text-2xl font-light mb-0.5">
                  Organic Meals Prepared
                </p>
                <h1 className="text-gray-700 mb-2 font-bold text-2xl">
                  Delivered to <span className="text-[#00B853]">your Home</span>
                  .
                </h1>
                <p className="text-[#9B9BB4] text-sm">
                  Fully prepared & delivered nationwide.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6 bg-[#F5F5F5] px-4 py-4 rounded-md">
              <span className="text-[#9B9BB4] text-sm">
                {countProducts} products
              </span>
              <p className="text-[#9B9BB4] text-sm">
                Sort by:{" "}
                <span className="text-[#202435]">Alphabetically, A-Z</span>
              </p>
            </div>
            <Loading loading={loading} error={error}>
              <ProductsShop
                setCountProducts={setCountProducts}
                products={paginatedProducts}
              />

              <PaginationControls
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Loading>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;