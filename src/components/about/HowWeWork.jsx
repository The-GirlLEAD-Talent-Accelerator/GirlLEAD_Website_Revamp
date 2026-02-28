import React from "react";

function CubesIcon() {
  return (
    <img 
      src="/src/assets/build.png"
      alt="Build Foundation Cubes" 
      style={{ width: "110px", height: "auto" }} 
    />
  );
}

function CommunityIcon() {
  return (
    <img 
      src="/src/assets/community-engagement.png" 
      alt="Community Engagement" 
      style={{ width: "130px", height: "auto", marginTop: "20px" }} 
    />
  );
}

function GlobeIcon() {
  return (
    <img 
      src="/src/assets/earth.png" 
      alt="Earth Globe" 
      style={{ width: "110px", height: "auto" }} 
    />
  );
}

export default function HowWeWork() {
  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#e8f5f2" }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        .hww-title { font-size: 2rem; font-weight: 700; color: #1a2e2a; margin: 0 0 4px; }
        .hww-label { font-size: 13px; color: #3a7a6a; font-weight: 500; margin-bottom: 8px; }
        .hww-desc { font-size: 14px; color: #4a6a64; max-width: 520px; margin: 0 auto; line-height: 1.6; }

        .hww-row {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 860px;
          margin: 48px auto 0;
        }

        .hww-badge {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #a8ddd6;
          color: #014451;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 10;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          margin: 0 -14px;
        }

        .hww-card {
          background: #014451;
          border-radius: 20px;
          padding: 24px 20px 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 0;
          position: relative;
        }

        .hww-card-side {
          min-height: 300px;
          z-index: 1;
        }

        .hww-card-middle {
          min-height: 380px;
          z-index: 2;
          margin-top: -40px;
          margin-bottom: -40px;
          padding: 32px 24px;
        }

        .hww-card-illustration {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding-bottom: 12px;
        }

        /* Adjusted middle card illustration to sit at the bottom center cleanly */
        .hww-card-middle .hww-card-illustration {
          justify-content: center;
          align-items: flex-end; 
          padding-bottom: 0;
          padding-top: 16px;
        }

        .hww-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .hww-card-middle .hww-card-title {
          font-size: 19px;
        }

        .hww-card-desc {
          font-size: 13px;
          color: #a0c8c2;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 640px) {
          .hww-row { flex-direction: column; gap: 0; }
          .hww-badge { margin: -14px 0; }
          .hww-card-middle { margin: 0; min-height: auto; }
          .hww-card-side { min-height: auto; }
          .hww-card-illustration { justify-content: center; }
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="hww-title">How we work</h2>
          <p className="hww-label">The Process</p>
          <p className="hww-desc">
            A text explaining what the process and how we work is about will be here. Lets keep it on two Lines.
          </p>
        </div>

        <div className="hww-row">

          {/* Badge A */}
          <div className="hww-badge">A</div>

          {/* Card A */}
          <div className="hww-card hww-card-side">
            <div className="hww-card-illustration">
              <CubesIcon />
            </div>
            <div>
              <h3 className="hww-card-title">Build your foundation</h3>
              <p className="hww-card-desc">
                Enroll in one of our hands-on learning programs designed to equip you with relevant skills for today's world.
              </p>
            </div>
          </div>

          {/* Badge B */}
          <div className="hww-badge">B</div>

          {/* Card B - Middle */}
          <div className="hww-card hww-card-middle">
            {/* Text moved above the image */}
            <div>
              <h3 className="hww-card-title">Get integrated into our community</h3>
              <p className="hww-card-desc">
                Become a lifelong member of our empowering GirlLead network of women. Connect, collaborate, and rise together.
              </p>
            </div>
            {/* Image moved below the text */}
            <div className="hww-card-illustration">
              <CommunityIcon />
            </div>
          </div>

          {/* Badge C */}
          <div className="hww-badge">C</div>

          {/* Card C */}
          <div className="hww-card hww-card-side">
            <div className="hww-card-illustration">
              <GlobeIcon />
            </div>
            <div>
              <h3 className="hww-card-title">Step into real-world impact.</h3>
              <p className="hww-card-desc">
                Contribute through mentorship or explore internships with our trusted partner organizations to drive change.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}