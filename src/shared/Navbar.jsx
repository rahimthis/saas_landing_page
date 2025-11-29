import React, { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../components/icons/Logo";
import { motion } from "motion/react";
import Menu from "../components/icons/Menu";
import Close from "../components/icons/Close";

const Navbar = () => {
  const navItems = ["Home", "Pricing", "About", "Community"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-bottom text-primary-50 relative px-6 lg:px-0" >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 ">
        {/* Logo */}
        <a className="flex items-center gap-x-3" href="/">
          <Logo className="h-6 w-auto" width={5} />
          <p className="text-xl font-black tracking-tight">NoteFlow</p>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-x-8">
          {navItems.map((item) => {
            const path = `/${item === "Home" ? "" : item.toLowerCase()}`;
            return (
              <li key={item}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-primary-50 hover:text-primary-500 transition-properties text-lg/8 ${
                      isActive ? "font-bold" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-x-3">
          <button className="border-primary-50 border-2 rounded-full px-8 py-3 text-lg/8 hover:bg-primary-50 hover:text-primary-1300 transition-properties">
            Login
          </button>
          <button className="bg-primary-500 border-primary-500 text-primary-1300 primary-glow primary-glow-hover border-2 rounded-full px-8 py-3 text-lg/8 hover:bg-primary-50 hover:text-primary-1300 hover:border-primary-50 transition-properties">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <motion.button
          className="lg:hidden flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          initial={{ rotate: 0 }}
          animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Menu className="h-6 w-6 stroke-primary-50" width={2} />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden fixed top-0 left-0 bottom-0 z-50 w-3/4 max-w-xs bg-primary-1300/95 backdrop-blur-sm flex flex-col justify-start pt-12 px-6"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-3 rounded-full border-2 border-primary-50 hover:bg-primary-50 transition-properties"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Close className="h-6 w-6 stroke-primary-50" width={2} />
          </button>

          {/* Menu Links */}
          <ul className="flex flex-col gap-y-6 mt-8">
            {navItems.map((item) => {
              const path = `/${item === "Home" ? "" : item.toLowerCase()}`;
              return (
                <li key={item}>
                  <NavLink
                    to={path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-primary-50 text-xl font-medium hover:text-primary-500 ${
                        isActive ? "font-bold" : ""
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-y-4 mt-12">
            <button
              className="border-primary-50 border-2 rounded-full px-8 py-3 text-lg/8 hover:bg-primary-50 hover:text-primary-1300 transition-properties"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </button>
            <button
              className="bg-primary-500 border-primary-500 text-primary-1300 primary-glow primary-glow-hover border-2 rounded-full px-8 py-3 text-lg/8 hover:bg-primary-50 hover:text-primary-1300 hover:border-primary-50 transition-properties"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
