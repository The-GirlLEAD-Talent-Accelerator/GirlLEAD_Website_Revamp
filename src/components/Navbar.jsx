import { useState } from "react";
import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-teal-700 dark:text-teal-400 font-semibold"
        : "text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400"
    }`;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // cleanup when unmounting
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
        <Link to="/">
          <img
            src="/girl-lead-logo.png"
            alt="GirlLead Logo"
            className="w-14 h-10 scale-150 object-contain"
          />
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700 dark:text-gray-200">
          <li><Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link></li>
          <li><a href="#programs" className="hover:text-teal-600 dark:hover:text-teal-400">Programs</a></li>
          <li><Link to="/about" className="hover:text-teal-600 dark:hover:text-teal-400">About Us</Link></li>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li>
            <NavLink to="/programs" className={navLinkClass}>
              Programs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <a
            href="#donate"
            className="hidden md:inline-block bg-teal-700 text-white px-5 py-2 rounded-lg"
          >
            Donate Now
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 dark:text-gray-200 z-50 relative"
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE BLUR OVERLAY */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 transition-colors">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700 dark:text-gray-200">
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><a href="#programs" onClick={() => setOpen(false)}>Programs</a></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
        <div
          className="
            md:hidden
            fixed
            left-0
            right-0
            h-[calc(100vh-7vh)]  /* full height minus navbar */
            z-40
            backdrop-blur-lg
            bg-white/60
            dark:bg-black/50
            border-t border-white/20
            flex
            flex-col
            items-center
            justify-start
            pt-44
          "
        >
          <ul className="flex flex-col items-center space-y-6 font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={navLinkClass}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/programs"
                onClick={() => setOpen(false)}
                className={navLinkClass}
              >
                Programs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={navLinkClass}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="bg-teal-700 text-white px-6 py-3 rounded-lg"
              >
                Donate Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}


// import { useState } from "react";
// import { FiX, FiMenu } from "react-icons/fi";
// import ThemeToggle from "./ThemeToggle";
// import { NavLink, Link } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   // Helper for active link styling
//   const navLinkClass = ({ isActive }) =>
//     `transition-colors ${
//       isActive
//         ? "text-teal-700 dark:text-teal-400 font-semibold"
//         : "text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400"
//     }`;

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <Link to="/">
//             <img
//               src="/girl-lead-logo.png"
//               alt="GirlLead Logo"
//               className="w-14 h-10 scale-150 object-contain transition-transform"
//             />
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8 font-medium">
//           <li>
//             <NavLink to="/programs" className={navLinkClass}>
//               Programs
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/about" className={navLinkClass}>
//               About Us
//             </NavLink>
//           </li>
//         </ul>

//         <div className="flex items-center space-x-4">
//           {/* Theme toggle */}
//           <ThemeToggle />

//           {/* Donate button */}
//           <a
//             href="#donate"
//             className="hidden md:inline-block bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition-colors"
//           >
//             Donate Now
//           </a>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-gray-700 dark:text-gray-200"
//           >
//             {open ? <FiX size={28} /> : <FiMenu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 transition-colors h-full">
//           <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
//             <li>
//               <NavLink
//                 to="/programs"
//                 onClick={() => setOpen(false)}
//                 className={navLinkClass}
//               >
//                 Programs
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/about"
//                 onClick={() => setOpen(false)}
//                 className={navLinkClass}
//               >
//                 About Us
//               </NavLink>
//             </li>

//             <li>
//               <a
//                 href="#donate"
//                 onClick={() => setOpen(false)}
//                 className="bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition-colors"
//               >
//                 Donate Now
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
