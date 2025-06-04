import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { useSearchModalContext } from "../../context/SearchModalContext";
import { useMobileMenuContext } from "../../context/MobileMenuContext";
import CloseButton from "../common/CloseButton";
import { memo } from "react";

const UserActions = () => {
  const { isSearchModalOpen, setIsSearchModalOpen } = useSearchModalContext();
  const { isMobMenuOpen, setIsMobMenuOpen } = useMobileMenuContext();

  return (
    <div className="flex items-center gap-[11px]">
      {/* Search ..........................*/}
      <button
        onClick={() => {
          setIsSearchModalOpen(!isSearchModalOpen);
          setIsMobMenuOpen(false);
        }}
        className={`md:hidden hover:text-teal-600 cursor-pointer duration-300 ${
          isSearchModalOpen ? "text-teal-600" : "text-black"
        }`}
        aria-label="Search"
      >
        <BiSearch size={22} />
      </button>
      {/* Login...................... */}
      <button aria-label="User Login">
        <LuUser size={23} />
      </button>
      {/* Wishlist...................... */}
      <button aria-label="Wishlist">
        <FaRegHeart size={20} />
      </button>
      {/* Wishlist...................... */}
      <button aria-label="Shopping Cart">
        <RiShoppingCartLine size={22} />
      </button>
      {/* Mobile Menu */}
      {isMobMenuOpen ? (
        <div aria-label="Close Button">
          <CloseButton
            onClick={() => setIsMobMenuOpen(false)}
            isMobMenuOpen={isMobMenuOpen}
          />
        </div>
      ) : (
        <button
          aria-label="menu"
          onClick={() => {
            setIsMobMenuOpen(!isMobMenuOpen);
            setIsSearchModalOpen(false);
          }}
          className={`lg:hidden cursor-pointer hover:text-teal-600  duration-300 ${
            isMobMenuOpen ? "text-teal-600" : "text-black"
          }`}
        >
          <FiMenu size={25} />
        </button>
      )}
    </div>
  );
};

export default memo(UserActions);
