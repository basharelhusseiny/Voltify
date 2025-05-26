import { motion } from "framer-motion";
import { Link } from "react-router";

const FeaturesSection = ({ serviceFeatures }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: "#0b7268",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="w-full lg:w-2/6 bg-white rounded-lg shadow-lg p-4 lg:p-5 xl:p-6 flex flex-col justify-between lg:h-[450px] right-features-panel"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div>
        <motion.h2
          className="text-lg md:text-xl xl:text-2xl font-bold mb-2 lg:mb-3 text-gray-800 border-b border-gray-400 pb-2 features-title"
          variants={itemVariants}
        >
          Why Choose Voltify?
        </motion.h2>
        <div className="grid grid-cols-2 gap-2 lg:gap-3 features-grid">
          {serviceFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              className="flex items-start bg-gray-50 p-1.5 lg:p-2 rounded-lg hover:shadow-md transition-shadow duration-300 feature-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <div className="mr-1.5 lg:mr-2 mt-0.5 icon-wrapper">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs lg:text-sm">
                  {feature.title}
                </h3>
                <p className="text-[10px] lg:text-xs text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="mt-3 pt-2 border-t border-gray-400 w-full"
        variants={itemVariants}
      >
        <div className="bg-gradient-to-r from-teal-500 to-teal-800 p-3 rounded-lg text-white special-offer">
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-3">
              <h3 className="font-semibold text-sm">New Customer Special</h3>
              <p className="text-xs text-white/90">
                Sign up today and get 10% off your first order!
              </p>
            </div>
            <motion.div
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Link
                to="/register"
                className="inline-block text-center bg-white text-teal-700 font-medium py-1.5 px-3 rounded text-xs special-offer-button"
              >
                Register Now
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeaturesSection;
