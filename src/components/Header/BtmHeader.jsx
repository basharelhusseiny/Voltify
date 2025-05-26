import { useEffect, useRef, useState } from "react";
import MainLogo from "./MainLogo";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import UserActions from "./UserActions";

const BtmHeader = ({ navLinks }) => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 10 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={`fixed z-50 left-0 w-full h-[65px] shadow-lg bg-white duration-300 transition-all ${
        isSticky ? "top-0" : "top-[36px]"
      }`}
    >
      <div className="container mx-auto px-5">
        <div className="flex gap-2 items-center justify-between py-[13px] max-md:mt-1">
          <MainLogo />
          <div className="max-md:hidden">
            <SearchBar />
          </div>
          <Navbar navLinks={navLinks} />
          <UserActions />
        </div>
      </div>
    </div>
  );
};

export default BtmHeader;
