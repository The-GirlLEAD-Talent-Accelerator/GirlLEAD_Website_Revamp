// import { useEffect, useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const tabs = ["Technology", "Social Entrepreneurship", "Leadership"];

// const tabContent: Record<string, { description: string; programs: { title: string; image: string }[] }> = {
//   Technology: {
//     description:
//       "We empower our fellows with cutting-edge technical skills in emerging technologies to create innovative solutions that address real human challenges.",
//     programs: [
//       {
//         title: "GirlLEAD Bootcamp",
//         image:
//           "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
//       },
//       {
//         title: "GirlLEAD x DataCamp Scholarship programme (WiD)",
//         image:
//           "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
//       },
//       {
//         title: "Girls in STEM",
//         image:
//           "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//       },
//     ],
//   },
//   "Social Entrepreneurship": {
//     description:
//       "We support aspiring social entrepreneurs with tools, mentorship, and resources to build sustainable ventures that solve community problems.",
//     programs: [
//       {
//         title: "Social Impact Fellowship",
//         image:
//           "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
//       },
//       {
//         title: "Community Builders Program",
//         image:
//           "https://images.unsplash.com/photo-1543269865-cbf427effbad",
//       },
//     ],
//   },
//   Leadership: {
//     description:
//       "We develop confident, ethical leaders equipped with the skills to drive change across organizations and communities.",
//     programs: [
//       {
//         title: "Women in Leadership",
//         image:
//           "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//       },
//       {
//         title: "Future Leaders Academy",
//         image:
//           "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
//       },
//     ],
//   },
// };

// const carouselImages = [
//   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
//   "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//   "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
// ];

// export default function TechnologySection() {
//   const [activeTab, setActiveTab] = useState("Technology");
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const handlePrev = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
//     );
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//   };

//   const { description, programs } = tabContent[activeTab];

//   return (
//     <section className="bg-[#F4FBFB] py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Tabs */}
//         <div className="flex justify-center gap-6 sm:gap-10 mb-6">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-2 font-medium transition border-b-2 text-sm sm:text-lg ${
//                 activeTab === tab
//                   ? "text-teal-700 border-teal-700"
//                   : "text-gray-500 border-transparent"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Description */}
//         <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm sm:text-base">
//           {description}
//         </p>

//         {/* Carousel */}
//         <div className="relative rounded-2xl overflow-hidden mb-12">
//           <img
//             src={carouselImages[currentSlide]}
//             alt="Carousel slide"
//             className="w-full h-[220px] sm:h-[380px] object-cover transition-all duration-700"
//           />

//           {/* Controls */}
//           <button
//             aria-label="Previous slide"
//             onClick={handlePrev}
//             className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
//           >
//             <FiChevronLeft size={20} />
//           </button>
//           <button
//             aria-label="Next slide"
//             onClick={handleNext}
//             className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
//           >
//             <FiChevronRight size={20} />
//           </button>

//           {/* Dots */}
//           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
//             {carouselImages.map((_, i) => (
//               <span
//                 key={i}
//                 className={`w-2 h-2 rounded-full ${
//                   i === currentSlide ? "bg-white" : "bg-white/40"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Programs */}
//         <h3 className="text-center text-gray-700 mb-8 text-sm sm:text-base">
//           These are the programs under this track:
//         </h3>

//         <div
//           className={`grid gap-6 ${
//             programs.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
//           }`}
//         >
//           {programs.map((program) => (
//             <div
//               key={program.title}
//               className="relative rounded-2xl overflow-hidden h-[220px]"
//             >
//               <img
//                 src={program.image}
//                 alt={program.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/40 flex items-end p-4">
//                 <h4 className="text-white text-sm sm:text-lg font-semibold">
//                   {program.title}
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Tabs from "../../components/tabs/Tabs";
import Carousel from "../carousel/Carousel";
import ProgramCard from "../programs/ProgramCard";
import {
  TABS,
  TAB_CONTENT,
  CAROUSEL_IMAGES,
} from "../../constants/technologyData";

export default function TechnologySection() {
  const [activeTab, setActiveTab] = useState("Technology");
  const location = useLocation();
  const currentTab = TAB_CONTENT[activeTab] || TAB_CONTENT["Technology"];
  const { description, programs } = currentTab;

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);


  return (
    <section className="bg-bg-mute py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

        <p className="text-center text-text-muted max-w-3xl mx-auto mb-10 text-sm sm:text-base">
          {description}
        </p>

        <Carousel images={CAROUSEL_IMAGES} />

        <h3 className="text-center text-text-muted mb-8 text-sm sm:text-base">
          These are the programs under this track:
        </h3>

        <div
          className={`grid gap-6 ${programs.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
            }`}
        >
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
