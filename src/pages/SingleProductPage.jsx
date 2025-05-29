import { useParams } from "react-router";
import useFetchAllProducts from "../hooks/useFetchAllProducts";
import Loader from "../components/common/Loader";
import { useEffect, useRef, useState } from "react";
import ProductRating from "../components/common/ProductRating";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegHeart,
  FaTwitter,
} from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import CustomerReviews from "../components/SingleProductPage/CustomerReviews";
import ProductSwiper from "../components/common/ProductSwiper";

const SingleProductPage = () => {
  const { id } = useParams();
  const imgRef = useRef();
  const { products, loading, error } = useFetchAllProducts();
  const product = products.find((product) => product.id === +id);
  const [selectedImg, setSelectedImg] = useState(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (product && product.images?.length) {
      setSelectedImg(product.images[0]);
    }
  }, [product]);

  // From original Price before discountPercentage
  function calculateOriginalPrice(discountedPrice, discountPercentage) {
    const originalPrice = discountedPrice / (1 - discountPercentage / 100);
    return originalPrice.toFixed(2);
  }

  const original = calculateOriginalPrice(
    product?.price,
    product?.discountPercentage
  );

  // For Product Zoom
  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
    setIsZoomed(true);
  };
  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  if (loading) return <Loader />;
  return (
    <section className="mt-6">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-7">
          {/* Left Side Images */}
          <div className="lg:w-1/2 w-full">
            <div className="flex gap-5 max-sm:gap-3">
              <div className="w-1/5 flex gap-6 max-sm:gap-3 flex-col">
                {product?.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`img ${index + 1}`}
                    className={`p-2 lg:h-[100px] border-2 cursor-pointer object-contain rounded-lg duration-300 ${
                      selectedImg === img
                        ? "border-teal-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => {
                      imgRef.current.src = img;
                      setSelectedImg(img);
                    }}
                  />
                ))}
              </div>
              <div className="w-4/5 py-3 flex items-center justify-center bg-teal-100 rounded-lg overflow-hidden">
                <img
                  ref={imgRef}
                  src={selectedImg || product?.images[0]}
                  alt={product?.title}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="h-[350px] max-sm:h-[220px] w-full object-contain transition-transform duration-200"
                  style={{
                    transform: isZoomed ? "scale(2.1)" : "scale(1)",
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Side Info */}
          <div className="lg:w-1/2 w-full">
            <p className="uppercase text-[13px] text-gray-500">
              {product?.category}
            </p>
            <h5 className="my-2 text-3xl font-semibold">{product?.title}</h5>
            <ProductRating
              rating={product?.rating}
              reviews={product?.reviews}
            />
            <div className="my-2 flex items-center">
              <p className="font-semibold text-2xl">${product?.price}</p>
              <p className="ml-2 line-through text-gray-500">${original}</p>
              <p className="bg-green-100 text-[15px] text-green-700 font-semibold ml-3 px-2 rounded-lg">
                {product?.discountPercentage}% OFF
              </p>
            </div>
            <p className="tracking-wide w-[80%] text-gray-700">
              {product?.description}
            </p>
            {/*  Product Details  */}
            <div className="w-full md:w-[90%] lg:w-[55%]">
              <p className="w-full font-semibold capitalize mt-5 text-xl border-b border-gray-300 pb-2">
                product details
              </p>
              {product.brand && (
                <div className="w-full flex items-center justify-between border-b border-gray-300 py-2 capitalize">
                  <p className="text-[17px] text-gray-600 font-medium">brand</p>
                  <p className="text-[15px] font-semibold">{product?.brand}</p>
                </div>
              )}
              <div className="w-full flex items-center justify-between border-b border-gray-300 py-2 capitalize">
                <p className="text-[17px] text-gray-600 font-medium">
                  Availability
                </p>
                <p className="text-[15px] text-green-600 font-semibold">
                  {product?.availabilityStatus}
                </p>
              </div>
              <div className="w-full flex items-center justify-between border-b border-gray-300 py-2 capitalize">
                <p className="text-[17px] text-gray-600 font-medium">
                  shipping
                </p>
                <p className="text-[15px] font-semibold">
                  {product?.shippingInformation}
                </p>
              </div>
              <div className="w-full flex items-center justify-between border-b border-gray-300 py-2 capitalize">
                <p className="text-[17px] text-gray-600 font-medium">
                  return Policy
                </p>
                <p className="text-[15px] font-semibold">
                  {product?.returnPolicy}
                </p>
              </div>
              <div className="w-full flex items-center justify-between py-2 capitalize">
                <p className="text-[17px] text-gray-600 font-medium">
                  warranty
                </p>
                <p className="text-[15px] font-semibold">
                  {product?.warrantyInformation}
                </p>
              </div>
            </div>
            {/* Tags */}
            <div className="mt-5 flex items-center">
              <p className="font-semibold text-xl mr-3">Tags</p>
              <div>
                {product?.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block capitalize mr-2 bg-teal-100 text-sm py-[2px] px-3 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Add To Cart and wishlist button */}
            <div className="flex items-center gap-3">
              <button className="w-[250px] flex items-center justify-center my-5 border border-gray-300 py-2 max-md:py-2 font-semibold cursor-pointer bg-teal-500 text-white capitalize text-[15px] hover:bg-teal-700 duration-300 rounded-md">
                <RiShoppingCartLine className="text-lg mr-2" />
                <span>Add to cart</span>
              </button>
              <button className="bg-white text-teal-600 border-2 border-teal-500 flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-teal-500 cursor-pointer duration-300">
                <FaRegHeart className="text-xl" />
              </button>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              <p>Share this product</p>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-teal-600 text-white p-1 rounded-full transition-colors duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-teal-600 text-white p-1 rounded-full transition-colors duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-teal-600 text-white p-1 rounded-full transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-teal-600 text-white p-1 rounded-full transition-colors duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Reviews Section */}
      <CustomerReviews reviews={product.reviews} />
      {/* Similar Projects */}
      <ProductSwiper
        products={product?.category}
        title="Similar Products"
        description="You might also like these related items"
      />
    </section>
  );
};

export default SingleProductPage;
