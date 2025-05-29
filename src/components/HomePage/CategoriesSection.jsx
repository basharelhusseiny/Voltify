import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionHeader from "../common/SectionHeader";
import useFetchCategories from "../../hooks/useFetchCategories";
import "swiper/css";
import Loader from "../common/Loader";
import { useNavigate } from "react-router";

const CategoriesSection = () => {
  const { allCategory, loading } = useFetchCategories();
  const navigate = useNavigate();

  if (loading) return <Loader />;
  return (
    <section>
      <div className="container mx-auto px-5 pt-6">
        <SectionHeader
          title="Featured Categories"
          description="Choose your necessary products from this feature categories."
        />

        {/* Swiperr */}
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
            {allCategory.map((category) => (
              <SwiperSlide key={category.slug}>
                <div
                  onClick={() => navigate(`/categoryPage/${category.slug}`)}
                  className="w-[140px] p-3 border-1 border-gray-300 hover:border-teal-500 cursor-pointer duration-300"
                >
                  <img
                    src={category.img}
                    alt={`${category.name} logo`}
                    className="w-full h-[120px] mx-auto hover:scale-125 duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/200x100/e2e8f0/64748b?text=${category.name}`;
                    }}
                  />
                  <div className="text-center mt-2">
                    <p
                      className="text-[15px] font-semibold text-teal-600 line-clamp-1"
                      title={category.name}
                    >
                      {category.name}
                    </p>
                    <p className="text-[12px] text-gray-600">
                      {category.count} items
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
