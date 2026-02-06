import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaMedium, FaCheck } from "react-icons/fa";
import { FaLinkedin, FaYoutube, FaSquareXTwitter } from "react-icons/fa6"
import { BsSubstack } from "react-icons/bs"

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-sm w-full shadow-2xl text-center border border-teal-100 dark:border-teal-900/30"
          >
            <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="text-teal-600 dark:text-teal-400 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Thank you for reaching out. We've received your message and will get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-teal-600/20"
            >
              Close
            </button>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="min-h-screen p-4 bg-[#EDFAFA] text-black dark:bg-gray-950 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 border-t-2 border-dashed border-teal-300 p-6 lg:grid-cols-[1fr_2fr] gap-12">
          {/* Contact Information */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Motion.h3
                className="text-2xl font-semibold mb-4 leading-normal text-gray-900 dark:text-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Contact Us
              </Motion.h3>
              <Motion.p
                className="text-gray-600 dark:text-gray-300 text-16px leading-normal"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Do you have questions? <br />
                Do you want to partner with us? <br />
                Interested in one of our programs? <br />
              </Motion.p>
              <Motion.p
                className="text-gray-600 text-16px leading-normal"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <a href="mailto:hello@thegirlleadproject.org" className="dark:text-gray-300 hover:underline">
                  hello@thegirlleadproject.org
                </a>
              </Motion.p>
            </div>
            <Motion.div
              className="flex items-center text-xl text-gray-800 space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Motion.span
                className="custom-shadow p-3 border-white rounded-full bg-white hover:bg-gray-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="http://www.linkedin.com/company/girlleadproject/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </Motion.span>
              <Motion.span
                className="custom-shadow p-3 rounded-full bg-white hover:bg-gray-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://medium.com/the-girllead-project" target="_blank" rel="noopener noreferrer">
                  <FaMedium />
                </a>
              </Motion.span>
              <Motion.span
                className="custom-shadow p-3 rounded-full bg-white hover:bg-gray-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://www.youtube.com/@girlleadproject" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </Motion.span>
              <Motion.span
                className="custom-shadow p-3 rounded-full bg-white hover:bg-gray-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://twitter.com/girlleadproject" target="_blank" rel="noopener noreferrer">
                  <FaSquareXTwitter />
                </a>
              </Motion.span>
              <Motion.span
                className="custom-shadow p-3 rounded-full bg-white hover:bg-gray-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://substack.com/@girlleadproject" target="_blank" rel="noopener noreferrer">
                  <BsSubstack />
                </a>
              </Motion.span>
            </Motion.div>
          </Motion.div>

          {/* Contact Form */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-transparent dark:bg-transparent"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="gap-2 md:grid grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-2 py-3 border border-gray-300 dark:border-gray-700 rounded-lg outline:none focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-2 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white"
                    placeholder="Your last name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Add your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-2 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-2 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white"
                    placeholder="Your subject here"
                  />
                </div>

              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white resize-none"
                  placeholder="Write details here..."
                ></textarea>
              </div>
              <Motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-fit-to-content bg-teal-600 text-white py-3 px-6 rounded-lg mt-3 hover:bg-teal-700 transition-colors font-medium flex items-center justify-center min-w-[120px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={!isSubmitting ? { scale: 1.05, boxShadow: "0 5px 15px rgba(13,148,136,0.3)" } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Submit'}
              </Motion.button>
            </form>
          </Motion.div>

        </div>

        {/* Footer bottom */}
        <Motion.div
          className="flex text-gray-600 justify-center text-base items-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          All rights reserved, GirlLEAD Talent Accelerator, 2025
        </Motion.div>
      </div>

      <SuccessModal isOpen={isSubmitted} onClose={() => setIsSubmitted(false)} />
    </section>
  );
}
