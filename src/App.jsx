

import { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css';

import { ThemeProvider } from "./context/ThemeContext.jsx";

import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';

import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Projects from './pages/Projects/projects';
import JoinUs from './pages/JoinUs/joinUs';
import SubmitArticles from './pages/SubmitArticles/submitArticles';
import Team from './pages/team/team'

//  IMPORT AS MUCH AS NECESSARY
import ContentTemplate from './pages/Content/AAAtemplate';




//- Global wrapper/Layout for all pages
// - Always displays the Navbar at the top and Footer at the bottom for all pages
// - Uses <Outlet/> from React Router to render the current page content
// - Handles sidebar/mobile menu by shifting both Navbar and content when menu is open

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
        <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
        {/* Navbar shifts right when menu is open */}
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-64' : 'translate-x-0'
          }`}
        >
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/* Page content also shifts right */}
        <div
          className={`flex-1 overflow-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-64' : 'translate-x-0'
          }`}
        >
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
        </div>
    
  );
}

// - Root component of the app
// - Sets up client-side routing with React Router
// - Wraps all routes inside the Layout (so Navbar and Footer is always shown)
// - Currently only has Home.jsx at "/" route
// - Can be expanded with more routes (Blogs, Clubs, About Us, etc.)

export default function App() {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/submit-articles" element={<SubmitArticles />} />
          <Route path="/team" element={<Team />} />
          <Route path="/content-template-private" element={<ContentTemplate />} />
          {/* Add more routes as needed(More Pages e.g. Blogs, Clubs, About Us etc) */}
        </Route>
      </Routes>
    </main>
  );
}
