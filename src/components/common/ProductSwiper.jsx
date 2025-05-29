import SectionHeader from "./SectionHeader";
import useFetchAllProducts from "../../hooks/useFetchAllProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

const ProductSwiper = ({ products, title, description }) => {
  const { products: allProducts, loading } = useFetchAllProducts();

  const filterProduct = allProducts.filter(
    (product) => product.category === products
  );

  if (loading) return <Loader />;
  return (
    <section className="mt-24">
      <SectionHeader title={title} description={description} />
      <div className="container mx-auto px-5">
        <Swiper
          className="testimonials-swiper"
          modules={[Autoplay, Pagination]}
          slidesPerGroup={1}
          slidesPerView={3}
          spaceBetween={40}
          loop={true}
          speed={2000}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            480: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
            1340: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
        >
          {filterProduct.map((product) => {
            return (
              <SwiperSlide>
                <div className="overflow-visible my-5 mx-2 ">
                  <ProductCard product={product} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSwiper;
