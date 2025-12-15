import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="bg-light">
        <Features />
      </div>
    </>
  );
};

export default HomePage;
