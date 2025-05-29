import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobileSearchModal from "../components/Modals/MobileSearchModal";
import useScrollToTop from "../hooks/useScrollToTop";

const Layout = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <Outlet />
      </main>
      <Footer />
      <MobileSearchModal />
    </div>
  );
};

export default Layout;
