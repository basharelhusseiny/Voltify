import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import useFetchAllProducts from "../hooks/useFetchAllProducts";
import ProductCard from "../components/common/ProductCard";
import Loader from "../components/common/Loader";
import useFetchCategories from "../hooks/useFetchCategories";
import { IoIosArrowForward } from "react-icons/io";
import Pagination from "../components/common/Pagination";

const Shop = () => {
  const navigate = useNavigate();
  const { products, loading, error } = useFetchAllProducts();
  const { allCategory } = useFetchCategories();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [productsPerPage, setProductsPerPage] = useState(12);

  // Function to update products per page based on screen width
  const updateProductsPerPage = () => {
    let itemsToShow = 6;
    if (window.innerWidth >= 640) {
      itemsToShow = 6;
    }
    if (window.innerWidth >= 768) {
      itemsToShow = 9;
    }
    if (window.innerWidth >= 1024) {
      itemsToShow = 12;
    }
    if (window.innerWidth >= 1280) {
      itemsToShow = 12;
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
  const productLength =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const pages = Math.ceil(productLength.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;

  
  // Filter products
  const filteredProducts =
  selectedCategory === "all"
  ? products
  : products.filter((product) => product.category === selectedCategory);
  
  // Data After Filter and Slice
  const sortedProducts = filteredProducts.slice(startIndex, endIndex);
  
  const categories = [
    "all",
    ...new Set(allCategory.map((category) => category.slug)),
  ];

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="container mx-auto px-5 py-10">Error Loading Products</div>
    );

  return (
    <div>
      {/* Header */}
      <div className="bg-gray-200 text-center py-14 uppercase mb-10">
        <h1 className="text-4xl max-sm:text-3xl font-light tracking-wider ">
          shop
        </h1>
        <div className="flex items-center justify-center mt-4 max-sm:mt-3 text-xs space-x-1">
          <Link to="/" className="hover:text-teal-600 duration-300">
            Home
          </Link>
          <IoIosArrowForward />
          <Link to="/shop" className="text-teal-600 duration-300">
            Shop
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-5">
        {/* Category Filter */}
        <div className="my-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 capitalize rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
                }`}
              >
                {category === "all" ? "All Products" : category}
                <span className="ml-2 bg-white text-teal-600 px-2 py-0.5 rounded-full text-xs">
                  {category === "all"
                    ? products.length
                    : products.filter(
                        (product) => product.category === category
                      ).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Display */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold capitalize">
              {selectedCategory === "all" ? "All Products" : selectedCategory}
            </h2>
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-medium">{filteredProducts.length}</span>{" "}
              products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/singleProductPage/${product.id}`)}
                className="cursor-pointer"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {filteredProducts.length > 12 && (
            <Pagination
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
