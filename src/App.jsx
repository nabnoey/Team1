import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="bg-light">
          <Features />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
