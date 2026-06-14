const teamMembers = [
  { name: "Gabriel Onyebuolise",     role: "Head of Marketing and Communications", countryCode: "ng", linkedin: "https://linkedin.com/in/gabrielonyebuolise", image: "/Team/Gabriel.png" },
  { name: "Glamour Idiagi",          role: "Programs Associate, Programs and Partnerships", countryCode: "ng", linkedin: "https://linkedin.com/in/glamour-idiagi-4265b11ab", image: "/Team/Glamour.png" },
  { name: "Joy Okeh",                role: "People Operations Officer, People and Operations", countryCode: "ng", linkedin: "https://linkedin.com/in/...", image: "/Team/Joy.png" },
  { name: "Blessing Aluge",          role: "Operations Assistant, People and Operations", countryCode: "ng", linkedin: "https://linkedin.com/in/blessing-aluge", image: "/Team/Blessing.png" },
  { name: "Innocent Bayila Solomon", role: "Graphics Designer, Marketing and Communications", countryCode: "ng", linkedin: "https://linkedin.com/in/bayilasolomon", image: "/Team/Solomon.png" },
  { name: "Precious Ihire",          role: "Software Engineer, Product and Tech", countryCode: "ng", linkedin: "https://linkedin.com/in/preciousihire", image: "/Team/Precious.png" },
];

export default function MeetTheTeam() {
  return (
    <section className="w-full bg-[#dff2f2] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-3">
          Meet Some of the Team
        </h2>
        <p className="text-center text-sm text-gray-500 mb-16 max-w-xl mx-auto">
          These are our Impact Associates. They are the brains behind the work we do at GirlLEAD Accelerators Program
        </p>

        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-8 md:hidden">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center gap-2">

              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#c0ae90]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm font-bold text-gray-800 text-center flex items-center gap-1 justify-center flex-wrap">
                {member.name}
                <img
                  src={`https://flagcdn.com/20x15/${member.countryCode}.png`}
                  alt={member.countryCode.toUpperCase()}
                  width="20"
                  height="15"
                  className="inline-block rounded-sm"
                />
              </p>

              <p className="text-xs text-gray-500 text-center leading-snug">{member.role}</p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0a66c2] hover:text-[#004182] transition-colors"
                aria-label={`${member.name} LinkedIn`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>

            </div>
          ))}
        </div>

        {/* Desktop: staggered single row */}
        <div className="hidden md:flex justify-center gap-8 items-end pb-10">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 flex-shrink-0 max-w-[140px]"
              style={{ transform: i % 2 === 0 ? "translateY(30px)" : "translateY(0px)" }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#c0ae90]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm font-bold text-gray-800 text-center flex items-center gap-1 justify-center flex-wrap">
                {member.name}
                <img
                  src={`https://flagcdn.com/20x15/${member.countryCode}.png`}
                  alt={member.countryCode.toUpperCase()}
                  width="20"
                  height="15"
                  className="inline-block rounded-sm"
                />
              </p>

              <div className="flex items-start gap-1.5 justify-center">
                <p className="text-xs text-gray-500 text-center leading-snug">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0a66c2] hover:text-[#004182] transition-colors flex-shrink-0 mt-0.5"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}