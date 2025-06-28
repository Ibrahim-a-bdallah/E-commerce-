import React from "react";
import "./home.css";
import poster from "../../assets/img/Home/poster.png";
import img from "../../assets/img/Home/933df39cffb1e5272e9216abaea18d1e2ad18cd9.png";
import img2 from "../../assets/img/Home/Water.png";

import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ui/ProductCard";
import ProductCarousel from "../../components/ui/ProductCarousel";
import PromoBanner from "../../components/ui/PromoBanner";
import HeroSection from "./../../components/ui/HeroSection";
import CategoriesSection from "./../../components/ui/CategoriesSection";
import product1 from "./../../assets/img/product/1.png";
import product2 from "./../../assets/img/product/2.png";
import product3 from "./../../assets/img/product/3.png";
import product4 from "./../../assets/img/product/4.png";
import product5 from "./../../assets/img/product/5.png";
import product6 from "./../../assets/img/product/6.png";
import product7 from "./../../assets/img/product/7.png";
import { useEffect } from "react";
import actGetProducts from "../../store/products/actGetProduct";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  console.log(products);
  const featuredProducts = [
    {
      id: 1,
      image: product1,
      title: "Organic Cereals Oats",
      price: "$4.99",
      originalPrice: "$6.99",
      rating: 4,
      discount: "30%",
    },
    {
      id: 2,
      image: product2,
      title: "Fresh Orange Juice",
      price: "$3.49",
      rating: 5,
      isNew: true,
    },
    {
      id: 3,
      image: product3,
      title: "Premium Dark Chocolate",
      price: "$7.99",
      originalPrice: "$9.99",
      rating: 5,
      discount: "20%",
    },
    {
      id: 4,
      image: product4,
      title: "Organic Honey",
      price: "$12.99",
      rating: 4,
      isNew: true,
    },
    {
      id: 5,
      image: product5,
      title: "Fresh Avocados",
      price: "$2.99",
      rating: 4,
    },
    {
      id: 6,
      image: product6,
      title: "Organic Honey",
      price: "$12.99",
      rating: 4,
      isNew: true,
    },
    {
      id: 7,
      image: product7,
      title: "Fresh Avocados",
      price: "$2.99",
      rating: 4,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <HeroSection />
        <CategoriesSection />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            <div className="lg:col-span-1">
              <div className="bg-white-100 border-2 border-pink-200 rounded-xl p-6 text-center">
                <div className="flex justify-center  mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-red-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <img
                  src={product7}
                  alt="Featured Product"
                  className="w-32 h-32 object-cover rounded-lg mx-auto mb-4"
                />
                <h3 className="font-bold text-gray-900 mb-2">
                  Organic Cereals Oats
                </h3>
                <p className="text-pink-600 font-bold text-xl">$4.99</p>
                <button className="w-full bg-pink-500 text-white py-2 rounded-lg mt-4 hover:bg-pink-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProducts.slice(0, 6).map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  discount={product.discount}
                  isNew={product.isNew}
                  size="medium"
                />
              ))}
            </div>
          </div>

          {/* Promotional Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <PromoBanner
              title="Cookies and Ice Cream"
              buttonText="Shop Now"
              bgColor="bg-gradient-to-r from-teal-400 to-teal-600"
              image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300"
            />
            <PromoBanner
              title="Cookies and Ice Cream"
              buttonText="Shop Now"
              bgColor="bg-gradient-to-r from-orange-400 to-pink-500"
              image="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300"
            />
          </div>

          {/* Product Carousel */}
          <ProductCarousel title="Hot Deals" products={featuredProducts} />
        </main>
      </div>
      <div className=" lg:px-[150px] m-auto md:px-[80px] px-[30px]">
        <Top />
        <Products />
        <Posters />
        <Mistakes />
      </div>
    </>
  );
};

export default Home;
function Top() {
  return (
    <>
      <div className="bg-[#FBEACF] rounded-[5px] py-[10px] text-center  uppercase my-[20px] md:my-[50px] lg:py-[15px]">
        <p className="tracking-[2px] font-[600] text-[10px] md:text-[15px] md:font-[700] ">
          Super discount for your first purchase.
        </p>
      </div>
    </>
  );
}
function Products() {
  return (
    <>
      <div className="border-[1px] border-[#EDEEF5] rounded-2xl mb-[50px] flex flex-wrap ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}
function Product() {
  return (
    <>
      <div className="product  p-[30px] md:p-[15px] lg:flex-1/5 md:flex-1/2     m-auto">
        <div className="img relative">
          <img src={img} alt="product imge" />
          <div className="bg-[#35AFA0] px-[10px] py-[5px] absolute top-0 left-0 rounded-[10px] text-white">
            25%
          </div>
        </div>
        <ProductDetails />
      </div>
    </>
  );
}
function ProductDetails() {
  return (
    <>
      <div className="text pl-[15px]">
        <p className="my-[15px] ">
          Zevia Kidz Strawberry Lemonade Zero Calorie…
        </p>
        <p className="uppercase font-[500] text-[15px] text-[#00B853]">
          In stock
        </p>
        <div className="flex gap-[15px] items-center my-[12px]">
          <span>stars</span>
          <span className="text-gray-500 font-[500]">1 review</span>
        </div>
        <div className="flex gap-[20px] items-center">
          <span className="text-gray-300 text-[15.3px] font-[600] ">$7.95</span>
          <span className="text-[#D51243] font-[600] text-[18px]">$5.95</span>
        </div>
      </div>
    </>
  );
}

function Posters() {
  return (
    <>
      <div className="flex mb-[50px] m-auto gap-[20px] flex-wrap ">
        <Poster />
        <Poster />
        <Poster />
      </div>
    </>
  );
}
function Poster() {
  return (
    <>
      <div className="relative rounded-2xl overflow-hidden md:flex-1/3  lg:flex-1/4 lg:max-w-[400px] ">
        <img src={poster} alt="poster image" />
        <div className="absolute top-[20px] lg:top-[28px] left-0  p-[20px] ">
          <p className="text-[#00B853] md:font-[500] md:text-[14px] ">
            Weekend Discount 40%
          </p>
          <p className="text-[#3E445A] font-[600] text-[24px]">Natural Eggs</p>
          <p className="text-[#9B9BB4] font-[400] text-[12px]">
            Eat one every day
          </p>
          <button className="rounded-2xl my-[10px] bg-[#C2C2D3] px-[15px] py-[10px] text-white cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

function Mistakes() {
  return (
    <>
      <div className="flex gap-[20px] flex-wrap mb-[100px]">
        <Mistake />
        <Mistake />
        <Mistake />
      </div>
    </>
  );
}
function Mistake() {
  return (
    <>
      <div className="relative rounded-2xl overflow-hidden md:flex-1/3  lg:flex-1/4 lg:max-w-[400px] ">
        <div className="mb-[10px] rounded-b-2xl overflow-hidden">
          <img src={img2} alt="water photo" />
        </div>
        <div>
          <p className="text-[#9B9BB4] text-[13px] font-[300] uppercase my-[10px]">
            Grocery
          </p>
          <p className="text-[#202435] font-[600] text-[17px] ">
            But I must explain to you how all this mistaken idea
          </p>
          <p className="text-[#71778E] font-[500] text-[14px] mt-[6px]">
            Jan 13 2025
          </p>
        </div>
      </div>
    </>
  );
}
