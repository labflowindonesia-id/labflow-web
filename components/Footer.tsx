import React from 'react';
import { ASSETS } from '../constants';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent, page: string, hash?: string) => {
    e.preventDefault();
    onNavigate(page);

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-black text-white pt-32 pb-10 overflow-hidden relative border-t border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -right-[10%] -top-[20%] text-[20vw] font-black text-phunk-blue/10 leading-none select-none blur-sm">
          FLOW
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-8">

          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5 space-y-4">
            <div className="w-32">
              <img
                src="/resources/labflow-logo.png"
                alt="LabFlow Indonesia - Laboratory Management Solutions"
                loading="lazy"
                width="128"
                height="40"
                className="w-full h-auto"
              />
            </div>
            <p className="text-2xl font-medium leading-relaxed text-slate-400 max-w-md">
              Your laboratory, <br />
              <span className="text-white">Orchestrated to Perfection.</span>
            </p>
            <div className="pt-2">
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className="group flex items-center gap-3 text-lg font-bold border-b-2 border-phunk-cyan pb-1 text-white hover:text-phunk-cyan transition-colors"
              >
                Let's Talk Projects
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          {/* Links Column - Company */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-lg mb-8 text-phunk-blue">Company</h4>
            <ul className="space-y-6 text-slate-400">
              <li><a href="/" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-white transition-colors block hover:translate-x-2 duration-300">Home</a></li>
              <li><a href="/about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors block hover:translate-x-2 duration-300">About Us</a></li>
              <li><a href="/#work" onClick={(e) => handleNavClick(e, 'home', 'work')} className="hover:text-white transition-colors block hover:translate-x-2 duration-300">Services</a></li>
              <li><a href="/contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors block hover:translate-x-2 duration-300">Contacts</a></li>
            </ul>
          </div>

          {/* Links Column - Services (Deep Links) */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-bold text-lg mb-8 text-phunk-cyan">LabFlow Ecosystem</h4>
            <ul className="space-y-6 text-slate-400">
              <li>
                <a
                  href="/#labflow-assets"
                  onClick={(e) => handleNavClick(e, 'home', 'labflow-assets')}
                  className="hover:text-white transition-colors block hover:translate-x-2 duration-300"
                >
                  LabFlow Assets
                </a>
              </li>
              <li>
                <a
                  href="/#ai-integrated-lims"
                  onClick={(e) => handleNavClick(e, 'home', 'ai-integrated-lims')}
                  className="hover:text-white transition-colors block hover:translate-x-2 duration-300"
                >
                  AI Integrated LIMS
                </a>
              </li>
              <li>
                <a
                  href="/#flo-ai-chatbot"
                  onClick={(e) => handleNavClick(e, 'home', 'flo-ai-chatbot')}
                  className="hover:text-white transition-colors block hover:translate-x-2 duration-300"
                >
                  Flo - AI Chatbot
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="font-bold text-lg mb-8 text-purple-400">Contact</h4>
            <ul className="space-y-6 text-slate-400">
              <li>
                <a href="mailto:farrel@labflow.my.id" className="hover:text-white transition-colors block group">
                  <span className="text-xs text-slate-600 block mb-1 font-mono">EMAIL</span>
                  farrel@labflow.my.id
                </a>
              </li>
              <li>
                <a href="tel:+6285641525681" className="hover:text-white transition-colors block group">
                  <span className="text-xs text-slate-600 block mb-1 font-mono">PHONE</span>
                  +62 856 4152 5681
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 font-medium">
          <div className="flex gap-8 mb-6 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} LabFlow Indonesia.</span>
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;