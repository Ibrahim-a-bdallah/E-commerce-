import React, { useEffect } from "react";
import ProductMain from "./ProductMain";
import { useDispatch, useSelector } from "react-redux";
import actGetProducts from "../../store/products/actGetProduct";
import { useParams } from "react-router-dom";

function ProductsShop({ setCountProducts }) {
  const dispatch = useDispatch();
  {
    /* Get the search query from the URL */
  }
  const { category } = useParams();
  console.log(category);
  const products = useSelector((state) => state.products);
  const featuredProducts = products.products;
  {
    /*Update the count of products in the shop*/
  }
  setCountProducts(featuredProducts.length);
  {
    /* Fetch products data */
  }
  useEffect(() => {
    if (category) {
      {
        /*If a search query is present (filter products based on the category)*/
      }
      dispatch(actGetProducts(category));
    } else {
      {
        /*If no search query (fetch all products)*/
      }
      dispatch(actGetProducts());
    }
  }, [dispatch, category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6 justify-items-center">
      {featuredProducts.map((product) => (
        <ProductMain
          key={product.id}
          id={product.id}
          image={product.images[0]}
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
