import beverages from "./../../assets/img/cat/baverages-1.jpg.png";
import meat from "./../../assets/img/cat/meat-1.jpg.png";
import biscuitssnacks from "./../../assets/img/cat/biscuitssnacks-1.jpg.png";
import breadbakery from "./../../assets/img/cat/breadbakery-1.jpg.png";
import dairy from "./../../assets/img/cat/dairy-1.jpg.png";
import fruitvegetables from "./../../assets/img/cat/fruitvegetables-1.jpg.png";
import household from "./../../assets/img/cat/household-1.jpg.png";
import FrozenFood from "./../../assets/img/cat/FrozenFood.png";
import Grocery from "./../../assets/img/cat/Grocery.png";

const CategoriesSection = () => {
  const fixedCategory = {
    name: "Beverages",
    items: "11 Items",
    image: beverages,
    bgColor: "bg-yellow-100",
  };

  const categories = [
    {
      id: 2,
      name: "Biscuits & Snacks",
      items: "5 Items",
      image: biscuitssnacks,
    },
    {
      id: 3,
      name: "Breads & Bakery",
      items: "5 Items",
      image: breadbakery,
    },
    {
      id: 4,
      name: "Breakfast & Dairy",
      items: "8 Items",
      image: dairy,
    },
    {
      id: 5,
      name: "Frozen Foods",
      items: "7 Items",
      image: FrozenFood,
    },
    {
      id: 6,
      name: "Fruits & Vegetables",
      items: "11 Items",
      image: fruitvegetables,
    },
    {
      id: 7,
      name: "Grocery & Staples",
      items: "8 Items",
      image: Grocery,
    },
    {
      id: 8,
      name: "Household Needs",
      items: "1 Item",
      image: household,
    },
    {
      id: 9,
      name: "Meats & Seafood",
      items: "5 Items",
      image: meat,
    },
  ];

  return (
    <div className="py-16 bg-gray-50 m-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-2 m-auto">
        <div className="m-auto">
          <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
            <div
              className={` w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
            >
              <img src={fixedCategory?.image} alt={fixedCategory?.name} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">
              {fixedCategory?.name}
            </h3>
            <p className="text-sm text-gray-500">{fixedCategory?.items}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <img src={category?.image} alt={category?.name} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {category?.name}
              </h3>
              <p className="text-sm text-gray-500">{category?.items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
