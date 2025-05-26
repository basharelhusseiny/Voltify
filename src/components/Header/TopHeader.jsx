import { useState, useRef, memo } from "react";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone, FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useClickOutside from "../../hooks/useClickOutside";

const TopHeader = () => {
  const [dropDownLang, setDropDownLang] = useState(false);
  const [dropDownCurrency, setDropDownCurrency] = useState(false);
  const langRef = useRef(null);
  const currencyRef = useRef(null);
  const [selectedLang, setSelectedLang] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  useClickOutside(langRef, () => setDropDownLang(false));
  useClickOutside(currencyRef, () => setDropDownCurrency(false));

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-900 text-white p-2 shadow-md">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <FiPhone className="mr-1.5 text-teal-300" size={14} />
              <span className="hidden sm:inline">Call us:</span>
              <a
                href="tel:+18009000566"
                className="ml-1 hover:text-teal-200 transition-colors"
              >
                +1 800 900 566
              </a>
            </div>
            <div className="hidden md:flex items-center">
              <FiMail className="mr-1.5 text-teal-300" size={14} />
              <a
                href="mailto:support@voltify.com"
                className="hover:text-teal-200 transition-colors"
              >
                support@voltify.com
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div className="hidden lg:block text-center text-sm font-medium">
            <span className="bg-white/25 px-3 py-1 rounded-full">
              Free shipping on all orders over{" "}
              <span className="text-white font-bold">$75.00</span>
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 text-sm">
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="#"
                className="hover:text-teal-200 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="hover:text-teal-200 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="#"
                className="hover:text-teal-200 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#"
                className="hover:text-teal-200 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>

            {/* Quick Links */}
            <div className="hidden xl:flex items-center space-x-3">
              <Link
                to="/aboutUs"
                className="hover:text-teal-200 transition-colors"
              >
                About Us
              </Link>
              <span className="text-teal-400">|</span>
              <Link
                to="/contactUs"
                className="hover:text-teal-200 transition-colors"
              >
                Contact
              </Link>
              <span className="text-teal-400">|</span>
              <Link
                to="/register"
                className="hover:text-teal-200 transition-colors"
              >
                Register
              </Link>
            </div>

            {/* Currency Dropdown */}
            <div className="relative z-[53]" ref={currencyRef}>
              <button
                onClick={() => {
                  setDropDownCurrency(!dropDownCurrency);
                  setDropDownLang(false);
                }}
                className="flex items-center hover:text-teal-200 transition-colors cursor-pointer"
              >
                {selectedCurrency}
                <IoIosArrowDown
                  className={`ml-1 transition-transform duration-200 ${
                    dropDownCurrency ? "rotate-180" : ""
                  }`}
                  size={14}
                />
              </button>
              <AnimatePresence>
                {dropDownCurrency && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute z-50 right-0 mt-2 w-24 bg-white rounded-md shadow-lg overflow-hidden"
                  >
                    <div className="py-1">
                      {["USD", "EUR", "GBP", "JPY", "CAD"].map((currency) => (
                        <button
                          key={currency}
                          onClick={() => {
                            setSelectedCurrency(currency);
                            setDropDownCurrency(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm cursor-pointer ${
                            selectedCurrency === currency
                              ? "bg-teal-50 text-teal-700 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {currency}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Dropdown */}
            <div className="relative z-[53]" ref={langRef}>
              <button
                onClick={() => {
                  setDropDownLang(!dropDownLang);
                  setDropDownCurrency(false);
                }}
                className="flex items-center hover:text-teal-200 transition-colors cursor-pointer"
              >
                {selectedLang}
                <IoIosArrowDown
                  className={`ml-1 transition-transform duration-200 ${
                    dropDownLang ? "rotate-180" : ""
                  }`}
                  size={14}
                />
              </button>
              <AnimatePresence>
                {dropDownLang && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute z-50 right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden"
                  >
                    <div className="py-1">
                      {[
                        { name: "English", code: "en" },
                        { name: "Français", code: "fr" },
                        { name: "Español", code: "es" },
                        { name: "Deutsch", code: "de" },
                        { name: "العربية", code: "ar" },
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLang(lang.name);
                            setDropDownLang(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm cursor-pointer ${
                            selectedLang === lang.name
                              ? "bg-teal-50 text-teal-700 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TopHeader);
