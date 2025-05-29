import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SectionHeader from "../common/SectionHeader";
import "swiper/css";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="mt-16">
      <SectionHeader
        title="What Our Customers Say"
        description="Real experiences from our valued customers"
      />
      <div className="mt-5">
        <div className="container mx-auto px-5 pt-6">
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
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
          >
            {testimonials.map((item) => {
              return (
                <SwiperSlide className="overflow-visible">
                  <div
                    key={item.id}
                    className="relative h-[280px] min-h-full text-center overflow-visible bg-gradient-to-tl from-white to-teal-100 p-5 pt-12 rounded-2xl mt-12"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <img
                        loading="lazy"
                        src={`/images/${item.image}`}
                        alt={item.name}
                        className="size-21 rounded-full border-6 outline-10 outline-white border-teal-500"
                      />
                    </div>
                    <div className="h-full flex justify-between flex-col mt-2">
                      <div>
                        <p className="text-lg font-semibold">{item.name}</p>
                        <p className="text-gray-700 text-sm">{item.role}</p>
                        <p className="mt-3 text-[15px] tracking-wide text-gray-600 italic">
                          {item.comment}
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t-1 border-gray-400 mt-5 pt-2 text-sm text-gray-800">
                        <p>Jan 20, 2025</p>
                        <p className="text-gray-500">03:45 PM</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
