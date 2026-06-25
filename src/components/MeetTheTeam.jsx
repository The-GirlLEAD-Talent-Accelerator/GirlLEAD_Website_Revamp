const teamMembers = [
  // Row 1
  { name: "Faith Eloho Donwa",             role: "Executive Director", countryCode: "ng", linkedin: "https://linkedin.com/in/faith-eloho-donwa-9574b5187", image: "/Team/Faith.webp" },
  { name: "Udoka Gabriel Onyebuolise",     role: "Lead, Marketing and Communications", countryCode: "ng", linkedin: "https://linkedin.com/in/gabrielonyebuolise", image: "/Team/Gabriel.webp" },
  { name: "Chidinma Esther Douglas-Chukwu", role: "Lead, Programs", countryCode: "ng", linkedin: "https://linkedin.com/in/chidinma-douglas-chukwu-916390199", image: "/Team/Chidinma.webp" },
  { name: "Joy Chiemeka-Peter",                role: "Lead, People Operations", countryCode: "ng", linkedin: "https://www.linkedin.com/in/joyokeh-acipm-hrpl/", image: "/Team/Joy.webp" },
  { name: "Ezighode Fredrick",       role: "Lead, Product and Tech", countryCode: "ng", linkedin: "https://linkedin.com/in/ezighode-fredrick", image: "/Team/Ezi.webp" },
  { name: "Jobina Arinze",  role: "Lead, Relationship Management", countryCode: "ng", linkedin: "http://www.linkedin.com/in/jobina-arinze", image: "/Team/Jobina.webp" },

  // Row 2
  { name: "Opeyemi Christianah De Campos", role: "Lead, Programs", countryCode: "ng", linkedin: "https://www.linkedin.com/in/opeyemi-de-campos/", image: "/Team/Opeyemi.webp" },
  { name: "Blessing Aluge",          role: "Manager, People Operations", countryCode: "ng", linkedin: "https://linkedin.com/in/blessing-aluge", image: "/Team/Blessing.webp" },
  { name: "Excel Chukwuma", role: "Community & Social Media Manager, Marketing and Communications/Relationship Management", countryCode: "ng", linkedin: "https://www.linkedin.com/in/chukwuma-excel/", image: "/Team/Excel.webp" },
  { name: "Precious Oseihioria Ihire",          role: "Software Engineer, Product and Tech", countryCode: "ng", linkedin: "https://linkedin.com/in/preciousihire", image: "/Team/Precious.webp" },
  { name: "Glamour Idiagi",          role: "Programs Associate, Programs", countryCode: "ng", linkedin: "https://linkedin.com/in/glamour-idiagi-4265b11ab", image: "/Team/Glamour.webp" },
  { name: "Peace Opemipo Akinlayo",          role: "Intern, People Operations", countryCode: "ng", linkedin: "https://linkedin.com/in/peaceakinlayo", image: "/Team/Peace.webp" },
  
  
  // Row 3
  { name: "Innocent Solomon", role: "Graphics Design Impact Officer, Marketing and Communications", countryCode: "ng", linkedin: "https://linkedin.com/in/bayilasolomon", image: "/Team/Solomon.webp" },
  { name: "Francesca Osigwe",        role: "Product Owner, Product and Tech", countryCode: "ng", linkedin: "https://linkedin.com/in/chi-osigwe/", image: "/Team/Francesca.webp" },
  { name: "Francisca Hayford",  role: "Programs Officer, Programs", countryCode: "gh", linkedin: "https://www.linkedin.com/in/francisca-hayford/", image: "/Team/Francisca.webp" },
  { name: "Rachael Ng'ang'a",  role: "Manager, Marketing and Communications", countryCode: "ke", linkedin: "https://www.linkedin.com/in/nganga-wanjira/", image: "/Team/Rachael.webp" },
  { name: "Folake Blessing Salako",  role: "Community Manager, Relationship Management", countryCode: "ng", linkedin: "https://www.linkedin.com/in/folake-salako", image: "/Team/Folake.webp" },
  { name: "Chinenye Ibezim ",  role: "Graphics Designer, Marketing and Communications", countryCode: "ng", linkedin: "https://www.linkedin.com/in/chinenye-ibezim-3a1505201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "/Team/Chineye.webp" },
  

  // Row 4
  { name: "Chika Emmanuella Nwakwue ",  role: "Associate Content Writer, Marketing and Communications", countryCode: "ng", linkedin: "https://ng.linkedin.com/in/chika-nwakwue-99a809386", image: "/Team/Chika.webp" },
  { name: "Amen Oyanameh Johnpraise ",  role: "Associate Content Writer, Marketing and Communications", countryCode: "ng", linkedin: "https://www.linkedin.com/in/amen-johnpraise-469007382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "/Team/Amen.webp" },
  { name: "Vera Nyagaka ",  role: "Backend Engineering Intern, Product and Tech", countryCode: "ke", linkedin: "https://linkedin.com/in/veranyagaka", image: "/Team/Vera.webp" },
  { name: "Hasina Finoana Ratsarafahatra",  role: "Programs Assistant, Programs", countryCode: "mg", linkedin: "http://linkedin.com/in/hasina-ratsar", image: "/Team/Hasina.webp" },
  { name: "Muminah  Adesola Abdulkadir ", role: "Programs Assistant, Programs", countryCode: "ng", linkedin: "http://www.linkedin.com/in/muminahabdulkadir/", image: "/Team/Mumina.webp" },
  { name: "Vivian Ifediba ", role: "Officer, People Operations", countryCode: "ng", linkedin: "https://www.linkedin.com/in/Ifediba-vivian", image: "/Team/Vivian.webp" },

  // Row 5
  { name: "Chinonso Isaac Nwogu", role: "Social Media Intern, Marketing and Communications", countryCode: "ng", linkedin: "https://linkedin.com/in/", image: "/Team/Chinonso.webp" },
  { name: "Mhanrobosa Genevieve Enodiana",     role: "Intern, Relationship Management/Product and Tech", countryCode: "ng", linkedin: "https://linkedin.com/in/enodiana", image: "/Team/Mhanrobosa.webp" },
  { name: "Praise Hope Effiom", role: "Frontend Engineering Intern, Product and Tech", countryCode: "ng", linkedin: "https://linkedin.com/in/praiseeffiom", image: "/Team/Praise.webp" },
  { name: "Faith Muluu", role: "Community Management Intern, Relationship Management", countryCode: "ke", linkedin: "https://www.linkedin.com/in/faith-muluu/", image: "/Team/Muluu.webp" },
  { name: "Chinaza Lovelyn Onyemachi", role: "Graphics Designer, Marketing and Communications", countryCode: "ng", linkedin: "https://linkedin.com/in/", image: "/Team/Chinaza.webp" },
];

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
  </svg>
);

function MemberCard({ member, staggerUp }) {
  return (
    <div
      className="flex flex-col items-center gap-2"
      style={{ transform: staggerUp ? "translateY(-30px)" : "translateY(0px)" }}
    >
      {/* Photo */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-border-soft flex-shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + flag */}
      <p className="text-xs md:text-sm font-bold text-text-main text-center leading-snug">
        {member.name}{" "}
        <img
          src={`https://flagcdn.com/20x15/${member.countryCode}.png`}
          alt={member.countryCode.toUpperCase()}
          width="16"
          height="12"
          className="inline-block rounded-sm align-middle"
        />
      </p>

      {/* Role */}
      <p className="text-[11px] text-text-muted text-center leading-snug px-1">
        {member.role}
      </p>

      {/* LinkedIn */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0a66c2] hover:text-[#004182] transition-colors"
        aria-label={`${member.name} LinkedIn`}
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

function StaggeredRow({ members, rowIndex }) {
  return (
    <div className="hidden md:grid grid-cols-6 gap-6 items-center py-6">
      {members.map((member, i) => {
        const staggerUp = rowIndex % 2 === 0 ? i % 2 === 0 : i % 2 !== 0;
        return <MemberCard key={i} member={member} staggerUp={staggerUp} />;
      })}
    </div>
  );
}

export default function MeetTheTeam() {
  // Dynamically split into rows of 6
  const rows = [];
  for (let i = 0; i < teamMembers.length; i += 6) {
    rows.push(teamMembers.slice(i, i + 6));
  }

  return (
    <section className="w-full bg-bg-soft py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-text-main mb-3">
          Meet the Team
        </h2>
        <p className="text-center text-sm text-text-muted mb-12 max-w-xl mx-auto">
          These are our Impact Associates. They are the brains behind the work we do at GirlLEAD Accelerators Program
        </p>

        {/* Mobile: 2-column grid, no stagger */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:hidden">
          {teamMembers.map((member, i) => (
            <MemberCard key={i} member={member} staggerUp={false} />
          ))}
        </div>

        {/* Desktop: dynamic staggered rows */}
        <div className="hidden md:block">
          {rows.map((rowMembers, rowIndex) => (
            <div key={rowIndex}>
              <StaggeredRow members={rowMembers} rowIndex={rowIndex} />
              {rowIndex < rows.length - 1 && (
                <div className="border-t border-border-soft/30 mx-8" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
