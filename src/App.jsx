import { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';

// Page Layout
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
    </div>
  );
}

export default function App() {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </main>
  );
}
