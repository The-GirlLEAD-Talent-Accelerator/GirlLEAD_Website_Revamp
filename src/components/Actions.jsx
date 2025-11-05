import { FaUsers,  FaGift } from "react-icons/fa";

const Actions = () => {
    // helper to open a URL in a new tab safely
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    return (
        <div className="w-full md:w-4/5 m-auto flex flex-col md:flex-row justify-center gap-6 p-4 md:p-6">
            <div className="bg-teal-800 w-full md:w-4/5 px-6 md:px-10 py-5 text-white rounded-md">
                <div className="border bg-teal-50 w-fit p-2 mb-2 text-teal-600 rounded-full">
                    <FaGift className="size-5 md:size-6" />
                </div>
                <h4 className="font-bold text-2xl mb-1">Donate To The Cause</h4>
                <p className="text-gray-100 text-sm mb-2">
                    With your gift, we can do more. Support a woman to begin her tech journey today.
                </p>
                <button
                type="button"
                onClick={() => openInNewTab('https://paystack.shop/pay/mnd475208x')}
                aria-label="Donate to GirlLEAD - opens in a new tab"
                className="bg-transparent border border-white px-5 py-2 rounded-lg inline-block text-center cursor-pointer hover:bg-teal-50 hover:text-teal-800 transition"
                >
                    Donate Now
                </button>
            </div>
            <div className="bg-teal-100 w-full md:w-4/5 text-teal-800 px-6 md:px-10 py-5 rounded-md">
                <div className="border bg-teal-800 w-fit p-2 mb-2 text-white rounded-full">
                    <FaUsers className="size-5 md:size-6" />
                </div>
                <h4 className="font-bold text-2xl mb-1">Volunteer with us</h4>
                <p className="text-gray-600 text-sm mb-2">
                    Ready to make an impact? Volunteer your time and skills to empower women in Africa -  Join our team today.
                </p>
                <button
                type="button"
                onClick={() => openInNewTab('https://docs.google.com/forms/d/e/1FAIpQLSeQYaOkutAMgOrE-pXAUFOReqPbh7mysGV3_FN5rKTLB25Xpw/viewform?usp=pp_url')}
                aria-label="Volunteer with GirlLEAD - opens in a new tab"
                className="bg-teal-800 text-white px-5 py-2 rounded-lg inline-block text-center cursor-pointer hover:bg-teal-950 transition"
                >
                    Join us
                </button>
            </div>
        </div>
    );
};

export default Actions;

