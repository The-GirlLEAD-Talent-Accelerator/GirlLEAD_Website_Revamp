import { SlSettings } from "react-icons/sl";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { TbSparkles } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";

const WhatWeDo = () => {
  return (
    <>
      <section className="bg-[#F4FBFB] dark:bg-gray-900 py-16 px-7">
        <section className="w-full max-w-6xl mx-auto ">
          <h2 className="text-xl sm:text-4xl md:text-3xl font-bold mb-6 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="px-6 py-12 bg-[#05505C] rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <HiOutlineAcademicCap className="text-teal-200 dark:text-teal-200 text-2xl mb-9 w-10 h-10" />
              <h3 className="text-xl text-white font-semibold my-3">
                Bootcamps
              </h3>
              <p className="text-white">
                Empowering girls with practical, hands-on tech and entrepreneurship skills through intensive training programs designed for real-world impact.
              </p>
            </div>

            <div className="p-6 py-12 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-[#D5F5F6]  dark:bg-inherit">
              <FaChalkboardTeacher className="text-teal-800 dark:text-teal-200 text-2xl mb-9 w-10 h-10" />
              <h3 className="text-xl text-teal-800 dark:text-white font-semibold my-3">
                Mentorships
              </h3>
              <p className="dark:text-white text-teal-800">
                One-on-one and group mentorship experiences that connect participants with industry experts to guide, support, and inspire their personal and professional growth.
              </p>
            </div>

            <div className="p-6 py-12 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-[#D5F5F6] dark:bg-inherit">
              <BsBriefcaseFill className="text-teal-800 dark:text-teal-200 text-2xl mb-9 w-10 h-10" />
              <h3 className="text-xl text-teal-800 dark:text-white font-semibold my-3">Internships</h3>
              <p className="dark:text-white text-teal-800">
                Real work experience through local and global internships that bridge the gap between learning and leading in the tech and business world.
              </p>
            </div>

            <div className="p-6 py-12 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-[#D5F5F6] dark:bg-inherit">
              <AiOutlineStar className="text-teal-800 dark:text-teal-200 text-2xl mb-9 w-10 h-10" />
              <h3 className="text-xl text-teal-800 dark:text-white font-semibold my-3">Special Programs</h3>
              <p className="dark:text-white text-teal-800">
                Unique initiatives like GirlLEAD x EBU and Women in IT, designed in collaboration with global partners to expand reach, exposure, and impact.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default WhatWeDo;
