import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductRating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center text-yellow-500 gap-[1px]">
      {rating >= 1 ? (
        <FaStar />
      ) : rating >= 0.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar className="text-gray-500" />
      )}
      {/* ............................................... */}
      {rating >= 2 ? (
        <FaStar />
      ) : rating >= 1.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar className="text-gray-500" />
      )}
      {/* ............................................... */}
      {rating >= 3 ? (
        <FaStar />
      ) : rating >= 2.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar className="text-gray-500" />
      )}
      {/* ............................................... */}
      {rating >= 4 ? (
        <FaStar />
      ) : rating >= 3.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar className="text-gray-500" />
      )}
      {/* ............................................... */}
      {rating >= 5 ? (
        <FaStar />
      ) : rating >= 4.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar className="text-gray-500" />
      )}
      {reviews && (
        <span className="text-gray-500 text-sm ml-1">({reviews.length})</span>
      )}
    </div>
  );
};

export default ProductRating;
