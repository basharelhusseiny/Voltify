import { useRef, useState } from "react";
import { useSearchModalContext } from "../../context/SearchModalContext";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import SearchBar from "../Header/SearchBar";
import { useEffect } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const MobileSearchModal = () => {
  const { isSearchModalOpen, setIsSearchModalOpen } = useSearchModalContext();
  const [isAtTop, setIsAtTop] = useState(true);
  const searchRef = useRef(null);

  useLockBodyScroll(isSearchModalOpen);
  useClickOutside(searchRef, () => setIsSearchModalOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={searchRef}
      onClick={() => setIsSearchModalOpen(false)}
      className={`fixed z-50 left-0 top-0 bg-black/40 w-full h-screen duration-500 ${
        isSearchModalOpen
          ? isAtTop
            ? "top-[102px]"
            : "top-[64px]"
          : "-translate-y-full"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`border-t border-gray-300 bg-white p-10 max-sm:p-6 delay-150`}
      >
        <SearchBar />
      </div>
    </div>
  );
};

export default MobileSearchModal;
