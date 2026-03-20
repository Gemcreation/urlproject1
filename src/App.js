import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UrlShortener from './components/UrlShortener';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      {/* Container holding the overlapped UI part from the design */}
      <div className="main-content" style={{ backgroundColor: '#f0f1f6', marginTop: '120px' }}>
        <UrlShortener />
        <Statistics />
      </div>
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
