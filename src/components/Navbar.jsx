import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";
import { useModeAnimation } from "react-theme-switch-animation";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();
  const closeMenu = () => setIsMenuOpen(false);
  const [scrolled, setScrolled] = useState(false);

  const navData = [
    { id: 0, title: "Home", path: "" },
    { id: 1, title: "About Us", path: "about-us" },
    { id: 2, title: "Projects", path: "projects" },
    { id: 3, title: "Blogs", path: "blogs" },
    { id: 4, title: "Members", path: "team" },
    { id: 5, title: "Contact", path: "contact" },
    { id: 6, title: "Join Us", path: "join-us" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-brandPrimary/95 to-brandSecondary/95 backdrop-blur-lg backdrop-saturate-150 shadow-lg border-b border-brandTertiary/30 py-2' 
          : 'bg-gradient-to-r from-brandPrimary to-brandSecondary py-3'
      }`}>
        {/* Subtle glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-pureWhite/20 to-transparent opacity-20 pointer-events-none"></div>
        
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Hamburger & Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
                aria-label="Open menu"
              >
                <FaBars className="h-5 w-5 text-pureWhite hover:text-brandTertiary transition-colors" />
              </button>
              {/* Logo */}
              <div className="text-xl font-bold">
                <Link 
                  to="/" 
                  className="text-pureWhite hover:text-brandTertiary transition-colors tracking-tight font-semibold"
                >
                  Innovation Hub
                </Link>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8">
              {navData.slice(0, -1).map((nav) => (
                <li key={nav.id}>
                  <Link
                    to={`/${nav.path}`}
                    className="text-pureWhite hover:text-brandTertiary transition-colors text-sm font-medium tracking-wide relative group"
                  >
                    {nav.title}
                    {/* Underline effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brandTertiary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                ref={ref}
                onClick={toggleSwitchTheme}
                className="text-pureWhite hover:text-brandTertiary transition-colors hover:scale-105 cursor-pointer p-2 rounded-full hover:bg-pureWhite/10"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? (
                  <FiMoon className="w-4 h-4" />
                ) : (
                  <FiSun className="w-4 h-4" />
                )}
              </button>

              {/* Join Button */}
              <Button 
                variant="default" 
                size="sm" 
                asChild
                className="bg-pureWhite text-brandPrimary hover:bg-paperWhite hover:text-brandSecondary font-medium px-4 py-2 rounded-lg transition-all hover:scale-105 shadow-sm hover:shadow"
              >
                <Link to={`/${navData[navData.length - 1].path}`}>
                  {navData[navData.length - 1].title}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className={`h-${scrolled ? '12' : '14'}`}></div>

      {/* Overlay via portal */}
      {isMenuOpen &&
        createPortal(
          <div 
            className="fixed inset-0 z-40 md:hidden bg-deepCharcoal/60 backdrop-blur-sm" 
            onClick={closeMenu} 
          />,
          document.body
        )}

      {/* Mobile Menu Drawer */}
      {createPortal(
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-brandPrimary to-brandSecondary z-50 transform transition-transform duration-300 ease-in-out shadow-xl
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
        >
          {/* Mobile menu glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-pureWhite/10 to-transparent opacity-20 pointer-events-none"></div>
          
          <div className="relative p-6 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-lg font-bold text-pureWhite">
                Navigation
              </div>
              <button 
                onClick={closeMenu} 
                aria-label="Close menu"
                className="text-pureWhite hover:text-brandTertiary transition-colors p-2"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col space-y-4">
              {navData.map((nav) => (
                <li key={nav.id}>
                  <Link
                    to={`/${nav.path}`}
                    onClick={closeMenu}
                    className="text-pureWhite hover:text-brandTertiary transition-colors text-base font-medium py-3 px-4 rounded-lg hover:bg-pureWhite/10 flex items-center justify-between group"
                  >
                    {nav.title}
                    <span className="text-brandTertiary opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Theme Toggle */}
            <div className="mt-auto pt-8 border-t border-pureWhite/20">
              <button
                onClick={toggleSwitchTheme}
                className="w-full flex items-center justify-between text-pureWhite hover:text-brandTertiary transition-colors p-3 rounded-lg hover:bg-pureWhite/10"
              >
                <span className="font-medium">
                  {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </span>
                {isDarkMode ? (
                  <FiMoon className="w-4 h-4" />
                ) : (
                  <FiSun className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}