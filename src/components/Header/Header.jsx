import BtmHeader from "./BtmHeader";
import MobileMenu from "./MobileMenu";
import TopHeader from "./TopHeader";

const Header = () => {
  const navLinks = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "Shop", path: "/shop" },
    { id: 3, link: "Blog", path: "/blog" },
    { id: 4, link: "About us", path: "/aboutUs" },
    { id: 5, link: "Contact us", path: "/contactUs" },
  ];
  return (
    <header>
      <TopHeader />
      <BtmHeader navLinks={navLinks} />
      <MobileMenu navLinks={navLinks} />
    </header>
  );
};

export default Header;
