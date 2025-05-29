import { Link, useParams } from "react-router";
import useFetchAllProducts from "../hooks/useFetchAllProducts";
import Loader from "../components/common/Loader";
import { IoIosArrowForward } from "react-icons/io";
import FilterPanel from "../components/CategoryPage/FilterPanel";
import ProductsSection from "../components/CategoryPage/ProductsSection";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { products, loading } = useFetchAllProducts();
  const pageTitle = categoryName.includes("-")
    ? categoryName.split("-").join(" ")
    : categoryName;

  // All Product for this category
  const categoryProducts = products.filter(
    (product) => product.category === categoryName
  );

  if (loading) return <Loader />;
  return (
    <section>
      {/* Header For Page */}
      <div className="bg-gray-200 text-center py-10 uppercase">
        <h1 className="text-4xl max-sm:text-3xl font-light tracking-wider ">
          {pageTitle}
        </h1>
        <div className="flex items-center justify-center mt-4 max-sm:mt-3 text-xs space-x-1">
          <Link to="/" className="hover:text-teal-600 duration-300">
            Home
          </Link>
          <IoIosArrowForward />
          <Link to="/shop" className="hover:text-teal-600 duration-300">
            Shop
          </Link>
          <IoIosArrowForward />
          <Link className="text-teal-600">{pageTitle}</Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-5">
        <div className="mt-6 flex gap-6">
          <div className="hidden lg:block w-1/5">
            <FilterPanel />
          </div>
          <div className="w-full lg:w-4/5">
            <ProductsSection products={categoryProducts} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
