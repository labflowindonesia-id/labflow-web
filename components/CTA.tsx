import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants';

interface CTAProps {
  onNavigate: (page: string) => void;
}

const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 lg:py-32 px-4 flex justify-center items-center bg-[#050505]">

      {/* Main Card Container */}
      <div className="relative w-[95%] max-w-[1600px] bg-[#050505] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl min-h-[500px] flex flex-col justify-center items-center text-center">

        {/* --- Background Effects --- */}

        {/* Deep Space Background */}
        <div className="absolute inset-0 bg-[#050505]"></div>

        {/* Horizon Gradient (Blue Bottom) */}
        <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-[#25ADF9]/80 via-[#25ADF9]/10 to-transparent"></div>

        {/* Concentric Glow (Center Bottom) */}
        <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(0,229,209,0.2)_0%,transparent_70%)] blur-3xl"></div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
          }}
        ></div>

        {/* --- Content --- */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto -mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Let's get to <span className="text-phunk-blue">work.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              We’re ready to get started on your laboratory transformation. Let's hit the button below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="inline-flex items-center justify-center bg-white text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Talk to us
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CTA;