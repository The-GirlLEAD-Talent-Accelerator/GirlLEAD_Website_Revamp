import { GiButterflyFlower } from "react-icons/gi";

const programs = [
  {
    id: 1,
    title: "Bootcamps",
    description:
      "Empowering girls with practical, hands-on tech and entrepreneurship skills through intensive training programs designed for real-world impact.",
    dark: true,
  },
  {
    id: 2,
    title: "Mentorships",
    description:
      "One-on-one and group mentorship experiences that connect participants with industry experts to guide, support, and inspire their personal and professional growth.",
    dark: false,
  },
  {
    id: 3,
    title: "Internships",
    description:
      "Real work experience through local and global internships that bridge the gap between learning and leading in the tech and business world.",
    dark: false,
  },
  {
    id: 4,
    title: "Special Programs",
    description:
      "Unique initiatives like GirlLEAD x EBU and Women in IT, designed in collaboration with global partners to expand reach, exposure, and impact.",
    dark: false,
  },
];

export default function WhatWeDo() {
  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e8f5f2]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        .program-card {
          background: #d0ece6;
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }
        .program-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        .program-card.dark-card {
          background: #1a4a42;
          color: #fff;
        }
        .program-card.dark-card .card-title,
        .program-card.dark-card .card-desc {
          color: #fff;
        }
        .program-card.dark-card .butterfly-icon {
          color: #a8e6d9;
        }
        .butterfly-icon {
          font-size: 32px;
          color: #1a7a62;
        }
        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a3030;
          margin: 0;
        }
        .card-desc {
          font-size: 14px;
          line-height: 1.65;
          color: #3a5a54;
          margin: 0;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "2.4rem", color: "#1a2e2a" }}>
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p) => (
            <div key={p.id} className={`program-card${p.dark ? " dark-card" : ""}`}>
              <GiButterflyFlower className="butterfly-icon" />
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}