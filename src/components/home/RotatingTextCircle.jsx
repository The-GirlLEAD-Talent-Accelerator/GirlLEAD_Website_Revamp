
// import { motion as Motion } from "framer-motion";
// import { BsArrowDown } from "react-icons/bs";

// export default function RotatingTextCircle({ text = "LEARN MORE • ", size = 120 }) {
//   const repeatedText = text.repeat(2);

//   return (
//     <div
//       className="relative flex items-center justify-center"
//       style={{ width: size, height: size }}
//     >
//       {/* Rotating circular text */}
//       <Motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//         className="absolute inset-0 text-[10px] md:text-[12px] tracking-[4px] uppercase font-medium text-white"
//         style={{
//           transformOrigin: "center",
//           fontFamily: "sans-serif",
//         }}
//       >
//         {Array.from(repeatedText).map((char, i) => {
//           const angle = (i / repeatedText.length) * 360;
//           return (
//             <span
//               key={i}
//               className="absolute left-1/2 top-1/2"
//               style={{
//                 transform: `rotate(${angle}deg) translate(${size / 2.6}px) rotate(${angle * -1}deg)`,
//                 transformOrigin: "center",
//               }}
//             >
//               {char}
//             </span>
//           );
//         })}
//       </Motion.div>

//       {/* Center button */}
//       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-teal-700 flex items-center justify-center text-xs font-bold shadow-md">
//         <BsArrowDown className="w-4 h-4 md:w-6 md:h-6"/>
//       </div>
//     </div>
//   );
// }

// will come back to this later
import { motion as Motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";

export default function RotatingTextCircle({
  text = "LEARN MORE • ",
  size = 140,
}) {
  const repeatedText = text.repeat(2);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Rotating circular text */}
      <Motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute inset-0 text-[10px] md:text-[12px] tracking-[4px] uppercase font-medium text-white"
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
                  translate(${size / 2}px)
                  rotate(${angle * 1}deg)
                `,
                transformOrigin: "center",
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
        className="absolute rounded-full border-[3px] border-white"
        style={{
          width: size * 0.68,
          height: size * 0.68,
        }}
      ></Motion.div>

      {/* Center circle */}
      <div
        className="rounded-full bg-white text-teal-700 flex items-center justify-center shadow-md"
        style={{
          width: size * 0.35,
          height: size * 0.35,
        }}
      >
        <BsArrowDown className="w-4 h-4 md:w-5 md:h-5" />
      </div>
    </div>
  );
}




