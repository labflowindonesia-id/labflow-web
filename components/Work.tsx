import React from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="bg-phunk-dark py-20 lg:py-32 text-white relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Dive into the <span className="gradient-text">work.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We understand that every lab is unique. Our mission is to provide flexible, high-performance solutions that adapt to your specific needs, ensuring compliance while boosting productivity.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {PROJECTS.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
              <div className={`${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className={`${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="border border-white/20 px-3 py-1 rounded-full text-xs md:text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                <a href={project.link} className="inline-flex items-center gap-2 text-white border-b border-phunk-cyan pb-1 hover:text-phunk-cyan transition-colors">
                  See full case study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
