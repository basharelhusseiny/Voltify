import ProductRating from "../common/ProductRating";
import SectionHeader from "../common/SectionHeader";

const CustomerReviews = ({ reviews }) => {
  return (
    <section className="mt-16">
      <SectionHeader
        title="What Our Customers Say"
        description="Real experiences from our valued customers"
      />
      <div className="mb-16 mt-5">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-5">
            {reviews?.map((review) => {
              return (
                <div
                  key={review?.reviewerName}
                  className="relative h-[180px] min-h-full text-center overflow-visible bg-gradient-to-tl from-white to-teal-100 p-5 pt-12 rounded-2xl mt-12"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <img
                      loading="lazy"
                      src={`/images/users/user4.png`}
                      alt={review?.reviewerName}
                      className="size-21 rounded-full border-6 outline-10 outline-white border-teal-500"
                    />
                  </div>
                  <div className="h-full flex justify-between flex-col mt-2">
                    <div>
                      <p className="text-lg font-semibold">
                        {review?.reviewerName}
                      </p>
                      <p
                        className="text-sm font-medium text-gray-500 line-clamp-1"
                        title={review?.reviewerEmail}
                      >
                        {review?.reviewerEmail}
                      </p>
                      <div className="flex justify-center mt-2">
                        <ProductRating rating={review?.rating} />
                      </div>
                      <p className="mt-5 text-[15px] tracking-wide text-gray-600 italic">
                        {review?.comment}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t-1 border-gray-400 mt-5 pt-2 text-sm text-gray-800">
                      <p>Jan 20, 2025</p>
                      <p className="text-gray-500">03:45 PM</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
