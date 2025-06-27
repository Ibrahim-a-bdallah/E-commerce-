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

const Home = () => {
  const dispatch = useDispatch();

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
    </>
  );
};

export default Home;
