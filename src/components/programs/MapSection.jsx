import { useEffect, useRef } from "react";

const COUNTRIES = [
  { name: "Nigeria", hq: true,  coords: [8.6753, 9.0820] },
  { name: "Benin Republic",    coords: [2.3158, 9.3077] },
  { name: "Botswana",          coords: [24.6849, -22.3285] },
  { name: "Burundi",           coords: [29.9189, -3.3731] },
  { name: "Cameroon",          coords: [12.3547, 5.9631] },
  { name: "Egypt",             coords: [30.8025, 26.8206] },
  { name: "Eswatini",          coords: [31.4659, -26.5225] },
  { name: "Ethiopia",          coords: [40.4897, 9.1450] },
  { name: "Gambia",            coords: [-15.3101, 13.4432] },
  { name: "Ghana",             coords: [-1.0232, 7.9465] },
  { name: "Kenya",             coords: [37.9062, -0.0236] },
  { name: "Lesotho",           coords: [28.2336, -29.6100] },
  { name: "Liberia",           coords: [-9.4295, 6.4281] },
  { name: "Libya",             coords: [17.2283, 26.3351] },
  { name: "Madagascar",        coords: [46.8691, -18.7669] },
  { name: "Malawi",            coords: [34.3015, -13.2543] },
  { name: "Mauritania",        coords: [-10.9408, 21.0079] },
  { name: "Morocco",           coords: [-7.0926, 31.7917] },
  { name: "Mozambique",        coords: [35.5296, -18.6657] },
  { name: "Namibia",           coords: [18.4904, -22.9576] },
  { name: "Rwanda",            coords: [29.8739, -1.9403] },
  { name: "Sierra Leone",      coords: [-11.7799, 8.4606] },
  { name: "Somalia",           coords: [46.1996, 5.1521] },
  { name: "South Africa",      coords: [25.0830, -28.8166] },
  { name: "South Sudan",       coords: [31.3070, 6.8770] },
  { name: "Sudan",             coords: [30.2176, 12.8628] },
  { name: "Tanzania",          coords: [34.8888, -6.3690] },
  { name: "Togo",              coords: [0.8248, 8.6195] },
  { name: "Tunisia",           coords: [9.5375, 33.8869] },
  { name: "United Kingdom", uk: true, coords: [-3.4360, 55.3781] },
  { name: "Zambia",            coords: [27.8493, -13.1339] },
  { name: "Zimbabwe",          coords: [29.1549, -19.0154] },
];

export default function MapSection() {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const W = 1010, H = 666;
    const ns = "http://www.w3.org/2000/svg";

    async function loadDeps() {
      // Load TopoJSON and D3-geo from CDN
      await Promise.all([
        loadScript("https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"),
        loadScript("https://cdn.jsdelivr.net/npm/d3-geo@3/dist/d3-geo.min.js"),
      ]);

      const res = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
      const worldData = await res.json();

      const land = window.topojson.feature(worldData, worldData.objects.countries);
      const projection = window.d3.geoNaturalEarth1()
        .scale(155)
        .translate([W / 2 - 30, H / 2 + 40]);
      const pathGen = window.d3.geoPath().projection(projection);

      const svg = svgRef.current;
      svg.innerHTML = "";

      // Background
      const bg = document.createElementNS(ns, "rect");
      bg.setAttribute("width", W); bg.setAttribute("height", H);
      bg.setAttribute("fill", "#c8e6e6");
      svg.appendChild(bg);

      // Land
      const landG = document.createElementNS(ns, "g");
      land.features.forEach(f => {
        const el = document.createElementNS(ns, "path");
        el.setAttribute("d", pathGen(f));
        el.setAttribute("fill", "#b8d4d4");
        el.setAttribute("stroke", "#8ab8b8");
        el.setAttribute("stroke-width", "0.4");
        landG.appendChild(el);
      });
      svg.appendChild(landG);

      // Markers
      const markersG = document.createElementNS(ns, "g");
      COUNTRIES.forEach(c => {
        const proj = projection(c.coords);
        if (!proj) return;
        const [x, y] = proj;
        const g = document.createElementNS(ns, "g");
        g.style.cursor = "pointer";

        // UK gets a larger outer ring to make it prominent
        if (c.uk) {
          const outer = document.createElementNS(ns, "circle");
          outer.setAttribute("cx", x); outer.setAttribute("cy", y);
          outer.setAttribute("r", "11");
          outer.setAttribute("fill", "#1a7a7a");
          outer.setAttribute("stroke", "#0d4a4a");
          outer.setAttribute("stroke-width", "2.5");
          g.appendChild(outer);
        }

        // HQ pulse ring
        if (c.hq) {
          const pulse = document.createElementNS(ns, "circle");
          pulse.setAttribute("cx", x); pulse.setAttribute("cy", y);
          pulse.setAttribute("r", "15");
          pulse.setAttribute("fill", "none");
          pulse.setAttribute("stroke", "#c0392b");
          pulse.setAttribute("stroke-width", "1.5");
          pulse.setAttribute("opacity", "0.4");
          g.appendChild(pulse);
        }

        // Main pin
        const circle = document.createElementNS(ns, "circle");
        circle.setAttribute("cx", x); circle.setAttribute("cy", y);
        circle.setAttribute("r", c.hq ? "9" : c.uk ? "5" : "5");
        circle.setAttribute("fill", c.hq ? "#c0392b" : "#0d5c5c");
        circle.setAttribute("stroke", "#fff");
        circle.setAttribute("stroke-width", c.hq ? "2" : "1.5");
        g.appendChild(circle);

        // Tooltip on hover
        g.addEventListener("mouseenter", () => {
          const tip = tooltipRef.current;
          const containerRect = containerRef.current.getBoundingClientRect();
          const gRect = g.getBoundingClientRect();
          tip.textContent = c.hq ? `${c.name} (Headquarters)` : c.name;
          tip.style.left = `${gRect.left - containerRect.left + gRect.width / 2}px`;
          tip.style.top = `${gRect.top - containerRect.top}px`;
          tip.style.opacity = "1";
          tip.style.background = c.hq ? "#c0392b" : "#0d4a4a";
        });
        g.addEventListener("mouseleave", () => {
          tooltipRef.current.style.opacity = "0";
        });

        markersG.appendChild(g);
      });
      svg.appendChild(markersG);

      // Legend
      const legG = document.createElementNS(ns, "g");
      const legBg = document.createElementNS(ns, "rect");
      legBg.setAttribute("x", "12"); legBg.setAttribute("y", H - 60);
      legBg.setAttribute("width", "320"); legBg.setAttribute("height", "48");
      legBg.setAttribute("rx", "6"); legBg.setAttribute("fill", "#d4ecec");
      legG.appendChild(legBg);

      [
        { label: "Headquarters (Nigeria)", color: "#c0392b", x: 24 },
        { label: "Operational country",    color: "#0d5c5c", x: 180 },
      ].forEach(({ label, color, x }) => {
        const dot = document.createElementNS(ns, "circle");
        dot.setAttribute("cx", x); dot.setAttribute("cy", H - 36);
        dot.setAttribute("r", "5"); dot.setAttribute("fill", color);
        legG.appendChild(dot);
        const txt = document.createElementNS(ns, "text");
        txt.setAttribute("x", x + 10); txt.setAttribute("y", H - 32);
        txt.setAttribute("font-size", "11"); txt.setAttribute("fill", "#0d4a4a");
        txt.textContent = label;
        legG.appendChild(txt);
      });
      svg.appendChild(legG);
    }

    loadDeps().catch(console.error);
  }, []);

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
        <div className="md:w-7/12 w-full flex justify-center">
          <div ref={containerRef} className="relative w-full max-w-2xl rounded-xl overflow-hidden">

            {/* Tooltip */}
            <div
              ref={tooltipRef}
              className="absolute z-10 text-white text-xs font-medium px-3 py-1.5 rounded-md pointer-events-none whitespace-nowrap opacity-0 transition-opacity duration-150 -translate-x-1/2 -translate-y-full"
              style={{ background: "#0d4a4a" }}
            />

            <svg
              ref={svgRef}
              viewBox="0 0 1010 666"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto block"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src; s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
}