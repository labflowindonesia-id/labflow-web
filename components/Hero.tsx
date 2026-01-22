import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants';

// Pre-generate star data to avoid Math.random() in render
const generateStars = () => {
  return [...Array(30)].map((_, i) => {
    const sizeRandom = Math.random();
    const size = sizeRandom < 0.3 ? 3 : sizeRandom < 0.6 ? 2 : 1;
    return {
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    };
  });
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] pb-20 font-turnkey">

      {/* Visual Content Container (Rounded Bottom) */}
      <div className="relative w-full h-full min-h-[90vh] bg-[#050505] rounded-b-[2rem] lg:rounded-b-[3rem] overflow-hidden">

        {/* Background Image - Mockup */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroBg}
            alt="LabFlow Hero Background"
            className="w-full h-full object-cover object-center lg:scale-105"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:via-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80"></div>
        </div>

        {/* Moving Glow Effect */}
        <motion.div
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-phunk-blue/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-phunk-cyan/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Content Wrapper inside the rounded container */}
        <div className="relative z-20 pt-24 lg:pt-32 pb-48 px-6 lg:px-12 flex flex-col items-start text-left max-w-[1440px] mx-auto">
          {/* Intro Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full pl-1 pr-4 py-1 mb-10 overflow-hidden"
          >
            <span className="bg-phunk-cyan text-[#050505] text-xs font-bold px-2 py-0.5 rounded-full">NEW</span>
            <span className="text-gray-300 font-medium text-sm tracking-wide">Introducing LabFlow</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.1] font-bold tracking-tight text-white mb-6 max-w-4xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-phunk-cyan to-phunk-blue inline-block relative">
              Flow
              {/* Subtle glow behind text */}
              <span className="absolute inset-0 blur-2xl bg-phunk-blue/30 -z-10"></span>
            </span> your Laboratory
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-xl mb-12 leading-relaxed"
          >
            We automate, optimize, and accelerate process flows within your laboratory using a foundation of Automation, AI Agents, or Agentic AI.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <a href="#" className="group relative inline-flex items-center justify-center bg-phunk-blue text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:bg-phunk-cyan shadow-[0_0_20px_rgba(37,173,249,0.4)] hover:shadow-[0_0_40px_rgba(0,229,209,0.6)]">
              <span className="relative z-10">Let's Flow!</span>
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;