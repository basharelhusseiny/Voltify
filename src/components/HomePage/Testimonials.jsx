import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SectionHeader from "../common/SectionHeader";
import "swiper/css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Verified Buyer",
      image: "users/user1.png",
      rating: 5,
      text: "I've been shopping with Voltify for over a year now, and I'm consistently impressed by their product quality and customer service.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Enthusiast",
      image: "users/user4.png",
      rating: 5,
      text: "As someone who's very particular about tech products, I can confidently say that Voltify offers some of the best electronics at competitive prices.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Regular Customer",
      image: "users/user2.png",
      rating: 4,
      text: "The user experience on Voltify is exceptional. The website is intuitive, the checkout process is smooth, and I love how they remember my preferences.",
    },
    {
      id: 4,
      name: "David Lee",
      role: "Frequent Shopper",
      image: "users/user3.png",
      rating: 5,
      text: "Voltify has become my go-to store for electronics. The quality of the products is top-notch and I appreciate their fast shipping.",
    },
    {
      id: 5,
      name: "Amina Yusuf",
      role: "Verified Buyer",
      image: "users/user5.png",
      rating: 4,
      text: "Great experience overall! Their customer service was very helpful when I had a question about a product. Will shop again!",
    },
    {
      id: 6,
      name: "Carlos Martinez",
      role: "Gadget Lover",
      image: "users/user6.png",
      rating: 5,
      text: "I always find the latest gadgets on Voltify. Prices are reasonable and the reviews really help with decision making.",
    },
    {
      id: 7,
      name: "Linda Nguyen",
      role: "Repeat Customer",
      image: "users/user3.png",
      rating: 4,
      text: "Voltify never disappoints. I’ve ordered multiple times and everything arrives on time and in perfect condition.",
    },
    {
      id: 8,
      name: "Omar Farouk",
      role: "Tech Blogger",
      image: "users/user4.png",
      rating: 5,
      text: "Excellent selection of electronics and accessories. I often recommend Voltify to my followers for their tech needs.",
    },
    {
      id: 9,
      name: "Julia Smith",
      role: "Happy Customer",
      image: "users/user2.png",
      rating: 5,
      text: "I had a great experience with Voltify! Easy checkout, fast delivery, and high-quality products. Highly recommended!",
    },
  ];

  return (
    <section className="mt-16">
      <SectionHeader
        title="What Our Customers Say"
        description="Real experiences from our valued customers"
      />
      <div className="mt-5">
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
                        {item.text}
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
    </section>
  );
};

export default Testimonials;
