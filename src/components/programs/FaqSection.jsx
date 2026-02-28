import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
    {
        question: "Why is mentorship important for women in tech ?",
        answer:
            "Mentorship provides guidance, support and encouragement especially in tech fields. A mentor can help you navigate challenges, build confidence and connect you to great networks.",
    },
    {
        question: "How can I find a mentor through the GirlLead Project?",
        answer:
            "You can find a mentor by applying to our specific mentorship programs when cohorts open, or by actively participating in our community networking events where successful women in tech volunteer their time.",
    },
    {
        question: "What are the benefits of becoming a mentor?",
        answer:
            "As a mentor, you give back to the community, refine your leadership and communication skills, expand your own professional network, and empower the next generation of women technologists.",
    },
    {
        question: "Do I need a lot of experience to become a mentor?",
        answer:
            "Not necessarily! While senior experience is valuable, peer mentorship and mid-level guidance are incredibly impactful. If you have navigated early career challenges, you have valuable insights to share.",
    },
    {
        question: "What will I learn?",
        answer:
            "Mentorship provides guidance, support and encouragement especially in tech fields. A mentor can help you navigate challenges, build confidence and connect you to great networks.",
        isHighlighted: true,
    },
    {
        question: "How long does the program last?",
        answer:
            "Our structured mentorship programs typically run for 3 to 6 months, depending on the specific track. However, many mentor-mentee relationships organically continue long after the official program ends.",
    },
    {
        question: "How to apply?",
        answer:
            "To apply, simply navigate to the registration portal linked on our Programs page when a cohort is actively recruiting. Make sure you meet the criteria and submit your application before the deadline.",
    },
    {
        question: "Why is participating in this internship program important for my career?",
        answer:
            "Participating in an internship provides hands-on, practical experience that bridges the gap between theoretical knowledge and real-world application, making you much more competitive in the job market.",
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#F4FBFB] py-16 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-10">
                    Faqs
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        // The image shows the 5th item "What will I learn?" has a teal background for the answer content
                        const isHighlightedContent = faq.isHighlighted;

                        return (
                            <div
                                key={index}
                                className="border-b border-gray-200/60 pb-4 last:border-b-0"
                            >
                                <button
                                    className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span
                                        className={`font-medium text-sm sm:text-base transition-colors duration-200 ${isOpen ? "text-[#0D9488]" : "text-gray-600"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`ml-4 flex-shrink-0 transition-colors duration-200 ${isOpen ? "text-[#0D9488]" : "text-gray-400"
                                            }`}
                                    >
                                        {isOpen ? (
                                            <FaChevronUp className="w-3.5 h-3.5" />
                                        ) : (
                                            <FaChevronDown className="w-3.5 h-3.5" />
                                        )}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div
                                                className={`mt-4 p-4 text-sm sm:text-base leading-relaxed ${isHighlightedContent
                                                    ? "bg-[#047481] text-white rounded-md"
                                                    : "text-gray-500"
                                                    }`}
                                            >
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
