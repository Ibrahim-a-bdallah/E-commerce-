import React, { useEffect } from "react";
import ProductMain from "./ProductMain";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategoriesProducts } from "../../Store/categoryProducts/actGetCategoryProducts";

function ProductsShop({ setCountProducts, selectedCategories, selectedBrands , priceRange , selectedAvailability }) {
  const dispatch = useDispatch();
  const { category } = useParams();   /* Get the search query from the URL */
  console.log(category);

  const categoriesProducts = useSelector((state => state.categoriesProducts.categories || []));

  /* Filter products based on the selected categories and brands */
  const filteredProducts = categoriesProducts.filter(product => {
  if (!product) return false;

  const matchCategory = selectedCategories.length > 0
    ? selectedCategories.includes(product.category?.trim())
    : true;

  const matchBrand = selectedBrands.length > 0
    ? selectedBrands.includes(product.brand?.trim())
    : true;

  const matchPrice = product.price >= priceRange.from && product.price <= priceRange.to;
    const matchAvailability = selectedAvailability.length > 0
    ? selectedAvailability.includes(product.availabilityStatus)
    : true;
  return matchCategory && matchBrand && matchPrice && matchAvailability;
});

  /* Update the count of products whenever the filtered products change */
  useEffect(() => {
    if (Array.isArray(filteredProducts)) {
      setCountProducts(filteredProducts.length);
    }
  }, [filteredProducts, setCountProducts]);
  /* Fetch products data */
  useEffect(() => {
    if (category) {
      /*If a search query is present (filter products based on the category)*/
      dispatch(fetchCategoriesProducts(category));
    } else {
      /*If no search query (fetch all products)*/
      dispatch(fetchCategoriesProducts());
    }
  }, [dispatch, category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6 justify-items-center">
      {filteredProducts.map((product) => (
        <ProductMain
          key={product.id}
          id={product.id}
          image={product.images && product.images.length > 0
            ? product.images[0]
            : product.images[1]}
          title={product.title}
          price={product.price}
          originalPrice={(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
          availabilityStatus={product.availabilityStatus}
          rating={product.rating}
          discount={product.discount}
          size="medium"
          showAddButton={false}
          addQuantity={true}
        />
      ))}
    </div>
  );
}

export default ProductsShop;
