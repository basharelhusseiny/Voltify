import { motion } from "framer-motion";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import useScrollToTop from "../hooks/useScrollToTop";
import SectionHeader from "../components/common/SectionHeader";

const AboutUs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "CEO & Founder",
      image: "/images/users/user4.png",
      bio: "Tech enthusiast with 15+ years of experience in consumer electronics.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "CTO",
      image: "/images/users/user4.png",
      bio: "Former Apple engineer with a passion for creating intuitive user experiences.",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Head of Design",
      image: "/images/users/user4.png",
      bio: "Award-winning designer focused on creating beautiful, functional products.",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      position: "Customer Experience",
      image: "/images/users/user4.png",
      bio: "Dedicated to ensuring every customer has an amazing experience with our products.",
    },
  ];

  const companyValues = [
    {
      id: 1,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible in technology.",
    },
    {
      id: 2,
      title: "Quality",
      description:
        "Every product we offer undergoes rigorous testing to ensure the highest standards.",
    },
    {
      id: 3,
      title: "Sustainability",
      description:
        "We're committed to reducing our environmental impact through eco-friendly practices.",
    },
    {
      id: 4,
      title: "Customer First",
      description:
        "Your satisfaction is our top priority, with support available whenever you need it.",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="bg-gray-200 text-center py-14 uppercase ">
        <h1 className="text-4xl max-sm:text-3xl font-light tracking-wider ">
          About Voltify
        </h1>
        <div className="flex items-center justify-center mt-4 max-sm:mt-3 text-xs space-x-1">
          <Link to="/" className="hover:text-teal-600 duration-300">
            Home
          </Link>
          <IoIosArrowForward />
          <Link to="/shop" className="text-teal-600 duration-300">
            Shop
          </Link>
        </div>
      </div>

      {/* Our Story Section */}
      <motion.section
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img
                src="/images/Banner_33.webp"
                alt="Our Story"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-teal-700 mb-3">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-teal-500 mb-6 rounded-2xl"></div>
              <p className="text-gray-700 mb-4">
                Founded in 2020, Voltify began with a simple mission: to provide
                high-quality tech products that enhance people's lives. What
                started as a small operation has grown into a trusted name in
                consumer electronics.
              </p>
              <p className="text-gray-700 mb-6">
                We believe that great technology should be accessible to
                everyone. That's why we focus on creating products that combine
                innovation, quality, and affordability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Premium Quality Products",
                  "Worldwide Shipping",
                  "2-Year Warranty",
                  "24/7 Customer Support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-teal-500 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Company Values */}
      <motion.section
        className="bg-gray-50 py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <SectionHeader
          title="Our Values"
          description="These core principles guide everything we do at Voltify, from
              product development to customer service."
        />
        <div className="container mx-auto px-5 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value) => (
              <motion.div
                key={value.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-teal-500"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold text-teal-700 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-5 mt-10 bg-gradient-to-r from-teal-500 to-teal-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Products" },
              { number: "10k+", label: "Happy Customers" },
              { number: "15+", label: "Countries Served" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-10 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-5">
          <SectionHeader
            title="Meet Our Team"
            description="The passionate individuals behind Voltify who work tirelessly to
              bring you the best products."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg py-10 overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center"
                variants={fadeIn}
              >
                <div className="relative h-40 overflow-hidden bg-teal-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-md"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-teal-700">
                    {member.name}
                  </h3>
                  <p className="text-teal-500 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            Ready to Experience Voltify?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Browse our collection of premium tech products and find the perfect
            addition to your digital lifestyle.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
