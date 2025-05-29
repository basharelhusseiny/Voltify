import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const NewArrivals = () => {
  const newArrivals = [
    {
      id: 1,
      new_arrival: true,
      title: "Curved TV",
      features: "4K Ultra HD, Smart TV, Sleek Design",
      discount: "15%",
      img: "Banner3.webp",
      color: "from-blue-900/70 to-blue-600/70",
      buttonText: "Shop TVs",
    },
    {
      id: 2,
      new_arrival: true,
      title: "Xbox Core Wireless Controller",
      features: "Ergonomic Design, Replacement Kit D-pad ABXY Keys",
      price: "Starting from $199",
      img: "Banner_4.webp",
      color: "from-green-900/70 to-green-600/70",
      buttonText: "Shop Gaming",
    },
    {
      id: 3,
      new_arrival: true,
      title: "Apple Days",
      features: "Hot devices, Latest trending",
      price: "Starting from $899",
      img: "Banner1.webp",
      color: "from-purple-900/70 to-purple-600/70",
      buttonText: "Shop Apple",
    },
    {
      id: 4,
      new_arrival: true,
      title: "Tables Collection",
      features: "Fast Charging, Lightweight and Portable, Dual Port",
      discount: "20%",
      img: "Banner2.webp",
      color: "from-teal-900/70 to-teal-600/70",
      buttonText: "Shop Tables",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section>
      <SectionHeader
        title="New Arrivals"
        description="Discover our latest products and exclusive deals"
      />
      <div className="container mx-auto px-5 pt-6 pb-14 bg-gradient-to-b from-white to-teal-100 rounded-2xl">
        <motion.div
          className="mt-10 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {newArrivals.map((item) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-xl shadow-lg group h-[320px] sm:h-[350px]"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={`/images/${item.img}`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 transition-opacity duration-300 group-hover:opacity-80`}
                ></div>
              </div>
              <div className="absolute top-4 left-4 bg-white text-teal-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                NEW ARRIVAL
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white font-medium mb-4">
                  {item.features}
                </p>
                {item.price && (
                  <p className="text-lg font-semibold mb-4">{item.price}</p>
                )}
                {item.discount && (
                  <div className="flex items-center mb-4">
                    <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-md mr-2">
                      SAVE {item.discount}
                    </span>
                    <span className="font-semibold text-white text-sm">
                      Limited time offer
                    </span>
                  </div>
                )}
                <motion.button
                  className="font-semibold mt-2 cursor-pointer flex items-center justify-between bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-colors duration-300 group/btn"
                  whileTap={{ scale: 0.97 }}
                >
                  <span>{item.buttonText}</span>
                  <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;
