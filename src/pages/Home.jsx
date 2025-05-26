import BrandsSlider from "../components/HomePage/BrandsSlider";
import CategoriesSection from "../components/HomePage/CategoriesSection";
import HeroSection from "../components/HomePage/HeroSection";
import NewArrivals from "../components/HomePage/NewArrivals";
import Testimonials from "../components/HomePage/Testimonials";
import TrendingProducts from "../components/HomePage/TrendingProducts";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <BrandsSlider />
      <CategoriesSection />
      <TrendingProducts />
      <NewArrivals />
      <Testimonials />
    </section>
  );
};

export default Home;
