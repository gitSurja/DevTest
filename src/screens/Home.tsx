import { Box, Container } from '@mui/material';
import React from 'react';
import HeroSection from './Home/HeroSection';
import FeaturedProjects from './Home/FeaturedProjects';
import PropertyListing from './Home/PropertyListingSection';



function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <PropertyListing />
    </>
  );
}

export default Home;