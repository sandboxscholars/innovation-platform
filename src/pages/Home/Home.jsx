// Home.jsx
import React from 'react';
import HeroSection from '../../sections/Home/HeroSection';
import LatestBlogs from '../../sections/Home/LatestBlogs';
import AboutUs from '../../sections/Home/AboutUs';
import VisitClub from '../../sections/Home/VisitClub';
import Newsletter from '../../sections/Home/Newsletter';
import KeyPoints from '@/sections/Home/KeyPoints';

// Landing Page with all sections combined

const Home = () => {
  return (
    <div className='bg-[var(--background-color)]'>
    {/* Hero Section – main tagline + CTA */}
    <HeroSection />

    {/* Hero Section – main tagline + CTA */}
    <KeyPoints/>

    {/* Latest Blogs Section – displays blog previews */}
    <LatestBlogs />

    {/* About Us Section – short description of the organization */}
    <AboutUs />

    {/* Visit Club Section – showcase visit/event highlight */}
    <VisitClub />

    {/* Newsletter Section – call-to-action to subscribe */}
    <Newsletter />
  </div>
  );
};

export default Home;
