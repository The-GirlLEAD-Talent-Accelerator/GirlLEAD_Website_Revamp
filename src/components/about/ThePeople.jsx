import { useState } from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const bgPalette = [
  "#f5cfc4",
  "#c4c8f5",
  "#b8ebd6",
  "#c4d8f5",
  "#f5e4b8",
  "#e4c4f5",
];

const teamMembers = {
  mentors: [
    { id: 1, name: "Faith Donwa", role: "Team Operations Lead", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop", bg: bgPalette[0], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaInstagram, url: "#", label: "Instagram" }, { icon: FaLinkedin, url: "#", label: "LinkedIn" }] },
    { id: 2, name: "Precious Ihire", role: "Software Engineer", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop", bg: bgPalette[1], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaInstagram, url: "#", label: "Instagram" }, { icon: FaLinkedin, url: "#", label: "LinkedIn" }] },
    { id: 3, name: "Glamour Idiagi", role: "Programs Associate", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", bg: bgPalette[2], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaInstagram, url: "#", label: "Instagram" }, { icon: FaLinkedin, url: "#", label: "LinkedIn" }] },
    { id: 4, name: "Eloghosa Osagie", role: "Software Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", bg: bgPalette[3], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaInstagram, url: "#", label: "Instagram" }, { icon: FaLinkedin, url: "#", label: "LinkedIn" }] },
    { id: 5, name: "Damilare Sanusi", role: "Product Designer", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop", bg: bgPalette[0], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaInstagram, url: "#", label: "Instagram" }, { icon: FaLinkedin, url: "#", label: "LinkedIn" }] },
    { id: 6, name: "Francesca Osigwe", role: "Product Owner", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop", bg: bgPalette[1], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaInstagram, url: "#", label: "Instagram" }, { icon: FaLinkedin, url: "#", label: "LinkedIn" }] },
  ],
  facilitators: [
    { id: 7, name: "Amanda Foster", role: "Program Facilitator", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", bg: bgPalette[2], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaLinkedin, url: "#", label: "LinkedIn" }] },
    { id: 8, name: "Lisa Garcia", role: "Community Lead", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", bg: bgPalette[4], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaLinkedin, url: "#", label: "LinkedIn" }] },
    { id: 9, name: "Patricia Lee", role: "Workshops Coordinator", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", bg: bgPalette[5], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaLinkedin, url: "#", label: "LinkedIn" }] },
  ],
  speakers: [
    { id: 10, name: "Dr. Victoria Martinez", role: "AI & Machine Learning Expert", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", bg: bgPalette[3], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaLinkedin, url: "#", label: "LinkedIn" }] },
    { id: 11, name: "Sophia Wang", role: "Entrepreneur & Investor", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop", bg: bgPalette[1], socials: [{ icon: FaTwitter, url: "#", label: "Twitter" }, { icon: FaInstagram, url: "#", label: "Instagram" }] },
    { id: 12, name: "Rachel Thompson", role: "Design Thinking Coach", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop", bg: bgPalette[2], socials: [{ icon: FaLinkedin, url: "#", label: "LinkedIn" }, { icon: FaInstagram, url: "#", label: "Instagram" }] },
  ],
};

const tabs = [
  { id: "mentors", label: "Mentors" },
  { id: "facilitators", label: "Facilitators" },
  { id: "speakers", label: "Speakers" },
];

export default function ThePeople() {
  const [activeTab, setActiveTab] = useState("mentors");
  const currentMembers = teamMembers[activeTab];

  return (
    <section style={{ fontFamily: "'DM Sans', sans-serif" }} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#014451] dark:bg-slate-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        
        .people-title { 
          font-size: 2rem; 
          font-weight: 700; 
          color: #ffffff; 
          margin-bottom: 4px; 
        }

        .people-subtitle { 
          font-size: 14px; 
          color: #a0c4c0; 
        }

        :global(.dark) .people-subtitle {
          color: #4fd1c5;
        }

        .people-tabs { 
          display: flex; 
          justify-content: center; 
          border-bottom: 2px solid #025f70; 
          margin-bottom: 36px; 
        }

        :global(.dark) .people-tabs {
          border-bottom-color: #1a7a72;
        }

        .people-tab-btn { 
          padding: 10px 28px; 
          font-size: 14px; 
          font-weight: 600; 
          color: #7ab8b2; 
          background: transparent; 
          border: none; 
          border-bottom: 3px solid transparent; 
          margin-bottom: -2px; 
          cursor: pointer; 
          transition: color 0.2s, border-color 0.2s; 
          font-family: 'DM Sans', sans-serif; 
        }
        .people-tab-btn:hover { color: #e0f4f2; }
        .people-tab-btn.active { color: #ffffff; border-bottom-color: #00c2a8; }
        
        .people-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); 
          gap: 20px; 
          max-width: 860px; 
          margin: 0 auto; 
        }
        
        .people-card { 
          border-radius: 14px; 
          overflow: hidden; 
          background: #ffffff; 
          box-shadow: 0 2px 12px rgba(0,0,0,0.2); 
          transition: transform 0.25s ease, box-shadow 0.25s ease; 
        }

        :global(.dark) .people-card {
          background: #1a4a42;
          box-shadow: 0 2px 12px rgba(0,0,0,0.5);
        }

        .people-card:hover { 
          transform: translateY(-5px); 
          box-shadow: 0 14px 36px rgba(0,0,0,0.3); 
        }
        
        .people-card-imgwrap { 
          aspect-ratio: 1/1; 
          overflow: hidden; 
        }
        .people-card-imgwrap img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          object-position: top center; 
          transition: transform 0.3s ease; 
        }
        .people-card:hover .people-card-imgwrap img { 
          transform: scale(1.05); 
        }
        
        .people-card-info { 
          padding: 14px; 
        }
        
        .people-card-name { 
          font-size: 14px; 
          font-weight: 700; 
          color: #1a2e2a; 
          margin: 0 0 2px; 
        }

        :global(.dark) .people-card-name {
          color: #e0f2f1;
        }

        .people-card-role { 
          font-size: 12px; 
          color: #3a7a6a; 
          margin: 0 0 10px; 
        }

        :global(.dark) .people-card-role {
          color: #80cbc4;
        }

        .people-card-socials { 
          display: flex; 
          gap: 7px; 
          flex-wrap: wrap; 
        }
        
        .people-social-icon { 
          display: inline-flex; 
          align-items: center; 
          justify-content: center; 
          width: 28px; 
          height: 28px; 
          border-radius: 50%; 
          background: #f0f5f3; 
          color: #3a7a6a; 
          font-size: 13px; 
          text-decoration: none; 
          transition: background 0.2s, color 0.2s; 
        }

        :global(.dark) .people-social-icon {
          background: #2a6a62;
          color: #80cbc4;
        }

        .people-social-icon:hover { 
          background: #014451; 
          color: #fff; 
        }

        :global(.dark) .people-social-icon:hover {
          background: #00c2a8;
          color: #014451;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="people-title">Friends of GirlLEAD</h2>
          <p className="people-subtitle">Meet our network who we partner with on projects</p>
        </div>

        <div className="people-tabs">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`people-tab-btn${activeTab === tab.id ? " active" : ""}`}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="people-grid">
          {currentMembers.map((member) => (
            <div key={member.id} className="people-card">
              <div className="people-card-imgwrap" style={{ background: member.bg }}>
                <img src={member.image} alt={member.name} />
              </div>
              <div className="people-card-info">
                <h3 className="people-card-name">{member.name}</h3>
                <p className="people-card-role">{member.role}</p>
                <div className="people-card-socials">
                  {member.socials.map((s, idx) => {
                    const Icon = s.icon;
                    return (
                      <a key={idx} href={s.url} aria-label={s.label} className="people-social-icon">
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}