import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Validate phone (optional)
    if (
      formData.phone &&
      !/^\d{10,}$/.test(formData.phone.replace(/[^0-9]/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Validate terms agreement
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      // For now, just show an alert
      alert("Registration successful! You can now login.");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      });
    }
  };

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-10 md:py-16">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Form */}
          <div className="w-full md:w-3/5 p-6 md:p-10">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Create an Account
              </h2>
              <p className="text-gray-600 mb-6">
                Join Voltify for exclusive deals and a seamless shopping
                experience
              </p>
            </motion.div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* First Name */}
                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className={`w-full pl-10 pr-3 py-2 border ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </motion.div>

                {/* Last Name */}
                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className={`w-full pl-10 pr-3 py-2 border ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </motion.div>
              </div>

              {/* Email */}
              <motion.div className="mb-4" variants={itemVariants}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full pl-10 pr-3 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div className="mb-4" variants={itemVariants}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (optional)"
                    className={`w-full pl-10 pr-3 py-2 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </motion.div>

              {/* Password */}
              <motion.div className="mb-4" variants={itemVariants}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className={`w-full pl-10 pr-10 py-2 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-400" />
                    ) : (
                      <FaEye className="text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </motion.div>

              {/* Confirm Password */}
              <motion.div className="mb-6" variants={itemVariants}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className={`w-full pl-10 pr-10 py-2 border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash className="text-gray-400" />
                    ) : (
                      <FaEye className="text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </motion.div>

              {/* Terms and Conditions */}
              <motion.div className="mb-6" variants={itemVariants}>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-teal-600 hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-teal-600 hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
                {errors.agreeTerms && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.agreeTerms}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300"
                >
                  Create Account
                </button>
              </motion.div>

              {/* Social Login */}
              <motion.div className="mt-6" variants={itemVariants}>
                <div className="relative flex items-center justify-center">
                  <div className="border-t border-gray-300 w-full"></div>
                  <div className="bg-white px-4 text-sm text-gray-500 absolute">
                    Or continue with
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button
                    type="button"
                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <FaGoogle className="text-red-500 mr-2" />
                    <span>Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <FaFacebookF className="text-blue-600 mr-2" />
                    <span>Facebook</span>
                  </button>
                </div>
              </motion.div>

              {/* Login Link */}
              <motion.div className="mt-6 text-center" variants={itemVariants}>
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    Log In
                  </Link>
                </p>
              </motion.div>
            </form>
          </div>

          {/* Right side - Image and Benefits */}
          <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-teal-500 to-teal-700 p-10 text-white">
            <motion.div
              className="h-full flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Benefits of Joining</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">✓</span>
                    <span>Exclusive deals and discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">✓</span>
                    <span>Faster checkout process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">✓</span>
                    <span>Order tracking and history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">✓</span>
                    <span>Special member-only offers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">✓</span>
                    <span>Early access to new products</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-lg font-medium">New Customer Special</p>
                  <p className="text-sm opacity-90 mt-1">
                    Sign up today and get 10% off your first order!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
