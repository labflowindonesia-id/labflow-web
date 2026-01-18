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
import ServicesPage from './components/ServicesPage';
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
            <Hero />
            <Intro />
            <Services />
            <WhyUs />
            <Work />
            <Brands />
            <Testimonials />
            <CTA />
          </>
        )}
        {currentPage === 'about' && (
          <>
            <About />
            <Brands />
            <CTA />
          </>
        )}
        {currentPage === 'services' && (
          <>
            <ServicesPage />
          </>
        )}
        {currentPage === 'contact' && (
          <>
            <ContactPage />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;