import { useState, useRef } from "react";

const COUNTRIES = [
  { name: "Morocco",          x: "39.5%", y: "28.0%" },
  { name: "Tunisia",          x: "47.7%", y: "25.3%" },
  { name: "Libya",            x: "51.4%", y: "26.0%" },
  { name: "Egypt",            x: "56.7%", y: "25.3%" },
  { name: "Mauritania",       x: "35.8%", y: "34.9%" },
  { name: "Gambia",           x: "32.7%", y: "42.0%" },
  { name: "Sierra Leone",     x: "32.9%", y: "45.2%" },
  { name: "Liberia",          x: "34.0%", y: "47.4%" },
  { name: "Ghana",            x: "37.4%", y: "46.2%" },
  { name: "Togo",             x: "39.0%", y: "45.5%" },
  { name: "Benin Republic",   x: "40.2%", y: "44.9%" },
  { name: "Nigeria",  hq: true, x: "43.2%", y: "59.5%" },
  { name: "Cameroon",         x: "45.5%", y: "45.2%" },
  { name: "Sudan",            x: "56.4%", y: "33.7%" },
  { name: "South Sudan",      x: "55.3%", y: "40.4%" },
  { name: "Ethiopia",         x: "59.6%", y: "40.4%" },
  { name: "Somalia",          x: "62.6%", y: "42.9%" },
  { name: "Rwanda",           x: "53.4%", y: "47.8%" },
  { name: "Burundi",          x: "53.8%", y: "49.4%" },
  { name: "Kenya",            x: "57.2%", y: "46.8%" },
  { name: "Tanzania",         x: "55.6%", y: "51.0%" },
  { name: "Malawi",           x: "55.6%", y: "55.1%" },
  { name: "Mozambique",       x: "56.4%", y: "59.0%" },
  { name: "Madagascar",       x: "61.9%", y: "55.8%" },
  { name: "Zambia",           x: "52.0%", y: "55.8%" },
  { name: "Zimbabwe",         x: "52.4%", y: "58.5%" },
  { name: "Botswana",         x: "49.5%", y: "60.6%" },
  { name: "Namibia",          x: "46.4%", y: "59.0%" },
  { name: "Eswatini",         x: "54.3%", y: "62.2%" },
  { name: "Lesotho",          x: "51.4%", y: "64.1%" },
  { name: "South Africa",     x: "49.0%", y: "66.0%" },
  { name: "United Kingdom", uk: true, x: "41.9%", y: "14.1%" },
];

/* Teardrop SVG path centered at top, pointing downward */
const Teardrop = ({ size = 18, color = "#0d5c5c", border = "#fff" }) => (
  <svg
    width={size}
    height={size * 1.4}
    viewBox="0 0 20 28"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
  >
    <path
      d="M10 0 C4.477 0 0 4.477 0 10 C0 17 10 28 10 28 C10 28 20 17 20 10 C20 4.477 15.523 0 10 0 Z"
      fill={color}
      stroke={border}
      strokeWidth="1.5"
    />
    <circle cx="10" cy="10" r="4" fill="rgba(255,255,255,0.4)" />
  </svg>
);

export default function MapSection() {
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0, hq: false });

  const handleEnter = (e, c) => {
    const cRect = containerRef.current.getBoundingClientRect();
    const pRect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      text: c.hq ? `${c.name} (Headquarters)` : c.name,
      x: pRect.left - cRect.left + pRect.width / 2,
      y: pRect.top - cRect.top,
      hq: !!c.hq,
    });
  };

  const handleLeave = () => setTooltip(t => ({ ...t, visible: false }));

  return (
    <section className="bg-bg-alt py-16 px-4 md:px-6 md:py-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text */}
        <div className="md:w-5/12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-hero leading-tight">
            We operate in<br />
            multiple countries<br />
            in Africa
          </h2>
        </div>

        {/* Map */}
        <div className="md:w-7/12 w-full">
          <div ref={containerRef} className="relative w-full rounded-xl overflow-hidden">

            {/* World Map SVG */}
            <img
              src="/World_Map.svg"
              alt="World map showing GirlLEAD operational countries"
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />

            {/* Tooltip */}
            {tooltip.visible && (
              <div
                className="absolute z-20 text-white text-xs font-semibold px-3 py-1.5 rounded-md pointer-events-none whitespace-nowrap -translate-x-1/2"
                style={{
                  left: tooltip.x,
                  top: tooltip.y - 10,
                  transform: "translateX(-50%) translateY(-100%)",
                  background: tooltip.hq ? "#c0392b" : "#0d4a4a",
                }}
              >
                {tooltip.text}
                <span
                  className="absolute left-1/2 top-full w-0 h-0 block"
                  style={{
                    transform: "translateX(-50%)",
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: `5px solid ${tooltip.hq ? "#c0392b" : "#0d4a4a"}`,
                  }}
                />
              </div>
            )}

            {/* Markers */}
            {COUNTRIES.map((c, i) => (
              <div
                key={i}
                className="absolute cursor-pointer transition-transform duration-150 hover:scale-125"
                style={{
                  left: c.x,
                  top: c.y,
                  transform: "translate(-50%, -100%)", /* anchor tip to coordinate */
                  zIndex: c.hq ? 10 : c.uk ? 9 : 1,
                }}
                onMouseEnter={e => handleEnter(e, c)}
                onMouseLeave={handleLeave}
              >
                {/* HQ pulse ring behind teardrop */}
                {c.hq && (
                  <span
                    className="absolute animate-ping rounded-full"
                    style={{
                      width: 28, height: 28,
                      top: -4, left: -4,
                      background: "rgba(192,57,43,0.3)",
                    }}
                  />
                )}

                <Teardrop
                  size={c.hq ? 22 : c.uk ? 20 : 14}
                  color={c.hq ? "#c0392b" : c.uk ? "#1a7a7a" : "#0d5c5c"}
                  border={c.hq ? "#fff" : c.uk ? "#0d4a4a" : "#fff"}
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}