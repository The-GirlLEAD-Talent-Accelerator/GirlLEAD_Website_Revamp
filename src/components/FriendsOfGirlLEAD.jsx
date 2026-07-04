import { FaLinkedin } from "react-icons/fa";

const friends = [
  { name: "Light Orukpa Diamonds",      role: "STEMINIST", image: "/Friends/Light.webp",      linkedin: "https://linkedin.com/in/lightorukpadiamonds", bg: "#f2c4b0" },
  { name: "Joy Ifeoma Ogboh",   role: "Product Manager/Backend Engineer",    image: "/Friends/Joy Ogboh.webp",   linkedin: "https://linkedin.com/in/feomzie", bg: "#b8a8f0" },
  { name: "Flourish Agbanoma",   role: "Frontend Developer",   image: "/Friends/Flourish.webp",    linkedin: "https:// https://www.linkedin.com/in/flourish-agbanoma-826818314/", bg: "#a8e8c0" },
  { name: "Eloghosa Osagie",  role: "Software Engineer",    image: "/Friends/Eloghosa.webp",   linkedin: "https://www.linkedin.com/in/eloghosa-osagie-b17135167/", bg: "#c0a8f0" },
  { name: "Damilare Sanusi",  role: "Product Designer",     image: "/Friends/Dami.webp",   linkedin: "https://linkedin.com/in/damilare-sanusi/", bg: "#f2c4b0" },
  { name: "Bunmi Mitchel Oyegoke", role: "Communications Consultant",        image: "/Friends/Bunmi.webp",  linkedin: "https://www.linkedin.com/in/bunmi-mitchel-oyegoke-a9518411b/", bg: "#b8a8f0" },
  { name: "Ibrahim Odion",     role: "Public Speaker",            image: "/Friends/Ibrahim.webp",      linkedin: "https://linkedin.com/in/ibrahim-odion-1750a0198/", bg: "#a8e8c0" },
  { name: "Efosa Eweka",     role: "Career Coach",            image: "/Friends/Efosa.webp",      linkedin: "https://www.linkedin.com/in/efosa-eweka-b48a95238/", bg: "#c0a8f0" },
  { name: "Moyinoluwa Ariyo",      role: "Software Engineer",            image: "/Friends/Moyin.webp",       linkedin: "https://www.linkedin.com/in/moyinoluwaariyo?", bg: "#f2c4b0" },
  { name: "Patience Adajah",       role: "Product Engineer",            image: "/Friends/Patience.webp",        linkedin: "https://www.linkedin.com/in/patience-adajah/", bg: "#b8a8f0" },
  { name: "Joshua Akintunde",    role: "Product Manager",            image: "/Friends/Josh.webp",     linkedin: "https://www.linkedin.com/in/akintunde-joshua/", bg: "#a8e8c0" },
  { name: "Olawunmi Sanusi", role: "Tech Educator & Founder, The Tech Oga", image: "/Friends/Olawunmi.webp", linkedin: "https://www.linkedin.com/in/olawunmi-sanusi", bg: "#c0a8f0" },
];

function Card({ person }) {
  return (
    <div className="bg-bg-white rounded-2xl overflow-hidden">

      {/* Photo */}
      <div
        className="w-full h-48 overflow-hidden"
        style={{ backgroundColor: person.bg }}
      >
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Info */}
      <div className="px-4 py-3">
        <p className="font-bold text-text-main text-sm">{person.name}</p>
        <p className="text-xs text-text-muted mt-0.5 mb-2">{person.role}</p>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0a66c2] hover:text-[#004182] transition-colors"
          aria-label={`${person.name} LinkedIn`}
        >
          <FaLinkedin size={18} />
        </a>
      </div>

    </div>
  );
}

export default function FriendsOfGirlLEAD() {
  return (
    <section className="w-full bg-brand-hero py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h2 className="text-center text-3xl font-bold text-white mb-3">
          Friends of GirlLEAD
        </h2>
        <p className="text-center text-white/70 text-base mb-12">
          Meet our network of experts who partner with us on projects.
        </p>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
          {friends.slice(0, 4).map((person, i) => (
            <Card key={i} person={person} />
          ))}
        </div>

        {/* Row 2 — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
          {friends.slice(4, 8).map((person, i) => (
            <Card key={i} person={person} />
          ))}
        </div>

        {/* Row 3 — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {friends.slice(8, 12).map((person, i) => (
            <Card key={i} person={person} />
          ))}
        </div>

      </div>
    </section>
  );
}