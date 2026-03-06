import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Helper for active link styling
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
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/girl-lead-logo.png"
            alt="GirlLead Logo"
            className="h-10 w-auto object-contain transition-transform hover:opacity-80"
          />
        </Link>

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
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Donate button */}
          <button
            onClick={() => alert('Donation functionality coming soon')}
            className="hidden md:inline-block bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition-colors"
          >
            Donate Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
            aria-expanded={open}
            className="md:hidden text-gray-700 dark:text-gray-200 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-[7vh] left-0 right-0 bottom-0 z-40 backdrop-blur-lg bg-white/60 dark:bg-black/50 border-t border-white/20 flex flex-col items-center justify-start pt-20 overflow-y-auto">
          <ul className="flex flex-col items-center space-y-6 font-medium">
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
              <button
                onClick={() => {
                  setOpen(false);
                  alert('Donation functionality coming soon');
                }}
                className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors"
              >
                Donate Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}