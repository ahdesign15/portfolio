import React from 'react';

const skillAreas = [
  {
    title: 'Product Design',
    description: 'End-to-end product design from research to high-fidelity prototypes'
  },
  {
    title: 'UX Research',
    description: 'User interviews, usability testing, and data-driven insights'
  },
  {
    title: 'Interaction & UI',
    description: 'Crafting intuitive interfaces with attention to micro-interactions'
  },
  {
    title: 'Prototyping',
    description: 'High-fidelity prototypes that bring ideas to life'
  },
  {
    title: 'Design Systems',
    description: 'Building scalable component libraries and documentation'
  },
  {
    title: 'Strategic Thinking',
    description: 'Aligning design decisions with business goals and user needs'
  }
];

export function Skills() {
  return (
    <section className="py-32 px-8 bg-gradient-to-b from-white via-[#fafaf8] to-white dark:from-[#0a0a0a] dark:via-[#0f0e0d] dark:to-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-5xl md:text-6xl text-black dark:text-white mb-16 text-center transition-colors duration-300">
          What I Do
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillAreas.map((skill, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-2xl text-black dark:text-white mb-3 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">
                {skill.title}
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 leading-relaxed transition-colors duration-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}