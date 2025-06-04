import { memo } from "react";
import ProductRating from "../common/ProductRating";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const brand =
    product.brand && product.brand.length > 10
      ? product.brand.split(" ")[0]
      : product.brand;
  const navigate = useNavigate();
  function calculateOriginalPrice(discountedPrice, discountPercentage) {
    const originalPrice = discountedPrice / (1 - discountPercentage / 100);
    return originalPrice.toFixed(2);
  }
  const original = calculateOriginalPrice(
    product.price,
    product.discountPercentage
  );

  return (
    <div className="group hover:scale-105 border-1 border-gray-300 rounded-md hover:border-teal-500 pt-5 overflow-hidden duration-300">
      <div className="relative overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full h-[120px] object-contain hover:scale-110 hover:cursor-pointer duration-300"
          onClick={() => navigate(`/singleProductPage/${product.id}`)}
        />
        <div className="flex gap-[2px] items-center absolute inset-0 w-fit h-fit px-[5px] py-[1px] rounded-full text-white text-[13px] font-semibold ml-2 bg-yellow-500 ">
          <MdDiscount />
          <span>{product.discountPercentage}%</span>
        </div>
        {/* Icons */}
        <div className="flex flex-col gap-2 absolute -right-full  group-hover:right-[10px] top-[50%] -translate-y-[50%] duration-500">
          <button className="text-[17px] size-8 flex justify-center items-center rounded-full text-white bg-teal-500 border-2 border-teal-500 hover:text-teal-500 hover:bg-white cursor-pointer">
            <FaRegHeart />
          </button>
          <button className="text-[17px] size-8 flex justify-center items-center rounded-full text-white bg-teal-500 border-2 border-teal-500 hover:text-teal-500 hover:bg-white cursor-pointer">
            <FaRegEye />
          </button>
        </div>
      </div>
      <div className="px-5 mt-5 bg-gradient-to-r from-white to-teal-50">
        <p className="flex items-center justify-between capitalize text-[12px] text-gray-500">
          <span className="bg-gray-100 rounded-full px-1">{brand}</span>
          <span className="bg-gray-100 rounded-full px-1 text-[10px]">
            {product.category}
          </span>
        </p>
        <h5
          onClick={() => navigate(`/singleProductPage/${product.id}`)}
          className="text-[16px] mt-2 mb-1 font-semibold line-clamp-1 text-teal-700 cursor-pointer hover:text-teal-500 duration-300"
          title={product.title}
        >
          {product.title}
        </h5>
        <ProductRating rating={product.rating} reviews={product.reviews} />
        <div className="flex items-center gap-3 my-1">
          <p className="text-teal-700 font-semibold text-xl">
            ${product.price}
          </p>
          <p className="line-through text-gray-500 text-[15px]">${original}</p>
        </div>
        {/* Add to cart button */}
        <button className="flex items-center justify-center my-3 border border-gray-300 w-full py-1 max-md:py-2 font-semibold cursor-pointer bg-teal-500 text-white capitalize text-[15px] hover:bg-teal-700 duration-300 rounded-md">
          <RiShoppingCartLine className="text-lg mr-2" />
          <span>Add to cart</span>
        </button>
        <div className="text-[13px] space-y-1 pb-3">
          <p>
            <span className="mr-2 text-teal-600 font-bold">✓</span>
            {product.shippingInformation}
          </p>
          <p>
            <span className="mr-2 text-teal-600 font-bold">✓</span>
            {product.returnPolicy}
          </p>
          <p>
            <span className="mr-2 text-teal-600 font-bold">✓</span>
            {product.warrantyInformation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
