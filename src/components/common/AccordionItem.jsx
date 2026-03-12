import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-border-soft last:border-b-0 pb-2">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left transition-colors duration-200 focus:outline-none group"
      >
        <span className={`font-semibold text-base md:text-lg transition-colors duration-200 ${isOpen ? 'text-brand-primary' : 'text-text-main group-hover:text-brand-primary'}`}>
          {question}
        </span>
        <span className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-primary' : 'text-text-muted opacity-60'}`}>
          <FaChevronDown className="w-4 h-4" />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="bg-bg-card p-5 rounded-2xl text-text-muted leading-relaxed mb-4 text-sm md:text-base">
              {answer}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
