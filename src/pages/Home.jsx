import BrandsSlider from "../components/HomePage/BrandsSlider";
import CategoriesSection from "../components/HomePage/CategoriesSection";
import HeroSection from "../components/HomePage/HeroSection";
import NewArrivals from "../components/HomePage/NewArrivals";
import Testimonials from "../components/HomePage/Testimonials";
import TrendingProducts from "../components/HomePage/TrendingProducts";

const Home = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Verified Buyer",
      image: "users/user1.png",
      rating: 5,
      comment:
        "I've been shopping with Voltify for over a year now, and I'm consistently impressed by their product quality and customer service.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Enthusiast",
      image: "users/user4.png",
      rating: 5,
      comment:
        "As someone who's very particular about tech products, I can confidently say that Voltify offers some of the best electronics at competitive prices.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Regular Customer",
      image: "users/user2.png",
      rating: 4,
      comment:
        "The user experience on Voltify is exceptional. The website is intuitive, the checkout process is smooth, and I love how they remember my preferences.",
    },
    {
      id: 4,
      name: "David Lee",
      role: "Frequent Shopper",
      image: "users/user3.png",
      rating: 5,
      comment:
        "Voltify has become my go-to store for electronics. The quality of the products is top-notch and I appreciate their fast shipping.",
    },
    {
      id: 5,
      name: "Amina Yusuf",
      role: "Verified Buyer",
      image: "users/user5.png",
      rating: 4,
      comment:
        "Great experience overall! Their customer service was very helpful when I had a question about a product. Will shop again!",
    },
    {
      id: 6,
      name: "Carlos Martinez",
      role: "Gadget Lover",
      image: "users/user6.png",
      rating: 5,
      comment:
        "I always find the latest gadgets on Voltify. Prices are reasonable and the reviews really help with decision making.",
    },
    {
      id: 7,
      name: "Linda Nguyen",
      role: "Repeat Customer",
      image: "users/user3.png",
      rating: 4,
      comment:
        "Voltify never disappoints. I’ve ordered multiple times and everything arrives on time and in perfect condition.",
    },
    {
      id: 8,
      name: "Omar Farouk",
      role: "Tech Blogger",
      image: "users/user4.png",
      rating: 5,
      comment:
        "Excellent selection of electronics and accessories. I often recommend Voltify to my followers for their tech needs.",
    },
    {
      id: 9,
      name: "Julia Smith",
      role: "Happy Customer",
      image: "users/user2.png",
      rating: 5,
      comment:
        "I had a great experience with Voltify! Easy checkout, fast delivery, and high-quality products. Highly recommended!",
    },
  ];

  return (
    <section>
      <HeroSection />
      <BrandsSlider />
      <CategoriesSection />
      <TrendingProducts />
      <NewArrivals />
      <Testimonials testimonials={testimonials} />
    </section>
  );
};

export default Home;
