import React from 'react';
import { BRANDS } from '../constants';

const Brands: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by leading <span className="bg-clip-text text-transparent bg-gradient-to-r from-phunk-cyan to-phunk-blue">brands.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We’re proud to have worked with some of the most innovative, creative and inventive brands around.
          </p>
        </div>

        <div className="flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
          <img
            src="/resources/labmania-logo.png"
            alt="LabMania"
            className="max-h-16 md:max-h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 brightness-0 invert hover:invert-0 hover:brightness-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;