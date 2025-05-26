import { useParams } from "react-router";
import useFetchAllProducts from "../hooks/useFetchAllProducts";
import Loader from "../components/common/Loader";
import { useEffect, useRef, useState } from "react";
import ProductRating from "../components/common/ProductRating";

const SingleProductPage = () => {
  const { id } = useParams();
  const imgRef = useRef();
  const { products, loading, error } = useFetchAllProducts();
  const product = products.find((product) => product.id === +id);
  const [selectedImg, setSelectedImg] = useState(null);

  function calculateOriginalPrice(discountedPrice, discountPercentage) {
    const originalPrice = discountedPrice / (1 - discountPercentage / 100);
    return originalPrice.toFixed(2);
  }
  const original = calculateOriginalPrice(
    product?.price,
    product?.discountPercentage
  );

  useEffect(() => {
    if (product && product.images?.length) {
      setSelectedImg(product.images[0]);
    }
  }, [product]);

  if (loading) return <Loader />;
  return (
    <section>
      <div className="flex gap-7">
        {/* Left Side Images  */}
        <div className="flex-2/6">
          <div className="bg-teal-100 rounded-lg">
            <img
              ref={imgRef}
              src={product?.images[0]}
              alt={product?.title}
              className="mx-auto py-5 lg:mb-5  h-[350px] object-contain"
            />
          </div>
          <div className="w-full grid grid-cols-3 gap-5">
            {product?.images.map((img, index) => (
              <img
                key={{ index }}
                src={img}
                alt={`img ${index + 1}`}
                className={`p-2 lg:h-[110px] border-2 cursor-pointer object-contain rounded-lg duration-300 ${
                  selectedImg === img ? "border-teal-500" : "border-gray-300"
                }`}
                onClick={() => {
                  imgRef.current.src = img;
                  setSelectedImg(img);
                }}
              />
            ))}
          </div>
        </div>
        {/* Right Side Info */}
        <div className="flex-4/6">
          <p>{product?.category}</p>
          <h5>{product?.title}</h5>
          <ProductRating rating={product?.rating} reviews={product?.reviews} />
          <div className="flex items-center">
            <p>${product?.price}</p>
            <p className="line-through">${original}</p>
            <p>{product?.discountPercentage}%OFF</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
