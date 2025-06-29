import ProductCard from "./ProductMain";
import ProductCarousel from "./ProductCarousel";
import PromoBanner from "./PromoBanner";
import countdown from "./../../assets/img/product/countdown-timer.png";

const ProductSlider = ({
  featuredProducts,
  product7,
  featuredProductsFixed,
}) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4  mb-12">
        <div className="lg:col-span-1">
          <div className="bg-white border-2 border-pink-200 rounded-xl p-6 ">
            <div className="  mb-4  text-blue-950">
              <h5 className="font-medium p-3">
                Deals of the <b>week!</b>
              </h5>
              <img className="p-3" src={countdown} alt="countdown" />
              <h5 className="text-xs text-gray-400 p-3">
                Remains until the end of the offer
              </h5>
            </div>
            <img
              src={product7}
              alt="Featured Product "
              className="w-full h-full object-cover rounded-lg mx-auto m-5"
            />
            <h3 className="font-bold text-gray-900 mb-2">
              Chobani Complete Vanilla Greek Yogurt
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-lg text-pink-600 font-bold  ">$4.99</span>
              <span className="text-sm text-gray-500 line-through">$5.49</span>
            </div>

            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-300 text-sx">
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  ">
          {featuredProductsFixed.slice(0, 6).map((product) => (
            <ProductCard
              key={product?.id}
              image={product?.image}
              title={product?.title}
              price={product?.price}
              availabilityStatus={product?.availabilityStatus}
              originalPrice={product?.originalPrice}
              rating={product?.rating}
              discount={product?.discount}
              isNew={product?.isNew}
              size="larg"
              showAddButton={false}
              addQuantity={false}
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
  );
};

export default ProductSlider;
