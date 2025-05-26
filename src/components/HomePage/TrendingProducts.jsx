import useFetchMultipleCategories from "../../hooks/useFetchMultipleCategories";
import Loader from "../common/Loader";
import ProductCard from "../common/ProductCard";
import SectionHeader from "../common/SectionHeader";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const TrendingProducts = () => {
  const categories = [
    "laptops",
    "mobile-accessories",
    "smartphones",
    "tablets",
  ];
  const { products, loading } = useFetchMultipleCategories(categories);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [sortProduct, setSortProduct] = useState("all");
  const [productsPerPage, setProductsPerPage] = useState(10);

  // Function to update products per page based on screen width
  const updateProductsPerPage = () => {
    let itemsToShow = 4;
    if (window.innerWidth >= 640) {
      itemsToShow = 4;
    }
    if (window.innerWidth >= 768) {
      itemsToShow = 6;
    }
    if (window.innerWidth >= 1024) {
      itemsToShow = 8;
    }
    if (window.innerWidth >= 1280) {
      itemsToShow = 10;
    }
    setProductsPerPage(itemsToShow);
  };

  useEffect(() => {
    updateProductsPerPage();
    window.addEventListener("resize", updateProductsPerPage);
    return () => {
      window.removeEventListener("resize", updateProductsPerPage);
    };
  }, []);

  // Pagination
  const pages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;

  // Sort Products
  const sortedProductsList =
    sortProduct === "bestSeller"
      ? products.sort((a, b) => a.price - b.price)
      : sortProduct === "mostViewed"
      ? products.sort((a, b) => b.discountPercentage - a.discountPercentage)
      : products.sort((a, b) => b.rating - a.rating);

  // Data After Sort and Slice
  const sortedProducts = sortedProductsList.slice(startIndex, endIndex);

  return (
    <div className="mt-14">
      <div>
        <SectionHeader
          title="Trending Products"
          description="Special products in this month."
        />
        {loading ? (
          <Loader />
        ) : (
          // Filters
          <div>
            <div className="flex justify-center mt-2 mb-10">
              <ul className="flex items-center gap-5 text-lg max-sm:text-base uppercase font-semibold text-gray-400">
                <li
                  onClick={() => setSortProduct("all")}
                  className={`cursor-pointer hover:text-teal-500 duration-300 ${
                    sortProduct === "all" ? "text-teal-500" : ""
                  }`}
                >
                  All
                </li>
                <li
                  onClick={() => setSortProduct("bestSeller")}
                  className={`cursor-pointer hover:text-teal-500 duration-300 ${
                    sortProduct === "bestSeller" ? "text-teal-500" : ""
                  }`}
                >
                  best seller
                </li>
                <li
                  onClick={() => setSortProduct("mostViewed")}
                  className={`cursor-pointer hover:text-teal-500 duration-300 ${
                    sortProduct === "mostViewed" ? "text-teal-500" : ""
                  }`}
                >
                  most viewed
                </li>
              </ul>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {sortedProducts.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>

            {/* Pagination */}
            <Pagination
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingProducts;
