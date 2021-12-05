import React from 'react';
import Banner from './Banner';
import CarSection from './CarSection';
import Features from './Features';
import Navigration from '../Shared/Navigration';
import Footer from '../Shared/Footer';
import ReviewSection from './ReviewSection';

const Home = () => {
   return (
      <>
         <Navigration />
         <Banner />
         <Features />
         <CarSection />
         <ReviewSection />
         <Footer />
      </>
   );
};

export default Home;