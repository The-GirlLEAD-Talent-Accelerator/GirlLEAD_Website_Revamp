// will come back to this later
import { motion as Motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function RotatingTextCircle({
  text = "LEARN MORE • ",
  size = 140,
}) {
  const repeatedText = text.repeat(2);

  return (
    <Link to="/Programs">
      <div
        className="relative flex items-center justify-center cursor-pointer"
        style={{ width: size, height: size }}
      >
        {/* Rotating circular text */}
        <Motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 text-[10px] md:text-[12px] uppercase font-medium text-text-onBrand"
          style={{
            transformOrigin: "center",
            fontFamily: "sans-serif",
          }}
        >
          {Array.from(repeatedText).map((char, i) => {
            const angle = (i / repeatedText.length) * 360;
            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translate(0, -${size / 2.1}px) 
                  `,
                  transformOrigin: "0 0",
                }}
              >
                {char}
              </span>
            );
          })}
        </Motion.div>

        {/* Middle rotating ring */}
        <Motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute rounded-full border-[3px] border-bg-white"
          style={{
            width: size * 0.68,
            height: size * 0.68,
          }}
        />

        {/* Center circle */}
        <div
          className="rounded-full bg-bg-white text-brand-primary flex items-center justify-center shadow-md"
          style={{
            width: size * 0.35,
            height: size * 0.35,
          }}
        >
          <MdArrowOutward className="w-4 h-4 md:w-6 md:h-6" />
        </div>
      </div>
    </Link>
  );
}
