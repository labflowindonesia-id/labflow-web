import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-20 relative z-10 selection:bg-phunk-cyan selection:text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            <span className="text-phunk-cyan">LabFlow</span> <br />
            on 3 key aspects of laboratory.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === 2;

            return (
              <div
                key={index}
                className={`group relative bg-[#0a0a0a] border-2 border-white/10 rounded-3xl p-8 lg:p-12 shadow-md hover:shadow-2xl hover:shadow-phunk-cyan/10 transition-all duration-300 overflow-hidden flex flex-col ${isLast ? 'lg:flex-row items-center' : 'lg:flex-row items-stretch'}`}
              >
                {/* Text Section */}
                <div
                  className={`flex-1 flex flex-col justify-center z-20 ${!isEven && !isLast ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'
                    }`}
                >
                  <div className="text-6xl font-bold text-white/5 mb-4 group-hover:text-white/10 transition-colors">{service.number}</div>
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-phunk-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Image Section */}
                <div
                  className={`flex-1 relative rounded-2xl overflow-hidden min-h-[300px] bg-white/5 ${!isEven && !isLast ? 'lg:order-1' : ''
                    }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  {/* Fallback gradient/overlay just in case image fails or to blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors">
            Work with us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;