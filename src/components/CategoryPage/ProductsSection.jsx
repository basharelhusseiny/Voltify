import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import useClickOutside from "../../hooks/useClickOutside";
import ProductCard from "../common/ProductCard";

const ProductsSection = ({ products, loading }) => {
  const [dropDown, setDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Best Selling");
  const [selectedValue, setSelectedValue] = useState("best");
  const dropDownRef = useRef(null);
  useClickOutside(dropDownRef, () => setDropDown(false));

  // For Sorted Products
  const sortedProducts =
    selectedValue === "highToLow"
      ? products.sort((a, b) => b.price - a.price)
      : selectedValue === "lowToHigh"
      ? products.sort((a, b) => a.price - b.price)
      : products.sort((a, b) => b.discountPercentage - a.discountPercentage);

  const sortByOptions = [
    { id: 1, label: "Best Selling", value: "best" },
    { id: 2, label: "Price: Low to High", value: "lowToHigh" },
    { id: 3, label: "Price: High to Low", value: "highToLow" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { when: "afterChildren" },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      {/* Banner */}
      <div className="overflow-hidden rounded-xl border-2 border-gray-300">
        <img src="/images/bannercat.png" alt="banner" />
      </div>

      {/* Header of Products */}
      <div className="mt-6 bg-gray-200 rounded-xl px-5 py-2">
        <div className="flex items-center justify-between">
          {/* First */}
          <div className="flex items-center gap-2">
            <BsFillGrid3X3GapFill size={20} />
            <FaThList size={20} />
          </div>
          {/* Middle */}
          <div
            ref={dropDownRef}
            className={`relative flex items-center gap-3 px-5 py-2 whitespace-nowrap rounded-full hover:bg-teal-600 hover:text-white duration-300 ${
              dropDown ? "bg-teal-600 text-white" : "bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setDropDown(!dropDown)}
              className="text-sm font-medium cursor-pointer"
            >
              {selectedOption}
            </button>
            <button
              type="button"
              onClick={() => setDropDown(!dropDown)}
              className="text-sm max-sm:text-[10px] font-medium transition-colors cursor-pointer"
              aria-label="Menu"
            >
              <IoIosArrowDown
                className={`ml-1 transition-transform duration-200 ${
                  dropDown ? "rotate-180" : ""
                }`}
                size={14}
              />
            </button>
            <AnimatePresence>
              {dropDown && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  role="menu"
                  className="min-scrollbar absolute left-1/2 -translate-x-1/2 top-10 z-50  w-44 max-h-[350px] rounded border border-gray-300 bg-white shadow-sm text-gray-600 text-sm"
                >
                  {sortByOptions.map((option) => (
                    <motion.div variants={itemVariants} key={option.id}>
                      <p
                        onClick={() => {
                          setSelectedOption(option.label);
                          setSelectedValue(option.value);
                          setDropDown(false);
                        }}
                        className="block px-3 py-2 border-b border-gray-300 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-black cursor-pointer"
                        role="menuitem"
                      >
                        {option.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Last */}
          <div className="hidden sm:block text-sm font-medium">
            <p>
              Showing all{" "}
              <span className="text-xs bg-teal-600 text-white px-[6px] py-[3px] size-5 rounded-full">
                {products.length}
              </span>{" "}
              Products
            </p>
          </div>
        </div>
      </div>
      {/* Product Cards */}
      {
        <div className="my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => {
              return (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      }
    </div>
  );
};

export default ProductsSection;
