import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../constants';

const REASONS = [
  {
    title: "Adaptability",
    text: `Forget rigid systems that force you to change SOPs. Our AI agents are designed to adapt to your unique workflow. We automate repetitive tasks and integrate instruments without disrupting the existing work rhythm.`,
    image: "/resources/flo-love.png"
  },
  {
    title: "Expertise",
    text: `We are not just software developers; we are laboratory practitioners. By combining technical testing experience and deep understanding of ISO standards, we build solutions that truly understand your laboratory's "language".`,
    image: "/resources/flo-trophy.png"
  },
  {
    title: "Efficiency",
    text: `Your peace of mind is our priority. LabFlow is built on an audit-readiness foundation, ensuring every data point is tracked, validated, and secure. We turn dizzying audit preparation into a transparent automated process.`,
    image: "/resources/flo-happy.png"
  }
];

const WhyUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % REASONS.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + REASONS.length) % REASONS.length);

  return (
    <section className="py-12 relative overflow-hidden z-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Navigation Header - Optional per design but good for spacing */}
        <div className="flex justify-between items-end mb-12">
          <div></div>
          {/* Use this space if we want top-level controls, but design has them in card */}
        </div>

        <div className="relative bg-[#050505] border-2 border-white/20 rounded-[2.5rem] p-8 lg:p-10 min-h-[400px] flex items-center overflow-hidden">

          {/* Custom Grid & Glow Effect */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Blue Gradient Glow at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#25ADF9] via-[#25ADF9]/20 to-transparent opacity-80"></div>

            {/* Grid Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                        `,
                backgroundSize: '50px 50px',
                maskImage: 'linear-gradient(to bottom, transparent, black 40%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%)'
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-4xl md:text-6xl font-bold mb-8 text-white">{REASONS[activeIndex].title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 min-h-[120px]">
                    {REASONS[activeIndex].text}
                  </p>
                </motion.div>
              </AnimatePresence>

              <a href="#" className="inline-flex items-center justify-center bg-gradient-to-r from-[#25ADF9] to-[#00E5D1] text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,173,249,0.5)]">
                Learn more
              </a>
            </div>

            <div className="flex justify-center items-center relative h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={REASONS[activeIndex].image}
                  alt={REASONS[activeIndex].title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="max-h-[100%] max-w-full object-contain drop-shadow-[0_0_30px_rgba(37,173,249,0.3)]"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute top-8 right-8 lg:top-12 lg:right-12 flex gap-3 z-20">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all border border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all border border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;