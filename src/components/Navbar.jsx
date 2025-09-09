import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { createPortal } from 'react-dom';

// Navbar Component
// - Fixed top navigation bar
// - Links: Blogs, SAT, About Us, Join Us, NCTB, Study Abroad
// Change the code as required

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Top bar */}
      <nav className="sticky top-0 z-50 h-14 md:h-16 bg-warmGray border-b border-gray-400 top-0 w-full shadow-md z-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
          {/* Hamburger Menu */}
          <div className="flex items-center gap-4">
            <button onClick={toggleMenu} className="md:hidden" aria-label="Open menu">
              <FaBars className="h-6 w-6" />
            </button>
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">
              <Link to="/" className="hover:text-brandSecondary">Logo</Link>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-6 flex-1 justify-center">
            <li><Link to="/" className="text-deepGray hover:text-brandSecondary transition">Home</Link></li>
            <li><Link to="/about" className="text-deepGray hover:text-brandSecondary transition">About</Link></li>
            <li><Link to="/projects" className="text-deepGray hover:text-brandSecondary transition">Projects</Link></li>
            <li><Link to="/blogs" className="text-deepGray hover:text-brandSecondary transition">Blogs</Link></li>
            <li><Link to="/contact" className="text-deepGray hover:text-brandSecondary transition">Contact</Link></li>
          </ul>

          {/* Search Input*/}
          <form
            className="ml-auto flex items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
            role="search"
          >
            <div className="flex items-center border border-gray-600 rounded-md px-2 h-9">
              <FaSearch className="mr-2" />
              <input
                type="search"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-28 sm:w-40 md:w-40"
              />
            </div>
          </form>
        </div>
      </nav>

      {/* Overlay via portal */}
      {isMenuOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={closeMenu}
          />,
          document.body
        )
      }

      {/* LEFT drawer(Mobile menu) via portal */}
      {createPortal(
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-warmGray z-50 transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden shadow-lg`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-end mb-4">
              <button onClick={closeMenu} aria-label="Close menu">
                <FaTimes className="h-6 w-6 text-gray-600 hover:text-pureBlack" />
              </button>
            </div>

            {/* search inside Mobile Menu */}
            <form className="mb-6" onSubmit={(e) => e.preventDefault()} role="search">
              <div className="flex items-center border border-gray-600 rounded-md px-2 h-10">
                <FaSearch className="mr-2" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
            </form>

            {/* Drawer links */}
            <ul className="flex flex-col gap-6">
              <li><Link to="/" onClick={closeMenu} className="text-deepGray hover:text-brandSecondary text-lg">Home</Link></li>
              <li><Link to="/about" onClick={closeMenu} className="text-deepGray hover:text-brandSecondary text-lg">About</Link></li>
              <li><Link to="/projects" onClick={closeMenu} className="text-deepGray hover:text-brandSecondary text-lg">Projects</Link></li>
              <li><Link to="/blogs" onClick={closeMenu} className="text-deepGray hover:text-brandSecondary text-lg">Blogs</Link></li>
              <li><Link to="/contact" onClick={closeMenu} className="text-deepGray hover:text-brandSecondary text-lg">Contact</Link></li>
            </ul>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
