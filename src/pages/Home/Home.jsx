// Home.jsx
import React from 'react';
import HeroSection from '../../sections/Home/HeroSection';
import LatestBlogs from '../../sections/Home/LatestBlogs';
import AboutUs from '../../sections/Home/AboutUs';
import VisitClub from '../../sections/Home/VisitClub';
import Newsletter from '../../sections/Home/Newsletter';

// Landing Page with all sections combined

const Home = () => {
  return (
    <>
    {/* Hero Section – main tagline + CTA */}
    <HeroSection />

    {/* Latest Blogs Section – displays blog previews */}
    <LatestBlogs />

    {/* About Us Section – short description of the organization */}
    <AboutUs />

    {/* Visit Club Section – showcase visit/event highlight */}
    <VisitClub />

    {/* Newsletter Section – call-to-action to subscribe */}
    <Newsletter />
  </>
  );
};

export default Home;
