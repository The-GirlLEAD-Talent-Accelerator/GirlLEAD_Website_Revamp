import { motion as Motion } from "framer-motion";
import { FaUsers,  FaGift } from "react-icons/fa";

const Actions = () => {
    // helper to open a URL in a new tab safely
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    return (
        <Motion.div
            className="bg-[#EDFAFA] dark:bg-gray-950 py-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="w-full gap-6 md:w-4/5 m-auto flex flex-col md:flex-row justify-center p-4 md:p-6">
                <Motion.div
                    className="bg-teal-800 w-full md:w-4/5 px-6 md:px-10 py-5 text-white rounded-md dark:bg-gray-800"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                >
                    <Motion.div
                        className=" bg-teal-50 w-fit p-2 mb-2 text-teal-600 rounded-full dark:bg-gray-950"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaGift className="size-5 md:size-6" />
                    </Motion.div>
                    <Motion.h4
                        className="font-bold text-2xl mb-1 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Donate To The Cause
                    </Motion.h4>
                    <Motion.p
                        className="text-gray-100 dark:text-gray-200 text-sm mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        With your gift, we can do more. Support a woman to begin her tech journey today.
                    </Motion.p>
                    <Motion.button
                        type="button"
                        onClick={() => openInNewTab('https://paystack.shop/pay/mnd475208x')}
                        aria-label="Donate to GirlLEAD - opens in a new tab"
                        className="bg-transparent border border-white px-5 py-2 rounded-lg inline-block text-center cursor-pointer hover:bg-teal-50 hover:text-teal-800 transition"
                        whileHover={{ scale: 1.05, backgroundColor: "#f0fdfa", color: "#0f766e" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Donate Now
                    </Motion.button>
                </Motion.div>
                <Motion.div
                    className="bg-teal-100 w-full md:w-4/5 text-teal-800 px-6 md:px-10 py-5 rounded-md dark:bg-gray-800"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                    <Motion.div
                        className=" bg-teal-800 w-fit p-2 mb-2 text-white rounded-full dark:bg-gray-950"
                        whileHover={{ rotate: -10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaUsers className="size-5 md:size-6" />
                    </Motion.div>
                    <Motion.h4
                        className="font-bold text-2xl mb-1 text-teal-800 dark:text-teal-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Volunteer with us
                    </Motion.h4>
                    <Motion.p
                        className="text-gray-600 dark:text-gray-300 text-sm mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Ready to make an impact? Volunteer your time and skills to empower women in Africa -  Join our team today.
                    </Motion.p>
                    <Motion.button
                        type="button"
                        onClick={() => openInNewTab('https://docs.google.com/forms/d/e/1FAIpQLSeQYaOkutAMgOrE-pXAUFOReqPbh7mysGV3_FN5rKTLB25Xpw/viewform?usp=pp_url')}
                        aria-label="Volunteer with GirlLEAD - opens in a new tab"
                        className="bg-teal-800 text-white px-5 py-2 rounded-lg inline-block text-center cursor-pointer hover:bg-teal-950 transition"
                        whileHover={{ scale: 1.05, backgroundColor: "#0f172a" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Join us
                    </Motion.button>
                </Motion.div>
            </div>
        </Motion.div>
    );
};

export default Actions;

