import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaMedium, FaCheck } from "react-icons/fa";
import { FaLinkedin, FaYoutube, FaSquareXTwitter } from "react-icons/fa6"
import { BsSubstack } from "react-icons/bs"
import Button from "./common/Button";

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-mute/50 backdrop-blur-sm">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-bg-mute rounded-2xl p-8 max-w-sm w-full shadow-2xl text-center border border-border-soft"
          >
            <div className="w-20 h-20 bg-bg-soft rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="text-brand-primary text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-text-main mb-2">Message Sent!</h2>
            <p className="text-text-muted mb-8">
              Thank you for reaching out. We've received your message and will get back to you shortly.
            </p>
            <Button
              onClick={onClose}
              variant="primary"
              className="w-full"
            >
              Close
            </Button>
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
    <section className="min-h-screen p-4 bg-bg-soft text-text-main transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 border-t-2 border-dashed border-brand-primary p-6 lg:grid-cols-[1fr_2fr] gap-12">
          {/* Contact Information */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Motion.h3
                className="text-2xl font-semibold mb-4 leading-normal text-text-main"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Contact Us
              </Motion.h3>
              <Motion.p
                className="text-text-muted text-base leading-normal"
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
                className="text-text-muted text-base leading-normal"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <a href="mailto:hello@thegirlleadproject.org" className="hover:underline text-brand-primary">
                  hello@thegirlleadproject.org
                </a>
              </Motion.p>
            </div>
            <div
              className="flex items-center text-xl text-text-main space-x-3"
            >
              <Button
                href="http://www.linkedin.com/company/girlleadproject/"
                variant="icon"
                icon={FaLinkedin}
                className="bg-bg-white custom-shadow"
                aria-label="LinkedIn"
              />
              <Button
                href="https://medium.com/the-girllead-project"
                variant="icon"
                icon={FaMedium}
                className="bg-bg-white custom-shadow"
                aria-label="Medium"
              />
              <Button
                href="https://www.youtube.com/@girlleadproject"
                variant="icon"
                icon={FaYoutube}
                className="bg-bg-white custom-shadow"
                aria-label="YouTube"
              />
              <Button
                href="https://twitter.com/girlleadproject"
                variant="icon"
                icon={FaSquareXTwitter}
                className="bg-bg-white custom-shadow"
                aria-label="X (Twitter)"
              />
              <Button
                href="https://substack.com/@girlleadproject"
                variant="icon"
                icon={BsSubstack}
                className="bg-bg-white custom-shadow"
                aria-label="Substack"
              />
            </div>
          </Motion.div>

          {/* Contact Form */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-transparent"
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
                    className="w-full px-2 py-3 border border-border-soft rounded-lg outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-bg-white text-text-main"
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
                    className="w-full px-2 py-3 border border-border-soft rounded-lg outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-bg-white text-text-main"
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
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-2 py-3 border border-border-soft rounded-lg outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-bg-white text-text-main"
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
                    className="w-full px-2 py-3 border border-border-soft rounded-lg outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-bg-white text-text-main"
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
                  className="w-full px-4 py-3 border border-border-soft rounded-lg outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-bg-white text-text-main resize-none"
                  placeholder="Write details here..."
                ></textarea>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                className="mt-3 min-w-[120px]"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-text-onBrand" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Submit'}
              </Button>
            </form>
          </Motion.div>

        </div>

        {/* Footer bottom */}
        <Motion.div
          className="flex text-text-muted justify-center text-base items-center mt-8"
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
