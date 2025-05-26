import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionHeader from "../common/SectionHeader";
import useFetchAllProducts from "../../hooks/useFetchAllProducts";
import useFetchCategories from "../../hooks/useFetchCategories";
import "swiper/css";
import Loader from "../common/Loader";

const CategoriesSection = () => {
  const { products, loading: loadingProducts } = useFetchAllProducts();
  const { categories, loading: loadingCategories } = useFetchCategories();

  const category = categories?.map((category) => {
    const count = products?.filter(
      (product) => product.category === category.slug
    ).length;
    const img = products?.find(
      (product) => product.category === category.slug
    )?.thumbnail;
    return { ...category, count, img };
  });

  return (
    <div>
      <SectionHeader
        title="Featured Categories"
        description="Choose your necessary products from this feature categories."
      />

      {/* Swiperr */}
      {loadingProducts || loadingCategories ? (
        <Loader />
      ) : (
        <div className="my-6">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
              1340: { slidesPerView: 8 },
            }}
          >
            {category.map((item) => (
              <SwiperSlide key={item.slug}>
                <div className="w-[140px] p-3 border-1 border-gray-300 hover:border-teal-500 cursor-pointer duration-300">
                  <img
                    src={item.img}
                    alt={`${item.name} logo`}
                    className="w-full h-[120px] mx-auto hover:scale-125 duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/200x100/e2e8f0/64748b?text=${item.name}`;
                    }}
                  />
                  <div className="text-center mt-2">
                    <p
                      className="text-[15px] font-semibold text-teal-600 line-clamp-1"
                      title={item.name}
                    >
                      {item.name}
                    </p>
                    <p className="text-[12px] text-gray-600">
                      {item.count} items
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default CategoriesSection;
