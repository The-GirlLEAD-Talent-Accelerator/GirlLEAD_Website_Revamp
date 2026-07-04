import { useState, useRef, useEffect } from "react";

const COUNTRIES = [
  { name: "Morocco",          x: "34.1%", y: "33.5%" },
  { name: "Tunisia",          x: "45.0%", y: "32.0%" },
  { name: "Libya",            x: "51.8%", y: "41.9%" },
  { name: "Egypt",            x: "59.1%", y: "41.2%" },
  { name: "Mauritania",       x: "32.2%", y: "48.8%" },
  { name: "Gambia",           x: "26.1%", y: "53.9%" },
  { name: "Sierra Leone",     x: "29.3%", y: "58.1%" },
  { name: "Liberia",          x: "31.0%", y: "60.3%" },
  { name: "Ghana",            x: "37.0%", y: "59.1%" },
  { name: "Togo",             x: "38.8%", y: "59.4%" },
  { name: "Benin Republic",   x: "39.8%", y: "59.1%" },
  { name: "Nigeria", hq: true, x: "43.2%", y: "59.5%" },
  { name: "Cameroon",         x: "46.5%", y: "61.1%" },
  { name: "Sudan",            x: "59.8%", y: "49.6%" },
  { name: "South Sudan",      x: "59.8%", y: "58.5%" },
  { name: "Ethiopia",         x: "67.0%", y: "58.8%" },
  { name: "Somalia",          x: "70.0%", y: "65.0%" },
  { name: "Rwanda",           x: "60.3%", y: "70.9%" },
  { name: "Burundi",          x: "60.3%", y: "71.9%" },
  { name: "Kenya",            x: "67.0%", y: "67.0%" },
  { name: "Tanzania",         x: "64.3%", y: "71.7%" },
  { name: "Malawi",           x: "63.6%", y: "78.2%" },
  { name: "Mozambique",       x: "66.1%", y: "78.5%" },
  { name: "Madagascar",       x: "72.5%", y: "84.0%" },
  { name: "Zambia",           x: "56.7%", y: "80.0%" },
  { name: "Zimbabwe",         x: "60.3%", y: "83.0%" },
  { name: "Botswana",         x: "54.9%", y: "85.0%" },
  { name: "Namibia",          x: "50.4%", y: "85.0%" },
  { name: "Eswatini",         x: "61.3%", y: "93.2%" },
  { name: "Lesotho",          x: "59.3%", y: "94.7%" },
  { name: "South Africa",     x: "54.9%", y: "94.0%" },
  { name: "United Kingdom", uk: true, x: "34.7%", y: "11.0%" },
];

const Teardrop = ({ size = 14, color = "#0d5c5c", border = "#fff" }) => (
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
  const [containerWidth, setContainerWidth] = useState(600);
  const [isMobile, setIsMobile] = useState(false);

  // Desktop tooltip state
  const [desktopTooltip, setDesktopTooltip] = useState({
    visible: false, text: "", x: 0, y: 0, hq: false,
  });

  // Mobile tooltip state — shows country name in a pill below the map
  const [mobileLabel, setMobileLabel] = useState({ visible: false, text: "", hq: false });

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setContainerWidth(w);
        setIsMobile(window.innerWidth < 768);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", update);
    return () => { ro.disconnect(); window.removeEventListener("resize", update); };
  }, []);

  // Desktop: full size pins
  const desktopPinSize   = 14;
  const desktopPinSizeHQ = 22;
  const desktopPinSizeUK = 18;

  // Mobile: aggressively scaled pins
  const mobileScale    = Math.min(1, containerWidth / 500);
  const mobilePinSize   = Math.max(4, Math.round(9  * mobileScale));
  const mobilePinSizeHQ = Math.max(7, Math.round(13 * mobileScale));
  const mobilePinSizeUK = Math.max(5, Math.round(11 * mobileScale));

  // Desktop hover handlers — unchanged
  const handleEnter = (e, c) => {
    const cRect = containerRef.current.getBoundingClientRect();
    const pRect = e.currentTarget.getBoundingClientRect();
    setDesktopTooltip({
      visible: true,
      text: c.hq ? `${c.name} (Headquarters)` : c.name,
      x: pRect.left - cRect.left + pRect.width / 2,
      y: pRect.top - cRect.top,
      hq: !!c.hq,
    });
  };
  const handleLeave = () => setDesktopTooltip(t => ({ ...t, visible: false }));

  // Mobile tap handler — shows label pill below map, tap same pin to dismiss
  const handleTouch = (e, c) => {
    e.preventDefault();
    e.stopPropagation();
    const newText = c.hq ? `${c.name} (Headquarters)` : c.name;
    setMobileLabel(prev =>
      prev.visible && prev.text === newText
        ? { visible: false, text: "", hq: false }
        : { visible: true, text: newText, hq: !!c.hq }
    );
  };

  return (
    <section className="bg-bg-alt py-12 px-4 md:px-6 md:py-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

        {/* Text */}
        <div className="md:w-5/12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-hero leading-tight">
            We operate in<br />
            multiple countries<br />
            in Africa
          </h2>
        </div>

        {/* Map column */}
        <div className="w-full md:w-7/12">

          {/* Map container */}
          <div
            ref={containerRef}
            className="relative w-full rounded-xl overflow-hidden"
            onClick={() => {
              setDesktopTooltip(t => ({ ...t, visible: false }));
              setMobileLabel({ visible: false, text: "", hq: false });
            }}
          >
            <img
              src="/World_Map.svg"
              alt="World map showing GirlLEAD operational countries"
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />

            {/* Desktop tooltip — hover only, hidden on mobile */}
            {!isMobile && desktopTooltip.visible && (
              <div
                className="absolute z-20 text-white text-xs font-semibold px-2 py-1 rounded-md pointer-events-none whitespace-nowrap hidden md:block"
                style={{
                  background: desktopTooltip.hq ? "#c0392b" : "#0d4a4a",
                  left: Math.max(50, Math.min(desktopTooltip.x, containerWidth - 50)),
                  top: desktopTooltip.y - 8,
                  transform: "translateX(-50%) translateY(-100%)",
                }}
              >
                {desktopTooltip.text}
                <span
                  className="absolute left-1/2 top-full w-0 h-0 block"
                  style={{
                    transform: "translateX(-50%)",
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: `5px solid ${desktopTooltip.hq ? "#c0392b" : "#0d4a4a"}`,
                  }}
                />
              </div>
            )}

            {/* Markers */}
            {COUNTRIES.map((c, i) => {
              const size = isMobile
                ? (c.hq ? mobilePinSizeHQ : c.uk ? mobilePinSizeUK : mobilePinSize)
                : (c.hq ? desktopPinSizeHQ : c.uk ? desktopPinSizeUK : desktopPinSize);

              return (
                <div
                  key={i}
                  className="absolute cursor-pointer"
                  style={{
                    left: c.x,
                    top: c.y,
                    transform: "translate(-50%, -100%)",
                    zIndex: c.hq ? 10 : c.uk ? 9 : 1,
                    // Larger invisible touch target on mobile
                    padding: isMobile ? "4px" : "0px",
                  }}
                  onMouseEnter={!isMobile ? (e => handleEnter(e, c)) : undefined}
                  onMouseLeave={!isMobile ? handleLeave : undefined}
                  onTouchStart={isMobile ? (e => handleTouch(e, c)) : undefined}
                >
                  {c.hq && (
                    <span
                      className="absolute animate-ping rounded-full"
                      style={{
                        width: size + 6,
                        height: size + 6,
                        top: -(size + 6) / 2 + size / 2,
                        left: -(size + 6) / 2 + size / 2,
                        background: "rgba(192,57,43,0.3)",
                      }}
                    />
                  )}
                  <Teardrop
                    size={size}
                    color={c.hq ? "#c0392b" : c.uk ? "#1a7a7a" : "#0d5c5c"}
                    border={c.hq ? "#fff" : c.uk ? "#0d4a4a" : "#fff"}
                  />
                </div>
              );
            })}
          </div>

          {/* Mobile label pill — rendered BELOW the map, never overlaps pins */}
          <div className="md:hidden mt-3 flex justify-center min-h-[32px]">
            {mobileLabel.visible && (
              <div
                className="text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md"
                style={{ background: mobileLabel.hq ? "#c0392b" : "#0d4a4a" }}
              >
                {mobileLabel.text}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}