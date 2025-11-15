import { motion as Motion } from "framer-motion";
import { FaMedium } from "react-icons/fa";
import { FaLinkedin, FaYoutube, FaSquareXTwitter } from "react-icons/fa6"
import { BsSubstack } from "react-icons/bs"

export default function Contact() {
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
            <form className="space-y-6">
              <div className="gap-2 md:grid grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
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
                    className="w-full px-2 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white"
                    placeholder="Your last name"
                  />
                </div>
               
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
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
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white resize-none"
                  placeholder="Write details here..."
                ></textarea>
              </div>
              <Motion.button
                type="submit"
                className="w-fit-to-content bg-teal-600 text-white py-3 px-6 rounded-lg mt-3 hover:bg-teal-700 transition-colors font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(13,148,136,0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                Submit
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
    </section>
  );
}