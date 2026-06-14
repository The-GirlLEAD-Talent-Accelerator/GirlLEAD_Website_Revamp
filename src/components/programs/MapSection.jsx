import { useState, useRef } from "react";

const COUNTRIES = [
  { name: "Nigeria",        hq: true,  x: "50.1%", y: "56.8%" },
  { name: "Benin Republic",            x: "48.8%", y: "56.2%" },
  { name: "Botswana",                  x: "52.8%", y: "70.2%" },
  { name: "Burundi",                   x: "55.0%", y: "61.5%" },
  { name: "Cameroon",                  x: "51.2%", y: "57.8%" },
  { name: "Egypt",                     x: "54.5%", y: "43.8%" },
  { name: "Eswatini",                  x: "54.0%", y: "73.5%" },
  { name: "Ethiopia",                  x: "57.5%", y: "56.5%" },
  { name: "Gambia",                    x: "44.0%", y: "53.5%" },
  { name: "Ghana",                     x: "47.5%", y: "56.8%" },
  { name: "Kenya",                     x: "57.0%", y: "60.5%" },
  { name: "Lesotho",                   x: "53.2%", y: "74.2%" },
  { name: "Liberia",                   x: "45.5%", y: "57.5%" },
  { name: "Libya",                     x: "51.8%", y: "42.8%" },
  { name: "Madagascar",                x: "58.8%", y: "67.5%" },
  { name: "Malawi",                    x: "55.2%", y: "65.8%" },
  { name: "Mauritania",                x: "45.0%", y: "49.5%" },
  { name: "Morocco",                   x: "47.0%", y: "40.8%" },
  { name: "Mozambique",                x: "55.8%", y: "68.5%" },
  { name: "Namibia",                   x: "51.0%", y: "70.8%" },
  { name: "Rwanda",                    x: "54.5%", y: "62.0%" },
  { name: "Sierra Leone",              x: "44.8%", y: "57.2%" },
  { name: "Somalia",                   x: "58.8%", y: "56.8%" },
  { name: "South Africa",             x: "52.2%", y: "74.5%" },
  { name: "South Sudan",              x: "55.0%", y: "57.5%" },
  { name: "Sudan",                     x: "54.8%", y: "50.8%" },
  { name: "Tanzania",                  x: "55.8%", y: "63.5%" },
  { name: "Togo",                      x: "48.2%", y: "56.5%" },
  { name: "Tunisia",                   x: "50.5%", y: "40.2%" },
  { name: "United Kingdom", uk: true,  x: "47.8%", y: "24.5%" },
  { name: "Zambia",                    x: "53.5%", y: "66.2%" },
  { name: "Zimbabwe",                  x: "53.2%", y: "68.8%" },
];

export default function MapSection() {
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0, hq: false, uk: false });

  const handleEnter = (e, c) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const pinRect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      text: c.hq ? `${c.name} (Headquarters)` : c.name,
      x: pinRect.left - containerRect.left + pinRect.width / 2,
      y: pinRect.top - containerRect.top,
      hq: !!c.hq,
      uk: !!c.uk,
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

            {/* SVG map from public folder */}
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
                className="absolute z-20 text-white text-xs font-semibold px-3 py-1.5 rounded-md pointer-events-none whitespace-nowrap -translate-x-1/2 -translate-y-full"
                style={{
                  left: tooltip.x,
                  top: tooltip.y - 8,
                  background: tooltip.hq ? "#c0392b" : "#0d4a4a",
                }}
              >
                {tooltip.text}
                <span
                  className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 block"
                  style={{
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
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: c.x, top: c.y }}
                onMouseEnter={e => handleEnter(e, c)}
                onMouseLeave={handleLeave}
              >
                {/* HQ pulse ring */}
                {c.hq && (
                  <span
                    className="absolute rounded-full animate-ping"
                    style={{
                      width: 22, height: 22,
                      top: -5, left: -5,
                      background: "rgba(192,57,43,0.35)",
                    }}
                  />
                )}

                {/* UK outer ring */}
                {c.uk && (
                  <span
                    className="absolute rounded-full"
                    style={{
                      width: 20, height: 20,
                      top: -5, left: -5,
                      background: "#1a7a7a",
                      border: "2.5px solid #0d4a4a",
                    }}
                  />
                )}

                {/* Pin */}
                <span
                  className="block rounded-full cursor-pointer transition-transform duration-150 hover:scale-125 relative z-10"
                  style={{
                    width:  c.hq ? 14 : c.uk ? 8 : 8,
                    height: c.hq ? 14 : c.uk ? 8 : 8,
                    background: c.hq ? "#c0392b" : "#0d5c5c",
                    border: "2px solid #fff",
                  }}
                />
              </div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-3 left-3 bg-white/85 rounded-lg px-3 py-2 flex flex-col gap-1.5 text-xs font-medium text-[#0d4a4a]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#c0392b] border-2 border-white flex-shrink-0" />
                Headquarters (Nigeria)
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0d5c5c] border-2 border-white flex-shrink-0" />
                Operational country
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#1a7a7a] border-2 border-[#0d4a4a] flex-shrink-0" />
                United Kingdom
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}