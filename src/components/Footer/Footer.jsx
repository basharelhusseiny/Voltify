import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="mt-14">
      <div className="bg-gray-900 text-gray-300 pt-12 pb-3">
        <div className="container mx-auto px-5">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6 flex items-center">
                <img
                  src="/images/image.jpg"
                  alt="Voltify"
                  className="size-10 mr-3"
                />
                <h3 className="text-3xl font-bold text-white">VOLTIFY</h3>
              </div>
              <p className="mb-6 text-gray-400 leading-relaxed">
                Your one-stop destination for premium electronics and tech
                gadgets. We bring innovation to your doorstep with unbeatable
                prices and exceptional service.
              </p>
              <div className="flex space-x-3 mb-6">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-600 text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-600 text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-600 text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-600 text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-600 text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-lg px-4 py-2"
                >
                  <FaApple className="text-white text-xl mr-2" />
                  <div>
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-lg px-4 py-2"
                >
                  <FaGooglePlay className="text-white text-xl mr-2" />
                  <div>
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutUs"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactUs"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Customer Service */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                Customer Service
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Order Tracking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> FAQ
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-teal-500" />
                  <span>123 Tech Street, Digital City, 10001, USA</span>
                </li>
                <li className="flex items-center">
                  <FiPhone className="mr-3 text-teal-500" />
                  <span>+1 (800) 900-566</span>
                </li>
                <li className="flex items-center">
                  <FiMail className="mr-3 text-teal-500" />
                  <span>support@voltify.com</span>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-white font-medium mb-2">Business Hours</h4>
                <p className="text-sm text-gray-400">
                  Monday - Friday: 9:00 AM - 8:00 PM
                  <br />
                  Saturday: 10:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Payment Methods */}
          <div className="border-t border-gray-800 pt-5 pb-1">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h4 className="text-sm font-medium text-white mb-3">
                  We Accept:
                </h4>
                <div className="flex space-x-3">
                  <img
                    src="/public/images/footer_img.png"
                    alt="Apple Pay"
                    className="h-8 bg-white rounded px-1"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/60x30/white/gray?text=ApplePay";
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                <img
                  src="/images/image.jpg"
                  alt="Secure"
                  className="h-6 mr-2"
                />
                <div>
                  <span className="text-sm block">Secure Payments</span>
                  <span className="text-xs text-gray-400">
                    Protected by SSL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-3">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left text-gray-400">
              &copy; 2025 Voltify. All rights reserved.
            </p>
            <div className="mt-3 md:mt-0">
              <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
