import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";
import { useModeAnimation } from "react-theme-switch-animation";
import { FiMoon, FiSun } from "react-icons/fi";

// Navbar Component
// - Fixed top navigation bar
// - Links: Blogs, SAT, About Us, Join Us, NCTB, Study Abroad
// Change the code as required

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();
  const closeMenu = () => setIsMenuOpen(false);

  const navData = [
    { id: 0, title: "Home", path: "" },
    { id: 1, title: "About Us", path: "about-us" },
    { id: 2, title: "Projects", path: "projects" },
    { id: 3, title: "Blogs", path: "blog" },
    { id: 4, title: "Join Us", path: "join-us" },
  ];

  return (
    <>
      {/* Top bar */}
      <nav className="sticky top-0 z-50 bg-[var(--primary-color)]/38 w-full">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              aria-label="Open menu"
            >
              <FaBars className="h-6 w-6" />
            </button>
            {/* Logo */}
            <div className="text-2xl font-bold text-[var(--foreground-color)]">
              <Link to="/" className="hover:text-brandSecondary">
                Logo
              </Link>
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-6 flex-1 justify-evenly lg:mx-[7%]">
            {navData.slice(0, -1).map((nav) => (
              <li key={nav.id}>
                <Link
                  to={`/${nav.path}`}
                  className="text-[var(--foreground-color)] hover:text-brandSecondary transition text-[17.2px] font-agrandir"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Join and Theme Toggle Buttons */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              ref={ref}
              onClick={toggleSwitchTheme}
              className="text-[var(--background-color)] flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <FiMoon className="w-6 h-6" />
              ) : (
                <FiSun className="w-6 h-6" />
              )}
            </button>

            {/* Join Button */}
            <Button variant="default" size="lg" asChild>
              <Link to={`/${navData[navData.length - 1].path}`}>
                {navData[navData.length - 1].title}
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Overlay via portal */}
      {isMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-40 md:hidden" onClick={closeMenu} />,
          document.body
        )}

      {/* LEFT drawer(Mobile menu) via portal */}
      {createPortal(
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[var(--primary-color)]/38 z-50 transform transition-transform duration-300 ease-in-out
            ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden shadow-lg`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-end mb-4">
              <button onClick={closeMenu} aria-label="Close menu">
                <FaTimes className="h-6 w-6 text-gray-600 hover:text-pureBlack" />
              </button>
            </div>

            {/* search inside Mobile Menu */}
            {/* <form
              className="mb-6"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <div className="flex items-center border border-gray-600 rounded-md px-2 h-10">
                <FaSearch className="mr-2" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
            </form> */}

            {/* Drawer links */}
            <ul className="flex flex-col gap-6">
              {navData.slice(0, -1).map((nav) => (
                <li key={nav.id}>
                  <Link
                    to={`/${nav.path}`}
                    onClick={closeMenu}
                    className="text-[var(--foreground-color)] hover:text-brandSecondary transition text-[1.1rem] font-agrandir"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
