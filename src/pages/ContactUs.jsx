import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import useScrollToTop from "../hooks/useScrollToTop";
import SectionHeader from "../components/common/SectionHeader";

const ContactUs = () => {
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-teal-600" />,
      title: "Our Location",
      details: ["123 Tech Street, Silicon Valley", "California, United States"],
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-teal-600" />,
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (800) 900-566"],
    },
    {
      icon: <FaEnvelope className="text-2xl text-teal-600" />,
      title: "Email Address",
      details: ["support@voltify.com", "info@voltify.com"],
    },
    {
      icon: <FaClock className="text-2xl text-teal-600" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="bg-gray-200 text-center py-14 uppercase">
        <h1 className="text-4xl max-sm:text-3xl font-light tracking-wider">
          Contact Us
        </h1>
        <div className="flex items-center justify-center mt-4 max-sm:mt-3 text-xs space-x-1">
          <Link to="/" className="hover:text-teal-600 duration-300">
            Home
          </Link>
          <IoIosArrowForward />
          <Link to="/contact" className="text-teal-600 duration-300">
            Contact
          </Link>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <motion.section
        className="py-10 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-teal-700 mb-3">
                Send Us A Message
              </h2>
              <div className="w-20 h-1 bg-teal-500 mb-6 rounded-2xl"></div>
              <p className="text-gray-600 mb-6">
                Have a question or feedback? Fill out the form below and we'll
                get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-3xl font-semibold text-teal-700 mb-3">
                Find Us On Map
              </h2>
              <div className="w-20 h-1 bg-teal-500 mb-6 rounded-2xl"></div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1637309850935!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Voltify Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        className="pt-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <SectionHeader
          title="Get In Touch"
          description="We'd love to hear from you. Here's how you can reach us."
        />

        <div className="container mx-auto px-5 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-teal-500 text-center"
                variants={fadeIn}
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-teal-700 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-10 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-5">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Find answers to common questions about our products and services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and Apple Pay. All payments are securely processed.",
              },
              {
                question: "How long does shipping take?",
                answer:
                  "Domestic shipping typically takes 3-5 business days. International shipping can take 7-14 business days depending on the destination.",
              },
              {
                question: "Do you offer international shipping?",
                answer:
                  "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day return policy for most items. Products must be returned in their original packaging and in unused condition.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold text-teal-700 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="py-10 bg-gradient-to-r from-teal-500 to-teal-900 text-white">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Voltify?
          </h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-8">
            Browse our collection of premium tech products and find the perfect
            addition to your digital lifestyle.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-teal-700 font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg hover:bg-gray-100"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
