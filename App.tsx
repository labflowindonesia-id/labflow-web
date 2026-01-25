import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Work from './components/Work';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';

import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="antialiased text-white bg-[#050505] min-h-screen selection:bg-phunk-cyan selection:text-white">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigate} />
            <Intro />
            <Services />
            <WhyUs />
            <Work onNavigate={navigate} />
            <Brands />
            <Testimonials />
            <CTA onNavigate={navigate} />
          </>
        )}
        {currentPage === 'about' && (
          <>
            <About onNavigate={navigate} />
            <Brands />
            <CTA onNavigate={navigate} />
          </>
        )}

        {currentPage === 'contact' && (
          <>
            <ContactPage />
          </>
        )}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;