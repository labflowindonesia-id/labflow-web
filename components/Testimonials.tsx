import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-20 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            What our clients think of <span className="bg-clip-text text-transparent bg-gradient-to-r from-phunk-cyan to-phunk-blue">Phunk.</span>
          </h2>
          <p className="text-gray-400">
            We’re honest about our skills and abilities — and we’re delighted that our clients agree.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
            {TESTIMONIALS.slice(0, 2).map((t, idx) => (
              <div key={idx} className="bg-[#0a0a0a] p-8 rounded-2xl shadow-lg border border-white/10 hover:border-phunk-cyan/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-phunk-blue/20" />
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-phunk-cyan">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;