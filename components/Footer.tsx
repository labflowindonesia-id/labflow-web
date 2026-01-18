import React from 'react';
import { ASSETS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-phunk-dark text-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="w-32 text-white">
              {ASSETS.logo}
            </div>
            <p className="text-2xl font-bold leading-tight">
              Your brand, <br />
              built <span className="text-phunk-cyan">better</span>
            </p>
            <div className="text-sm text-gray-500">
              Company Number: 13426455
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-phunk-cyan transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-phunk-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-phunk-cyan transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-phunk-cyan transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-phunk-cyan transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-phunk-cyan transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-phunk-cyan transition-colors">Graphic Design</a></li>
              <li><a href="#" className="hover:text-phunk-cyan transition-colors">Software</a></li>
              <li><a href="#" className="hover:text-phunk-cyan transition-colors">Webflow</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <p className="text-gray-400 mb-4">
              Phunk Creative, Salts Mill, Victoria Rd, Saltaire, Shipley BD18 3LA
            </p>
            <ul className="space-y-4 text-gray-400">
              <li><a href="mailto:hello@phunk.co.uk" className="hover:text-phunk-cyan transition-colors">hello@phunk.co.uk</a></li>
              <li><a href="tel:+441133908188" className="hover:text-phunk-cyan transition-colors">+44 1133 908 188</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex gap-6 mb-4 md:mb-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
          <div>
            © {new Date().getFullYear()} Phunk Creative. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;