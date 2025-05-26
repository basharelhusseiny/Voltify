import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router";
import FeaturesSection from "./FeaturesSide";
import {
  FaArrowRight,
  FaShippingFast,
  FaHeadset,
  FaShieldAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  const heroSectionSwiper = [
    {
      id: 1,
      image: "Banner_17.webp",
      discount: "20% Off",
      name: "Drone",
      description:
        "Experience stunning aerial photography with our premium drone!",
      features: [
        "4K High-Resolution Camera",
        "Easy and Stable Control",
        "Up to 30-Minute Battery Life",
        "Convenient Carrying Case",
      ],
    },
    {
      id: 2,
      image: "Banner_09_fdb7443a-e6d7-4c4b-b3e6-71c14e19db7b.webp",
      discount: "15% Off",
      name: "VR Headset",
      description:
        "Immerse yourself in virtual reality with unmatched quality!",
      features: [
        "High-Definition Display",
        "Comfortable Fit",
        "Wide Field of View",
        "Compatible with Most Devices",
      ],
    },
    {
      id: 3,
      image: "Banner_33.webp",
      discount: "10% Off",
      name: "Wireless Headphones",
      description: "Enjoy crystal-clear sound with our stylish headphones!",
      features: [
        "Noise Cancellation",
        "Long-Lasting Battery",
        "Comfortable Ear Cushions",
        "Bluetooth 5.0 Connectivity",
      ],
    },
  ];

  const serviceFeatures = [
    {
      id: 1,
      icon: <FaShippingFast className="text-teal-600" size={24} />,
      title: "Free Shipping",
      description: "On all orders over $75",
    },
    {
      id: 2,
      icon: <FaHeadset className="text-teal-600" size={24} />,
      title: "24/7 Support",
      description: "Get help when you need it",
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-teal-600" size={24} />,
      title: "Secure Payment",
      description: "100% secure transactions",
    },
    {
      id: 4,
      icon: <FaMoneyBillWave className="text-teal-600" size={24} />,
      title: "Money-Back Guarantee",
      description: "30-day return policy",
    },
  ];
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-stretch gap-5">
        {/* Main Slider - Left Side */}
        <div className="w-full lg:w-4/6">
          <Swiper
            loop={true}
            speed={2000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="w-full h-[400px] sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden"
          >
            {heroSectionSwiper.map((slide) => {
              return (
                <SwiperSlide key={slide.id} className="relative">
                  <img
                    src={`/images/${slide.image}`}
                    alt={slide.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center">
                    <div className="text-white p-4 md:p-6 max-w-md">
                      <span className="inline-block bg-teal-600 text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-3">
                        {slide.discount}
                      </span>
                      <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
                        {slide.name}
                      </h2>
                      <p className="mb-2 md:mb-4 text-gray-100 font-semibold text-sm">
                        {slide.description}
                      </p>
                      <ul className="mb-3 md:mb-4 space-y-0 md:space-y-1">
                        {slide.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <span className="mr-2 text-lg text-teal-600 font-bold">
                              ✓
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div>
                        <Link
                          to="/shop"
                          className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white py-1.5 px-3 md:py-2 md:px-4 rounded-md text-sm transition-all duration-300"
                        >
                          Shop Now
                          <FaArrowRight className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* Right Side - Features */}
        <FeaturesSection serviceFeatures={serviceFeatures} />
      </div>
    </section>
  );
};

export default HeroSection;
