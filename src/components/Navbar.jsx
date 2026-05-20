import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import Button from "./common/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${isActive
      ? "text-brand-primary font-semibold"
      : "text-text-muted hover:text-brand-primary"
    }`;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-bg-white shadow-sm z-50 transition-colors">
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
            <NavLink to="/" className={navLinkClass}>        {/* ← added */}
              Home
            </NavLink>
          </li>
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
          <Button
            onClick={() => window.open('https://paystack.shop/pay/eefmjuc6s1', '_blank')}
            variant="primary"
            className="hidden md:inline-flex"
          >
            Donate Now
          </Button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
            aria-expanded={open}
            className="md:hidden text-text-main z-50 relative p-2 rounded hover:bg-bg-mute transition-colors"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden fixed left-0 right-0 h-[calc(100vh-7vh)] z-40
            backdrop-blur-lg bg-bg-mute/60 border-t border-border-soft/20
            flex flex-col items-center justify-start pt-44
          "
        >
          <ul className="flex flex-col items-center space-y-6 font-medium">
            <li>
              <NavLink
                to="/"                                        {/* ← added */}
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
              <Button
                onClick={() => {
                  setOpen(false);
                  window.open('https://paystack.shop/pay/eefmjuc6s1', '_blank');
                }}
                variant="primary"
                className="w-full text-center"
              >
                Donate Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}