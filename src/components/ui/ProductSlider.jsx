import ProductCarousel from "./ProductCarousel";
import PromoBanner from "./PromoBanner";
import countdown from "./../../assets/img/product/countdown-timer.png";
import img from "./../../assets/img/product/Background.png";
import ProductMain from "./ProductMain";
import img1 from "./../../assets/img/product/bacola-banner-11.jpg (1).png";
import img2 from "./../../assets/img/product/bacola-banner-12.jpg (1).png";

const ProductSlider = ({ featuredProducts }) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4  mb-12">
        {/*Deals of the day */}
        <div className="lg:col-span-1 h-full ">
          <div className="bg-white border-2 border-pink-200 rounded-xl p-6 pb-20 h-fit flex flex-col cursor-pointer hover:scale-95 transition-all duration-200">
            <div className="  mb-4  text-blue-950">
              <h5 className="font-medium p-3 text-3xl">
                Deals of the <b>week!</b>
              </h5>
              <img className="p-3" src={countdown} alt="countdown" />
              <h5 className="text-xs text-gray-400 p-3">
                Remains until the end of the offer
              </h5>
            </div>
            <img
              src={featuredProducts[14]?.images[0]}
              alt="Featured Product "
              className="w-full h-full object-cover rounded-lg mx-auto m-5"
            />
            <h3 className="font-bold text-gray-900 mt-5 mb-3">
              {featuredProducts[14]?.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-lg text-pink-600 font-bold  ">
                {featuredProducts[14]?.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {featuredProducts[14]?.discountPercentage}
              </span>
            </div>
            <h3 className="uppercase font-[500] text-[15px] p-3 text-[#00B853]">
              {featuredProducts[14]?.availabilityStatus}
            </h3>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-300 text-sx">
                  ★
                </span>
              ))}
              <span className="text-xs text-gray-500 ml-1">
                ({featuredProducts[14]?.rating})
              </span>
            </div>
            <h4 className="text-end text-gray-500 p-3">
              Available:{" "}
              <span className="text-blue-900">
                {featuredProducts[14]?.stock}
              </span>
            </h4>
            <img className="p-3" src={img} alt="" />
          </div>
        </div>
        {/*All Products */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  ">
          {featuredProducts.slice(6, 12).map((product) => (
            <ProductMain
              key={product?.id}
              image={product?.images[0]}
              title={product?.title}
              price={product?.price}
              availabilityStatus={product?.availabilityStatus}
              originalPrice={product?.discountPercentage}
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
          image={img1}
        />
        <PromoBanner
          title="Cookies and Ice Cream"
          buttonText="Shop Now"
          bgColor="bg-gradient-to-r from-orange-400 to-pink-500"
          image={img2}
        />
      </div>

      {/* Product Carousel */}
      <ProductCarousel title="Hot Deals" products={featuredProducts} />
    </main>
  );
};

export default ProductSlider;
