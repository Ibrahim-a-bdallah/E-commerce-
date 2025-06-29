import "./home.css";
import poster from "../../assets/img/Home/poster.png";
import img from "../../assets/img/Home/933df39cffb1e5272e9216abaea18d1e2ad18cd9.png";
import img2 from "../../assets/img/Home/Water.png";
import { useDispatch, useSelector } from "react-redux";
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
import ProductSlider from "../../components/ui/ProductSlider";
import {
  Mistakes,
  Posters,
  Products,
  Top,
} from "../../components/Products/HomeComrpnents";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  const featuredProducts = products.products;
  console.log(products.products);
  const featuredProductsFixed = [
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

  const mistageImg = img2;
  const posterImg = poster;
  const Pimg = img;
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <HeroSection />
        <CategoriesSection />
        <ProductSlider
          featuredProductsFixed={featuredProductsFixed}
          featuredProducts={featuredProducts}
          product7={product7}
        />
      </div>
      <div className=" lg:px-[150px] m-auto md:px-[80px] px-[30px]">
        <Top />
        <Products Pimg={Pimg} />
        <Posters posterImg={posterImg} />
        <Mistakes mistageImg={mistageImg} />
      </div>
    </>
  );
};


export default Home;



