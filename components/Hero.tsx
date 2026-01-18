import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] pb-20">

      {/* Visual Content Container (Rounded Bottom) */}
      <div className="relative w-full h-full min-h-[90vh] bg-[#050505] rounded-b-[2rem] lg:rounded-b-[3rem] overflow-hidden">

        {/* Deep Space Background */}
        <div className="absolute inset-0 bg-[#050505]"></div>

        {/* Strong Bottom Glow (Horizon) */}
        <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-gradient-to-t from-[#00E5D1]/20 via-[#25ADF9]/10 to-transparent opacity-100"></div>

        {/* Concentric Glow Effect */}
        <div className="absolute bottom-[-50vw] left-1/2 transform -translate-x-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle_at_center,rgba(0,229,209,0.15)_0%,transparent_60%)] rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div
          className="absolute bottom-0 w-full h-[80vh] opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(37, 173, 249, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 173, 249, 0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
            transform: 'perspective(1000px) rotateX(60deg) translateY(0) scale(1.5)',
            transformOrigin: 'bottom center'
          }}
        ></div>

        {/* Stars */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: Math.random() < 0.3 ? 3 : Math.random() < 0.6 ? 2 : 1,
                height: Math.random() < 0.3 ? 3 : Math.random() < 0.6 ? 2 : 1,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
                y: [0, -40, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content Wrapper inside the rounded container */}
        <div className="relative z-10 pt-32 lg:pt-48 pb-48 px-6 lg:px-12 text-center flex flex-col items-center max-w-[1440px] mx-auto">
          {/* Intro Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full pl-1 pr-4 py-1 mb-10 overflow-hidden"
          >
            <span className="bg-phunk-cyan text-[#050505] text-xs font-bold px-2 py-0.5 rounded-full">NEW</span>
            <span className="text-gray-300 font-medium text-sm tracking-wide">Introducing Phunk Creative</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.1] font-bold tracking-tight text-white mb-6"
          >
            <span className="text-phunk-blue inline-block relative">
              Flow
              {/* Subtle glow behind text */}
              <span className="absolute inset-0 blur-2xl bg-phunk-blue/30 -z-10"></span>
            </span> your laboratory
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
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
              <span className="relative z-10">Launch a project</span>
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;