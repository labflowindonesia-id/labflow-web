import React from 'react';
import { ASSETS } from '../constants';
import { motion } from 'framer-motion';

const Intro: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">

      {/* Side Blue Glow */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[500px] h-[500px] bg-phunk-cyan/20 blur-3xl rounded-full -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-1 leading-tight text-white">
              We’re <span className="bg-clip-text text-transparent bg-gradient-to-r from-phunk-cyan to-phunk-blue">Flo.</span> <br />
            </h2>
            <h4 className="text-2xl md:text-3xl font-bold mb-8 leading-tight text-white">Your Laboratory Assistant.</h4>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Flo won’t replace your team. Flo strengthens your team—by reducing repetitive work and helping users find information instantly.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Flo is a helpful robot that lives inside your system as a chat-based AI assistant—flexible and customizable to your lab’s needs
            </p>
            <a href="#" className="inline-flex items-center justify-center bg-phunk-blue text-white px-8 py-4 rounded-full font-medium hover:bg-phunk-cyan transition-colors shadow-[0_0_20px_rgba(37,173,249,0.3)] hover:shadow-[0_0_30px_rgba(0,229,209,0.5)]">
              Hire Flo
            </a>
          </div>
          <div className="order-1 lg:order-2 relative flex justify-center perspective-1000">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

              {/* Back Grid Effect */}
              <div
                className="absolute inset-0 z-0 opacity-30 rounded-full overflow-hidden"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(0, 229, 209, 0.5) 1px, transparent 1px), 
                    linear-gradient(to bottom, rgba(0, 229, 209, 0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                }}
              ></div>

              {/* Stronger Blue Glow - Optimized */}
              <div className="absolute inset-0 bg-gradient-to-tr from-phunk-cyan/30 to-phunk-blue/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-phunk-blue/5 blur-3xl -z-10"></div>

              {/* Floating Robot */}
              <motion.img
                src={ASSETS.robot}
                alt="Phunk Robot"
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(37,173,249,0.4)]"
                animate={{
                  y: [-25, 25, -25],
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;