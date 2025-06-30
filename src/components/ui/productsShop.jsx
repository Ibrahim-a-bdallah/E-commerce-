import React, { useEffect } from 'react'
import ProductMain from './ProductMain'
import { useDispatch, useSelector } from 'react-redux';
import actGetProducts from '../../store/products/actGetProduct';
function ProductsShop({setCountProducts}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetProducts());
    
  }, [dispatch]);
  const products = useSelector((state) => state.products);
  const featuredProducts = products.products;
  setCountProducts(featuredProducts.length);// Update the count of products in the shop
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6 justify-items-center'>
      {featuredProducts.map((product) => (
        <ProductMain
          key={product.id}
          image={product.images[0]}
          title={product.title}
          price={product.price}
          originalPrice={(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}
          availabilityStatus={product.availabilityStatus}
          rating={product.rating}
          discount={product.discount}
          size="medium"
          showAddButton={false}
          addQuantity={true}
        />
      ))}
    </div>
  )
}

export default ProductsShop;
