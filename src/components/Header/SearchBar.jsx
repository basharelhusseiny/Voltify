import { useState, useRef, memo } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import useFetchCategories from "../../hooks/useFetchCategories";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import useClickOutside from "../../hooks/useClickOutside";
import { useSearchModalContext } from "../../context/SearchModalContext";

const SearchBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const dropDownRef = useRef(null);
  const { allCategory } = useFetchCategories();
  const { setIsSearchModalOpen } = useSearchModalContext();

  useClickOutside(dropDownRef, () => setDropDown(false));

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { when: "afterChildren" },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex items-center justify-between border border-gray-300 py-[4px] px-1 rounded-full">
      {/* dropdown */}
      <div
        ref={dropDownRef}
        className="relative flex items-center gap-1 pr-2 max-sm:pr-2 border-r border-gray-300 whitespace-nowrap"
      >
        <button
          type="button"
          onClick={() => setDropDown(!dropDown)}
          className="px-2 max-sm:px-1 text-[13px] font-medium transition-colors cursor-pointer focus:relative"
        >
          All Categories
        </button>
        <button
          type="button"
          onClick={() => setDropDown(!dropDown)}
          className="py-2 text-sm max-sm:text-[10px] font-medium transition-colors cursor-pointer focus:relative"
          aria-label="Menu"
        >
          <IoIosArrowDown />
        </button>
        <AnimatePresence>
          {dropDown && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="menu"
              className="min-scrollbar absolute left-0 top-8 z-auto w-44 max-h-[350px] overflow-y-auto rounded border border-gray-300 bg-white shadow-sm text-gray-600 text-sm"
            >
              {allCategory.map((category) => (
                <motion.div variants={itemVariants} key={category.slug}>
                  <Link
                    to={`/categoryPage/${category.slug}`}
                    onClick={() => {
                      setIsSearchModalOpen(false);
                      setDropDown(false);
                    }}
                    className="block px-3 py-2 border-b border-gray-300 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-black"
                    role="menuitem"
                  >
                    {category.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for item..."
        className="outline-0 flex-grow lg:w-34 xl:w-fit mx-5 text-sm text-black/70 placeholder:text-[13px] placeholder:text-black/40 "
      />
      <BiSearch className="text-black pr-2" size={25} />
    </div>
  );
};

export default memo(SearchBar);
