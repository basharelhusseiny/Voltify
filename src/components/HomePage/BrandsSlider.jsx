import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BrandsSlider = () => {
  const brandLogos = [
    { id: 1, name: "Apple", logo: "apple.png" },
    { id: 2, name: "Microsoft", logo: "msft_logo_print.png" },
    { id: 3, name: "Samsung", logo: "samsung.png" },
    { id: 4, name: "Huawei", logo: "huawei-logo.png" },
    { id: 5, name: "Nokia", logo: "nokia.png" },
    { id: 6, name: "Sony", logo: "sony.png" },
    { id: 7, name: "LG", logo: "lg.png" },
    { id: 8, name: "Dell", logo: "dell_logo.png" },
    { id: 9, name: "HP", logo: "hp.PNG" },
    { id: 10, name: "Lenovo", logo: "lenovo.png" },
  ];
  return (
    <div className="my-5">
      <Swiper
        className="brands-swiper"
        modules={[Autoplay]}
        slidesPerView="auto"
        loop={true}
        speed={2500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 3 },
          480: { slidesPerView: 4 },
          640: { slidesPerView: 5 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 9 },
        }}
      >
        {brandLogos.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="h-[100px] flex items-center justify-center px-4">
              <img
                src={`/images/brands/${brand.logo}`}
                alt={`${brand.name} logo`}
                className="w-[100px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/200x100/e2e8f0/64748b?text=${brand.name}`;
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandsSlider;
