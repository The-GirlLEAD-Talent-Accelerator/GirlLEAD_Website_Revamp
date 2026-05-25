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
      <section className="bg-bg-mute py-16 px-7">
        <section className="w-full max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-4xl md:text-3xl font-bold mb-6 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 py-12 rounded-2xl border border-border-soft hover:shadow-lg transition-shadow bg-bg-card">  {/* ← changed */}
              <HiOutlineAcademicCap className="text-brand-primary text-2xl mb-9 w-10 h-10" />  {/* ← changed */}
              <h3 className="text-xl text-text-main font-semibold my-3">  {/* ← changed */}
                Bootcamps
              </h3>
              <p className="text-text-muted">  {/* ← changed */}
                Empowering girls with practical, hands-on tech and entrepreneurship skills through intensive training programs designed for real-world impact.
              </p>
            </div>

            <div className="p-6 py-12 rounded-2xl border border-border-soft hover:shadow-lg transition-shadow bg-bg-card">
              <FaChalkboardTeacher className="text-brand-primary text-2xl mb-9 w-10 h-10" />
              <h3 className="text-xl text-text-main font-semibold my-3">
                Mentorships
              </h3>
              <p className="text-text-muted">
                One-on-one and group mentorship experiences that connect participants with industry experts to guide, support, and inspire their personal and professional growth.
              </p>
            </div>

            <div className="p-6 py-12 rounded-2xl border border-border-soft hover:shadow-lg transition-shadow bg-bg-card">
              <BsBriefcaseFill className="text-brand-primary text-2xl mb-9 w-10 h-10" />
              <h3 className="text-xl text-text-main font-semibold my-3">Internships</h3>
              <p className="text-text-muted">
                Real work experience through local and global internships that bridge the gap between learning and leading in the tech and business world.
              </p>
            </div>

            <div className="p-6 py-12 rounded-2xl border border-border-soft hover:shadow-lg transition-shadow bg-bg-card">
              <AiOutlineStar className="text-brand-primary text-2xl mb-9 w-10 h-10" />
              <h3 className="text-xl text-text-main font-semibold my-3">Special Programs</h3>
              <p className="text-text-muted">
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