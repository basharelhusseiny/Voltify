import { memo, useEffect, useRef, useState } from "react";
import { useMobileMenuContext } from "../../context/MobileMenuContext";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import useClickOutside from "../../hooks/useClickOutside";

const MobileMenu = ({ navLinks }) => {
  const { isMobMenuOpen, setIsMobMenuOpen } = useMobileMenuContext();
  const [isAtTop, setIsAtTop] = useState(true);
  const menuRef = useRef(null);

  useLockBodyScroll(isMobMenuOpen);
  useClickOutside(menuRef, () => setIsMobMenuOpen(false));

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={menuRef}
      onClick={() => setIsMobMenuOpen(false)}
      className={`fixed z-[49] left-0 bg-black/60 w-full h-[100dvh] duration-500 transition-all
            ${isAtTop ? "top-[102px]" : "top-[64px]"}
            ${isMobMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
         `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 h-full bg-white w-[280px] duration-500 transition-transform ${
          isMobMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="text-center my-32">
          <AnimatePresence>
            {isMobMenuOpen && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center justify-center gap-8"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.id} variants={itemVariants}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMobMenuOpen(false)}
                      className="hover:text-teal-600 font-semibold text-xl duration-300"
                    >
                      {link.link}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default memo(MobileMenu);
